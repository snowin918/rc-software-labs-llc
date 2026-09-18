import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContentRow from "@/components/ContentRow";

const habits = [
  {
    title: "Take ownership",
    body: "We identify risks early, communicate next steps, and take responsibility for our commitments.",
  },
  {
    title: "Define success together",
    body: "We align candidate selection and delivery decisions with your goals and success criteria.",
  },
  {
    title: "Focus on what matters",
    body: "We prioritize the hiring needs and technical challenges that have the greatest impact on your team.",
  },
  {
    title: "Build lasting partnerships",
    body: "We establish clear expectations that support productive relationships between clients and engineers.",
  },
  {
    title: "Listen before recommending",
    body: "We understand your team, requirements, and constraints before proposing a solution.",
  },
  {
    title: "Collaborate with purpose",
    body: "We bring together complementary skills and encourage open, constructive collaboration.",
  },
  {
    title: "Keep improving",
    body: "We value continuous learning, thoughtful feedback, and the ongoing development of technical skills.",
  },
];

const SevenHabitsSection = () => {
  return (
    <SectionWrapper id="seven-habits">
      <div className="space-y-12">
        <SectionHeader
          eyebrow="Our values"
          title="The principles behind every partnership"
          lead={
            <p>
              Strong working relationships depend on more than technical ability.
              These principles guide how we communicate, collaborate, and
              support our clients and engineers.
            </p>
          }
        />

        <div className="max-w-3xl">
          {habits.map((habit, i) => (
            <ContentRow
              key={habit.title}
              index={String(i + 1).padStart(2, "0")}
              title={habit.title}
              body={habit.body}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SevenHabitsSection;
