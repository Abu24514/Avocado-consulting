import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { PageHero } from "@/components/common/PageHero";
import { getServiceBySlug, serviceDetails } from "@/data/services";
import WeService from "@/components/webPage/WeService";
import FrontDev from "@/components/webPage/FrontDev";
import BackAndApiDev from "@/components/webPage/BackAndApiDev";
import WebPerform from "@/components/webPage/WebPerform";
import { PageTransition } from "@/components/common/PageTransition";
import MobileSolutions from "@/components/mobilePage/Mobilesolutions";
import AppExperience from "@/components/mobilePage/Appexperience";
import AppFeatures from "@/components/mobilePage/Appfeatures";
import AppPerformance from "@/components/mobilePage/Appperformance";
import DevOpsServices from "@/components/DevOpsPage/Devopsservices";
import CloudInfrastructure from "@/components/DevOpsPage/Cloudinfrastructure";
import AutomationDeployment from "@/components/DevOpsPage/Automationdeployment";
import MonitoringSecurity from "@/components/DevOpsPage/Monitoringsecurity";
import CrmSolution from "@/components/Crm/CrmSolution";
import OneConnectedCrm from "@/components/Crm/OneConnectedCrm";
import WhatWeHandle from "@/components/Crm/WhatWeHandle";
import { WhyAvocado } from "@/components/home/WhyAvocado";
import Solutions from "@/components/Ai-ml/Solution";
import AiWorkflow from "@/components/Ai-ml/AiWorkflow";
import WhatWeBuildAi from "@/components/Ai-ml/WhatWeBuildAi";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <PageHero
            eyebrow={service.eyebrow}
            title={service.title}
            highlight={service.highlight}
            description={service.description}
          />

          {slug === "web-development" && (
            <>
              <WeService />
              <FrontDev />
              <BackAndApiDev />
              <WebPerform />
            </>
          )}
          {slug === "mobile-development" && (
            <>
              <MobileSolutions />
              <AppExperience />
              <AppFeatures />
              <AppPerformance />
            </>
          )}
          {slug === "devops" && (
            <>
              <DevOpsServices />
              <CloudInfrastructure />
              <AutomationDeployment />
              <MonitoringSecurity />
            </>
          )}
           {slug === "crm-implementation" && (
            <>
              <CrmSolution/>
              <OneConnectedCrm/>
              <WhatWeHandle/>
              <WhyAvocado/>
            </>
          )}
              {slug === "ai-ml" && (
            <>
              <Solutions/>
              {/* <DataDrivenDecisions/> */}
              <AiWorkflow/>
              <WhatWeHandle/>
              <WhatWeBuildAi/>
              <WhyAvocado/>
            </>
          )}
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
