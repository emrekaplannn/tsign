import React from 'react';
import Logo from './Logo';
import { Mail, Globe, ArrowUp, Shield, FileCheck, Cpu } from 'lucide-react';

const techLogos = [
  { name: "Autodesk Revit", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/autodesk-revit-logo-png_seeklogo-482393.png" },
  { name: "AutoCAD", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/autocad-logo-png_seeklogo-482395.png" },
  { name: "Navisworks", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Ekran görüntüsü 2026-04-04 171420.png" },
  { name: "3ds Max", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/3ds-max-logo-png_seeklogo-482396.png" },
  { name: "ideCAD", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/idecadlogo.jpg" },
  { name: "SAP2000", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/images.png" },
  { name: "ProtaStructure", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/ProtaStructure.png" },
  { name: "STA4CAD", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/STALOGO.jpg" },
  { name: "ChatGPT & GPT-4o", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/ChatGPT-Vertical-Logo-Vector.svg-.png" },
  { name: "Google Gemini", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Gemini-logo.png" },
  { name: "Anthropic Claude", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/claude_ai_logo.svg" },
  { name: "NotebookLM", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/teaser.jpg" },
  { name: "AWS Cloud & AI", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/images.jpeg" },
  { name: "Java & Spring", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Java-Logo.png" },
  { name: "Lumion", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Lumion-3D-Logo-PNG.png" },
  { name: "Corona Renderer", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/images (1).png" },
  { name: "Chaos V-Ray", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/v-ray-logo-png_seeklogo-334100.png" },
  { name: "SketchUp", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/SketchUp-logo.png" },
  { name: "Adobe Photoshop", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Photoshop_CC_icon.png" },
  { name: "Fagerhult Dialux", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/aadadadad.png" },
  { name: "Microsoft 365", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/microsoft-office-365-logo-png_seeklogo-168321.png" },
  { name: "Google Workspace", src: "/gorsel-icerikler/logo ve appler/TSigN Uygulamaları Logoları/Google-Workspace-Logo.png" }
];

export default function Footer({ t, onOpenQuote, onOpenCareers, navigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterLink = (e, href) => {
    e.preventDefault();
    if (href === '#careers' && onOpenCareers) {
      onOpenCareers();
      return;
    }
    if (href === '/portfoyumuz') {
      if (navigate) navigate('/portfoyumuz');
      else window.location.href = '/portfoyumuz';
    } else {
      if (window.location.pathname.includes('portfoyumuz')) {
        if (navigate) navigate('/', href);
        else window.location.href = '/' + href;
      } else {
        const el = document.querySelector(href);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 95;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer id="footer" style={{
      backgroundColor: '#07152B',
      color: '#FFFFFF',
      position: 'relative',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      {/* Top Pre-Footer Callout (Directly echoing Canva bottom banner) */}
      <div style={{
        background: 'linear-gradient(135deg, #0A1E3F 0%, #163674 100%)',
        padding: '3rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
              Birlikte tasarlayalım, geleceğe değer katalım.
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
              Projeniz için uzman ekibimizle hemen tanışın ve teklif alın.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:info@tsign.com.tr"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#CBD5E1',
                fontSize: '0.95rem',
                fontWeight: 600,
                padding: '0.75rem 1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <Mail size={16} color="#38BDF8" />
              <span>info@tsign.com.tr</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.6rem' }}
            >
              Hemen Teklif Alın
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: '4.5rem 1.5rem 3rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: 0
        }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '320px' }}>
            <Logo size="medium" dark={true} />
            <p style={{
              color: '#94A3B8',
              fontSize: '0.9rem',
              lineHeight: 1.65,
              marginTop: '1.25rem',
              marginBottom: '1.5rem'
            }}>
              Çizgileri değil, bilgiyi modelliyoruz. Mimari tasarım, BIM & MEP koordinasyonu, statik analiz ve yapay zeka destekli mühendislik yazılımları.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.88a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1'
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links: Services */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.2rem' }}>
              Hizmet Alanları
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><a href="#services" style={{ color: 'inherit' }}>Mimari & İç Mimari Tasarım</a></li>
              <li><a href="#services" style={{ color: 'inherit' }}>Yapısal (Statik) Analiz</a></li>
              <li><a href="#services" style={{ color: 'inherit' }}>Elektromekanik (MEP) Koordinasyonu</a></li>
              <li><a href="#services" style={{ color: 'inherit' }}>Geoteknik & Zemin Modelleme</a></li>
              <li><a href="#services" style={{ color: 'inherit' }}>Gayrimenkul ve Tarım Vizyonu</a></li>
              <li><a href="#services" style={{ color: 'inherit' }}>Yazılım ve Dijital Dönüşüm</a></li>
            </ul>
          </div>

          {/* Quick Links: Corporate */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.2rem' }}>
              Kurumsal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><a href="#home" onClick={(e) => handleFooterLink(e, '#home')} style={{ color: 'inherit' }}>Hakkımızda</a></li>
              <li><a href="#team" onClick={(e) => handleFooterLink(e, '#team')} style={{ color: 'inherit' }}>Ekibimiz & Kadro</a></li>
              <li><a href="/portfoyumuz" onClick={(e) => handleFooterLink(e, '/portfoyumuz')} style={{ color: 'inherit' }}>Projeler & Referanslar</a></li>
              <li><a href="#academy" onClick={(e) => handleFooterLink(e, '#academy')} style={{ color: 'inherit' }}>TSigN Akademi</a></li>
              <li><a href="#careers" onClick={(e) => handleFooterLink(e, '#careers')} style={{ color: 'inherit' }}>Kariyer & Staj</a></li>
              <li><a href="#contact" onClick={(e) => handleFooterLink(e, '#contact')} style={{ color: 'inherit' }}>İletişim & Ofis</a></li>
            </ul>
          </div>

          {/* Office & Headquarter */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.2rem' }}>
              Merkez Ofis
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1rem' }}>
              YDA Center, Kızılırmak Mah. Dumlupınar Blv. No:9, Çankaya / Ankara
            </p>
            <div style={{ fontSize: '0.875rem', color: '#38BDF8', fontWeight: 600 }}>
              info@tsign.com.tr
            </div>
            <div style={{ fontSize: '0.875rem', color: '#CBD5E1', marginTop: '4px' }}>
              tsign.com.tr
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Infinite Marquee Strip (Placed Just Above Copyright Bar) */}
      <div
        style={{
          backgroundColor: '#07152B',
          padding: '1.4rem 0 1.6rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <Cpu size={14} color="#38BDF8" />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#94A3B8'
            }}
          >
            Teknolojik Altyapımız & Kullandığımız Yazılımlar
          </span>
        </div>

        {/* Ticker Container with fade masks */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}
        >
          <div
            className="footer-marquee-track"
            style={{
              display: 'flex',
              gap: '1.25rem',
              width: 'max-content',
              animation: 'marqueeLeftToRight 45s linear infinite'
            }}
          >
            {[...techLogos, ...techLogos].map((tool, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '0.45rem 0.95rem',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease'
                }}
                className="footer-tech-badge"
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: '#E2E8F0'
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="container" style={{ padding: '1.75rem 1.5rem 2.25rem 1.5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} TSigN Design & BIM Solutions. Tüm hakları saklıdır.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }}>Gizlilik Politikası</span>
            <span style={{ cursor: 'pointer' }}>KVKK Metni</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#38BDF8',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              <span>Yukarı Dön</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .footer-marquee-track:hover {
          animation-play-state: paused;
        }

        .footer-tech-badge:hover {
          background-color: rgba(56, 189, 248, 0.12) !important;
          border-color: rgba(56, 189, 248, 0.4) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
