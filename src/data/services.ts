import type { CoreService } from "@/types";


export const coreServices: CoreService[] = [
  {
    index: "01",
    title: "CRM End-to-End Implementation",
    description:
      "Strategic setup, configuration, and advanced customization of Salesforce and Zoho — deployed for measurable ROI, not just a working install. This is where every engagement starts.",
  },
  {
    index: "02",
    title: "AI & ML Solutions",
    description:
      "From opportunity assessment to production deployment, AI that improves how decisions get made rather than adding another dashboard to check.",
  },
  {
    index: "03",
    title: "Web Development",
    description:
      "Scalable, high-performance web applications designed around your users, your business goals, and your future growth.",
  },
  {
    index: "04",
    title: "Mobile App Development",
    description:
      "Modern, intuitive mobile applications built to deliver seamless experiences across every platform your customers use.",
  },
  {
    index: "05",
    title: "DevOps",
    description:
      "Reliable practices that streamline development, automate deployment, strengthen infrastructure, and keep your products ready to scale.",
  },
];

/**
 * Used on the dynamic /services/[slug] page — slugs match the hrefs
 * in data/nav.ts (servicesDropdown).
 */
export interface ServiceDetail {
  slug: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "crm-implementation",
    eyebrow: "CRM End-to-End Implementation",
    title: "Transform the Way You Manage Customers",
    highlight: "Manage Customers",
    description:
      "From strategy and customization to automation and integration, we build CRM systems around your business processes.",
  },
  {
    slug: "ai-ml",
    eyebrow: "AI & ML Solutions",
    title: "Turn Intelligence Into Business Impact",
    highlight: "Business Impact",
    description:
      "We integrate practical AI and machine learning solutions that automate workflows, improve decisions, and unlock new opportunities.",
  },
  {
    slug: "web-development",
    eyebrow: "Web Development",
    title: "Build Digital Experiences That Perform",
    highlight: "That Perform",
    description:
      "Scalable, high-performance web applications designed around your users, business goals, and future growth.",
  },
  {
    slug: "mobile-development",
    eyebrow: "Mobile App Development",
    title: "Bring Your Ideas to Every Screen",
    highlight: "Every Screen",
    description:
      "We create modern, intuitive mobile applications that deliver seamless experiences across platforms.",
  },
  {
    slug: "devops",
    eyebrow: "DevOps",
    title: "Build, Deploy, and Scale With Confidence",
    highlight: "With Confidence",
    description:
      "Reliable DevOps practices that streamline development, automate deployment, strengthen infrastructure, and keep your products ready to scale.",
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}