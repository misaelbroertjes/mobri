import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bedankt voor je bericht | Mobri",
    description: "Bedankt voor je aanvraag bij Mobri. We nemen zo snel mogelijk contact met je op.",
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
