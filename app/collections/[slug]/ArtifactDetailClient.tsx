"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/contexts/CartContext";
import { useTheme } from "@/lib/contexts/ThemeContext";
import { Artifact } from "@/lib/cms";
import { SpringAccordion, type AccordionItem } from "@/components/ruixen/spring-accordion";
import { SpringButton } from "@/components/ruixen/spring-button";
import { MagneticTabs, type MagneticTabItem } from "@/components/ruixen/magnetic-tabs";
import DecryptedText from "@/components/reactbits/DecryptedText";
import TrueFocus from "@/components/reactbits/TrueFocus";

interface ArtifactDetailClientProps {
  artifact: Artifact;
}

const PLA_MATERIAL_COPY = {
  baselab: {
    heading: "Material & Craftsmanship",
    badge: "Premium PLA",
    intro: "Every BaseLab product is precision-crafted from food-grade, plant-based PLA (Polylactic Acid) — one of the most advanced bio-derived polymers available today.",
    sections: [
      {
        title: "What is PLA?",
        body: "PLA (Polylactic Acid) is a high-performance thermoplastic derived from renewable plant starch — primarily corn and sugarcane. Unlike petroleum-based plastics, PLA is biodegradable under industrial composting conditions and carries a significantly lower carbon footprint from production to end-of-life. It is classified as food-safe and is widely used in medical devices, food packaging, and high-precision engineering applications."
      },
      {
        title: "Why we chose PLA",
        body: "We chose premium grade PLA because it delivers the best combination of dimensional accuracy (±0.1mm tolerance), exceptional surface finish, and vibrant colour stability of any desktop-printable material. PLA holds detail exceptionally well — every edge, curve, and texture in our designs comes through with clarity. Its rigidity makes it ideal for structural pieces that need to hold shape across years of daily use."
      },
      {
        title: "Environmental commitment",
        body: "PLA is made from annually renewable resources and produces up to 68% fewer greenhouse gases in its lifecycle compared to conventional plastics. While it requires industrial composting to break down, it does not leach BPA or microplastics into the environment under normal conditions. Choosing PLA is our commitment to building beautifully, responsibly."
      },
      {
        title: "Care instructions",
        body: "Keep your BaseLab piece away from prolonged direct sunlight and heat sources above 60°C (a hot car dashboard, for example). Clean with a mildly damp cloth. Do not soak in water or put through a dishwasher. PLA maintains its form and finish for years when cared for properly."
      },
      {
        title: "Post-processing & finish",
        body: "Each piece is printed at a 0.1mm layer resolution — finer than a human hair — for a smooth, almost injection-moulded appearance. Surfaces are hand-finished and inspected before shipping. You may occasionally see very faint layer lines up close; this is the honest signature of precision additive manufacturing and not a defect."
      }
    ]
  },
  cyberpunk: {
    heading: "SUBSTRATE_SPECIFICATIONS",
    badge: "POLYMER_CLASS: PLA_TYPE_A",
    intro: "All BaseLab units are fabricated from military-grade, bio-engineered PLA polymer substrate — extracted from botanical carbon chains for zero net atmospheric impact.",
    sections: [
      {
        title: "MATERIAL_ORIGIN >> BOTANICAL_PLA",
        body: "PLA (Polylactic Acid) is synthesised from vegetal carbohydrate chains — primarily maize and saccharum officinarum derivatives. Unlike petro-organic substrates, PLA degrades under controlled thermal/biological conditions. Classified FOOD-SAFE by international standards. Used extensively in bio-medical fabrication and aerospace tolerancing applications."
      },
      {
        title: "SELECTION_RATIONALE >> PRECISION + INTEGRITY",
        body: "PLA-grade substrate was selected for dimensional tolerance of ±0.1mm, superior Z-axis rigidity, and near-zero thermal deformation under standard operating environments. Detail fidelity across all geometries is exceptional — edges, radii, and surface relief features are resolved at sub-millimeter accuracy. Structural integrity rated for long-cycle daily-operation protocols."
      },
      {
        title: "EMISSION_FOOTPRINT >> -68% vs PETRO-PLASTICS",
        body: "PLA production outputs 68% fewer greenhouse gas emissions vs. conventional polymer synthesis chains. Zero BPA, zero microplastic leeching under standard exposure. End-of-life routing: industrial bio-composting facilities. Choosing PLA is a deployment decision — for superior performance with a lower system cost to the global ecosystem."
      },
      {
        title: "MAINTENANCE_PROTOCOL",
        body: "Avoid sustained exposure to thermal environments exceeding 60°C. Clean with micro-fibre cloth, lightly dampened. Do not submerge. Do not route through hydro-thermal cleaning cycles. Under nominal operating conditions, substrate retains full structural and aesthetic integrity across multi-year deployment windows."
      },
      {
        title: "FABRICATION_SPECS >> 0.1mm RESOLUTION",
        body: "All units are produced at 0.1mm layer resolution — finer than 100 microns. Post-fabrication surface treatment and QC inspection precede every shipment. Micro-stratification lines may be visible at extreme close range: this is the authentic mark of precision additive manufacturing."
      }
    ]
  }
};

