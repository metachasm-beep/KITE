import { prisma } from "@/lib/db";
import { AdminOrderTable } from "@/components/admin/AdminOrderTable";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      },
      items: true
    }
  });

  return (
    <div className="space-y-12 text-white">
      <header className="border-b border-white/10 pb-6">
        <h1 className="text-4xl font-heading tracking-[-0.05em]">LOGISTICS_TELEMETRY</h1>
        <TechnicalLabel label="SYS_PROTOCOL" value="ORDER_FULFILLMENT" className="mt-2 text-zinc-500" />
      </header>

      <AdminOrderTable initialOrders={orders as any[]} />
    </div>
  );
}
