import Link from "next/link";

const FOOTER_GROUPS = [
  {
    title: "SHOP",
    links: [
      { label: "ALL OBJECTS", href: "/collections" },
      { label: "LIMITED DROPS", href: "/drops" },
      { label: "ARCHIVE", href: "/archive" },
    ],
  },
  {
    title: "BRAND",
    links: [
      { label: "PHILOSOPHY", href: "/philosophy" },
      { label: "MANUFACTURING", href: "/lab" },
      { label: "JOURNAL", href: "/journal" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "CONTACT", href: "/contact" },
      { label: "SHIPPING", href: "/shipping" },
      { label: "SYSTEM LOGS", href: "/legal" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-heading tracking-widest text-white mb-6">VOIDLAB</h2>
            <p className="text-[10px] text-zinc-600 font-mono tracking-widest max-w-[200px] leading-relaxed uppercase">
              Artifacts from the future. Manufactured today through layered fabrication systems.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold tracking-[0.3em] text-white mb-8">{group.title}</h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[10px] font-mono text-zinc-600 hover:text-accent transition-colors tracking-widest uppercase"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-zinc-700">
          <span className="text-[10px] font-mono tracking-widest leading-loose uppercase">
            © 2026 VOIDLAB // ALL RIGHTS RESERVED
          </span>
          <span className="text-[9px] font-mono tracking-widest uppercase mt-4 md:mt-0">
            PROTO:001 // SYSTEM:STABLE
          </span>
        </div>
      </div>
    </footer>
  );
}
