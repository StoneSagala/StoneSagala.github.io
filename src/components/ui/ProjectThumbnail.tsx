"use client";

import React from 'react';

// Portfolio dark theme palette
const C = {
  bg:     '#0A0A0C',
  bg2:    '#121216',
  bg3:    '#1C1C22',
  bg4:    '#26262E',
  border: '#282830',
  t1:     '#F2F2F2',
  t2:     '#A3A3AA',
  t3:     '#64646E',
};

// ── Grouped Deployments (PDQ) ──────────────────────────────────────────────
function DeploymentsThumbnail({ color }: { color: string }) {
  const rows = [
    { nameW: 72, status: color,      statusLabel: 'Running',  progress: 0.55, highlight: true },
    { nameW: 88, status: '#10B981',  statusLabel: 'Complete', progress: 1,    highlight: false },
    { nameW: 60, status: '#F59E0B',  statusLabel: 'Queued',   progress: 0.18, highlight: false },
    { nameW: 78, status: '#10B981',  statusLabel: 'Complete', progress: 1,    highlight: false },
  ];

  return (
    <svg viewBox="0 0 320 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dep-fade" x1="0" y1="110" x2="0" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={C.bg2} stopOpacity="0" />
          <stop offset="1" stopColor={C.bg2} stopOpacity="1" />
        </linearGradient>
        <clipPath id="dep-clip"><rect width="320" height="150" rx="8" /></clipPath>
      </defs>

      <g clipPath="url(#dep-clip)">
        <rect width="320" height="150" fill={C.bg2} />

        {/* Toolbar */}
        <rect width="320" height="28" fill={C.bg3} />
        {/* Search */}
        <rect x="10" y="7" width="128" height="14" rx="4" fill={C.bg4} stroke={C.border} strokeWidth="0.5" />
        <circle cx="20" cy="14" r="3.5" stroke={C.t3} strokeWidth="1" />
        <line x1="23" y1="16.5" x2="25" y2="19" stroke={C.t3} strokeWidth="1" strokeLinecap="round" />
        <rect x="29" y="12" width="55" height="3.5" rx="1.5" fill={C.t3} opacity="0.4" />
        {/* Filter chip */}
        <rect x="144" y="8" width="44" height="13" rx="6" fill={color} opacity="0.18" stroke={color} strokeWidth="0.5" strokeOpacity="0.4" />
        <rect x="152" y="12.5" width="28" height="3.5" rx="1.5" fill={color} opacity="0.9" />
        {/* Deploy button */}
        <rect x="252" y="7" width="58" height="14" rx="5" fill={color} />
        <rect x="262" y="11.5" width="38" height="3.5" rx="1.5" fill="white" opacity="0.9" />

        {/* Table header */}
        <rect x="0" y="28" width="320" height="1" fill={C.border} />
        <rect x="10" y="35" width="28" height="3" rx="1.5" fill={C.t3} opacity="0.5" />
        <rect x="92" y="35" width="36" height="3" rx="1.5" fill={C.t3} opacity="0.5" />
        <rect x="170" y="35" width="36" height="3" rx="1.5" fill={C.t3} opacity="0.5" />
        <rect x="256" y="35" width="36" height="3" rx="1.5" fill={C.t3} opacity="0.5" />

        {/* Rows */}
        {rows.map((row, i) => {
          const y = 44 + i * 20;
          return (
            <g key={i}>
              {row.highlight && <rect x="0" y={y - 1} width="320" height="19" fill={color} opacity="0.07" />}
              {/* Checkbox */}
              <rect x="10" y={y + 2} width="9" height="9" rx="2" fill={row.highlight ? color : 'transparent'} stroke={row.highlight ? color : C.border} strokeWidth="1" />
              {row.highlight && (
                <path d={`M${12} ${y + 7} L${14.5} ${y + 9} L${19} ${y + 4}`} stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              )}
              {/* Name */}
              <rect x="26" y={y + 4} width={row.nameW} height="4" rx="2" fill={row.highlight ? C.t1 : C.t2} opacity={row.highlight ? 0.85 : 0.6} />
              {/* Status badge */}
              <rect x="88" y={y + 1} width="52" height="13" rx="6.5" fill={row.status} opacity="0.12" />
              <rect x="97" y={y + 5} width="34" height="3.5" rx="1.5" fill={row.status} opacity="0.85" />
              {/* Progress track */}
              <rect x="166" y={y + 5} width="60" height="3.5" rx="1.5" fill={C.bg4} />
              <rect x="166" y={y + 5} width={60 * row.progress} height="3.5" rx="1.5" fill={row.status} opacity="0.8" />
              {/* Count */}
              <rect x="254" y={y + 4} width="24" height="4" rx="2" fill={C.t3} opacity="0.5" />
            </g>
          );
        })}

        <rect width="320" height="150" fill="url(#dep-fade)" />
      </g>
    </svg>
  );
}

