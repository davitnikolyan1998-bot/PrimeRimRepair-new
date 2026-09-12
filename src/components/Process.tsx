"use client";
import { BlurFade } from "./ui/blur-fade";

const steps = [
  { num: "01", title: "Call Us", desc: "Call or text (747) 955-7555. Describe your wheel damage for an initial estimate." },
  { num: "02", title: "Free Assessment", desc: "We inspect your wheels and provide a detailed, no-obligation quote." },
  { num: "03", title: "Expert Repair", desc: "Our technicians restore your wheels using industry-leading equipment." },
  { num: "04", title: "Perfect Results", desc: "Quality inspection ensures flawless results. Wheels returned looking brand new." },
];

export default function Process() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container">
        <BlurFade>
          <div className="text-center mb-12">
            <span className="tag mb-3">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Our Process</h2>
          </div>
        </BlurFade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-bronze-600/20 via-bronze-400/20 to-bronze-600/20" />
          {steps.map((s, i) => (
            <BlurFade key={s.num} delay={i * 0.1}>
              <div className="glass-card p-6 text-center glass-shine relative">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-bronze-500/10 border border-bronze-500/15 flex items-center justify-center relative z-10">
                  <span className="text-bronze-400 font-black text-sm">{s.num}</span>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-silver-500 text-[12px] leading-relaxed">{s.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
