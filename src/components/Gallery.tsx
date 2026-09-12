"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "./ui/blur-fade";

const images = Array.from({ length: 5 }, (_, i) => `/gallery/img-${i + 1}.jpg`);

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const hasInteracted = useRef(false);
  useEffect(() => {
    if (!hasInteracted.current) return;
    if (!trackRef.current) return;
    const el = trackRef.current.children[active] as HTMLElement;
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  const next = () => { hasInteracted.current = true; setActive((p) => (p + 1) % images.length); };
  const prev = () => { hasInteracted.current = true; setActive((p) => (p - 1 + images.length) % images.length); };

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setLightboxIdx((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setLightboxIdx((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container max-w-5xl">
        <BlurFade>
          <div className="text-center mb-10">
            <span className="tag mb-3">Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Our Work</h2>
            <p className="text-silver-500 text-sm mt-3">Before & after wheel restorations</p>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="glass-card-bronze rounded-2xl overflow-hidden">
            {/* Main image */}
            <div className="relative bg-black flex items-center justify-center" style={{ height: "min(60vh, 500px)" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={images[active]}
                  alt={`Restoration ${active + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-auto max-w-full object-contain cursor-zoom-in"
                  onClick={() => { setLightboxIdx(active); setLightboxOpen(true); }}
                />
              </AnimatePresence>

              {/* Counter */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider text-bronze-300 z-10">
                {active + 1} / {images.length}
              </div>

              {/* Arrows */}
              <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-bronze-300 flex items-center justify-center z-10 active:scale-95">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-bronze-300 flex items-center justify-center z-10 active:scale-95">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              </button>

              {/* Progress */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/40 z-10">
                <motion.div initial={false} animate={{ width: `${((active + 1) / images.length) * 100}%` }} transition={{ duration: 0.3 }} className="h-full bg-gradient-to-r from-bronze-400 to-bronze-600" />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="bg-black/40 border-t border-white/5 p-2 sm:p-3">
              <div ref={trackRef} className="flex gap-2 overflow-x-auto scroll-smooth snap-x scrollbar-hide pb-1">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => { hasInteracted.current = true; setActive(i); }}
                    className={`shrink-0 snap-center w-14 h-10 sm:w-18 sm:h-14 rounded-md overflow-hidden border transition-all duration-300 ${
                      i === active ? "border-bronze-400 ring-2 ring-bronze-400/30 scale-105" : "border-white/10 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
            <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); setLightboxIdx((p) => (p - 1 + images.length) % images.length); }} className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center z-10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <motion.img key={lightboxIdx} src={images[lightboxIdx]} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-full max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
            <button onClick={(e) => { e.stopPropagation(); setLightboxIdx((p) => (p + 1) % images.length); }} className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center z-10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs">{lightboxIdx + 1} / {images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
