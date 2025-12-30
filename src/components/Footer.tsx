"use client";

import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-secondary-foreground py-12 border-t border-secondary-foreground/10">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-heading font-bold">
                            Mobri<span className="text-primary">.</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs">
                            Professionele websites en digitale ondersteuning voor ondernemers.
                        </p>
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
                            <li>Algemene Voorwaarden</li>
                            <li>Privacy Verklaring</li>
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

