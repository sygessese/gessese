"use client";

import { motion } from "framer-motion";

export default function SilkOrb() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {/* Primary orb — warm amber */}
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "8%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #E8D5B7 0%, #C4A882 40%, #A8845A 70%, transparent 100%)",
          filter: "blur(60px)",
          opacity: 0.45,
        }}
        animate={{
          x: [0, 18, -10, 8, 0],
          y: [0, -22, 12, -8, 0],
          scale: [1, 1.04, 0.97, 1.02, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary orb — softer, offset */}
      <motion.div
        style={{
          position: "absolute",
          top: "30%",
          right: "20%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 60% 50%, #F5EDDF 0%, #DEC9A8 50%, transparent 100%)",
          filter: "blur(50px)",
          opacity: 0.35,
        }}
        animate={{
          x: [0, -14, 20, -6, 0],
          y: [0, 16, -8, 18, 0],
          scale: [1, 0.96, 1.05, 0.98, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Silk wisp — thin horizontal drift */}
      <motion.div
        style={{
          position: "absolute",
          top: "55%",
          right: "5%",
          width: "280px",
          height: "80px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, #EDE0D0 0%, transparent 80%)",
          filter: "blur(30px)",
          opacity: 0.4,
        }}
        animate={{
          x: [0, -30, 10, -15, 0],
          y: [0, 8, -12, 4, 0],
          scaleX: [1, 1.3, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
    </div>
  );
}
