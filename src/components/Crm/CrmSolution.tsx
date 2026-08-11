import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import { cn } from "@/lib/utils";
import { FiCloud, FiLayers, FiSettings, FiZap } from "react-icons/fi";

interface CrmCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const crmCards: CrmCard[] = [
  {
    icon: FiCloud,
    title: "Salesforce CRM",
    description: "Custom Salesforce setup, configuration, and support built around how your sales team actually works.",
  },
  {
    icon: FiLayers,
    title: "Zoho CRM",
    description: "End-to-end Zoho CRM implementation to organize leads, deals, and customer data in one place.",
  },
  {
    icon: FiSettings,
    title: "CRM Customization",
    description: "Tailored fields, workflows, and dashboards so your CRM fits your process, not the other way around.",
  },
  {
    icon: FiZap,
    title: "CRM Automation",
    description: "Automated pipelines, follow-ups, and notifications that keep every deal moving without manual work.",
  },
];

export default function CrmSolution() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <Container>
        <SectionHeading
          eyebrow="CRM Solutions"
          title="CRM Platforms We Work With"
          description="Whether you're starting fresh or fixing what's broken, we help you set up, customize, and automate a CRM that your team will actually use."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {crmCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeUp key={card.title} delay={idx * 0.1}>
                <div
                  className={cn(
                    "group h-full rounded-2xl border border-ink/10 bg-white p-7",
                    "transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_-20px_rgba(11,23,16,0.15)]"
                  )}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-forest transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
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