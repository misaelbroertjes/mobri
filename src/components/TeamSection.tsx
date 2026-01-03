"use client";

import { motion } from "framer-motion";

export function TeamSection() {
    return (
        <section id="team" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
                    >
                        Wie wij zijn
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
                        Ontmoet het team<span className="text-primary">.</span>
                    </h2>
                    <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
                        Wij zijn Mobri. Een klein team met een grote liefde voor digitaal en persoonlijke aandacht.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Misaël */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-secondary-foreground/5 p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/50 transition-colors duration-500 group relative"
                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    >
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-40 h-40 bg-secondary rounded-[2rem] overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 shadow-xl">
                                <div className="w-full h-full flex items-center justify-center text-3xl font-bold font-heading text-secondary-foreground">MB</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">Misaël Broertjes</h3>
                                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary mb-6">
                                    Web & Tech Lead
                                </div>
                                <p className="leading-relaxed opacity-80 text-sm max-w-sm mx-auto">
                                    "Ik zorg dat jouw website technisch staat als een huis. Snel, veilig en makkelijk te gebruiken. Daarnaast help ik je met het plaatsen van content, zodat jij je handen vrij hebt."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Eva */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="bg-secondary-foreground/5 p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/50 transition-colors duration-500 group relative"
                        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                    >
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-40 h-40 bg-secondary rounded-[2rem] overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 shadow-xl">
                                <div className="w-full h-full flex items-center justify-center text-3xl font-bold font-heading text-secondary-foreground">EB</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">Eva Broertjes</h3>
                                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary mb-6">
                                    Design & Virtual Assistant
                                </div>
                                <p className="leading-relaxed opacity-80 text-sm max-w-sm mx-auto">
                                    "Ik ben jouw creatieve en organisatorische rechterhand. Van het ontwerpen van je huisstijl tot het structureren van je dagelijkse digitale taken."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
