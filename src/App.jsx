import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUsModal from './components/WhyUsModal';
import PortfolioPage from './pages/PortfolioPage';
import Team from './components/Team';
import Academy from './components/Academy';
import Contact from './components/Contact';
import CareersModal from './components/CareersModal';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SideVideo from './components/SideVideo';
import { tsignData } from './data/tsignData';

export default function App() {
  const [lang, setLang] = useState('tr');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [whyUsModalOpen, setWhyUsModalOpen] = useState(false);
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path, hash = '') => {
    window.history.pushState({}, '', path + hash);
    setCurrentPath(path);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 95;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isPortfolioPage = currentPath === '/portfoyumuz' || currentPath === '/portfoyumuz/';
  const t = tsignData[lang] || tsignData.tr;

  const handleOpenQuote = () => setQuoteModalOpen(true);
  const handleCloseQuote = () => setQuoteModalOpen(false);

  const handleOpenWhyUs = () => setWhyUsModalOpen(true);
  const handleCloseWhyUs = () => setWhyUsModalOpen(false);

  const handleOpenCareers = () => setCareerModalOpen(true);
  const handleCloseCareers = () => setCareerModalOpen(false);

  return (
    <div className="tsign-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenQuote={handleOpenQuote}
        currentPath={currentPath}
        navigate={navigate}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {isPortfolioPage ? (
          <PortfolioPage t={t} onOpenQuote={handleOpenQuote} navigate={navigate} />
        ) : (
          <>
            <Hero t={t} onOpenQuote={handleOpenQuote} onOpenWhyUs={handleOpenWhyUs} />
            <Services t={t} onOpenQuote={handleOpenQuote} navigate={navigate} />
            <Team t={t} />
            <Academy t={t} />
            <Contact t={t} onOpenCareers={handleOpenCareers} />
          </>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        t={t}
        onOpenQuote={handleOpenQuote}
        onOpenCareers={handleOpenCareers}
        navigate={navigate}
      />

      {/* Fixed Side Video Panel (Pinned to Right Edge) */}
      <SideVideo />

      {/* Global Interactive Quote Request Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />

      {/* Why TSigN Interactive Modal */}
      <WhyUsModal
        isOpen={whyUsModalOpen}
        onClose={handleCloseWhyUs}
        t={t}
        onOpenQuote={handleOpenQuote}
      />

      {/* Careers Interactive Modal */}
      <CareersModal
        isOpen={careerModalOpen}
        onClose={handleCloseCareers}
        t={t}
      />
    </div>
  );
}
