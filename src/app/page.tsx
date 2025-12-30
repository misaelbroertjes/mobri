import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TeamSection } from "@/components/TeamSection";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Header />
      <Hero />
      <TeamSection />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
