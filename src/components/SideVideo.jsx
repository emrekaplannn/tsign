import React, { useState, useEffect, useRef } from 'react';

/**
 * SideVideo Component
 *
 * Pure ambient side video docked to the right edge of the viewport.
 * Continuously plays /side_video.mp4 as an organic, atmospheric background element.
 *
 * Characteristics:
 *  - Sits behind all foreground content, cards, and text (pointer-events: none)
 *  - No buttons, controls, borders, or shadows (100% clean ambient video)
 *  - 0.7x playback speed for ultra-smooth cinematic motion
 *  - 0.8 base opacity
 *  - Linear, tight edge transparency (45px flat fade on left and top)
 *  - Automatically fades to full transparency when inside Hero (#home), "Teknolojik Altyapımız & BIM Ekosistemi" (#tech), and Footer (#footer)
 */
export default function SideVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Set playback rate to 0.7x on mount and when video plays
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  // Kademeli (progressive) saydamlık kontrolü:
  // - Hero (#home): Sayfa başında video gizlidir (opacity: 0), Services'e geçerken kademeli belirir (fade in).
  // - Teknolojik Altyapı (#tech): Yaklaşırken kademeli kaybolur (fade out), uzaklaşırken tekrar belirir (fade in).
  // - Footer (#footer): Yaklaşırken kademeli kaybolur (fade out).
  useEffect(() => {
    let ticking = false;

    const updateOpacity = () => {
      if (!containerRef.current) return;

      const vh = window.innerHeight;

      // 1. Hero (#home) bölümü kademeli geçişi (Hero bölümünde gizli, aşağı indikçe yumuşakça belirir):
      let heroOpacity = 1;
      const hero = document.getElementById('home') || document.querySelector('.hero-section');
      if (hero) {
        const hRect = hero.getBoundingClientRect();
        const heroThresholdStart = 320;
        const heroThresholdEnd = 60;
        const heroSpan = heroThresholdStart - heroThresholdEnd; // 260px

        if (hRect.bottom >= heroThresholdStart) {
          heroOpacity = 0;
        } else if (hRect.bottom > heroThresholdEnd) {
          heroOpacity = (heroThresholdStart - hRect.bottom) / heroSpan;
        } else {
          heroOpacity = 1;
        }
      }

      // 2. Footer bölümü kademeli geçişi (Footer'a yaklaşırken pürüzsüzce kaybolur):
      let footerOpacity = 1;
      const footer = document.getElementById('footer') || document.querySelector('footer');
      if (footer) {
        const fRect = footer.getBoundingClientRect();
        const fLeadIn = 150;
        const fLeadOut = 120;
        const fSpan = fLeadIn + fLeadOut;

        if (fRect.top >= vh + fLeadIn) {
          footerOpacity = 1;
        } else if (fRect.top > vh - fLeadOut) {
          const progress = (vh + fLeadIn - fRect.top) / fSpan;
          footerOpacity = 1 - progress;
        } else {
          footerOpacity = 0;
        }
      }

      // Geçişleri birleştir (Hero ve Footer)
      const rawOpacity = Math.min(heroOpacity, footerOpacity);

      // Yumuşak cosine easing eğrisi (başlangıç ve bitişte ekstra ipeksi geçiş)
      const easedOpacity = rawOpacity > 0 && rawOpacity < 1
        ? 0.5 * (1 - Math.cos(Math.PI * rawOpacity))
        : rawOpacity;

      containerRef.current.style.opacity = easedOpacity.toFixed(3);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOpacity();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateOpacity(); // İlk yüklemede kontrol et

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleVideoReady = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        id="ambient-side-video"
        className="ambient-side-video-mask"
        aria-hidden="true"
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          width: 'clamp(180px, 15.6vw, 264px)',
          height: 'clamp(384px, 57.6vh, 648px)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2,
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          overflow: 'hidden',
          willChange: 'opacity',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}
      >
        <video
          ref={videoRef}
          src="/side_video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={handleVideoReady}
          onPlay={handleVideoReady}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: 0.8,
            border: 'none',
            boxShadow: 'none',
            pointerEvents: 'none',
            marginLeft: 'auto'
          }}
        />
      </div>

      {/* Düz (linear) ve uçlara yakın dar saydamlık maskesi (sol ve üst) */}
      <style>{`
        .ambient-side-video-mask {
          -webkit-mask-image: 
            linear-gradient(to right, transparent 0%, #000000 45px),
            linear-gradient(to bottom, transparent 0%, #000000 45px);
          -webkit-mask-composite: source-in;
          mask-image: 
            linear-gradient(to right, transparent 0%, #000000 45px),
            linear-gradient(to bottom, transparent 0%, #000000 45px);
          mask-composite: intersect;
        }
      `}</style>
    </>
  );
}
