"use client";

import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-secondary-foreground py-12 border-t border-secondary-foreground/10">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-11 h-11 flex items-center justify-center rounded-2xl bg-white/10 group-hover:scale-105 transition-all duration-300 shadow-sm border border-white/5">
                                <img
                                    src="/logo.png"
                                    alt="Mobri Logo"
                                    className="w-7 h-7 object-contain"
                                />
                            </div>
                            <div className="text-2xl font-heading font-bold text-white tracking-tight">
                                Mobri<span className="text-primary">.</span>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Professionele websites en Virtual Assistant services voor ondernemers met een visie.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-foreground">Contact</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>Bolsterturf 2, 7942 MC Meppel</li>
                            <li><a href="tel:0638125176" className="hover:text-primary">06-38125176</a></li>
                            <li><a href="mailto:info@mobri.nl" className="hover:text-primary">info@mobri.nl</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-foreground">Details</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>KVK: 66470188</li>
                            <li>
                                <Link href="/voorwaarden" className="hover:text-primary transition-colors">
                                    Algemene Voorwaarden
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-primary transition-colors">
                                    Privacy Verklaring
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted pt-8 text-center text-sm text-muted-foreground">
                    &copy; {currentYear} Mobri. Alle rechten voorbehouden.
                </div>
            </div>
        </footer>
    );
}

