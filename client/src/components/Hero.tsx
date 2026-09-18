import Link from "next/link";
import { dbaName, legalName } from "@/data/company";

const Hero = () => (
  <section id="home" className="hero-section relative scroll-mt-[120px]">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
      <div className="hero-copy flex flex-col items-start gap-7">
        <p className="hero-eyebrow text-label"><span /> People. Partnership. Progress.</p>
        <h1 className="hero-title">Senior IT talent.<br /><span>Built for your<br />next chapter.</span></h1>
        <p className="max-w-xl text-body text-brand-soft/90">
          Web, mobile, cloud, and AI engineers who integrate fast and deliver
          clean work. Senior talent for U.S. teams, ready to ship.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="#contact" className="button-primary inline-flex items-center gap-6 rounded-full bg-brand-primary px-7 py-3.5 text-sm font-semibold text-brand-base">
            Request talent <span aria-hidden="true">&nearr;</span>
          </Link>
          <Link href="#expertise" className="hero-secondary text-sm font-medium text-brand-text">Explore our expertise <span aria-hidden="true">&rarr;</span></Link>
        </div>
        <div className="mt-3 border-l-2 border-brand-warm/60 pl-4">
          <p className="text-sm font-medium text-brand-text">{legalName}</p>
          <p className="mt-1 text-xs text-brand-muted">{dbaName} &middot; Staffing &amp; software consulting</p>
        </div>
      </div>
      <div className="talent-visual" aria-hidden="true">
        <div className="talent-orbit talent-orbit--outer" />
        <div className="talent-orbit talent-orbit--inner" />
        <div className="talent-core"><span className="text-label">Connected by</span><strong>Talent.</strong><span className="text-sm text-brand-muted">Driven by possibility.</span></div>
        <span className="orbit-label orbit-label--web">01 / Web &amp; Mobile</span>
        <span className="orbit-label orbit-label--cloud">02 / Cloud &amp; DevOps</span>
        <span className="orbit-label orbit-label--ai">03 / AI &amp; ML</span>
        <span className="orbit-dot" />
      </div>
    </div>
  </section>
);
export default Hero;
