import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiServer,
  FiLock,
  FiBell,
  FiCreditCard,
  FiLink,
} from "react-icons/fi";

const points = [
  {
    icon: FiServer,
    title: "API Integration",
    description: "Connecting your app to the backend systems and services it needs to run on.",
  },
  {
    icon: FiLock,
    title: "Authentication",
    description: "Secure sign-in and session handling, built to modern security standards.",
  },
  {
    icon: FiBell,
    title: "Push Notifications",
    description: "Timely, relevant notifications that keep users engaged without overwhelming them.",
  },
  {
    icon: FiCreditCard,
    title: "Payment Integration",
    description: "Reliable, secure payment flows integrated with the providers you trust.",
  },
  {
    icon: FiLink,
    title: "Third-party Services",
    description: "Connecting your app to the tools and platforms your business already relies on.",
  },
];

export default function AppFeatures() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-95 h-95 rounded-full bg-brand/15 blur-[100px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="App Features & Integrations"
          title="Everything Your App Needs to Actually Work"
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