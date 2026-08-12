import { WorkflowShowcase } from "@/components/common/WorkflowShowcase";

export default function AiWorkflow() {
  const aiDecisions = [
    {
      step: "01",
      title: "Business Intelligence",
      description:
        "Analyze historical trends and scattered data points to unlock hidden growth opportunities.",
    },
    {
      step: "02",
      title: "Predictive Insights",
      description:
        "Forecast customer behavior, demand cycles, and market shifts with high-precision models.",
    },
    {
      step: "03",
      title: "Intelligent Automation",
      description:
        "Replace repetitive manual tasks with self-learning systems and optimize resource allocation.",
    },
    {
      step: "04",
      title: "AI-Powered Workflows",
      description:
        "Create interconnected, self-optimizing business processes that adapt to changing real-world conditions.",
    },
  ];

  return (
    <WorkflowShowcase
      imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      imageAlt="Global digital network and AI data processing visualization"
      eyebrow="AI That Works With Your Business"
      title="From Data to Intelligent Decisions"
      description="We bridge the gap between complex business data and smart, automated outcomes with an integrated AI network."
      items={aiDecisions}
      badgePrefix="PHASE"
      reverseLayout={true} 
    />
  );
}