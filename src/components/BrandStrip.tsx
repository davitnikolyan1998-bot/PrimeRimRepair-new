"use client";
import { BlurFade } from "./ui/blur-fade";

const brands = ["Porsche", "Ferrari", "Lamborghini", "Mercedes-AMG", "BMW M", "Tesla", "Audi RS", "Bentley", "Rolls-Royce", "McLaren", "Aston Martin", "Range Rover"];

export default function BrandStrip() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="container">
        <BlurFade>
          <div className="glass-card p-5 relative overflow-hidden">
            <p className="text-center text-[9px] uppercase tracking-[0.4em] font-semibold text-silver-600 mb-4">Trusted by owners of</p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0c]/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0c]/80 to-transparent z-10 pointer-events-none" />
              <div className="overflow-hidden">
                <div className="flex gap-0 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite", width: "max-content" }}>
                  {[...brands, ...brands].map((b, i) => (
                    <span key={i} className="text-[11px] font-bold text-silver-700 uppercase tracking-widest px-6 hover:text-bronze-400/40 transition-colors duration-500 cursor-default">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
