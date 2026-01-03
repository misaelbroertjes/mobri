"use client";

import { Monitor, PenTool, Wrench, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <Monitor className="w-10 h-10" />,
        title: "Web Development",
        description: "Moderne, snelle websites die perfect werken op mobiel en desktop. Gebouwd met de nieuwste technieken voor maximale performance.",
    },
    {
        icon: <PenTool className="w-10 h-10" />,
        title: "Design & Branding",
        description: "Een unieke visuele identiteit die jouw verhaal vertelt. Van doordachte logo's tot een complete digitale huisstijl.",
    },
    {
        icon: <MessageSquareHeart className="w-10 h-10" />,
        title: "Virtual Assistant",
        description: "Wij fungeren als jouw virtuele rechterhand voor content creatie, teksten en technisch beheer. Jij de focus, wij de ondersteuning.",
    },
    {
        icon: <Wrench className="w-10 h-10" />,
        title: "Onderhoud & Support",
        description: "Zorgeloos online blijven. Wij regelen de updates, beveiliging en optimalisatie zodat jouw site altijd in topconditie is.",
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

export function Services() {
    return (
        <section
            id="services"
            className="py-32 bg-background relative overflow-hidden"
        >
            {/* Ambient Background Glows - Adjusted for light theme */}
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group h-full"
                        >
                            <div className="relative h-full p-8 rounded-[2rem] bg-white border border-secondary/5 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col items-start overflow-hidden">
                                {/* Subtle Inner Glow on Hover */}
                                <div className="absolute -inset-px bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="mb-8 relative">
                                    <div className="p-4 bg-secondary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed font-light text-base">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
