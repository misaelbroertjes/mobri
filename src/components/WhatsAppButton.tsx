"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => setIsVisible(true), 2000);

        // Check for mobile menu state
        const checkMenu = () => {
            setIsMenuOpen(document.body.classList.contains("mobile-menu-open"));
        };

        const observer = new MutationObserver(checkMenu);
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    if (!mounted) return null;

    const phoneNumber = "31638125176";
    const message = "Hoi Mobri, ik heb een vraag over jullie diensten. Kunnen jullie mij helpen?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className={cn(
            "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 transition-opacity duration-300 pointer-events-none",
            isMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"
        )}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl p-6 mb-2 max-w-[280px] border border-black/5 pointer-events-auto"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-black/40 hover:text-black transition-colors"
                        >
                            <X size={18} />
                        </button>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#112A32] text-sm">Mobri</h4>
                                <p className="text-[12px] text-black/60 leading-tight">Gemiddeld binnen 1 uur (tijdens kantooruren)</p>
                            </div>
                        </div>
                        <p className="text-sm text-[#112A32]/80 mb-4">
                            Samen sparren over jouw project? Stel hier direct je vraag aan het team van Mobri.
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#25D366]/20 group"
                        >
                            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                            <span>Start gesprek</span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl shadow-[#25D366]/30 pointer-events-auto border-4 border-white/10"
                        aria-label="WhatsApp contact"
                    >
                        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
