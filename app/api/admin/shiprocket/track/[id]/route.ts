import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getShiprocketTracking } from "@/lib/shiprocket";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "awb"; // "awb" or "order"

  try {
    const tracking = await getShiprocketTracking(id, type === "awb");
    return NextResponse.json(tracking);
  } catch (error: any) {
    console.error("[Admin Shiprocket Tracking] Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
