import React, { useState, useEffect } from 'react';
import {
  X,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Upload,
  Send,
  Building,
  GraduationCap
} from 'lucide-react';

export default function CareersModal({ isOpen, onClose, t }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedJob) {
          setSelectedJob(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedJob, onClose]);

  if (!isOpen) return null;

  const careersData = t?.careers || {};
  const openings = careersData.openings || [];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 2800);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 21, 43, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        animation: 'careersFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '28px',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            padding: '1.75rem 2.25rem',
            borderBottom: '1px solid #E2E8F0',
            background: 'linear-gradient(135deg, #07152B 0%, #0A1E3F 100%)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#38BDF8',
                marginBottom: '0.5rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              <Briefcase size={12} />
              <span>{careersData.tag || 'Kariyer & Staj'}</span>
            </div>
            <h2
              style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.2
              }}
            >
              {selectedJob ? selectedJob.title : (careersData.title || 'TSigN Ailesine Katılın')}
            </h2>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#94A3B8',
                margin: '0.4rem 0 0 0',
                maxWidth: '680px'
              }}
            >
              {selectedJob
                ? `${selectedJob.location} • ${selectedJob.type}`
                : (careersData.subtitle || 'Yenilikçi mühendislik ve BIM projelerimizde yer almak için açık pozisyonlarımıza başvurun.')}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Kapat"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div
          style={{
            padding: '2rem 2.25rem',
            overflowY: 'auto',
            flex: 1
          }}
        >
          {selectedJob ? (
            /* Position Application Form */
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <button
                onClick={() => setSelectedJob(null)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#F1F5F9',
                  border: '1px solid #CBD5E1',
                  borderRadius: '10px',
                  padding: '0.5rem 0.95rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#475569',
                  cursor: 'pointer',
                  marginBottom: '1.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E2E8F0';
                  e.currentTarget.style.color = '#0A1E3F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                <ArrowLeft size={16} />
                <span>Tüm Açık Pozisyonlara Dön</span>
              </button>

              {submitted ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '3rem 1.5rem',
                    backgroundColor: '#F8FAFC',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.25rem auto' }} />
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A1E3F', marginBottom: '0.5rem' }}>
                    Başvurunuz Alındı!
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto' }}>
                    <strong>{selectedJob.title}</strong> pozisyonu için başvurunuz İnsan Kaynakları ekibimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '2rem',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 16px rgba(10, 30, 63, 0.04)'
                  }}
                >
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#040070', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Pozisyon Başvuru Formu
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0A1E3F', margin: '4px 0 8px 0' }}>
                      {selectedJob.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
                      {selectedJob.desc}
                    </p>
                  </div>

                  <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        Adınız Soyadınız *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Örn: Ahmet Yılmaz"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          E-posta Adresiniz *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="ahmet@ornek.com"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            border: '1px solid #CBD5E1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Telefon Numaranız *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+90 5XX XXX XX XX"
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            border: '1px solid #CBD5E1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        LinkedIn veya Portföy Linki
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/... veya https://behance.net/..."
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        CV / Özgeçmiş Dosyası
                      </label>
                      <div
                        onClick={() => document.getElementById('careers-cv-upload')?.click()}
                        style={{
                          border: '2px dashed #CBD5E1',
                          borderRadius: '12px',
                          padding: '1.25rem',
                          textAlign: 'center',
                          backgroundColor: '#F8FAFC',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <Upload size={22} color="#040070" style={{ margin: '0 auto 6px auto' }} />
                        <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>
                          Dosya Seçin veya Sürükleyin
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>PDF, DOC veya DOCX (Maks. 10MB)</div>
                        <input type="file" accept=".pdf,.doc,.docx" style={{ display: 'none' }} id="careers-cv-upload" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        marginTop: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <Send size={16} />
                      <span>Başvuruyu Gönder</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          ) : (
            /* Open Positions Grid */
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}
              >
                {openings.map((job, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '20px',
                      padding: '1.75rem 1.5rem',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#040070';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(10, 30, 63, 0.08)';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '0.78rem',
                          color: '#64748B',
                          marginBottom: '0.85rem',
                          flexWrap: 'wrap'
                        }}
                      >
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                          <MapPin size={13} color="#040070" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                          <Clock size={13} color="#040070" />
                          {job.type}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 700,
                          color: '#0A1E3F',
                          marginBottom: '0.75rem',
                          lineHeight: 1.35
                        }}
                      >
                        {job.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: '#475569',
                          lineHeight: 1.55,
                          marginBottom: '1.5rem'
                        }}
                      >
                        {job.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="btn btn-outline"
                      style={{
                        width: '100%',
                        fontSize: '0.85rem',
                        padding: '0.65rem 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Pozisyona Başvur</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* General Application Callout */}
              <div
                style={{
                  backgroundColor: '#07152B',
                  borderRadius: '16px',
                  padding: '1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  color: '#FFFFFF'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', margin: 0, marginBottom: '4px' }}>
                    Aradığınız Pozisyonu Bulamadınız mı?
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8', margin: 0 }}>
                    CV'nizi ve portföyünüzü genel başvuru olarak <strong>ik@tsign.com.tr</strong> adresine iletebilirsiniz.
                  </p>
                </div>
                <a
                  href="mailto:ik@tsign.com.tr?subject=TSigN%20Genel%20Kariyer%20Başvurusu"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    color: '#38BDF8',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <span>Genel Başvuru Yap</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes careersFadeIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
