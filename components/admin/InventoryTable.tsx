export function InventoryTable() {
  const ITEMS = [
    { id: "art_1", slug: "void-figure-01", title: "UNIT_01 // VOID FIGURE", stock: 12, price: "₹1,999", status: "LOCALIZED" },
    { id: "art_2", slug: "neuroform-cube", title: "UNIT_01 // NEUROFORM", stock: 0, price: "₹2,499", status: "DE-FRAGMENTED" },
    { id: "art_3", slug: "synth-protocol", title: "SERIES 03 // SYNTH", stock: 45, price: "₹999", status: "LOCALIZED" },
  ];

  return (
    <div className="border border-white/10 bg-white/[0.02] overflow-hidden">
      <table className="w-full text-left font-mono">
        <thead className="bg-black text-[9px] tracking-[0.2em] text-zinc-500 uppercase border-b border-white/10">
          <tr>
            <th className="p-4 font-normal">UNIT_ID</th>
            <th className="p-4 font-normal">NOMENCLATURE</th>
            <th className="p-4 font-normal">ALLOCATION</th>
            <th className="p-4 font-normal">YIELD</th>
            <th className="p-4 font-normal text-right">STATE</th>
            <th className="p-4 font-normal text-right">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-xs text-zinc-300">
          {ITEMS.map((item, idx) => (
            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
              <td className="p-4 text-[10px] text-zinc-500 tracking-widest">{item.id}</td>
              <td className="p-4 font-bold text-white uppercase tracking-tight">{item.title}</td>
              <td className="p-4 text-[11px]">{item.stock}</td>
              <td className="p-4 text-[11px]">{item.price}</td>
              <td className="p-4 text-right">
                <span className={`text-[10px] tracking-widest uppercase ${item.status === "DE-FRAGMENTED" ? "text-red-500/80" : "text-accent"}`}>
                  [{item.status}]
                </span>
              </td>
              <td className="p-4 text-right space-x-4">
                <button className="text-[10px] tracking-widest text-zinc-500 uppercase hover:text-accent transition-colors">MODIFY</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {ITEMS.length === 0 && (
        <div className="p-8 text-center text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
          [ CATALOG_EMPTY ]
        </div>
      )}
    </div>
  );
}
