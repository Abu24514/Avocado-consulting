import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";
import { IconType } from "react-icons";

export interface FeatureItem {
  icon: IconType;
  title: string;
  description: string;
}

interface FeatureShowcaseProps {
  imageSrc: string;
  imageAlt: string;
  statNumber?: string | number;
  statText?: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
  reverseLayout?: boolean; 
}

export function FeatureShowcase({
  imageSrc,
  imageAlt,
  statNumber,
  statText,
  eyebrow,
  title,
  description,
  items,
  reverseLayout = false,
}: FeatureShowcaseProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          
          <FadeUp className={reverseLayout ? "lg:order-2" : "lg:order-1"}>
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 sm:aspect-3/4">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent" />

              {statNumber && statText && (
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-xl">
                  <p className="text-2xl font-bold text-forest leading-none">{statNumber}</p>
                  <p className="mt-1 text-sm text-muted leading-snug">
                    {statText}
                  </p>
                </div>
              )}
            </div>
          </FadeUp>

          {/* Content Section */}
          <div className={reverseLayout ? "lg:order-1" : "lg:order-2"}>
            <FadeUp>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="mt-5 font-bold text-3xl sm:text-4xl text-ink tracking-tight text-balance">
                {title}
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-md">
                {description}
              </p>
            </FadeUp>

            <div className="mt-10 flex flex-col gap-5">
              {items.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <FadeUp key={item.title} delay={i * 0.08 + 0.1}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-black/8 p-5 hover:border-brand/40 hover:bg-soft/60 transition-colors duration-300">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-soft text-forest group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <IconComponent size={20} />
                      </span>
                      <div>
                        <h3 className="font-semibold text-base text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted leading-relaxed">
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