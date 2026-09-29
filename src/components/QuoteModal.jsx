import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'BIM & MEP Koordinasyonu',
    scope: '40.000 m² - 100.000 m²',
    description: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(7, 21, 43, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 2500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.25s ease-out'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        maxWidth: '580px',
        width: '100%',
        padding: '2.5rem',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
        maxHeight: '92vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            width: '38px',
            height: '38px',
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
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.25rem auto' }} />
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0A1E3F', marginBottom: '0.75rem' }}>
              Teklif Talebiniz Alındı!
            </h3>
            <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6 }}>
              BIM ve mühendislik uzmanlarımız projenizi inceleyerek 24 saat içinde detaylı şartname ve teklif taslağı ile dönüş yapacaktır.
            </p>
          </div>
        ) : (
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(26, 86, 219, 0.08)',
              color: '#1A56DB',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '0.75rem'
            }}>
              <Shield size={14} />
              <span>TSigN Hızlı Teklif & Keşif Formu</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A1E3F', marginBottom: '0.5rem' }}>
              Projeniz İçin Teklif Alın
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
              Mühendislik, BIM ve mimari ihtiyaçlarınız için bilgilerinizi bırakın, en uygun metodolojiyi sunalım.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                    Adınız Soyadınız *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Adınız Soyadınız"
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
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                    Firma / Kurum Adı
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Şirket veya Yatırımcı"
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
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                    E-Posta *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="adiniz@firma.com"
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
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                    Telefon Numarası *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                  Hizmet Alanı
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    backgroundColor: '#FFFFFF',
                    outline: 'none'
                  }}
                >
                  <option value="BIM & MEP Koordinasyonu">BIM & MEP Koordinasyonu (LOD 400/500)</option>
                  <option value="Mimari & İç Mimari Tasarım">Mimari & İç Mimari Tasarım</option>
                  <option value="Yapısal (Statik) Analiz">Yapısal (Statik) Analiz & Güçlendirme</option>
                  <option value="Geoteknik ve Zemin Modelleme">Geoteknik ve Zemin Modelleme</option>
                  <option value="Gayrimenkul ve Tarım Vizyonu">Gayrimenkul & Tarım Vizyonu (H&B Use)</option>
                  <option value="Yazılım ve Dijital Dönüşüm">Yazılım ve Dijital Dönüşüm Çözümleri</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                  Tahmini Proje Büyüklüğü (İnşaat Alanı)
                </label>
                <select
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    backgroundColor: '#FFFFFF',
                    outline: 'none'
                  }}
                >
                  <option value="5.000 m² altı">5.000 m² ve altı</option>
                  <option value="5.000 m² - 20.000 m²">5.000 m² - 20.000 m²</option>
                  <option value="20.000 m² - 50.000 m²">20.000 m² - 50.000 m²</option>
                  <option value="50.000 m² üzeri">50.000 m² ve üzeri (Büyük Ölçekli)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                  Proje Detayları veya Notlarınız
                </label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Hedef teslim süresi, teknik isterler veya diğer notlar..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', marginTop: '0.4rem' }}
              >
                <Send size={16} />
                <span>Teklif Talebini Gönder</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
