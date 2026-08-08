"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28 md:py-36">
      <Container>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              className="lg:sticky lg:top-32"
            />
          </div>

          <div className="lg:col-span-8">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <FadeUp key={item.question} delay={i * 0.05}>
                  <div className="border-t border-black/8 last:border-b">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-lg text-ink">{item.question}</span>
                      <span
                        className={cn(
                          "shrink-0 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-300",
                          isOpen ? "rotate-45 bg-forest border-forest text-white" : "text-ink"
                        )}
                      >
                        <FiPlus size={16} />
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted leading-relaxed pb-6 max-w-2xl">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
