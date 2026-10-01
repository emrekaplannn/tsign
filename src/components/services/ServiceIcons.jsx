import React from 'react';
import {
  Building2,
  Activity,
  Layers,
  Mountain,
  PieChart,
  Code2,
  Sparkles
} from 'lucide-react';

/**
 * Service discipline icons mapping
 */
export const serviceIconMap = {
  mimari: Building2,
  statik: Activity,
  mep: Layers,
  geoteknik: Mountain,
  gayrimenkul: PieChart,
  yazilim: Code2,
};

/**
 * Returns an icon element for a given service ID
 */
export function getServiceIcon(id, size = 24, props = {}) {
  const IconComponent = serviceIconMap[id] || Sparkles;
  return <IconComponent size={size} {...props} />;
}
