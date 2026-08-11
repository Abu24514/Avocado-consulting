import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { PageHero } from "@/components/common/PageHero";
import WhoWeAre from "@/components/About/WhoWeAre";
import OurVision from "@/components/About/OurVision";
import OurStory from "@/components/About/OurStory";
import WeStandFor from "@/components/About/WeStandFor";
import AboutCta from "@/components/About/AboutCta";
import { PageTransition } from "@/components/common/PageTransition";

export default function AboutPage() {
  return (
    <>      
      <Navbar />
      <PageTransition>
        <main>
          <PageHero
            eyebrow="About Avocado"
            title="Where Technology Meets Business Transformation"
            highlight="Business Transformation"
            description="Avocado Consulting partners with businesses to turn complex technology challenges into practical solutions that improve operations, enable growth, and create lasting impact."
          />
          <WhoWeAre />
          <OurVision />
          <OurStory />
          <WeStandFor />
          <AboutCta />
        </main>
      </PageTransition> 
      <Footer />
    </>
  );
}