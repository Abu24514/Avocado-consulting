import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiServer,
  FiDatabase,
  FiLock,
  FiCpu,
  FiLink,
} from "react-icons/fi";

const points = [
  {
    icon: FiServer,
    title: "REST APIs",
    description: "Well-structured, documented APIs built to be consumed reliably by any client.",
  },
  {
    icon: FiDatabase,
    title: "Database Integration",
    description: "Schema design and data layers built for performance, integrity, and scale.",
  },
  {
    icon: FiLock,
    title: "Authentication",
    description: "Secure sign-in and access control, built to modern security standards.",
  },
  {
    icon: FiCpu,
    title: "Business Logic",
    description: "Backend systems that model how your business actually operates.",
  },
  {
    icon: FiLink,
    title: "Third-party Integrations",
    description: "Connecting your product to the tools and services your business already relies on.",
  },
];

export default function BackAndApiDev() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-95 h-95 rounded-full bg-brand/15 blur-[100px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Backend & API Development"
          title="The Systems That Power Everything Else"
          tone="dark"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-7 h-full hover:bg-white/[0.07] transition-colors duration-300">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <point.icon size={18} />
                </span>
                <h3 className="mt-4 font-semibold text-base text-white">
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