"use client";

import { useForm } from "react-hook-form";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";

export function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    // Parallax background shape
    const yBg = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 50]), springConfig);

    // Subtle parallax for the info column
    const yInfo = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), springConfig);

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
                reset(); // Formulier leegmaken bij succes
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus("error");
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden"
        >
            {/* Background elements with parallax - Simplified to avoid visual 'breakage' */}
            <motion.div
                style={{ y: yBg }}
                className="absolute top-0 right-0 w-1/2 h-full bg-secondary-foreground/5 skew-x-12 origin-top pointer-events-none"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Info & Context with subtle parallax */}
                    <motion.div
                        style={{ y: yInfo }}
                        className="space-y-8 lg:sticky lg:top-24"
                    >
                        <div>
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                Contact
                            </span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                Laten we <span className="text-primary">samenwerken.</span>
                            </h2>
                            <p className="text-lg opacity-80 leading-relaxed max-w-md">
                                Heb je een vraag, een idee, of wil je gewoon even sparren?
                                We horen graag van je. Vul het formulier in of gebruik de contactgegevens.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary-foreground/5 border border-white/5 hover:bg-secondary-foreground/10 transition-colors">
                                <div className="p-3 bg-primary text-primary-foreground rounded-xl shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Bezoekadres</h3>
                                    <p className="opacity-80 text-sm leading-relaxed">
                                        Bolsterturf 2 <br />
                                        7942 MC Meppel
                                    </p>
                                </div>
                            </div>

                            {/* Contact Info Group */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary-foreground/5 border border-white/5 hover:bg-secondary-foreground/10 transition-colors">
                                    <div className="p-3 bg-primary text-primary-foreground rounded-xl shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Telefoon</h3>
                                        <a href="tel:0638125176" className="opacity-80 text-sm hover:text-primary transition-colors">
                                            06-38125176
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary-foreground/5 border border-white/5 hover:bg-secondary-foreground/10 transition-colors">
                                    <div className="p-3 bg-primary text-primary-foreground rounded-xl shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Email</h3>
                                        <a href="mailto:info@mobri.nl" className="opacity-80 text-sm hover:text-primary transition-colors">
                                            info@mobri.nl
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/20 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden group"
                    >
                        {/* Decorative glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div>
                                <h3 className="text-2xl font-heading font-bold mb-1 text-white">Stuur een bericht</h3>
                                <p className="text-white/60 text-sm">We reageren meestal binnen 24 uur.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-white/70">Naam</label>
                                    <input
                                        id="name"
                                        {...register("name", { required: true })}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                        placeholder="Jouw naam"
                                    />
                                    {errors.name && <span className="text-primary text-xs">Naam is verplicht</span>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-white/70">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                        placeholder="jouw@email.nl"
                                    />
                                    {errors.email && <span className="text-primary text-xs">Geldig email adres verplicht</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-white/70">Onderwerp</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        {...register("subject")}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="website" className="bg-secondary text-white">Ik wil een nieuwe website</option>
                                        <option value="da" className="bg-secondary text-white">Ik zoek een Digital Assistant</option>
                                        <option value="design" className="bg-secondary text-white">Ik heb design hulp nodig</option>
                                        <option value="other" className="bg-secondary text-white">Iets anders</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-white/70">Bericht</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    {...register("message", { required: true })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                    placeholder="Vertel ons kort waar we je mee kunnen helpen..."
                                />
                                {errors.message && <span className="text-primary text-xs">Bericht is verplicht</span>}
                            </div>

                            <div className="pt-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-bold font-heading hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                                >
                                    {isSubmitting ? "Verzenden..." : "Verstuur Bericht"}
                                    {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </motion.button>
                            </div>

                            {/* Status Messages */}
                            <AnimatePresence mode="wait">
                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400 text-sm"
                                    >
                                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                                        <span>Bedankt! We hebben je bericht ontvangen en nemen snel contact op.</span>
                                    </motion.div>
                                )}
                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm"
                                    >
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span>Oeps! Er ging iets mis. Probeer het later nog eens of stuur direct een mail.</span>
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
