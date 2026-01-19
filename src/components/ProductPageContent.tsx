"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Image from "next/image";

interface ProductPageContentProps {
    title: string;
    subtitle: string;
    intro: string;
    image?: string;
    sections: {
        title: string;
        content: string;
    }[];
    steps?: {
        title: string;
        description: string;
    }[];
    faqs?: {
        question: string;
        answer: string;
    }[];
    icon: React.ReactNode;
    ctaLabel?: string;
    imageAlt?: string;
}

export function ProductPageContent({
    title,
    subtitle,
    intro,
    image,
    sections,
    steps,
    faqs,
    icon,
    ctaLabel = "Start een project",
    imageAlt,
}: ProductPageContentProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Link
                        href="/#services"
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-8 hover:gap-3 transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Terug naar diensten
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
                            >
                                {subtitle}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-secondary mb-6 leading-tight"
                            >
                                {title}<span className="text-primary">.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
                            >
                                {intro}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-10"
                            >
                                <motion.div
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="relative group cursor-pointer inline-block"
                                >
                                    <Link
                                        href="/#contact"
                                        className="relative inline-flex items-center justify-center min-w-[220px] px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold shadow-2xl shadow-primary/30 overflow-hidden transition-all duration-500 group-hover:shadow-primary/50"
                                    >
                                        {/* Background inversion (Yellow to Green for light background) */}
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
                                            {ctaLabel}
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
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex-1 relative w-full aspect-square md:aspect-video lg:aspect-square max-w-[600px]"
                        >
                            {image ? (
                                <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50">
                                    <img
                                        src={image}
                                        alt={imageAlt || `Afbeelding voor de Mobri dienst: ${title}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent pointer-events-none" />
                                </div>
                            ) : (
                                <div className="w-full h-full p-12 bg-white rounded-[3rem] shadow-2xl border border-secondary/5 flex items-center justify-center text-primary group">
                                    <div className="scale-[2.5] transition-transform duration-500 group-hover:scale-[2.7]">
                                        {icon}
                                    </div>
                                </div>
                            )}

                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl blur-2xl -z-10" />
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections / Key Benefits */}
            <section className="py-24 bg-secondary/5">
                <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
                        Onze <span className="text-primary italic">Expertise</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-secondary/5 h-full flex flex-col group hover:shadow-xl transition-all"
                            >
                                <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-4">{section.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process / Steps Section */}
            {steps && steps.length > 0 && (
                <section className="py-24 bg-background overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/3">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Onze aanpak</span>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
                                    Hoe wij jou <span className="text-primary italic">helpen groeien.</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Wij geloven in een gestroomlijnd proces waarbij transparantie en resultaat centraal staan.
                                </p>
                            </div>
                            <div className="lg:w-2/3 grid gap-6 w-full">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6 p-8 bg-secondary/5 rounded-3xl border border-secondary/5 hover:border-primary/20 transition-all group"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl font-bold text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
                <section className="py-24 bg-secondary/5">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Veelgestelde vragen</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-4 text-center">
                                Vragen over deze <span className="text-primary italic">dienst?</span>
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl border border-secondary/5 overflow-hidden transition-all shadow-sm hover:shadow-md"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 font-bold text-secondary text-lg"
                                    >
                                        {faq.question}
                                        <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                                            <ChevronDown className="w-5 h-5 text-primary" />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-8 pb-8 text-muted-foreground leading-relaxed">
                                                    <div className="pt-2 border-t border-secondary/5">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Improved CTA Section */}
            <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                            Klaar om je visie naar <span className="text-primary italic">next-level</span> te tillen?
                        </h2>
                        <p className="text-lg md:text-xl opacity-80 mb-12 leading-relaxed">
                            Ontdek hoe Mobri jou kan ontzorgen en laten groeien. Plan vandaag nog je gratis kennismaking in.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.div
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                className="relative group cursor-pointer"
                            >
                                <Link
                                    href="/#contact"
                                    className="relative inline-flex items-center justify-center min-w-[220px] px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-2xl shadow-primary/30 overflow-hidden transition-all duration-500 group-hover:shadow-primary/50"
                                >
                                    {/* Background inversion */}
                                    <motion.div
                                        className="absolute inset-0 bg-primary"
                                        variants={{
                                            initial: { backgroundColor: "var(--primary)" },
                                            hover: { backgroundColor: "#ffffff" }
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

                                    <motion.span
                                        className="relative z-10 flex items-center gap-2 whitespace-nowrap"
                                        variants={{
                                            initial: { letterSpacing: "0em", color: "var(--primary-foreground)" },
                                            hover: { letterSpacing: "0.05em", color: "var(--secondary)" }
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        {ctaLabel}
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
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
