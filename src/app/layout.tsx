import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Inter & Outfit
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mobri | Websites & Digital Assistance",
  description: "Professionele websites en digitale ondersteuning met een persoonlijke touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "antialiased min-h-screen font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}

