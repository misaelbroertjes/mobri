import { ProductPageContent } from "@/components/ProductPageContent";
import { Wrench } from "lucide-react";

export default function OnderhoudPage() {
    return (
        <ProductPageContent
            title="Onderhoud & Content Support"
            subtitle="Continuïteit & Relevantie"
            intro="Een website is nooit 'klaar'. Wij zorgen dat jouw platform technisch up-to-date blijft en dat je content altijd fris en relevant is, zonder dat jij er omkijken naar hebt."
            image="/images/services/onderhoud.png"
            icon={<Wrench className="w-16 h-16" />}
            sections={[
                {
                    title: "Content uit handen",
                    content: "Geen tijd of zin om zelf blogs, nieuwe teksten of projecten te plaatsen? Stuur het naar ons en wij zorgen dat het direct en netjes online komt te staan.",
                },
                {
                    title: "Consistente Uitstraling",
                    content: "We kijken verder dan alleen je website. We helpen je om je uitingen ook op andere platformen consistent te houden, zodat je merk overal hetzelfde gevoel uitstraalt.",
                },
                {
                    title: "Technische Veiligheid",
                    content: "Wij houden je software, plugins en beveiliging wekelijks up-to-date. Zo blijft je site snel, veilig en loop je geen risico op downtime of hacks.",
                },
            ]}
            steps={[
                {
                    title: "Scan & Inventarisatie",
                    description: "We kijken naar je huidige website en processen om te bepalen waar we de meeste waarde kunnen toevoegen.",
                },
                {
                    title: "Optimalisatie & Setup",
                    description: "We voeren een eerste grote optimalisatie uit om je site klaar te maken voor doorlopend beheer, waarbij we kijken naar snelheid en stabiliteit.",
                },
                {
                    title: "Doorlopende Support",
                    description: "We plaatsen regelmatig nieuwe content en voeren technisch onderhoud uit, zodat je platform altijd 'up-to-date' en actief oogt.",
                },
            ]}
            faqs={[
                {
                    question: "Hoe gaat het plaatsen van content in zijn werk?",
                    answer: "Heel simpel: jij stuurt ons de ruwe info (bijv. via mail of WhatsApp). Wij zorgen niet alleen dat het professioneel geplaatst wordt, maar vullen info aan of corrigeren waar nodig zodat het perfect op de site staat.",
                },
                {
                    question: "Werken jullie met projecten of abonnementen?",
                    answer: "Beide is mogelijk. Voor eenmalige grote klussen werken we op projectbasis, maar voor doorlopende content support en technisch onderhoud bieden we flexibele maandelijkse abonnementen.",
                },
                {
                    question: "Wat als ik zelf al een blog heb geschreven maar deze nog niet af is?",
                    answer: "Geen probleem! Wij kunnen je conceptteksten oppakken, redigeren en voorzien van passende afbeeldingen voordat we ze publiceren.",
                },
                {
                    question: "Wat als er plotseling iets kapot gaat aan de site?",
                    answer: "Onze monitoring geeft ons direct een seintje. In de meeste gevallen hebben we het al opgelost voordat je het zelf in de gaten hebt.",
                },
            ]}
            ctaLabel="Eens kijken of het klikt?"
        />
    );
}
