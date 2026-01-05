import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: '#112A32',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mobri.nl"),
  title: "Mobri | Websites & Virtual Assistant",
  description: "Websites met een persoonlijke touch. Wij helpen ondernemers met professionele websites en support als Virtual Assistant.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Mobri | Websites & Virtual Assistant",
    description: "Professionele websites en Virtual Assistant services met een persoonlijke touch.",
    url: "https://www.mobri.nl",
    siteName: "Mobri",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
};

import Script from "next/script";
import { CookieBanner } from "@/components/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth" suppressHydrationWarning style={{ scrollPaddingTop: '100px' }}>
      <head>
        {/* Schema.org for Local Business */}
        <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mobri",
            "description": "Websites en Virtual Assistant services",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bolsterturf 2",
              "addressLocality": "Meppel",
              "postalCode": "7942 MC",
              "addressCountry": "NL"
            },
            "telephone": "+31638125176",
            "email": "info@mobri.nl",
            "url": "https://www.mobri.nl",
            "priceRange": "$$"
          })
        }} />

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

        {/* Google Tag Manager - Single Source of Truth */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MKW5BPB7');
          `}
        </Script>

        {/* Google Analytics Global Tag (Restore for guaranteed tracking) */}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKW5BPB7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

