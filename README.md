# TSigN — Design & BIM Solutions

<div align="center">
  <h3><em>"Every idea is a unique project"</em></h3>
  <p><strong>Çizgileri değil, bilgiyi modelliyoruz.</strong></p>
  <p>
    <a href="https://tsign.com.tr">Resmi Web Sitesi</a> •
    <a href="#-özellikler">Özellikler</a> •
    <a href="#-teknoloji-yığını">Teknoloji Yığını</a> •
    <a href="#-kurulum-ve-çalıştırma">Kurulum</a> •
    <a href="#-ekibimiz">Ekibimiz</a>
  </p>
</div>

---

## 📌 Proje Hakkında

**TSigN Design & BIM Solutions**, mimarlık, inşaat mühendisliği, mekanik/elektrik koordinasyonu (MEP) ve yazılım teknolojilerini tek çatı altında birleştiren yeni nesil bir mühendislik ve dijital modelleme platformudur. 

Bu web platformu; sürdürülebilir, sıfır çakışmalı ve veri odaklı BIM yaklaşımlarını, gelişmiş teknoloji ekosistemini ve ODTÜ mezunu uzman kadroyu kurumsal bir dijital kimlikle ziyaretçilere sunar.

---

## ✨ Temel Özellikler

- **🏛️ Multidisipliner Hizmet Alanları:**
  - **Mimari & İç Mimari Tasarım:** Konsept, uygulama, malzeme şartnameleri ve FF&E koordinasyonu.
  - **Yapısal (Statik) Analiz:** TBDY 2018 uyumlu non-linear dinamik modelleme ve donatı optimizasyonu.
  - **Elektromekanik (MEP) Koordinasyonu:** LOD 400/500 seviyesinde Navisworks çakışma tespiti ve spool çizimleri.
  - **Geoteknik ve Zemin Modelleme:** 3D zemin simülasyonu, temel sistemleri ve derin kazı/iksa tahkikleri.
  - **Gayrimenkul ve Tarım Vizyonu:** En etkin kullanım analizi (H&B Use) ve mekansal yatırım fizibilitesi.
  - **Yazılım ve Dijital Dönüşüm:** Kurumsal web, mühendislik otomasyonları ve özel veri entegrasyonları.

- **🌐 Çift Dil Desteği (Bilingual TR / EN):**
  - Türkçe ve İngilizce dilleri arasında tek tıkla anlık geçiş imkanı.

- **🎨 Yüksek Standartlı Görsel ve İnteraktif Arayüz:**
  - Canva kurumsal tasarımlarına sadık kalınarak oluşturulmuş mimari koyu/açık kontrastı.
  - Arka planda gerçek zamanlı çalışan **3D Tel Kafes (Wireframe) Blueprint Canvas Motoru**.
  - Detaylı hizmet kapsamı ve şartname açılır modalları.

- **🎓 TSigN Akademi & Kariyer Platformu:**
  - BIM, Revit, SAP2000, Python ve 3ds Max eğitim programları için ön kayıt sistemi.
  - Açık pozisyonlar ve CV yükleme özellikli kariyer başvuru formu.

- **📍 İnteraktif İletişim & Teklif Formu:**
  - Ankara YDA Center ofis konumu entegreli Google Maps.
  - Doğrudan `info@tsign.com.tr` iletişim altyapısı ve anlık doğrulamalı keşif/teklif modalı.

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Frontend Kütüphanesi** | [React 19](https://react.dev/) | Modern bileşen mimarisi ve durum yönetimi |
| **Derleyici & Sunucu** | [Vite 8](https://vitejs.dev/) | Ultra hızlı HMR ve optimize üretim paketi |
| **Tasarım Sistemi** | Vanilla CSS (Custom Design System) | Glassmorphism, CSS değişkenleri ve mimari grid sistemi |
| **Tipografi** | [Google Fonts](https://fonts.google.com/) | *Outfit* (Başlıklar) & *Plus Jakarta Sans* (Metinler) |
| **İkon Seti** | [Lucide React](https://lucide.dev/) | Modern ve tutarlı vektörel mühendislik ikonları |
| **3D & Canvas** | HTML5 Canvas API | Gerçek zamanlı izometrik tel kafes ve düğüm simülasyonu |

---

## 📂 Proje Dizin Yapısı

```
tsign/
├── canva-tasarımlar/      # Orijinal Canva görsel tasarım şablonları
├── public/                # Statik varlıklar ve tasarımlar
├── src/
│   ├── assets/            # Görsel ve SVG varlıkları
│   ├── components/        # Yeniden kullanılabilir UI bileşenleri
│   │   ├── Logo.jsx       # TSigN vektörel damla / dijital ikiz logosu
│   │   ├── Navbar.jsx     # Yapışkan blur header ve dil seçici
│   │   ├── Hero.jsx       # İnteraktif 3D wireframe canvas ve başlık
│   │   ├── Services.jsx   # 6 ana disiplin ve detay modalları
│   │   ├── TechStack.jsx  # Koyu temalı kategorize edilmiş yazılım gridi
│   │   ├── WhyUs.jsx      # Stratejik ilkeler ve istatistik sayaçları
│   │   ├── Projects.jsx   # Filtrelenebilir vaka analizleri ve portföy
│   │   ├── Team.jsx       # ODTÜ mezunu uzman kadro kartları
│   │   ├── Academy.jsx    # Eğitim modülleri ve ön kayıt formu
│   │   ├── Careers.jsx    # Açık pozisyonlar ve başvuru sistemi
│   │   ├── Contact.jsx    # YDA Center haritası ve teklif formu
│   │   ├── Footer.jsx     # Kurumsal footer ve site haritası
│   │   └── QuoteModal.jsx # Hızlı teklif talep modalı
│   ├── data/
│   │   └── tsignData.js   # TR / EN çift dilli merkezi veri deposu
│   ├── App.jsx            # Ana uygulama birleştirici
│   ├── index.css          # Mimari tasarım sistemi kuralları
│   └── main.jsx           # React kök montaj dosyası
├── index.html             # SEO meta etiketleri ve font tanımları
├── package.json           # Proje bağımlılıkları ve komutları
└── vite.config.js         # Vite derleme yapılandırması
```

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# 1. Depoyu klonlayın (veya proje dizinine gidin)
git clone https://github.com/emrekaplannn/tsign.git
cd tsign

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda açın:
```
http://localhost:5173/
```

### Üretim Derlemesi (Production Build)
```bash
npm run build
npm run preview
```

---

## 👥 Ekibimiz & Uzman Kadro

* **Serhat Tuncer** — Kurucu & İnşaat Mühendisi *(ODTÜ İnşaat)*
* **Onur Tuncer** — İnşaat Mühendisi
* **Merve Öztürk** — BIM Yöneticisi & Kıdemli Mimar *(ODTÜ Mimarlık)*
* **Emre Kaplan** — Yazılım & Bilir Kişi *(ODTÜ Bilgisayar)*
* **Vedat Genç** — İç Mimar *(Dicle Üniversitesi)*
* **Jinda Aslanhan** — Kıdemli Mimar *(Hasan Kalyoncu Üniversitesi)*

---

## 📬 İletişim & Merkez Ofis

* **Adres:** YDA Center, Kızılırmak Mah. Dumlupınar Blv. No:9, Çankaya / Ankara
* **E-Posta:** [info@tsign.com.tr](mailto:info@tsign.com.tr)
* **Web:** [tsign.com.tr](https://tsign.com.tr)

---

<div align="center">
  <small>© 2026 TSigN Design & BIM Solutions. Tüm hakları saklıdır.</small>
</div>
