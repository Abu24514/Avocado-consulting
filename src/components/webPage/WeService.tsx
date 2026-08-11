import { FiGlobe, FiLayers, FiShoppingCart, FiTool } from "react-icons/fi";
import { FeatureShowcase } from "../common/FeatureShowcase";

export default function WeService() {
  const areas = [
    {
      icon: FiGlobe,
      title: "Business Websites",
      description:
        "Clean, fast, and credible websites built to represent your brand and convert visitors into leads.",
    },
    {
      icon: FiLayers,
      title: "Web Applications",
      description:
        "Custom web apps built around real workflows — dashboards, portals, and internal tools that scale with you.",
    },
    {
      icon: FiShoppingCart,
      title: "E-commerce Development",
      description:
        "Storefronts built for conversion — fast checkout, reliable payments, and a smooth shopping experience.",
    },
    {
      icon: FiTool,
      title: "Custom Web Solutions",
      description:
        "When off-the-shelf isn't enough, we design and build bespoke solutions tailored to your exact requirements.",
    },
  ];

  return (
    <FeatureShowcase
      imageSrc="https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      imageAlt="Developer building a web application"
      statNumber="4"
      statText="Core areas of web development expertise"
      eyebrow="Web Development Services"
      title="What We Build"
      description="From marketing sites to full-scale applications, every project starts with your business goals."
      items={areas}
    
    />
  );
}