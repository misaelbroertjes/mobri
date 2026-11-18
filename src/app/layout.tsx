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
  title: "Website laten maken & Webdesign | Mobri Meppel",
  description: "Wil je een professionele website laten maken? Mobri in Meppel verzorgt webdesign, bouw en website-onderhoud voor ondernemers, met één vast aanspreekpunt.",
  alternates: {
    canonical: "https://www.mobri.nl/",
  },
  openGraph: {
    title: "Website laten maken & Webdesign | Mobri Meppel",
    description: "Professionele website laten maken, huisstijl & webdesign en zorgeloos onderhoud. Eén persoonlijk aanspreekpunt vanuit Meppel.",
    url: "https://www.mobri.nl/",
    siteName: "Mobri",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mobri | Websites, Webdesign & Onderhoud in Meppel",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
};

import Script from "next/script";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";

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
            "@id": "https://www.mobri.nl/#localbusiness",
            "name": "Mobri",
            "image": "https://www.mobri.nl/opengraph-image.png",
            "description": "Professionele websites laten maken, logo & huisstijl webdesign en zorgeloos website-onderhoud vanuit Meppel voor ondernemers in Drenthe, Overijssel en heel Nederland.",
            "founder": {
              "@type": "Person",
              "name": "Misaël Broertjes"
            },
            "areaServed": [
              { "@type": "City", "name": "Meppel" },
              { "@type": "City", "name": "Zwolle" },
              { "@type": "City", "name": "Steenwijk" },
              { "@type": "City", "name": "Hoogeveen" },
              { "@type": "AdministrativeArea", "name": "Drenthe" },
              { "@type": "AdministrativeArea", "name": "Overijssel" },
              { "@type": "Country", "name": "Nederland" }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bolsterturf 2",
              "addressLocality": "Meppel",
              "postalCode": "7942 MC",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.6937,
              "longitude": 6.1945
            },
            "telephone": "+31638125176",
            "email": "info@mobri.nl",
            "url": "https://www.mobri.nl/",
            "priceRange": "€€",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://www.linkedin.com/company/mobri"
            ]
          })
        }} />

        {/* Google Analytics Consent Mode v2 Default */}
        <Script id="google-analytics-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);};

            var storedConsent = null;
            try {
              storedConsent = localStorage.getItem('cookie-consent');
            } catch (e) {}
            var initialAnalytics = storedConsent === 'granted' ? 'granted' : 'denied';

            // Default consent (Consent Mode v2), respecting prior user choice before GA config fires
            window.gtag('consent', 'default', {
              'analytics_storage': initialAnalytics,
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
          `}
        </Script>

        {/* Umami Analytics (Cookieless, privacy-friendly) */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="ac8bc12a-794d-44de-837f-cc89d83a5523"
          strategy="afterInteractive"
        />

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
        suppressHydrationWarning
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
        <AnalyticsTracker />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}

