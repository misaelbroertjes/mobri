import { ProductPageContent } from "@/components/ProductPageContent";
import { PenTool } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Design & Branding | Mobri",
    description: "Krachtige visuele identiteiten die jouw verhaal vertellen. Van logo-ontwerp tot complete brand identity en UI/UX design.",
    alternates: {
        canonical: "https://www.mobri.nl/diensten/design/",
    },
};

export default function DesignPage() {
    return (
        <ProductPageContent
            title="Design & Branding"
            subtitle="Visuele Autoriteit"
            intro="Een merk is meer dan een logo. Het is het gevoel dat je achterlaat. Wij vertalen jouw visie naar een krachtige identiteit die herkenbaar en tijdloos is."
            image="/images/services/design.png"
            icon={<PenTool className="w-16 h-16" />}
            sections={[
                {
                    title: "Brand Identity",
                    content: "Ontwikkeling van logo's, typografie en kleurenpaletten die jouw unieke verhaal vertellen.",
                },
                {
                    title: "UI/UX Design",
                    content: "Digitale interfaces die niet alleen mooi zijn, maar ook logisch aanvoelen voor de eindgebruiker.",
                },
                {
                    title: "Marketing Assets",
                    content: "Van social media templates tot offline uitingen; wij zorgen voor een consistente uitstraling overal.",
                },
            ]}
            steps={[
                {
                    title: "Brand Discovery",
                    description: "Wie ben je en wie wil je zijn? We graven diep naar de kern van jouw merk.",
                },
                {
                    title: "Concept Design",
                    description: "We presenteren diverse richtingen en itereren op basis van jouw feedback tot we de perfecte snaar raken.",
                },
                {
                    title: "Design System",
                    description: "We leggen alles vast in een Brand Guide zodat je merk overal eenduidig wordt uitgedragen.",
                },
            ]}
            faqs={[
                {
                    question: "Hoe lang duurt een branding traject?",
                    answer: "Een gemiddeld traject van strategie tot complete huisstijl duurt tussen de 2 en 4 weken. Dit is echter afhankelijk van jouw specifieke wensen en de materialen die al aanwezig zijn.",
                },
                {
                    question: "Krijg ik ook de bronbestanden?",
                    answer: "Zeker. Bij oplevering ontvang je alle relevante formaten (SVG, PNG, PDF) en de originele werkbestanden zodat je nooit afhankelijk bent.",
                },
                {
                    question: "Bieden jullie ook losse design klussen aan?",
                    answer: "Hoewel we vaak complete branding trajecten doen, ondersteunen we onze bestaande klanten ook graag met losse uitingen of aanpassingen.",
                },
                {
                    question: "Kunnen jullie ook helpen met drukwerk?",
                    answer: "Absoluut. Wij leveren alles drukklaar aan en kunnen, indien gewenst, ook de afstemming met de drukker voor je regelen.",
                },
            ]}
            ctaLabel="Kijken of er een klik is?"
        />
    );
}
