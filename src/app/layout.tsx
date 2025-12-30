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

import Script from "next/script";
import { CookieBanner } from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* Google Analytics Consent Mode Default */}
        <Script id="google-analytics-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Default consent to 'denied'
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
          `}
        </Script>

        {/* Google Analytics Global Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B516DT6MVG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-B516DT6MVG');
          `}
        </Script>
      </head>
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "antialiased min-h-screen font-sans"
        )}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

