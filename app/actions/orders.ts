"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function createOrder(data: {
  items: { artifactId: string; title: string; quantity: number; price: number }[];
  totalAmount: number;
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return { success: false, error: "AUTH_REQUIRED" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) return { success: false, error: "USER_NOT_FOUND" };

    // Create the order and items in a transaction
    const order = await prisma.$transaction(async (tx) => {
      const newOrder = await tx.order.create({
        data: {
          userId: user.id,
          totalAmount: data.totalAmount,
          status: "PENDING",
          items: {
            create: data.items.map(item => ({
              artifactId: item.artifactId,
              title: item.title,
              quantity: item.quantity,
              price: item.price,
            }))
          },
          timeline: {
            create: {
              status: "PENDING",
              note: "ACQUISITION_PROTOCOL_INITIALIZED"
            }
          }
        }
      });

      // Also save the address if it's the first time or update?
      // For now, just save to user addresses if not already there
      await tx.address.create({
        data: {
          userId: user.id,
          line1: data.shippingAddress.line1,
          line2: data.shippingAddress.line2,
          city: data.shippingAddress.city,
          state: data.shippingAddress.state,
          postalCode: data.shippingAddress.postalCode,
          country: data.shippingAddress.country,
        }
      });

      return newOrder;
    });

    revalidatePath("/account");
    return { success: true, orderId: order.id };
  } catch (error) {
    console.error("Order completion failed:", error);
    return { success: false, error: "TRANSACTION_FAILURE" };
  }
}

export async function updateOrderStatus(orderId: string, status: string, note?: string) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return { success: false, error: "UNAUTHORIZED_ACCESS" };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.order.update({
        where: { id: orderId },
        data: { status: status as any }
      });

      await tx.orderTimeline.create({
        data: {
          orderId,
          status: status as any,
          note: note || `STATUS_TRANSITION: ${status}`
        }
      });
    });

    revalidatePath("/admin/orders");
    revalidatePath("/account");
    // Also revalidate the specific order detail page
    revalidatePath(`/account/orders/${orderId}`);
    
    return { success: true };
  } catch (error) {
    console.error("Status update failed:", error);
    return { success: false, error: "PROTOCOL_ERROR" };
  }
}
