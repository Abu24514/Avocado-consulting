import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiGitBranch,
  FiDatabase,
  FiClock,
  FiLink,
} from "react-icons/fi";

const cards = [
  {
    icon: FiGitBranch,
    title: "Workflow Automation",
    description: "Manual business processes ko automated workflows me convert karna.",
  },
  {
    icon: FiDatabase,
    title: "Data Automation",
    description: "Different systems ke beech data ko automatically move aur update karna.",
  },
  {
    icon: FiClock,
    title: "Task Automation",
    description: "Repetitive tasks ko reduce karke teams ko important work par focus karwana.",
  },
  {
    icon: FiLink,
    title: "Business Integrations",
    description: "Existing tools aur platforms ko connected workflows ke through integrate karna.",
  },
];

export default function WhatWeAutomate() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:order-1">
            <FadeUp>
              <Eyebrow>What We Automate</Eyebrow>
              <h2 className="mt-5 font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
                Four Ways We Simplify Your Operations
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-md">
                From daily busywork to cross-system processes, we automate
                what&apos;s actually slowing your team down.
              </p>
            </FadeUp>

            <div className="mt-10 flex flex-col gap-5">
              {cards.map((card, i) => (
                <FadeUp key={card.title} delay={i * 0.08 + 0.1}>
                  <div className="group flex items-start gap-4 rounded-2xl border border-black/8 p-5 hover:border-brand/40 hover:bg-soft/60 transition-colors duration-300">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-soft text-forest group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <card.icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-base text-ink">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Image */}
          <FadeUp className="lg:order-2" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 sm:aspect-3/4">
              <Image
                src="https://images.unsplash.com/photo-1785522318345-67f8549614f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sticky notes mapping out a business workflow before automation"
                fill
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-xl">
                <p className="text-2xl font-bold text-forest leading-none">4</p>
                <p className="mt-1 text-sm text-muted leading-snug">
                  Core areas we automate for every client
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}