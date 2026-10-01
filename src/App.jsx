import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Team from './components/Team';
import Academy from './components/Academy';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SideVideo from './components/SideVideo';
import { tsignData } from './data/tsignData';

export default function App() {
  const [lang, setLang] = useState('tr');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const t = tsignData[lang] || tsignData.tr;

  const handleOpenQuote = () => setQuoteModalOpen(true);
  const handleCloseQuote = () => setQuoteModalOpen(false);

  return (
    <div className="tsign-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero t={t} onOpenQuote={handleOpenQuote} />
        <Services t={t} onOpenQuote={handleOpenQuote} />
        <TechStack t={t} />
        <WhyUs t={t} />
        <Projects t={t} onOpenQuote={handleOpenQuote} />
        <Team t={t} />
        <Academy t={t} />
        <Careers t={t} />
        <Contact t={t} />
      </main>

      {/* Corporate Footer */}
      <Footer t={t} onOpenQuote={handleOpenQuote} />

      {/* Fixed Side Video Panel (Pinned to Right Edge) */}
      <SideVideo />

      {/* Global Interactive Quote Request Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
