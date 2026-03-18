export function OrdersTable() {
  const ORDERS = [
    { id: "ORD-9301", time: "2026-03-22", user: "alpha@voidlab.co", status: "SHIPPED", total: "₹1,999" },
    { id: "ORD-8822", time: "2026-03-21", user: "beta@neuroform.dev", status: "PENDING", total: "₹2,499" },
    { id: "ORD-1194", time: "2026-03-20", user: "gamma@collector.org", status: "DELIVERED", total: "₹4,998" },
  ];

  return (
    <div className="border border-white/10 bg-[#0A0A0A] overflow-hidden">
      <table className="w-full text-left font-mono">
        <thead className="bg-[#111111] text-[10px] tracking-widest text-zinc-500 uppercase">
          <tr>
            <th className="p-4 font-normal">ORD_ID</th>
            <th className="p-4 font-normal">TIMESTAMP</th>
            <th className="p-4 font-normal">IDENTITY</th>
            <th className="p-4 font-normal">TOTAL</th>
            <th className="p-4 font-normal text-right">STATE</th>
            <th className="p-4 font-normal text-right">ACTION</th>
          </tr>
        </thead>
        <tbody className="text-xs text-zinc-300">
          {ORDERS.map((order, idx) => (
            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-4 font-bold text-white">{order.id}</td>
              <td className="p-4 text-zinc-500">{order.time}</td>
              <td className="p-4">{order.user}</td>
              <td className="p-4">{order.total}</td>
              <td className="p-4 text-right">
                <span className={order.status === "PENDING" ? "text-yellow-500" : order.status === "SHIPPED" ? "text-accent" : "text-zinc-600"}>
                  [{order.status}]
                </span>
              </td>
              <td className="p-4 text-right space-x-2">
                <button className="text-[10px] tracking-widest uppercase hover:text-white transition-colors">VIEW_LOGS</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {ORDERS.length === 0 && (
        <div className="p-8 text-center text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
          [ NO_ACTIVE_COMMANDS ]
        </div>
      )}
    </div>
  );
}
