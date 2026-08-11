import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";
import {
  FiZap,
  FiActivity,
  FiSearch,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const points = [
  {
    icon: FiZap,
    title: "Fast Loading",
    description: "Optimized assets and rendering so pages load quickly, everywhere.",
  },
  {
    icon: FiActivity,
    title: "Responsive Performance",
    description: "Smooth performance across devices and network conditions.",
  },
  {
    icon: FiSearch,
    title: "SEO-friendly Structure",
    description: "Built with clean, semantic structure so search engines can find you.",
  },
  {
    icon: FiShield,
    title: "Secure Implementation",
    description: "Security considered from the first line of code, not bolted on later.",
  },
  {
    icon: FiTrendingUp,
    title: "Scalable Architecture",
    description: "Systems designed to handle growth without needing a rebuild.",
  },
];

export default function WebPerform() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Web Performance & Security"
          title="Built to Perform, Built to Last"
          className="mb-16"
        />

     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <FadeUp 
              key={point.title} 
              delay={i * 0.06}
              className={i === 0 ? "sm:col-span-2" : ""}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/8 bg-offwhite p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:border-brand/40 hover:shadow-[0_20px_40px_-15px_rgba(32,168,79,0.08)]">
                
                {/* Background Watermark Icon */}
                <div className="absolute -bottom-8 -right-8 z-0 text-black/3 transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-brand/5">
                  <point.icon size={160} strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white text-forest shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:bg-soft group-hover:text-brand group-hover:ring-brand/30">
                    <point.icon size={20} />
                  </span>
                  
                  <h3 className={`mt-5 font-semibold text-ink ${i === 0 ? 'text-xl' : 'text-base'}`}>
                    {point.title}
                  </h3>
                  
                  <p className="mt-2 text-sm leading-relaxed text-muted text-balance">
                    {point.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}