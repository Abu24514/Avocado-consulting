import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { FiZap, FiTarget, FiTrendingUp } from "react-icons/fi";

const impacts = [
  {
    icon: FiZap,
    title: "Work Faster",
    description: "Reduce time spent on repetitive and information-heavy tasks.",
  },
  {
    icon: FiTarget,
    title: "Make Better Decisions",
    description: "Give teams relevant insights when they need them.",
  },
  {
    icon: FiTrendingUp,
    title: "Scale Operations",
    description: "Handle growing workloads without increasing manual effort.",
  },
];

export default function BusinessImpactAI() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Business Impact"
          title="What AI Actually Changes"
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {impacts.map((impact, i) => (
            <FadeUp key={impact.title} delay={i * 0.08}>
              <div className="group text-center rounded-2xl border border-black/8 p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_-15px_rgba(32,168,79,0.15)]">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-soft text-forest transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <impact.icon size={24} />
                </span>
                <h3 className="mt-5 font-semibold text-lg text-ink">
                  {impact.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}