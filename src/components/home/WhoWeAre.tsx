"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { coreServices } from "@/data/services";
import { cn } from "@/lib/utils";

export function WhoWeAre() {
  const [flagship, ...rest] = coreServices;

  return (
    <section id="about" className="bg-white py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Who We Are"
          title="Technology Built Around Your Business"
          description="Avocado Consulting is a technology consultancy that pairs business strategy with hands-on delivery — so recommendations come with an implementation plan, not just a slide deck."
          className="mb-16"
        />

        <div id="services" className="grid lg:grid-cols-12 gap-6">
          <FadeUp className="lg:col-span-7">
            <div className="relative rounded-3xl bg-forest p-10 md:p-12 h-full overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/20 blur-[100px]" />
              <span className="text-sm font-mono text-brand">{flagship.index}</span>
              <span className="ml-3 text-[10px] uppercase tracking-[0.16em] text-white/50 border border-white/15 rounded-full px-2.5 py-1">
                Flagship service
              </span>
              <h3 className="mt-6 font-semibold text-2xl md:text-3xl text-white leading-snug max-w-md">
                {flagship.title}
              </h3>
              <p className="mt-5 text-white/65 leading-relaxed max-w-md">{flagship.description}</p>
            </div>
          </FadeUp>

          <div className="lg:col-span-5 grid gap-6">
            {rest.map((s, i) => (
              <FadeUp key={s.index} delay={i * 0.08 + 0.06}>
                <div
                  className={cn(
                    "rounded-3xl border border-black/6 p-8 h-full hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.18)] transition-all duration-300"
                  )}
                >
                  <span className="text-sm font-mono text-forest/50">{s.index}</span>
                  <h3 className="mt-4 font-semibold text-lg text-ink leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{s.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
