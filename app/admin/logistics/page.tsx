import { ShiprocketDashboard } from "@/components/admin/ShiprocketDashboard";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";

export const dynamic = "force-dynamic";

export default function LogisticsPage() {
  return (
    <div className="space-y-12 text-white">
      <header className="border-b border-white/10 pb-6 flex justify-between items-end">
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
