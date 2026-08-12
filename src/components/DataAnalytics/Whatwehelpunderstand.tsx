import {
  FiTrendingUp,
  FiUsers,
  FiBarChart2,
  FiClock,
} from "react-icons/fi";
import { WorkflowShowcase } from "@/components/common/WorkflowShowcase";

export default function WhatWeHelpUnderstand() {
  const areas = [
    {
      step: "01",
      icon: FiTrendingUp,
      title: "Business Performance",
      description: "Track the metrics that matter to your business.",
    },
    {
      step: "02",
      icon: FiUsers,
      title: "Customer Insights",
      description: "Understand customer behavior, engagement and trends.",
    },
    {
      step: "03",
      icon: FiBarChart2,
      title: "Sales & Operations",
      description: "Identify bottlenecks, opportunities and performance gaps.",
    },
    {
      step: "04",
      icon: FiClock,
      title: "Real-Time Reporting",
      description: "Get up-to-date information without relying on manual reports.",
    },
  ];

  return (
    <WorkflowShowcase
      imageSrc="https://images.unsplash.com/photo-1590098563176-07884b06d7f7?q=80&w=2072&auto=format&fit=crop"
      imageAlt="Performance analytics dashboard with graphs on a laptop screen"
      eyebrow="What We Help You Understand"
      title="Clarity Across Your Business"
      description="From day-to-day performance to long-term trends, we turn your data into something you can actually act on."
      items={areas}
      badgePrefix="AREA" 
     
    />
  );
}