"use client";

import { motion } from "framer-motion";

export function TeamSection() {
    return (
        <section id="team" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Ontmoet het team.
                    </h2>
                    <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
                        Wij zijn Mobri. Een klein team met een grote liefde voor digitaal.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Misaël */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary-foreground/5 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group"
                    >
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-32 h-32 bg-secondary rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 shadow-xl">
                                <div className="w-full h-full flex items-center justify-center text-2xl font-bold font-heading text-secondary-foreground">MB</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">Misaël Broertjes</h3>
                                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-bold uppercase tracking-wider text-primary mb-4">
                                    Web & Tech Lead
                                </div>
                                <p className="leading-relaxed opacity-80 text-sm">
                                    "Ik zorg dat jouw website technisch staat als een huis. Snel, veilig en makkelijk te gebruiken. Daarnaast help ik je met het plaatsen van content, zodat jij je handen vrij hebt."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Eva */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-secondary-foreground/5 p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group"
                    >
                        <div className="flex flex-col items-center text-center gap-6">
                            <div className="w-32 h-32 bg-secondary rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 shadow-xl">
                                <div className="w-full h-full flex items-center justify-center text-2xl font-bold font-heading text-secondary-foreground">EB</div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-1">Eva Broertjes</h3>
                                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-bold uppercase tracking-wider text-primary mb-4">
                                    Design & Digital Assistant
                                </div>
                                <p className="leading-relaxed opacity-80 text-sm">
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
