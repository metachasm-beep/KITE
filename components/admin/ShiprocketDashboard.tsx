"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { 
  Package, 
  Search, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Truck, 
  Wallet,
  ArrowRight,
  RefreshCw,
  Calculator
} from "lucide-react";

export function ShiprocketDashboard() {
  const { isCyberpunk } = useTheme();
  const searchParams = useSearchParams();
  const [balance, setBalance] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [trackingId, setTrackingId] = useState(searchParams.get("track") || "");
  const [trackingType, setTrackingType] = useState<"awb" | "order">("awb");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [rateCalc, setRateCalc] = useState({ deliv: "", weight: 0.5 });
  const [rateResult, setRateResult] = useState<any>(null);
  const [rateLoading, setRateLoading] = useState(false);

  useEffect(() => {
    fetchData();
    if (searchParams.get("track")) {
       autoTrack(searchParams.get("track")!);
    }
  }, []);

  const autoTrack = async (id: string) => {
    setTrackingLoading(true);
    try {
      const res = await fetch(`/api/admin/shiprocket/track/${id}?type=awb`);
      const data = await res.json();
      setTrackingResult(data);
    } catch (err) {
      console.error("Auto-tracking failed", err);
    } finally {
      setTrackingLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [balRes, ordRes] = await Promise.all([
        fetch("/api/admin/shiprocket/balance"),
        fetch("/api/admin/shiprocket/orders")
      ]);
      const bal = await balRes.json();
      const ord = await ordRes.json();
      
      setBalance(bal);
      setOrders(ord.data || []);
    } catch (err) {
      console.error("Failed to fetch Shiprocket data", err);
    } finally {
      setLoading(false);
    }
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    setTrackingLoading(true);
    setTrackingResult(null);
    try {
      const res = await fetch(`/api/admin/shiprocket/track/${trackingId}?type=${trackingType}`);
      const data = await res.json();
      setTrackingResult(data);
    } catch (err) {
      console.error("Tracking failed", err);
    } finally {
      setTrackingLoading(false);
    }
  };

  const handleRateCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rateCalc.deliv) return;
    setRateLoading(true);
    setRateResult(null);
    try {
      const res = await fetch(`/api/admin/shiprocket/serviceability?delivery_postcode=${rateCalc.deliv}&weight=${rateCalc.weight}`);
      const data = await res.json();
      setRateResult(data);
    } catch (err) {
      console.error("Rate check failed", err);
    } finally {
      setRateLoading(false);
    }
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Top Row: Balance & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${isCyberpunk ? "bg-zinc-950 border-white/5 shadow-2xl" : "bg-white border-black/5 shadow-sm"} border p-6 rounded-sm relative overflow-hidden group`}
        >
          <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -mr-16 -mt-16 transition-all ${isCyberpunk ? "bg-accent/5 group-hover:bg-accent/10" : "bg-accent/5 group-hover:bg-accent/10"}`} />
          <div className="flex items-center gap-4 mb-4">
             <div className="p-3 bg-accent/10 rounded-full text-accent">
                <Wallet size={20} />
             </div>
             <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">WALLET_BALANCE</span>
                <span className={`text-2xl font-heading tracking-widest uppercase ${isCyberpunk ? "text-white" : "text-foreground"}`}>
                   {balance ? `₹${balance.balance_amount || 0}` : "LOADING..."}
                </span>
             </div>
          </div>
          <p className="text-[9px] font-mono text-zinc-500 tracking-wider">PRIMARY_FUNDS // READY_FOR_DISPATCH</p>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-6 font-mono">
            <div className={`${isCyberpunk ? "bg-zinc-950 border-white/5" : "bg-white border-black/5"} border p-6 flex flex-col justify-between shadow-sm`}>
                <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em]">REMOTE_SYNC</span>
                <div className="flex items-end justify-between">
                   <span className={`text-3xl font-heading ${isCyberpunk ? "text-white" : "text-foreground"}`}>{orders.length}</span>
                   <span className="text-[9px] text-accent animate-pulse">ACTIVE_REQUESTS</span>
                </div>
            </div>
            <div className={`${isCyberpunk ? "bg-zinc-950 border-white/5" : "bg-white border-black/5"} border p-6 flex flex-col justify-between shadow-sm`}>
                <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em]">PROV_STATUS</span>
                <div className="flex items-center gap-2 text-emerald-500">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   <span className="text-xs font-bold uppercase tracking-widest">GATEWAY_OPERATIONAL</span>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Global Shiprocket Orders */}
        <section className={`${isCyberpunk ? "bg-zinc-950 border-white/5 shadow-2xl" : "bg-white border-black/5 shadow-sm"} border p-8 flex flex-col`}>
          <header className="flex justify-between items-center mb-6">
             <h3 className="font-mono text-zinc-400 text-[10px] tracking-[0.3em] uppercase flex items-center gap-3">
                <RefreshCw size={12} className={loading ? "animate-spin text-accent" : "text-zinc-600"} />
                REMOTE_SESSIONS
             </h3>
             <button 
               onClick={fetchData} 
               className={`text-[9px] font-mono text-accent border px-2 py-0.5 hover:bg-accent hover:text-black transition-all ${isCyberpunk ? "border-accent/20" : "border-accent/40"}`}
             >
               REFRESH_NODE
             </button>
          </header>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <div className="p-10 text-center opacity-20 font-mono text-xs uppercase tracking-widest">INDEXING_DATA...</div>
            ) : orders.length === 0 ? (
              <div className="p-10 text-center opacity-20 font-mono text-xs uppercase tracking-widest">NO_REMOTE_SESSIONS_FOUND</div>
            ) : (
              orders.map((order, i) => (
                <div key={i} className={`group border p-4 hover:border-accent/40 transition-colors ${isCyberpunk ? "border-white/5 bg-white/[0.02]" : "border-black/5 bg-black/[0.01]"}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-[10px] font-mono text-accent block font-bold tracking-widest uppercase">ORD_{order.id}</span>
                        <span className={`text-xs font-bold block mt-1 ${isCyberpunk ? "text-white" : "text-foreground"}`}>{order.billing_customer_name}</span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-1 bg-white/5 text-zinc-400 uppercase tracking-widest border border-white/5">
                       {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                     <div>
                        <span className="text-[9px] font-mono text-zinc-500 block uppercase">DEST: {order.billing_city}</span>
                        <span className="text-[9px] font-mono text-zinc-500 block uppercase">VAL: ₹{order.total}</span>
                     </div>
                     <span className="text-[10px] font-mono text-zinc-400">
                        {new Date(order.created_at).toLocaleDateString()}
                     </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Right: Operational Tools */}
        <div className="space-y-8">
          {/* Tracking Tool */}
          <section className={`${isCyberpunk ? "bg-zinc-950 border-white/5 shadow-2xl" : "bg-white border-black/5 shadow-sm"} border p-8 relative overflow-hidden`}>
             <div className="absolute top-0 left-0 w-1 h-full bg-accent/20" />
             <h3 className="font-mono text-zinc-400 text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                <Search size={14} className="text-accent" />
                TELEMETRY_TRACKING
             </h3>
             
             <form onSubmit={handleTrack} className="space-y-4">
                <div className={`flex gap-2 p-1 rounded-sm mb-4 ${isCyberpunk ? "bg-white/5" : "bg-black/5"}`}>
                   <button 
                     type="button"
                     onClick={() => setTrackingType("awb")}
                     className={`flex-1 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all ${trackingType === "awb" ? 'bg-accent text-black font-bold' : 'text-zinc-500 hover:text-white'}`}
                   >
                     AWB_REF
                   </button>
                   <button 
                     type="button"
                     onClick={() => setTrackingType("order")}
                     className={`flex-1 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all ${trackingType === "order" ? 'bg-accent text-black font-bold' : 'text-zinc-500 hover:text-white'}`}
                   >
                     SYSTEM_ID
                   </button>
                </div>

                <div className="relative">
                   <input 
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      placeholder={`ENTER_${trackingType.toUpperCase()}_HERE`}
                      className={`w-full border p-3 font-mono text-xs uppercase tracking-widest focus:border-accent outline-none ${isCyberpunk ? "bg-black border-white/10 text-white placeholder:text-zinc-700" : "bg-white border-black/10 text-foreground placeholder:text-zinc-300"}`}
                   />
                   <button 
                     type="submit"
                     disabled={trackingLoading}
                     className="absolute right-2 top-2 p-1 text-accent hover:text-accent/60 transition-colors"
                   >
                     {trackingLoading ? <RefreshCw className="animate-spin" size={16} /> : <ArrowRight size={18} />}
                   </button>
                </div>
             </form>

             <AnimatePresence>
                {trackingResult && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className={`mt-6 p-4 border-l-2 border-accent font-mono text-[10px] space-y-3 ${isCyberpunk ? "bg-white/5" : "bg-black/[0.02]"}`}
                  >
                     <div className={`flex justify-between border-b pb-2 ${isCyberpunk ? "border-white/5" : "border-black/5"}`}>
                        <span className="text-zinc-500 text-[9px] uppercase tracking-widest">LIVE_STATUS:</span>
                        <span className="text-accent uppercase font-bold tracking-widest">{trackingResult.tracking_data?.shipment_track?.[0]?.current_status || "UNKNOWN"}</span>
                     </div>
                     <div className={`flex justify-between border-b pb-2 ${isCyberpunk ? "border-white/5" : "border-black/5"}`}>
                        <span className="text-zinc-500 text-[9px] uppercase tracking-widest">LOCATION:</span>
                        <span className={`uppercase ${isCyberpunk ? "text-white" : "text-foreground"}`}>{trackingResult.tracking_data?.shipment_track?.[0]?.current_location || "N/A"}</span>
                     </div>
                     <div className={`flex justify-between border-b pb-2 ${isCyberpunk ? "border-white/5" : "border-black/5"}`}>
                        <span className="text-zinc-500 text-[9px] uppercase tracking-widest">LAST_POLL:</span>
                        <span className={isCyberpunk ? "text-white" : "text-foreground"}>{trackingResult.tracking_data?.shipment_track?.[0]?.scanned_datetime || "N/A"}</span>
                     </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </section>

          {/* Serviceability / Rates Tool */}
          <section className={`${isCyberpunk ? "bg-zinc-950 border-white/5 shadow-2xl" : "bg-white border-black/5 shadow-sm"} border p-8 relative`}>
             <h3 className="font-mono text-zinc-400 text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                <Calculator size={14} className="text-zinc-400" />
                SERVICEABILITY_PROJECTION
             </h3>

             <form onSubmit={handleRateCheck} className="flex gap-4 mb-4">
                <input 
                  value={rateCalc.deliv}
                  onChange={(e) => setRateCalc({ ...rateCalc, deliv: e.target.value })}
                  placeholder="PINCODE"
                  maxLength={6}
                  className={`flex-1 border p-3 font-mono text-xs focus:border-accent outline-none ${isCyberpunk ? "bg-black border-white/10 text-white" : "bg-white border-black/10 text-foreground"}`}
                />
                <input 
                  type="number"
                  step={0.1}
                  value={rateCalc.weight}
                  onChange={(e) => setRateCalc({ ...rateCalc, weight: parseFloat(e.target.value) })}
                  placeholder="KG"
                  className={`w-24 border p-3 font-mono text-xs focus:border-accent outline-none ${isCyberpunk ? "bg-black border-white/10 text-white" : "bg-white border-black/10 text-foreground"}`}
                />
                <button 
                  type="submit"
                  disabled={rateLoading}
                  className={`${isCyberpunk ? "bg-zinc-100 text-black hover:bg-accent" : "bg-foreground text-white hover:bg-black"} px-6 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors disabled:opacity-50`}
                >
                  {rateLoading ? "CALC..." : "EXECUTE"}
                </button>
             </form>

             <AnimatePresence>
                {rateResult && rateResult.data && (
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase block mb-2">PROJECTED_LOGISTICS_PROVIDERS:</span>
                    <div className="grid grid-cols-1 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                        {rateResult.data.available_courier_companies?.map((courier: any, i: number) => (
                           <div key={i} className={`flex justify-between items-center p-3 border ${isCyberpunk ? "border-white/5 bg-white/[0.02]" : "border-black/5 bg-black/[0.01]"}`}>
                              <div>
                                 <span className={`text-xs font-bold block uppercase ${isCyberpunk ? "text-white" : "text-foreground"}`}>{courier.courier_name}</span>
                                 <span className="text-[9px] font-mono text-zinc-500 uppercase">EDD: {courier.edd || "N/A"}</span>
                              </div>
                              <span className="text-xs font-mono text-accent font-bold tracking-widest">₹{courier.rate}</span>
                           </div>
                        ))}
                    </div>
                  </div>
                )}
             </AnimatePresence>
          </section>
        </div>
      </div>
    </div>
  );
}
