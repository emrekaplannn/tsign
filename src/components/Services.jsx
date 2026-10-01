import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ServiceCard, ServiceModal, useServiceSweep } from './services/index';
import './services/Services.css';

/**
 * Services Component (Main Section Orchestrator)
 *
 * Fully modular and extensible multidisciplinary engineering services section for TSigN.
 * Composed of independent sub-modules in `src/components/services/`:
 *  - ServiceCard: Individual card with dual-layer droplet, single-color borders & sweep light
 *  - ServiceDroplet: 3D sapphire droplet with centered discipline icon
 *  - ServiceModal: Detailed engineering scope breakdown modal
 *  - useServiceSweep: Overlapping sequential left-to-right sweep scheduler
 *  - ServiceIcons: Discipline icon mapping
 *
 * @param {Object} props
 * @param {Object} props.t - Localization dictionary (e.g. t.services)
 * @param {Function} [props.onOpenQuote] - Callback for opening quote request modal
 */
export default function Services({ t, onOpenQuote }) {
  const [activeModalService, setActiveModalService] = useState(null);
  const items = t?.services?.items || [];

  // Custom hook for overlapping sequential sweep animations across cards
  const { activeCards, hoveredIndex, setHoveredIndex } = useServiceSweep(items.length);

  return (
    <section
      id="services"
      className="section"
      style={{
        backgroundColor: '#F8F9FA',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>{t?.services?.tag}</span>
          </div>
          <h2 className="section-title">{t?.services?.title}</h2>
          <p className="section-subtitle">{t?.services?.subtitle}</p>
        </div>

        {/* Multidisciplinary Core Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {items.map((service, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAutoActive = hoveredIndex === null && Boolean(activeCards[idx]);
            const animKey = activeCards[idx] || 0;

            return (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                isHovered={isHovered}
                isAutoActive={isAutoActive}
                animKey={animKey}
                onHover={setHoveredIndex}
                onLeave={() => setHoveredIndex(null)}
                onSelect={setActiveModalService}
              />
            );
          })}
        </div>
      </div>

      {/* Service Detailed Breakdown Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
}
