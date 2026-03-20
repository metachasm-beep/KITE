"use client";

import { ShiprocketDashboard } from "@/components/admin/ShiprocketDashboard";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function LogisticsPage() {
  const { isCyberpunk } = useTheme();

  return (
    <div className={`space-y-12 ${isCyberpunk ? "text-white" : "text-foreground"}`}>
      <header className={`border-b pb-6 flex justify-between items-end ${isCyberpunk ? "border-white/10" : "border-black/5"}`}>
        <div>
          <h1 className="text-4xl font-heading tracking-[-0.05em] uppercase">LOGISTICS_TELEMETRY</h1>
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
            Shiprocket API Real-time Monitoring & Management
          </p>
        </div>
        <div className="text-right">
            <span className="font-mono text-[9px] text-accent tracking-[0.3em] uppercase block animate-pulse">SHIP_SYNC_ACTIVE</span>
            <TechnicalLabel label="PROVIDER" value="SHIPROCKET_API_V2" className="mt-1" />
        </div>
      </header>

      <ShiprocketDashboard />
    </div>
  );
}
