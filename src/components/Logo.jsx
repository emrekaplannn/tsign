import React from 'react';

/**
 * Logo Component
 * Renders the official TSigN emblem and optional corporate typography.
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large'|'xlarge')} [props.size='medium'] - Preset size
 * @param {boolean} [props.dark=false] - Dark mode styling
 * @param {boolean} [props.showText=true] - Whether to show the "TSigN Design & BIM Solutions" text
 * @param {string|number} [props.height] - Optional explicit height override (e.g. '52px')
 */
export default function Logo({
  size = 'medium',
  dark = false,
  showText = true,
  height,
  className = '',
  style = {}
}) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';
  const isXLarge = size === 'xlarge';

  const defaultHeight = isSmall ? '36px' : isXLarge ? '62px' : isLarge ? '52px' : '44px';
  const logoHeight = height || defaultHeight;

  return (
    <div
      className={`tsign-logo-container ${dark ? 'logo-dark' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '10px' : isLarge ? '14px' : '12px',
        textDecoration: 'none',
        userSelect: 'none',
        ...style
      }}
    >
      {/* Official TSigN Emblem with Drop & Quill */}
      <img
        src="/gorsel-icerikler/logo ve appler/TSigN.png"
        alt="TSigN Design & BIM Solutions Logo"
        style={{
          height: logoHeight,
          width: 'auto',
          objectFit: 'contain',
          filter: dark
            ? 'brightness(1.1) drop-shadow(0 4px 12px rgba(26, 86, 219, 0.4))'
            : 'drop-shadow(0 4px 12px rgba(10, 30, 63, 0.12))',
          transition: 'transform 0.25s ease'
        }}
      />

      {/* Corporate Typography Tagline (Conditionally Rendered) */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              letterSpacing: '-0.02em'
            }}
          >
            <span
              style={{
                fontSize: isSmall ? '1.2rem' : isLarge ? '1.85rem' : '1.45rem',
                fontWeight: 800,
                color: dark ? '#FFFFFF' : '#0A1E3F',
                fontFamily: 'var(--font-heading)'
              }}
            >
              TS<span style={{ color: '#040070ff' }}>ig</span>N
            </span>
          </div>
          <span
            style={{
              fontSize: isSmall ? '0.625rem' : isLarge ? '0.8rem' : '0.675rem',
              fontWeight: 700,
              color: dark ? '#94A3B8' : '#475569',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Design & BIM Solutions
          </span>
        </div>
      )}
    </div>
  );
}
