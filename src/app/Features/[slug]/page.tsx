import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { PageHero } from "@/components/common/PageHero";
import { PageTransition } from "@/components/common/PageTransition";
import { getFeatureBySlug, featureDetails } from "@/data/Features";
import AutomationOpportunities from "@/components/BusinessAutomation/Automationopportunities ";
import WhatWeAutomate from "@/components/BusinessAutomation/Whatweautomate";
import BeforeAfter from "@/components/BusinessAutomation/Beforeafter";
import BusinessImpact from "@/components/BusinessAutomation/Businessimpact";
import WhereAIFits from "@/components/AiPowered/Whereaifits";
import AICapabilities from "@/components/AiPowered/Aicapabilities";
import HowAIWorks from "@/components/AiPowered/Howaiworks";
import BusinessImpactAI from "@/components/AiPowered/Businessimpactai";
import WhatWeHelpUnderstand from "@/components/DataAnalytics/Whatwehelpunderstand";
import DataToInsight from "@/components/DataAnalytics/Datatoinsight";
import AnalyticsCapabilities from "@/components/DataAnalytics/Analyticscapabilities";
import BusinessImpactData from "@/components/DataAnalytics/Businessimpactdata";
import BuiltToScale from "@/components/ScalableTechnology/Builttoscale";
import WhatMakesScalable from "@/components/ScalableTechnology/Whatmakesscalable";
import GrowthWithoutComplexity from "@/components/ScalableTechnology/GrowthWithoutComplexity";

interface FeaturePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return featureDetails.map((f) => ({ slug: f.slug }));
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <PageHero
            eyebrow={feature.eyebrow}
            title={feature.title}
            highlight={feature.highlight}
            description={feature.description}
          />
          {slug === "business-automation" && (
            <>
              <AutomationOpportunities />
              <WhatWeAutomate />
              <BeforeAfter />
              <BusinessImpact />
            </>
          )}

          {slug === "ai-workflows" && (
            <>
              <WhereAIFits />
              <AICapabilities />
              <HowAIWorks />
              <BusinessImpactAI />
            </>
          )}

           {slug === "data-analytics" && (
            <>
             <WhatWeHelpUnderstand/>
             <DataToInsight/>
             <AnalyticsCapabilities/>
             <BusinessImpactData/>
            </>
          )}

          {slug === "scalable-technology" && (
            <>
            <BuiltToScale/>
            <WhatMakesScalable/>
            <GrowthWithoutComplexity/>
            <BusinessImpact/>
            </>
          )}
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
