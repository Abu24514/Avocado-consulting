"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const nodes = [
  {
    label: "CRM System",
    sub: "Data & Leads",
    description:
      "Centralize customer data, manage leads, and build stronger business relationships.",
  },
  {
    label: "AI Core",
    sub: "Automation",
    description:
      "Bring intelligent automation into everyday workflows and business operations.",
  },
  {
    label: "Web Engine",
    sub: "Portal & UI",
    description:
      "Create fast, scalable, and engaging digital experiences for modern businesses.",
  },
  {
    label: "Mobile Apps",
    sub: "iOS & Android",
    description:
      "Build connected mobile experiences that keep your business accessible anywhere.",
  },
  {
    label: "DevOps",
    sub: "CI/CD & Cloud",
    description:
      "Deploy faster with reliable infrastructure, automation, and cloud technologies.",
  },
];

export function AvocadoCore() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50/70 blur-[130px] max-md:h-100 max-md:w-100 max-md:blur-[100px]" />

      {/* Section Heading */}
      <div className="relative mb-12 px-5 sm:px-6 md:mb-16">
        <SectionHeading
          eyebrow="Technology Core"
          title="Five Capabilities One Connected System."
          description="Our core technologies work together to create reliable, intelligent, and scalable digital solutions."
          align="center"
          className="mx-auto"
        />
      </div>

      {/* =====================================================
          DESKTOP TIMELINE
          ===================================================== */}
      <div className="relative mx-auto hidden max-w-5xl px-5 sm:px-6 md:block">
        <div className="relative">
          {/* Central Timeline */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-emerald-400 to-transparent" />

          <div className="space-y-9">
            {nodes.map((node, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={node.label}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -35 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className={`relative flex w-1/2 ${
                    isLeft
                      ? "mr-auto justify-end pr-16"
                      : "ml-auto justify-start pl-16"
                  }`}
                >
                  {/* Connector */}
                  <div
                    className={`absolute top-1/2 h-px -translate-y-1/2 bg-emerald-200 ${
                      isLeft ? "-right-16 w-16" : "-left-16 w-16"
                    }`}
                  />

                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-1/2 z-10 -translate-y-1/2 ${
                      isLeft ? "-right-1.75" : "-left-1.75"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.25 + index * 0.08,
                      }}
                      className="h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.10)]"
                    />
                  </div>

                  {/* Desktop Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group relative w-full max-w-117.5 overflow-hidden rounded-2xl border border-emerald-200 bg-white p-6 shadow-[0_10px_35px_rgba(6,95,70,0.06)] transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_18px_45px_rgba(6,95,70,0.11)] sm:p-7"
                  >
                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Header */}
                    <div className="relative flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[11px] font-bold text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h3 className="text-[17px] font-bold leading-tight text-emerald-950">
                          {node.label}
                        </h3>

                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                          {node.sub}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative mt-5 max-w-97.5 text-[13px] leading-6 text-slate-500">
                      {node.description}
                    </p>

                    {/* Accent */}
                    <div className="relative mt-5 h-px w-10 bg-emerald-300 transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center md:mt-16"
        >
          <p className="text-[11px] font-medium tracking-wide text-slate-400">
            Connected technology. Intelligent workflows. Scalable growth.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
    MOBILE LAYOUT
    ===================================================== */}
      <div className="relative px-5 sm:px-6 md:hidden">
        <div className="mx-auto max-w-md">
          <div className="relative">
            {/* Mobile Vertical Line */}
            <div className="absolute bottom-7 left-5 top-7 w-px bg-linear-to-b from-emerald-200 via-emerald-400 to-emerald-100" />

            <div className="relative space-y-6">
              {nodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="relative pl-16"
                >
                  {/* Mobile Timeline Circle */}
                  <div className="absolute left-0 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]">
                    <span className="text-[9px] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Mobile Card */}
                  <motion.div
                    whileTap={{ scale: 0.99 }}
                    className="group relative w-full overflow-hidden rounded-2xl border border-emerald-300 bg-white p-5 shadow-[0_8px_30px_rgba(6,95,70,0.06)]"
                  >
                    {/* Subtle Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-50 blur-3xl" />

                    {/* Header */}
                    <div className="relative flex items-center gap-3">
                      {/* Small Icon Box */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <span className="text-[11px] font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-[15px] font-bold leading-tight text-emerald-950">
                          {node.label}
                        </h3>

                        <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.17em] text-emerald-600">
                          {node.sub}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative mt-4 text-[12px] leading-5 text-slate-500">
                      {node.description}
                    </p>

                    {/* Accent */}
                    <div className="relative mt-4 h-px w-8 bg-emerald-300" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-[10px] font-medium leading-5 tracking-wide text-slate-400">
              Connected technology. Intelligent workflows. Scalable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
