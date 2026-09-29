import React from 'react';
import { Layers, ShieldCheck, TrendingUp, Building, Users, Clock, Award, Quote } from 'lucide-react';
import Logo from './Logo';

export default function WhyUs({ t }) {
  const iconList = [
    <Layers size={24} color="#1A56DB" />,
    <ShieldCheck size={24} color="#1A56DB" />,
    <TrendingUp size={24} color="#1A56DB" />,
  ];

  const statIcons = [
    <Building size={28} color="#1A56DB" />,
    <Users size={28} color="#1A56DB" />,
    <Clock size={28} color="#1A56DB" />,
    <Award size={28} color="#1A56DB" />,
  ];

  return (
    <section id="whyUs" className="section" style={{
      backgroundColor: '#F1F4F9',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>{t.whyUs.tag}</span>
          </div>
          <h2 className="section-title">{t.whyUs.title}</h2>
          <p className="section-subtitle">{t.whyUs.subtitle}</p>
        </div>

        {/* 2-Column Layout: Left Pillars, Right Stats Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          {/* Left Column: 3 Strategic Pillars */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            {t.whyUs.pillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '1.8rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 15px rgba(10, 30, 63, 0.04)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(6px)';
                  e.currentTarget.style.borderColor = '#1A56DB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(26, 86, 219, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {iconList[idx]}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0A1E3F',
                    marginBottom: '0.4rem'
                  }}>
                    {pillar.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748B',
                    lineHeight: 1.6
                  }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Stats & Architectural Quote Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px rgba(10, 30, 63, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative'
          }}>
            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.8rem',
              marginBottom: '2.5rem'
            }}>
              {t.whyUs.stats.map((stat, sIdx) => (
                <div key={sIdx} style={{
                  padding: '1.25rem',
                  borderRadius: '16px',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #EDF2F7',
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                    {statIcons[sIdx]}
                  </div>
                  <div style={{
                    fontSize: '2.4rem',
                    fontWeight: 800,
                    color: '#0A1E3F',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#64748B'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Motivational Quote with TSigN Droplet Motif */}
            <div style={{
              backgroundColor: 'rgba(26, 86, 219, 0.04)',
              borderRadius: '16px',
              padding: '1.8rem',
              border: '1px solid rgba(26, 86, 219, 0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              position: 'relative'
            }}>
              <Quote size={28} color="#1A56DB" style={{ flexShrink: 0, opacity: 0.6 }} />
              <p style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1E293B',
                fontStyle: 'italic',
                lineHeight: 1.5
              }}>
                "{t.whyUs.quote}"
              </p>
              <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
                <Logo size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
