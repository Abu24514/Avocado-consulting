import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/common/FadeUp";

export default function OurStory() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* LEFT */}
          <FadeUp delay={0.05}>
            <div className="flex h-full flex-col">
              <SectionHeading
                eyebrow="OUR STORY"
                title="From Implementation to Transformation"
              />

              <div className="relative mt-10 min-h-105 flex-1 overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern business office"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeUp>

          {/* RIGHT */}
          <FadeUp delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-7">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Avocado Consulting was founded with a simple belief:
                technology should make business better, not more
                complicated.
              </p>

              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Our experience with CRM implementations showed us that
                organizations often need more than technical configuration.
                They need a partner who understands their business,
                challenges assumptions, and connects technology with real
                outcomes.
              </p>

              <p className="text-base leading-relaxed text-muted sm:text-lg">
                This belief shaped Avocado Consulting into a consultancy
                focused on CRM, AI integration, and digital transformation.
                Today, we continue to help organizations navigate complex
                digital environments with the insight, technology, and
                execution needed to grow with confidence.
              </p>

              <div className="border-l-2 border-brand pl-6">
                <p className="text-lg font-medium leading-snug text-ink sm:text-xl">
                  We don&apos;t implement technology for the sake of
                  technology. We build it to move businesses forward.
                </p>
              </div>
            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}