// ── Design System (KLAS) — mirrors the KLAS Research product UI ────────────
function DesignSystemThumbnail({ color }: { color: string }) {
  const sidebar  = '#0C1824';
  const mainBg   = '#F3F4F6';
  const cardBg   = '#FFFFFF';
  const border   = '#E5E7EB';
  const dark     = '#111827';
  const mid      = '#6B7280';
  const light    = '#9CA3AF';

  // [cx, cy, nameW, catW, sparkColor, sparkPoints]
  const cards: [number, number, number, number, string, string][] = [
    [65,  53, 66, 52, '#EF4444', '0,18 5,15 10,17 16,12 22,14 28,7'],
    [189, 53, 56, 56, '#10B981', '0,17 5,15 10,13 16,9  22,11 28,4'],
    [65,  99, 46, 42, '#10B981', '0,14 5,16 10,11 16,9  22,13 28,5'],
    [189, 99, 62, 50, '#10B981', '0,15 5,13 10,15 16,9  22,11 28,5'],
  ];

  return (
    <svg viewBox="0 0 320 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ds-fade" x1="58" y1="116" x2="58" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={mainBg} stopOpacity="0" />
          <stop offset="1" stopColor={mainBg} stopOpacity="1" />
        </linearGradient>
        <clipPath id="ds-clip"><rect width="320" height="150" rx="8" /></clipPath>
      </defs>

      <g clipPath="url(#ds-clip)">
        {/* ── Sidebar ── */}
        <rect width="58" height="150" fill={sidebar} />
        {/* Logo */}
        <rect x="8"  y="8"  width="13" height="10" rx="2" fill={color} />
        <rect x="25" y="10" width="22" height="3.5" rx="1.5" fill="white" opacity="0.85" />
        <rect x="25" y="15" width="14" height="2.5" rx="1"   fill="white" opacity="0.35" />
        {/* Search */}
        <rect x="5" y="25" width="48" height="9" rx="3" fill="#182533" />
        <rect x="10" y="28" width="4" height="4" rx="1" fill="white" opacity="0.25" />
        <rect x="17" y="29" width="22" height="2.5" rx="1" fill="white" opacity="0.18" />
        {/* Active nav item */}
        <rect x="3" y="40" width="52" height="10" rx="2" fill="#1A3A54" />
        <rect x="8"  y="42.5" width="6" height="5" rx="1"   fill="white" opacity="0.7" />
        <rect x="17" y="44"   width="26" height="3" rx="1.5" fill="white" opacity="0.8" />
        {/* Other nav items */}
        {[56, 70, 84].map((y, i) => (
          <g key={i}>
            <rect x="8"  y={y + 0.5} width="6"  height="5" rx="1"   fill="white" opacity="0.25" />
            <rect x="17" y={y + 2}   width={18 + i * 4} height="3" rx="1.5" fill="white" opacity="0.28" />
          </g>
        ))}
        {/* User */}
        <circle cx="14" cy="136" r="7" fill="#182533" />
        <rect x="24" y="133"   width="24" height="3"   rx="1.5" fill="white" opacity="0.45" />
        <rect x="24" y="138.5" width="16" height="2.5" rx="1"   fill="white" opacity="0.28" />
        {/* Sidebar separator */}
        <rect x="57.5" width="0.5" height="150" fill={border} />

        {/* ── Main area ── */}
        <rect x="58" width="262" height="150" fill={mainBg} />

        {/* Search bar */}
        <rect x="65" y="8" width="248" height="14" rx="7" fill={cardBg} stroke={border} strokeWidth="0.75" />
        <circle cx="75" cy="15" r="3.2" stroke={light} strokeWidth="1" />
        <line x1="77.5" y1="17.5" x2="79.5" y2="19.5" stroke={light} strokeWidth="1" strokeLinecap="round" />
        <rect x="83" y="13" width="28" height="3.5" rx="1.5" fill={light} opacity="0.75" />

        {/* Filter tabs */}
        <rect x="65" y="28" width="24" height="4" rx="1" fill={dark} opacity="0.85" />
        <rect x="65" y="33" width="24" height="2" rx="1" fill={color} />
        <rect x="93"  y="29" width="32" height="3" rx="1.5" fill={mid} opacity="0.4" />
        <rect x="130" y="29" width="22" height="3" rx="1.5" fill={mid} opacity="0.4" />
        <rect x="157" y="29" width="30" height="3" rx="1.5" fill={mid} opacity="0.4" />
        <rect x="192" y="29" width="40" height="3" rx="1.5" fill={mid} opacity="0.4" />
        <rect x="65" y="35.5" width="248" height="0.5" fill={border} />

        {/* "Solutions" label */}
        <rect x="65" y="42" width="42" height="5" rx="2" fill={dark} opacity="0.8" />

        {/* 2×2 card grid */}
        {cards.map(([cx, cy, nameW, catW, sparkColor, sparkPts], i) => (
          <g key={i}>
            <rect x={cx} y={cy} width="118" height="42" rx="4" fill={cardBg} stroke={border} strokeWidth="0.75" />
            {/* Product name */}
            <rect x={cx + 7} y={cy + 8}  width={nameW} height="4"   rx="2"   fill={dark} opacity="0.85" />
            {/* Category (orange) */}
            <rect x={cx + 7} y={cy + 15} width={catW}  height="3"   rx="1.5" fill={color} opacity="0.85" />
            {/* Score block (big bold number placeholder) */}
            <rect x={cx + 7} y={cy + 27} width="26"    height="8"   rx="2"   fill={dark} opacity="0.88" />
            <rect x={cx + 35} y={cy + 30} width="18"   height="3.5" rx="1.5" fill={mid}  opacity="0.45" />
            {/* KLAS badge circle */}
            <circle cx={cx + 105} cy={cy + 10} r="7"   fill={mainBg} stroke={border} strokeWidth="0.75" />
            <circle cx={cx + 105} cy={cy + 10} r="4.5" fill={color}  opacity="0.22" />
            <rect x={cx + 101}    y={cy + 8.5} width="8" height="3" rx="1" fill={color} opacity="0.65" />
            {/* Sparkline */}
            <g transform={`translate(${cx + 78}, ${cy + 21})`}>
              <polyline points={sparkPts} stroke={sparkColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
          </g>
        ))}

        {/* Bottom fade */}
        <rect x="58" width="262" height="150" fill="url(#ds-fade)" />
      </g>
    </svg>
  );
}

// ── Web Design (CVMA) ──────────────────────────────────────────────────────
function WebDesignThumbnail({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 320 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="web-fade" x1="0" y1="110" x2="0" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={C.bg2} stopOpacity="0" />
          <stop offset="1" stopColor={C.bg2} stopOpacity="1" />
        </linearGradient>
        <linearGradient id="web-hero-bg" x1="0" y1="24" x2="240" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={color} stopOpacity="0.12" />
          <stop offset="1" stopColor={C.bg2} stopOpacity="0" />
        </linearGradient>
        <clipPath id="web-clip"><rect width="320" height="150" rx="8" /></clipPath>
      </defs>

      <g clipPath="url(#web-clip)">
        <rect width="320" height="150" fill={C.bg2} />
        <rect width="320" height="150" fill="url(#web-hero-bg)" />

        {/* Navbar */}
        <rect width="320" height="24" fill={C.bg3} opacity="0.9" />
        {/* Logo mark */}
        <rect x="12" y="6" width="12" height="12" rx="3" fill={color} opacity="0.9" />
        <rect x="28" y="10" width="22" height="4" rx="2" fill={C.t1} opacity="0.8" />
        {/* Nav links */}
        {[0, 1, 2, 3].map(i => (
          <rect key={i} x={90 + i * 38} y="10" width="22" height="4" rx="2" fill={C.t2} opacity="0.5" />
        ))}
        {/* CTA */}
        <rect x="256" y="6" width="52" height="13" rx="6" fill={color} />
        <rect x="266" y="10.5" width="32" height="4" rx="2" fill="white" opacity="0.9" />

        {/* Hero headline */}
        <rect x="20" y="34" width="190" height="9" rx="3" fill={C.t1} opacity="0.9" />
        <rect x="20" y="47" width="220" height="9" rx="3" fill={C.t1} opacity="0.9" />
        <rect x="20" y="60" width="150" height="9" rx="3" fill={color} opacity="0.75" />

        {/* Subtext */}
        <rect x="20" y="76" width="210" height="4" rx="2" fill={C.t2} opacity="0.5" />
        <rect x="20" y="83" width="180" height="4" rx="2" fill={C.t2} opacity="0.4" />

        {/* CTA buttons */}
        <rect x="20" y="96" width="72" height="18" rx="5" fill={color} />
        <rect x="30" y="103" width="52" height="4" rx="2" fill="white" opacity="0.9" />
        <rect x="98" y="96" width="72" height="18" rx="5" fill="transparent" stroke={C.border} strokeWidth="1" />
        <rect x="108" y="103" width="52" height="4" rx="2" fill={C.t2} opacity="0.6" />

        {/* Feature cards */}
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x={20 + i * 100} y="122" width="88" height="24" rx="6" fill={C.bg4} stroke={C.border} strokeWidth="0.5" />
            <rect x={30 + i * 100} y="129" width="10" height="10" rx="3" fill={color} opacity="0.7" />
            <rect x={44 + i * 100} y="130" width="44" height="4" rx="2" fill={C.t1} opacity="0.7" />
            <rect x={44 + i * 100} y="137" width="36" height="3" rx="1.5" fill={C.t3} opacity="0.5" />
          </g>
        ))}

        <rect width="320" height="150" fill="url(#web-fade)" />
      </g>
    </svg>
  );
}

