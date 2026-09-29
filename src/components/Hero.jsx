import React, { useEffect, useRef } from 'react';
import { ArrowRight, Box, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero({ t, onOpenQuote }) {
  const canvasRef = useRef(null);

  // Interactive Architectural Wireframe & Blueprint Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Isometric / Wireframe Nodes
    const nodes = [];
    const numNodes = 28;
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 2,
        isBIM: Math.random() > 0.6,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle isometric architectural building grid in center
      const centerX = width * 0.65;
      const centerY = height * 0.5;
      angle += 0.003;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Rotating wireframe isometric prism
      const size = Math.min(width, height) * 0.35;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // Isometric levels
      const levels = [-size * 0.5, -size * 0.1, size * 0.3];
      ctx.strokeStyle = 'rgba(26, 86, 219, 0.22)';
      ctx.lineWidth = 1.2;

      levels.forEach((lvl, idx) => {
        const rad = (size * 0.55) * (1 - idx * 0.15);
        ctx.beginPath();
        for (let a = 0; a < 6; a++) {
          const theta = (a * Math.PI) / 3 + angle;
          const px = Math.cos(theta) * rad;
          const py = Math.sin(theta) * (rad * 0.5) + lvl;
          if (a === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      });

      // Structural pillars connecting levels
      for (let a = 0; a < 6; a++) {
        const theta = (a * Math.PI) / 3 + angle;
        const rad1 = size * 0.55;
        const rad2 = (size * 0.55) * 0.7;
        const px1 = Math.cos(theta) * rad1;
        const py1 = Math.sin(theta) * (rad1 * 0.5) + levels[0];
        const px2 = Math.cos(theta) * rad2;
        const py2 = Math.sin(theta) * (rad2 * 0.5) + levels[2];

        ctx.strokeStyle = 'rgba(2, 132, 199, 0.3)';
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();

        // Node dot
        ctx.fillStyle = '#1A56DB';
        ctx.beginPath();
        ctx.arc(px1, py1, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // Draw moving BIM network nodes and lines
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(26, 86, 219, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.fillStyle = n.isBIM ? '#0284C7' : '#1A56DB';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" style={{
      position: 'relative',
      paddingTop: '8.5rem',
      paddingBottom: '5.5rem',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 90% 70% at 75% 30%, rgba(219, 234, 254, 0.4) 0%, rgba(248, 249, 250, 0) 70%)'
    }}>
      {/* Background Interactive Wireframe Canvas */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Hero Copy & Value Proposition */}
          <div style={{ maxWidth: '620px' }}>
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.45rem 1.15rem',
              backgroundColor: 'rgba(26, 86, 219, 0.08)',
              border: '1px solid rgba(26, 86, 219, 0.2)',
              borderRadius: '9999px',
              color: '#1A56DB',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '1.6rem',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 10px rgba(26, 86, 219, 0.08)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#1A56DB',
                boxShadow: '0 0 8px #1A56DB'
              }} />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Brand Title */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#0A1E3F',
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              marginBottom: '1rem'
            }}>
              TSigN <span style={{
                background: 'linear-gradient(135deg, #1A56DB 0%, #0284C7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Design & BIM</span> Solutions
            </h1>

            {/* Slogan */}
            <p style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#1E3A8A',
              marginBottom: '1.25rem',
              lineHeight: 1.4
            }}>
              {t.hero.subtitle}
            </p>

            {/* Detailed Description */}
            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '2.4rem',
              maxWidth: '540px'
            }}>
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <a
                href="#services"
                className="btn btn-primary"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="btn btn-outline"
                style={{ padding: '0.95rem 1.8rem', fontSize: '1rem' }}
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Key Feature Stats Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #E2E8F0'
            }}>
              {t.hero.stats.map((stat, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(26, 86, 219, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1A56DB'
                  }}>
                    {idx === 0 && <Box size={16} />}
                    {idx === 1 && <Layers size={16} />}
                    {idx === 2 && <Cpu size={16} />}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.725rem', color: '#64748B', fontWeight: 600 }}>{stat.label}</div>
                    <div style={{ fontSize: '0.95rem', color: '#0A1E3F', fontWeight: 800 }}>{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-End Architectural Visual & Glass Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              padding: '12px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(241, 245, 249, 0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 25px 60px -15px rgba(10, 30, 63, 0.15)',
              backdropFilter: 'blur(12px)'
            }}>
              {/* Architectural Image / Canvas Window */}
              <div style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                backgroundColor: '#0B1B3D',
                aspectRatio: '16/11'
              }}>
                <img
                  src="/designs/Ana Sayfa.png"
                  alt="TSigN Design & BIM Solutions Hero"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    filter: 'contrast(1.05)'
                  }}
                />

                {/* Overlay Badge: Digital Twin in Action */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.2rem',
                  left: '1.2rem',
                  right: '1.2rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(7, 21, 43, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      boxShadow: '0 0 10px #10B981'
                    }} />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>BIM Seviyesi: LOD 500</div>
                      <div style={{ fontSize: '0.725rem', color: '#94A3B8' }}>Tam Entegre Çakışma Yönetimi</div>
                    </div>
                  </div>
                  <button
                    onClick={onOpenQuote}
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: '8px',
                      backgroundColor: '#1A56DB',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Teklif Al
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
