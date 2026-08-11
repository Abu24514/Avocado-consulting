import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiActivity,
  FiAlertCircle,
  FiBarChart2,
  FiShield,
  FiHardDrive,
} from "react-icons/fi";

const points = [
  {
    icon: FiActivity,
    title: "Application Monitoring",
    description: "Real-time visibility into how your application is performing, right now.",
  },
  {
    icon: FiAlertCircle,
    title: "Logs & Alerts",
    description: "Centralized logs and alerts that surface problems before users notice.",
  },
  {
    icon: FiBarChart2,
    title: "Infrastructure Monitoring",
    description: "Full visibility into servers, containers, and the resources behind them.",
  },
  {
    icon: FiShield,
    title: "Security Best Practices",
    description: "Infrastructure hardened and reviewed against modern security standards.",
  },
  {
    icon: FiHardDrive,
    title: "Backup & Reliability",
    description: "Automated backups and recovery plans, so failure is never a surprise.",
  },
];

export default function MonitoringSecurity() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          {/* Left — heading + stat card */}
          <div>
            <FadeUp>
              <Eyebrow>Monitoring & Security</Eyebrow>
              <h2 className="mt-5 font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
                Nothing Breaks Without Us Knowing
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-sm">
                Monitoring and security aren&apos;t an afterthought — they&apos;re
                built in from day one and watched every day after.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="relative mt-8 overflow-hidden rounded-3xl bg-forest p-8">
                <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-brand/25 blur-[80px]" />
                <p className="relative font-bold text-5xl text-brand leading-none tabular-nums">
                  24/7
                </p>
                <p className="relative mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
                  Continuous monitoring across every environment we manage.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — numbered feature list */}
          <div className="flex flex-col">
            {points.map((point, i) => (
              <FadeUp key={point.title} delay={i * 0.06 + 0.1}>
                <div
                  className={`group flex items-start gap-6 py-6 ${
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