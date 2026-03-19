import { InventoryTable } from "@/components/admin/InventoryTable";
import { getArtifacts } from "@/lib/cms";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Inventory() {
  const artifacts = await getArtifacts();
  return (
    <div className="space-y-12">
      <header className="border-b border-white/10 pb-6 flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-heading tracking-[-0.05em] text-white">CATALOG_MANAGEMENT</h1>
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
            Configure unit allocations and design protocol specs
          </p>
        </div>
        <Link href="/admin/inventory/new" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-mono font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-white/10 transition-colors flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-accent" />
          ALLOCATE_UNIT 
        </Link>
      </header>
      <InventoryTable initialArtifacts={artifacts} />
    </div>
  );
}
