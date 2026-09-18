import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContentRow from "@/components/ContentRow";

const principles = [
  {
    title: "Skill over geography",
    body: "We place proven engineers — wherever they sit — against clear role requirements.",
  },
  {
    title: "Fit before fill",
    body: "We screen for stack, seniority, and communication. Speed never replaces match quality.",
  },
  {
    title: "Own the outcome",
    body: "Engineers join as accountable contributors, not resume placeholders.",
  },
  {
    title: "Straight talk",
    body: "If a candidate or timeline isn’t right, we say so early — before it costs you a cycle.",
  },
];

const howWeWork = [
  {
    title: "Listen to the role",
    body: "Scope, stack, seniority, and team culture first — then we shortlist.",
  },
  {
    title: "Vet with rigor",
    body: "Technical depth, delivery history, and English-ready collaboration.",
  },
  {
    title: "Stay close after start",
    body: "We support onboarding and stay available if the engagement needs adjustment.",
  },
];

const PhilosophySection = () => {
  return (
    <SectionWrapper id="philosophy">
      <div className="space-y-14">
        <SectionHeader
          eyebrow="Approach"
          title="How we staff"
          lead={
            <p>
              Clear requirements. Strong candidates. Honest feedback. We treat
              staffing as a delivery partnership, not a volume transaction.
            </p>
          }
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 text-label text-brand-muted">Principles</p>
            <div>
              {principles.map((item, i) => (
                <ContentRow
                  key={item.title}
                  index={String(i + 1).padStart(2, "0")}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-label text-brand-muted">Process</p>
            <div>
              {howWeWork.map((item, i) => (
                <ContentRow
                  key={item.title}
                  index={String(i + 1).padStart(2, "0")}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PhilosophySection;
