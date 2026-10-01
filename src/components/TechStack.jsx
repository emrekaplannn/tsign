import React, { useState } from 'react';
import { Cpu, Terminal } from 'lucide-react';

const softwareLogos = {
  "Autodesk Revit": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/autodesk-revit-logo-png_seeklogo-482393.png",
  "AutoCAD": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/autocad-logo-png_seeklogo-482395.png",
  "Navisworks": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Ekran görüntüsü 2026-04-04 171420.png",
  "3ds Max": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/3ds-max-logo-png_seeklogo-482396.png",
  "ideCAD": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/idecadlogo.jpg",
  "SAP2000": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/images.png",
  "ProtaStructure": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/ProtaStructure.png",
  "STA4CAD": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/STALOGO.jpg",
  "ChatGPT & GPT-4o": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/ChatGPT-Vertical-Logo-Vector.svg-.png",
  "Google Gemini": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Gemini-logo.png",
  "Anthropic Claude": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/claude_ai_logo.svg",
  "NotebookLM": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/teaser.jpg",
  "AWS Cloud & AI": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/images.jpeg",
  "AWS AI Cloud": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/images.jpeg",
  "Java & Spring": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Java-Logo.png",
  "Java": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Java-Logo.png",
  "Lumion": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Lumion-3D-Logo-PNG.png",
  "Corona Renderer": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/images (1).png",
  "Chaos V-Ray": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/v-ray-logo-png_seeklogo-334100.png",
  "SketchUp": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/SketchUp-logo.png",
  "Adobe Photoshop": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Photoshop_CC_icon.png",
  "Fagerhult Dialux": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/aadadadad.png",
  "Microsoft 365": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/microsoft-office-365-logo-png_seeklogo-168321.png",
  "Google Workspace": "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Google-Workspace-Logo.png"
};

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
                  backgroundColor: isActive ? '#040070' : 'rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  border: isActive ? '1px solid #0041d7' : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isActive ? '0 0 20px rgba(4, 0, 112, 0.4)' : 'none'
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}>
            {categories[selectedCategory].tools.map((tool, tIdx) => {
              // Find matching logo image
              const logoSrc =
                softwareLogos[tool.name] ||
                Object.entries(softwareLogos).find(([k]) =>
                  tool.name.toLowerCase().includes(k.toLowerCase()) ||
                  k.toLowerCase().includes(tool.name.toLowerCase())
                )?.[1];

              return (
                <div
                  key={tIdx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '16px',
                    padding: '1.4rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
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
                  {/* Real Software Logo or Fallback Emblem */}
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '14px',
                    backgroundColor: '#FFFFFF',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden'
                  }}>
                    {logoSrc ? (
                      <img
                        src={logoSrc}
                        alt={tool.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    ) : (
                      <span style={{ color: '#0A1E3F', fontWeight: 800, fontSize: '0.9rem' }}>
                        {tool.icon}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '0.2rem'
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
