import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContentRow from "@/components/ContentRow";

const primaryOfferings = [
  {
    title: "IT Staffing",
    body:
      "Strengthen your team with experienced engineers matched to your technology stack, priorities, and ways of working.",
  },
  {
    title: "Software Consulting",
    body:
      "Technical architecture, delivery guidance, and hands-on development from initial planning through launch and ongoing support.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Web Application Development",
    body: "React, Next.js, Node.js, Django, Go, Ruby — production-ready platforms.",
  },
  {
    number: "02",
    title: "Mobile Development",
    body: "React Native, Flutter, Swift, and Kotlin for cross-platform or native apps.",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    body: "AWS, GCP, Azure, Kubernetes, CI/CD, and reliable deployment pipelines.",
  },
  {
    number: "04",
    title: "AI & Machine Learning",
    body: "AI integration, workflow automation, natural language processing, and applied machine learning.",
  },
  {
    number: "05",
    title: "Full-Stack Delivery",
    body: "End-to-end builds: design, architecture, development, launch, maintenance.",
  },
  {
    number: "06",
    title: "Network Engineering",
    body: "Secure, high-availability infrastructure — SD-WAN, observability, zero-trust.",
  },
];

const ExpertiseSection = () => {
  return (
    <SectionWrapper id="expertise">
      <div className="space-y-14">
        <SectionHeader
          eyebrow="Services"
          title="IT staffing, backed by engineering depth"
          lead={
            <p>
              Expand your internal capabilities or bring in technical guidance for
              a specific initiative. Our staffing and consulting services support
              the people and systems behind your business.
            </p>
          }
        />

        <div className="grid gap-6 md:grid-cols-2">
          {primaryOfferings.map((offering) => (
            <div
              key={offering.title}
              className="surface-card rounded-2xl border border-brand-border bg-brand-surface/60 p-8 transition hover:border-brand-primary/40"
            >
              <p className="mb-3 text-label">How we help</p>
              <h3 className="text-heading mb-3 text-xl md:text-2xl">{offering.title}</h3>
              <p className="text-body-sm text-brand-soft/90">{offering.body}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-display text-xl text-brand-text md:text-2xl">
              Engineering capabilities
            </h3>
            <p className="max-w-3xl text-body-sm">
              Specialist expertise for your applications, infrastructure, and data-driven initiatives.
            </p>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2">
            {capabilities.map((capability) => (
              <ContentRow
                key={capability.number}
                index={capability.number}
                title={capability.title}
                body={capability.body}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExpertiseSection;
