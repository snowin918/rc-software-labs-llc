import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SevenHabitsSection from "@/components/SevenHabitsSection";
import ContactSection from "@/components/ContactSection";
import { displayName, siteTitle, siteDescription } from "@/data/company";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: { title: siteTitle, description: siteDescription, siteName: displayName, type: "website", locale: "en_US" },
  twitter: { card: "summary", title: siteTitle, description: siteDescription },
};

export default function Home() {
  return (
    <main className="pb-8">
      <Hero />
      <PhilosophySection />
      <WhoWeAreSection />
      <ExpertiseSection />
      <SevenHabitsSection />
      <ContactSection />
    </main>
  );
}
