import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroVisual from './hero/HeroVisual';
import HeroCanvas from './hero/HeroCanvas';
import HeroStats from './hero/HeroStats';

/**
 * Hero Component (Main Section Orchestrator)
 *
 * Fully modular, highly performant, and extensible Hero section for TSigN.
 * Composed of independent sub-modules:
 *  - HeroBackground (Ambient video + gradient readability mask + dynamic interactive canvas)
 *  - HeroContent (Left column: Tagline badge, title, subtitle, CTA buttons, metrics)
 *  - HeroVisual (Right column: High-end architectural visual, glassmorphic card, LOD 500 badge)
 *
 * @param {Object} props
 * @param {Object} props.t - Localization dictionary (e.g. t.hero)
 * @param {Function} [props.onOpenQuote] - Callback for opening quote request modal
 * @param {Object} [props.customContent] - Optional overrides for content
 * @param {Object} [props.customVisual] - Optional overrides for visual card
 * @param {Object} [props.customBackground] - Optional overrides for background video/canvas
 * @param {string} [props.className] - Optional custom CSS class
 * @param {Object} [props.style] - Optional custom container style
 */
export default function Hero({
  t,
  onOpenQuote,
  customContent = {},
  customVisual = {},
  customBackground = {},
  className = '',
  style = {}
}) {
  const heroData = t?.hero || {};

  return (
    <section
      id="home"
      className={`hero-section ${className}`}
      style={{
        position: 'relative',
        paddingTop: '10.5rem',
        paddingBottom: '8.5rem',
        minHeight: '105vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#F8F9FA',
        ...style
      }}
    >
      {/* Background Video + Mask + Interactive Canvas Layer */}
      <HeroBackground {...customBackground} />

      {/* Main Foreground Container */}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Typography, Value Proposition & Metrics */}
          <HeroContent
            badge={heroData.badge}
            titlePrefix="TSigN"
            titleHighlight="Design & BIM"
            titleSuffix="Solutions"
            subtitle={heroData.subtitle}
            description={heroData.description}
            ctaPrimaryText={heroData.ctaPrimary}
            ctaPrimaryHref="#services"
            ctaSecondaryText={heroData.ctaSecondary}
            ctaSecondaryHref="#contact"
            stats={heroData.stats || []}
            {...customContent}
          />

          {/* Right Column: Glassmorphism Visual Showcase & LOD 500 CTA */}
          {/* <HeroVisual
            imageSrc="/gorsel-icerikler/logo ve appler/Adsız tasarım.png"
            imageAlt="TSigN Design & BIM Solutions Hero Artwork"
            badgeTitle="BIM Seviyesi: LOD 500"
            badgeSubtitle="Tam Entegre Çakışma Yönetimi"
            quoteButtonText="Teklif Al"
            onOpenQuote={onOpenQuote}
            {...customVisual}
          /> */}
        </div>
      </div>
    </section>
  );
}

// Compound component pattern attachment for maximum developer convenience
Hero.Background = HeroBackground;
Hero.Content = HeroContent;
Hero.Visual = HeroVisual;
Hero.Canvas = HeroCanvas;
Hero.Stats = HeroStats;
