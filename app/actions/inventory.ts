"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { supabase } from "@/lib/supabase";

export async function uploadArtifactImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "MISSING_ASSET" };
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `artifacts/${fileName}`;

    const { data, error } = await supabase.storage
      .from("media")
      .upload(filePath, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from("media")
      .getPublicUrl(filePath);

    return { success: true, publicUrl };
  } catch (error: any) {
    console.error("Upload failure:", error);
    return { success: false, error: error.message || "UPLOAD_PROTOCOL_ERROR" };
  }
}

export async function createArtifact(data: {
  slug: string;
  title: string;
  series: string;
  description: string;
  price: string;
  status: string;
  imageUrl?: string;
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
        imageUrl: data.imageUrl,
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
    const newStatus = currentStatus === "SOLD_OUT" ? "AVAILABLE" : "SOLD_OUT";
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
