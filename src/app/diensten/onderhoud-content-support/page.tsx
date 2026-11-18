import { ProductPageContent } from "@/components/ProductPageContent";
import { Wrench } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website onderhoud uitbesteden & Content Beheer | Mobri",
    description: "Website of WordPress onderhoud uitbesteden? Mobri regelt updates, beveiliging, back-ups en content-aanpassingen, zodat jouw website altijd snel en veilig blijft.",
    alternates: {
        canonical: "https://www.mobri.nl/diensten/onderhoud-content-support/",
    },
    openGraph: {
        title: "Website onderhoud uitbesteden & Content Beheer | Mobri",
        description: "Website of WordPress onderhoud uitbesteden? Updates, beveiliging, back-ups en snelle hulp bij nieuwe teksten of foto's.",
        url: "https://www.mobri.nl/diensten/onderhoud-content-support/",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Mobri - Website onderhoud uitbesteden en content beheer" }],
    },
};

export default function OnderhoudPage() {
    return (
        <ProductPageContent
            title="Website onderhoud & content beheer"
            subtitle="Zorgeloos Websitebeheer"
            intro="Geen stress meer over haperende updates, veiligheidslekken of teksten die al maanden achterlopen. Besteed het onderhoud van je website uit, dan houd ik jouw WordPress- of maatwerkwebsite snel, veilig en actueel."
            image="/images/services/onderhoud.webp"
            imageAlt="Mobri - Website en WordPress onderhoud uitbesteden inclusief content beheer"
            subjectKey="onderhoud"
            icon={<Wrench className="w-16 h-16" />}
            serviceSchema={{
                name: "Website onderhoud uitbesteden & Content Beheer",
                serviceType: "Website Onderhoud & WordPress Beheer",
                description: "Technisch website- en WordPress-onderhoud: updates, back-ups, beveiliging, uptime-monitoring en snelle content-aanpassingen.",
                url: "https://www.mobri.nl/diensten/onderhoud-content-support/",
            }}
            sections={[
                {
                    title: "Geen zorgen over updates en hacks",
                    content: "Verouderde plugins en thema's zijn vaak de reden dat een website traag wordt of kapotgaat. Ik voer updates gecontroleerd uit, maak regelmatig back-ups en controleer of formulieren en pagina's daarna gewoon blijven werken.",
                },
                {
                    title: "Snel iets aangepast zonder zelf te prutsen",
                    content: "Nieuwe foto's, aangepaste tarieven of een extra dienst online zetten hoeft je geen avond te kosten. Stuur een kort bericht via WhatsApp of e-mail, dan plaats ik het netjes en in stijl op je website.",
                },
                {
                    title: "Altijd snel en stabiel online",
                    content: "Met doorlopende monitoring en regelmatig onderhoud blijft je website vlot laden en betrouwbaar werken. Dat geeft jou rust én zorgt voor een fijne ervaring voor je bezoekers.",
                },
            ]}
            steps={[
                {
                    title: "Website-check & Nulmeting",
                    description: "Ik kijk je huidige website na op verouderde plugins, beveiliging, laadsnelheid en eventuele fouten, en maak eerst een veilige back-up.",
                },
                {
                    title: "Opschonen & Beveiligen",
                    description: "Ik werk achterstallige updates weg, ruim onnodige ballast op en richt automatische back-ups en monitoring in.",
                },
                {
                    title: "Doorlopend Beheer & Support",
                    description: "Elke maand blijven updates en veiligheid netjes bij, en heb je één direct aanspreekpunt zodra je iets wilt aanpassen of toevoegen.",
                },
            ]}
            faqs={[
                {
                    question: "Kan ik ook een bestaande WordPress website in onderhoud geven?",
                    answer: "Ja, ook als je website ooit door iemand anders is gebouwd. Ik doe eerst een korte technische check en neem daarna het onderhoud en beheer veilig van je over.",
                },
                {
                    question: "Hoe werkt het doorgeven van tekst- of foto-aanpassingen?",
                    answer: "Heel laagdrempelig: je stuurt je nieuwe tekst, foto of wijziging via e-mail of WhatsApp. Ik zorg dat het netjes wordt opgemaakt, geoptimaliseerd voor snelheid en direct op de juiste plek op je website komt.",
                },
                {
                    question: "Werk je met vaste maandpakketten of losse uren?",
                    answer: "Beide is mogelijk. Voor doorlopend technisch onderhoud en kleine wijzigingen werkt een flexibel maandelijks onderhoudspakket het prettigst; voor een eenmalige opschoonbeurt of grote update maken we gewoon een losse prijsafspraak.",
                },
                {
                    question: "Wat gebeurt er als een update iets stukmaakt of mijn site offline gaat?",
                    answer: "Doordat ik updates gecontroleerd uitvoer én recente back-ups klaar heb staan, los ik eventuele problemen snel op, vaak nog voordat een bezoeker er iets van merkt.",
                },
            ]}
            relatedLinks={[
                {
                    title: "Website laten maken",
                    description: "Toe aan een compleet nieuwe, snelle website in plaats van opknappen?",
                    href: "/diensten/web-development/",
                },
                {
                    title: "Logo, Huisstijl & Webdesign",
                    description: "Geef je bestaande site een frisse, professionele uitstraling.",
                    href: "/diensten/design/",
                },
                {
                    title: "Webdesign Meppel",
                    description: "Persoonlijke ondersteuning vanuit Meppel voor ondernemers in de regio.",
                    href: "/webdesign-meppel/",
                },
            ]}
            ctaLabel="Bespreek jouw website-onderhoud"
        />
    );
}