const FAQ_DATA = {
  baselab: [
    {
      q: "What material is this product made from?",
      a: "All BaseLab products are made from premium PLA (Polylactic Acid), a plant-based, food-safe biopolymer. It's durable, precise, and environmentally responsible — chosen for its outstanding surface quality and long lifespan."
    },
    {
      q: "How do I look after my BaseLab piece?",
      a: "Keep it out of direct sunlight for extended periods and away from heat above 60°C. Wipe clean with a slightly damp cloth. It's not dishwasher or submersion safe. With simple care, your piece will look great for years."
    },
    {
      q: "How long does shipping take?",
      a: "Orders are typically dispatched within 1–2 working days. Standard delivery across India takes 4–7 working days. Express delivery is available at checkout. Once shipped, you'll receive a tracking link by email."
    },
    {
      q: "Can I return or exchange my order?",
      a: "We want you to love your purchase. If something isn't right, contact us within 7 days of receiving your order and we'll make it right — exchange, store credit, or refund. Items must be in their original condition."
    },
    {
      q: "Will the colour look exactly like the photos?",
      a: "We do our best to photograph products in accurate, neutral light. Slight variations may occur depending on your screen calibration. PLA colours are consistent and don't fade under normal use."
    },
    {
      q: "Are these mass-produced or handcrafted?",
      a: "Each BaseLab piece is precision-printed on professional-grade equipment one unit at a time, then hand-inspected. It's not mass-manufactured — every piece goes through a human quality check before it ships to you."
    }
  ],
  cyberpunk: [
    {
      q: "QUERY: SUBSTRATE_COMPOSITION?",
      a: "All BaseLab units are fabricated from PLA_GRADE_A polymer substrate — bio-derived from botanical carbohydrate chains. Food-safe clearance. Zero petroleum origin. Rated for long-cycle structural deployment."
    },
    {
      q: "QUERY: UNIT_MAINTENANCE_PROTOCOL?",
      a: "Avoid thermal exposure > 60°C. Clean with micro-fibre interface cloth, lightly hydrated. Do not submerge. Do not route through thermal-hydro cleaning systems. Under standard conditions, unit retains full integrity across multi-year operation."
    },
    {
      q: "QUERY: LOGISTICS_TIMELINE?",
      a: "Dispatch window: T+1 to T+2 working cycles. Standard transit: 4–7 working cycles across all India deployment zones. Express routing available at order confirmation. Tracking relay initiated upon dispatch."
    },
    {
      q: "QUERY: RETURN_PROTOCOL?",
      a: "Initiate return sequence within 7 cycles of unit receipt. Contact support relay. Units must be in original configuration. Eligible resolutions: exchange, store credit, or full fund recovery."
    },
    {
      q: "QUERY: COLOUR_ACCURACY?",
      a: "Product photon-capture conducted under calibrated neutral-spectrum lighting. Minor delta variations may occur across display hardware. PLA pigment channels are stable — zero fade under standard exposure conditions."
    },
    {
      q: "QUERY: PRODUCTION_METHODOLOGY?",
      a: "Each unit is singularly fabricated on professional-grade additive manufacture hardware. No mass-production assembly lines. Post-fabrication: manual QC inspection before all dispatch events."
    }
  ]
};

// FAQ data converted to AccordionItem format for SpringAccordion
function toAccordionItems(data: { q: string; a: string }[]): AccordionItem[] {
  return data.map((d) => ({ question: d.q, answer: d.a }));
}

