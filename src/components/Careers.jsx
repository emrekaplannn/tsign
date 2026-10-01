import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, X, Upload } from 'lucide-react';

export default function Careers({ t }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 2800);
  };

  return (
    <section id="careers" className="section" style={{
      backgroundColor: '#F8F9FA',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>{t.careers.tag}</span>
          </div>
          <h2 className="section-title">{t.careers.title}</h2>
          <p className="section-subtitle">{t.careers.subtitle}</p>
        </div>

        {/* Job Openings Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {t.careers.openings.map((job, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '2.2rem 2rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#040070';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 30, 63, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.8rem',
                  color: '#64748B',
                  marginBottom: '1rem'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} color="#040070" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} color="#040070" />
                    {job.type}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0A1E3F',
                  marginBottom: '1rem',
                  lineHeight: 1.35
                }}>
                  {job.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '2rem'
                }}>
                  {job.desc}
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '0.875rem' }}
              >
                <span>Pozisyona Başvur</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
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
            maxWidth: '520px',
            width: '100%',
            padding: '2.5rem',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <button
              onClick={() => setSelectedJob(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle size={56} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0A1E3F', marginBottom: '0.5rem' }}>
                  Başvurunuz Alındı!
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                  {selectedJob.title} pozisyonu için başvurunuz İK ekibimize ulaştı. En kısa sürede değerlendireceğiz.
                </p>
              </div>
            ) : (
              <div>
                <span style={{ fontSize: '0.8rem', color: '#040070', fontWeight: 700, textTransform: 'uppercase' }}>
                  Kariyer Başvurusu
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0A1E3F', marginTop: '0.3rem', marginBottom: '1.5rem' }}>
                  {selectedJob.title}
                </h3>

                <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Adınız Soyadınız
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ad Soyad"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      E-posta Adresiniz
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="adiniz@email.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      LinkedIn veya Portföy Linki
                    </label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/... veya https://..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      CV / Özgeçmiş Dosyası
                    </label>
                    <div style={{
                      border: '2px dashed #CBD5E1',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      textAlign: 'center',
                      backgroundColor: '#F8FAFC',
                      cursor: 'pointer'
                    }}>
                      <Upload size={22} color="#040070" style={{ margin: '0 auto 6px auto' }} />
                      <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>
                        PDF veya Word Belgesi Seçin
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Maksimum 10MB</div>
                      <input type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} id="cv-upload" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Başvuruyu Tamamla
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
