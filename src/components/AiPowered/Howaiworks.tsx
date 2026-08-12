import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { FiDatabase, FiCpu, FiGitBranch, FiZap } from "react-icons/fi";

const flow = [
  {
    icon: FiDatabase,
    label: "Your Data",
    detail: "CRM, documents, business data",
  },
  {
    icon: FiCpu,
    label: "AI Layer",
    detail: "Analysis & understanding",
  },
  {
    icon: FiGitBranch,
    label: "Business Workflow",
    detail: "Routed to the right process",
  },
  {
    icon: FiZap,
    label: "Action",
    detail: "Automated outcome",
  },
];

export default function HowAIWorks() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="How AI Works With Your Systems"
          title="From Raw Data to Automated Action"
          align="center"
          className="mx-auto mb-20"
        />

        {/* Flow — numbered cards connected by a line */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />

          <div className="grid lg:grid-cols-4 gap-6">
            {flow.map((step, i) => (
              <FadeUp key={step.label} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-black/8 bg-white p-7 h-full hover:border-brand/40 hover:shadow-[0_20px_40px_-15px_rgba(32,168,79,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-soft text-forest group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <step.icon size={24} />
                    </span>
                    <span className="font-mono text-xs text-brand/50">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-5 font-semibold text-lg text-ink">
                    {step.label}
                  </p>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Example — dark contrast strip */}
        <FadeUp delay={0.3}>
          <div className="mt-10 mx-auto max-w-3xl rounded-2xl bg-forest px-6 py-6 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-brand/80 mb-2">
              Example
            </p>
            <p className="font-mono text-sm sm:text-base text-white/85 leading-relaxed">
              CRM / Documents / Business Data{" "}
              <span className="text-brand">→</span> AI{" "}
              <span className="text-brand">→</span> Analysis{" "}
              <span className="text-brand">→</span> Automated Action
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}