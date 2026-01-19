"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { TextFlip } from "./TextFlip";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.body.classList.add("mobile-menu-open");
        } else {
            document.body.style.overflow = "unset";
            document.body.classList.remove("mobile-menu-open");
        }
        return () => {
            document.body.style.overflow = "unset";
            document.body.classList.remove("mobile-menu-open");
        };
    }, [isMobileMenuOpen]);

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

    // Smooth scroll function that updates the hash
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only handle internal scrolling if we're on the homepage
        if (href.startsWith("/#") && pathname === "/") {
            const id = href.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Update hash without jumping
                window.history.pushState(null, "", href);
                setIsMobileMenuOpen(false);
            }
        }
    };

    // Update active hash on scroll
    useEffect(() => {
        if (pathname !== "/") return;

        const sections = navLinks.map(link => link.href.replace("/#", ""));

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const newHash = id === "hero" ? "/" : `/#${id}`;
                    if (window.location.hash !== `#${id}` && (id !== "hero" || window.location.hash !== "")) {
                        window.history.replaceState(null, "", newHash);
                    }
                }
            });

            // Special case for scrolling to top
            if (window.scrollY < 100) {
                if (window.location.hash !== "" && pathname === "/") {
                    window.history.replaceState(null, "", "/");
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [pathname]);

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
                        alt="Mobri Logo - Websites & Virtual Assistant"
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                    />
                    <div className="text-2xl font-heading font-bold text-secondary transition-colors tracking-tight">
                        <TextFlip text="Mobri" />
                        <span className="text-primary">.</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group/nav-item">
                            <Link
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
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
                                        <Link href="/diensten/web-development/" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
                                            <p className="font-bold text-secondary text-xs group-hover/sub:text-primary">Web Development</p>
                                            <p className="text-[10px] text-muted-foreground">Moderne websites</p>
                                        </Link>
                                        <Link href="/diensten/onderhoud-content-support/" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
                                            <p className="font-bold text-secondary text-xs group-hover/sub:text-primary">Onderhoud & Content Support</p>
                                            <p className="text-[10px] text-muted-foreground">Technisch beheer</p>
                                        </Link>
                                        <Link href="/diensten/virtual-assistant/" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
                                            <p className="font-bold text-secondary text-xs group-hover/sub:text-primary">Virtual Assistant</p>
                                            <p className="text-[10px] text-muted-foreground">Strategische support</p>
                                        </Link>
                                        <Link href="/diensten/design/" className="p-3 hover:bg-primary/5 rounded-xl transition-colors group/sub">
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
                            onClick={(e) => scrollToSection(e, "/#contact")}
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
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-background flex flex-col md:hidden overflow-hidden shadow-2xl"
                        style={{ backgroundColor: '#FDFBF7' }}
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-secondary/5">
                            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                                <img
                                    src="/logo.png"
                                    alt="Mobri Logo - Websites & Virtual Assistant"
                                    className="w-8 h-8 object-contain"
                                />
                                <div className="text-xl font-heading font-bold text-secondary tracking-tight">
                                    Mobri<span className="text-primary">.</span>
                                </div>
                            </Link>
                            <button
                                className="p-2 text-secondary hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Sluit menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex-1 overflow-y-auto py-8 px-8 flex flex-col items-center justify-center text-center">
                            <div className="w-full max-w-sm flex flex-col gap-5">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        className="w-full"
                                    >
                                        {link.name === "Diensten" ? (
                                            <div className="flex flex-col gap-3">
                                                <span className="text-xl font-bold text-secondary">{link.name}</span>
                                                <div className="grid gap-3 py-1">
                                                    <Link href="/diensten/web-development/" className="text-base text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Web Development</Link>
                                                    <Link href="/diensten/onderhoud-content-support/" className="text-base text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Onderhoud & Content Support</Link>
                                                    <Link href="/diensten/virtual-assistant/" className="text-base text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Virtual Assistant</Link>
                                                    <Link href="/diensten/design/" className="text-base text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Design & Branding</Link>
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={(e) => {
                                                    scrollToSection(e, link.href);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="text-2xl font-bold text-secondary hover:text-primary transition-colors block py-1"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                        {index < navLinks.length - 1 && (
                                            <div className="h-px w-8 bg-primary/20 mx-auto mt-5" />
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6"
                                >
                                    <Link
                                        href="/#contact"
                                        onClick={(e) => {
                                            scrollToSection(e, "/#contact");
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                                    >
                                        Start Project
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
