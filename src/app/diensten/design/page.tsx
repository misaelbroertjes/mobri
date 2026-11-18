import { ProductPageContent } from "@/components/ProductPageContent";
import { PenTool } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Logo, Huisstijl & Webdesign laten ontwerpen | Mobri",
    description: "Wil je een logo, digitale huisstijl of webdesign laten ontwerpen dat direct aansluit op jouw website? Mobri ontwerpt vanuit Meppel voor ondernemers in heel Nederland.",
    alternates: {
        canonical: "https://www.mobri.nl/diensten/design/",
    },
    openGraph: {
        title: "Logo, Huisstijl & Webdesign laten ontwerpen | Mobri",
        description: "Logo en huisstijl laten ontwerpen die naadloos aansluiten op jouw website? Professioneel design vanuit Meppel voor ZZP en MKB.",
        url: "https://www.mobri.nl/diensten/design/",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Mobri - Logo, huisstijl en webdesign laten ontwerpen" }],
    },
};

export default function DesignPage() {
    return (
        <ProductPageContent
            title="Logo, huisstijl & webdesign"
            subtitle="Herkenbare Visuele Identiteit"
            intro="Als iemand jouw bedrijf googelt na een gesprek of aanbeveling, heb je maar een paar seconden voor een goede eerste indruk. Ik ontwerp een herkenbaar logo, een rustige huisstijl en een modern webdesign waar je met trots je naam onder zet."
            image="/images/services/design.webp"
            imageAlt="Mobri - Logo, huisstijl en professioneel webdesign laten ontwerpen"
            subjectKey="design"
            icon={<PenTool className="w-16 h-16" />}
            serviceSchema={{
                name: "Logo, Huisstijl & Webdesign",
                serviceType: "Grafisch Ontwerp & Webdesign",
                description: "Logo laten ontwerpen, complete huisstijl (kleuren, typografie) en professioneel webdesign voor ZZP en MKB.",
                url: "https://www.mobri.nl/diensten/design/",
            }}
            sections={[
                {
                    title: "Een uitstraling die blijft hangen",
                    content: "Met een herkenbaar logo, passende kleuren en duidelijke lettertypes zien bezoekers direct wie je bent. Alles leg ik overzichtelijk vast, zodat je overal dezelfde professionele lijn aanhoudt.",
                },
                {
                    title: "Rust en overzicht voor je bezoeker",
                    content: "Bezoekers haken af op drukke, rommelige pagina's. Daarom ontwerp ik overzichtelijke websites die prettig lezen op mobiel én desktop en je bezoeker rustig naar de juiste informatie of contactknop helpen.",
                },
                {
                    title: "Eén lijn in al je online uitingen",
                    content: "Naast je website denk ik ook graag mee over social media templates, een LinkedIn-banner of een digitale presentatie. Zo sluit je hele online uitstraling netjes op elkaar aan.",
                },
            ]}
            steps={[
                {
                    title: "Kennismaking & Merkrichting",
                    description: "Wie ben je, wie is je ideale klant en welk gevoel moet jouw merk oproepen? Samen bepalen we de stijlrichting en voorbeelden.",
                },
                {
                    title: "Ontwerp & Verfijning",
                    description: "Ik werk concrete ontwerpvoorstellen uit voor je logo, digitale huisstijl of webdesign en scherp deze aan op basis van jouw feedback.",
                },
                {
                    title: "Oplevering & Digitale Stijlgids",
                    description: "Je ontvangt alle bron- en gebruiksbestanden (SVG, PNG, PDF) inclusief kleurcodes en lettertypes, direct klaar voor website, e-mail en social media.",
                },
            ]}
            faqs={[
                {
                    question: "Kan ik mijn huisstijl direct combineren met een nieuwe website?",
                    answer: "Ja, dat is juist het grootste voordeel van Mobri. Omdat ik zowel het ontwerp als de bouw van de website doe, sluiten je logo, kleuren, lettertypes en website vanaf dag één perfect op elkaar aan.",
                },
                {
                    question: "Hoe lang duurt het ontwerpen van een logo en huisstijl?",
                    answer: "Een gemiddeld logo- en huisstijltraject duurt 2 tot 4 weken, afhankelijk van de wensen en het aantal feedbackrondes.",
                },
                {
                    question: "Krijg ik alle bronbestanden na oplevering?",
                    answer: "Zeker. Je ontvangt alle gangbare digitale formaten (zoals SVG, PNG en PDF) inclusief je kleurcodes en lettertypes, zodat je nergens aan vastzit.",
                },
                {
                    question: "Ontwerp je ook social media templates of online banners?",
                    answer: "Ja, ik richt me volledig op digitaal design: naast webdesign, logo en huisstijl help ik je ook met herbruikbare templates voor bijvoorbeeld LinkedIn, Instagram en je e-mailhandtekening.",
                },
            ]}
            relatedLinks={[
                {
                    title: "Website laten maken",
                    description: "Laat je nieuwe huisstijl direct tot leven komen in een snelle website.",
                    href: "/diensten/web-development/",
                },
                {
                    title: "Webdesign Meppel",
                    description: "Persoonlijk sparren aan tafel in Meppel en omgeving.",
                    href: "/webdesign-meppel/",
                },
                {
                    title: "Website Onderhoud & Beheer",
                    description: "Houd je website en content blijvend fris en consistent.",
                    href: "/diensten/onderhoud-content-support/",
                },
            ]}
            ctaLabel="Bespreek jouw uitstraling"
        />
    );
}
