import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Algemene Voorwaarden | Mobri",
    description: "Algemene Voorwaarden van Mobri voor onze diensten en producten.",
};

export default function VoorwaardenPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Header />

            <article className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-secondary">
                            Algemene Voorwaarden <span className="text-primary">Mobri</span>
                        </h1>
                        <p className="text-muted-foreground italic">Laatst bijgewerkt: 3 januari 2026</p>
                    </header>

                    <div className="prose prose-slate max-w-none text-muted-foreground space-y-10 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">1. Definities</h2>
                            <ul className="list-none space-y-2">
                                <li><strong>Mobri:</strong> Mobri, gevestigd te Meppel, KvK 66470188.</li>
                                <li><strong>Opdrachtgever:</strong> de partij die Mobri opdracht geeft (bedrijf of consument).</li>
                                <li><strong>Diensten:</strong> alle werkzaamheden van Mobri, zoals (maar niet beperkt tot) softwareontwikkeling, webdesign, grafisch ontwerp, onderhoud, advies en ondersteuning.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">2. Toepasselijkheid</h2>
                            <p>
                                Deze voorwaarden gelden voor elke offerte, opdracht en overeenkomst met Mobri, tenzij schriftelijk anders is afgesproken.
                                Inkoopvoorwaarden van opdrachtgever gelden niet, tenzij Mobri ze uitdrukkelijk schriftelijk accepteert.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">3. Offertes en overeenkomst</h2>
                            <p>
                                Offertes zijn vrijblijvend, tenzij anders vermeld.
                                Een overeenkomst komt tot stand zodra opdrachtgever een offerte schriftelijk accepteert (ook per e-mail) of zodra Mobri start met de uitvoering na akkoord.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">4. Uitvoering van de diensten</h2>
                            <p>
                                Mobri voert de opdracht naar beste inzicht en vermogen uit.
                                Opdrachtgever levert informatie, teksten, beelden, logins en feedback op tijd aan. Als dit niet gebeurt, kan de planning opschuiven en kunnen extra kosten ontstaan.
                                Termijnen zijn indicatief, tenzij uitdrukkelijk schriftelijk anders afgesproken.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">5. Meerwerk en wijzigingen</h2>
                            <p>
                                Wijzigingen in scope, extra wensen of extra feedbackrondes kunnen meerwerk zijn. Mobri meldt dit zo snel mogelijk en voert het uit na akkoord (tenzij spoed redelijkerwijs nodig is).
                                Meerwerk wordt gefactureerd tegen het afgesproken tarief of, bij ontbreken daarvan, tegen het gebruikelijke uurtarief van Mobri.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">6. Tarieven en betaling</h2>
                            <p>
                                Alle prijzen zijn exclusief btw, tenzij anders vermeld.
                                Facturen hebben een betalingstermijn van 14 dagen, tenzij anders afgesproken.
                                Bij te late betaling mag Mobri (voor zover wettelijk toegestaan) werkzaamheden opschorten en wettelijke rente en incassokosten in rekening brengen.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">7. Oplevering en acceptatie</h2>
                            <p>
                                Mobri levert op zoals afgesproken (bijv. livegang, opleverbestanden of overdracht).
                                Opdrachtgever controleert de oplevering binnen 14 dagen en meldt eventuele gebreken.
                                Als er binnen die termijn geen melding komt, geldt het werk als geaccepteerd.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">8. Onderhoud, support en derden</h2>
                            <p>
                                Onderhoud en support zijn alleen inbegrepen als dat expliciet is afgesproken (bijv. abonnement/strippenkaart).
                                Als Mobri afhankelijk is van derden (hosting, plugins, platformen, API’s), dan is Mobri niet aansprakelijk voor storingen of wijzigingen bij die derden.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">9. Intellectueel eigendom</h2>
                            <p>
                                Alle rechten op door Mobri gemaakte ontwerpen, code en andere werken blijven bij Mobri totdat alle facturen volledig zijn betaald, tenzij schriftelijk anders afgesproken.
                                Na volledige betaling krijgt opdrachtgever een gebruiksrecht voor het afgesproken doel (bijv. gebruik van website/design).
                                Licenties van derden (bijv. templates, fonts, plugins) vallen onder de voorwaarden van die derden.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">10. Vertrouwelijkheid</h2>
                            <p>
                                Beide partijen houden vertrouwelijke informatie geheim, tenzij openbaarmaking nodig is voor de uitvoering van de overeenkomst of wettelijk verplicht is.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">11. Aansprakelijkheid</h2>
                            <p>
                                Mobri is alleen aansprakelijk voor directe schade die het gevolg is van opzet of bewuste roekeloosheid, of voor zover dwingend recht anders bepaalt.
                                De aansprakelijkheid is in alle gevallen beperkt tot het bedrag dat voor de betreffende opdracht is gefactureerd.
                                Mobri is niet aansprakelijk voor indirecte schade (zoals gevolgschade, winstderving, gemiste besparingen, reputatieschade).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">12. Overmacht</h2>
                            <p>
                                Bij overmacht (bijv. storingen, ziekte, overheidsmaatregelen, uitval van leveranciers) mag Mobri de uitvoering opschorten.
                                Duurt overmacht langer dan 30 dagen, dan mogen beide partijen de overeenkomst schriftelijk ontbinden zonder schadevergoeding.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">13. Beëindiging</h2>
                            <p>
                                Partijen kunnen de overeenkomst beëindigen als de andere partij wezenlijk tekortschiet en na schriftelijke ingebrekestelling niet binnen redelijke termijn herstelt.
                                Bij beëindiging blijven reeds gemaakte uren/kosten en geleverd werk betaalbaar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">14. Privacy</h2>
                            <p>
                                Mobri verwerkt persoonsgegevens conform de privacyverklaring op de website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">15. Klachten</h2>
                            <p>
                                Klachten meld je zo snel mogelijk, maar uiterlijk binnen 14 dagen na ontdekking bij Mobri. We zoeken dan samen een oplossing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-secondary mb-4">16. Toepasselijk recht en geschillen</h2>
                            <p>
                                Op deze voorwaarden en overeenkomsten is Nederlands recht van toepassing.
                                Geschillen worden voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht anders bepaalt.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
