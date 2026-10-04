import React, { useEffect } from 'react';
import { 
  X, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Building, 
  Users, 
  Clock, 
  Award, 
  Quote, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function WhyUsModal({ isOpen, onClose, t, onOpenQuote }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whyUsData = t?.whyUs || {};

  const iconList = [
    <Layers size={22} color="#040070" />,
    <ShieldCheck size={22} color="#040070" />,
    <TrendingUp size={22} color="#040070" />,
  ];

  const statIcons = [
    <Building size={24} color="#040070" />,
    <Users size={24} color="#040070" />,
    <Clock size={24} color="#040070" />,
    <Award size={24} color="#040070" />,
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 21, 43, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'whyUsFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px -10px rgba(10, 30, 63, 0.35)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          animation: 'whyUsSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#475569',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#E2E8F0';
            e.currentTarget.style.color = '#040070';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F1F5F9';
            e.currentTarget.style.color = '#475569';
          }}
          aria-label="Kapat"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '2rem', paddingRight: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(4, 0, 112, 0.08)',
              color: '#040070',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}
          >
            <ShieldCheck size={14} color="#040070" />
            <span>{whyUsData.tag || 'Neden TSigN?'}</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#0A1E3F',
              lineHeight: 1.25,
              marginBottom: '0.6rem'
            }}
          >
            {whyUsData.title}
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6 }}>
            {whyUsData.subtitle}
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '2rem'
          }}
        >
          {/* Left: 3 Strategic Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {(whyUsData.pillars || []).map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#040070';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(4, 0, 112, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(4, 0, 112, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {iconList[idx] || <ShieldCheck size={20} color="#040070" />}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#0A1E3F',
                      marginBottom: '0.3rem'
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stats Grid & Quote */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
            {/* Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}
            >
              {(whyUsData.stats || []).map((stat, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    padding: '1rem',
                    borderRadius: '14px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #EDF2F7',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ display: 'inline-block', marginBottom: '0.25rem' }}>
                    {statIcons[sIdx] || <Award size={22} color="#040070" />}
                  </div>
                  <div
                    style={{
                      fontSize: '1.85rem',
                      fontWeight: 800,
                      color: '#0A1E3F',
                      lineHeight: 1.1,
                      marginBottom: '0.25rem',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Architectural Quote Card */}
            {whyUsData.quote && (
              <div
                style={{
                  backgroundColor: 'rgba(4, 0, 112, 0.04)',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid rgba(4, 0, 112, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Quote size={24} color="#040070" style={{ flexShrink: 0, opacity: 0.6 }} />
                <p
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#1E293B',
                    fontStyle: 'italic',
                    lineHeight: 1.45
                  }}
                >
                  "{whyUsData.quote}"
                </p>
                <img
                  src="/gorsel-icerikler/logo ve appler/damla.png"
                  alt="TSigN Damla"
                  style={{
                    width: '36px',
                    height: '36px',
                    objectFit: 'contain',
                    marginLeft: 'auto',
                    flexShrink: 0
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.5rem',
            borderTop: '1px solid #F1F5F9',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
            Projenizi uzman kadromuzla değerlendirmek ister misiniz?
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={onClose}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '9999px',
                border: '1px solid #CBD5E1',
                backgroundColor: '#FFFFFF',
                color: '#475569',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Kapat
            </button>

            <button
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                border: 'none',
                background: 'linear-gradient(135deg, #040070 0%, #0041d7 100%)',
                color: '#FFFFFF',
                fontSize: '0.875rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(4, 0, 112, 0.28)'
              }}
            >
              <span>Teklif Alın</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes whyUsFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes whyUsSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
