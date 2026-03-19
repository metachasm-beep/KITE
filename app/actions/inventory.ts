"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function createArtifact(data: {
  slug: string;
  title: string;
  series: string;
  description: string;
  price: string;
  status: string;
  specs: { label: string; value: string }[];
}) {
  try {
    const artifact = await prisma.artifact.create({
      data: {
        slug: data.slug,
        title: data.title,
        series: data.series,
        description: data.description,
        price: data.price,
        status: data.status,
        specs: {
          create: data.specs,
        },
      },
    });

    revalidatePath("/admin/inventory");
    revalidatePath("/collections");
    return { success: true, artifact };
  } catch (error) {
    console.error("Failed to create artifact:", error);
    return { success: false, error: "Failed to create artifact" };
  }
}

export async function deleteArtifact(id: string) {
  try {
    await prisma.artifact.delete({
      where: { id },
    });
    revalidatePath("/admin/inventory");
    revalidatePath("/collections");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete artifact" };
  }
}

export async function toggleArtifactStatus(id: string, currentStatus: string) {
  try {
    const newStatus = currentStatus === "DE-FRAGMENTED" ? "LOCALIZED" : "DE-FRAGMENTED";
    await prisma.artifact.update({
      where: { id },
      data: { status: newStatus },
    });
    revalidatePath("/admin/inventory");
    revalidatePath("/collections");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to toggle status" };
  }
}
