"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/common/FadeUp";

export function ContactForm() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          {/* Left copy */}
          <FadeUp>
            <h2 className="font-bold text-4xl sm:text-5xl leading-[1.1] text-ink tracking-tight text-balance">
              Curious how we can help your brand thrive?
            </h2>
            <p className="mt-8 text-muted text-lg leading-relaxed max-w-md">
              From CRM systems and enterprise platforms to mobile apps, web
              applications, and AI solutions, we help businesses design,
              build, and scale powerful technology. Share your requirements
              and let&apos;s create something remarkable.
            </p>
          </FadeUp>

          {/* Right form card */}
          <FadeUp delay={0.1}>
            <form className="rounded-3xl bg-soft p-8 sm:p-10">
              <div className="flex flex-col gap-6">
                <Field label="First name" required>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                    className="w-full rounded-xl border border-black/5 bg-white px-4 py-3.5 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>

                <Field label="Last name">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full rounded-xl border border-black/5 bg-white px-4 py-3.5 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-xl border border-black/5 bg-white px-4 py-3.5 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>

                <Field label="Message" required>
                  <textarea
                    name="message"
                    placeholder="Tell us a bit about your products..."
                    required
                    rows={5}
                    className="w-full rounded-xl border border-black/5 bg-white px-4 py-3.5 text-ink placeholder:text-muted/70 outline-none transition-colors resize-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </Field>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 w-full rounded-full bg-linear-to-r from-forest to-brand px-8 py-4 font-semibold text-white shadow-lg shadow-brand/20 transition-shadow hover:shadow-xl hover:shadow-brand/30 cursor-pointer"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}