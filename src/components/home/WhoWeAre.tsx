"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { coreServices } from "@/data/services";
import { cn } from "@/lib/utils";

export function WhoWeAre() {
  const [flagship, second, ...rest] = coreServices;
  const topRow = [flagship, second];

  return (
    <section id="about" className="bg-white py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Who We Are"
          title="Technology Built Around Your Business"
          description="Avocado Consulting is a technology consultancy that pairs business strategy with hands-on delivery — so recommendations come with an implementation plan, not just a slide deck."
          className="mb-16"
        />

        <div id="services" className="flex flex-col gap-6">
          {/* Top row — 2 larger cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {topRow.map((s, i) => (
              <FadeUp key={s.index} delay={i * 0.08}>
                <div
                  className={cn(
                    "group relative rounded-3xl p-10 md:p-12 overflow-hidden transition-all duration-300",
                    i === 0
                      ? "bg-forest"
                      : "bg-white border border-black/6 hover:bg-forest hover:border-forest hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)]"
                  )}
                >
                  {i === 0 && (
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/20 blur-[100px]" />
                  )}

                  <span
                    className={cn(
                      "text-sm font-mono transition-colors duration-300",
                      i === 0 ? "text-brand" : "text-forest/50 group-hover:text-brand"
                    )}
                  >
                    {s.index}
                  </span>
                  {i === 0 && (
                    <span className="ml-3 text-[10px] uppercase tracking-[0.16em] text-white/50 border border-white/15 rounded-full px-2.5 py-1">
                      Flagship service
                    </span>
                  )}

                  <h3
                    className={cn(
                      "mt-6 font-semibold text-2xl md:text-3xl leading-snug max-w-md transition-colors duration-300",
                      i === 0 ? "text-white" : "text-ink group-hover:text-white"
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-5 leading-relaxed max-w-md transition-colors duration-300",
                      i === 0 ? "text-white/65" : "text-muted group-hover:text-white/65"
                    )}
                  >
                    {s.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Bottom row — remaining cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((s, i) => (
              <FadeUp key={s.index} delay={i * 0.08 + 0.16}>
                <div
                  className={cn(
                    "group rounded-3xl border border-black/6 p-8 bg-white hover:bg-forest hover:border-forest hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] transition-all duration-300"
                  )}
                >
                  <span className="text-sm font-mono text-forest/50 group-hover:text-brand transition-colors duration-300">
                    {s.index}
                  </span>
                  <h3 className="mt-4 font-semibold text-lg text-ink group-hover:text-white leading-snug transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted group-hover:text-white/65 leading-relaxed transition-colors duration-300">
                    {s.description}
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