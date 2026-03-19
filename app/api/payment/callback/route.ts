import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { phonePeClient } from "@/lib/phonepe";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    // In v2, the identifier is usually merchantOrderId or merchantTransactionId in the POST body
    // We'll check both for resilience
    const identifier = (formData.get("merchantOrderId") || formData.get("merchantTransactionId")) as string;

    if (!identifier || !phonePeClient) {
      return NextResponse.json({ error: "INVALID_CALLBACK_HANDSHAKE" }, { status: 400 });
    }

    // Verify status using the identifier
    const statusRes = await phonePeClient.getOrderStatus(identifier);
    
    // In our DB, it's stored under merchantTransactionId
    const order = await prisma.order.findUnique({
      where: { merchantTransactionId: identifier },
    });

    if (!order) {
      return NextResponse.json({ error: "ORDER_NOT_FOUND" }, { status: 404 });
    }

    if (statusRes && (statusRes as any).data?.state === "COMPLETED") {
      await prisma.$transaction(async (tx) => {
        await tx.order.update({
          where: { id: order.id },
          data: { 
            status: "PROCESSING",
            paymentStatus: "COMPLETED" 
          }
        });

        await tx.orderTimeline.create({
          data: {
            orderId: order.id,
            status: "PROCESSING",
            note: "SETTLEMENT_HANDSHAKE_SUCCESS // ACQUISITION_PROTOCOL_LOCKED"
          }
        });
      });
      
      return NextResponse.redirect(new URL(`/account/orders/${order.id}`, request.url));
    } else {
      await prisma.$transaction(async (tx) => {
        await tx.order.update({
          where: { id: order.id },
          data: { paymentStatus: "FAILED" }
        });

        await tx.orderTimeline.create({
          data: {
            orderId: order.id,
            status: "PENDING",
            note: "SETTLEMENT_HANDSHAKE_FAILURE // RETRY_PROTOCOL_REQUIRED"
          }
        });
      });

      return NextResponse.redirect(new URL(`/checkout?error=SETTLEMENT_FAILED`, request.url));
    }
  } catch (error) {
    console.error("PHONEPE_CALLBACK_ERROR:", error);
    return NextResponse.json({ error: "INTERNAL_TRANSMISSION_ERROR" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const identifier = searchParams.get("id") || searchParams.get("merchantOrderId");

  if (!identifier) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const order = await prisma.order.findUnique({
    where: { merchantTransactionId: identifier },
  });

  if (!order) {
    return NextResponse.json({ error: "ACQUISITION_NOT_FOUND" }, { status: 404 });
  }

  return NextResponse.redirect(new URL(`/account/orders/${order.id}`, request.url));
}
