import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiGitPullRequest,
  FiCloud,
  FiFileText,
  FiBox,
  FiUploadCloud,
} from "react-icons/fi";

const points = [
  {
    icon: FiGitPullRequest,
    title: "CI/CD Pipeline Setup",
    description: "Automated pipelines that test and ship code reliably, every time.",
  },
  {
    icon: FiCloud,
    title: "Cloud Infrastructure",
    description: "Infrastructure designed for reliability, cost-efficiency, and room to grow.",
  },
  {
    icon: FiFileText,
    title: "Infrastructure as Code",
    description: "Environments defined in code — repeatable, versioned, and reviewable.",
  },
  {
    icon: FiBox,
    title: "Containerization",
    description: "Consistent, portable environments from local development to production.",
  },
  {
    icon: FiUploadCloud,
    title: "Deployment Automation",
    description: "Ship changes confidently with automated, repeatable deployment workflows.",
  },
];

export default function DevOpsServices() {
  return (
    <section className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="DevOps Services"
          title="Infrastructure That Doesn't Slow You Down"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.06}>
              <div className="rounded-2xl bg-white border border-black/6 p-7 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <span className="flex size-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <point.icon size={18} />
                </span>
                <h3 className="mt-4 font-semibold text-base text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
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