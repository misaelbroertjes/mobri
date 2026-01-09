import { ProductPageContent } from "@/components/ProductPageContent";
import { Monitor } from "lucide-react";

export default function WebDevelopmentPage() {
    return (
        <ProductPageContent
            title="Web Development"
            subtitle="Moderne Digitale Expertise"
            intro="Wij bouwen niet zomaar websites. Wij creëren digitale fundamenten die schaalbaar, razendsnel en conversie-gericht zijn. Van complexe webapplicaties tot strakke bedrijfsportfolio's."
            image="/images/services/web-development.png"
            icon={<Monitor className="w-16 h-16" />}
            sections={[
                {
                    title: "CMS & Maatwerk",
                    content: "Wij zijn flexibel in onze aanpak. Of je nu de vertrouwde kracht van WordPress CMS nodig hebt of de grenzeloze mogelijkheden van een Next.js maatwerk oplossing, wij bouwen wat het beste bij jouw doelen past.",
                },
                {
                    title: "De Menselijke Maat in AI",
                    content: "We benutten de snelheid van AI om efficiënter te bouwen, maar het menselijk oog blijft cruciaal. Wij begrijpen wat je echt wilt en vertalen complexe vragen naar begrijpelijke antwoorden en oplossingen.",
                },
                {
                    title: "Design & Realisatie",
                    content: "Van de eerste schets tot de volledige technische realisatie; wij zorgen voor een visueel sterke website die technisch perfect in elkaar steekt en jouw merk versterkt.",
                },
            ]}
            steps={[
                {
                    title: "Strategie & Blauwdruk",
                    description: "We duiken in jouw doelen en vertalen deze naar een technisch plan en user flows.",
                },
                {
                    title: "Design & Concept",
                    description: "Een uniek ontwerp dat jouw merkidentiteit ademt en je doelgroep aanspreekt.",
                },
                {
                    title: "Bouw & Integratie",
                    description: "De realisatie van de site met focus op performance, beveiliging en gebruiksvriendelijkheid.",
                },
                {
                    title: "Livegang & Optimalisatie",
                    description: "Na de lancering blijven we monitoren en bijsturen voor het beste resultaat.",
                },
            ]}
            faqs={[
                {
                    question: "Wat kost een website bij Mobri?",
                    answer: "De kosten hangen volledig af van jouw specifieke wensen en de complexiteit van het project. Of het nu gaat om een groot platform of een bescheiden start; we denken graag met je mee over een passende oplossing binnen jouw budget.",
                },
                {
                    question: "Kan ik zelf teksten en foto's aanpassen?",
                    answer: "Bij websites die we bouwen met een CMS (zoals WordPress) heb je volledige controle over je eigen content. Voor specifieke maatwerk-oplossingen bespreken we vooraf wat jij zelf wilt kunnen beheren.",
                },
                {
                    question: "Hoe lang duurt het bouwen van een website?",
                    answer: "Gemiddeld duurt een project tussen de 4 en 8 weken, afhankelijk van de complexiteit en de snelheid van de feedbackrondes.",
                },
                {
                    question: "Is mijn website goed vindbaar in Google?",
                    answer: "Absoluut. Goede techniek en SEO zijn bij ons de standaard, niet een optie achteraf.",
                },
            ]}
            ctaLabel="Zullen we even kennismaken?"
        />
    );
}
