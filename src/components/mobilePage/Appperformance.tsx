import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiZap,
  FiShield,
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";

const points = [
  {
    icon: FiZap,
    title: "Fast & Reliable Apps",
    description: "Apps that launch quickly and stay responsive, even under heavy use.",
  },
  {
    icon: FiShield,
    title: "Secure Data Handling",
    description: "User data protected in transit and at rest, by design, not as an afterthought.",
  },
  {
    icon: FiActivity,
    title: "Performance Optimization",
    description: "Smooth animations and fast interactions, tuned for real-world devices.",
  },
  {
    icon: FiTrendingUp,
    title: "Scalable Architecture",
    description: "Built to handle growth in users and features without a rebuild.",
  },
];

export default function AppPerformance() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <FadeUp>
              <Eyebrow>Performance & Security</Eyebrow>
              <h2 className="mt-5 font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
                Built to Perform, Built to Last
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-sm">
                Speed and security aren&apos;t features we add at the end —
                they&apos;re built into every layer of the app from day one.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative mt-8 overflow-hidden rounded-3xl bg-forest p-8">
                <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-brand/25 blur-[80px]" />
                <p className="relative font-bold text-5xl text-brand leading-none tabular-nums">
                  99.9%
                </p>
                <p className="relative mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
                  Target uptime we engineer every app to hit — monitored,
                  tested, and tuned continuously.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — numbered feature list */}
          <div className="flex flex-col">
            {points.map((point, i) => (
              <FadeUp key={point.title} delay={i * 0.08 + 0.1}>
                <div
                  className={`group flex items-start gap-6 py-7 ${
                    i !== points.length - 1 ? "border-b border-black/8" : ""
                  }`}
                >
                  <span className="font-mono text-sm text-brand/60 pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-soft text-forest group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <point.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-ink">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed max-w-md">
                      {point.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}