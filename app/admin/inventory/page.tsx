import { InventoryTable } from "@/components/admin/InventoryTable";
import { getArtifacts } from "@/lib/cms";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";

export const dynamic = "force-dynamic";

export default async function Inventory() {
  const artifacts = await getArtifacts();
  return (
    <div className="space-y-12 text-white">
      <header className="border-b border-white/10 pb-6 flex items-end justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-heading tracking-[-0.05em]">CATALOG_MANAGEMENT</h1>
          <TechnicalLabel label="SYS_PROTOCOL" value="CATALOG_SYNC" className="text-zinc-500" />
        </div>
        <SystemButton href="/admin/inventory/new" className="px-6 py-3 text-[10px]">
          <div className="w-1.5 h-1.5 bg-accent mr-2 inline-block" />
          ALLOCATE_UNIT 
        </SystemButton>
      </header>

      <InventoryTable initialArtifacts={artifacts} />
    </div>
  );
}
