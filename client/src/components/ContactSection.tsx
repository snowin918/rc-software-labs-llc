import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import { address, email } from "@/data/company";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Contact"
            title="Need engineers? Let’s talk."
            lead={
              <p>
                Share the role, stack, and timeline. We’ll respond within one
                business day with next steps — for hiring or consulting.
              </p>
            }
          />

          <div className="space-y-6 border-t border-brand-border pt-8">
            <div className="space-y-1">
              <p className="text-sm text-brand-muted">Email</p>
              <a
                href={`mailto:${email}`}
                className="text-lg font-medium text-brand-text transition hover:text-brand-primary"
              >
                {email}
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-brand-muted">Location</p>
              <p className="text-lg font-medium text-brand-text">{address}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 surface-card rounded-2xl border border-brand-border bg-brand-surface/70 p-8 text-left md:p-10">
          <p className="text-label">Quick contact</p>
          <p className="text-body text-brand-soft">
            Email us the role brief. We handle staffing requests, consulting
            inquiries, and engineer introductions.
          </p>
          <a
            href={`mailto:${email}?subject=Talent%20request`}
            className="inline-flex items-center justify-center button-primary rounded-full bg-brand-primary px-6 py-3.5 text-sm font-semibold text-brand-base transition hover:bg-brand-glow"
          >
            Request talent
          </a>
          <p className="text-body-sm">Typical reply within 1 business day.</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
