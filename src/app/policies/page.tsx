import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { PageHero } from "@/components/common/PageHero";
import { PageTransition } from "@/components/common/PageTransition";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <PageHero
            eyebrow="Legal Information"
            title="Privacy Policy"
            highlight="Privacy"
            description="Learn how Avocado Technology Consultants Co. LLC collects, uses, and protects your personal information. Last updated: August 2026."
          />

          <section className="bg-white py-16 md:py-24">
            <Container>
              <div className="max-w-3xl mx-auto">
                {/* Content */}
                <FadeUp delay={0.1} className="space-y-10">
                  
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-xl font-bold text-ink mb-4">
                      1. Introduction
                    </h2>
                    <p className="text-muted leading-relaxed">
                      Welcome to <strong>Avocado Technology Consultants Co. LLC</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website and our technology services, including Salesforce, AI, and digital transformation solutions.
                    </p>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-xl font-bold text-ink mb-4">
                      2. Information We Collect
                    </h2>
                    <p className="text-muted leading-relaxed mb-4">
                      We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us, and may include:
                    </p>
                    <ul className="list-disc pl-5 text-muted space-y-2 leading-relaxed">
                      <li>Name, email address, and contact details.</li>
                      <li>Business information related to your CRM, ERP, and integration needs.</li>
                      <li>Data provided during consulting, strategy, or development phases.</li>
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-xl font-bold text-ink mb-4">
                      3. How We Use Your Information
                    </h2>
                    <p className="text-muted leading-relaxed mb-4">
                      We use personal information collected via our Website for a variety of business purposes described below:
                    </p>
                    <ul className="list-disc pl-5 text-muted space-y-2 leading-relaxed">
                      <li>To deliver and facilitate the delivery of services to the user (e.g., Enterprise System Integration, Customized AI Solutions).</li>
                      <li>To respond to user inquiries and offer support.</li>
                      <li>To send administrative information to you regarding our services.</li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-xl font-bold text-ink mb-4">
                      4. Quality & Security-First Approach
                    </h2>
                    <p className="text-muted leading-relaxed">
                      As part of our Quality & Security-First Approach Framework, every solution undergoes rigorous testing. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet can be guaranteed to be 100% secure.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-xl font-bold text-ink mb-4">
                      5. Contact Us
                    </h2>
                    <p className="text-muted leading-relaxed">
                      If you have questions or comments about this notice, you may email us at{" "}
                      <a href="mailto:contactus@avocadoconsulting.ae" className="text-brand hover:underline font-medium">
                        contactus@avocadoconsulting.ae
                      </a>{" "}
                      or by post to:
                    </p>
                    <address className="mt-4 text-muted not-italic leading-relaxed">
                      <strong>Avocado Technology Consultants Co. LLC</strong><br />
                      Dubai Investment Park<br />
                      Dubai, UAE
                    </address>
                  </div>

                </FadeUp>
              </div>
            </Container>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}