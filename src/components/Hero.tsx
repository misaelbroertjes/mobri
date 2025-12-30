"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export function Hero() {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Smooth spring physics for parallax
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    // Parallax transforms
    const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig);
    const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
    const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 10]), springConfig);
    const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.05]), springConfig);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Avoid hydration mismatch by not rendering parallax-dependent elements during server-side pass
    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            {/* Background Elements - Parallaxing in opposite direction (Only on desktop and after mount) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{ y: (mounted && !isMobile) ? y1 : 0, opacity: (mounted && !isMobile) ? opacity : 0.5 }}
                    className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full blur-3xl opacity-50"
                />
                <motion.div
                    style={{ y: (mounted && !isMobile) ? y2 : 0, opacity: (mounted && !isMobile) ? opacity : 1 }}
                    className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-2 bg-secondary text-white rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 shadow-lg shadow-secondary/10">
                        DIGITAL ASSISTANCE & WEB DEVELOPMENT
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-foreground">
                        Websites met een <br />
                        <span className="text-primary italic">Persoonlijke Touch.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                        Wij helpen kleine bedrijven en ondernemers met professionele websites en digitale ondersteuning. Geen gedoe, gewoon goed geregeld.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                        >
                            Start een project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 bg-transparent border border-muted-foreground/30 text-foreground rounded-full font-semibold text-lg hover:bg-secondary/5 transition-all text-center"
                        >
                            Onze diensten
                        </Link>
                    </div>
                </motion.div>

                {/* Visual Content - Parallax Composition (Desktop Only) */}
                <motion.div
                    style={{
                        y: (mounted && !isMobile) ? y2 : 0,
                        rotate: (mounted && !isMobile) ? rotate : 0,
                        scale: (mounted && !isMobile) ? scale : 1
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Solid Card Design */}
                    <div className="relative z-10 bg-secondary text-secondary-foreground p-8 rounded-3xl shadow-2xl max-w-md ml-auto border-4 border-primary/20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md">
                                M
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Mobri Assistant</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <p className="text-xs text-secondary-foreground/70 font-medium">Online & Ready</p>
                                </div>
                            </div>
                        </div>

                        {/* Conversation Bubbles */}
                        <div className="space-y-4 mb-8">
                            <div className="bg-secondary-foreground/10 p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-sm leading-relaxed">
                                "Ik zoek hulp bij mijn website én content."
                            </div>
                            <div className="bg-primary p-4 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl text-sm text-primary-foreground font-medium ml-auto w-fit shadow-sm">
                                "Geen probleem! Wij bouwen de site en helpen je met de inhoud. 🚀"
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex justify-between items-center bg-secondary-foreground/5 -mx-8 -mb-8 p-6 rounded-b-3xl">
                            <div>
                                <p className="text-xs uppercase tracking-widest opacity-50 font-bold mb-1">Services</p>
                                <p className="text-sm font-bold">Web • Design • Support</p>
                            </div>
                            <div className="w-10 h-10 bg-white text-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements with their own offset */}
                    <motion.div
                        style={{ y: (mounted && !isMobile) ? y1 : 0 }}
                        className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20"
                    />
                    <motion.div
                        style={{ y: (mounted && !isMobile) ? y2 : 0 }}
                        className="absolute bottom-[-20px] -left-10 w-40 h-40 bg-secondary/10 rounded-full"
                    />

                    {/* Connection line graphic */}
                    <motion.svg
                        style={{ rotate: (mounted && !isMobile) ? useTransform(scrollYProgress, [0, 1], [0, -20]) : 0 }}
                        className="absolute top-1/2 -left-12 w-24 h-24 text-primary/30 z-0"
                        viewBox="0 0 100 100"
                    >
                        <path d="M0,50 Q50,0 100,50" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
                    </motion.svg>
                </motion.div>
            </div>
        </section>
    );
}
