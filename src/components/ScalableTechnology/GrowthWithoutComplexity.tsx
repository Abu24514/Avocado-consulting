import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { FiFlag, FiLayers, FiTrendingUp, FiRefreshCw } from "react-icons/fi";

interface FlowStage {
  icon: React.ElementType;
  stage: string;
  description: string;
}

const flowStages: FlowStage[] = [
  {
    icon: FiFlag,
    stage: "Start",
    description: "Build the right foundation",
  },
  {
    icon: FiLayers,
    stage: "Build",
    description: "Add capabilities as needed",
  },
  {
    icon: FiTrendingUp,
    stage: "Scale",
    description: "Support growing operations",
  },
  {
    icon: FiRefreshCw,
    stage: "Evolve",
    description: "Adapt to future requirements",
  },
];

export default function GrowthWithoutComplexity() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Growth Without Complexity"
          title="A Clear Path From Start to Evolve"
          description="Scalable technology grows in stages, each one building on the last, so complexity never gets ahead of you."
          align="center"
          className="mx-auto"
        />

        <div className="mt-20">
          <div className="relative flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0">
            {/* connecting line - desktop */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-ink/10" />

            {flowStages.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === flowStages.length - 1;
              return (
                <FadeUp key={item.stage} delay={idx * 0.12} className="relative flex-1">
                  <div className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                    {/* connecting line - mobile */}
                    {!isLast && (
                      <span className="lg:hidden absolute left-6 top-12 -bottom-10 w-px bg-ink/10" />
                    )}

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon size={22} />
                    </div>

                    <div className="lg:mt-6">
                      <h3 className="text-lg font-semibold text-ink">{item.stage}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted lg:max-w-44 lg:mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}