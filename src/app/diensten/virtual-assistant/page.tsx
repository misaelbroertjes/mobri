import { ProductPageContent } from "@/components/ProductPageContent";
import { MessageSquareHeart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Virtual Assistant Services | Mobri",
    description: "Strategische backoffice ondersteuning voor jouw bedrijf. Van operationele ontzorging tot proactief meedenken over jouw groei. Jouw partner in succes.",
    alternates: {
        canonical: "https://www.mobri.nl/diensten/virtual-assistant",
    },
};

export default function VirtualAssistantPage() {
    return (
        <ProductPageContent
            title="Virtual Assistant"
            subtitle="Strategische Ondersteuning"
            intro="Fungeer als de strategische backoffice van je bedrijf. Van het overnemen van je dagelijkse to-do's tot het meedenken over je groei, wij pakken de taken op waar jij geen tijd voor hebt."
            image="/images/services/virtual-assistant.png"
            icon={<MessageSquareHeart className="w-16 h-16" />}
            sections={[
                {
                    title: "Operationele Ontzorging",
                    content: "Wij schrijven teksten, beheren je inbox en zorgen dat je social media levendig blijft met een consistente tone-of-voice.",
                },
                {
                    title: "Workflow & Proces",
                    content: "We kijken naar je huidige werkwijze en automatiseren of optimaliseren waar mogelijk. Zo werk jij slimmer, niet harder.",
                },
                {
                    title: "Partner in Groei",
                    content: "We zijn niet alleen uitvoerders, maar denken proactief met je mee over de volgende stappen voor jouw onderneming.",
                },
            ]}
            steps={[
                {
                    title: "Kennismaking & Audit",
                    description: "Welke taken vreten je energie? We mappen je huidige werkwijze en knelpunten.",
                },
                {
                    title: "Inrichting & Overdracht",
                    description: "We richten de nodige systemen in en maken afspraken over de samenwerking en communicatie.",
                },
                {
                    title: "Doorlopende Ondersteuning",
                    description: "Dagelijkse of wekelijkse ondersteuning waarbij we proactief taken uit handen nemen.",
                },
            ]}
            faqs={[
                {
                    question: "Welke tools gebruiken jullie voor de samenwerking?",
                    answer: "Wij schikken ons volledig naar de werkwijze van onze klant. Of je nu zweert bij een specifieke projecttool of liever via mail communiceert; wij passen ons aan. Daarnaast denken we graag mee over tools die je workflow nog verder kunnen verbeteren.",
                },
                {
                    question: "Hoeveel uur per week kan ik ondersteuning krijgen?",
                    answer: "Dit is volledig flexibel. We werken vaak met strippenkaarten of vaste maandpakketten vanaf enkele uren per week, afhankelijk van jouw behoeften.",
                },
                {
                    question: "Hoe borgen jullie de privacy van mijn gegevens?",
                    answer: "Beveiliging is prioriteit. We werken met veilige tools en strikte afspraken om jouw data en die van je klanten te beschermen.",
                },
                {
                    question: "Kan ik de samenwerking ook tijdelijk opschalen?",
                    answer: "Zeker. Heb je een drukke periode of een specifiek project? Dan kijken we samen naar extra capaciteit om je te ontlasten.",
                },
            ]}
            ctaLabel="Laten we een bakkie doen?"
        />
    );
}
