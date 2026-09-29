import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Globe, ArrowRight, Phone } from 'lucide-react';

export default function Navbar({ lang, setLang, t, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#tech', label: t.nav.tech },
    { href: '#whyUs', label: t.whyUs.tag },
    { href: '#projects', label: t.nav.projects },
    { href: '#team', label: t.nav.team },
    { href: '#academy', label: t.nav.academy },
    { href: '#careers', label: t.nav.careers },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(248, 249, 250, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.9)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px -10px rgba(10, 30, 63, 0.08)' : 'none',
      padding: scrolled ? '0.75rem 0' : '1.1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
          <Logo size="medium" />
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '1.4rem'
        }} className="desktop-nav">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#334155',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '0.25rem 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1A56DB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.45rem 0.8rem',
              borderRadius: '9999px',
              border: '1px solid #CBD5E1',
              backgroundColor: '#FFFFFF',
              color: '#0A1E3F',
              fontSize: '0.8125rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Dili Değiştir / Change Language"
          >
            <Globe size={14} color="#1A56DB" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Quote Button (Desktop) */}
          <button
            onClick={onOpenQuote}
            className="btn btn-primary quote-btn-desktop"
            style={{
              padding: '0.55rem 1.25rem',
              fontSize: '0.875rem'
            }}
          >
            <span>{t.nav.getQuote}</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              color: '#0A1E3F'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1E293B',
                padding: '0.5rem 0',
                borderBottom: '1px solid #F1F5F9'
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            {t.nav.getQuote}
          </button>
        </div>
      )}

      {/* Responsive Inline CSS for Desktop & Mobile Toggle */}
      <style>{`
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 1039px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
          .quote-btn-desktop {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
