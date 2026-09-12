"use client";
import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="container max-w-4xl">
        <BlurFade>
          <div className="glass-card-bronze p-10 sm:p-14 relative overflow-hidden glow-bronze">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-bronze-400/[0.04] pointer-events-none translate-x-1/2" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-bronze-400/[0.06] pointer-events-none translate-x-1/3" />
            <div className="relative z-10 text-center">
              <span className="tag text-[9px] mb-6">Get Started</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
                Ready to Restore<br /><span className="text-bronze-gradient">Perfection?</span>
              </h2>
              <p className="text-silver-400 text-sm leading-[1.8] mb-8 max-w-md mx-auto">
                Call for a free, no-obligation quote. We&apos;ll have an estimate for you fast.
              </p>
              <motion.a href="tel:7479557555" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-bronze text-[12px] uppercase tracking-[0.1em] px-8 py-4 pulse-cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.61.68 2.37a2 2 0 01-.45 2.11L8.91 10.6a16 16 0 006.49 6.49l1.4-1.44a2 2 0 012.11-.45c.76.32 1.56.55 2.37.68A2 2 0 0122 16.92z" /></svg>
                (747) 955-7555
              </motion.a>
              <div className="flex flex-wrap justify-center gap-5 mt-8">
                {["Free Estimates", "Lifetime Warranty", "Same-Day Service"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c49332" strokeWidth="2" opacity="0.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                    <span className="text-[10px] text-silver-500 font-medium uppercase tracking-wider">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
