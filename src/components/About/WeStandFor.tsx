import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";

const principles = [
  {
    index: "01",
    eyebrow: "Business Impact",
    title: "Technology With Purpose",
    description:
      "Every solution should solve a real business challenge. We focus on improving efficiency, simplifying operations, and creating measurable value.",
  },
  {
    index: "02",
    eyebrow: "Continuous Innovation",
    title: "Always Looking Forward",
    description:
      "Technology continues to evolve. We explore new ideas, AI capabilities, and smarter approaches to help businesses stay adaptable and ready for what's next.",
  },
  {
    index: "03",
    eyebrow: "Strategic Partnership",
    title: "Beyond Implementation",
    description:
      "We believe successful transformation is built through collaboration. We work alongside our clients from strategy and implementation through optimization and long-term growth.",
  },
];

export default function WeStandFor() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Principles That Guide Every Engagement"
          align="center"
          className="mx-auto mb-20"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <FadeUp key={p.index} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-black/8 p-8 hover:border-brand/40 hover:bg-brand/15 transition-colors duration-300">
                <span className="text-sm font-mono text-brand/70">
                  {p.index}
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                  {p.eyebrow}
                </p>
                <h3 className="mt-3 font-semibold text-xl text-ink leading-snug">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}