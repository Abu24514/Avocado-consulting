import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiPieChart,
  FiLink,
  FiTrendingUp,
  FiTarget,
} from "react-icons/fi";

const capabilities = [
  {
    icon: FiPieChart,
    title: "Dashboards & Reporting",
    description: "Clear dashboards that make important metrics easy to understand.",
  },
  {
    icon: FiLink,
    title: "Data Integration",
    description: "Bring data from different business systems into one view.",
  },
  {
    icon: FiTrendingUp,
    title: "Performance Analytics",
    description: "Identify trends, gaps, and opportunities across your operations.",
  },
  {
    icon: FiTarget,
    title: "Decision Intelligence",
    description: "Turn complex data into actionable business insights.",
  },
];

export default function AnalyticsCapabilities() {
  return (
    <section className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Analytics Capabilities"
          title="What You Get With Every Engagement"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <FadeUp key={cap.title} delay={i * 0.06}>
              <div className="rounded-2xl bg-white border border-black/6 p-7 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="flex size-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <cap.icon size={18} />
                </span>
                <h3 className="mt-4 font-semibold text-base text-ink">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}