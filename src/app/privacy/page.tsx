import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacyverklaring | Mobri",
    description: "Privacyverklaring van mobri.nl",
    alternates: {
        canonical: "https://www.mobri.nl/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Header />

            <article className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-secondary">
                            Privacyverklaring <span className="text-primary">Mobri</span>
                        </h1>
                        <p className="text-muted-foreground italic">Laatst bijgewerkt: 3 januari 2026</p>
                    </header>

                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-10 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">1. Wie zijn wij?</h2>
                            <p>
                                Mobri (eenmanszaak), gevestigd aan Bolsterturf 2, 7942 MC Meppel, Nederland. KvK: 66470188.
                            </p>
                            <ul className="list-none space-y-1 mt-4">
                                <li><strong>E-mail:</strong> <a href="mailto:info@mobri.nl" className="text-primary hover:underline">info@mobri.nl</a></li>
                                <li><strong>Telefoon:</strong> <a href="tel:0638125176" className="text-primary hover:underline">06-38125176</a></li>
                            </ul>
                            <p className="mt-4">
                                Mobri is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">2. Welke persoonsgegevens verwerken wij?</h2>
                            <p>Afhankelijk van hoe je contact met ons opneemt of met ons samenwerkt, kunnen we de volgende gegevens verwerken:</p>
                            <ul className="list-disc pl-6 space-y-3 mt-4">
                                <li><strong>Contact- en aanvraaggegevens:</strong> naam, bedrijfsnaam, e-mailadres, telefoonnummer, onderwerp en de inhoud van je bericht.</li>
                                <li><strong>Project- en klantgegevens:</strong> gegevens die nodig zijn om afspraken te maken en werkzaamheden uit te voeren (bijv. factuurgegevens, communicatie, planning).</li>
                                <li><strong>Betaal- en administratieve gegevens:</strong> facturen, betalingen, btw-gegevens (voor zover nodig).</li>
                                <li><strong>Websitegegevens:</strong> IP-adres (vaak geanonimiseerd of deels), apparaat-/browsergegevens, pagina’s die je bezoekt, en vergelijkbare gegevens via cookies (zie hoofdstuk 7).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">3. Waarom verwerken wij jouw gegevens?</h2>
                            <p>We verwerken persoonsgegevens alleen als daar een reden voor is en alleen voor doelen zoals:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Om je bericht te beantwoorden en contact met je op te nemen.</li>
                                <li>Om een offerte te maken en een overeenkomst met je te sluiten en uit te voeren.</li>
                                <li>Om facturen te sturen, betalingen te verwerken en onze administratie te doen.</li>
                                <li>Om onze website te beveiligen en goed te laten werken.</li>
                                <li>Om inzicht te krijgen in het gebruik van onze website (bijv. via beperkte analytics).</li>
                                <li>(Alleen als je toestemming geeft) om je marketing/nieuwsbrieven te sturen.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">4. Op welke grondslagen doen we dit?</h2>
                            <p>We verwerken persoonsgegevens op basis van één of meer van deze grondslagen:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Uitvoering van een overeenkomst:</strong> (of om stappen te zetten vóórdat een overeenkomst wordt gesloten).</li>
                                <li><strong>Wettelijke verplichting:</strong> (bijv. administratie- en bewaarplicht voor facturen).</li>
                                <li><strong>Gerechtvaardigd belang:</strong> (bijv. beveiliging, het voorkomen van misbruik, beperkt website-onderzoek).</li>
                                <li><strong>Toestemming:</strong> (bijv. nieuwsbrief en marketingcookies).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">5. Hoe lang bewaren we jouw gegevens?</h2>
                            <p>We bewaren persoonsgegevens niet langer dan nodig is. Richtlijnen die we aanhouden:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Berichten via mail/contactformulier:</strong> tot 12 maanden na het laatste contact, tenzij er daarna een klantrelatie ontstaat.</li>
                                <li><strong>Offertes:</strong> tot 2 jaar na verzending (als je geen klant wordt).</li>
                                <li><strong>Klant- en projectdossiers:</strong> tot 2 jaar na afronding van de opdracht (tenzij langer nodig, bijvoorbeeld bij support/onderhoud of geschillen).</li>
                                <li><strong>Facturen en betaalgegevens:</strong> 7 jaar (fiscale bewaarplicht; in sommige gevallen 10 jaar).</li>
                                <li><strong>Cookie-/analyticsgegevens:</strong> afhankelijk van het type cookie en jouw instellingen (zie hoofdstuk 7).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">6. Met wie delen we jouw gegevens?</h2>
                            <p>We delen persoonsgegevens alleen als dat nodig is, bijvoorbeeld met:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Hostingpartij en IT-leveranciers (website, e-mail).</li>
                                <li>Boekhouder/administratiesoftware.</li>
                            </ul>
                            <p className="mt-4 italic">
                                Met partijen die in opdracht van ons persoonsgegevens verwerken, sluiten we waar nodig afspraken (verwerkersafspraken).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">7. Cookies</h2>
                            <p>Mobri gebruikt cookies en vergelijkbare technieken om de website goed te laten werken en het gebruik te analyseren.</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Functionele cookies:</strong> nodig om de site te laten werken.</li>
                                <li><strong>Analytische cookies:</strong> kunnen soms zonder toestemming als ze beperkt zijn ingesteld (privacyvriendelijk).</li>
                                <li><strong>Tracking/marketing cookies:</strong> hiervoor is toestemming nodig.</li>
                            </ul>
                            <p className="mt-4">
                                Je kunt cookies verwijderen via je browserinstellingen en je voorkeuren aanpassen via de cookiebanner.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">8. Hoe beveiligen we jouw gegevens?</h2>
                            <p>We nemen passende technische en organisatorische maatregelen, zoals:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Versleutelde verbindingen (https) waar mogelijk.</li>
                                <li>Sterke wachtwoorden en toegang op basis van rollen.</li>
                                <li>Updates/patches van systemen.</li>
                                <li>Back-ups en beveiligde opslag waar passend.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">9. Jouw rechten</h2>
                            <p>
                                Je hebt o.a. het recht op inzage, correctie, verwijdering, beperking, overdraagbaarheid en bezwaar. Ook kun je toestemming (bijv. nieuwsbrief/cookies) altijd intrekken.
                            </p>
                            <p className="mt-4">
                                Wil je gebruik maken van je rechten? Mail naar <a href="mailto:info@mobri.nl" className="text-primary hover:underline">info@mobri.nl</a>. We reageren uiterlijk binnen 1 maand.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">10. Klacht indienen</h2>
                            <p>
                                Kom je er met ons niet uit, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">11. Wijzigingen</h2>
                            <p>
                                We kunnen deze privacyverklaring aanpassen als onze dienstverlening verandert. De nieuwste versie staat altijd op mobri.nl.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
