"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingGlow({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-[110px]", className)}
      animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
