"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 5000, suffix: "+", label: "Wheels Restored" },
  { target: 500, suffix: "+", label: "5-Star Reviews" },
  { target: 100, suffix: "%", label: "Satisfaction" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 120;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref} className="text-2xl sm:text-3xl font-black text-bronze-gradient tracking-tight">{count.toLocaleString()}{suffix}</span>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-silver-900/30 via-silver-800/15 to-silver-900/30 border-y border-white/[0.03]" />
      <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="relative container px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-silver-500 text-[10px] tracking-[0.2em] uppercase mt-1.5 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
