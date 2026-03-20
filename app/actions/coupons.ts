"use server";

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function createCoupon(data: {
  code: string;
  discountType: "PERCENTAGE" | "FIXED_AMOUNT";
  discountValue: number;
  expiresAt?: string;
  usageLimit?: number;
}) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    throw new Error("UNAUTHORIZED_ACCESS");
  }

  return await prisma.coupon.create({
    data: {
      code: data.code.toUpperCase(),
      discountType: data.discountType,
      discountValue: data.discountValue,
      expiresAt: data.expiresAt ? new Date(data.expiresAt) : null,
      usageLimit: data.usageLimit,
    },
  });
}

export async function validateCoupon(code: string) {
  const coupon = await prisma.coupon.findUnique({
    where: { code: code.toUpperCase() },
  });

  if (!coupon) {
    return { success: false, error: "COUPON_NOT_FOUND" };
  }

  if (!coupon.isActive) {
    return { success: false, error: "COUPON_INACTIVE" };
  }

  if (coupon.expiresAt && new Date() > coupon.expiresAt) {
    return { success: false, error: "COUPON_EXPIRED" };
  }

  if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
    return { success: false, error: "USAGE_LIMIT_REACHED" };
  }

  return { 
    success: true, 
    coupon: {
      id: coupon.id,
      code: coupon.code,
      discountType: coupon.discountType,
      discountValue: coupon.discountValue
    }
  };
}
export async function getCoupons() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    throw new Error("UNAUTHORIZED_ACCESS");
  }

  return await prisma.coupon.findMany({
    orderBy: { createdAt: "desc" },
  });
}
