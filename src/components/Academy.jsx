import React, { useState } from 'react';
import { BookOpen, Clock, Award, CheckCircle, ArrowRight, UserCheck, Sparkles, X } from 'lucide-react';

export default function Academy({ t }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const instructors = [
    { name: "Serhat Tuncer", title: "İnşaat Mühendisi - ODTÜ İnşaat Mühendisliği", field: "SAP2000 & Yapı Analizi" },
    { name: "Merve Öztürk", title: "Kıdemli Mimar - ODTÜ Mimarlık", field: "Revit BIM & Navisworks" },
    { name: "Emre Kaplan", title: "Bilgisayar Mühendisi - ODTÜ Bilgisayar Mühendisliği", field: "Python & Yazılım Entegrasyonu" },
    { name: "Vedat Genç", title: "İç Mimar - Dicle Üniversitesi", field: "3ds Max & V-Ray Görselleştirme" },
    { name: "Jinda Aslanhan", title: "Kıdemli Mimar - Hasan Kalyoncu Üniversitesi", field: "Proje Yönetimi & Mimari Tasarım" },
  ];

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedCourse(null);
    }, 2800);
  };

  return (
    <section id="academy" className="section" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>{t.academy.tag}</span>
          </div>
          <h2 className="section-title">{t.academy.title}</h2>
          <p className="section-subtitle">{t.academy.subtitle}</p>
        </div>

        {/* Course Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {t.academy.courses.map((course, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#1A56DB';
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
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: 'rgba(26, 86, 219, 0.1)',
                    color: '#1A56DB'
                  }}>
                    {course.badge}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#64748B' }}>
                    <Clock size={13} color="#1A56DB" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0A1E3F',
                  marginBottom: '1.25rem',
                  lineHeight: 1.3
                }}>
                  {course.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.8rem' }}>
                  {course.topics.map((topic, tIdx) => (
                    <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                      <CheckCircle size={14} color="#10B981" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCourse(course)}
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '0.875rem', padding: '0.75rem 1rem' }}
              >
                <span>Ön Kayıt & Bilgi Al</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Certified Instructors Section (From Canva TSigN Akademi.png) */}
        <div style={{
          backgroundColor: '#F1F4F9',
          borderRadius: '24px',
          padding: '2.5rem',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8rem', color: '#1A56DB', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Akademi Kadromuz
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A1E3F', marginTop: '0.3rem' }}>
              ODTÜ ve Sektör Deneyimli Eğitmenlerimiz
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {instructors.map((inst, iIdx) => (
              <div key={iIdx} style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.25rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <UserCheck size={18} color="#1A56DB" />
                  <span style={{ fontWeight: 800, color: '#0A1E3F', fontSize: '1rem' }}>{inst.name}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>{inst.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#1A56DB', fontWeight: 700, marginTop: '4px' }}>
                  Eğitim: {inst.field}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      {selectedCourse && (
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
              onClick={() => setSelectedCourse(null)}
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
                  Ön Kayıt Alındı!
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
                  {selectedCourse.title} eğitimi için danışmanımız sizinle gün ve saat detayları için iletişime geçecektir.
                </p>
              </div>
            ) : (
              <div>
                <span style={{ fontSize: '0.8rem', color: '#1A56DB', fontWeight: 700, textTransform: 'uppercase' }}>
                  TSigN Akademi Ön Kayıt
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0A1E3F', marginTop: '0.3rem', marginBottom: '1.5rem' }}>
                  {selectedCourse.title}
                </h3>

                <form onSubmit={handleEnrollSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                      Adınız Soyadınız
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
                      placeholder="adiniz@sirket.com"
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
                      Telefon Numaranız
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="05XX XXX XX XX"
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

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Ön Kaydı Tamamla
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
