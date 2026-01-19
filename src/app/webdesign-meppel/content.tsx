"use client";

import { Services } from "@/components/Services";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Coffee, MessageSquare, Monitor, Layers } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function MeppelHero() {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    const y1Base = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2Base = useTransform(scrollYProgress, [0, 1], [0, -150]);

    // Parallax conditional logic
    const y1 = useSpring(y1Base, springConfig);
    const y2 = useSpring(y2Base, springConfig);
    const parallaxY1 = (mounted && !isMobile) ? y1 : 0;
    const parallaxY2 = (mounted && !isMobile) ? y2 : 0;

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{ y: parallaxY1, opacity: 0.5 }}
                    className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full blur-3xl opacity-50"
                />
                <motion.div
                    style={{ y: parallaxY2, opacity: 0.8 }}
                    className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 shadow-lg shadow-secondary/10 w-fit"
                    >
                        <MapPin className="w-3 h-3 text-primary" />
                        LOKAAL IN MEPPEL
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 text-foreground"
                    >
                        Webdesign & Digitale <br />
                        <span className="text-primary italic">Ondersteuning</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg"
                    >
                        Jouw lokale partner voor professionele websites en Virtual Assistant diensten. Gewoon, bij jou om de hoek in Meppel en omgeving.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                        >
                            Gratis kennismaking
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block relative"
                >
                    {/* Decorative Blob */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                    <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-secondary/5 rotate-2 hover:rotate-0 transition-transform duration-500 max-w-lg ml-auto">
                        <div className="flex items-center gap-5 mb-8 border-b border-secondary/5 pb-6">
                            <div className="p-4 bg-primary/10 rounded-2xl text-primary shadow-sm">
                                <Coffee className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-secondary">Kopje koffie doen?</h3>
                                <p className="text-secondary/60 font-medium">Wij komen graag bij jou langs.</p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-sm">Geen ticketsystemen</p>
                                    <p className="text-sm text-secondary/60">Direct contact via WhatsApp.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-sm">Aan je eigen tafel</p>
                                    <p className="text-sm text-secondary/60">Wij sparren het liefst face-to-face.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-secondary text-sm">Tech & Creatie</p>
                                    <p className="text-sm text-secondary/60">Alles onder één dak geregeld.</p>
                                </div>
                            </div>
                        </div>

                        {/* Call Action Footer */}
                        <div className="mt-8 pt-6 border-t border-secondary/5 flex items-center justify-between">
                            <div className="text-xs font-bold uppercase tracking-wider text-secondary/40">
                                Direct contact
                            </div>
                            <a href="tel:0638125176" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
                                06-38125176
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function UspSection() {
    const usps = [
        {
            title: "Korte Lijnen",
            desc: "Geen gedoe met ticketsystemen of wachtrijen. Je hebt direct contact via WhatsApp of telefoon met Misaël of Eva.",
            icon: <MessageSquare className="w-6 h-6" />
        },
        {
            title: "Bij jou op de zaak",
            desc: "Wij werken vanuit huis, maar komen graag naar jou toe. Zo zien we direct wie je bent en wat je doet.",
            icon: <MapPin className="w-6 h-6" />
        },
        {
            title: "Tech & Creatie",
            desc: "Een unieke combinatie van een technische web-expert (Misaël) en een creatieve VA (Eva) onder één dak.",
            icon: <Monitor className="w-6 h-6" />
        },
        {
            title: "Totaaloplossing",
            desc: "Wij bouwen niet alleen je website, maar helpen je ook met content, onderhoud en administratieve randzaken.",
            icon: <Layers className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-20 bg-secondary text-secondary-foreground relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Waarom Mobri?</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">De voordelen van een <span className="text-primary">lokale partner</span>.</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {usps.map((usp, i) => (
                        <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6">
                                {usp.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{usp.title}</h3>
                            <p className="text-white/70 leading-relaxed text-sm">{usp.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RegionLinks() {
    return (
        <section className="py-12 bg-background border-t border-secondary/5">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Wij zijn actief in de regio</h3>
                <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                    Mobri is jouw webdesign partner in <span className="text-secondary font-medium">Meppel</span>, <span className="text-secondary font-medium">Zwolle</span>, <span className="text-secondary font-medium">Steenwijk</span>, <span className="text-secondary font-medium">Hoogeveen</span> en de wijde omgeving van Drenthe en Overijssel. Wij komen graag op locatie voor een persoonlijke kennismaking.
                </p>
            </div>
        </section>
    )
}

export function MeppelContent() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <MeppelHero />
            <UspSection />
            <Services />
            <ContactForm />
            <RegionLinks />
            <Footer />
        </main>
    );
}
