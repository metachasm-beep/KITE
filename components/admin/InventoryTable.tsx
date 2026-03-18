export function InventoryTable() {
  const ITEMS = [
    { id: "A001", title: "VOID FIGURE 01", stock: 12, price: "₹1,999", status: "AVAILABLE" },
    { id: "N012", title: "NEUROFORM CUBE", stock: 0, price: "₹2,499", status: "SOLD_OUT" },
    { id: "S992", title: "SYNTH_PROTOCOL", stock: 45, price: "₹999", status: "AVAILABLE" },
  ];

  return (
    <div className="border border-white/10 bg-[#0A0A0A] overflow-hidden">
      <table className="w-full text-left font-mono">
        <thead className="bg-[#111111] text-[10px] tracking-widest text-zinc-500 uppercase">
          <tr>
            <th className="p-4 font-normal">ITEM_ID</th>
            <th className="p-4 font-normal">TITLE</th>
            <th className="p-4 font-normal">STOCK</th>
            <th className="p-4 font-normal">PRICE</th>
            <th className="p-4 font-normal text-right">STATUS</th>
            <th className="p-4 font-normal text-right">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-xs text-zinc-300">
          {ITEMS.map((item, idx) => (
            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-4">{item.id}</td>
              <td className="p-4 font-bold text-white">{item.title}</td>
              <td className="p-4">{item.stock}</td>
              <td className="p-4">{item.price}</td>
              <td className="p-4 text-right">
                <span className={item.status === "SOLD_OUT" ? "text-red-500" : "text-accent"}>
                  {item.status}
                </span>
              </td>
              <td className="p-4 text-right space-x-2">
                <button className="text-[10px] tracking-widest uppercase hover:text-white transition-colors">EDIT</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {ITEMS.length === 0 && (
        <div className="p-8 text-center text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
          [ NO_DATA_STREAM ]
        </div>
      )}
    </div>
  );
}
