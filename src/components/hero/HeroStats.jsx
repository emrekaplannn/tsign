import React from 'react';
import { Box, Layers, Cpu } from 'lucide-react';

const DEFAULT_ICONS = [Box, Layers, Cpu];

/**
 * HeroStats Component
 * Renders key architectural & engineering performance metric pills.
 */
export default function HeroStats({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.25rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #E2E8F0'
      }}
    >
      {stats.map((stat, idx) => {
        const IconComponent = DEFAULT_ICONS[idx % DEFAULT_ICONS.length] || Box;
        return (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(26, 86, 219, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1A56DB',
                flexShrink: 0
              }}
            >
              <IconComponent size={16} />
            </div>
            <div>
              <div style={{ fontSize: '0.725rem', color: '#64748B', fontWeight: 600 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.95rem', color: '#0A1E3F', fontWeight: 800 }}>
                {stat.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
