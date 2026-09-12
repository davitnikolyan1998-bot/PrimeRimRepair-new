"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]">
        <div
          className="h-full bg-gradient-to-r from-bronze-400 via-bronze-500 to-bronze-600"
          style={{ width: `${progress * 100}%`, transition: "width 0.1s" }}
        />
      </div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0c]/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="container px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo - full badge, no separate text */}
          <a href="#hero" className="group shrink-0">
            <Logo size={64} className="transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_16px_rgba(196,147,50,0.2)]" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-silver-400 hover:text-bronze-300 transition-colors duration-300 relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-bronze-400 to-bronze-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:7479557555" className="text-[11px] font-semibold tracking-wider text-silver-500 hover:text-bronze-300 transition-colors">
              (747) 955-7555
            </a>
            <a href="#contact" className="btn-bronze px-5 py-2.5 text-[10px] uppercase tracking-[0.12em] pulse-cta">
              Free Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-silver-400 hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0a0a0c]/98 backdrop-blur-2xl border-t border-white/[0.04] px-6 pb-6"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-sm font-bold uppercase tracking-widest text-silver-300 hover:text-bronze-300 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="tel:7479557555" className="btn-bronze w-full justify-center mt-4 text-[11px] uppercase tracking-[0.1em]">
                Call (747) 955-7555
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
