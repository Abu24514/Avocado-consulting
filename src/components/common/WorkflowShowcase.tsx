import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import { IconType } from "react-icons";

export interface WorkflowItem {
  step: string;
  icon?: IconType;
  title: string;
  description: string;
}

interface WorkflowShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: WorkflowItem[];
  badgePrefix?: string; 
  reverseLayout?: boolean; 
}

export function WorkflowShowcase({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  items,
  badgePrefix = "STEP",
  reverseLayout = false,
}: WorkflowShowcaseProps) {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Content & Image Column */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-32 order-1 ${
              reverseLayout ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <FadeUp>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight text-balance">
                {title}
              </h2>
              <p className="mt-5 text-muted leading-relaxed text-lg">
                {description}
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="mt-10">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 lg:aspect-square shadow-2xl border border-black/5">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-brand/20 to-transparent mix-blend-overlay" />
              </div>
            </FadeUp>
          </div>

          {/* Data Flow / Pipeline Visual Column */}
          <div
            className={`lg:col-span-7 relative mt-10 lg:mt-0 order-2 ${
              reverseLayout ? "lg:pr-10 lg:order-2" : "lg:pr-10 lg:order-1"
            }`}
          >
            {/* Continuous Vertical Glowing Line */}
            <div className="absolute left-6.75 lg:left-16.75 top-4 bottom-10 w-0.5 bg-linear-to-b from-brand via-brand/40 to-transparent" />

            <div className="flex flex-col gap-8">
              {items.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <FadeUp key={item.step} delay={i * 0.15}>
                    <div className="relative pl-16 lg:pl-24 group">
                      
                      {/* Glowing Node / Dot */}
                      <div className="absolute left-5 lg:left-13.75 top-6 size-4 rounded-full bg-white border-[3px] border-brand shadow-[0_0_15px_rgba(var(--brand),0.5)] group-hover:scale-125 transition-transform duration-300" />
                      
                      {/* Step Indicator Line */}
                      <div className="absolute left-9 lg:left-17.75 top-8 w-7 lg:w-16 h-px bg-brand/30 group-hover:bg-brand transition-colors duration-300" />

                      {/* Content Card */}
                      <div className="bg-white border border-black/8 hover:border-brand/40 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        
                        {/* Badge Row (If Icon or Prefix exists) */}
                        <div className="flex items-center gap-3 mb-4">
                          {IconComponent && (
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-soft text-brand">
                              <IconComponent size={16} />
                            </span>
                          )}
                          <div className="text-brand font-mono text-sm font-semibold tracking-wider">
                            {badgePrefix} {item.step}
                          </div>
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
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}