import { OrdersTable } from "@/components/admin/OrdersTable";

export default function Orders() {
  return (
    <div className="space-y-12">
      <header className="border-b border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-heading tracking-[-0.05em] text-white">ALLOCATION_TELEMETRY</h1>
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
            Monitor fulfillment operations and outbound logs
          </p>
        </div>
      </header>
      
      <OrdersTable />
    </div>
  );
}
