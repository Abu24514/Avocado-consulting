"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FadeUp } from "@/components/common/FadeUp";

export default function AboutCta() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Glow accent, clipped to the card */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-[320px] rounded-full bg-brand/15 blur-[100px]" />
            </div>

            <div className="relative">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-balance max-w-2xl mx-auto">
                Let&apos;s Build What&apos;s Next.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
                Have a business challenge, transformation goal, or technology
                initiative in mind? Let&apos;s explore how Avocado Consulting
                can help turn it into a scalable solution.
              </p>

              <motion.div
                className="mt-9"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Let&apos;s Talk <FiArrowRight />
                </ButtonLink>
              </motion.div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}