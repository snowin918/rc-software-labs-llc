import type { Metadata } from "next";
import { displayName } from "@/data/company";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import PhilosophySection from "@/components/PhilosophySection";
import SevenHabitsSection from "@/components/SevenHabitsSection";

const title = "About Us" + " | " + displayName;
const description = "Meet RC Software Labs, a California-based IT staffing and software consulting firm helping U.S. businesses build capable engineering teams.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { title, description },
};

export default function Page() {
  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-label mb-4">{displayName}</p>
        <h1 className="text-display">About Us</h1>
        <p className="text-body mt-6 max-w-3xl">{description}</p>
      </div>
      <WhoWeAreSection />
      <PhilosophySection />
      <SevenHabitsSection />
    </>
  );
}
