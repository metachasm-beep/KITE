import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getShiprocketOrders } from "@/lib/shiprocket";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1;
  const per_page = searchParams.get("per_page") ? parseInt(searchParams.get("per_page")!) : 20;
  const status = searchParams.get("status") || undefined;

  try {
    const orders = await getShiprocketOrders({ page, per_page, status });
    return NextResponse.json(orders);
  } catch (error: any) {
    console.error("[Admin Shiprocket Orders] Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
