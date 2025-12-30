"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");

        // If they already granted consent, we must update GA immediately on mount
        if (consent === "granted") {
            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            }
        }

        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (status: "granted" | "denied") => {
        localStorage.setItem("cookie-consent", status);

        // Update Google Analytics Consent Mode
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'analytics_storage': status
            });
        }

        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
                >
                    <div className="bg-secondary text-secondary-foreground p-6 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl bg-secondary/95">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-2 bg-primary/20 text-primary rounded-xl">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-1">Privacy & Cookies</h3>
                                <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                                    Mobri gebruikt cookies om te begrijpen hoe onze website wordt gebruikt en om je ervaring te verbeteren.
                                    Geen spam, beloofd.
                                </p>
                            </div>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-secondary-foreground/40 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => handleConsent("granted")}
                                className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            >
                                Accepteren
                            </button>
                            <button
                                onClick={() => handleConsent("denied")}
                                className="flex-1 py-3 bg-secondary-foreground/5 text-secondary-foreground border border-white/10 rounded-xl font-bold text-sm hover:bg-secondary-foreground/10 transition-all"
                            >
                                Weigeren
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
