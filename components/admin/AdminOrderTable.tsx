"use client";

import { useState } from "react";
import { HudContainer } from "@/components/common/HudContainer";
import { TechnicalLabel } from "@/components/common/TechnicalLabel";
import { SystemButton } from "@/components/common/SystemButton";
import { updateOrderStatus } from "@/app/actions/orders";
import { ChevronDown, ExternalLink, Package, Truck, CheckCircle, Search, XCircle, Loader2 } from "lucide-react";

type Order = {
  id: string;
  userId: string;
  totalAmount: number;
  status: string;
  createdAt: Date | string;
  shiprocketOrderId?: string | null;
  shipmentId?: string | null;
  awbCode?: string | null;
  courierName?: string | null;
  trackingStatus?: string | null;
  user: {
    name: string | null;
    email: string | null;
  };
  items: {
    id: string;
    title: string;
    quantity: number;
    price: number;
  }[];
};

import { useTheme } from "@/lib/contexts/ThemeContext";

export function AdminOrderTable({ initialOrders }: { initialOrders: Order[] }) {
  const { isCyberpunk } = useTheme();
  const [orders, setOrders] = useState(initialOrders);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const handleStatusUpdate = async (orderId: string, newStatus: string) => {
    setUpdatingId(orderId);
    const res = await updateOrderStatus(orderId, newStatus);
    if (res.success) {
      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    } else {
      alert("PROTOCOL_ERROR: " + res.error);
    }
    setUpdatingId(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'text-yellow-500';
      case 'PROCESSING': return 'text-blue-500';
      case 'SHIPPED': return 'text-accent';
      case 'DELIVERED': return 'text-green-500';
      case 'CANCELLED': return 'text-red-500';
      default: return 'text-zinc-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className={`border overflow-hidden ${isCyberpunk ? "border-white/10 bg-[#050505]" : "border-black/5 bg-white shadow-sm"}`}>
        <table className="w-full text-left font-mono text-[10px]">
          <thead className={`uppercase tracking-widest border-b ${isCyberpunk ? "bg-[#111] text-zinc-500 border-white/10" : "bg-muted text-zinc-400 border-black/5"}`}>
            <tr>
              <th className="p-6 font-normal">LOCK_ID / DATE</th>
              <th className="p-6 font-normal">CITIZEN_ID / EMAIL</th>
              <th className="p-6 font-normal">ALLOCATION_YIELD</th>
              <th className="p-6 font-normal">LOGISTICS_STATUS</th>
              <th className="p-6 font-normal text-right">OPERATIONS</th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isCyberpunk ? "divide-white/5" : "divide-black/5"}`}>
            {orders.map((order) => (
              <tr key={order.id} className={`transition-colors group ${isCyberpunk ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.01]"}`}>
                <td className="p-6">
                  <div className="space-y-1">
                    <span className={`font-bold block ${isCyberpunk ? "text-white" : "text-foreground"}`}>{order.id.toUpperCase()}</span>
                    <span className="text-zinc-600 block">{new Date(order.createdAt).toLocaleString()}</span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="space-y-1">
                    <span className={`block ${isCyberpunk ? "text-zinc-300" : "text-zinc-700"}`}>{order.user.name || "UNNAMED"}</span>
                    <span className="text-zinc-500 block">{order.user.email}</span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="space-y-1">
                    <span className={`block font-bold ${isCyberpunk ? "text-white" : "text-foreground"}`}>₹{order.totalAmount.toLocaleString()}</span>
                    <span className="text-zinc-500 block">[{order.items.length} UNITS]</span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex flex-col gap-2">
                    <span className={`font-bold tracking-widest px-2 py-1 border border-current bg-current/5 w-fit ${getStatusColor(order.status)}`}>
                      [{order.status}]
                    </span>
                    {order.awbCode && (
                      <div className={`flex flex-col gap-1 mt-1 border-t pt-1 ${isCyberpunk ? "border-white/5" : "border-black/5"}`}>
                        <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest">
                          AWB: <span className="text-accent">{order.awbCode}</span>
                        </span>
                        <span className="text-[8px] text-zinc-500 uppercase tracking-widest">
                          {order.courierName || "ASSIGNED"} // {order.trackingStatus || "SYNCING"}
                        </span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-6 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <select 
                      disabled={updatingId === order.id}
                      value={order.status}
                      onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                      className={`text-[9px] p-2 hover:border-accent transition-colors focus:outline-none uppercase border ${isCyberpunk ? "bg-[#111] border-white/10 text-white" : "bg-white border-black/10 text-foreground"}`}
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="PROCESSING">PROCESSING</option>
                      <option value="SHIPPED">SHIPPED</option>
                      <option value="DELIVERED">DELIVERED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                    
                    {order.awbCode && (
                      <SystemButton 
                        href={`/admin/logistics?track=${order.awbCode}`} 
                        className={`p-2 text-accent border hover:bg-accent/10 transition-colors ${isCyberpunk ? "border-accent/20" : "border-accent/40"}`}
                        title="TRACK_IN_MISSION_CONTROL"
                      >
                        <Search size={12} />
                      </SystemButton>
                    )}
                    
                    {updatingId === order.id ? (
                      <Loader2 size={14} className="animate-spin text-accent" />
                    ) : (
                      <SystemButton href={`/account/orders/${order.id}`} className="p-2" title="VIEW_DETAILS">
                        <ExternalLink size={12} />
                      </SystemButton>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && (
        <div className={`p-24 border border-dashed flex flex-col items-center justify-center space-y-4 opacity-30 ${isCyberpunk ? "border-white/5" : "border-black/5"}`}>
          <Package size={48} className={isCyberpunk ? "text-zinc-800" : "text-zinc-200"} />
          <TechnicalLabel label="BUFFER_EMPTY" value="NO_TRANSACTIONS_IN_QUEUE" />
        </div>
      )}
    </div>
  );
}
