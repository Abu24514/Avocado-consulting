import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiSmartphone,
  FiMousePointer,
  FiZap,
  FiEye,
  FiGrid,
} from "react-icons/fi";

const points = [
  {
    icon: FiSmartphone,
    title: "Responsive UI",
    description: "Interfaces that adapt cleanly across desktop, tablet, and mobile.",
  },
  {
    icon: FiMousePointer,
    title: "Interactive Interfaces",
    description: "Smooth, intuitive interactions that make products feel effortless to use.",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    description: "Fast load times and smooth rendering, even as your product grows.",
  },
  {
    icon: FiEye,
    title: "Accessibility",
    description: "Interfaces built to be usable by everyone, following accessibility best practices.",
  },
  {
    icon: FiGrid,
    title: "Cross-browser Compatibility",
    description: "Consistent experience across browsers and devices, no surprises.",
  },
];

export default function FrontDev() {
  return (
    <section className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Frontend Development"
          title="Interfaces People Actually Enjoy Using"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.06}>
              <div className="rounded-2xl bg-white border border-black/6 p-7 h-full">
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