"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section className="bg-white py-28 md:py-36">
      <Container>
        <SectionHeading eyebrow="Our Process" title="From Strategy to Success" className="mb-20" />

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-black/8" />
          {processSteps.map((step, i) => (
            <FadeUp key={step.index} delay={i * 0.08}>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-forest flex items-center justify-center relative z-10">
                  <span className="text-xs font-mono text-forest">{step.index}</span>
                </div>
                <h3 className="mt-6 font-semibold text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-14">
          {/* Vertical line, centered under the 40px badges (badge center = 20px) */}
          <div className="absolute top-5 bottom-5 left-5 w-px bg-black/8" />

          <div className="flex flex-col gap-12">
            {processSteps.map((step, i) => (
              <FadeUp key={step.index} delay={i * 0.06}>
                <div className="relative">
                  <div className="absolute top-0 -left-14 w-10 h-10 rounded-full bg-white border-2 border-forest flex items-center justify-center z-10">
                    <span className="text-xs font-mono text-forest">{step.index}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-ink leading-snug pt-1.5">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}