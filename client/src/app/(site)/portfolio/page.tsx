import type { Metadata } from "next";
import { displayName } from "@/data/company";
const title = "Project Portfolio" + " | " + displayName;
const description = "Explore web, mobile, and cloud project examples across a range of industries.";
export const metadata: Metadata = { title, description, openGraph: { title, description }, twitter: { title, description } };
import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";


const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];
    return (
        <>
            <HeroSub
                title="Portfolio"
                description={description}
                breadcrumbLinks={breadcrumbLinks}
            />
            <Portfolio />
        </>
    );
};

export default PortfolioList;