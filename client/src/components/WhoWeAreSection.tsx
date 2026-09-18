import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContentRow from "@/components/ContentRow";
import { cityState, legalName } from "@/data/company";

const differentiators = [
  {
    title: "Experienced engineering talent",
    body: "Connect with engineers experienced in developing and maintaining production software.",
  },
  {
    title: "Integrity in every placement",
    body: "We evaluate candidates against the skills and responsibilities your role requires.",
  },
  {
    title: "Technical judgment first",
    body: "Our recommendations consider technical experience, architectural requirements, and delivery expectations.",
  },
  {
    title: "Collaborative partnerships",
    body: "Clients and engineers get the same clarity on expectations, scope, and progress.",
  },
];

const WhoWeAreSection = () => {
  return (
    <SectionWrapper id="who-we-are">
      <div className="space-y-14">
        <SectionHeader
          eyebrow="Who we are"
          title="An engineering partner invested in your team"
          lead={
            <p>
              {legalName} is based in {cityState}. We help U.S. companies
              build capable engineering teams through senior IT staffing and
              software consulting, from technical planning to delivery.
            </p>
          }
        />

        <div className="grid gap-x-12 md:grid-cols-2">
          {differentiators.map((item, i) => (
            <ContentRow
              key={item.title}
              index={String(i + 1).padStart(2, "0")}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>

        <div className="grid gap-10 border-t border-brand-border pt-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-3">
            <p className="text-label">Mission</p>
            <p className="text-body text-brand-soft">
              Connect businesses with dependable engineering expertise and
              create meaningful opportunities for skilled professionals.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-label">Vision</p>
            <p className="text-body text-brand-soft">
              A technology industry where expertise, integrity, and collaboration
              create opportunity across borders.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoWeAreSection;
