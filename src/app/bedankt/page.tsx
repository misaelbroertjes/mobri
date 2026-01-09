"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Linkedin, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-primary/30">
            <Header />

            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                    <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="flex justify-center mb-8">
                            <div className="relative">
                                <motion.div
                                    className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <div className="relative bg-white p-6 rounded-full shadow-xl shadow-primary/10 border border-primary/20">
                                    <CheckCircle2 className="w-16 h-16 text-primary" strokeWidth={1.5} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-heading font-bold text-secondary mb-6 leading-tight"
                        >
                            Dank je wel voor je <span className="text-primary italic">bericht</span><span className="text-secondary">.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
                        >
                            We hebben je aanvraag goed ontvangen. We streven ernaar om binnen <span className="text-secondary font-bold">24 uur op werkdagen</span> persoonlijk contact met je op te nemen.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-16"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold transition-all hover:bg-secondary/90 shadow-lg shadow-secondary/20"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Terug naar Home
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/mobri"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-secondary text-secondary rounded-full font-bold transition-all hover:bg-secondary hover:text-white"
                            >
                                <Linkedin className="w-4 h-4" />
                                Volg op LinkedIn
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="pt-12 border-t border-secondary/10"
                        >
                            <p className="text-sm font-bold uppercase tracking-widest text-secondary/40 mb-4">Onze belofte</p>
                            <p className="text-xl font-heading font-medium text-secondary/80 italic">
                                "Persoonlijke aandacht, digitale groei."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
