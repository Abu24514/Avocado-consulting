import { FiGitBranch, FiShield, FiLink2, FiCompass } from "react-icons/fi";
import { WorkflowShowcase } from "@/components/common/WorkflowShowcase";

export default function BuiltToScale() {
  const scaleAreas = [
    {
      step: "01",
      icon: FiGitBranch,
      title: "Flexible Architecture",
      description: "Technology that can adapt as your business requirements change.",
    },
    {
      step: "02",
      icon: FiShield,
      title: "Reliable Systems",
      description: "Stable and dependable systems designed for everyday operations.",
    },
    {
      step: "03",
      icon: FiLink2,
      title: "Connected Technology",
      description: "Keep your platforms and business systems working together.",
    },
    {
      step: "04",
      icon: FiCompass,
      title: "Future Ready",
      description: "Build a foundation that can support new tools, features and growth.",
    },
  ];

  return (
    <WorkflowShowcase
      imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
      imageAlt="Abstract futuristic technology blocks representing scalable and reliable architecture"
      eyebrow="Built to Scale"
      title="A Foundation That Grows With You"
      description="We design technology around long-term stability, not short-term fixes, so it keeps up as your business evolves."
      items={scaleAreas}
      badgePrefix="PILLAR" 
      reverseLayout={false} 
    />
  );
}