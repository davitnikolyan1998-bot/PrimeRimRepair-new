"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  // 3D wheel tilt
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    setTilt({
      rx: -y * 18,
      ry: x * 18,
    });
  };

  const onLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <section
      ref={ref}
      id="hero"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-silver-900 via-[#0a0a0c] to-silver-900" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,147,50,0.07),transparent_60%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(160,160,160,0.04),transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container px-4 sm:px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <BlurFade delay={0.1}>
              <span className="tag mb-6">
                <span className="w-2 h-2 rounded-full bg-bronze-400 animate-pulse" />
                Mobile Service · We Come To You
              </span>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight mb-2">
                <span className="text-silver-gradient">
                  Prime Rims
                </span>
                <br />

                <span className="text-bronze-gradient">
                  Repair
                </span>

                <span className="text-silver-gradient text-[0.55em]">
                  {" "}
                  Mobile Service
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.25}>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                We Come To You
              </p>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-silver-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Premium mobile wheel restoration. Curb rash repair and custom
                refinishing — right at your doorstep. Same-day service
                available.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="tel:7479557555"
                  className="btn-bronze text-[14px] sm:text-[15px] uppercase tracking-[0.1em] px-8 sm:px-10 py-4 sm:py-5 pulse-cta"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.61.68 2.37a2 2 0 01-.45 2.11L8.91 10.6a16 16 0 006.49 6.49l1.4-1.44a2 2 0 012.11-.45c.76.32 1.56.55 2.37.68A2 2 0 0122 16.92z" />
                  </svg>

                  Call Now
                </a>

                <a
                  href="#services"
                  className="btn-outline text-[12px] uppercase tracking-[0.1em] px-7 py-3.5"
                >
                  Our Services

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="tel:7479557555"
                  className="text-bronze-300 text-lg sm:text-xl font-bold tracking-wide hover:text-bronze-200 transition-colors"
                >
                  (747) 955-7555
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={0.5}>
              <div className="flex flex-wrap gap-4 sm:gap-8">
                {[
                  {
                    val: "🚐 Mobile",
                    lbl: "We Come To You",
                  },
                  {
                    val: "Same Day",
                    lbl: "Service",
                  },
                  {
                    val: "5+",
                    lbl: "Years Exp.",
                  },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-bronze-500/10 border border-bronze-500/15 flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c49332"
                        strokeWidth="2"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-white font-bold text-sm leading-tight">
                        {s.val}
                      </p>

                      <p className="text-silver-500 text-[10px] tracking-wider uppercase">
                        {s.lbl}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Right - Real 3D Wheel Image with Mouse-Tracking Tilt */}
          <BlurFade
            delay={0.3}
            className="flex justify-center mt-8 lg:mt-0"
          >
            <div
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition:
                  tilt.rx === 0
                    ? "transform 0.6s ease-out"
                    : "transform 0.08s ease-out",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px]">
                {/* Ambient glow behind wheel */}
                <div className="absolute inset-[-10%] rounded-full bg-gradient-to-br from-bronze-400/15 via-transparent to-bronze-500/8 blur-[60px]" />

                {/* Real wheel image with continuous spin animation */}
                <motion.img
                  src="/wheel-hre.png"
                  alt="Premium forged alloy wheel"
                  className="w-full h-full object-contain relative z-10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{
                    transform: "translateZ(50px)",
                    filter:
                      "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 0 50px rgba(196,147,50,0.1)) sepia(0.25) saturate(1.3) brightness(0.75) hue-rotate(-15deg)",
                  }}
                />

                {/* Sparkle effects */}
                <motion.div
                  animate={{
                    opacity: [0.15, 0.7, 0.15],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute top-[20%] right-[12%] w-3 h-3 bg-bronze-300 rounded-full blur-[3px] z-20"
                />

                <motion.div
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1,
                  }}
                  className="absolute top-[35%] right-[3%] w-2 h-2 bg-white/40 rounded-full blur-[2px] z-20"
                />

                <motion.div
                  animate={{
                    opacity: [0.1, 0.5, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                  className="absolute bottom-[30%] left-[8%] w-2 h-2 bg-bronze-200/40 rounded-full blur-[2px] z-20"
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent" />
    </section>
  );
}
