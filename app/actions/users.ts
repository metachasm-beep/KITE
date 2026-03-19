"use server";

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function updateUserRole(userId: string, role: string) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return { success: false, error: "UNAUTHORIZED" };
  }

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { role: role as any }
    });
    revalidatePath("/admin/users");
    return { success: true };
  } catch (error) {
    console.error("Role update failure:", error);
    return { success: false, error: "DB_ERROR" };
  }
}
