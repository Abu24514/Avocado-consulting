export interface DropdownItem {
  label: string;
  description: string;
  href: string;
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CoreService {
  index: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface WhyItem {
  index: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
