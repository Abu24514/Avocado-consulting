import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiLayout,
  FiSmartphone,
  FiCompass,
  FiUser,
} from "react-icons/fi";

const points = [
  {
    icon: FiLayout,
    title: "Modern Mobile UI",
    description: "Clean, contemporary interfaces designed for how people actually use apps today.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive App Interfaces",
    description: "Layouts that adapt cleanly across every screen size and device.",
  },
  {
    icon: FiCompass,
    title: "Smooth Navigation",
    description: "Intuitive flows that get people where they're going without friction.",
  },
  {
    icon: FiUser,
    title: "User-focused Experiences",
    description: "Every screen designed around what the user needs to do next.",
  },
];

export default function AppExperience() {
  return (
    <section className="bg-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="App Experience & UI"
          title="Interfaces That Feel Effortless"
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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