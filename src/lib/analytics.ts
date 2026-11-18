type EventParams = Record<string, string | number | boolean>;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        umami?: {
            track: (eventName: string, data?: EventParams) => void;
        };
    }
}

/**
 * Send a conversion or interaction event to both Umami (cookieless)
 * and Google Analytics 4 (when available/consented).
 */
export function trackEvent(name: string, params?: EventParams) {
    if (typeof window === "undefined") return;

    try {
        if (typeof window.umami?.track === "function") {
            window.umami.track(name, params);
        }
    } catch {
        // Ignore tracker errors so UI flows are never disrupted
    }

    try {
        if (typeof window.gtag === "function") {
            window.gtag("event", name, params ?? {});
        }
    } catch {
        // Ignore tracker errors so UI flows are never disrupted
    }
}
