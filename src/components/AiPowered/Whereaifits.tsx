import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiHeadphones,
  FiTrendingUp,
  FiSettings,
  FiBarChart2,
} from "react-icons/fi";

const areas = [
  {
    icon: FiHeadphones,
    title: "Customer Support",
    description: "AI-assisted responses and faster issue resolution.",
  },
  {
    icon: FiTrendingUp,
    title: "Sales Operations",
    description: "Lead qualification, follow-ups and sales assistance.",
  },
  {
    icon: FiSettings,
    title: "Internal Operations",
    description: "AI-assisted task handling, information retrieval and workflow support.",
  },
  {
    icon: FiBarChart2,
    title: "Decision Support",
    description: "Turn business data into useful recommendations and insights.",
  },
];

export default function WhereAIFits() {
  return (
    <section className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Where AI Fits"
          title="AI Across Your Business"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <FadeUp key={area.title} delay={i * 0.06}>
              <div className="rounded-2xl bg-white border border-black/6 p-7 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="flex size-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <area.icon size={18} />
                </span>
                <h3 className="mt-4 font-semibold text-base text-ink">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {area.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}