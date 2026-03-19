import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Shiprocket Webhook Handler
// Tracking notifications for order lifecycle updates
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log("[Shiprocket Webhook] Received Payload:", JSON.stringify(payload));

    const { shipment_id, current_status, current_timestamp, awb } = payload;

    if (!shipment_id) {
       return NextResponse.json({ error: "MISSING_SHIPMENT_ID" }, { status: 400 });
    }

    // Find corresponding order in Postgres
    // Note: shipment_id in payload could be numeric or string, we'll try to find both
    const order = await prisma.order.findUnique({
      where: { shipmentId: shipment_id.toString() },
    });

    if (!order) {
       console.warn(`[Shiprocket Webhook] Order with shipmentId ${shipment_id} not found.`);
       return NextResponse.json({ success: true, message: "OK_BUT_ORDER_MISSING" });
    }

    // Map Shiprocket status to internal OrderStatus if needed, or just update trackingStatus
    // Internal statuses: PENDING, PROCESSING, SHIPPED, DELIVERED, CANCELLED
    let internalStatus = order.status;
    const statusLower = current_status?.toLowerCase();

    if (statusLower.includes("delivered")) {
       internalStatus = "DELIVERED";
    } else if (statusLower.includes("shipped") || statusLower.includes("in transit") || statusLower.includes("out for delivery")) {
       internalStatus = "SHIPPED";
    } else if (statusLower.includes("cancelled")) {
       internalStatus = "CANCELLED";
    }

    await prisma.$transaction(async (tx) => {
       await tx.order.update({
          where: { id: order.id },
          data: {
             status: internalStatus,
             trackingStatus: current_status,
          }
       });

       await tx.orderTimeline.create({
          data: {
             orderId: order.id,
             status: internalStatus,
             note: `TELEMETRY_SYNC: ${current_status} // AWB: ${awb || order.awbCode}${current_timestamp ? ` // TIME: ${current_timestamp}` : ""}`,
          }
       });
    });

    console.log(`[Shiprocket Webhook] Updated Order ${order.id} status to ${internalStatus} (${current_status})`);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("[Shiprocket Webhook] Processing Failed:", error);
    return NextResponse.json({ error: "WEBHOOK_EVENT_FAILURE" }, { status: 500 });
  }
}
