import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiTool,
  FiGitMerge,
  FiSend,
  FiPackage,
  FiSettings,
} from "react-icons/fi";

const points = [
  {
    icon: FiTool,
    title: "Automated Builds",
    description: "Every change built consistently, with no manual steps to forget.",
  },
  {
    icon: FiGitMerge,
    title: "Continuous Integration",
    description: "Code tested and merged continuously, catching issues before they compound.",
  },
  {
    icon: FiSend,
    title: "Continuous Deployment",
    description: "Changes flow to production safely, without manual bottlenecks.",
  },
  {
    icon: FiPackage,
    title: "Release Automation",
    description: "Releases packaged and shipped the same way, every single time.",
  },
  {
    icon: FiSettings,
    title: "Environment Management",
    description: "Dev, staging, and production kept consistent and easy to reason about.",
  },
];

export default function AutomationDeployment() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-95 h-95 rounded-full bg-brand/15 blur-[100px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Automation & Deployment"
          title="Ship Faster, Break Less"
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