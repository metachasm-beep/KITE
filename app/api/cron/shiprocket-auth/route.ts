import { NextResponse } from "next/server";
import { loginToShiprocket } from "@/lib/shiprocket-auth";

// This route is intended to be called by an external cron scheduler
// e.g. Vercel Cron or a separate cron runner (e.g. 0 0 */9 * *)
export async function GET(request: Request) {
  try {
    // Optionally check for auth header if you have a CRON_SECRET
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    console.log("Cron: Refreshing Shiprocket token...");
    await loginToShiprocket();
    
    return NextResponse.json({ success: true, message: "Shiprocket token refreshed." });
  } catch (error: any) {
    console.error("Shiprocket Cron Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
