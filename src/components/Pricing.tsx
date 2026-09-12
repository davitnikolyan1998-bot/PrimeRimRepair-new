"use client";

import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const plans = [
  {
    name: "Curb Rash Repair",
    features: [
      "Surface scratch removal",
      "Edge restoration",
      "OEM color match",
      "Clear coat finish",
      "Same-day available",
    ],
  },
  {
    name: "Premium Wheel Polish",
    features: [
      "Deep Clean & Polish",
      "Gloss Enhancement",
      "Light Surface Imperfection Removal",
      "Protective Coating",
      "Professional finish",
    ],
  },
  {
    name: "Custom Refinishing",
    popular: true,
    features: [
      "Any Color of Your Choice",
      "Gloss, Satin & Matte Finishes",
      "Complete Wheel Refinish",
      "OEM & Custom Color Matching",
      "Durable Automotive Paint Finish",
    ],
  },
  {
    name: "Complete Wheel Restoration Package",
    features: [
      "Complete cosmetic restoration",
      "Full Wheel Refinishing",
      "Any Color & Finish",
      "Premium Clear Coat",
      "Same-Day Mobile Service",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="container">
        <BlurFade>
          <div className="text-center mb-12">
            <span className="tag mb-3">Pricing</span>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Get a Quote
            </h2>

            <p className="text-silver-500 text-sm mt-3 max-w-lg mx-auto">
              Every wheel is different. Contact us for a fast quote based on
              the condition of your wheels and the service you need.
            </p>
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {plans.map((p, i) => (
            <BlurFade key={p.name} delay={0.05 + i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`glass-card p-7 h-full glass-shine relative ${
                  p.popular ? "glass-card-bronze glow-bronze-sm" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="tag text-[8px] py-0.5 px-3">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-white font-bold text-sm mb-6 min-h-[40px]">
                  {p.name}
                </h3>

                <div className="mb-7">
                  <span className="text-silver-gradient text-4xl sm:text-5xl font-black leading-[1.05]">
                    Get
                    <br />
                    Quote
                  </span>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[12px] text-silver-400"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c49332"
                        strokeWidth="2.5"
                        className="shrink-0 mt-[2px]"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>

                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:7479557555"
                  className={`w-full justify-center text-[10px] uppercase tracking-[0.1em] py-2.5 ${
                    p.popular ? "btn-bronze" : "btn-outline"
                  }`}
                >
                  Get Quote
                </a>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
