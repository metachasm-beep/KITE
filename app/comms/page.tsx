"use client";

import { useState } from "react";
import { Send, CheckCircle2, MapPin, Mail, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/contexts/ThemeContext";

export default function CommsPage() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS">("IDLE");
  const { isCyberpunk } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");
    setTimeout(() => setStatus("SUCCESS"), 2000);
  };

  return (
    <main className={`min-h-screen pt-32 pb-40 px-6 overflow-hidden transition-colors duration-500 ${isCyberpunk ? "bg-[#080808] text-[#e8f4f8]" : "bg-white text-foreground"}`}>
      <div className="container mx-auto max-w-5xl">
        
        {/* Header Section */}
        <header className="mb-20 text-center space-y-6">
          <div className={`inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full mx-auto border ${isCyberpunk ? "border-[#00f5d4]/30 bg-[#0d1117]" : "bg-muted border-black/5"}`}>
            {isCyberpunk ? <Zap size={12} className="text-[#00f5d4] animate-pulse" /> : <span className="w-2 h-2 rounded-full bg-accent" />}
            <span className={`text-sm font-medium ${isCyberpunk ? "text-[#00f5d4] font-mono tracking-widest uppercase" : "text-zinc-600"}`}>
              {isCyberpunk ? "COMMS_RELAY::ACTIVE" : "We respond within 24 hours"}
            </span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-semibold tracking-tight ${isCyberpunk ? "text-[#e8f4f8] font-mono cyber-glow" : "text-foreground"}`}>
            {isCyberpunk ? "MISSION_COMMS" : "We'd love to\nhear from you"}
          </h1>
          <p className={`max-w-xl mx-auto text-base leading-relaxed font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
            {isCyberpunk 
              ? "Transmit your inquiry through the secure relay. All channels AES-256 encrypted. Response window: 24 cycles." 
              : "Got a question about your order? Need help with a product? Or just want to say hello? Drop us a message — a real human will get back to you shortly."}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Contact Information Sidebar */}
          <aside className="lg:col-span-2 space-y-8">
            <div className={`p-8 rounded-3xl border space-y-8 h-full ${isCyberpunk ? "bg-[#0d1117] border-[#00f5d4]/20" : "bg-muted/20 border-black/5"}`}>
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold tracking-tight ${isCyberpunk ? "text-[#e8f4f8] font-mono uppercase" : "text-foreground"}`}>
                  {isCyberpunk ? "CONTACT_RELAYS" : "Ways to reach us"}
                </h3>
                <p className={`text-sm leading-relaxed font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
                  {isCyberpunk 
                    ? "Multiple relay channels are available. All monitored by the BaseLab ops team." 
                    : "Our support team is small, attentive, and genuinely cares. Every message is read personally."}
                </p>
              </div>

              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${isCyberpunk ? "border border-[#00f5d4]/30 bg-[#080808]" : "bg-white border border-black/5"}`}>
                       <Mail size={18} className={isCyberpunk ? "text-[#00f5d4]" : "text-zinc-500"} />
                    </div>
                    <div className="space-y-1 pt-1">
                       <p className={`text-sm font-semibold ${isCyberpunk ? "text-[#00f5d4] font-mono uppercase tracking-wider" : "text-foreground"}`}>
                         {isCyberpunk ? "EMAIL_RELAY" : "Email us"}
                       </p>
                       <a href="mailto:support@baselab.co" className={`text-sm transition-colors ${isCyberpunk ? "text-[#00f5d4]/60 font-mono hover:text-[#00f5d4]" : "text-zinc-500 hover:text-foreground"}`}>
                         support@baselab.co
                       </a>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${isCyberpunk ? "border border-[#00f5d4]/30 bg-[#080808]" : "bg-white border border-black/5"}`}>
                       <MapPin size={18} className={isCyberpunk ? "text-[#00f5d4]" : "text-zinc-500"} />
                    </div>
                    <div className="space-y-1 pt-1">
                       <p className={`text-sm font-semibold ${isCyberpunk ? "text-[#00f5d4] font-mono uppercase tracking-wider" : "text-foreground"}`}>
                         {isCyberpunk ? "LOCATION_NODE" : "Where we are"}
                       </p>
                       <p className={`text-sm leading-relaxed ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
                          BaseLab Studios<br />
                          Indiranagar, Bangalore<br />
                          Karnataka 560038
                       </p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${isCyberpunk ? "border border-[#00f5d4]/30 bg-[#080808]" : "bg-white border border-black/5"}`}>
                       <Clock size={18} className={isCyberpunk ? "text-[#00f5d4]" : "text-zinc-500"} />
                    </div>
                    <div className="space-y-1 pt-1">
                       <p className={`text-sm font-semibold ${isCyberpunk ? "text-[#00f5d4] font-mono uppercase tracking-wider" : "text-foreground"}`}>
                         {isCyberpunk ? "RESPONSE_WINDOW" : "When we reply"}
                       </p>
                       <p className={`text-sm ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
                         {isCyberpunk ? "Mon–Fri :: 09:00–18:00 IST" : "Mon – Fri, 9AM to 6PM IST. Usually same or next day."}
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </aside>

          {/* Contact Form Area */}
          <div className="lg:col-span-3">
            <div className={`p-8 md:p-12 rounded-3xl border shadow-lg relative overflow-hidden ${isCyberpunk ? "bg-[#0d1117] border-[#00f5d4]/20" : "bg-white border-black/5"}`}>
               {status === "SUCCESS" ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                 >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${isCyberpunk ? "border border-[#00f5d4]/50 bg-[#00f5d4]/10 text-[#00f5d4] shadow-[0_0_20px_rgba(0,245,212,0.2)]" : "bg-accent/10 text-accent"}`}>
                       <CheckCircle2 size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-3xl font-semibold tracking-tight ${isCyberpunk ? "text-[#00f5d4] font-mono cyber-glow uppercase" : "text-foreground"}`}>
                      {isCyberpunk ? "TRANSMISSION_SENT" : "Message received!"}
                    </h3>
                    <p className={`text-base font-medium max-w-sm ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
                       {isCyberpunk 
                         ? "Your data packet has been received. A BaseLab operator will respond within 24 cycles."
                         : "Thanks for reaching out! A member of our team will personally respond within 24 hours."}
                    </p>
                    <button 
                      onClick={() => setStatus("IDLE")} 
                      className={`mt-8 px-8 py-3 text-sm font-medium transition-colors ${isCyberpunk ? "border border-[#00f5d4]/40 text-[#00f5d4] hover:bg-[#00f5d4]/10 font-mono tracking-widest uppercase" : "bg-muted text-foreground rounded-full hover:bg-black/5"}`}
                    >
                       {isCyberpunk ? "NEW_TRANSMISSION" : "Send another message"}
                    </button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
                   <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className={`text-sm font-semibold block ${isCyberpunk ? "text-[#00f5d4]/80 font-mono uppercase tracking-wider" : "text-foreground"}`}>
                             {isCyberpunk ? "AGENT_NAME" : "Your name"}
                           </label>
                           <input 
                             required 
                             type="text" 
                             className={`w-full px-4 py-3.5 text-sm focus:outline-none transition-all font-medium ${isCyberpunk ? "bg-[#080808] border border-[#00f5d4]/20 text-[#e8f4f8] focus:border-[#00f5d4] focus:shadow-[0_0_10px_rgba(0,245,212,0.2)] font-mono placeholder:text-[#00f5d4]/20" : "bg-muted/20 border border-black/10 rounded-xl text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent placeholder:text-zinc-400"}`}
                             placeholder={isCyberpunk ? "DESIGNATE_NAME..." : "e.g. Sarah Johnson"} 
                           />
                         </div>
                         <div className="space-y-2">
                           <label className={`text-sm font-semibold block ${isCyberpunk ? "text-[#00f5d4]/80 font-mono uppercase tracking-wider" : "text-foreground"}`}>
                             {isCyberpunk ? "CONTACT_RELAY" : "Email address"}
                           </label>
                           <input 
                             required 
                             type="email" 
                             className={`w-full px-4 py-3.5 text-sm focus:outline-none transition-all font-medium ${isCyberpunk ? "bg-[#080808] border border-[#00f5d4]/20 text-[#e8f4f8] focus:border-[#00f5d4] focus:shadow-[0_0_10px_rgba(0,245,212,0.2)] font-mono placeholder:text-[#00f5d4]/20" : "bg-muted/20 border border-black/10 rounded-xl text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent placeholder:text-zinc-400"}`}
                             placeholder={isCyberpunk ? "INPUT_EMAIL..." : "you@example.com"} 
                           />
                         </div>
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-semibold block ${isCyberpunk ? "text-[#00f5d4]/80 font-mono uppercase tracking-wider" : "text-foreground"}`}>
                          {isCyberpunk ? "INQUIRY_TYPE" : "What's this about?"}
                        </label>
                        <input 
                          required 
                          type="text" 
                          className={`w-full px-4 py-3.5 text-sm focus:outline-none transition-all font-medium ${isCyberpunk ? "bg-[#080808] border border-[#00f5d4]/20 text-[#e8f4f8] focus:border-[#00f5d4] focus:shadow-[0_0_10px_rgba(0,245,212,0.2)] font-mono placeholder:text-[#00f5d4]/20" : "bg-muted/20 border border-black/10 rounded-xl text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent placeholder:text-zinc-400"}`}
                          placeholder={isCyberpunk ? "QUERY_SUBJECT..." : "Order help, product question, general feedback..."} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-semibold block ${isCyberpunk ? "text-[#00f5d4]/80 font-mono uppercase tracking-wider" : "text-foreground"}`}>
                          {isCyberpunk ? "MESSAGE_PAYLOAD" : "Tell us more"}
                        </label>
                        <textarea 
                          required 
                          rows={6} 
                          className={`w-full px-4 py-3.5 text-sm focus:outline-none transition-all resize-none font-medium ${isCyberpunk ? "bg-[#080808] border border-[#00f5d4]/20 text-[#e8f4f8] focus:border-[#00f5d4] focus:shadow-[0_0_10px_rgba(0,245,212,0.2)] font-mono placeholder:text-[#00f5d4]/20" : "bg-muted/20 border border-black/10 rounded-xl text-foreground focus:ring-2 focus:ring-accent/20 focus:border-accent placeholder:text-zinc-400"}`}
                          placeholder={isCyberpunk ? "INPUT_MESSAGE_PAYLOAD..." : "The more detail you share, the faster we can help. No question is too small!"} 
                        />
                      </div>
                   </div>

                   <button 
                     disabled={status === "SENDING"} 
                     type="submit" 
                     className={`w-full py-4 font-semibold text-base flex items-center justify-center gap-3 disabled:opacity-70 transition-all ${isCyberpunk ? "border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4]/10 font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,245,212,0.2)] hover:shadow-[0_0_20px_rgba(0,245,212,0.4)]" : "bg-foreground text-white rounded-full hover:bg-black shadow-sm"}`}
                   >
                     {status === "SENDING" 
                       ? (isCyberpunk ? "TRANSMITTING..." : "Sending...") 
                       : (isCyberpunk ? "SEND_TRANSMISSION" : "Send message")}
                     <Send size={18} className={status === "SENDING" ? "animate-pulse" : ""} strokeWidth={2} />
                   </button>
                 </form>
               )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
