import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiRepeat,
  FiCheckSquare,
  FiEdit3,
  FiBell,
} from "react-icons/fi";

const points = [
  {
    icon: FiRepeat,
    title: "Repetitive Tasks",
    description: "Routine, rule-based work that eats up hours but adds little value doing it manually.",
  },
  {
    icon: FiCheckSquare,
    title: "Approval Workflows",
    description: "Multi-step approvals that get stuck waiting on people instead of moving on their own.",
  },
  {
    icon: FiEdit3,
    title: "Data Entry",
    description: "Manual re-typing of the same information across different systems and tools.",
  },
  {
    icon: FiBell,
    title: "Notifications & Alerts",
    description: "Follow-ups and reminders that get missed when they depend on someone remembering.",
  },
];

export default function AutomationOpportunities() {
  return (
    <section className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Automation Opportunities"
          title="What Your Business Can Automate"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.06}>
              <div className="rounded-2xl bg-white border border-black/6 p-7 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="flex size-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <point.icon size={18} />
                </span>
                <h3 className="mt-4 font-semibold text-base text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}