import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getShiprocketBalance } from "@/lib/shiprocket";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  try {
    const balance = await getShiprocketBalance();
    return NextResponse.json(balance);
  } catch (error: any) {
    console.error("[Admin Shiprocket Balance] Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
