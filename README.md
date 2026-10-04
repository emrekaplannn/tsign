# TSigN — Design & BIM Solutions

<div align="center">
  <h3><em>"Every idea is a unique project"</em></h3>
  <p><strong>Çizgileri değil, bilgiyi modelliyoruz.</strong></p>
  <p>
    <a href="https://tsign.com.tr">Resmi Web Sitesi</a> •
    <a href="#-özellikler">Özellikler</a> •
    <a href="#-mimari-ve-sayfa-yapısı">Mimari & Sayfalar</a> •
    <a href="#-teknoloji-yığını">Teknoloji Yığını</a> •
    <a href="#-kurulum-ve-çalıştırma">Kurulum</a> •
    <a href="#-ekibimiz">Ekibimiz</a>
  </p>
</div>

---

## 📌 Proje Hakkında

**TSigN Design & BIM Solutions**, mimarlık, inşaat mühendisliği, mekanik/elektrik koordinasyonu (MEP), statik analiz ve bilişim teknolojilerini tek çatı altında birleştiren yeni nesil bir mühendislik ve dijital modelleme platformudur.

Platform; ISO 19650 ve TBDY 2018 standartlarında veri odaklı BIM yaklaşımlarını, gelişmiş teknoloji ekosistemini ve ODTÜ mezunu uzman kadrosunu yüksek kontrastlı, modern ve dinamik bir dijital kimlikle ziyaretçilere sunar.

---

## ✨ Temel Özellikler

- **🏛️ Multidisipliner Hizmet Alanları:**
  - **Mimari & İç Mimari Tasarım:** Konsept, uygulama, malzeme şartnameleri ve FF&E koordinasyonu.
  - **Yapısal (Statik) Analiz:** TBDY 2018 uyumlu non-linear dinamik modelleme ve donatı optimizasyonu.
  - **Elektromekanik (MEP) Koordinasyonu:** LOD 400/500 seviyesinde Navisworks çakışma tespiti ve spool çizimleri.
  - **Geoteknik ve Zemin Modelleme:** 3D zemin simülasyonu, temel sistemleri ve derin kazı/iksa tahkikleri.
  - **Gayrimenkul ve Tarım Vizyonu:** En etkin kullanım analizi (H&B Use) ve mekansal yatırım fizibilitesi.
  - **Yazılım ve Dijital Dönüşüm:** Kurumsal web geliştirme, mühendislik otomasyonları ve özel veri entegrasyonları.

- **📁 Ayrık Portföy & Projeler Sayfası (`/portfoyumuz`):**
  - Ana akıştan bağımsız, kategorize edilmiş (BIM, Mimari, Statik, MEP, Yazılım) projeler sayfası.
  - Vaka analizleri, teknik teslimatlar, LOD seviyeleri ve detaylı proje inceleme modalları.
  - SPA geçmiş yönetimi (`pushState` / `popstate`) ile akıcı yönlendirme.

- **⚡ Hızlı Erişim ve Modüler Modal Yapısı:**
  - **Neden TSigN (`WhyUsModal`):** Hero alanındaki butondan tetiklenen stratejik ilkeler, başarı metrikleri ve vizyon kartları.
  - **Kariyer & Staj Platformu (`CareersModal`):** İletişim bölümünden ve footer'dan tetiklenen, açık pozisyonlar ve CV yükleme özellikli başvuru sistemi.
  - **Hizmet Kapsamı Modalları (`ServiceModal`):** Her hizmet kartında detaylı teknik şartname ve doğrudan portföy yönlendirmesi.
  - **Hızlı Teklif Talep Modalı (`QuoteModal`):** Anlık doğrulamalı keşif ve teklif başvuru altyapısı.

- **🔄 Kayan Teknoloji Logoları Şeridi (Infinite Marquee):**
  - Footer bölümünde telif alanının hemen üzerinde soldan sağa kesintisiz akan 22 adet BIM, analiz, modelleme ve yapay zeka aracının logo şeridi (Hover ile duraklama özellikli).

