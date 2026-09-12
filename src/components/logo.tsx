"use client";

export function Logo({
  size = 56,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo image - place your logo.png in public/ folder */}
      <img
        src="/logo.png"
        alt="Prime Rims Repair"
        width={size}
        height={size}
        className="rounded-full object-cover shrink-0"
        style={{
          filter: "drop-shadow(0 0 10px rgba(196,147,50,0.15))",
        }}
        onError={(e) => {
          // Fallback if image not found - show text
          const target = e.currentTarget;
          target.style.display = "none";
          const next = target.nextElementSibling as HTMLElement;
          if (next) next.style.display = "flex";
        }}
      />

      {/* Fallback circle (hidden when image loads) */}
      <div
        className="rounded-full items-center justify-center shrink-0"
        style={{
          display: "none",
          width: size * 0.75,
          height: size * 0.75,
          background: "linear-gradient(135deg, #c49332, #8b5a18)",
          boxShadow: "0 0 12px rgba(196,147,50,0.2)",
        }}
      >
        <span
          style={{ fontSize: size * 0.22 }}
          className="font-black text-[#0a0a0c]"
        >
          PR
        </span>
      </div>

      {/* Text */}
      <span
        className="font-black tracking-[0.06em] text-white uppercase hidden sm:block"
        style={{ fontSize: Math.max(size * 0.22, 12) }}
      >
        Prime Rims Repair
      </span>
    </div>
  );
}
