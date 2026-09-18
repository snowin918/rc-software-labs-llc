import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SevenHabitsSection from "@/components/SevenHabitsSection";
import ContactSection from "@/components/ContactSection";
import { displayName, legalName } from "@/data/company";

export const metadata: Metadata = {
  title: displayName,
  description: `${legalName} is an IT staffing firm for U.S. companies — placing senior web, mobile, cloud, and AI engineers, with consulting when you need delivery leadership.`,
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
