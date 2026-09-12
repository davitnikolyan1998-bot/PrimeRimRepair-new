"use client";

export default function PorscheWheel({ className = "" }: { className?: string }) {
  const c = 250;
  const spokeAngles = [0, 72, 144, 216, 288];

  // Pre-calculated spoke path (pointing up from center)
  // Hub: ±9° at r=65, Rim: ±13° at r=215
  const spokePath = "M 240,186 L 202,41 A 215,215 0 0,1 298,41 L 260,186 Z";

  // Drilled hole angles for each ring
  const outerHoles = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const midHoles = Array.from({ length: 14 }, (_, i) => i * (360 / 14) + 11);
  const innerHoles = Array.from({ length: 12 }, (_, i) => i * 30 + 7);

  return (
    <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pw-rim" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#e8eaed"/>
          <stop offset="35%" stopColor="#c8ccd0"/>
          <stop offset="70%" stopColor="#a0a8b0"/>
          <stop offset="100%" stopColor="#808890"/>
        </radialGradient>
        <linearGradient id="pw-spoke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8ccd0"/>
          <stop offset="25%" stopColor="#b0b8c0"/>
          <stop offset="55%" stopColor="#d8dce0"/>
          <stop offset="80%" stopColor="#a0a8b0"/>
          <stop offset="100%" stopColor="#c0c4c8"/>
        </linearGradient>
        <radialGradient id="pw-hub" cx="42%" cy="38%">
          <stop offset="0%" stopColor="#d0d4d8"/>
          <stop offset="60%" stopColor="#b0b8c0"/>
          <stop offset="100%" stopColor="#909498"/>
        </radialGradient>
        <radialGradient id="pw-disc" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#3c4044"/>
          <stop offset="60%" stopColor="#343840"/>
          <stop offset="100%" stopColor="#282c30"/>
        </radialGradient>
        <radialGradient id="pw-cap" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#2c3038"/>
          <stop offset="100%" stopColor="#181c22"/>
        </radialGradient>
        <linearGradient id="pw-caliper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c0c4c8"/>
          <stop offset="100%" stopColor="#909498"/>
        </linearGradient>
      </defs>

      {/* Tire */}
      <circle cx={c} cy={c} r={248} fill="#131517"/>
      <circle cx={c} cy={c} r={246} fill="#171a1c"/>
      <circle cx={c} cy={c} r={240} fill="#151719"/>

      {/* Rim outer lip */}
      <circle cx={c} cy={c} r={232} fill="url(#pw-rim)"/>
      <circle cx={c} cy={c} r={232} fill="none" stroke="#b0b8c0" strokeWidth={0.5}/>

      {/* Rim inner ring */}
      <circle cx={c} cy={c} r={224} fill="url(#pw-rim)" opacity={0.3}/>
      <circle cx={c} cy={c} r={218} fill="#161a1e"/>
      <circle cx={c} cy={c} r={218} fill="none" stroke="#484c50" strokeWidth={0.3}/>

      {/* Brake disc */}
      <circle cx={c} cy={c} r={180} fill="url(#pw-disc)"/>
      <circle cx={c} cy={c} r={180} fill="none" stroke="#484c50" strokeWidth={0.3}/>

      {/* Disc grooves */}
      {[172, 160, 148, 135, 122, 110].map(r => (
        <circle key={r} cx={c} cy={c} r={r} fill="none" stroke="#434750" strokeWidth={0.3} opacity={0.35}/>
      ))}

      {/* Cross-drilled holes */}
      {outerHoles.map(angle => (
        <circle key={`h1-${angle}`} cx={c} cy={c - 166} r={2.5} fill="#252830" opacity={0.6} transform={`rotate(${angle}, ${c}, ${c})`}/>
      ))}
      {midHoles.map(angle => (
        <circle key={`h2-${angle}`} cx={c} cy={c - 150} r={2} fill="#252830" opacity={0.5} transform={`rotate(${angle}, ${c}, ${c})`}/>
      ))}
      {innerHoles.map(angle => (
        <circle key={`h3-${angle}`} cx={c} cy={c - 133} r={1.8} fill="#252830" opacity={0.45} transform={`rotate(${angle}, ${c}, ${c})`}/>
      ))}

      {/* Brake caliper */}
      <g transform={`rotate(20, ${c}, ${c})`}>
        <rect x={288} y={138} width={48} height={24} rx={4} fill="url(#pw-caliper)" stroke="#a0a8b0" strokeWidth={0.5}/>
        <text x={312} y={154} textAnchor="middle" fontSize={6} fontWeight={700} fill="#404448" letterSpacing={0.8}>PORSCHE</text>
      </g>

      {/* 5 Spokes */}
      {spokeAngles.map(angle => (
        <g key={`spoke-${angle}`} transform={`rotate(${angle}, ${c}, ${c})`}>
          <path d={spokePath} fill="url(#pw-spoke)" stroke="#c0c8d0" strokeWidth={0.4}/>
          <line x1={240} y1={186} x2={202} y2={41} stroke="rgba(255,255,255,0.12)" strokeWidth={1}/>
          <line x1={260} y1={186} x2={298} y2={41} stroke="rgba(0,0,0,0.15)" strokeWidth={0.5}/>
          <line x1={250} y1={178} x2={250} y2={52} stroke="rgba(255,255,255,0.06)" strokeWidth={2}/>
        </g>
      ))}

      {/* Hub ring */}
      <circle cx={c} cy={c} r={66} fill="url(#pw-hub)" stroke="#b0b8c0" strokeWidth={0.5}/>

      {/* Lug bolts */}
      {spokeAngles.map(angle => (
        <g key={`lug-${angle}`} transform={`rotate(${angle}, ${c}, ${c})`}>
          <circle cx={c} cy={c - 82} r={5.5} fill="#7c8088" stroke="#a0a8b0" strokeWidth={0.5}/>
          <circle cx={c} cy={c - 82} r={2.5} fill="#585c60"/>
        </g>
      ))}

      {/* Center cap */}
      <circle cx={c} cy={c} r={40} fill="url(#pw-cap)" stroke="#585c60" strokeWidth={0.5}/>
      <circle cx={c} cy={c} r={30} fill="none" stroke="#484c50" strokeWidth={0.4}/>

      {/* Porsche shield emblem */}
      <circle cx={c} cy={c} r={22} fill="#1c2028" stroke="#606870" strokeWidth={0.3}/>
      <path d={`M ${c},${c - 14} L ${c + 10},${c - 6} L ${c + 10},${c + 6} C ${c + 10},${c + 14} ${c},${c + 16} ${c},${c + 16} C ${c},${c + 16} ${c - 10},${c + 14} ${c - 10},${c + 6} L ${c - 10},${c - 6} Z`}
        fill="none" stroke="#708090" strokeWidth={0.6}/>
      <text x={c} y={c + 4} textAnchor="middle" fontFamily="sans-serif" fontSize={10} fontWeight={800} fill="#808890">P</text>
    </svg>
  );
}
