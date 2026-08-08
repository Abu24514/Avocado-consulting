import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="WHO WE ARE"
              title="Technology. Strategy. Transformation."
              description="Helping businesses turn complex technology into meaningful business outcomes."
            />

            <FadeUp delay={0.1}>
              <div className="mt-8 flex flex-col gap-6">
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  Avocado Consulting is a technology consulting company helping
                  organizations turn complex digital challenges into practical,
                  scalable solutions. Our expertise spans CRM consulting,
                  including Salesforce and Zoho, AI integration, and digital
                  transformation.
                </p>

                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  We work closely with businesses to understand their goals,
                  simplify their processes, and implement technology that
                  creates meaningful business value. Our approach goes beyond
                  technical execution. We focus on building solutions that are
                  aligned with the way businesses actually operate and grow.
                </p>

                <div className="mt-2 border-l-2 border-brand pl-6">
                  <p className="text-lg font-medium leading-snug text-ink sm:text-xl">
                    More than implementation. A partnership built around your
                    business.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Image */}
          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-soft-green">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Business consulting and collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Premium overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/60 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                    Our Approach
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Strategy · Technology · Growth
                  </p>
                </div>
              </div>

              {/* Decorative green element */}
              <div className="absolute -bottom-5 -right-5 z-0 h-24 w-24 rounded-2xl bg-brand/15" />
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}