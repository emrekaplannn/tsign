import React from 'react';
import { getServiceIcon } from './ServiceIcons';

/**
 * ServiceDroplet Component
 *
 * Renders the 3D Sapphire TSigN Droplet with the discipline icon centered inside.
 * Features dual-layer rendering:
 *  - Base Grayscale Layer (always visible as blueprint base)
 *  - Overlay Layer (sweeps with left-to-right mask during auto cycle or stays vivid on hover)
 */
export default function ServiceDroplet({
  serviceId,
  isHovered = false,
  isAutoActive = false,
  animKey = 0,
  size = 64,
  iconSize = 24
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      {/* BASE LAYER: Grayscale Droplet & Icon */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'grayscale(100%) opacity(0.65)'
        }}
      >
        <img
          src="/gorsel-icerikler/logo ve appler/damla.png"
          alt="TSigN Damla Taban"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '56%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))',
            pointerEvents: 'none'
          }}
        >
          {getServiceIcon(serviceId, iconSize)}
        </div>
      </div>

      {/* OVERLAY LAYER: Vivid Sapphire Droplet (Sweeps Left-to-Right or Stays Solid on Hover) */}
      <div
        key={isHovered ? 'hover' : `droplet-${animKey}`}
        className={isAutoActive ? 'droplet-sweep-active' : ''}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isHovered ? 1 : isAutoActive ? 1 : 0,
          filter: 'drop-shadow(0 8px 18px rgba(4, 0, 112, 0.35))',
          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          transition: isHovered ? 'opacity 0.25s ease, transform 0.25s ease' : 'none',
          pointerEvents: 'none'
        }}
      >
        <img
          src="/gorsel-icerikler/logo ve appler/damla.png"
          alt="TSigN Damla Renkli"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '56%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))',
            pointerEvents: 'none'
          }}
        >
          {getServiceIcon(serviceId, iconSize)}
        </div>
      </div>
    </div>
  );
}