export default function ArtifactDetailClient({ artifact }: ArtifactDetailClientProps) {
  const { addItem } = useCart();
  const { isCyberpunk } = useTheme();

  const materialCopy = isCyberpunk ? PLA_MATERIAL_COPY.cyberpunk : PLA_MATERIAL_COPY.baselab;
  const faqItems = isCyberpunk ? FAQ_DATA.cyberpunk : FAQ_DATA.baselab;

  return (
    <main className={`min-h-screen flex flex-col lg:flex-row pt-20 transition-colors duration-500 ${isCyberpunk ? "bg-[#080808] text-[#e8f4f8]" : "bg-white text-foreground"}`}>
      
      {/* Visualizer Display Pane */}
      <section className={`flex-1 min-h-[50vh] lg:min-h-screen relative flex items-center justify-center p-8 md:p-16 overflow-hidden cyber-scanlines transition-colors duration-500 ${isCyberpunk ? "bg-[#0a0a0a] lg:border-r border-[#00f5d4]/10 cyber-grid" : "bg-muted/30 lg:border-r border-black/5"}`}>
        {/* Subtle Background */}
        <div className={`absolute inset-0 z-0 opacity-40 pointer-events-none ${isCyberpunk ? "bg-gradient-to-br from-[#00f5d4]/5 to-transparent" : "bg-gradient-to-br from-white to-transparent"}`} />

        {/* Labels */}
        <div className="absolute top-8 left-8 flex items-center gap-2">
           <span className={`w-1.5 h-1.5 rounded-full ${isCyberpunk ? "bg-[#00f5d4] animate-pulse" : "bg-accent"}`} />
           <span className={`text-xs font-medium tracking-wide ${isCyberpunk ? "text-[#00f5d4]/70 font-mono uppercase" : "text-zinc-500"}`}>
             {isCyberpunk ? "AUTH_ITEM_VERIFIED" : "BaseLab Authentic"}
           </span>
        </div>
        
        {/* Image Container */}
        <div className="w-full max-w-[500px] aspect-square flex items-center justify-center p-8 relative z-10">
          {artifact.media.src ? (
            <img 
              src={artifact.media.src} 
              alt={artifact.title} 
              className={`w-full h-full object-contain drop-shadow-sm transition-transform duration-700 hover:scale-105 ${isCyberpunk ? "" : "mix-blend-multiply"}`}
            />
          ) : (
            <div className={`w-32 h-32 rounded-3xl border flex items-center justify-center ${isCyberpunk ? "border-[#00f5d4]/30 bg-[#0d1117]" : "border-black/5 bg-white shadow-sm"}`}>
              <div className={`w-3 h-3 rounded-full ${isCyberpunk ? "bg-[#00f5d4]/50" : "bg-zinc-300"}`} />
            </div>
          )}
        </div>

        {/* Cyberpunk corner accents */}
        {isCyberpunk && (
          <>
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00f5d4]/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00f5d4]/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00f5d4]/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00f5d4]/40" />
          </>
        )}
      </section>

      {/* Specifications & Actions Pane */}
      <section className={`w-full lg:w-[560px] xl:w-[680px] overflow-y-auto transition-colors duration-500 ${isCyberpunk ? "bg-[#080808]" : "bg-white"}`}>
        <div className="p-8 md:p-12 xl:p-16 space-y-10">
          
          <Link 
            href="/collections"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors w-fit ${isCyberpunk ? "text-[#00f5d4]/50 hover:text-[#00f5d4] font-mono tracking-wider uppercase" : "text-zinc-400 hover:text-foreground"}`}
          >
            <MoveLeft size={16} />
            {isCyberpunk ? "RETURN_TO_CATALOG" : "Back to Catalog"}
          </Link>
          
          {/* Title Block */}
          <div className="space-y-3">
            <span className={`text-sm font-semibold uppercase tracking-wide ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-accent"}`}>
              {isCyberpunk ? `SYS::${artifact.series.toUpperCase()}` : artifact.series}
            </span>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight ${isCyberpunk ? "text-[#e8f4f8] cyber-glow font-mono" : "text-foreground"}`}>
              {artifact.title}
            </h1>
          </div>
          
          <div>
             <div className={`text-lg font-medium leading-relaxed ${isCyberpunk ? "text-[#00f5d4]/60 font-mono" : "text-zinc-500"}`}>
                {isCyberpunk ? (
                  <DecryptedText 
                    text={artifact.description.toUpperCase()} 
                    animateOn="view" 
                    speed={40}
                  />
                ) : (
                  artifact.description
                )}
             </div>
          </div>

          <div className={`h-px w-full ${isCyberpunk ? "bg-[#00f5d4]/10" : "bg-black/5"}`} />

          {/* Tabbed Content Area */}
          <div className="space-y-6">
            <MagneticTabs 
              className="w-full"
              items={[
                { 
                  value: "specs", 
                  label: isCyberpunk ? "UNIT_SPECS" : "Specifications",
                  content: (
                    <div className="space-y-3 pt-4">
                       {artifact.specs.map((spec) => (
                         <div key={spec.label} className={`flex justify-between items-center py-3 border-b ${isCyberpunk ? "border-[#00f5d4]/10" : "border-black/5"}`}>
                           <span className={`text-sm font-medium ${isCyberpunk ? "text-[#00f5d4]/60 font-mono tracking-wider uppercase text-[10px]" : "text-zinc-500"}`}>
                             {isCyberpunk ? spec.label.toUpperCase() : spec.label}
                           </span>
                           <span className={`text-sm font-semibold text-right ${isCyberpunk ? "text-[#e8f4f8] font-mono" : "text-foreground"}`}>
                             {isCyberpunk ? spec.value.toUpperCase() : spec.value}
                           </span>
                         </div>
                       ))}
                    </div>
                  )
                },
                { 
                  value: "material", 
                  label: isCyberpunk ? "SUBSTRATE_LOGIC" : "Material Science",
                  content: (
                    <div className="space-y-6 pt-4">
                      <p className={`text-sm leading-relaxed font-medium ${isCyberpunk ? "text-[#00f5d4]/70 font-mono" : "text-zinc-500"}`}>
                        {materialCopy.intro}
                      </p>
                      <div className="space-y-4">
                        {materialCopy.sections.map((section, i) => (
                          <div key={i} className={`p-4 rounded-xl border ${isCyberpunk ? "bg-[#0d1117]/50 border-[#00f5d4]/10" : "bg-white/50 border-black/5 shadow-sm"}`}>
                             <h4 className={`text-xs font-bold mb-2 uppercase tracking-widest ${isCyberpunk ? "text-[#00f5d4] font-mono" : "text-foreground"}`}>
                               {section.title}
                             </h4>
                             <p className={`text-xs leading-relaxed ${isCyberpunk ? "text-[#00f5d4]/40 font-mono uppercase" : "text-zinc-500"}`}>
                               {section.body}
                             </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                },
                {
                  value: "faq",
                  label: isCyberpunk ? "QUERY_RELAY" : "Questions",
                  content: (
                    <div className="pt-4">
                       <SpringAccordion items={toAccordionItems(faqItems)} />
                    </div>
                  )
                }
              ]}
            />
          </div>

          <div className={`h-px w-full ${isCyberpunk ? "bg-[#00f5d4]/10" : "bg-black/5"}`} />

          {/* Price & Add to Cart */}
          <div className={`p-8 rounded-[2rem] border transition-all duration-700
            ${isCyberpunk ? "bg-[#0d1117] border-[#00f5d4]/20 shadow-[0_0_30px_rgba(0,245,212,0.05)]" : "bg-muted/10 border-black/5 shadow-sm"}`}>
            <div className="flex items-end justify-between mb-8">
              <div className="flex flex-col gap-1">
                 <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isCyberpunk ? "text-[#00f5d4]/50 font-mono" : "text-zinc-400"}`}>
                   {isCyberpunk ? "ACQUISITION_COST" : "Price"}
                 </span>
                 {isCyberpunk ? (
                   <span className="text-3xl font-bold tracking-tight text-[#00f5d4] cyber-glow font-mono">
                     {artifact.price}
                   </span>
                 ) : (
                   <TrueFocus
                     sentence={`₹${artifact.price}`}
                     className="text-3xl font-bold tracking-tight text-foreground"
                     focusRadius={60}
                   />
                 )}
              </div>
              
              <div className="text-right flex flex-col gap-1">
                 <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isCyberpunk ? "text-[#00f5d4]/50 font-mono" : "text-zinc-400"}`}>
                   {isCyberpunk ? "STOCK_STATUS" : "Status"}
                 </span>
                 <span className={`text-sm font-semibold uppercase tracking-widest ${artifact.status === 'AVAILABLE' ? (isCyberpunk ? "text-[#00f5d4]" : "text-accent") : "text-red-500"}`}>
                   {artifact.status === 'AVAILABLE' 
                     ? (isCyberpunk ? "READY_TO_DEPLOY" : "In Stock") 
                     : (isCyberpunk ? "UNIT_DEPLETED" : "Sold Out")}
                 </span>
              </div>
            </div>

            <SpringButton 
              onClick={() => addItem({
                id: artifact.id,
                slug: artifact.slug,
                title: artifact.title,
                price: artifact.price,
                quantity: 1,
                media: artifact.media
              })}
              className="w-full py-5 text-base"
              disabled={artifact.status === "SOLD_OUT"}
              variant="primary"
            >
              {artifact.status === "SOLD_OUT" 
                ? (isCyberpunk ? "UNIT_UNAVAILABLE" : "Currently Unavailable") 
                : (isCyberpunk ? "ADD_TO_CART.EXE" : "Add to Cart")}
            </SpringButton>
          </div>

          <div className={`h-px w-full ${isCyberpunk ? "bg-[#00f5d4]/10" : "bg-black/5"}`} />

          {/* FAQ Section */}
          <div className="space-y-6 pb-16">
            <h3 className={`text-xl font-semibold tracking-tight ${isCyberpunk ? "text-[#e8f4f8] font-mono uppercase" : "text-foreground"}`}>
              {isCyberpunk ? "QUERY_RESOLUTION_DATABASE" : "Frequently Asked Questions"}
            </h3>
            <SpringAccordion items={toAccordionItems(faqItems)} />
          </div>

        </div>
      </section>
    </main>
  );
}
