import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowUpRight, 
  MapPin, 
  Calendar, 
  X, 
  CheckCircle2, 
  ChevronRight, 
  Home, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function PortfolioPage({ t, onOpenQuote, navigate }) {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = t.projects.categories;
  const projects = t.projects.items;

  const filteredProjects =
    activeFilter === 'Tümü' || activeFilter === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            activeFilter.toLowerCase().includes(p.category.toLowerCase())
        );

  return (
    <div className="portfolio-page" style={{ paddingTop: '5.5rem', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Top Hero / Banner Header */}
      <section style={{
        background: 'linear-gradient(135deg, #07152B 0%, #0A1E3F 50%, #0F2D6B 100%)',
        color: '#FFFFFF',
        padding: '3.5rem 0 4rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        {/* Ambient Decorative Glows */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 65, 215, 0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            color: '#94A3B8',
            marginBottom: '1.5rem'
          }}>
            <button
              onClick={() => navigate('/')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: '#CBD5E1',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontSize: '0.85rem',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
            >
              <Home size={14} />
              <span>Ana Sayfa</span>
            </button>
            <ChevronRight size={14} color="#64748B" />
            <span style={{ color: '#38BDF8', fontWeight: 600 }}>Portföyümüz</span>
          </nav>

          {/* Badge & Title */}
          <div style={{ maxWidth: '820px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38BDF8',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}>
              <Briefcase size={15} />
              <span>{t.projects.tag || 'Portföyümüz'}</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
              color: '#FFFFFF'
            }}>
              {t.projects.title}
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#CBD5E1',
              lineHeight: 1.6,
              maxWidth: '700px',
              marginBottom: '2rem'
            }}>
              {t.projects.subtitle}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38BDF8' }}>100+</div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8' }}>Tamamlanan Proje</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>LOD 500</div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8' }}>BIM Modelleme Seviyesi</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF' }}>%99.4</div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8' }}>Çakışmasız Saha Başarısı</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38BDF8' }}>%100</div>
              <div style={{ fontSize: '0.825rem', color: '#94A3B8' }}>MEP Koordinasyonu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Content */}
      <section style={{ padding: '3.5rem 0 5rem 0' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}>
            {categories.map((cat, idx) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '0.55rem 1.35rem',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive ? '#040070' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#475569',
                    border: isActive ? '1px solid #040070' : '1px solid #E2E8F0',
                    boxShadow: isActive ? '0 4px 12px rgba(4, 0, 112, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#040070';
                      e.currentTarget.style.color = '#040070';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.color = '#475569';
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(10, 30, 63, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 30, 63, 0.12)';
                  e.currentTarget.style.borderColor = '#CBD5E1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(10, 30, 63, 0.05)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                {/* Project Image Frame */}
                <div style={{
                  position: 'relative',
                  height: '240px',
                  backgroundColor: '#07152B',
                  overflow: 'hidden'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition:
                        project.cropArea === 'top'
                          ? 'center 5%'
                          : project.cropArea === 'mep'
                          ? 'center 35%'
                          : project.cropArea === 'clash'
                          ? 'center 45%'
                          : 'center 58%',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Category Pill Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(10, 30, 63, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.8rem',
                      color: '#64748B',
                      marginBottom: '0.75rem'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={13} color="#040070" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} color="#040070" />
                        {project.year}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#0A1E3F',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35
                    }}>
                      {project.title}
                    </h3>

                    <p style={{
                      fontSize: '0.9rem',
                      color: '#64748B',
                      lineHeight: 1.6,
                      marginBottom: '1.4rem'
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid #F1F5F9',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderBottom: 'none',
                      background: 'none',
                      color: '#040070',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0041d7')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#040070')}
                  >
                    <span>Proje Detaylarını Gör</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, #040070 0%, #0041d7 100%)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: '0 20px 40px rgba(4, 0, 112, 0.25)'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: '#FFFFFF' }}>
                Projeniz İçin Kusursuz Çözümler Üretelim
              </h3>
              <p style={{ color: '#E0E7FF', fontSize: '1rem', lineHeight: 1.5 }}>
                Mimari tasarım, BIM modelleme ve disiplinlerarası koordinasyon gerektiren projelerinizde uzman ekibimizle yanınızdayız.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={onOpenQuote}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#040070',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span>Hemen Teklif Alın</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate('/')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
              >
                <span>Ana Sayfaya Dön</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(7, 21, 43, 0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '700px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748B',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              <X size={20} />
            </button>

            <span style={{ fontSize: '0.8rem', color: '#040070', fontWeight: 700, textTransform: 'uppercase' }}>
              {selectedProject.category}
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A1E3F', marginTop: '0.3rem', marginBottom: '1rem' }}>
              {selectedProject.title}
            </h3>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              backgroundColor: '#F8FAFC',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Lokasyon</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A1E3F' }}>{selectedProject.location}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Proje Alanı</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A1E3F' }}>{selectedProject.area}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Teslim Yılı</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0A1E3F' }}>{selectedProject.year}</div>
              </div>
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0A1E3F', marginBottom: '1rem' }}>
              Teknik Çıktılar ve Başarılar
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {selectedProject.features.map((feat, fIdx) => (
                <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#040070" />
                  <span style={{ fontSize: '0.95rem', color: '#334155' }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuote();
                }}
                className="btn btn-primary"
              >
                Benzer Proje İçin Teklif Alın
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
