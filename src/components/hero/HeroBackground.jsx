import React from 'react';
import HeroCanvas from './HeroCanvas';

/**
 * HeroBackground Component
 * Combines an ambient background video with a soft readability gradient mask
 * and the interactive geometric architectural wireframe canvas.
 */
export default function HeroBackground({
  videoSrc = '/damlacik.mp4',
  showVideo = true,
  videoOpacity = 1,
  videoTop = '4.5rem',
  particleOpacity = 0.15,
  nodeCount = 22,
  canvasProps = {},
  overlayGradient = 'linear-gradient(to right, rgba(248, 249, 250, 0.72) 0%, rgba(248, 249, 250, 0.28) 50%, rgba(248, 249, 250, 0.48) 100%)'
}) {
  return (
    <>
      {/* Semi-Transparent Background Video with Gradient Mask */}
      {showVideo && (
        <div
          style={{
            position: 'absolute',
            top: videoTop,
            left: 0,
            width: '100%',
            height: `calc(100% - ${videoTop})`,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 12%, black 25%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 12%, black 25%, black 100%)'
          }}
          aria-hidden="true"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 35%',
              opacity: videoOpacity,
              filter: 'contrast(1.08) saturate(1.15)'
            }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Soft gradient mask for crisp typography readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: overlayGradient
            }}
          />
        </div>
      )}

      {/* Background Interactive Wireframe & Particle Canvas */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <HeroCanvas
          particleOpacity={particleOpacity}
          nodeCount={nodeCount}
          {...canvasProps}
        />
      </div>
    </>
  );
}
