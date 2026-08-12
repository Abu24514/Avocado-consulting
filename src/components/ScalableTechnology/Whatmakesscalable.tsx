import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { cn } from "@/lib/utils";
import { FiActivity, FiSliders, FiLink2, FiTool } from "react-icons/fi";

interface ScalableCard {
  index: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const scalableCards: ScalableCard[] = [
  {
    index: "01",
    icon: FiActivity,
    title: "Performance",
    description: "Systems designed to handle growing workloads efficiently.",
  },
  {
    index: "02",
    icon: FiSliders,
    title: "Flexibility",
    description: "Easily adapt technology as business needs evolve.",
  },
  {
    index: "03",
    icon: FiLink2,
    title: "Integration",
    description: "Connect new and existing systems without creating unnecessary complexity.",
  },
  {
    index: "04",
    icon: FiTool,
    title: "Maintainability",
    description: "Build technology that is easier to manage, improve and extend.",
  },
];

export default function WhatMakesScalable() {
  return (
    <section className="py-24 md:py-32 bg-ink">
      <Container>
        <SectionHeading
          eyebrow="What Makes Technology Scalable"
          title="The Principles Behind Scalable Systems"
          description="Scalability isn't one feature. It's a set of principles that keep technology efficient as demand and complexity grow."
          tone="dark"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scalableCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeUp key={card.title} delay={idx * 0.1}>
                <div
                  className={cn(
                    "group h-full rounded-2xl border border-white/10 bg-white/3 p-7",
                    "transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-white/6"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-white/30">
                      {card.index}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">{card.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}