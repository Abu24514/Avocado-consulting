import { AvocadoCore } from "@/components/home/AvocadoCore";
import { CTABanner } from "@/components/home/CTABanner";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { WhyAvocado } from "@/components/home/WhyAvocado";
import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AvocadoCore/>
        <WhoWeAre />
        <WhyAvocado />
        <Process />
        <Stats />
        <FAQ/>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
