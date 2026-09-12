"use client";

import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6">
      <div className="container">
        <div className="glass-card p-8 sm:p-10">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Logo size={36} className="opacity-70" />

                <div className="leading-tight">
                  <span className="block text-[11px] font-bold tracking-[0.12em] text-white/70">
                    PRIME RIMS
                  </span>

                  <span className="block text-[8px] tracking-[0.2em] text-bronze-400/50 font-semibold">
                    REPAIR
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-silver-600 leading-[1.8] max-w-[220px]">
                Bakersfield&apos;s premier destination for high-end wheel
                restoration.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-400/30 mb-4">
                Navigation
              </h4>

              <ul className="space-y-2">
                {[
                  "Services",
                  "Pricing",
                  "Gallery",
                  "Reviews",
                  "FAQ",
                  "Contact",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-[11px] text-silver-600 hover:text-bronze-400/60 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-bronze-400/30 mb-4">
                Contact
              </h4>

              <ul className="space-y-2 text-[11px] text-silver-600">
                <li>
                  <a
                    href="tel:7479557555"
                    className="hover:text-bronze-400/60 transition-colors"
                  >
                    (747) 955-7555
                  </a>
                </li>

                <li>Bakersfield, CA</li>
                <li>Mon–Sat 8am–6pm</li>
              </ul>
            </div>
          </div>

          <div className="section-line mb-5" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[9px] uppercase tracking-[0.15em] text-white/[0.06] font-medium">
              Prime Rims Repair · Bakersfield, CA
            </p>

            <p className="text-[9px] uppercase tracking-[0.15em] text-white/[0.06] font-medium">
              Premium Wheel Restoration
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
