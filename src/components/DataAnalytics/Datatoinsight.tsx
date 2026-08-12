import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiDatabase,
  FiLink2,
  FiBarChart2,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  { icon: FiDatabase, label: "Business Data" },
  { icon: FiLink2, label: "Collect & Connect" },
  { icon: FiBarChart2, label: "Organize & Analyze" },
  { icon: FiEye, label: "Clear Insights" },
  { icon: FiCheckCircle, label: "Better Decisions" },
];

export default function DataToInsight() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-brand/15 blur-[110px]" />

      <Container className="relative">
        <FadeUp className="text-center max-w-xl mx-auto">
          <Eyebrow tone="dark" className="justify-center">
            Data to Insight
          </Eyebrow>
          <h2 className="mt-5 font-bold text-3xl sm:text-4xl text-white tracking-tight text-balance">
            From Raw Numbers to Real Decisions
          </h2>
        </FadeUp>

        {/* Changed to Simple Card Grid Layout */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {steps.map((step, i) => (
            <FadeUp 
              key={step.label} 
              delay={i * 0.1} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)]"
            >
              <div className="bg-white/5 border border-white/10 hover:border-brand/40 rounded-2xl p-6 h-full flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand mb-4">
                  <step.icon size={24} />
                </span>
                <p className="font-semibold text-white">{step.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}