- **🎥 Sabit Yan Medya Paneli (`SideVideo`):**
  - Ekranın sağ kenarına sabitlenmiş, dikey scroll hareketine duyarlı şık mimari render/BIM video paneli.

- **🌐 Çift Dil Desteği (Bilingual TR / EN):**
  - Türkçe ve İngilizce dilleri arasında tek tıkla anlık geçiş imkanı.

- **📍 İnteraktif İletişim:**
  - Ankara YDA Center ofis konumu entegreli Google Maps, Kariyer yönlendirme kartı ve doğrudan iletişim kanalları.

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Frontend Kütüphanesi** | [React 19](https://react.dev/) | Modern fonksiyonel bileşen mimarisi ve Hooks |
| **Derleyici & Sunucu** | [Vite 8](https://vitejs.dev/) | Ultra hızlı HMR ve optimize üretim paketi |
| **Tasarım Sistemi** | Vanilla CSS (Custom Design System) | Glassmorphism, CSS değişkenleri ve mimari grid |
| **Tipografi** | [Google Fonts](https://fonts.google.com/) | *Outfit* (Başlıklar) & *Plus Jakarta Sans* (Metinler) |
| **İkon Seti** | [Lucide React](https://lucide.dev/) | Modern ve tutarlı vektörel mühendislik ikonları |
| **3D & Canvas** | HTML5 Canvas API | Gerçek zamanlı izometrik tel kafes (wireframe) simülasyonu |

---

## 📂 Proje Dizin Yapısı

```
tsign/
├── canva-tasarımlar/          # Orijinal Canva görsel tasarım şablonları
├── public/                    # Statik varlıklar, videolar ve logolar
│   ├── gorsel-icerikler/      # Yazılım logoları ve görsel materyaller
│   └── side_video2.mp4        # Sabit kenar paneli mimari video içeriği
├── src/
│   ├── assets/                # Statik medya ve SVG varlıkları
│   ├── components/            # Modüler UI bileşenleri
│   │   ├── services/
│   │   │   └── ServiceModal.jsx # Hizmet şartnamesi ve portföy butonu modalı
│   │   ├── Academy.jsx        # Eğitim modülleri ve ön kayıt formu
│   │   ├── CareersModal.jsx   # Açık pozisyonlar ve CV başvuru modalı
│   │   ├── Contact.jsx        # Harita, kariyer kartı ve iletişim formu
│   │   ├── Footer.jsx         # Kayan teknoloji şeridi, kurumsal linkler ve telif
│   │   ├── Hero.jsx           # İnteraktif 3D wireframe canvas ve başlık
│   │   ├── Logo.jsx           # TSigN vektörel damla ve kurumsal amblem
│   │   ├── Navbar.jsx         # Kompakt yapışkan blur header ve dil seçici
│   │   ├── QuoteModal.jsx     # Hızlı teklif talep modalı
│   │   ├── Services.jsx       # 6 ana mühendislik disiplini kartları
│   │   ├── SideVideo.jsx      # Sabit kenar video paneli
│   │   ├── Team.jsx           # ODTÜ mezunu uzman kadro kartları
│   │   └── WhyUsModal.jsx     # Neden TSigN stratejik ilkeler modalı
│   ├── pages/
│   │   └── PortfolioPage.jsx  # Ayrık /portfoyumuz sayfası ve filtreleri
│   ├── data/
│   │   └── tsignData.js       # TR / EN çift dilli merkezi veri deposu
│   ├── App.jsx                # SPA durum yönetimi ve sayfa birleştirici
│   ├── index.css              # Mimari tasarım sistemi kuralları ve tokenlar
│   └── main.jsx               # React kök montaj dosyası
├── index.html                 # SEO meta etiketleri ve font tanımları
├── package.json               # Proje bağımlılıkları ve scriptler
└── vite.config.js             # Vite derleme yapılandırması
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
* **Malik Ciddi** — Makine Mühendisi
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
