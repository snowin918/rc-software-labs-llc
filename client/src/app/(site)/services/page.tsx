
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import ExpertiseSection from "@/components/Absurd/ExpertiseSection";
import PartnersSection from "@/components/Absurd/PartnersSection";
import { displayName } from "@/data/company";
export const metadata: Metadata = {
    title: `Services | ${displayName}`,
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description="End-to-end engineering for web, mobile, cloud, and AI systems purpose-built for U.S. partners."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ExpertiseSection />
      <PartnersSection />
    </>
  );
};

export default page;
