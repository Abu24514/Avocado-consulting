import { FiCpu, FiMessageSquare, FiDatabase, FiSettings } from "react-icons/fi";
import { FeatureShowcase } from "../common/FeatureShowcase";

export default function Solutions() {
  const aiItems = [
    {
      icon: FiCpu,
      title: "AI Integration",
      description:
        "Seamlessly integrate advanced AI capabilities into your existing business systems and software.",
    },
    {
      icon: FiMessageSquare,
      title: "Generative AI Solutions",
      description:
        "Custom AI assistants, intelligent content generation, and smart knowledge base systems.",
    },
    {
      icon: FiDatabase,
      title: "Machine Learning Solutions",
      description:
        "Turn your business data into predictive models, automated classifications, and actionable insights.",
    },
    {
      icon: FiSettings,
      title: "AI Automation",
      description:
        "Streamline repetitive tasks and complex workflows using intelligent, self-learning automation.",
    },
  ];

  return (
    <FeatureShowcase
      imageSrc="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
      imageAlt="Abstract visualization of Artificial Intelligence and Neural Networks"
      statNumber="10x"
      statText="Faster workflows with intelligent automation"
      eyebrow="AI & ML Solutions"
      title="Smarter Systems. Better Insights."
      description="Leverage the power of Artificial Intelligence to automate workflows, understand your data, and build future-ready applications."
      items={aiItems}
    />
  );
}