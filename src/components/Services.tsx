"use client";

import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const services = [
  {
    num: "01",
    title: "Curb Rash Repair",
    desc: "Precision grinding and refinishing removes curb damage and restores your wheels to a clean factory-style finish.",
  },
  {
    num: "02",
    title: "More Wheels, More Savings",
    desc: "Get a special discount when you book 3 or more curb rash repairs. Same-day mobile service available.",
  },
  {
    num: "03",
    title: "Lease Return Wheel Repair",
    desc: "Avoid expensive dealership charges. Restore your wheels before returning your leased or rental vehicle.",
    featured: true,
  },
  {
    num: "04",
    title: "Polish",
    desc: "Bring back a brilliant polished finish and improve the overall appearance of your wheels.",
  },
  {
    num: "05",
    title: "Wheel Color Change",
    desc: "Give your wheels a new look with a professional color change. Choose from gloss, satin, or matte finishes.",
  },
  {
    num: "06",
    title: "Mobile Service",
    desc: "We come to you. Our fully equipped mobile service brings professional wheel repair right to your doorstep.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6">
      <div className="container">
        <BlurFade>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="tag mb-3">Services</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                What We Do
              </h2>
            </div>

            <p className="text-silver-500 text-sm max-w-md mt-3 md:mt-0 leading-relaxed">
              From minor cosmetic touch-ups to complete wheel refinishing, we
              bring professional mobile wheel repair directly to you.
            </p>
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <BlurFade key={s.num} delay={0.05 + i * 0.07}>
              <motion.div
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`glass-card p-7 h-full glass-shine cursor-default group transition-all duration-500 ${
                  s.featured
                    ? "glass-card-bronze glow-bronze-sm"
                    : "hover:border-bronze-500/10"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "800px",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black tracking-wider text-white/[0.04]">
                    {s.num}
                  </span>

                  {s.featured && (
                    <span className="tag text-[8px] py-0.5 px-2">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-[15px] mb-3 tracking-wide group-hover:text-bronze-200 transition-colors">
                  {s.title}
                </h3>

                <p className="text-silver-500 text-[12px] leading-[1.8]">
                  {s.desc}
                </p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
