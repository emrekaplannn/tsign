import React, { useState } from 'react';
import {
  Building2,
  Activity,
  Layers,
  Mountain,
  PieChart,
  Code2,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles
} from 'lucide-react';

export default function Services({ t, onOpenQuote }) {
  const [activeModalService, setActiveModalService] = useState(null);

  const iconMap = {
    mimari: <Building2 size={28} />,
    statik: <Activity size={28} />,
    mep: <Layers size={28} />,
    geoteknik: <Mountain size={28} />,
    gayrimenkul: <PieChart size={28} />,
    yazilim: <Code2 size={28} />,
  };

  return (
    <section id="services" className="section" style={{
      backgroundColor: '#F8F9FA',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>{t.services.tag}</span>
          </div>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        {/* 6 Multidisciplinary Core Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {t.services.items.map((service, idx) => (
            <div
              key={service.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2.4rem 2rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 20px -2px rgba(10, 30, 63, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(10, 30, 63, 0.12)';
                e.currentTarget.style.borderColor = '#1A56DB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(10, 30, 63, 0.05)';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              {/* Droplet Watermark Pattern in Card Corner */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(26, 86, 219, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div>
                {/* Metallic Droplet / Icon Container */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #0A1E3F 0%, #1A56DB 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  boxShadow: '0 8px 20px rgba(26, 86, 219, 0.28)'
                }}>
                  {iconMap[service.id]}
                </div>

                {/* Service Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#0A1E3F',
                  marginBottom: '1rem',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>

                {/* Service Excerpt */}
                <p style={{
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: 1.65,
                  marginBottom: '1.8rem'
                }}>
                  {service.desc}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveModalService(service)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#1A56DB',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  borderTop: '1px solid #F1F5F9',
                  paddingTop: '1.2rem',
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                <span>Hizmet Kapsamını İncele</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detailed Breakdown Modal */}
      {activeModalService && (
        <div style={{
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
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '750px',
            width: '100%',
            maxHeight: '88vh',
            overflowY: 'auto',
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
                cursor: 'pointer',
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
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                backgroundColor: '#0A1E3F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                {iconMap[activeModalService.id]}
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: '#1A56DB', fontWeight: 700, textTransform: 'uppercase' }}>
                  TSigN Hizmet Kapsamı
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A1E3F' }}>
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              {activeModalService.desc}
            </p>

            {/* Subsections & Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginBottom: '2.5rem' }}>
              {activeModalService.details.subsections.map((sub, sIdx) => (
                <div key={sIdx} style={{
                  backgroundColor: '#F8F9FA',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid #E2E8F0'
                }}>
                  <h4 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0A1E3F',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#1A56DB'
                    }} />
                    {sub.name}
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {sub.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.925rem',
                        color: '#334155',
                        lineHeight: 1.5
                      }}>
                        <CheckCircle2 size={16} color="#1A56DB" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderTop: '1px solid #E2E8F0',
              paddingTop: '1.5rem'
            }}>
              <span style={{ fontSize: '0.9rem', color: '#64748B' }}>
                Bu hizmet için özel teklif ve şartname analizi isteyin.
              </span>
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onOpenQuote();
                }}
                className="btn btn-primary"
              >
                <span>Proje Teklifi Alın</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
