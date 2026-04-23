import type { Metadata } from "next";
import { Michroma, JetBrains_Mono as JetBrainsMono } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/Providers";
import { ThemeProvider } from "@/lib/contexts/ThemeContext";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { FloatingNavbar } from "@/components/ruixen/floating-navbar";
import { CyberpunkExtras } from "@/components/common/CyberpunkExtras";
import { cn } from "@/lib/utils";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
});

const jetbrains = JetBrainsMono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
    <html lang="en" className={cn("scroll-smooth", "font-jetbrains")}>
      <body className={`${michroma.variable} ${jetbrains.variable} font-jetbrains antialiased bg-background text-foreground selection:bg-accent selection:text-white`}>
        <ThemeProvider>
          <Providers>
            <SiteHeader />
            <CartDrawer />
            <FloatingNavbar />
            <CyberpunkExtras />
            <main className="relative">
              {children}
            </main>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

