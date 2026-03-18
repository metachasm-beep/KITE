import { OrdersTable } from "@/components/admin/OrdersTable";

export default function Orders() {
  return (
    <div className="space-y-12">
      <header className="border-b border-white/5 pb-6">
        <h1 className="text-4xl font-heading tracking-tighter text-white">ORDER_TRACKING</h1>
        <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
          Monitor fulfillment operations and outbound logs
        </p>
      </header>
      
      <OrdersTable />
    </div>
  );
}
