"use client";
import { BlurFade } from "./ui/blur-fade";

const areas = ["Los Angeles", "Van Nuys", "Burbank", "Glendale", "Pasadena", "Sherman Oaks", "Encino", "Woodland Hills", "Calabasas", "Santa Monica", "Beverly Hills", "West Hollywood", "Hollywood", "Studio City", "North Hollywood"];

export default function ServiceAreas() {
  return (
    <section className="py-14 px-4 sm:px-6">
      <div className="container max-w-4xl text-center">
        <BlurFade>
          <span className="tag mb-3">Service Areas</span>
          <h3 className="text-2xl font-black text-white mb-6">Serving Greater Los Angeles</h3>
        </BlurFade>
        <BlurFade delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((a) => (
              <span key={a} className="px-3 py-1.5 rounded-full border border-silver-800/30 bg-silver-900/10 text-silver-500 text-[11px] font-medium hover:border-bronze-500/20 hover:text-silver-300 transition-all duration-300 cursor-default">{a}</span>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
