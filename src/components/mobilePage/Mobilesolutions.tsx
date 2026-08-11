import { FiSmartphone, FiTablet, FiLayers, FiTool } from "react-icons/fi";
import { FeatureShowcase } from "@/components/common/FeatureShowcase";

export default function MobileSolutions() {
  const mobileOfferings = [
    {
      icon: FiSmartphone,
      title: "iOS App Development",
      description: "Native iOS apps built to Apple's standards — smooth, fast, and ready for the App Store.",
    },
    {
      icon: FiTablet,
      title: "Android App Development",
      description: "Native Android apps built for performance and consistency across the widest range of devices.",
    },
    {
      icon: FiLayers,
      title: "Cross-Platform Apps",
      description: "One codebase, both platforms — built for teams who want speed without sacrificing quality.",
    },
    {
      icon: FiTool,
      title: "Custom Business Applications",
      description: "Purpose-built apps for internal teams, field operations, or specific business workflows.",
    },
  ];

  return (
    <FeatureShowcase
      imageSrc="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?q=80&w=687&auto=format&fit=crop"
      imageAlt="Person holding a smartphone with a custom mobile app open"
      statNumber="2"
      statText="Platforms, one seamless experience"
      eyebrow="Mobile App Solutions"
      title="What We Build"
      description="From consumer apps to internal tools, every build starts with how your team and customers actually work."
      items={mobileOfferings}
    />
  );
}