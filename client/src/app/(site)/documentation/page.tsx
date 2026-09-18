import type { Metadata } from "next";
import { displayName } from "@/data/company";
const title = "Documentation" + " | " + displayName;
const description = "Technical reference for the RC Software Labs website.";
export const metadata: Metadata = { title, description, openGraph: { title, description }, twitter: { title, description }, robots: { index: false, follow: false } };

import { Documentation } from "@/components/Documentation/Documentation";


export default function Page() {
    return (
        <>
        <Documentation/>
        </>
    );
};
