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
 *  - Automatically fades to full transparency when entering "Teknolojik Altyapımız & BIM Ekosistemi" (#tech)
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
  // Teknolojik Altyapı (#tech) bölümüne yaklaşırken adım adım saydamlaşır (fade out),
  // bölümden uzaklaşırken adım adım tekrar opaklaşır (fade in).
  useEffect(() => {
    let ticking = false;

    const updateOpacity = () => {
      const tech = document.getElementById('tech');
      if (!tech || !containerRef.current) return;

      const rect = tech.getBoundingClientRect();
      const vh = window.innerHeight;

      // 1. Teknolojik Altyapı (#tech) bölümü kademeli geçişi:
      const topLeadIn = 150;
      const topLeadOut = 120;
      const topSpan = topLeadIn + topLeadOut; // 270px

      const bottomStart = vh - 80;
      const bottomSpan = 260;

      let techOpacity = 1;

      if (rect.top >= vh + topLeadIn) {
        techOpacity = 1;
      } else if (rect.top > vh - topLeadOut) {
        const progress = (vh + topLeadIn - rect.top) / topSpan;
        techOpacity = 1 - progress;
      } else if (rect.bottom >= bottomStart) {
        techOpacity = 0;
      } else if (rect.bottom > bottomStart - bottomSpan) {
        const progress = (bottomStart - rect.bottom) / bottomSpan;
        techOpacity = progress;
      } else {
        techOpacity = 1;
      }

      // 2. Footer bölümü kademeli geçişi (Footer'a yaklaşırken aynı pürüzsüzlükle kaybolur):
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

      // Her iki bölgenin geçişini birleştir
      const rawOpacity = Math.min(techOpacity, footerOpacity);

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
          bottom: '0rem',
          width: 'clamp(300px, 26vw, 440px)',
          height: 'clamp(640px, 96vh, 1080px)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2,
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          overflow: 'hidden',
          willChange: 'opacity'
        }}
      >
        <video
          ref={videoRef}
          src="/side_video.mp4"
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
            pointerEvents: 'none'
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
