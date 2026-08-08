"use client";

import { FiArrowRight } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/common/FadeUp";

export function CTABanner() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Glow accent, clipped to the card */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-[320px] rounded-full bg-brand/18 blur-[100px]" />
            </div>

            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-tight text-balance">
                Ready to Build a Smarter Business?
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                Let&apos;s discuss how technology can simplify your operations
                and accelerate your growth.
              </p>
              <div className="mt-10 flex justify-center">
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Let&apos;s Connect <FiArrowRight />
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}