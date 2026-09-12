"use client";
import { motion } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const details = [
  { text: "Diamond Cut Accuracy to 0.01mm" },
  { text: "OEM Specification Color Matching" },
  { text: "Concours-Grade Hand Polishing" },
  { text: "Lifetime Structural Warranty" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Left visual */}
          <BlurFade>
            <div className="glass-card relative overflow-hidden min-h-[440px] flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-bronze-500/8 via-transparent to-silver-800/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-1/2 h-1/2 opacity-15">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#c49332" strokeWidth="3" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#c49332" strokeWidth="6" opacity="0.6" />
                  <circle cx="100" cy="100" r="20" fill="#c49332" opacity="0.5" />
                  {[0, 60, 120, 180, 240, 300].map((a) => {
                    const r = (a * Math.PI) / 180;
                    return <line key={a} x1={100+Math.cos(r)*25} y1={100+Math.sin(r)*25} x2={100+Math.cos(r)*66} y2={100+Math.sin(r)*66} stroke="#c49332" strokeWidth="5" strokeLinecap="round" opacity="0.4" />;
                  })}
                </svg>
              </div>
              <div className="relative z-10 p-8">
                <span className="tag text-[9px] mb-3">Workshop</span>
                <h3 className="text-xl font-bold text-white mb-2">Customization Studio</h3>
                <p className="text-silver-500 text-sm max-w-sm leading-relaxed">State-of-the-art facility with precision machinery for every type of wheel restoration.</p>
              </div>
            </div>
          </BlurFade>

          {/* Right content */}
          <div className="flex flex-col gap-4">
            <BlurFade delay={0.1}>
              <div className="glass-card p-8">
                <span className="tag mb-4">Why Prime Rim</span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                  Mastering the <span className="text-bronze-gradient">Micro-Details</span>
                </h2>
                <p className="text-silver-500 text-sm leading-[1.9] mb-7">
                  In the world of high-performance vehicles, perfection isn&apos;t an option — it&apos;s the baseline. Our technicians treat every rim as mechanical art.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {details.map((d) => (
                    <motion.div key={d.text} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors cursor-default group">
                      <div className="w-8 h-8 rounded-lg bg-bronze-500/8 border border-bronze-500/12 flex items-center justify-center shrink-0 group-hover:bg-bronze-500/15 transition-all">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c49332" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                      </div>
                      <span className="text-[11px] font-medium text-silver-400 group-hover:text-silver-200 transition-colors">{d.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-5 text-center glow-bronze-sm">
                  <div className="text-xl font-black text-bronze-gradient mb-0.5">0.01mm</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-silver-600 font-medium">Cut Precision</div>
                </div>
                <div className="glass-card p-5 text-center">
                  <div className="text-xl font-black text-bronze-gradient mb-0.5">24hr</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-silver-600 font-medium">Avg Turnaround</div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
