import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroStats from './HeroStats';

/**
 * HeroContent Component
 * Renders the left-hand column: badge, high-impact typography, value proposition,
 * CTA buttons, and key performance statistics.
 */
export default function HeroContent({
  badge,
  titlePrefix = 'TSigN',
  titleHighlight = 'Design & BIM',
  titleSuffix = 'Solutions',
  subtitle,
  description,
  ctaPrimaryText = 'Hizmetlerimiz',
  ctaPrimaryHref = '#services',
  ctaSecondaryText = 'İletişim & Teklif',
  ctaSecondaryHref = '#contact',
  onCtaPrimaryClick,
  onCtaSecondaryClick,
  stats = [],
  children
}) {
  return (
    <div style={{ maxWidth: '620px' }}>
      {/* Tagline Badge */}
      {badge && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.45rem 1.15rem',
            backgroundColor: 'rgba(26, 86, 219, 0.08)',
            border: '1px solid rgba(26, 86, 219, 0.2)',
            borderRadius: '9999px',
            color: '#1A56DB',
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '1.6rem',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 10px rgba(26, 86, 219, 0.08)'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#1A56DB',
              boxShadow: '0 0 8px #1A56DB'
            }}
          />
          <span>{badge}</span>
        </div>
      )}

      {/* Main Brand Title */}
      <h1
        style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: 800,
          color: '#0A1E3F',
          letterSpacing: '-0.03em',
          lineHeight: 1.12,
          marginBottom: '1rem'
        }}
      >
        {titlePrefix}{' '}
        <span
          style={{
            background: 'linear-gradient(135deg, #1A56DB 0%, #0284C7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {titleHighlight}
        </span>{' '}
        {titleSuffix}
      </h1>

      {/* Subtitle / Value Hook */}
      {subtitle && (
        <p
          style={{
            fontSize: '1.35rem',
            fontWeight: 700,
            color: '#1E3A8A',
            marginBottom: '1.25rem',
            lineHeight: 1.4
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Detailed Description */}
      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: '#475569',
            lineHeight: 1.7,
            marginBottom: '2.4rem',
            maxWidth: '540px'
          }}
        >
          {description}
        </p>
      )}

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}
      >
        {ctaPrimaryText && (
          <a
            href={ctaPrimaryHref}
            onClick={onCtaPrimaryClick}
            className="btn btn-primary"
            style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
          >
            <span>{ctaPrimaryText}</span>
            <ArrowRight size={18} />
          </a>
        )}

        {ctaSecondaryText && (
          <a
            href={ctaSecondaryHref}
            onClick={onCtaSecondaryClick}
            className="btn btn-outline"
            style={{ padding: '0.95rem 1.8rem', fontSize: '1rem' }}
          >
            {ctaSecondaryText}
          </a>
        )}
      </div>

      {/* Stats Pills Section */}
      <HeroStats stats={stats} />

      {/* Extra Slot for custom children */}
      {children}
    </div>
  );
}
