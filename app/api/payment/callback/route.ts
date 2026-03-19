import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { phonePeClient } from "@/lib/phonepe";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    // PhonePe usually sends code and merchantTransactionId
    const code = formData.get("code");
    const merchantTransactionId = formData.get("merchantTransactionId") as string;

    if (!merchantTransactionId || !phonePeClient) {
      return NextResponse.json({ error: "INVALID_CALLBACK_HANDSHAKE" }, { status: 400 });
    }

    // Verify status with PhonePe
    const statusRes = await phonePeClient.standardCheckout().checkStatus(merchantTransactionId);
    
    const order = await prisma.order.findUnique({
      where: { merchantTransactionId },
    });

    if (!order) {
      return NextResponse.json({ error: "ORDER_NOT_FOUND" }, { status: 404 });
    }

    if (statusRes.status === 200 && statusRes.data?.state === "COMPLETED") {
      // Update order to PROCESSING and payment to COMPLETED
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
      // Update payment to FAILED
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

// Fallback for cases where PhonePe might use GET for browser redirect
export async function GET(request: Request) {
  // Usually the browser redirect is just a landing, we should re-verify if possible
  const { searchParams } = new URL(request.url);
  const merchantTransactionId = searchParams.get("id");

  if (!merchantTransactionId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const order = await prisma.order.findUnique({
    where: { merchantTransactionId },
  });

  if (!order) {
    return NextResponse.json({ error: "ACQUISITION_NOT_FOUND" }, { status: 404 });
  }

  // Redirect to order page - if payment is still pending, the status checking should happen there too or wait for webhook
  return NextResponse.redirect(new URL(`/account/orders/${order.id}`, request.url));
}
