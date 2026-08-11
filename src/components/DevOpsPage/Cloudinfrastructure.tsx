
import { FiCloud, FiServer, FiBox, FiLayers } from "react-icons/fi";
import { FeatureShowcase } from "../common/FeatureShowcase";

const areas = [
  {
    icon: FiCloud,
    title: "AWS / Azure / Google Cloud",
    description:
      "Cloud environments set up and configured on the provider that fits your business.",
  },
  {
    icon: FiServer,
    title: "Server & Infrastructure Management",
    description:
      "Ongoing management so your infrastructure stays healthy, patched, and reliable.",
  },
  {
    icon: FiBox,
    title: "Docker & Kubernetes",
    description:
      "Containerized workloads orchestrated for consistency and easy scaling.",
  },
  {
    icon: FiLayers,
    title: "Scalable Cloud Architecture",
    description:
      "Infrastructure designed to grow with demand, not rebuilt every time it does.",
  },
];

export default function CloudInfrastructure() {
  return (
     <FeatureShowcase
          imageSrc="https://images.unsplash.com/photo-1777672678418-d148a8c485bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Modern data center powering cloud infrastructure"
          statNumber="24/7"
          statText="Infrastructure monitored around the clock"
          eyebrow="Cloud & Infrastructure"
          title="Foundations Built to Scale"
          description=" Cloud infrastructure set up right the first time — secure,
                observable, and ready for growth."
          items={areas}
        
        />
  );
}