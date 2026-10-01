import React from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceDroplet from './ServiceDroplet';

/**
 * ServiceCard Component
 *
 * Renders an individual discipline card with:
 *  - Single-color (#040070ff) glowing border beam during sweep
 *  - Light beam across card surface during sweep
 *  - ServiceDroplet on the left and title on the right
 *  - Description text below
 *  - Bottom action button to view detailed scope modal
 */
export default function ServiceCard({
  service,
  index,
  isHovered,
  isAutoActive,
  animKey,
  onHover,
  onLeave,
  onSelect
}) {
  return (
    <div
      className="service-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        padding: '2.2rem 2rem',
        border: isHovered ? '1px solid #040070' : '1px solid #E2E8F0',
        boxShadow: isHovered
          ? '0 20px 40px -10px rgba(10, 30, 63, 0.12)'
          : isAutoActive
          ? '0 12px 28px -8px rgba(4, 0, 112, 0.08)'
          : '0 4px 20px -2px rgba(10, 30, 63, 0.05)',
        transform: isHovered ? 'translateY(-6px)' : isAutoActive ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      {/* Left-to-Right Single-Color Glowing Border Beam */}
      {isAutoActive && <div key={`border-${animKey}`} className="card-border-sweep" />}

      {/* Left-to-Right Single-Color Light Beam across Card */}
      {isAutoActive && <div key={`sweep-${animKey}`} className="card-sweep-light" />}

      {/* Corner Droplet Watermark Pattern */}
      <div
        style={{
          position: 'absolute',
          top: '-15px',
          right: '-15px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(4, 0, 112, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div>
        {/* Top Row: 3D Droplet on Left + Service Title on Right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: '1.4rem'
          }}
        >
          <ServiceDroplet
            serviceId={service.id}
            isHovered={isHovered}
            isAutoActive={isAutoActive}
            animKey={animKey}
            size={64}
            iconSize={24}
          />

          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#0A1E3F',
                lineHeight: 1.3,
                margin: 0
              }}
            >
              {service.title}
            </h3>
          </div>
        </div>

        {/* Service Excerpt */}
        <p
          style={{
            fontSize: '0.95rem',
            color: '#475569',
            lineHeight: 1.65,
            marginBottom: '1.8rem'
          }}
        >
          {service.desc}
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onSelect(service)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#040070',
          fontWeight: 700,
          fontSize: '0.9rem',
          cursor: 'pointer',
          borderTop: '1px solid #F1F5F9',
          paddingTop: '1.2rem',
          width: '100%',
          textAlign: 'left',
          background: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderBottom: 'none'
        }}
      >
        <span>Hizmet Kapsamını İncele</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
