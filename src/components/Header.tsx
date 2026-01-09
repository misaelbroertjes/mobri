"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/#hero" },
        { name: "Diensten", href: "/#services" },
        { name: "Team", href: "/#team" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="Mobri Logo"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                    />
                    <div className="text-2xl font-heading font-bold text-secondary transition-colors tracking-tight">
                        Mobri<span className="text-primary">.</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/nav-item">
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-secondary hover:text-primary transition-colors relative py-2 block"
                            >
                                {link.name}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/nav-item:w-full"
                                    layoutId={`underline-${link.name}`}
                                />
                            </Link>

                            {link.name === "Diensten" && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav-item:opacity-100 group-hover/nav-item:visible transition-all duration-300 transform scale-95 group-hover/nav-item:scale-100">
                                    <div className="bg-white border border-secondary/5 shadow-2xl rounded-2xl p-4 w-64 grid gap-2">
                                        <Link href="/diensten/web-development" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
                                            <p className="font-bold text-secondary text-xs group-hover/sub:text-primary">Web Development</p>
                                            <p className="text-[10px] text-muted-foreground">Moderne websites</p>
                                        </Link>
                                        <Link href="/diensten/onderhoud-content-support" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
                                            <p className="font-bold text-secondary text-xs group-hover/sub:text-primary">Onderhoud & Content Support</p>
                                            <p className="text-[10px] text-muted-foreground">Technisch beheer</p>
                                        </Link>
                                        <Link href="/diensten/virtual-assistant" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
                                            <p className="font-bold text-secondary text-xs group-hover/sub:text-primary">Virtual Assistant</p>
                                            <p className="text-[10px] text-muted-foreground">Strategische support</p>
                                        </Link>
                                        <Link href="/diensten/design" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
                                            <p className="font-bold text-secondary text-xs group-hover/sub:text-primary">Design & Branding</p>
                                            <p className="text-[10px] text-muted-foreground">Visuele autoriteit</p>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/#contact"
                            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 block"
                        >
                            Start Project
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-muted p-4 md:hidden flex flex-col gap-2 shadow-lg max-h-[80vh] overflow-y-auto"
                    >
                        {navLinks.map((link) => (
                            <div key={link.name} className="flex flex-col">
                                <Link
                                    href={link.href}
                                    className="text-lg font-medium py-3 border-b border-muted/50 flex justify-between items-center"
                                    onClick={() => {
                                        if (link.name !== "Diensten") setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {link.name}
                                </Link>
                                {link.name === "Diensten" && (
                                    <div className="grid gap-1 py-2 pl-4">
                                        <Link href="/diensten/web-development" className="py-2 text-sm text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Web Development</Link>
                                        <Link href="/diensten/onderhoud-content-support" className="py-2 text-sm text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Onderhoud & Content Support</Link>
                                        <Link href="/diensten/virtual-assistant" className="py-2 text-sm text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Virtual Assistant</Link>
                                        <Link href="/diensten/design" className="py-2 text-sm text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Design & Branding</Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