// ── AI Projects (PDQ) ─────────────────────────────────────────────────────
function AIProjectsThumbnail({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 320 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ai-fade" x1="0" y1="105" x2="0" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={C.bg2} stopOpacity="0" />
          <stop offset="1" stopColor={C.bg2} stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ai-glow" x1="0" y1="0" x2="320" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={color} stopOpacity="0.09" />
          <stop offset="1" stopColor={C.bg2} stopOpacity="0" />
        </linearGradient>
        <clipPath id="ai-clip"><rect width="320" height="150" rx="8" /></clipPath>
      </defs>

      <g clipPath="url(#ai-clip)">
        <rect width="320" height="150" fill={C.bg2} />
        <rect width="320" height="150" fill="url(#ai-glow)" />

        {/* Top bar */}
        <rect width="320" height="26" fill={C.bg3} />
        {/* AI badge */}
        <rect x="10" y="7" width="34" height="13" rx="6" fill={color} opacity="0.2" stroke={color} strokeWidth="0.5" strokeOpacity="0.5" />
        <rect x="17" y="11.5" width="20" height="4" rx="2" fill={color} />
        <rect x="50" y="11" width="64" height="4" rx="2" fill={C.t1} opacity="0.7" />
        {/* Top right actions */}
        {[270, 288, 306].map(cx => (
          <circle key={cx} cx={cx} cy="13" r="5" fill={C.bg4} stroke={C.border} strokeWidth="0.5" />
        ))}

        {/* AI avatar + response bubble */}
        <circle cx="20" cy="44" r="9" fill={color} opacity="0.25" />
        <circle cx="20" cy="44" r="5" fill={color} opacity="0.7" />
        <rect x="36" y="32" width="230" height="46" rx="10" fill={C.bg4} stroke={C.border} strokeWidth="0.5" />
        <rect x="46" y="42" width="180" height="4" rx="2" fill={C.t1} opacity="0.8" />
        <rect x="46" y="50" width="160" height="4" rx="2" fill={C.t2} opacity="0.6" />
        <rect x="46" y="58" width="120" height="4" rx="2" fill={C.t2} opacity="0.6" />
        {/* Timestamp */}
        <rect x="46" y="68" width="30" height="3" rx="1.5" fill={C.t3} opacity="0.4" />

        {/* Suggestion chips */}
        <rect x="10" y="86" width="88" height="14" rx="7" fill={color} opacity="0.14" stroke={color} strokeWidth="0.5" strokeOpacity="0.4" />
        <rect x="22" y="91" width="64" height="4" rx="2" fill={color} opacity="0.8" />
        <rect x="104" y="86" width="96" height="14" rx="7" fill={C.bg4} stroke={C.border} strokeWidth="0.5" />
        <rect x="116" y="91" width="72" height="4" rx="2" fill={C.t2} opacity="0.6" />
        <rect x="206" y="86" width="74" height="14" rx="7" fill={C.bg4} stroke={C.border} strokeWidth="0.5" />
        <rect x="218" y="91" width="50" height="4" rx="2" fill={C.t2} opacity="0.6" />

        {/* User message (right-aligned) */}
        <rect x="136" y="108" width="174" height="24" rx="10" fill={color} opacity="0.18" />
        <rect x="146" y="115" width="124" height="4" rx="2" fill={C.t1} opacity="0.75" />
        <rect x="146" y="122" width="90" height="4" rx="2" fill={C.t2} opacity="0.5" />

        {/* Input bar */}
        <rect x="10" y="136" width="286" height="10" rx="5" fill={C.bg4} stroke={C.border} strokeWidth="0.5" />
        <rect x="20" y="139.5" width="90" height="3" rx="1.5" fill={C.t3} opacity="0.35" />
        <circle cx="306" cy="141" r="7" fill={color} opacity="0.85" />

        <rect width="320" height="150" fill="url(#ai-fade)" />
      </g>
    </svg>
  );
}

// ── Registry ───────────────────────────────────────────────────────────────
const THUMBNAILS: Record<string, React.FC<{ color: string }>> = {
  'grouped-deployments-pdq': DeploymentsThumbnail,
  'design-system-klas':      DesignSystemThumbnail,
  'web-design-cvma':         WebDesignThumbnail,
  'ai-projects':             AIProjectsThumbnail,
};

export default function ProjectThumbnail({ slug, color, image }: { slug: string; color: string; image?: string }) {
  if (image) {
    return (
      <div className="bento-card__thumbnail" aria-hidden="true">
        <img src={image} alt="" className="" />
      </div>
    );
  }
  const Thumb = THUMBNAILS[slug];
  if (!Thumb) return null;
  return (
    <div className="bento-card__thumbnail" aria-hidden="true">
      <Thumb color={color} />
    </div>
  );
}
