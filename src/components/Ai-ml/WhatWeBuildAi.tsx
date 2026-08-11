import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import { FiMessageSquare, FiZap, FiTrendingUp } from "react-icons/fi";

export default function WhatWeBuildAi() {
  const buildItems = [
    {
      icon: FiMessageSquare,
      title: "AI Assistants",
      description:
        "Business-specific AI assistants that help teams find information and get work done faster.",
    },
    {
      icon: FiZap,
      title: "Intelligent Automation",
      description:
        "AI-powered workflows that reduce repetitive manual operations and streamline your daily processes.",
    },
    {
      icon: FiTrendingUp,
      title: "Predictive Solutions",
      description:
        "Use your business data to identify hidden patterns, forecast trends, and unlock new opportunities.",
    },
  ];

  return (
    <section className="bg-soft/30 py-24 md:py-32">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <FadeUp>
            <Eyebrow>What We Build</Eyebrow>
            <h2 className="mt-5 font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
              Purpose-Built AI Solutions
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We design and deploy practical AI tools tailored to your specific business operations and growth goals.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {buildItems.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.15}>
              <div className="h-full bg-white border border-black/8 rounded-3xl p-8 hover:border-brand/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                
                {/* Large Icon Container */}
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-soft text-forest group-hover:bg-brand group-hover:text-white transition-colors duration-300 mb-6">
                  <item.icon size={26} />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-bold text-xl text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}