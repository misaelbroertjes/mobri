"use client";

import { useForm } from "react-hook-form";
import { ArrowRight, Mail, MapPin, Phone, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState<"idle" | "error">("idle");
    const router = useRouter();
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
                reset();
                router.push("/bedankt");
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
                                Tijd voor de <br />
                                <span className="text-primary italic">volgende stap</span>.
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
                                    <h3 className="font-bold text-white text-lg mb-1">Postadres</h3>
                                    <p className="opacity-80 text-sm leading-relaxed">
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
                                <p className="text-white/60 text-sm">We doen ons best om op werkdagen binnen 24 uur te reageren.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Honeypot - Hidden from humans */}
                                <div className="hidden">
                                    <label htmlFor="website">Website</label>
                                    <input
                                        id="website"
                                        type="text"
                                        {...register("website")}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Naam</label>
                                    <input
                                        id="name"
                                        {...register("name", { required: true })}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-primary/30 focus:bg-white/10 transition-all placeholder:text-white/20"
                                        placeholder="Jouw naam"
                                    />
                                    {errors.name && <span className="text-primary text-[10px] font-bold uppercase ml-1">Verplicht</span>}
                                </div>
                                <div className="space-y-4">
                                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Email</label>
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

                            <div className="space-y-4">
                                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Onderwerp</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        {...register("subject")}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-4 focus:ring-primary/30 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="web-development" className="bg-secondary text-white">Web Development</option>
                                        <option value="onderhoud" className="bg-secondary text-white">Onderhoud & Content Support</option>
                                        <option value="virtual-assistant" className="bg-secondary text-white">Virtual Assistant</option>
                                        <option value="design" className="bg-secondary text-white">Design & Branding</option>
                                        <option value="other" className="bg-secondary text-white">Iets anders</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white/40 ml-1">Bericht</label>
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
                                <motion.div
                                    initial="initial"
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="relative group cursor-pointer"
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="relative w-full inline-flex items-center justify-center py-5 bg-primary text-primary-foreground rounded-2xl font-bold font-heading shadow-xl shadow-primary/20 overflow-hidden transition-all duration-500 group-hover:shadow-primary/50 disabled:opacity-70"
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
                                            className="relative z-10 flex items-center gap-3 whitespace-nowrap"
                                            variants={{
                                                initial: { letterSpacing: "0em", color: "var(--primary-foreground)" },
                                                hover: { letterSpacing: "0.05em", color: "var(--secondary)" }
                                            }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                            {isSubmitting ? "Verzenden..." : "Verstuur Bericht"}
                                            {/* Semantic Arrow/Send Transition */}
                                            {!isSubmitting && (
                                                <div className="relative overflow-hidden w-6 h-6 shrink-0">
                                                    <ArrowRight className="w-6 h-6 absolute transition-transform duration-500 -translate-x-8 group-hover:translate-x-0" />
                                                    <ArrowRight className="w-6 h-6 absolute transition-transform duration-500 translate-x-0 group-hover:translate-x-8" />
                                                </div>
                                            )}
                                        </motion.span>
                                    </button>

                                    {/* Strong Liquid Glow */}
                                    <div className="absolute inset-x-4 -bottom-2 h-8 bg-primary/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </motion.div>
                            </div>

                            {/* Status Messages */}
                            <AnimatePresence mode="wait">
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
