import React, { useEffect, useRef } from 'react';

/**
 * HeroCanvas Component
 * Renders ambient, subtle, floating architectural network particles and connections.
 * Fully transparent, lightweight, and non-intrusive.
 */
export default function HeroCanvas({
  nodeCount = 22,
  primaryColor = '#040070',
  secondaryColor = '#0041d7',
  accentColor = '#38BDF8',
  particleOpacity = 0.15,
  className = '',
  style = {}
}) {
  const canvasRef = useRef(null);
  const opacityRef = useRef(particleOpacity);

  // Keep opacity ref immediately updated without reinitializing canvas
  useEffect(() => {
    opacityRef.current = particleOpacity;
  }, [particleOpacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Floating Particles (Subtle and fewer nodes)
    const nodes = [];
    const colors = [primaryColor, secondaryColor, accentColor];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 2, // 2px - 4px
        color: colors[i % colors.length],
        pulse: Math.random() * Math.PI,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const currentOpacity = opacityRef.current;

      // Draw moving network nodes and lines
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Draw connections between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 140) {
            ctx.save();
            ctx.globalAlpha = currentOpacity * (1 - dist / 140) * 0.85;
            ctx.strokeStyle = primaryColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Draw connections to mouse cursor if nearby
        const mouseDist = Math.hypot(n.x - mouseX, n.y - mouseY);
        if (mouseDist < 150) {
          ctx.save();
          ctx.globalAlpha = currentOpacity * (1 - mouseDist / 150) * 1.2;
          ctx.strokeStyle = '#38BDF8';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
          ctx.restore();
        }

        // Draw floating particle node
        const currentRadius = n.radius + Math.sin(n.pulse) * 0.8;
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 6;

        // Outer translucent ring
        ctx.fillStyle = `${n.color}20`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius + 2, 0, Math.PI * 2);
        ctx.fill();

        // Core solid circle
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [nodeCount, primaryColor, secondaryColor, accentColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`hero-interactive-canvas ${className}`}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        ...style
      }}
    />
  );
}
