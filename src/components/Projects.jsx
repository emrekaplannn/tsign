import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, MapPin, Calendar, Maximize2, X, CheckCircle2 } from 'lucide-react';

export default function Projects({ t, onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = t.projects.categories;
  const projects = t.projects.items;

  const filteredProjects =
    activeFilter === 'Tümü' || activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="section" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>{t.projects.tag}</span>
          </div>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Category Filter Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.6rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat, idx) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? '#0A1E3F' : '#F1F4F9',
                  color: isActive ? '#FFFFFF' : '#475569',
                  border: isActive ? '1px solid #0A1E3F' : '1px solid #E2E8F0'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
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
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 30, 63, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(10, 30, 63, 0.05)';
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
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Category Pill Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(10, 30, 63, 0.85)',
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
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
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
                    marginBottom: '0.8rem',
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
                    color: '#040070',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}
                >
                  <span>Proje Detaylarını Gör</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                cursor: 'pointer'
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
    </section>
  );
}
