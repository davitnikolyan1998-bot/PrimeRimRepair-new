"use client";
import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const reviews = [
  { quote: "The finish on my M4 rims is actually superior to how they came from factory. Absolute professionals.", name: "Marcus V.", car: "BMW M4" },
  { quote: "I thought my forged wheels were beyond repair after a pothole. Prime Rim made them look brand new.", name: "Julian R.", car: "Porsche 911" },
  { quote: "Diamond cut is mirror-perfect. Best wheel repair shop in LA, hands down.", name: "Elena S.", car: "Range Rover" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6">
      <div className="container">
        <BlurFade>
          <div className="text-center mb-12">
            <span className="tag mb-3">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Client Voices</h2>
          </div>
        </BlurFade>
        <div className="grid sm:grid-cols-3 gap-3">
          {reviews.map((r, i) => (
            <BlurFade key={r.name} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="glass-card p-7 h-full flex flex-col glass-shine">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#c49332" opacity="0.7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-silver-400 text-sm leading-[1.9] mb-6 flex-1">&ldquo;{r.quote}&rdquo;</p>
                <div className="border-t border-white/[0.04] pt-4">
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-white/70">{r.name}</p>
                  <p className="text-[11px] text-bronze-400/50 mt-0.5">{r.car}</p>
                </div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
