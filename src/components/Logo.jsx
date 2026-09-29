import React from 'react';

export default function Logo({ size = 'medium', dark = false }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <div className={`tsign-logo-container ${dark ? 'logo-dark' : ''}`} style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: isSmall ? '8px' : isLarge ? '14px' : '10px',
      textDecoration: 'none',
      userSelect: 'none'
    }}>
      {/* Metallic Ink Droplet / Digital Twin Icon Emblem */}
      <div style={{
        position: 'relative',
        width: isSmall ? '32px' : isLarge ? '52px' : '40px',
        height: isSmall ? '32px' : isLarge ? '52px' : '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 4px 10px rgba(26, 86, 219, 0.3))'
      }}>
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dropGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B1E3D" />
              <stop offset="0.5" stopColor="#1A56DB" />
              <stop offset="1" stopColor="#07152B" />
            </linearGradient>
            <linearGradient id="innerShine" x1="40" y1="20" x2="60" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="1" stopColor="#1E40AF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Teardrop Contour */}
          <path
            d="M50 8 C50 8 16 52 16 72 A34 34 0 0 0 84 72 C84 52 50 8 50 8 Z"
            fill="url(#dropGrad)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />
          {/* Inner Geometric BIM Diamond */}
          <path
            d="M50 24 L70 54 L50 78 L30 54 Z"
            fill="url(#innerShine)"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
          />
          {/* Digital Core Dot */}
          <circle cx="50" cy="54" r="5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          letterSpacing: '-0.03em'
        }}>
          <span style={{
            fontSize: isSmall ? '1.25rem' : isLarge ? '2.1rem' : '1.6rem',
            fontWeight: 800,
            color: dark ? '#FFFFFF' : '#0A1E3F',
            fontFamily: 'var(--font-heading)'
          }}>
            TS<span style={{ color: '#1A56DB' }}>ig</span>N
          </span>
        </div>
        <span style={{
          fontSize: isSmall ? '0.625rem' : isLarge ? '0.85rem' : '0.7rem',
          fontWeight: 700,
          color: dark ? '#94A3B8' : '#475569',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-heading)'
        }}>
          Design & BIM Solutions
        </span>
      </div>
    </div>
  );
}
