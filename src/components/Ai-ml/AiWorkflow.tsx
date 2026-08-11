import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";

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
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Content & Image Column - NOW ON RIGHT for Desktop (lg:order-2) but stays top for Mobile (order-1) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 order-1 lg:order-2">
            <FadeUp>
              <Eyebrow>AI That Works With Your Business</Eyebrow>
              <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight text-balance">
                From Data to Intelligent Decisions
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                We bridge the gap between complex business data and smart, automated outcomes with an integrated AI network.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="mt-10">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 lg:aspect-square shadow-2xl border border-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Global digital network and AI data processing visualization"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-brand/20 to-transparent mix-blend-overlay" />
              </div>
            </FadeUp>
          </div>

          {/* Data Flow / Pipeline Visual - NOW ON LEFT for Desktop (lg:order-1) */}
          <div className="lg:col-span-7 relative lg:pr-10 mt-10 lg:mt-0 order-2 lg:order-1">
            {/* Continuous Vertical Glowing Line */}
            <div className="absolute left-6.75 lg:left-16.75 top-4 bottom-10 w-0.5 bg-linear-to-b from-brand via-brand/40 to-transparent" />

            <div className="flex flex-col gap-8">
              {aiDecisions.map((item, i) => (
                <FadeUp key={item.step} delay={i * 0.15}>
                  <div className="relative pl-16 lg:pl-24 group">
                    
                    {/* Glowing Node / Dot */}
                    <div className="absolute left-5 lg:left-13.75 top-6 size-4 rounded-full bg-white border-[3px] border-brand shadow-[0_0_15px_rgba(var(--brand),0.5)] group-hover:scale-125 transition-transform duration-300" />
                    
                    {/* Step Indicator Line (Connecting Node to Card) */}
                    <div className="absolute left-9 lg:left-17.75 top-8 w-7 lg:w-16 h-px bg-brand/30 group-hover:bg-brand transition-colors duration-300" />

                    {/* Content Card */}
                    <div className="bg-white border border-black/8 hover:border-brand/40 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-brand font-mono text-sm font-semibold tracking-wider mb-2">
                        PHASE {item.step}
                      </div>
                      <h3 className="font-bold text-xl text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}