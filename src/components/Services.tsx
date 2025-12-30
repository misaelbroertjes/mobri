"use client";

import { Monitor, PenTool, Wrench, MessageSquareHeart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Web Development",
        description: "Moderne, snelle websites die perfect werken op mobiel en desktop. Gebouwd met de nieuwste technieken.",
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Design & Branding",
        description: "Een unieke uitstraling die bij jou past. Van logo tot complete huisstijl en webdesign.",
    },
    {
        icon: <MessageSquareHeart className="w-8 h-8" />,
        title: "Digital Assistance",
        description: "Hulp nodig bij content, tekst of administratie? Wij fungeren als jouw digitale rechterhand.",
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Onderhoud & Support",
        description: "Geen zorgen over updates of veiligheid. Wij houden je site veilig, snel en up-to-date.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
                        Alles onder één dak.
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Of je nu een complete website nodig hebt of iemand die je helpt met de digitale randzaken.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary text-secondary-foreground p-8 rounded-3xl shadow-xl border border-secondary/20 hover:shadow-2xl hover:-translate-y-1 transition-all group relative overflow-hidden"
                        >
                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-primary shadow-inner">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-white/70 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
