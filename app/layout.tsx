import type { Metadata } from "next";
import { Bodoni_Moda, Jost, Geist } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { FloatingNavbar } from "@/components/ruixen/floating-navbar";
import { CyberpunkExtras } from "@/components/common/CyberpunkExtras";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BaseLab",
  description: "Premium essentials designed for the modern lifestyle. Clean, durable, and minimal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${bodoni.variable} ${jost.variable} font-jost antialiased bg-background text-foreground selection:bg-accent selection:text-white`}>
        <ThemeProvider>
          <Providers>
            <SiteHeader />
            <CartDrawer />
            <FloatingNavbar />
            <CyberpunkExtras />
            <div className="pt-20">
              {children}
            </div>
            <SiteFooter />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

