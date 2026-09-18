
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import WhoWeAreSection from "@/components/Absurd/WhoWeAreSection";
import PhilosophySection from "@/components/Absurd/PhilosophySection";
import VisionValuesSection from "@/components/Absurd/VisionValuesSection";
import { displayName, legalName } from "@/data/company";
export const metadata: Metadata = {
    title: `About | ${displayName}`,
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title={`About ${legalName}`}
        description="Global engineers aligning precision with empathy to build intelligent systems and equitable opportunity across borders."
        breadcrumbLinks={breadcrumbLinks}
      />
      <WhoWeAreSection />
      <PhilosophySection />
      <VisionValuesSection />
    </>
  );
};

export default page;
