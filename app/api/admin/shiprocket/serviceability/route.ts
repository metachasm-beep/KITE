import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { calculateShiprocketRates } from "@/lib/shiprocket";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const pickup_postcode = searchParams.get("pickup_postcode") || "110001"; // Default mockup
  const delivery_postcode = searchParams.get("delivery_postcode");
  const weight = searchParams.get("weight") ? parseFloat(searchParams.get("weight")!) : 0.5;
  const cod = searchParams.get("cod") === "1" ? 1 : 0;

  if (!delivery_postcode) {
    return NextResponse.json({ error: "MISSING_DELIVERY_POSTCODE" }, { status: 400 });
  }

  try {
    const rates = await calculateShiprocketRates({
      pickup_postcode,
      delivery_postcode,
      weight,
      cod,
    });
    return NextResponse.json(rates);
  } catch (error: any) {
    console.error("[Admin Shiprocket Rates] Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
