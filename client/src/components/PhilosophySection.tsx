import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContentRow from "@/components/ContentRow";

const principles = [
  {
    title: "Expertise without borders",
    body: "We connect you with engineers whose experience matches your technical requirements and business priorities.",
  },
  {
    title: "Thoughtful candidate selection",
    body: "We assess technical skills, experience, and communication to find the right fit for your team.",
  },
  {
    title: "Accountability from day one",
    body: "Our engineers contribute with clear responsibilities, shared goals, and a commitment to dependable delivery.",
  },
  {
    title: "Transparent communication",
    body: "We communicate openly about candidate suitability, availability, and timelines so you can make informed decisions.",
  },
];

const howWeWork = [
  {
    title: "Understand your requirements",
    body: "We clarify your scope, technology stack, experience requirements, and team environment before selecting candidates.",
  },
  {
    title: "Evaluate relevant experience",
    body: "We review technical depth, project experience, and the communication skills needed for effective collaboration.",
  },
  {
    title: "Support the engagement",
    body: "We support onboarding and remain available as your team, priorities, and engagement needs evolve.",
  },
];

const PhilosophySection = () => {
  return (
    <SectionWrapper id="philosophy">
      <div className="space-y-14">
        <SectionHeader
          eyebrow="Approach"
          title="The right expertise starts with understanding your goals"
          lead={
            <p>
              Every engagement begins with your business needs. We combine
              careful candidate evaluation with clear communication and ongoing
              support to help your team move forward.
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
