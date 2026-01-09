"use client";

import { Monitor, PenTool, Wrench, MessageSquareHeart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const services = [
    {
        icon: <Monitor className="w-10 h-10" />,
        title: "Web Development",
        description: "De architectuur van je online succes. Wij bouwen websites die niet alleen vandaag werken, maar ook klaar zijn voor morgen.",
        href: "/diensten/web-development",
    },
    {
        icon: <Wrench className="w-10 h-10" />,
        title: "Onderhoud & Content Support",
        description: "Continuïteit in techniek en relevantie. Wij zorgen ervoor dat jouw platform nooit stilstaat of veroudert.",
        href: "/diensten/onderhoud-content-support",
    },
    {
        icon: <MessageSquareHeart className="w-10 h-10" />,
        title: "Virtual Assistant",
        description: "Strategische support voor de ambitieuze ondernemer. Eva fungeert als de backoffice die jouw workflow stroomlijnt.",
        href: "/diensten/virtual-assistant",
    },
    {
        icon: <PenTool className="w-10 h-10" />,
        title: "Design & Branding",
        description: "Visuele autoriteit die blijft staan. Een merkidentiteit van Mobri is een zorgvuldig vormgegeven fundament.",
        href: "/diensten/design",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as any,
        },
    },
};

function ServiceCard({ service }: { service: typeof services[0] }) {
    return (
        <motion.div variants={itemVariants}>
            <Link
                href={service.href || "#"}
                className="group h-[320px] [perspective:1000px] cursor-pointer block"
            >
                <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                        <div className="w-full h-full bg-white p-8 rounded-[2.5rem] shadow-xl border border-secondary/5 flex flex-col items-center justify-center text-center transition-all group-hover:shadow-2xl">
                            <div className="p-4 bg-primary/10 text-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-secondary mb-2">{service.title}</h3>
                            <div className="w-8 h-1 bg-primary rounded-full" />
                        </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <div className="w-full h-full bg-secondary p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl font-heading font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div
                                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg shadow-primary/20 hover:scale-110 transition-transform"
                            >
                                Ontdek meer
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

function ServiceCardMobile({ service }: { service: typeof services[0] }) {
    return (
        <motion.div variants={itemVariants}>
            <Link
                href={service.href || "#"}
                className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-secondary/5 flex flex-col active:scale-95 transition-transform"
            >
                <div className="p-4 bg-primary/10 text-primary rounded-2xl w-fit mb-6">
                    {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                </p>
                <div className="text-primary font-bold text-sm flex items-center gap-2">
                    Lees meer <ArrowRight className="w-4 h-4" />
                </div>
            </Link>
        </motion.div>
    );
}

export function Services() {
    return (
        <section
            id="services"
            className="py-32 bg-background relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
                        >
                            Onze Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-[1.1]"
                        >
                            Alles wat je nodig hebt om <span className="text-primary italic">digitaal te groeien.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:block"
                    >
                        <p className="text-muted-foreground text-lg max-w-xs leading-relaxed border-l border-secondary/10 pl-8">
                            Persoonlijke aandacht, technische perfectie en een oog voor detail.
                        </p>
                    </motion.div>
                </div>

                {/* Desktop Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </motion.div>

                {/* Mobile Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:hidden gap-6"
                >
                    {services.map((service, index) => (
                        <ServiceCardMobile key={index} service={service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
