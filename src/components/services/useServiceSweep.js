import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to control sequential, overlapping left-to-right sweep animations
 * across service cards.
 *
 * @param {number} totalCount - Total number of service cards
 * @param {number} duration - Total duration for a single card's sweep in ms (default: 2600)
 * @param {number} interval - Stagger interval before triggering the next card in ms (default: 1750)
 */
export function useServiceSweep(totalCount = 6, duration = 2600, interval = 1750) {
  const [activeCards, setActiveCards] = useState({}); // { [index]: timestampKey }
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    // When a card is hovered, pause automated sweeping and clear active cards
    if (hoveredIndex !== null) {
      setActiveCards({});
      return;
    }

    let isCancelled = false;
    const timeouts = [];

    const triggerNext = () => {
      if (isCancelled) return;
      const idx = currentIndexRef.current;
      const key = Date.now();

      // Add current card to active map
      setActiveCards((prev) => ({ ...prev, [idx]: key }));

      // Schedule removal when its duration finishes
      const removeTimer = setTimeout(() => {
        if (!isCancelled) {
          setActiveCards((prev) => {
            if (prev[idx] === key) {
              const next = { ...prev };
              delete next[idx];
              return next;
            }
            return prev;
          });
        }
      }, duration);
      timeouts.push(removeTimer);

      // Advance index for the next cycle
      currentIndexRef.current = (idx + 1) % totalCount;
    };

    // Trigger the first card immediately
    triggerNext();

    // Trigger next cards in overlapping intervals
    const intervalId = setInterval(triggerNext, interval);

    return () => {
      isCancelled = true;
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
    };
  }, [hoveredIndex, totalCount, duration, interval]);

  return {
    activeCards,
    hoveredIndex,
    setHoveredIndex
  };
}
