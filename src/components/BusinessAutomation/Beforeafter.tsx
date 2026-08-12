import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import { FiArrowRight } from "react-icons/fi";

const comparisons = [
  { before: "Manual Data Entry", after: "Automatic Data Sync" },
  { before: "Manual Approval", after: "Automated Approval" },
  { before: "Repeated Follow-ups", after: "Smart Notifications" },
  { before: "Multiple Tools", after: "Connected Workflow" },
];

export default function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-brand/10 blur-[130px]" />

      <Container className="relative">
        <FadeUp className="text-center max-w-xl mx-auto">
          <Eyebrow tone="dark">Before → After</Eyebrow>
          <h2 className="mt-5 font-bold text-3xl sm:text-4xl text-white tracking-tight text-balance">
            The Real Shift Automation Creates
          </h2>
        </FadeUp>

        <div className="mt-16 max-w-3xl mx-auto">
          {/* Column labels */}
          <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-6 mb-4 px-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
              Manual Process
            </p>
            <span />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand/70 text-right">
              Automated Workflow
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {comparisons.map((row, i) => (
              <FadeUp key={row.before} delay={i * 0.08}>
                <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 items-center rounded-2xl border border-white/10 bg-white/4 p-5 sm:p-6">
                  <p className="text-white/50 text-sm sm:text-base line-through decoration-white/20">
                    {row.before}
                  </p>

                  <span className="hidden sm:flex size-8 items-center justify-center rounded-full bg-brand/15 text-brand shrink-0">
                    <FiArrowRight size={16} />
                  </span>

                  <p className="font-semibold text-white text-sm sm:text-base sm:text-right">
                    {row.after}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}