"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import { FloatingGlow } from "@/components/common/FloatingGlow";
import { statItems } from "@/data/stats";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <FloatingGlow className="w-105 h-105 bg-brand/5 top-0 right-0" />

      <Container className="relative z-10">
        <FadeUp className="mb-14 text-center flex flex-col items-center">
          <Eyebrow className="justify-center">Impact That Matters</Eyebrow>
          <h2 className="mt-5 font-semibold text-3xl sm:text-4xl md:text-5xl text-gray-900 max-w-2xl mx-auto text-balance tracking-tight">
            Where our engagements consistently deliver.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {statItems.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08} className="h-full">
              {/* Card Container */}
              <div className="relative group rounded-3xl border border-gray-200 bg-gray-50/50 p-6 xl:p-8 h-full flex flex-col hover:bg-brand/15 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300">
                
         
                <h3 className="font-medium text-2xl lg:text-3xl xl:text-[2rem] text-black leading-tight wrap-break-word text-balance">
                  {s.value}
                </h3>
                
                {/* Description Text */}
                <p className="mt-4 text-sm md:text-base font-medium text-gray-600 leading-relaxed">
                  {s.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}