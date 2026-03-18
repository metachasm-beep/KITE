import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

// Placeholder orders until DB is connected
const PLACEHOLDER_ORDERS = [
  { id: "ORD-9301", date: "2026-03-22", status: "SHIPPED", total: "₹1,999" },
  { id: "ORD-8822", date: "2026-03-18", status: "DELIVERED", total: "₹2,499" },
];

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const user = session.user;

  return (
    <main className="min-h-screen bg-black px-6 py-24">
      <div className="container mx-auto max-w-4xl">
        {/* Profile Header */}
        <div className="flex items-center gap-8 mb-20 border-b border-white/5 pb-12">
          {user?.image && (
            <div className="relative h-20 w-20 rounded-full overflow-hidden border border-accent/30">
              <Image src={user.image} alt="Profile" fill className="object-cover" />
            </div>
          )}
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-2">
              AUTHORIZED_USER
            </span>
            <h1 className="text-3xl font-heading tracking-tighter text-white uppercase">
              {user?.name || "ANOMALY_DETECTED"}
            </h1>
            <p className="text-xs font-mono text-zinc-500 tracking-widest mt-1">
              {user?.email}
            </p>
          </div>
        </div>

        {/* Order History */}
        <div className="mb-12">
          <h2 className="text-lg font-heading tracking-tighter text-white uppercase mb-8">
            TRANSACTION_LOG
          </h2>

          <div className="border border-white/10 bg-[#050505]">
            <table className="w-full text-left font-mono">
              <thead className="bg-[#111] text-[10px] tracking-widest text-zinc-500 uppercase">
                <tr>
                  <th className="p-4 font-normal">ORDER_ID</th>
                  <th className="p-4 font-normal">DATE</th>
                  <th className="p-4 font-normal">TOTAL</th>
                  <th className="p-4 font-normal text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="text-xs text-zinc-300">
                {PLACEHOLDER_ORDERS.map((order) => (
                  <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold text-white">{order.id}</td>
                    <td className="p-4 text-zinc-500">{order.date}</td>
                    <td className="p-4">{order.total}</td>
                    <td className="p-4 text-right">
                      <span className={
                        order.status === "DELIVERED" ? "text-zinc-500" :
                        order.status === "SHIPPED" ? "text-accent" :
                        "text-yellow-500"
                      }>
                        [{order.status}]
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
