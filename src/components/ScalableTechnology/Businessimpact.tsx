import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { cn } from "@/lib/utils";
import { FiTrendingUp, FiMinimize2, FiZap } from "react-icons/fi";

interface ImpactCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const impactCards: ImpactCard[] = [
  {
    icon: FiTrendingUp,
    title: "Grow Confidently",
    description: "Technology keeps pace with business growth.",
  },
  {
    icon: FiMinimize2,
    title: "Reduce Complexity",
    description: "Avoid disconnected and difficult-to-manage systems.",
  },
  {
    icon: FiZap,
    title: "Stay Adaptable",
    description: "Make it easier to adopt new technologies when needed.",
  },
];

export default function BusinessImpact() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <Container>
        <SectionHeading
          eyebrow="Business Impact"
          title="What Scalable Technology Means for Your Business"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {impactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeUp key={card.title} delay={idx * 0.1}>
                <div
                  className={cn(
                    "group h-full rounded-2xl border border-ink/10 bg-white p-8 text-center",
                    "transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_-20px_rgba(11,23,16,0.15)]"
                  )}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-soft text-forest transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{card.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}