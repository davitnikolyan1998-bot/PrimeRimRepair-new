"use client";
import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/95 to-transparent pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <a
        href="tel:7479557555"
        className="btn-bronze w-full justify-center text-[13px] font-bold uppercase tracking-[0.1em] py-4 pulse-cta"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.61.68 2.37a2 2 0 01-.45 2.11L8.91 10.6a16 16 0 006.49 6.49l1.4-1.44a2 2 0 012.11-.45c.76.32 1.56.55 2.37.68A2 2 0 0122 16.92z" /></svg>
        Call Now · (747) 955-7555
      </a>
    </div>
  );
}
