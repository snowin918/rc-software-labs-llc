import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import ContentRow from "@/components/ContentRow";

const habits = [
  {
    title: "Be Proactive",
    body: "We flag risks early and keep placements moving without waiting to be chased.",
  },
  {
    title: "Begin with the End in Mind",
    body: "Every shortlist maps to your role goals, stack, and success criteria.",
  },
  {
    title: "Put First Things First",
    body: "Critical hires and blockers get priority — not busywork.",
  },
  {
    title: "Think Win-Win",
    body: "Engagements are built so clients and engineers both succeed long-term.",
  },
  {
    title: "Seek First to Understand",
    body: "We learn your team and constraints before recommending anyone.",
  },
  {
    title: "Synergize",
    body: "We match complementary strengths — not just overlapping resumes.",
  },
  {
    title: "Sharpen the Saw",
    body: "Our network stays sharp through continuous learning and technical review.",
  },
];

const SevenHabitsSection = () => {
  return (
    <SectionWrapper id="seven-habits">
      <div className="space-y-12">
        <SectionHeader
          eyebrow="7 Habits"
          title="How our teams show up"
          lead={
            <p>
              We align placements and delivery around Covey’s 7 Habits — practical
              ownership, clarity, and follow-through across time zones.
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
