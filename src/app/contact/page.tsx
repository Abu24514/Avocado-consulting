import { Footer } from "@/components/layout/Footer/Footer";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/Contact/Contactform";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Get In Touch"
          title="Let's Build Something Smarter Together"
          highlight="Smarter"
          description="Tell us about your business and we'll get back to you within one business day to talk through how we can help."
        />
        <ContactForm/>
      </main>
      <Footer />
    </>
  );
}