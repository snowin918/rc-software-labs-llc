import type { Metadata } from "next";
import { displayName } from "@/data/company";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";

const title = "IT Staffing & Software Consulting" + " | " + displayName;
const description = "Explore senior engineering staffing and software consulting for web applications, mobile development, cloud infrastructure, and AI initiatives.";
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
        <h1 className="text-display">IT Staffing &amp; Software Consulting</h1>
        <p className="text-body mt-6 max-w-3xl">{description}</p>
      </div>
      <ExpertiseSection />
      <ContactSection />
    </>
  );
}
