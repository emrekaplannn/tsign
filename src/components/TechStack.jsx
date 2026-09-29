import React, { useState } from 'react';
import { Cpu, Check, Layers, Code, Sparkles, Terminal } from 'lucide-react';

export default function TechStack({ t }) {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = t.tech.categories;

  return (
    <section id="tech" className="section" style={{
      backgroundColor: '#07152B',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* High-Tech Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26, 86, 219, 0.25) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag" style={{
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            color: '#38BDF8',
            border: '1px solid rgba(56, 189, 248, 0.3)'
          }}>
            <Cpu size={14} />
            <span>{t.tech.tag}</span>
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>{t.tech.title}</h2>
          <p className="section-subtitle" style={{ color: '#94A3B8' }}>{t.tech.subtitle}</p>
        </div>

        {/* Category Selector Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                style={{
                  padding: '0.65rem 1.3rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backgroundColor: isActive ? '#1A56DB' : 'rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  border: isActive ? '1px solid #38BDF8' : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isActive ? '0 0 20px rgba(26, 86, 219, 0.4)' : 'none'
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category View */}
        <div style={{
          backgroundColor: 'rgba(12, 30, 61, 0.7)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '2.5rem',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
        }}>
          {/* Header of Active Category */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <span style={{
                fontSize: '0.8rem',
                color: '#38BDF8',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {categories[selectedCategory].badge}
              </span>
              <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontWeight: 800 }}>
                {categories[selectedCategory].name}
              </h3>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              color: '#38BDF8',
              fontSize: '0.8rem',
              fontWeight: 600
            }}>
              <Terminal size={14} />
              <span>{categories[selectedCategory].tools.length} Endüstri Standardı Araç</span>
            </div>
          </div>

          {/* Software Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {categories[selectedCategory].tools.map((tool, tIdx) => (
              <div
                key={tIdx}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '16px',
                  padding: '1.4rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(26, 86, 219, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Software Emblem */}
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: '#0A1E3F',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38BDF8',
                  fontWeight: 800,
                  fontSize: '1rem',
                  flexShrink: 0
                }}>
                  {tool.icon}
                </div>

                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '0.25rem'
                  }}>
                    {tool.name}
                  </h4>
                  <p style={{
                    fontSize: '0.825rem',
                    color: '#94A3B8',
                    lineHeight: 1.4
                  }}>
                    {tool.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
