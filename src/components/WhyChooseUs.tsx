"use client";
import { BlurFade } from "./ui/blur-fade";

const reasons = [
  { icon: "⚡", title: "Same Day Service", desc: "Most repairs completed the same day. Get back on the road fast." },
  { icon: "🚐", title: "Mobile Repair", desc: "We come to you. Fully equipped mobile workshop at your door." },
  { icon: "🛡️", title: "Warranty Backed", desc: "Every repair backed by our satisfaction guarantee." },
  { icon: "⭐", title: "5-Star Rated", desc: "Hundreds of 5-star reviews from satisfied customers." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {reasons.map((r, i) => (
            <BlurFade key={r.title} delay={i * 0.08}>
              <div className="glass-card p-6 text-center glass-shine h-full hover:border-bronze-500/15 transition-all duration-500 hover:-translate-y-1">
                <div className="text-2xl mb-3">{r.icon}</div>
                <h3 className="text-white font-bold text-sm mb-2 tracking-wide">{r.title}</h3>
                <p className="text-silver-500 text-[12px] leading-relaxed">{r.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
