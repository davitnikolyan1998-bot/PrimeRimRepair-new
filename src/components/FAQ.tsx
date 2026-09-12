"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const faqs = [
  { q: "How long does a typical rim repair take?", a: "Most repairs are completed same-day, typically within 2-4 hours. Curb rash repairs can often be done in under 2 hours." },
  { q: "Do you offer mobile rim repair?", a: "Yes! Our fully equipped mobile workshop comes to your home or office. We service the entire Greater Los Angeles area." },
  { q: "What types of wheels can you repair?", a: "We repair all types: alloy, aluminum, steel, chrome, forged, and carbon fiber. All makes and models." },
  { q: "Is wheel repair safe and structurally sound?", a: "Absolutely. We use industry-certified equipment and processes. All structural repairs undergo stress testing and safety inspections." },
  { q: "How much can I save vs. buying new wheels?", a: "Typically 50-70% savings. A single OEM wheel costs $400-$800+, while most repairs start at $85 per wheel." },
  { q: "Do you offer a warranty?", a: "Yes, all repairs come with a satisfaction guarantee. Refinishing and powder coating include warranty against peeling or flaking." },
];

function FAQItem({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <BlurFade delay={i * 0.06}>
      <div className={`glass-card overflow-hidden transition-all duration-300 ${open ? "border-bronze-500/15" : ""}`}>
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left gap-4">
          <span className="text-white font-semibold text-[13px]">{faq.q}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c49332" strokeWidth="2" className={`shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <p className="px-5 pb-5 text-silver-500 text-[13px] leading-relaxed">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BlurFade>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6">
      <div className="container max-w-3xl">
        <BlurFade>
          <div className="text-center mb-12">
            <span className="tag mb-3">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Common Questions</h2>
          </div>
        </BlurFade>
        <div className="space-y-2">{faqs.map((f, i) => <FAQItem key={f.q} faq={f} i={i} />)}</div>
      </div>
    </section>
  );
}
