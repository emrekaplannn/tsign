import React from 'react';
import { X, CheckCircle2, ArrowRight, Briefcase, ArrowUpRight } from 'lucide-react';
import { getServiceIcon } from './ServiceIcons';

/**
 * ServiceModal Component
 *
 * Detailed breakdown popup dialog for the selected engineering service.
 */
export default function ServiceModal({ service, onClose, onOpenQuote, navigate }) {
  if (!service) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 21, 43, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease-out'
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '750px',
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Top Right Actions: Close Button & Portföyümüz Link */}
        <div
          style={{
            position: 'absolute',
            top: '1.35rem',
            right: '1.35rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.6rem',
            zIndex: 10
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748B',
              cursor: 'pointer',
              border: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E2E8F0';
              e.currentTarget.style.color = '#0F172A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
              e.currentTarget.style.color = '#64748B';
            }}
            aria-label="Kapat"
          >
            <X size={18} />
          </button>

          {/* Portföyümüz Redirect Button */}
          <button
            onClick={() => {
              onClose();
              if (navigate) {
                navigate('/portfoyumuz');
              } else {
                window.location.href = '/portfoyumuz';
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.42rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(4, 0, 112, 0.06)',
              color: '#040070',
              border: '1px solid rgba(4, 0, 112, 0.16)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(4, 0, 112, 0.05)',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#040070';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(4, 0, 112, 0.25)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(4, 0, 112, 0.06)';
              e.currentTarget.style.color = '#040070';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(4, 0, 112, 0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            title="İlgili Projeleri Portföyümüzde İnceleyin"
          >
            <Briefcase size={13} />
            <span>Portföyümüz</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
          <div
            style={{
              position: 'relative',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              filter: 'drop-shadow(0 4px 12px rgba(4, 0, 112, 0.25))',
              flexShrink: 0
            }}
          >
            <img
              src="/gorsel-icerikler/logo ve appler/damla.png"
              alt="TSigN Damla"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '56%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
                pointerEvents: 'none'
              }}
            >
              {getServiceIcon(service.id, 24)}
            </div>
          </div>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#040070', fontWeight: 700, textTransform: 'uppercase' }}>
              TSigN Hizmet Kapsamı
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A1E3F', margin: 0 }}>
              {service.title}
            </h3>
          </div>
        </div>

        <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          {service.desc}
        </p>

        {/* Subsections & Bullets */}
        {service.details?.subsections && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginBottom: '2.5rem' }}>
            {service.details.subsections.map((sub, sIdx) => (
              <div
                key={sIdx}
                style={{
                  backgroundColor: '#F8F9FA',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid #E2E8F0'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0A1E3F',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#040070'
                    }}
                  />
                  {sub.name}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {sub.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.925rem',
                        color: '#334155',
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle2 size={16} color="#040070" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Modal Bottom CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            borderTop: '1px solid #E2E8F0',
            paddingTop: '1.5rem'
          }}
        >
          <span style={{ fontSize: '0.9rem', color: '#64748B' }}>
            Bu hizmet için özel teklif ve şartname analizi isteyin.
          </span>
          <button
            onClick={() => {
              onClose();
              if (onOpenQuote) onOpenQuote();
            }}
            className="btn btn-primary"
          >
            <span>Proje Teklifi Alın</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
