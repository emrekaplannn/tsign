import React from 'react';

/**
 * HeroVisual Component
 * Renders the right-hand column: glassmorphic architectural showcase card,
 * high-res artwork, and live LOD 500 status badge with quick quote CTA.
 */
export default function HeroVisual({
  imageSrc = '/gorsel-icerikler/logo ve appler/Adsız tasarım.png',
  imageAlt = 'TSigN Design & BIM Solutions Hero Artwork',
  badgeTitle = 'BIM Seviyesi: LOD 500',
  badgeSubtitle = 'Tam Entegre Çakışma Yönetimi',
  quoteButtonText = 'Teklif Al',
  onOpenQuote,
  children
}) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'relative',
          borderRadius: '24px',
          padding: '12px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(241, 245, 249, 0.4) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow: '0 25px 60px -15px rgba(10, 30, 63, 0.15)',
          backdropFilter: 'blur(12px)'
        }}
      >
        {/* Architectural Image / Canvas Window */}
        <div
          style={{
            position: 'relative',
            borderRadius: '18px',
            overflow: 'hidden',
            backgroundColor: '#0B1B3D',
            aspectRatio: '1/1',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)'
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'contrast(1.04)'
            }}
          />

          {/* Overlay Badge: Digital Twin in Action */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.2rem',
              left: '1.2rem',
              right: '1.2rem',
              padding: '1rem 1.25rem',
              borderRadius: '14px',
              backgroundColor: 'rgba(7, 21, 43, 0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 10px #10B981',
                  flexShrink: 0
                }}
              />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{badgeTitle}</div>
                <div style={{ fontSize: '0.725rem', color: '#94A3B8' }}>{badgeSubtitle}</div>
              </div>
            </div>

            {onOpenQuote && (
              <button
                type="button"
                onClick={onOpenQuote}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '8px',
                  backgroundColor: '#1A56DB',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1e40af')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1A56DB')}
              >
                {quoteButtonText}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Extra Slot */}
      {children}
    </div>
  );
}
