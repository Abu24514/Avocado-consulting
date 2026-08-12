import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiMessageSquare,
  FiShuffle,
  FiTarget,
  FiFileText,
} from "react-icons/fi";

const capabilities = [
  {
    icon: FiMessageSquare,
    title: "AI Assistants",
    description: "Help teams find information and complete everyday tasks faster.",
  },
  {
    icon: FiShuffle,
    title: "Intelligent Routing",
    description: "Automatically analyze requests and send them to the right workflow or team.",
  },
  {
    icon: FiTarget,
    title: "Smart Recommendations",
    description: "Use business data to support better operational decisions.",
  },
  {
    icon: FiFileText,
    title: "Document Intelligence",
    description: "Extract, organize, and understand information from business documents.",
  },
];

export default function AICapabilities() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-95 h-95 rounded-full bg-brand/15 blur-[100px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="AI-Powered Capabilities"
          title="What AI Actually Does for Your Team"
          tone="dark"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <FadeUp key={cap.title} delay={i * 0.08}>
              <div className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/4 p-7 h-full hover:bg-white/[0.07] transition-colors duration-300">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <cap.icon size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}