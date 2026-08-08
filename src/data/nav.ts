import type { NavLink, DropdownItem } from "@/types";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services/web-development",
  },
  {
    label: "Features",
    href: "/features/business-automation",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const servicesDropdown: DropdownItem[] = [
  {
    label: "Web Development",
    description:
      "Scalable and high-performance web applications built around your business needs.",
    href: "/services/web-development",
  },
  {
    label: "Mobile App Development",
    description:
      "Modern mobile applications designed for seamless experiences across platforms.",
    href: "/services/mobile-development",
  },
  {
    label: "DevOps",
    description:
      "Reliable development, deployment and infrastructure practices built for scalable products.",
    href: "/services/devops",
  },
  {
    label: "CRM End-to-End Implementation",
    description:
      "End-to-end CRM strategy, implementation, customization, automation and integration.",
    href: "/services/crm-implementation",
  },
  {
    label: "AI & ML Solutions",
    description:
      "Intelligent AI and machine learning solutions designed to improve business operations.",
    href: "/services/ai-ml",
  },
];

export const featuresDropdown: DropdownItem[] = [
  {
    label: "Business Automation",
    description:
      "Automate repetitive processes and create more efficient workflows.",
    href: "/features/business-automation",
  },
  {
    label: "AI-Powered Workflows",
    description:
      "Integrate intelligent automation into everyday business processes.",
    href: "/features/ai-workflows",
  },
  {
    label: "Data & Analytics",
    description:
      "Turn business data into clear insights for smarter decisions.",
    href: "/features/data-analytics",
  },
  {
    label: "Scalable Technology",
    description:
      "Build reliable technology foundations that grow with your business.",
    href: "/features/scalable-technology",
  },
];
