import type { Metadata } from "next";
import { displayName } from "@/data/company";
import ContactSection from "@/components/ContactSection";

const title = "Contact Us" + " | " + displayName;
const description = "Discuss your hiring needs or software project with RC Software Labs. Share your requirements, technology stack, and timeline to start a conversation.";
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
        <h1 className="text-display">Contact Us</h1>
        <p className="text-body mt-6 max-w-3xl">{description}</p>
      </div>
      <ContactSection />
    </>
  );
}
