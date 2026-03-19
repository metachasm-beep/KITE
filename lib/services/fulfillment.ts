import { prisma } from "../db";
import { 
  createShiprocketOrder, 
  generateShiprocketAWB, 
  requestShiprocketPickup,
  ShiprocketOrderPayload,
  ShiprocketOrderItem 
} from "../shiprocket";

/**
 * Orchestrates the full Shiprocket fulfillment lifecycle for an order.
 * 1. Create Shiprocket Order
 * 2. Generate AWB
 * 3. Request Pickup
 * 4. Update Database
 */
export async function processOrderFulfillment(orderId: string) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: true,
        user: true,
      },
    });

    if (!order) {
      throw new Error(`Order ${orderId} not found.`);
    }

    // Prepare Billing/Shipping data from the snapshot or user
    const address = order.shippingAddress as any;
    if (!address) {
       throw new Error(`Order ${orderId} is missing shipping address snapshot.`);
    }

    // Prepare items for Shiprocket
    const orderItems: ShiprocketOrderItem[] = order.items.map(item => ({
      sku: item.artifactId, // Using artifactId as SKU
      name: item.title,
      units: item.quantity,
      selling_price: item.price,
    }));

    const payload: ShiprocketOrderPayload = {
      order_id: order.id,
      order_date: new Date(order.createdAt).toISOString().slice(0, 16).replace('T', ' '),
      pickup_location: "Primary", // Must match your Shiprocket dashboard settings
      billing_customer_name: order.user.name?.split(' ')[0] || "Customer",
      billing_last_name: order.user.name?.split(' ').slice(1).join(' ') || "User",
      billing_address: address.line1,
      billing_address_2: address.line2 || "",
      billing_city: address.city,
      billing_pincode: address.postalCode,
      billing_state: address.state,
      billing_country: address.country || "India",
      billing_email: order.user.email || "",
      billing_phone: address.phone || "",
      shipping_is_billing: true,
      order_items: orderItems,
      payment_method: order.paymentMethod === "PHONEPE" ? "Prepaid" : "Postpaid",
      sub_total: order.totalAmount,
      // Default dimensions and weight (approximate for UNIT_01 artifacts)
      length: 15,
      breadth: 15,
      height: 10,
      weight: 0.5, // 500g
    };

    console.log(`[Fulfillment] Creating Shiprocket order for: ${orderId}`);
    const { shiprocketOrderId, shipmentId } = await createShiprocketOrder(payload);

    console.log(`[Fulfillment] Generated Shiprocket Order: ${shiprocketOrderId}, Shipment: ${shipmentId}`);
    
    // Save IDs immediately
    await prisma.order.update({
      where: { id: orderId },
      data: {
        shiprocketOrderId,
        shipmentId,
        status: "PROCESSING",
      },
    });

    console.log(`[Fulfillment] Generating AWB for shipment: ${shipmentId}`);
    const { awbCode, courierName } = await generateShiprocketAWB(shipmentId);

    console.log(`[Fulfillment] AWB Generated: ${awbCode} (${courierName})`);

    await prisma.order.update({
      where: { id: orderId },
      data: {
        awbCode,
        courierName,
        trackingStatus: "AWB_ASSIGNED",
      },
    });

    console.log(`[Fulfillment] Requesting pickup for shipment: ${shipmentId}`);
    await requestShiprocketPickup(shipmentId);

    await prisma.order.update({
      where: { id: orderId },
      data: {
        trackingStatus: "PICKUP_SCHEDULED",
      },
    });

    await prisma.orderTimeline.create({
      data: {
        orderId,
        status: "PROCESSING",
        note: `FULFILLMENT_PROTOCOL_LOCKED // AWB: ${awbCode} // COURIER: ${courierName}`,
      },
    });

    return { success: true, awbCode, courierName };

  } catch (error: any) {
    console.error(`[Fulfillment Error] Order ${orderId}:`, error);
    
    await prisma.orderTimeline.create({
      data: {
        orderId,
        status: "PENDING",
        note: `FULFILLMENT_PROTOCOL_FAILURE: ${error.message}`,
      },
    });

    throw error;
  }
}
