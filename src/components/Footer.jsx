import React from 'react';
import Logo from './Logo';
import { Mail, Globe, ArrowUp, Shield, FileCheck } from 'lucide-react';

export default function Footer({ t, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          marginBottom: '3.5rem'
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
              <li><a href="#home" style={{ color: 'inherit' }}>Hakkımızda</a></li>
              <li><a href="#team" style={{ color: 'inherit' }}>Ekibimiz & Kadro</a></li>
              <li><a href="#projects" style={{ color: 'inherit' }}>Projeler & Referanslar</a></li>
              <li><a href="#academy" style={{ color: 'inherit' }}>TSigN Akademi</a></li>
              <li><a href="#careers" style={{ color: 'inherit' }}>Kariyer & Staj</a></li>
              <li><a href="#contact" style={{ color: 'inherit' }}>İletişim & Ofis</a></li>
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

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
    </footer>
  );
}
