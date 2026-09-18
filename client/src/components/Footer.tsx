import Link from "next/link";
import CompanyLogo from "@/components/CompanyLogo";
import { address, displayName, email } from "@/data/company";

const footerLinks = [
  { label: "Approach", href: "#philosophy" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Expertise", href: "#expertise" },
  { label: "7 Habits", href: "#seven-habits" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-brand-border bg-brand-base/90">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md space-y-4">
            <Link href="#home" className="inline-flex" aria-label="RC Software Labs LLC home">
              <CompanyLogo />
            </Link>
            <p className="text-body-sm">
              IT staffing and software consulting for U.S. companies — senior
              engineers, clear communication, reliable delivery.
            </p>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-2 sm:gap-12">
            <div>
              <p className="mb-3 text-sm font-medium text-brand-muted">Contact</p>
              <div className="space-y-2">
                <a
                  href={`mailto:${email}`}
                  className="block font-medium text-brand-text transition hover:text-brand-primary"
                >
                  {email}
                </a>
                <p className="text-brand-muted">{address}</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-brand-muted">Explore</p>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-soft transition hover:text-brand-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-border pt-6 text-center text-xs text-brand-muted">
          © {new Date().getFullYear()} {displayName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
