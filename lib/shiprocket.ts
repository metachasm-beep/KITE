import { getValidShiprocketToken } from "./shiprocket-auth";

const SHIPROCKET_API_BASE = "https://apiv2.shiprocket.in/v1/external";

export interface ShiprocketOrderItem {
  sku: string;
  name: string;
  units: number;
  selling_price: number;
  discount?: number;
  tax?: number;
  hsn?: string;
}

export interface ShiprocketOrderPayload {
  order_id: string;
  order_date: string; // YYYY-MM-DD HH:mm
  pickup_location: string;
  billing_customer_name: string;
  billing_last_name: string;
  billing_address: string;
  billing_address_2?: string;
  billing_city: string;
  billing_pincode: string;
  billing_state: string;
  billing_country: string;
  billing_email: string;
  billing_phone: string;
  shipping_is_billing: boolean;
  order_items: ShiprocketOrderItem[];
  payment_method: "Prepaid" | "Postpaid";
  sub_total: number;
  length: number; // in cm
  breadth: number; // in cm
  height: number; // in cm
  weight: number; // in kg
}

async function shiprocketFetch(endpoint: string, options: RequestInit = {}) {
  const token = await getValidShiprocketToken();
  
  const response = await fetch(`${SHIPROCKET_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Shiprocket API Error (${endpoint}): ${errorData.message || response.statusText}`);
  }

  return await response.json();
}

/**
 * Creates an adhoc order in Shiprocket.
 * Returns the shiprocket order_id and shipment_id.
 */
export async function createShiprocketOrder(payload: ShiprocketOrderPayload) {
  const data = await shiprocketFetch("/orders/create/adhoc", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  
  return {
    shiprocketOrderId: data.order_id.toString(),
    shipmentId: data.shipment_id.toString(),
  };
}

/**
 * Generates an AWB for a given shipment.
 * Returns the awb_code and courier_name.
 */
export async function generateShiprocketAWB(shipmentId: string) {
  const data = await shiprocketFetch("/courier/assign/awb", {
    method: "POST",
    body: JSON.stringify({ shipment_id: shipmentId }),
  });

  if (data.status !== 1) {
    throw new Error(`AWB Generation Failed: ${data.response?.data?.awb_assign_error || "Unknown Error"}`);
  }

  return {
    awbCode: data.response.data.awb_code,
    courierName: data.response.data.courier_name,
  };
}

/**
 * Requests a pickup for the given shipment.
 */
export async function requestShiprocketPickup(shipmentId: string) {
  const data = await shiprocketFetch("/courier/generate/pickup", {
    method: "POST",
    body: JSON.stringify({ shipment_id: [shipmentId] }),
  });

  return data;
}
