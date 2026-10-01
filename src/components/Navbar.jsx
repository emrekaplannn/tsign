import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Globe, ArrowRight, Sparkles } from 'lucide-react';

/**
 * Navbar Component
 * Modern, floating (yüzen) glassmorphism header designed for professional usability.
 * Features an isolated high-res emblem, interactive navigation pills, language toggler,
 * and high-converting CTA.
 */
export default function Navbar({ lang, setLang, t, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      // Determine active section based on scroll position
      const sections = ['#home', '#services', '#tech', '#whyUs', '#projects', '#team', '#academy', '#careers', '#contact'];
      for (const sectionId of sections) {
        const el = document.querySelector(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveHash(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#tech', label: t.nav.tech },
    { href: '#whyUs', label: t.whyUs.tag || 'Neden Biz?' },
    { href: '#projects', label: t.nav.projects },
    { href: '#team', label: t.nav.team },
    { href: '#academy', label: t.nav.academy },
    { href: '#careers', label: t.nav.careers },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveHash(href);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 95;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: scrolled ? '0.75rem' : '1.15rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none', // Allows clicking background outside floating pill
        transition: 'top 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <header
        className="floating-navbar-container"
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '1240px',
          borderRadius: '9999px',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.94)'
            : 'rgba(255, 255, 255, 0.86)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.85)',
          boxShadow: scrolled
            ? '0 18px 40px -12px rgba(10, 30, 63, 0.16), 0 0 0 1px rgba(226, 232, 240, 0.85)'
            : '0 12px 32px -10px rgba(10, 30, 63, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.6)',
          padding: scrolled ? '0.55rem 1.25rem' : '0.7rem 1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Left Side: Prominent Standalone TSigN Emblem (No Text) */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            paddingRight: '0.75rem',
            transition: 'transform 0.25s ease'
          }}
          className="brand-logo-link"
          aria-label="TSigN Home"
        >
          <Logo
            showText={false}
            size="large"
            height={scrolled ? '55px' : '72px'}
          />
        </a>

        {/* Center: Desktop Navigation Links (Pill Style) */}
        <nav
          className="desktop-nav-menu"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.25rem',
            backgroundColor: 'rgba(241, 245, 249, 0.65)',
            padding: '0.3rem 0.45rem',
            borderRadius: '9999px',
            border: '1px solid rgba(226, 232, 240, 0.7)'
          }}
        >
          {navLinks.map((item, index) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#040070ff' : '#475569',
                  backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                  padding: '0.42rem 0.85rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 2px 8px rgba(4, 0, 112, 0.16)' : 'none',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#040070ff';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Language Toggle & High-Impact CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language Switcher Pill */}
          <button
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              color: '#040070ff',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#040070ff';
              e.currentTarget.style.color = '#040070ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.color = '#040070ff';
            }}
            title={lang === 'tr' ? "Switch to English" : "Türkçe'ye Geç"}
          >
            <Globe size={14} color="#040070ff" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Quote Button (Desktop) */}
          <button
            onClick={onOpenQuote}
            className="quote-btn-desktop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: scrolled ? '0.55rem 1.35rem' : '0.62rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              background: 'linear-gradient(135deg, #040070ff 0%, #0041d7ff 100%)',
              color: '#FFFFFF',
              fontSize: '0.875rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 6px 18px rgba(4, 0, 112, 0.35)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(4, 0, 112, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(4, 0, 112, 0.35)';
            }}
          >
            <span>{t.nav.getQuote}</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.55rem',
              borderRadius: '50%',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              color: '#0A1E3F',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Floating Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: '1rem',
            right: '1rem',
            maxWidth: '1240px',
            margin: '0 auto',
            pointerEvents: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '24px',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 20px 50px rgba(10, 30, 63, 0.18)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            animation: 'fadeInSlide 0.25s ease-out'
          }}
        >
          {navLinks.map((item, index) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#040070ff' : '#1E293B',
                  backgroundColor: isActive ? 'rgba(4, 0, 112, 0.08)' : 'transparent',
                  padding: '0.7rem 1rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <span>{item.label}</span>
                {isActive && <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#040070ff' }} />}
              </a>
            );
          })}

          <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.85rem 1.5rem',
                borderRadius: '14px',
                border: 'none',
                background: 'linear-gradient(135deg, #040070ff 0%, #0041d7ff 100%)',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(4, 0, 112, 0.35)'
              }}
            >
              <span>{t.nav.getQuote}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Responsive Breakpoints & Animations */}
      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .brand-logo-link:hover {
          transform: scale(1.04);
        }

        @media (min-width: 1100px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .quote-btn-desktop {
            display: inline-flex !important;
          }
        }

        @media (max-width: 1099px) {
          .desktop-nav-menu {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
          .quote-btn-desktop {
            display: none !important;
          }
          .floating-navbar-container {
            padding: 0.5rem 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
