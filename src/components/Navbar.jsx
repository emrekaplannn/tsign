import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';

/**
 * Navbar Component
 * Modern, floating glassmorphism header.
 * Displays: Logo - Hizmetler - Projeler - Ekibimiz - TSgiN Akademi - İletişim - Dil Seçimi - Teklif Alın
 */
export default function Navbar({ lang, setLang, t, onOpenQuote, currentPath = '/', navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  const isPortfolioPage = currentPath === '/portfoyumuz' || currentPath === '/portfoyumuz/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      if (isPortfolioPage) return;

      if (window.scrollY < 200) {
        setActiveHash('');
        return;
      }

      // Determine active section based on scroll position
      const sections = ['#services', '#team', '#academy', '#contact'];
      for (const sectionId of sections) {
        const el = document.querySelector(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveHash(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPortfolioPage]);

  const navLinks = [
    { href: '#services', label: t.nav.services, isRoute: false },
    { href: '/portfoyumuz', label: t.nav.projects, isRoute: true },
    { href: '#team', label: t.nav.team, isRoute: false },
    { href: '#academy', label: t.nav.academy, isRoute: false },
    { href: '#contact', label: t.nav.contact, isRoute: false },
  ];

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (item.isRoute) {
      if (isPortfolioPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        if (navigate) navigate('/portfoyumuz');
        else window.location.href = '/portfoyumuz';
      }
      return;
    }

    if (isPortfolioPage) {
      if (navigate) navigate('/', item.href);
      else window.location.href = '/' + item.href;
      return;
    }

    setActiveHash(item.href);
    const target = document.querySelector(item.href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 95;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isPortfolioPage) {
      if (navigate) navigate('/');
      else window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveHash('');
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
        pointerEvents: 'none',
        transition: 'top 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <header
        className="floating-navbar-container"
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '840px',
          height: scrolled ? '54px' : '62px',
          borderRadius: '9999px',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.95)'
            : 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: scrolled
            ? '0 14px 32px -10px rgba(10, 30, 63, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)'
            : '0 8px 24px -6px rgba(10, 30, 63, 0.07), 0 0 0 1px rgba(226, 232, 240, 0.55)',
          padding: scrolled ? '0 1.15rem 0 0.85rem' : '0 1.25rem 0 0.95rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Left Side: Standalone TSigN Emblem */}
        <a
          href="/"
          onClick={handleLogoClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            alignSelf: 'stretch',
            textDecoration: 'none',
            background: 'transparent',
            backgroundColor: 'transparent',
            paddingRight: '0.4rem',
            transition: 'transform 0.25s ease'
          }}
          className="brand-logo-link"
          aria-label="TSigN Home"
        >
          <Logo
            showText={false}
            size="large"
            height={scrolled ? '54px' : '62px'}
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              background: 'transparent',
              backgroundColor: 'transparent'
            }}
          />
        </a>

        {/* Center: Desktop Navigation Links (Clean & Seamless Typography) */}
        <nav
          className="desktop-nav-menu"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.85rem'
          }}
        >
          {navLinks.map((item, index) => {
            const isActive = isPortfolioPage ? item.isRoute : activeHash === item.href;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#040070ff' : '#475569',
                  textDecoration: 'none',
                  padding: '0.35rem 0.55rem',
                  borderRadius: '8px',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#040070ff';
                    e.currentTarget.style.backgroundColor = 'rgba(4, 0, 112, 0.04)';
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
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '18px',
                      height: '2.5px',
                      borderRadius: '2px',
                      backgroundColor: '#040070ff'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Language Toggle & High-Impact CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Language Switcher Pill */}
          <button
            onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '0.38rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              color: '#040070ff',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
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
            <Globe size={13} color="#040070ff" />
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
              padding: scrolled ? '0.45rem 1.2rem' : '0.52rem 1.35rem',
              borderRadius: '9999px',
              border: 'none',
              background: 'linear-gradient(135deg, #040070ff 0%, #0041d7ff 100%)',
              color: '#FFFFFF',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(4, 0, 112, 0.28)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(4, 0, 112, 0.38)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(4, 0, 112, 0.28)';
            }}
          >
            <span>{t.nav.getQuote}</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.48rem',
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
            maxWidth: '840px',
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
            const isActive = isPortfolioPage ? item.isRoute : activeHash === item.href;
            return (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#040070ff' : '#1E293B',
                  backgroundColor: isActive ? 'rgba(4, 0, 112, 0.08)' : 'transparent',
                  padding: '0.75rem 1rem',
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

        @media (min-width: 860px) {
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

        @media (max-width: 859px) {
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
            height: 52px !important;
            padding: 0 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
}
