import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContentRow from "@/components/ContentRow";
import { cityState, dbaName, legalName } from "@/data/company";

const differentiators = [
  {
    title: "Senior talent, global bench",
    body: "Engineers who have shipped production systems across U.S. and international teams.",
  },
  {
    title: "Integrity in every placement",
    body: "We recommend only candidates we’d put on our own projects.",
  },
  {
    title: "Technical judgment first",
    body: "Matching is driven by architecture fit and delivery track record — not buzzwords.",
  },
  {
    title: "Partnership over hierarchy",
    body: "Clients and engineers get the same clarity on expectations, scope, and progress.",
  },
];

const WhoWeAreSection = () => {
  return (
    <SectionWrapper id="who-we-are">
      <div className="space-y-14">
        <SectionHeader
          eyebrow="Who we are"
          title={`${legalName} — IT staffing for U.S. companies`}
          lead={
            <p>
              {dbaName} is a {cityState}–based IT staffing firm. We place senior
              engineers with U.S. partners and support engagements with consulting
              when architecture or delivery leadership is needed.
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
              Connect U.S. companies with reliable engineering talent — and give
              strong developers clear paths to meaningful work.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-label">Vision</p>
            <p className="text-body text-brand-soft">
              Skill and integrity decide opportunity — not zip code.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoWeAreSection;
