import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { cn } from "@/lib/utils";
import { FiCompass, FiTool, FiLink, FiRefreshCw } from "react-icons/fi";

interface HandleCard {
  index: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const handleCards: HandleCard[] = [
  {
    index: "01",
    icon: FiCompass,
    title: "Strategy & Consulting",
    description: "We assess your workflows and recommend the right CRM approach before a single line is built.",
  },
  {
    index: "02",
    icon: FiTool,
    title: "Implementation & Customization",
    description: "Full setup and tailored configuration so the CRM matches your sales and support process exactly.",
  },
  {
    index: "03",
    icon: FiLink,
    title: "Integration & Automation",
    description: "Connecting your CRM with the tools you already use and automating the repetitive parts of the work.",
  },
  {
    index: "04",
    icon: FiRefreshCw,
    title: "Migration & Optimization",
    description: "Clean data migration from legacy systems, plus ongoing tuning to keep performance sharp.",
  },
];

export default function WhatWeHandle() {
  return (
    <section className="py-24 md:py-32 bg-ink">
      <Container>
        <SectionHeading
          eyebrow="What We Handle"
          title="Support Across the Full CRM Lifecycle"
          description="From first strategy conversation to long-term optimization, we cover every stage of your CRM journey."
          tone="dark"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {handleCards.map((card, idx) => {
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
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
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