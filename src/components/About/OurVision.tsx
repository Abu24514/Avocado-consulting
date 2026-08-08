import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { FiZap, FiShield, FiTrendingUp } from "react-icons/fi";

const visionPoints = [
  {
    icon: FiZap,
    title: "Innovation",
    description: "Technology that creates new possibilities.",
  },
  {
    icon: FiShield,
    title: "Integrity",
    description: "Building relationships through transparency and trust.",
  },
  {
    icon: FiTrendingUp,
    title: "Impact",
    description: "Measuring success through meaningful business outcomes.",
  },
];

export default function OurVision() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -top-24 -right-24 w-105 h-105 rounded-full bg-brand/15 blur-[100px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Vision"
          title="Building a Smarter Digital Future"
          tone="dark"
          align="center"
          className="mx-auto"
        />

        <FadeUp delay={0.1}>
          <div className="mt-8 max-w-3xl mx-auto flex flex-col gap-5 text-center">
            <p className="text-base sm:text-lg text-white/65 leading-relaxed">
              Our vision is to become a globally trusted technology partner
              known for excellence, integrity, and measurable impact.
            </p>
            <p className="text-base sm:text-lg text-white/65 leading-relaxed">
              We envision a future where businesses of every size can use
              intelligent digital solutions to operate smarter, scale faster,
              and compete with confidence. By combining innovation, strategic
              thinking, and disciplined execution, we aim to build technology
              ecosystems that create lasting value and enable continuous
              growth.
            </p>
          </div>
        </FadeUp>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {visionPoints.map((point, i) => (
            <FadeUp key={point.title} delay={0.15 + i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-7 h-full hover:bg-white/[0.07] transition-colors duration-300">
                <point.icon className="text-brand" size={22} />
                <h3 className="mt-4 font-semibold text-lg text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}