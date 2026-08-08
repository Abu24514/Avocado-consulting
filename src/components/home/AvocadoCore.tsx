"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "CRM", angle: -100, dist: 168 },
  { label: "AI", angle: -28, dist: 178 },
  { label: "Web", angle: 48, dist: 168 },
  { label: "Apps", angle: 120, dist: 176 },
  { label: "DevOps", angle: 190, dist: 160 },
];

function polar(angleDeg: number, dist: number, cx = 280, cy = 280) {
  const a = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round((cx + dist * Math.cos(a)) * 100) / 100,
    y: Math.round((cy + dist * Math.sin(a)) * 100) / 100,
  };
}

export function AvocadoCore() {
  return (
    <div className="relative flex justify-center py-16 md:py-24 bg-white">
      {/* Ambient glow behind the diagram */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-105 w-105 rounded-full bg-brand/8 blur-[100px]" />
      </div>

      <svg
        viewBox="0 0 560 560"
        className="relative w-full h-auto mx-auto max-w-[320px] sm:max-w-95 md:max-w-120 lg:max-w-162.5 xl:max-w-187.5"
        role="img"
        aria-label="Diagram of Avocado's integration core connecting CRM, AI, Web, Apps, and DevOps systems"
      >
        <defs>
          <radialGradient id="coreGradient" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#12351F" />
            <stop offset="60%" stopColor="#0B2416" />
            <stop offset="100%" stopColor="#081A10" />
          </radialGradient>

          <radialGradient id="fleshGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#20A84F" stopOpacity="0" />
            <stop offset="70%" stopColor="#20A84F" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#20A84F" stopOpacity="0.04" />
          </radialGradient>

          <linearGradient id="nodeStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ECB6C" />
            <stop offset="100%" stopColor="#149140" />
          </linearGradient>

          <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Outer dashed orbit */}
        <motion.circle
          cx="280"
          cy="280"
          r="240"
          fill="none"
          stroke="#149140"
          strokeWidth="1.5"
          strokeDasharray="12 16"
          strokeOpacity="0.45"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "50%" }}
        />

        {/* 2. Solid ring */}
        <motion.circle
          cx="280"
          cy="280"
          r="220"
          fill="none"
          stroke="#149140"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* 3. Flesh ring — softened with gradient instead of flat stroke */}
        <motion.circle
          cx="280"
          cy="280"
          r="205"
          fill="url(#fleshGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <circle
          cx="280"
          cy="280"
          r="185"
          fill="none"
          stroke="#149140"
          strokeOpacity="0.2"
          strokeWidth="1"
        />

        {/* 4. Inner dashed orbit */}
        <motion.circle
          cx="280"
          cy="280"
          r="95"
          fill="none"
          stroke="#149140"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeOpacity="0.55"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50%", originY: "50%" }}
        />

        {/* 5. Connector lines to nodes */}
        {nodes.map((n, i) => {
          const p = polar(n.angle, n.dist);
          return (
            <motion.line
              key={n.label}
              x1="280"
              y1="280"
              x2={p.x}
              y2={p.y}
              stroke="#149140"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 0.9, delay: 0.6 + i * 0.12, ease: "easeOut" }}
            />
          );
        })}

        {/* Traveling pulse dots along each connector */}
        {nodes.map((n, i) => {
          const p = polar(n.angle, n.dist);
          return (
            <motion.circle
              key={n.label + "-pulse"}
              r="3"
              fill="#149140"
              initial={{ opacity: 0 }}
              animate={{
                cx: [280, p.x],
                cy: [280, p.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1.6 + i * 0.35,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* 6. Nodes */}
        {nodes.map((n, i) => {
          const p = polar(n.angle, n.dist);
          return (
            <motion.g
              key={n.label + "-g"}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.12 }}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r="30"
                fill="#0F2A1B"
                opacity="0.9"
              />
              <circle
                cx={p.x}
                cy={p.y}
                r="28"
                fill="#FFFFFF"
                stroke="url(#nodeStroke)"
                strokeWidth="2"
              />
              <text
                x={p.x}
                y={p.y + 4.5}
                textAnchor="middle"
                fill="#0F2A1B"
                fontSize="12"
                fontWeight="600"
                letterSpacing="0.03em"
              >
                {n.label}
              </text>
            </motion.g>
          );
        })}

        {/* 7. The Pit / Core */}
        <motion.circle
          cx="280"
          cy="280"
          r="64"
          fill="url(#coreGradient)"
          stroke="url(#nodeStroke)"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        />

        {/* Core pulse rings */}
        <motion.circle
          cx="280"
          cy="280"
          r="64"
          fill="none"
          stroke="#3ECB6C"
          strokeWidth="1.5"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="280"
          cy="280"
          r="64"
          fill="none"
          stroke="#3ECB6C"
          strokeWidth="1"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />

        <g filter="url(#softGlow)">
          <text
            x="280"
            y="276"
            textAnchor="middle"
            fill="#3ECB6C"
            fontWeight={700}
            fontSize="16"
            letterSpacing="0.05em"
          >
            CORE
          </text>
        </g>
        <text
          x="280"
          y="296"
          textAnchor="middle"
          fill="#8FE4AE"
          fontSize="10"
          letterSpacing="0.16em"
        >
          AVOCADO
        </text>
      </svg>
    </div>
  );
}