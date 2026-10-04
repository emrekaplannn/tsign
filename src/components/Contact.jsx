import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Briefcase, ArrowRight } from 'lucide-react';

export default function Contact({ t, onOpenCareers }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'BIM & MEP Koordinasyonu',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'BIM & MEP Koordinasyonu',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="section" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative',
      paddingTop: '2.5rem'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        {/* 2-Column Layout: Contact Information & Interactive Map (Left), Contact Form (Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'flex-start'
        }}>
          {/* Left Column: Careers Banner, Map & Office Details */}
          <div>
            {/* Careers Referral Banner (Opens Careers Modal) */}
            <div
              onClick={onOpenCareers}
              style={{
                background: 'linear-gradient(135deg, #0A1E3F 0%, #163674 100%)',
                borderRadius: '20px',
                padding: '1.25rem 1.4rem',
                marginBottom: '1.25rem',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                boxShadow: '0 8px 22px rgba(10, 30, 63, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(10, 30, 63, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(10, 30, 63, 0.12)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38BDF8',
                  flexShrink: 0
                }}>
                  <Briefcase size={20} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#38BDF8',
                    marginBottom: '2px'
                  }}>
                    Kariyer & Staj Fırsatları
                  </div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    margin: 0,
                    lineHeight: 1.25
                  }}>
                    TSigN Ailesine Katılın
                  </h4>
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#CBD5E1',
                    margin: '2px 0 0 0',
                    lineHeight: 1.35
                  }}>
                    Açık pozisyonları ve staj programlarını inceleyin
                  </p>
                </div>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                padding: '0.5rem 0.9rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#FFFFFF',
                flexShrink: 0,
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span>İncele</span>
                <ArrowRight size={13} />
              </div>
            </div>

            {/* Embedded Google Map (YDA Center Ankara - Söğütözü) */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 15px rgba(10, 30, 63, 0.06)',
              height: '240px',
              backgroundColor: '#EDF2F7',
              marginBottom: '1.25rem'
            }}>
              <iframe
                title="TSigN YDA Center Konumu"
                src="https://maps.google.com/maps?q=YDA%20Center%20%C3%87ankaya%20Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* 3 Contact Info Cards: Address, Email, Working Hours */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Address Card */}
              <div style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(4, 0, 112, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#040070',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0A1E3F', marginBottom: '4px' }}>
                    {t.contact.addressTitle}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5 }}>
                    {t.contact.address}
                  </p>
                </div>
              </div>

              {/* Email & Phone Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(4, 0, 112, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#040070'
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>E-Posta</div>
                    <a href={`mailto:${t.contact.email}`} style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0A1E3F' }}>
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(4, 0, 112, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#040070'
                  }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Çalışma Saatleri</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0A1E3F' }}>
                      {t.contact.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Quote Form */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px rgba(10, 30, 63, 0.06)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.25rem auto' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A1E3F', marginBottom: '0.75rem' }}>
                  Talebiniz Başarıyla İletildi!
                </h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto' }}>
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0A1E3F', marginBottom: '0.5rem' }}>
                  Projenizi Birlikte Başlatalım
                </h3>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {t.contact.form.name} *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Adınız ve Soyadınız"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border 0.2s'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      {t.contact.form.email} *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="adiniz@firma.com"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.1rem',
                        borderRadius: '12px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.1rem',
                        borderRadius: '12px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {t.contact.form.service}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      backgroundColor: '#FFFFFF',
                      outline: 'none'
                    }}
                  >
                    <option value="Mimari & İç Mimari Tasarım">Mimari & İç Mimari Tasarım</option>
                    <option value="BIM & MEP Koordinasyonu">BIM & MEP Koordinasyonu (LOD 400/500)</option>
                    <option value="Yapısal (Statik) Analiz">Yapısal (Statik) Analiz & Güçlendirme</option>
                    <option value="Geoteknik ve Zemin Modelleme">Geoteknik ve Zemin Modelleme</option>
                    <option value="Gayrimenkul ve Tarım Vizyonu">Gayrimenkul & Tarım Vizyonu (H&B Use)</option>
                    <option value="Yazılım ve Dijital Dönüşüm">Yazılım ve Dijital Dönüşüm Çözümleri</option>
                    <option value="TSigN Akademi Kurumsal Eğitim">TSigN Akademi Kurumsal Eğitim</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Proje alanı, lokasyonu ve hedeflenen teslim tarihi gibi bilgileri ekleyebilirsiniz..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>{t.contact.form.submit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
