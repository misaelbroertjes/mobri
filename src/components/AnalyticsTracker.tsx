"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Delegated listener for key conversion link clicks (tel:, mailto:, #contact CTAs)
 * across both server and client components.
 */
export function AnalyticsTracker() {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href") || "";
            const page = window.location.pathname;

            if (href.startsWith("tel:")) {
                trackEvent("phone_click", { page });
                return;
            }

            if (href.startsWith("mailto:")) {
                trackEvent("email_click", { page });
                return;
            }

            if (href.includes("#contact")) {
                const label = anchor.textContent?.trim().slice(0, 60) || "contact_link";
                trackEvent("cta_contact_click", { page, label });
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return null;
}
