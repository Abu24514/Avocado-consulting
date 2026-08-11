import {
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiMessageCircle,
} from "react-icons/fi";
import { FeatureShowcase } from "../common/FeatureShowcase";

export default function OneConnectedCrm() {
  const connectedItems = [
    {
      icon: FiTrendingUp,
      title: "Sales & Pipeline",
      description:
        "Every deal tracked from first contact to close, with clear visibility at every stage so nothing slips through the cracks.",
       featured: true, 
    },
    {
      icon: FiUsers,
      title: "Customer Management",
      description:
        "A single view of every customer so your team always knows where things stand.",
    },
    {
      icon: FiBarChart2,
      title: "Reporting & Analytics",
      description:
        "Clear, real-time reporting that shows exactly how the business is performing.",
    },
    {
      icon: FiMessageCircle,
      title: "Team Collaboration",
      description:
        "Keep everyone on the same page with shared notes, mentions, and seamless team communication.",
    },
  ];

  return (
    <FeatureShowcase
      imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0"
      imageAlt="Connected CRM dashboard showing sales, marketing, and reporting data"
      statNumber="100%"
      statText="Teams working from one connected system"
      eyebrow="One Connected CRM"
      title="One CRM. Every Team Connected."
      description="We bring every part of your business, sales, marketing, and support, into a single CRM so nothing gets lost between teams."
      items={connectedItems}
    />
  );
}
