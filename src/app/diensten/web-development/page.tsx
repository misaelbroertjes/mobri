import { ProductPageContent } from "@/components/ProductPageContent";
import { Monitor } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website laten maken | WordPress & Maatwerk | Mobri",
    description: "Een snelle, professionele website laten maken voor ZZP of MKB? Mobri bouwt vindbare WordPress en maatwerk Next.js websites vanuit Meppel. Plan een kennismaking.",
    alternates: {
        canonical: "https://www.mobri.nl/diensten/web-development/",
    },
    openGraph: {
        title: "Website laten maken | WordPress & Maatwerk | Mobri",
        description: "Een snelle, professionele website laten maken voor ZZP of MKB? Mobri bouwt vindbare WordPress en maatwerk websites vanuit Meppel.",
        url: "https://www.mobri.nl/diensten/web-development/",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Mobri - Website laten maken in WordPress en maatwerk" }],
    },
};

export default function WebDevelopmentPage() {
    return (
        <ProductPageContent
            title="Website laten maken"
            subtitle="WordPress & Maatwerk Websites"
            intro="Je wilt online net zo professioneel overkomen als in het echt, zonder uren kwijt te zijn aan techniek. Ik bouw een snelle, goed vindbare website voor je en richt direct heldere tracking in zodat je precies ziet wat bezoekers doen."
            image="/images/services/web-development.webp"
            imageAlt="Mobri - Professionele website laten maken in WordPress of Next.js maatwerk"
            subjectKey="web-development"
            icon={<Monitor className="w-16 h-16" />}
            serviceSchema={{
                name: "Website laten maken",
                serviceType: "Webdesign & Web Development",
                description: "Snelle, mobielvriendelijke en SEO-geoptimaliseerde websites laten maken in WordPress of maatwerk Next.js voor ZZP en MKB.",
                url: "https://www.mobri.nl/diensten/web-development/",
            }}
            sections={[
                {
                    title: "Een basis die past bij hoe jij werkt",
                    content: "Wil je zelf eenvoudig teksten en foto's aanpassen, of besteed je dat liever uit? Op basis van jouw manier van werken kies ik de beste basis: een overzichtelijke WordPress-website of een razendsnelle maatwerksite in Next.js.",
                },
                {
                    title: "Vindbaar én inzichtelijk",
                    content: "Niets is frustrerender dan een website waarvan je niet weet of er iemand kijkt. Daarom krijgt elke site direct een sterke SEO-basis voor Google, duidelijke contactknoppen en simpele, privacyvriendelijke statistieken.",
                },
                {
                    title: "Eén aanspreekpunt, geen ruis",
                    content: "Je hoeft niet te schakelen tussen een losse ontwerper en een programmeur. Omdat ik zowel het webdesign als de bouw verzorg vanuit Meppel, blijft alles strak op elkaar afgestemd en krijg je snel antwoord.",
                },
            ]}
            steps={[
                {
                    title: "Kennismaking & Doel",
                    description: "We bespreken jouw bedrijf, je doelgroep en wat de website voor je moet doen, zoals informatie bieden, aanvragen verzamelen of beter vindbaar worden in Google.",
                },
                {
                    title: "Webdesign & Structuur",
                    description: "Ik werk een heldere pagina-indeling en een ontwerp uit dat aansluit op jouw huisstijl en direct vertrouwen wekt bij bezoekers.",
                },
                {
                    title: "Bouw, Snelheid & SEO-basis",
                    description: "Ik realiseer de website op mobiel en desktop, zorg voor optimale laadsnelheid, veilige formulieren en technische vindbaarheid in Google.",
                },
                {
                    title: "Livegang & Nazorg",
                    description: "Na jouw akkoord zetten we de website live en blijf ik beschikbaar voor aanpassingen, updates en doorlopend website-onderhoud.",
                },
            ]}
            faqs={[
                {
                    question: "Wat kost een website laten maken bij Mobri?",
                    answer: "De investering hangt af van de omvang en jouw wensen, van een overzichtelijke bedrijfswebsite voor een ZZP'er tot een uitgebreider maatwerkplatform voor MKB. Na een korte, vrijblijvende kennismaking ontvang je altijd een helder en vast voorstel vooraf.",
                },
                {
                    question: "Kan ik zelf teksten en foto's aanpassen?",
                    answer: "Ja. Kies je voor een WordPress website, dan kun je zelf eenvoudig teksten, foto's en nieuwe pagina's beheren. Wil je liever geen omkijken naar je site hebben? Dan neem ik wijzigingen en updates uit handen via website onderhoud & content beheer.",
                },
                {
                    question: "Hoe lang duurt het om een website te laten maken?",
                    answer: "Gemiddeld staat een nieuwe bedrijfswebsite binnen 3 tot 6 weken live, afhankelijk van de omvang en hoe snel teksten, foto's en feedback beschikbaar zijn.",
                },
                {
                    question: "Is mijn website meteen goed vindbaar in Google?",
                    answer: "De technische basis voor Google staat er standaard goed in: snelle laadtijd, mobielvriendelijk ontwerp, schone URL's, goede paginatitels, een sitemap en Schema.org. Samen zorgen we ervoor dat de teksten aansluiten op hoe jouw doelgroep zoekt.",
                },
                {
                    question: "Bouw je alleen websites in Meppel of ook daarbuiten?",
                    answer: "Ik werk vanuit Meppel en kom graag persoonlijk langs in de regio (o.a. Zwolle, Steenwijk, Hoogeveen, Drenthe en Overijssel), maar help net zo makkelijk ondernemers door heel Nederland via video-overleg en WhatsApp.",
                },
            ]}
            relatedLinks={[
                {
                    title: "Webdesign Meppel",
                    description: "Lokaal en persoonlijk een website laten maken in Meppel en omgeving.",
                    href: "/webdesign-meppel/",
                },
                {
                    title: "Logo, Huisstijl & Webdesign",
                    description: "Eerst een herkenbaar logo of complete huisstijl die doorloopt in je website.",
                    href: "/diensten/design/",
                },
                {
                    title: "Website Onderhoud & Beheer",
                    description: "Houd je website na livegang veilig, snel en altijd up-to-date.",
                    href: "/diensten/onderhoud-content-support/",
                },
            ]}
            ctaLabel="Plan gratis kennismaking"
        />
    );
}
