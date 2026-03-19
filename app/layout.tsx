import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CartDrawer } from "@/components/layout/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "UNIT_01 // Physical Design Protocol",
  description: "A contemporary design studio exploring the intersection of material science and geometric form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}>
        <Providers>
          <SiteHeader />
          <CartDrawer />
          <div className="pt-20">
            {children}
          </div>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
