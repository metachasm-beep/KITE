import { InventoryTable } from "@/components/admin/InventoryTable";

export default function Inventory() {
  return (
    <div className="space-y-12">
      <header className="border-b border-white/5 pb-6 flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-heading tracking-tighter text-white">INVENTORY_MGMT</h1>
          <p className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] uppercase mt-2">
            Add or modify stock counts and catalog specifications
          </p>
        </div>
        <button className="px-6 py-3 bg-accent text-white font-mono font-bold tracking-[0.2em] text-[10px] uppercase hover:bg-accent-hover transition-colors">
          [+ ADD_ARTIFACT]
        </button>
      </header>
      
      <InventoryTable />
    </div>
  );
}
