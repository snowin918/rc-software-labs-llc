import Link from "next/link";
import { legalName } from "@/data/company";

const Hero = () => (
  <section id="home" className="hero-section relative scroll-mt-[120px]">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
      <div className="hero-copy flex flex-col items-start gap-7">
        <p className="hero-eyebrow text-label"><span /> IT staffing &amp; software consulting</p>
        <h1 className="hero-title">Strong teams.<br /><span>Exceptional<br />engineering.</span></h1>
        <p className="max-w-xl text-body text-brand-soft/90">
          Connect with senior web, mobile, cloud, and AI engineers who understand
          your goals. Strengthen your team with dedicated talent and hands-on
          software consulting.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="#contact" className="button-primary inline-flex items-center gap-6 rounded-full bg-brand-primary px-7 py-3.5 text-sm font-semibold text-brand-base">
            Request talent <span aria-hidden="true">&nearr;</span>
          </Link>
          <Link href="#expertise" className="hero-secondary text-sm font-medium text-brand-text">Explore our expertise <span aria-hidden="true">&rarr;</span></Link>
        </div>
        <div className="mt-3 border-l-2 border-brand-warm/60 pl-4">
          <p className="text-sm font-medium text-brand-text">{legalName}</p>
          <p className="mt-1 text-xs text-brand-muted">Supporting engineering teams across the United States</p>
        </div>
      </div>
      <div className="talent-visual" aria-hidden="true">
        <div className="talent-orbit talent-orbit--outer" />
        <div className="talent-orbit talent-orbit--inner" />
        <div className="talent-core"><span className="text-label">Connected by</span><strong>Talent.</strong><span className="text-sm text-brand-muted">Built on expertise.</span></div>
        <span className="orbit-label orbit-label--web">01 / Web &amp; Mobile</span>
        <span className="orbit-label orbit-label--cloud">02 / Cloud &amp; DevOps</span>
        <span className="orbit-label orbit-label--ai">03 / AI &amp; ML</span>
        <span className="orbit-dot" />
      </div>
    </div>
  </section>
);
export default Hero;
