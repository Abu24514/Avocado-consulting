"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FloatingGlow } from "@/components/common/FloatingGlow";



export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-24 md:pt-48 md:pb-32">
      {/* Background Glows */}
      <FloatingGlow className="w-140 h-140 bg-brand/20 -top-48 -right-24" />
      <FloatingGlow className="w-95 h-95 bg-forest/60 bottom-0 -left-20" />

      {/* Animated Grid Lines Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Shining Lines */}
        <motion.div
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute left-[15%] md:left-[25%] w-px h-62.5 bg-linear-to-b from-transparent via-brand to-transparent opacity-60"
        />
        <motion.div
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 3.5 }}
          className="absolute left-[85%] md:left-[75%] w-px h-50 bg-linear-to-b from-transparent via-brand to-transparent opacity-50"
        />
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[35%] h-px w-75 bg-linear-to-r from-transparent via-brand to-transparent opacity-60"
        />

        {/* Soft vignette so grid never fights the text */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-ink/70" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow tone="dark">Future-Ready Business Technology</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 font-bold text-[2.6rem] leading-[1.06] sm:text-6xl lg:text-[4.2rem] text-white text-balance tracking-tight max-w-4xl mx-auto"
          >
            Transform Your Business
            <br className="hidden sm:block" /> With{" "}
            <span className="bg-linear-to-r from-brand via-emerald-300 to-brand bg-clip-text text-transparent">
              Smarter Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            We help businesses simplify operations, implement powerful CRM
            systems and leverage AI to build smarter, scalable and more
            efficient businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <ButtonLink href="/contact" variant="primary" size="lg">
              Get In Touch <FiArrowRight />
            </ButtonLink>
          
          </motion.div>
        </div>
      </Container>
    </section>
  );
}