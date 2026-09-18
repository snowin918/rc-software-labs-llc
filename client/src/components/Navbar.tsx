'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import CompanyLogo from "@/components/CompanyLogo";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Approach", href: "#philosophy" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Expertise", href: "#expertise" },
  { label: "7 Habits", href: "#seven-habits" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0]?.href ?? "#home");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let currentId = `#${sections[0].id}`;

      for (const section of sections) {
        const top = section.offsetTop;

        if (scrollPosition >= top) {
          currentId = `#${section.id}`;
        } else {
          break;
        }
      }

      setActiveSection((prev) => (prev !== currentId ? currentId : prev));
    };

    updateActiveSection();

    let ticking = false;
    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const handleNavigate = (href: string) => {
    setActiveSection(href);
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border bg-brand-base/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center text-brand-text"
          onClick={closeMenu}
        >
          <CompanyLogo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm lg:flex xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "nav-link text-sm font-medium",
                  isActive ? "nav-link--active" : "",
                )}
                onClick={() => handleNavigate(item.href)}
              >
                <span className="nav-link__label">{item.label}</span>
                <span aria-hidden="true" className="nav-link__glow" />
                <span aria-hidden="true" className="nav-link__spark" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden button-primary rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-brand-base transition hover:bg-brand-glow md:inline-flex"
          >
            Request talent
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-brand-border text-brand-text transition hover:border-white/25 lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-all",
                isMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-all",
                isMenuOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-all",
                isMenuOpen ? "-translate-y-1 rotate-[-45deg]" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          "overflow-hidden border-t border-brand-border bg-brand-base/95 backdrop-blur-xl transition-[max-height] duration-300 ease-in-out",
          isMenuOpen ? "max-h-[480px]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-2 px-6 py-6 text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href ? "page" : undefined}
              className={cn(
                "rounded-xl border border-brand-border bg-brand-ink/80 px-4 py-3 text-brand-soft transition hover:border-white/15",
                "nav-link nav-link--mobile",
                activeSection === item.href ? "nav-link--active" : "",
              )}
              onClick={() => handleNavigate(item.href)}
            >
              <span className="nav-link__label">{item.label}</span>
              <span aria-hidden="true" className="nav-link__glow" />
              <span aria-hidden="true" className="nav-link__spark" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 inline-flex items-center justify-center button-primary rounded-full bg-brand-primary px-5 py-3 text-base font-semibold text-brand-base transition hover:bg-brand-glow"
            onClick={closeMenu}
          >
            Request talent
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
