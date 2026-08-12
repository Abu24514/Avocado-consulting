export interface FeatureDetail {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  cta: string;
}

export const featureDetails: FeatureDetail[] = [
  {
    slug: "business-automation",
    eyebrow: "Business Automation",
    title: "Automate the Work That Slows You Down",
    highlight: "Slows You Down",
    description:
      "Streamline repetitive business processes with intelligent automation that saves time, reduces manual effort, and improves operational efficiency.",
    cta: "Automate Your Workflow",
  },
  {
    slug: "ai-workflows",
    eyebrow: "AI-Powered Workflows",
    title: "Make Your Workflows More Intelligent",
    highlight: "More Intelligent",
    description:
      "Bring AI into everyday operations to help teams work faster, make better decisions, and turn complex tasks into smarter workflows.",
    cta: "Explore AI Workflows",
  },
  {
    slug: "data-analytics",
    eyebrow: "Data & Analytics",
    title: "Turn Business Data Into Better Decisions",
    highlight: "Better Decisions",
    description:
      "Transform scattered business data into clear, actionable insights that help you understand performance and make confident decisions.",
    cta: "Unlock Your Data",
  },
  {
    slug: "scalable-technology",
    eyebrow: "Scalable Technology",
    title: "Technology That Grows With Your Business",
    highlight: "Grows With Your Business",
    description:
      "Build flexible and reliable technology foundations designed to support your business today and adapt as it grows.",
    cta: "Build for Growth",
  },
];

export function getFeatureBySlug(slug: string) {
  return featureDetails.find((f) => f.slug === slug);
}