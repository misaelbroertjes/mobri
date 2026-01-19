"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
            <Header />

            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-24 md:pt-32">
                {/* Abstract Background Elements similar to Hero */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/5 rounded-bl-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto py-12 md:py-20 flex flex-col items-center">
                    <span className="inline-block px-4 py-2 bg-secondary text-white rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 shadow-lg shadow-secondary/10">
                        404 ERROR
                    </span>

                    <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-6">
                        Oeps!
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">
                        Deze pagina is niet gevonden.
                    </h2>

                    <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
                        De pagina die je zoekt bestaat niet meer, is verplaatst, of heeft nooit bestaan. Geen zorgen, we helpen je weer op weg.
                    </p>

                    <motion.div
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        className="relative group cursor-pointer"
                    >
                        <Link
                            href="/"
                            className="relative inline-flex items-center justify-center min-w-[220px] px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold shadow-2xl shadow-primary/30 overflow-hidden transition-all duration-500 group-hover:shadow-primary/50"
                        >
                            {/* Background inversion */}
                            <motion.div
                                className="absolute inset-0 bg-primary"
                                variants={{
                                    initial: { backgroundColor: "var(--primary)" },
                                    hover: { backgroundColor: "var(--secondary)" }
                                }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

                            <motion.span
                                className="relative z-10 flex items-center gap-2 whitespace-nowrap"
                                variants={{
                                    initial: { letterSpacing: "0em", color: "var(--primary-foreground)" },
                                    hover: { letterSpacing: "0.05em", color: "var(--primary)" }
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                Terug naar Home
                                {/* Semantic Arrow */}
                                <div className="relative overflow-hidden w-6 h-6 shrink-0">
                                    <ArrowRight className="w-6 h-6 absolute transition-transform duration-500 -translate-x-8 group-hover:translate-x-0" />
                                    <ArrowRight className="w-6 h-6 absolute transition-transform duration-500 translate-x-0 group-hover:translate-x-8" />
                                </div>
                            </motion.span>
                        </Link>

                        {/* Strong Liquid Glow */}
                        <div className="absolute inset-x-4 -bottom-2 h-8 bg-primary/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>

                    <div className="mt-12">
                        <Link
                            href="/#contact"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
                        >
                            Of neem contact met ons op &rarr;
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
