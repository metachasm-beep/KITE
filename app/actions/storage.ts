"use server";

import { supabase } from "@/lib/supabase";

export async function uploadArtifactImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;
    const filePath = `${fileName}`; // Just use the file name in the bucket folder

    const { data, error } = await supabase.storage
      .from("artifacts")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Supabase Storage Error:", error);
      return { success: false, error: error.message };
    }

    const { data: { publicUrl } } = supabase.storage
      .from("artifacts")
      .getPublicUrl(filePath);

    return { success: true, publicUrl };
  } catch (error) {
    console.error("Upload Error:", error);
    return { success: false, error: "Unexpected upload error" };
  }
}
