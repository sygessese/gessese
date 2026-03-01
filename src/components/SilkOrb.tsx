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
      {/* Parent drives all travel + breathing — children stay together */}
      <motion.div
        style={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: "340px",
          height: "340px",
        }}
        animate={{
          x: [0, -200, -500, -300, -640, -180, 0],
          y: [0, 80, -20, 130, 40, -60, 0],
          scale: [1, 1.18, 0.88, 1.14, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      >
        {/* Core blob */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 45% 42%, var(--orb-1-center) 0%, var(--orb-2-center) 28%, var(--orb-1-blend) 42%, rgba(221,184,204,0.4) 70%, transparent 90%)",
            filter: "blur(85px)",
          }}
          animate={{
            opacity: [0.55, 0.68, 0.42, 0.65, 0.4, 0.62, 0.55],
            scale: [1, 1.06, 0.95, 1.04, 0.96, 1.02, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />

        {/* Soft halo — gives cloud depth, drifts very slightly */}
        <motion.div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "90%",
            height: "90%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 55% 55%, var(--orb-1-outer) 0%, var(--orb-1-center) 35%, rgba(221,184,204,0.3) 65%, transparent 92%)",
            filter: "blur(100px)",
          }}
          animate={{
            opacity: [0.38, 0.5, 0.28, 0.46, 0.3, 0.44, 0.38],
            x: [0, 15, -10, 20, -5, 10, 0],
            y: [0, -12, 18, -8, 14, -6, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1,
          }}
        />
      </motion.div>

      {/* Peach orb — warm peachy tone */}
      <motion.div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: "260px",
          height: "260px",
        }}
        animate={{
          x: [0, -280, -400, -200, -500, -100, 0],
          y: [0, -100, 60, -80, 70, -40, 0],
          scale: [1, 1.12, 0.95, 1.08, 0.98, 1.05, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      >
        {/* Peach core */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 45%, var(--orb-2-center) 0%, var(--orb-2-blend) 42%, rgba(232,168,120,0.4) 70%, transparent 90%)",
            filter: "blur(80px)",
          }}
          animate={{
            opacity: [0.48, 0.62, 0.35, 0.58, 0.32, 0.55, 0.48],
            scale: [1, 1.04, 0.98, 1.05, 0.96, 1.03, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />

        {/* Peach halo */}
        <motion.div
          style={{
            position: "absolute",
            top: "12%",
            left: "8%",
            width: "85%",
            height: "85%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, var(--orb-2-outer) 0%, var(--orb-2-center) 30%, rgba(232,168,120,0.25) 65%, transparent 92%)",
            filter: "blur(95px)",
          }}
          animate={{
            opacity: [0.32, 0.45, 0.22, 0.42, 0.25, 0.38, 0.32],
            x: [0, -20, 15, -25, 10, -8, 0],
            y: [0, 18, -14, 16, -8, 6, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 2,
          }}
        />
      </motion.div>

      {/* Lilac orb — cool purple tone */}
      <motion.div
        style={{
          position: "absolute",
          top: "35%",
          right: "0%",
          width: "225px",
          height: "225px",
        }}
        animate={{
          x: [0, -150, -380, -280, -520, -60, 0],
          y: [0, 120, 40, -90, 50, -100, 0],
          scale: [1, 1.06, 0.92, 1.1, 0.88, 1.04, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      >
        {/* Lilac core */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 48%, var(--orb-3-center) 0%, var(--orb-3-blend) 40%, rgba(200,176,212,0.35) 70%, transparent 90%)",
            filter: "blur(75px)",
          }}
          animate={{
            opacity: [0.42, 0.58, 0.3, 0.54, 0.28, 0.5, 0.42],
            scale: [1, 1.08, 0.96, 1.06, 0.94, 1.02, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />

        {/* Lilac halo */}
        <motion.div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 45% 55%, var(--orb-3-outer) 0%, var(--orb-3-center) 32%, rgba(200,176,212,0.2) 68%, transparent 92%)",
            filter: "blur(90px)",
          }}
          animate={{
            opacity: [0.28, 0.4, 0.18, 0.38, 0.2, 0.35, 0.28],
            x: [0, 25, -12, 30, -15, 8, 0],
            y: [0, -16, 20, -10, 15, -6, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 3,
          }}
        />
      </motion.div>
    </div>
  );
}
