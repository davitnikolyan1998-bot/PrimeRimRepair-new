"use client";
import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const plans = [
  { name: "Curb Rash Repair", price: "85", features: ["Surface scratch removal", "Edge restoration", "OEM color match", "Clear coat finish", "Same-day available"] },
  { name: "Bent Wheel Straightening", price: "125", features: ["Computerized measurement", "Hydraulic straightening", "Runout correction", "Balance included", "Safety certified"] },
  { name: "Custom Refinishing", price: "175", popular: true, features: ["Full strip & prep", "Custom color options", "Powder coat available", "Premium clear coat", "Lifetime warranty"] },
  { name: "Full Restoration", price: "250", features: ["Complete damage repair", "Straightening included", "Full refinish", "Chrome/polish options", "Free pickup available"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="container">
        <BlurFade>
          <div className="text-center mb-12">
            <span className="tag mb-3">Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Set Pricing</h2>
            <p className="text-silver-500 text-sm mt-3 max-w-lg mx-auto">Transparent, fixed pricing. No surprises. Save up to 70% compared to buying new wheels.</p>
          </div>
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {plans.map((p, i) => (
            <BlurFade key={p.name} delay={0.05 + i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`glass-card p-7 h-full glass-shine relative ${p.popular ? "glass-card-bronze glow-bronze-sm" : ""}`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="tag text-[8px] py-0.5 px-3">Most Popular</span>
                  </div>
                )}
                <h3 className="text-white font-bold text-sm mb-1.5">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-bronze-gradient text-3xl font-black">${p.price}</span>
                  <span className="text-silver-600 text-[11px]">/wheel</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12px] text-silver-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c49332" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="tel:7479557555" className={`w-full justify-center text-[10px] uppercase tracking-[0.1em] py-2.5 ${p.popular ? "btn-bronze" : "btn-outline"}`}>
                  Book Now
                </a>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
