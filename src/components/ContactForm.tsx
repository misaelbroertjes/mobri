"use client";

import { useForm } from "react-hook-form";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data: any) => {
        setSubmitStatus("idle");
        try {
            const response = await fetch("/contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus("success");
                reset();
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary-foreground/5 skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info & Context */}
                    <div className="space-y-12 lg:sticky lg:top-32">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
                            >
                                Contact
                            </motion.span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-white leading-tight">
                                Laten we <br />
                                <span className="text-primary italic">samenwerken.</span>
                            </h2>
                            <p className="text-lg opacity-80 leading-relaxed max-w-md">
                                Heb je een vraag, een idee, of wil je gewoon even sparren?
                                We horen graag van je. Vul het formulier in of gebruik de contactgegevens.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-6 p-6 rounded-3xl bg-secondary-foreground/5 border border-white/5 hover:bg-secondary-foreground/10 transition-all duration-300">
                                <div className="p-4 bg-primary text-primary-foreground rounded-2xl shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg mb-1">Bezoekadres</h3>
                                    <p className="opacity-80 leading-relaxed">
                                        Bolsterturf 2 <br />
                                        7942 MC Meppel
                                    </p>
                                </div>
                            </div>

                            {/* Contact Info Group */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-5 rounded-3xl bg-secondary-foreground/5 border border-white/5 hover:bg-secondary-foreground/10 transition-all duration-300">
                                    <div className="p-3 bg-white/10 text-primary rounded-xl shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm mb-1">Telefoon</h3>
                                        <a href="tel:0638125176" className="opacity-80 text-sm hover:text-primary transition-colors">
                                            06-38125176
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-5 rounded-3xl bg-secondary-foreground/5 border border-white/5 hover:bg-secondary-foreground/10 transition-all duration-300">
                                    <div className="p-3 bg-white/10 text-primary rounded-xl shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm mb-1">Email</h3>
                                        <a href="mailto:info@mobri.nl" className="opacity-80 text-sm hover:text-primary transition-colors">
                                            info@mobri.nl
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-black/20 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group"
                    >
                        {/* Decorative glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                            <div>
                                <h3 className="text-3xl font-heading font-bold mb-2 text-white">Stuur een bericht</h3>
                                <p className="text-white/60 text-sm">We reageren meestal binnen 24 uur.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Naam</label>
                                    <input
                                        id="name"
                                        {...register("name", { required: true })}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-primary/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                                        placeholder="Jouw naam"
                                    />
                                    {errors.name && <span className="text-primary text-[10px] font-bold uppercase ml-1">Verplicht</span>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-primary/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                                        placeholder="jouw@email.nl"
                                    />
                                    {errors.email && <span className="text-primary text-[10px] font-bold uppercase ml-1">Ongeldig adres</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Onderwerp</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        {...register("subject")}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-primary/30 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="website" className="bg-secondary text-white">Ik wil een nieuwe website</option>
                                        <option value="va" className="bg-secondary text-white">Ik zoek een Virtual Assistant</option>
                                        <option value="design" className="bg-secondary text-white">Ik heb design hulp nodig</option>
                                        <option value="other" className="bg-secondary text-white">Iets anders</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Bericht</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    {...register("message", { required: true })}
                                    className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-primary/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                                    placeholder="Waarmee kunnen we je helpen?"
                                />
                                {errors.message && <span className="text-primary text-[10px] font-bold uppercase ml-1">Bericht is verplicht</span>}
                            </div>

                            <div className="pt-2">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold font-heading hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 group disabled:opacity-70"
                                >
                                    {isSubmitting ? "Verzenden..." : "Verstuur Bericht"}
                                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </motion.button>
                            </div>

                            {/* Status Messages */}
                            <AnimatePresence mode="wait">
                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-5 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-4 text-green-400 text-sm font-medium"
                                    >
                                        <CheckCircle2 className="w-6 h-6 shrink-0" />
                                        <span>Bedankt! We hebben je bericht ontvangen en nemen snel contact op.</span>
                                    </motion.div>
                                )}
                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-400 text-sm font-medium"
                                    >
                                        <AlertCircle className="w-6 h-6 shrink-0" />
                                        <span>Oeps! Er ging iets mis. Probeer het later nog eens.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
