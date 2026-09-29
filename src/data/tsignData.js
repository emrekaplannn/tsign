// TSigN Corporate Data & Content Store (Multilingual Support TR/EN)

export const tsignData = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Hizmet Alanları",
      projects: "Projeler",
      tech: "Teknoloji",
      team: "Ekibimiz",
      academy: "TSigN Akademi",
      careers: "Kariyer",
      contact: "İletişim",
      getQuote: "Teklif Alın",
    },
    hero: {
      badge: "Every idea is a unique project",
      title: "TSigN Design & BIM Solutions",
      subtitle: "Çizgileri değil, bilgiyi modelliyoruz.",
      description:
        "Sürdürülebilir ve değer üreten projeler geliştiriyoruz. BIM odaklı yaklaşımımızla, tasarımdan işletmeye uzanan tüm süreçlerde verimlilik ve kalite sağlıyoruz.",
      ctaPrimary: "Hizmetlerimizi Keşfedin",
      ctaSecondary: "Bize Ulaşın",
      stats: [
        { label: "BIM Seviyesi", value: "LOD 500" },
        { label: "Sıfır Çakışma", value: "%100 MEP" },
        { label: "Mühendislik & Yazılım", value: "Tam Entegre" },
      ],
    },
    services: {
      tag: "Hizmetler",
      title: "Multidisipliner Çözümlerimiz",
      subtitle:
        "Mimarlıktan statik analize, MEP koordinasyonundan yazılım çözümlerine kadar bütünleşik mühendislik hizmetleri.",
      items: [
        {
          id: "mimari",
          title: "Mimari & İç Mimari Tasarım",
          desc: "Mekanı sadece çizmiyor, verilerle kodluyoruz. Mimari ve iç mimari estetiği kusursuz bir 'dijital ikiz' olarak kurguluyoruz.",
          icon: "building",
          details: {
            title: "Mimari & İç Mimari Hizmet Alanlarımız",
            subsections: [
              {
                name: "Üst Yapı Projeleri",
                bullets: [
                  "Konut ve Yaşam Alanları: Toplu Konutlar, Rezidanslar, Villalar",
                  "Ticari Yapılar: İş ve Finans Merkezleri, Alışveriş Merkezleri",
                  "Sosyal ve Kültürel Yapılar: Sanat ve Gösteri Merkezleri, Stadyumlar ve Spor Kompleksleri, Eğitim Yapıları",
                  "Ulaşım ve Transfer Yapıları: Şehirler Arası Terminaller, İstasyonlar, Havalimanı Terminalleri",
                  "Sağlık Tesisleri: Hastaneler, Klinikler ve Araştırma Merkezleri",
                ],
              },
              {
                name: "İç Mimari Projeler",
                bullets: [
                  "Konsept Tasarım ve Planlama: Kullanıcı deneyimi odaklı, estetik ve fonksiyonel yerleşim şemalarının (layout) oluşturulması",
                  "Uygulama ve Detay Projeleri: Şantiyede sıfır hata hedefiyle zemin, tavan, aydınlatma ve mobilyaların imalat projelerinin üretilmesi",
                  "Malzeme ve Teknik Şartnameler: Proje bütçesine uygun, yüksek performanslı malzeme seçimi ve şartnamelerin hazırlanması",
                  "Mekansal Donatı (FF&E) ve BIM: Hareketli elemanların mimari kimlikle uyumlu projelendirilmesi ve çakışmasız 3D BIM modeline işlenmesi",
                ],
              },
            ],
          },
        },
        {
          id: "statik",
          title: "Yapısal (Statik) Analiz",
          desc: "Taşıyıcı omurgayı verilerle kodluyor; BIM altyapısıyla maksimum yapı güvenliği ve milimetrik maliyet optimizasyonu sağlıyoruz.",
          icon: "activity",
          details: {
            title: "Yapısal Mühendislik ve Statik Çözümler",
            subsections: [
              {
                name: "Yapısal Modelleme ve Hesaplar",
                bullets: [
                  "Deprem Yönetmeliğine (TBDY) Tam Uyumlu 3D Modelleme",
                  "Betonarme, Çelik ve Kompozit Yapı Sistemleri Tasarımı",
                  "Yüksek Yapıların Doğrusal Olmayan (Non-Linear) Dinamik Analizleri",
                  "Mevcut Binaların Deprem Performans Analizi ve Güçlendirme Projeleri",
                  "Donatı Optimizasyonu ile %15'e Varan Metraj ve Maliyet Tasarrufu",
                ],
              },
            ],
          },
        },
        {
          id: "mep",
          title: "Elektromekanik (MEP) Koordinasyonu",
          desc: "Mekanik ve elektrik sistemlerini dijitalde entegre ederek montaj sürprizlerini bitiriyor, kusursuz uygulanabilirlik sunuyoruz.",
          icon: "layers",
          details: {
            title: "MEP Koordinasyon ve Entegrasyon",
            subsections: [
              {
                name: "Kusursuz Tesisat Entegrasyonu",
                bullets: [
                  "HVAC (Havalandırma, Isıtma, Soğutma) Tesisat Modellemesi",
                  "Sıhhi Tesisat, Yangın Koruma ve Güvenlik Hatları",
                  "Kuvvetli ve Zayıf Akım Elektrik Sistemleri",
                  "Kanal, Boru ve Tava Rotalarının Milimetrik Çakışma Denetimi (Clash Detection)",
                  "İmalat (Spool) ve Montaj Çizimlerinin Üretimi",
                ],
              },
            ],
          },
        },
        {
          id: "geoteknik",
          title: "Geoteknik ve Zemin Modelleme",
          desc: "Laboratuvar verilerini dijital ortama taşıyarak zemin davranışını simüle ediyor, güvenli ve ekonomik temel tasarımları kurguluyoruz.",
          icon: "mountain",
          details: {
            title: "Geoteknik ve Zemin Mühendisliği",
            subsections: [
              {
                name: "Zemin & Temel Çözümleri",
                bullets: [
                  "Zemin Simülasyonu: Laboratuvar verilerinin dijital ortama taşınarak zemin davranışının analiz edilmesi",
                  "Temel Sistemleri: Zemin profiline uygun, maksimum güvenli ve ekonomik temel tasarımları",
                  "Derin Kazı ve İksa: Geoteknik parametreler ile zemin dayanma sistemlerinin limit denge analizi, tahkikleri ve yapısal kesit tasarımı",
                  "Veri Raporlama: Geoteknik etütlerin ve sondaj verilerinin dijital model üzerine aktarılması",
                ],
              },
            ],
          },
        },
        {
          id: "gayrimenkul",
          title: "Gayrimenkul ve Tarım Vizyonu",
          desc: "Tasarımı finansal zekayla destekliyor; arazinin en etkin kullanımını (H&B Use), gayrimenkul fizibilitesini ve tarımsal stratejileri verilerle kurguluyoruz.",
          icon: "pie-chart",
          details: {
            title: "Stratejik Arazi ve Yatırım Yönetimi",
            subsections: [
              {
                name: "Yatırım & Fizibilite Analitiği",
                bullets: [
                  "Arazi Kullanımı (H&B Use): Arazinin en etkin, verimli ve maksimum faydayla değerlendirilmesi",
                  "Fizibilite ve Yatırım: Mekansal tasarımın finansal zekayla desteklenerek yatırım stratejisine dönüştürülmesi ve entegre tesis projeleri",
                  "Tarım Stratejileri: Tarımsal vizyon için mekansal verilerle kurgulanmış uzun vadeli arazi planlaması",
                  "Mekansal Değerleme: Gayrimenkul potansiyelinin dijital, sektörel ve ekonomik analizlerle saptanması",
                ],
              },
            ],
          },
        },
        {
          id: "yazilim",
          title: "Yazılım ve Dijital Dönüşüm",
          desc: "Fiziksel tasarımı dijital zekayla kodluyoruz. Kurumsal web kimliğinizi inşa ediyor, projelerinize özel otomasyon ve yazılım altyapıları geliştiriyoruz.",
          icon: "code",
          details: {
            title: "Bilişim ve Dijital Mühendislik Altyapıları",
            subsections: [
              {
                name: "Yazılım ve Dijital Çözümler",
                bullets: [
                  "Kurumsal Web Geliştirme: Marka vizyonunu yansıtan kurumsal web site tasarımı, arayüz (UI/UX) mimarisi ve dijital kimlik inşası",
                  "Özel Yazılım Altyapıları: İş süreçlerini optimize eden otomasyonlar, projeye özel entegre yazılım sistemlerinin geliştirilmesi",
                  "Dijital Dönüşüm Yönetimi: Kurumların dijitalleşme süreçlerinin planlanması, yazılım ekosistemlerinin kurulumu ve teknik altyapı stratejilerinin yapılandırılması",
                ],
              },
              {
                name: "BIM ve Teknik Ofis Çözümleri",
                bullets: [
                  "Mimari, Statik ve MEP 3D Modelleme",
                  "Coğrafi Bilgi Sistemleri (GIS) Veri Entegrasyonu",
                  "Disiplinler Arası Çakışma Analizi ve Koordinasyon",
                  "Metraj, Keşif ve Maliyet Analizi",
                  "Uygulama ve As-Built Projelerinin Üretilmesi",
                  "Görselleştirme ve Sunum Hazırlıkları",
                ],
              },
            ],
          },
        },
      ],
    },
    tech: {
      tag: "Teknolojik Altyapımız & BIM Ekosistemi",
      title: "Güçlü Yazılım ve Mühendislik Altyapısı",
      subtitle:
        "Tasarımın ve mühendisliğin gücünü, endüstri standartlarını belirleyen yazılımlarla dijital gerçeğe dönüştürüyoruz.",
      categories: [
        {
          name: "Mimari & BIM",
          badge: "Tasarım & Koordinasyon",
          tools: [
            { name: "Autodesk Revit", role: "BIM Modelleme & Çizim", icon: "R" },
            { name: "AutoCAD", role: "2D/3D Teknik Detay Çizimleri", icon: "A" },
            { name: "Navisworks", role: "Disiplinler Arası Çakışma Analizi", icon: "N" },
            { name: "3ds Max", role: "Hassas 3D Modelleme & Render", icon: "3" },
          ],
        },
        {
          name: "Statik & Yapısal Analiz",
          badge: "Mühendislik & Güvenlik",
          tools: [
            { name: "ideCAD", role: "BIM Esaslı Statik & Betonarme", icon: "ide" },
            { name: "SAP2000", role: "Yapısal Analiz & Dinamik Tahkik", icon: "SAP" },
            { name: "ProtaStructure", role: "Çok Katlı Bina Tasarımı", icon: "PS" },
            { name: "STA4CAD", role: "Deprem Analizi & Metraj", icon: "STA" },
            { name: "CSI ETABS", role: "Gelişmiş Yapısal Çözümleme", icon: "CSI" },
          ],
        },
        {
          name: "Yapay Zeka & Otomasyon",
          badge: "Geleceğin Zekası",
          tools: [
            { name: "ChatGPT & GPT-4o", role: "Süreç Otomasyonu & Kodlama", icon: "AI" },
            { name: "Google Gemini", role: "Çok Modlu Veri Analizi", icon: "G" },
            { name: "Anthropic Claude", role: "Mühendislik Dökümantasyonu", icon: "C" },
            { name: "NotebookLM", role: "Akıllı Şartname & Veri Madenciliği", icon: "NL" },
            { name: "AWS Cloud & AI", role: "Bulut Bilişim & Hesaplama", icon: "AWS" },
          ],
        },
        {
          name: "Bilişim & Yazılım Çözümleri",
          badge: "Dijital Omurga",
          tools: [
            { name: "Python", role: "Veri Bilimi, Otomasyon & API Entegrasyonu", icon: "Py" },
            { name: "Java & Spring", role: "Kurumsal Sistemler & Altyapı", icon: "J" },
            { name: "Modern Web & React", role: "İnteraktif Web Platformları", icon: "Web" },
          ],
        },
        {
          name: "3D Görselleştirme",
          badge: "Fotogerçekçi Sunum",
          tools: [
            { name: "Lumion", role: "Gerçek Zamanlı Mimari Animasyon", icon: "Lum" },
            { name: "Corona Renderer", role: "Ultra Fotogerçekçi Render", icon: "Cor" },
            { name: "Chaos V-Ray", role: "Stüdyo Kalitesinde Işıklandırma", icon: "VR" },
            { name: "SketchUp", role: "Hızlı Konsept Kütle Çalışmaları", icon: "SK" },
            { name: "Adobe Photoshop", role: "Post-Prodüksiyon & Pafta", icon: "PS" },
            { name: "Fagerhult Dialux", role: "Aydınlatma Hesapları", icon: "Dia" },
          ],
        },
        {
          name: "Dökümantasyon & Yönetim",
          badge: "Verimlilik Standartları",
          tools: [
            { name: "Microsoft 365", role: "Kurumsal Raporlama & Excel", icon: "MS" },
            { name: "Google Workspace", role: "Eşzamanlı Takım İşbirliği", icon: "GW" },
            { name: "BIM Collaboration", role: "Ortak Veri Ortamı (CDE)", icon: "CDE" },
          ],
        },
      ],
    },
    whyUs: {
      tag: "Neden TSigN?",
      title: "Neden Bizimle Çalışmalısınız?",
      subtitle:
        "Geleneksel yöntemlerin sınırlarını aşarak projelerinizi en güncel dijital modelleme ve mühendislik zekasıyla inşa ediyoruz.",
      pillars: [
        {
          title: "Disiplinler Arası Uzmanlık",
          desc: "Mimari, statik mühendislik, mekanik ve yazılım ekiplerimiz tek çatı altında senkronize çalışır; kayıp zamanı ve iletişim kopukluklarını sıfıra indirir.",
          icon: "layers",
        },
        {
          title: "BIM Odaklı Yaklaşım",
          desc: "Veri odaklı, koordineli ve sürdürülebilir BIM süreçleri ile şantiyede oluşabilecek milyonlarca liralık revizyon masraflarını önceden engelleriz.",
          icon: "shield-check",
        },
        {
          title: "Değer Üreten Tasarım",
          desc: "Estetik, işlevsellik, deprem güvenliği ve maliyet optimizasyonunu birleştirerek projelerinize doğrudan ticari ve mekânsal değer katarız.",
          icon: "trending-up",
        },
      ],
      stats: [
        { value: "100+", label: "Tamamlanan Proje" },
        { value: "50+", label: "Uzman Profesyonel" },
        { value: "10+", label: "Yıllık Sektör Deneyimi" },
        { value: "%99.4", label: "Çakışmasız Saha Başarısı" },
      ],
      quote:
        "Tasarımdan gerçeğe, fikirden geleceğe uzanan yolculukta yanınızdayız.",
    },
    projects: {
      tag: "Portföyümüz",
      title: "Öne Çıkan Projeler & Vaka Analizleri",
      subtitle:
        "Farklı ölçeklerde gerçekleştirdiğimiz mimari tasarım, BIM modelleme ve yazılım entegrasyonu çalışmalarımız.",
      categories: ["Tümü", "Mimari & İç Mimari", "BIM & MEP Koordinasyon", "Statik Analiz", "Yazılım & Dijital"],
      items: [
        {
          id: 1,
          title: "Çağdaş Karma Yaşam & Rezidans Kompleksi",
          category: "Mimari & İç Mimari",
          client: "Özel Yatırım Grubu",
          location: "Ankara, Çankaya",
          area: "45.000 m²",
          year: "2025",
          image: "/designs/Projeler.png",
          cropArea: "top",
          description:
            "Lüks konut, sosyal alanlar ve ticari birimleri birleştiren kapsamlı mimari konsept ve iç mimari uygulama projesi. Doğal ışıktan maksimum faydalanan enerji verimli tasarım.",
          features: ["LOD 400 BIM Modeli", "Enerji Verimliliği Sertifikasyonu", "Kusursuz İç Mekan Yerleşimi"],
        },
        {
          id: 2,
          title: "Endüstriyel Üretim Tesisi MEP Koordinasyonu",
          category: "BIM & MEP Koordinasyon",
          client: "Sanayi Yatırımları A.Ş.",
          location: "Kocaeli OSB",
          area: "32.000 m²",
          year: "2024",
          image: "/designs/Projeler.png",
          cropArea: "mep",
          description:
            "Ağır sanayi tesisinde havalandırma, proses borulama, yangın ve kuvvetli akım hatlarının Navisworks üzerinde milimetrik çakışma tespiti ve şantiye montaj optimizasyonu.",
          features: ["1.400+ Çakışma Önceden Çözüldü", "Spool İmalat Çizimleri", "%18 Montaj Süresi Tasarrufu"],
        },
        {
          id: 3,
          title: "Depreme Dayanıklı Yüksek Yapı Statik Analizi",
          category: "Statik Analiz",
          client: "Yapı İnşaat Grubu",
          location: "İstanbul, Maslak",
          area: "65.000 m²",
          year: "2025",
          image: "/designs/Projeler.png",
          cropArea: "clash",
          description:
            "TBDY 2018 yönetmeliğine uygun, ileri düzey non-linear dinamik analizler ve donatı optimizasyonu ile kurgulanmış 36 katlı betonarme & kompozit kule projesi.",
          features: ["ETABS & SAP2000 Çözümlemesi", "%12 Çelik ve Beton Tasarrufu", "En Yüksek Güvenlik Katsayısı"],
        },
        {
          id: 4,
          title: "Kurumsal BIM & Proje Takip Yazılım Platformu",
          category: "Yazılım & Dijital",
          client: "TSigN Tech Çözümleri",
          location: "Bulut Tabanlı (SaaS)",
          area: "SaaS Ekosistemi",
          year: "2026",
          image: "/designs/Projeler.png",
          cropArea: "software",
          description:
            "Şantiye ve teknik ofis arasındaki metraj, revizyon ve hakediş süreçlerini anlık olarak eşitleyen özel geliştirilmiş kurumsal web ve veri yönetim altyapısı.",
          features: ["Gerçek Zamanlı Veri Eşitleme", "Özel Dashboard & Raporlama", "BIM Entegrasyon API'si"],
        },
      ],
    },
    team: {
      tag: "Ekibimiz",
      title: "Uzman ve Vizyoner Kadromuz",
      subtitle:
        "Alanında Türkiye'nin önde gelen üniversitelerinden mezun, mühendislik, mimarlık ve teknoloji alanlarında deneyimli profesyonellerimiz.",
      members: [
        {
          name: "Serhat Tuncer",
          role: "Kurucu & İnşaat Mühendisi",
          school: "ODTÜ İnşaat Mühendisliği",
          bio: "Yapısal analiz, ileri düzey BIM yönetimi ve büyük ölçekli altyapı projelerinde 10 yılı aşkın liderlik deneyimi.",
          icon: "hard-hat",
        },
        {
          name: "Onur Tuncer",
          role: "İnşaat Mühendisi",
          school: "İnşaat Mühendisliği",
          bio: "Şantiye koordinasyonu, geoteknik hesaplamalar ve yapı güvenliği konularında uzman saha ve ofis deneyimi.",
          icon: "compass",
        },
        {
          name: "Merve Öztürk",
          role: "BIM Yöneticisi & Kıdemli Mimar",
          school: "ODTÜ Mimarlık",
          bio: "BIM protokolleri, LOD 400-500 modelleme standartları ve disiplinler arası çakışma yönetiminde uzman mimar.",
          icon: "ruler",
        },
        {
          name: "Emre Kaplan",
          role: "Yazılım & Bilir Kişi",
          school: "ODTÜ Bilgisayar Mühendisliği",
          bio: "Kurumsal yazılım mimarisi, yapay zeka entegrasyonları, algoritma optimizasyonu ve teknik veri sistemleri uzmanı.",
          icon: "code",
        },
        {
          name: "Vedat Genç",
          role: "İç Mimar",
          school: "Dicle Üniversitesi İç Mimarlık",
          bio: "Fonksiyonel ve estetik iç mekan planlaması, FF&E koordinasyonu ve yüksek detaylı uygulama projeleri tasarımcısı.",
          icon: "layout",
        },
        {
          name: "Jinda Aslanhan",
          role: "Kıdemli Mimar",
          school: "Hasan Kalyoncu Üniversitesi Mimarlık",
          bio: "Üst yapı konsept tasarımı, kentsel doku uyumu ve sürdürülebilir mimari projelerin yürütücüsü.",
          icon: "building",
        },
      ],
    },
    academy: {
      tag: "TSigN Akademi",
      title: "Geleceğin Mühendislik ve BIM Liderlerini Yetiştiriyoruz",
      subtitle:
        "Sektör profesyonelleri ve ODTÜ mezunu eğitmenlerimiz tarafından hazırlanan uygulamalı ve proje odaklı eğitim programları.",
      courses: [
        {
          title: "Uygulamalı Revit & BIM Masterclass",
          duration: "8 Hafta (64 Saat)",
          level: "Başlangıç - İleri",
          topics: ["Mimari & Yapısal Modelleme", "Aile (Family) Üretimi", "Metraj Çıkartma & Paftalama", "Navisworks Çakışma Yönetimi"],
          badge: "Popüler",
        },
        {
          title: "SAP2000 & ideCAD ile Yapısal Tasarım",
          duration: "6 Hafta (48 Saat)",
          level: "Orta - İleri",
          topics: ["TBDY 2018 Esasları", "Dinamik Analiz Yöntemleri", "Betonarme & Çelik Yapı Hesapları", "Raporlama & Çizim"],
          badge: "Mühendislik Özel",
        },
        {
          title: "Mühendisler İçin Python & Otomasyon",
          duration: "5 Hafta (30 Saat)",
          level: "Tüm Seviyeler",
          topics: ["Python Temelleri", "Excel & Revit Dynamo Entegrasyonu", "Veri Analizi & Otomatik Hesap", "Yapay Zeka Prompt Mühendisliği"],
          badge: "Yeni Nesil",
        },
        {
          title: "3ds Max, Corona & V-Ray Fotogerçekçi Render",
          duration: "6 Hafta (40 Saat)",
          level: "Tüm Seviyeler",
          topics: ["Işıklandırma & Malzeme Fiziği", "İç & Dış Mekan Sahne Kurgusu", "Kamera Açıları & Kompozisyon", "Photoshop Post-Prodüksiyon"],
          badge: "Görselleştirme",
        },
      ],
    },
    careers: {
      tag: "Kariyer",
      title: "TSigN Ailesine Katılın",
      subtitle:
        "Mühendislik ve teknolojiyi bir araya getiren yenilikçi projelerde yer almak istiyorsanız bize katılın.",
      openings: [
        {
          title: "Kıdemli BIM / MEP Koordinatörü",
          location: "Ankara (YDA Center) / Hibrit",
          type: "Tam Zamanlı",
          desc: "Revit ve Navisworks ortamlarında büyük ölçekli projelerin koordinasyonunu yönetecek, deneyimli uzman.",
        },
        {
          title: "Statik Tasarım Mühendisi",
          location: "Ankara / Tam Zamanlı",
          type: "Tam Zamanlı",
          desc: "SAP2000, ETABS ve ideCAD programlarına hakim, deprem yönetmeliğine uygun projelendirme yapabilecek inşaat mühendisi.",
        },
        {
          title: "Full-Stack Yazılım Geliştirici",
          location: "Ankara / Uzaktan",
          type: "Tam Zamanlı",
          desc: "React, Python ve modern web teknolojileriyle mühendislik veri ve otomasyon platformlarımızı geliştirecek takım arkadaşı.",
        },
        {
          title: "Genç Yetenek & Staj Programı (Mimarlık & İnşaat)",
          location: "Ankara (YDA Center)",
          type: "Staj / Yarı Zamanlı",
          desc: "Üniversitelerin Mimarlık veya İnşaat Mühendisliği bölümlerinde okuyan, öğrenmeye hevesli stajyerler.",
        },
      ],
    },
    contact: {
      tag: "İletişim",
      title: "Birlikte Tasarlayalım, Geleceğe Değer Katalım",
      subtitle: "Projeniz için bizimle iletişime geçin veya ofisimize bir kahveye bekleriz.",
      addressTitle: "Ofis Konumu",
      address: "YDA Center, Kızılırmak Mah. Dumlupınar Blv. No:9, Çankaya / Ankara",
      email: "info@tsign.com.tr",
      phone: "+90 (312) 219 00 00",
      hours: "Pazartesi - Cuma: 09:00 - 18:30",
      form: {
        name: "Adınız Soyadınız",
        email: "E-posta Adresiniz",
        phone: "Telefon Numaranız",
        service: "İlgilendiğiniz Hizmet Alanı",
        message: "Projeniz veya mesajınız hakkında detaylar...",
        submit: "Mesajı Gönder / Teklif Al",
        success: "Mesajınız başarıyla iletildi! Uzman ekibimiz en kısa sürede size geri dönüş yapacaktır.",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      tech: "Technology",
      team: "Team",
      academy: "TSigN Academy",
      careers: "Careers",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    hero: {
      badge: "Every idea is a unique project",
      title: "TSigN Design & BIM Solutions",
      subtitle: "We model information, not just lines.",
      description:
        "Developing sustainable and value-creating projects. With our BIM-driven approach, we deliver efficiency and unmatched quality from design to operation.",
      ctaPrimary: "Explore Services",
      ctaSecondary: "Contact Us",
      stats: [
        { label: "BIM Level", value: "LOD 500" },
        { label: "Clash Free", value: "100% MEP" },
        { label: "Engineering & Code", value: "Integrated" },
      ],
    },
    services: {
      tag: "Services",
      title: "Multidisciplinary Engineering Solutions",
      subtitle:
        "From architectural and structural analysis to MEP coordination and enterprise software solutions.",
      items: [
        {
          id: "mimari",
          title: "Architectural & Interior Design",
          desc: "We don't merely draw space; we code it with data. Creating architectural aesthetics into a flawless digital twin.",
          icon: "building",
          details: {
            title: "Architectural & Interior Services",
            subsections: [
              {
                name: "Superstructure Projects",
                bullets: [
                  "Residential: High-end residences, mass housing, villas",
                  "Commercial: Business centers, shopping complexes",
                  "Cultural: Theaters, sports complexes, educational institutions",
                  "Transportation: Intercity terminals, train stations, airport terminals",
                  "Healthcare: Hospitals, clinics, medical research facilities",
                ],
              },
            ],
          },
        },
        {
          id: "statik",
          title: "Structural (Static) Analysis",
          desc: "Coding the structural backbone with data; ensuring maximum seismic safety and cost efficiency through BIM.",
          icon: "activity",
          details: {
            title: "Structural Engineering & Analysis",
            subsections: [
              {
                name: "Structural Calculations",
                bullets: [
                  "Full seismic code compliant 3D models",
                  "Reinforced concrete, steel, and composite structures",
                  "Non-linear dynamic high-rise simulations",
                ],
              },
            ],
          },
        },
        {
          id: "mep",
          title: "Electromechanical (MEP) Coordination",
          desc: "Integrating mechanical and electrical systems digitally to eliminate on-site surprises and ensure smooth buildability.",
          icon: "layers",
          details: {
            title: "MEP Integration",
            subsections: [
              {
                name: "Zero-Clash MEP",
                bullets: ["HVAC layout design", "Plumbing and fire protection", "Navisworks clash detection & spool drawings"],
              },
            ],
          },
        },
        {
          id: "geoteknik",
          title: "Geotechnical & Soil Modeling",
          desc: "Simulating soil behavior by carrying lab data into digital models for secure and economical foundation designs.",
          icon: "mountain",
          details: {
            title: "Geotechnical Engineering",
            subsections: [
              {
                name: "Foundation & Soil Solutions",
                bullets: ["Soil simulation & 3D profiling", "Deep excavation & shoring limit equilibrium", "Geotechnical data reporting"],
              },
            ],
          },
        },
        {
          id: "gayrimenkul",
          title: "Real Estate & Agritech Vision",
          desc: "Empowering spatial design with financial intelligence; highest and best use (H&B Use) and agricultural master planning.",
          icon: "pie-chart",
          details: {
            title: "Spatial & Financial Valuation",
            subsections: [
              {
                name: "H&B Use & Feasibility",
                bullets: ["Highest & best use optimization", "Integrated facility financial planning", "Long-term agritech spatial vision"],
              },
            ],
          },
        },
        {
          id: "yazilim",
          title: "Software & Digital Transformation",
          desc: "Coding physical design with digital intelligence. Custom web identities, automation tools, and proprietary BIM software.",
          icon: "code",
          details: {
            title: "Software & Digital Solutions",
            subsections: [
              {
                name: "Digital Platforms",
                bullets: ["Enterprise web development", "Custom engineering automation systems", "BIM API integration & GIS"],
              },
            ],
          },
        },
      ],
    },
    tech: {
      tag: "Technology Stack & BIM Ecosystem",
      title: "Industry-Leading Engineering Software",
      subtitle:
        "Translating architectural and engineering ambition into digital reality using industry-benchmark software.",
      categories: [
        {
          name: "Architecture & BIM",
          badge: "Design & Coordination",
          tools: [
            { name: "Autodesk Revit", role: "BIM Modeling & Parametric Design", icon: "R" },
            { name: "AutoCAD", role: "2D/3D Technical Drafting", icon: "A" },
            { name: "Navisworks", role: "Multidisciplinary Clash Detection", icon: "N" },
            { name: "3ds Max", role: "High-Poly Modeling & CGI", icon: "3" },
          ],
        },
        {
          name: "Structural Analysis",
          badge: "Engineering & Safety",
          tools: [
            { name: "ideCAD", role: "BIM-Integrated Structural Design", icon: "ide" },
            { name: "SAP2000", role: "Finite Element & Dynamic Analysis", icon: "SAP" },
            { name: "ProtaStructure", role: "Multi-Storey Concrete Design", icon: "PS" },
            { name: "STA4CAD", role: "Seismic Design & Bill of Quantities", icon: "STA" },
            { name: "CSI ETABS", role: "Advanced High-Rise Analysis", icon: "CSI" },
          ],
        },
        {
          name: "Artificial Intelligence",
          badge: "Next-Gen Intelligence",
          tools: [
            { name: "ChatGPT & GPT-4o", role: "Workflow Automation & Scripting", icon: "AI" },
            { name: "Google Gemini", role: "Multimodal Data Analysis", icon: "G" },
            { name: "Anthropic Claude", role: "Technical Documentation & Synthesis", icon: "C" },
            { name: "AWS AI Cloud", role: "Cloud Scalability & High Compute", icon: "AWS" },
          ],
        },
        {
          name: "Software & Development",
          badge: "Digital Backbone",
          tools: [
            { name: "Python", role: "Data Science, Automation & BIM APIs", icon: "Py" },
            { name: "Java & Spring", role: "Enterprise Architecture", icon: "J" },
            { name: "Modern Web / React", role: "Interactive Cloud Dashboards", icon: "Web" },
          ],
        },
        {
          name: "3D Visualization",
          badge: "Photorealistic CGI",
          tools: [
            { name: "Lumion", role: "Real-time Architectural Animation", icon: "Lum" },
            { name: "Corona Renderer", role: "Photorealistic Lighting", icon: "Cor" },
            { name: "Chaos V-Ray", role: "Cinema-Grade Raytracing", icon: "VR" },
            { name: "SketchUp", role: "Rapid Concept Massing", icon: "SK" },
            { name: "Adobe Photoshop", role: "Post-Production", icon: "PS" },
          ],
        },
        {
          name: "Management & CDE",
          badge: "Collaboration",
          tools: [
            { name: "Microsoft 365", role: "Enterprise Documentation", icon: "MS" },
            { name: "Google Workspace", role: "Real-time Collaboration", icon: "GW" },
            { name: "BIM 360 CDE", role: "Common Data Environment", icon: "CDE" },
          ],
        },
      ],
    },
    whyUs: {
      tag: "Why TSigN?",
      title: "Why Partner With Us?",
      subtitle: "Transcending conventional methods with modern data modeling and engineering intelligence.",
      pillars: [
        {
          title: "Multidisciplinary Synergy",
          desc: "Our architects, structural engineers, MEP planners, and software engineers work in continuous synchronization.",
          icon: "layers",
        },
        {
          title: "BIM-Centric Precision",
          desc: "Eliminating multi-million currency site revision costs before the first shovel touches the ground.",
          icon: "shield-check",
        },
        {
          title: "Value Engineering",
          desc: "Blending aesthetics, seismic safety, and material efficiency to maximize investment returns.",
          icon: "trending-up",
        },
      ],
      stats: [
        { value: "100+", label: "Completed Projects" },
        { value: "50+", label: "Expert Professionals" },
        { value: "10+", label: "Years Experience" },
        { value: "99.4%", label: "Zero-Clash Delivery" },
      ],
      quote: "From design to reality, from idea to the future, we are by your side.",
    },
    projects: {
      tag: "Portfolio",
      title: "Featured Case Studies & Projects",
      subtitle: "A showcase of our architectural concepts, MEP coordination, and software implementations.",
      categories: ["All", "Architectural & Interior", "BIM & MEP Coordination", "Structural Analysis", "Software & Digital"],
      items: [
        {
          id: 1,
          title: "Contemporary Mixed-Use Residence",
          category: "Architectural & Interior",
          client: "Private Investment Group",
          location: "Ankara, Çankaya",
          area: "45,000 m²",
          year: "2025",
          image: "/designs/Projeler.png",
          cropArea: "top",
          description: "High-end residential complex designed with energy-efficient biophilic principles and full LOD 400 BIM model.",
          features: ["LOD 400 BIM Model", "Energy Efficiency Standards", "Integrated Spatial Layout"],
        },
        {
          id: 2,
          title: "Industrial Manufacturing Facility MEP",
          category: "BIM & MEP Coordination",
          client: "Industrial Investments Corp.",
          location: "Kocaeli OSB",
          area: "32,000 m²",
          year: "2024",
          image: "/designs/Projeler.png",
          cropArea: "mep",
          description: "HVAC, heavy process piping, and electrical cable trays coordinated with sub-millimeter precision in Navisworks.",
          features: ["1,400+ Clashes Resolved Early", "Spool Fabrication Drawings", "18% On-site Time Saved"],
        },
        {
          id: 3,
          title: "Seismic High-Rise Structural Analysis",
          category: "Structural Analysis",
          client: "Construction Development Group",
          location: "Istanbul, Maslak",
          area: "65,000 m²",
          year: "2025",
          image: "/designs/Projeler.png",
          cropArea: "clash",
          description: "Non-linear dynamic seismic calculations for a 36-storey mixed tower, optimizing rebar and concrete ratios.",
          features: ["ETABS & SAP2000 Solvers", "12% Rebar Material Savings", "Highest Safety Coefficient"],
        },
        {
          id: 4,
          title: "Enterprise BIM & Field Tracker Cloud",
          category: "Software & Digital",
          client: "TSigN Tech Solutions",
          location: "Cloud SaaS",
          area: "Enterprise SaaS",
          year: "2026",
          image: "/designs/Projeler.png",
          cropArea: "software",
          description: "Proprietary cloud platform connecting site engineers and headquarters with live BIM progress and cost auditing.",
          features: ["Real-time Sync", "Custom Executive Dashboards", "BIM REST APIs"],
        },
      ],
    },
    team: {
      tag: "Our Team",
      title: "Visionary & Experienced Leaders",
      subtitle: "Educated at top universities including METU (ODTÜ), driving industry standards forward.",
      members: [
        {
          name: "Serhat Tuncer",
          role: "Founder & Civil Engineer",
          school: "METU (ODTÜ) Civil Engineering",
          bio: "Over a decade of leadership in structural engineering, advanced BIM workflows, and large-scale infrastructure.",
          icon: "hard-hat",
        },
        {
          name: "Onur Tuncer",
          role: "Civil Engineer",
          school: "Civil Engineering",
          bio: "Expertise in geotechnical foundation design, structural resilience, and high-precision field supervision.",
          icon: "compass",
        },
        {
          name: "Merve Öztürk",
          role: "BIM Manager & Senior Architect",
          school: "METU (ODTÜ) Architecture",
          bio: "Specialist in LOD 400-500 standards, digital twin delivery, and cross-discipline clash resolution.",
          icon: "ruler",
        },
        {
          name: "Emre Kaplan",
          role: "Software & Expert Witness",
          school: "METU (ODTÜ) Computer Engineering",
          bio: "Expert in enterprise software architecture, AI integration, computational optimization, and data systems.",
          icon: "code",
        },
        {
          name: "Vedat Genç",
          role: "Interior Architect",
          school: "Dicle University Interior Architecture",
          bio: "Specializing in high-end spatial flow, FF&E specifications, and bespoke interior detailing.",
          icon: "layout",
        },
        {
          name: "Jinda Aslanhan",
          role: "Senior Architect",
          school: "Hasan Kalyoncu University Architecture",
          bio: "Leading superstructure concept development, sustainable architectural facades, and urban harmony.",
          icon: "building",
        },
      ],
    },
    academy: {
      tag: "TSigN Academy",
      title: "Educating the Next Generation of BIM & Engineering Leaders",
      subtitle: "Practical, project-driven hands-on curricula taught by METU graduates and industry specialists.",
      courses: [
        {
          title: "Hands-on Revit & BIM Masterclass",
          duration: "8 Weeks (64 Hours)",
          level: "Beginner to Advanced",
          topics: ["Architectural & Structural BIM", "Parametric Family Creation", "Navisworks Clash Management"],
          badge: "Popular",
        },
        {
          title: "Structural Design with SAP2000 & ideCAD",
          duration: "6 Weeks (48 Hours)",
          level: "Intermediate - Advanced",
          topics: ["Seismic Building Codes", "Dynamic Spectrum Analysis", "Rebar & Steel Calculations"],
          badge: "Engineering Track",
        },
        {
          title: "Python & AI Automation for Engineers",
          duration: "5 Weeks (30 Hours)",
          level: "All Levels",
          topics: ["Python Fundamentals", "Dynamo API Automation", "Engineering Data Mining & LLM Tools"],
          badge: "Next-Gen",
        },
        {
          title: "3ds Max, Corona & V-Ray Photorealistic CGI",
          duration: "6 Weeks (40 Hours)",
          level: "All Levels",
          topics: ["Lighting Physics & Shaders", "Interior / Exterior Scene Framing", "Photoshop Post-Production"],
          badge: "CGI Mastery",
        },
      ],
    },
    careers: {
      tag: "Careers",
      title: "Build the Future with TSigN",
      subtitle: "Join our ambitious team bridging engineering rigor and digital innovation.",
      openings: [
        {
          title: "Senior BIM / MEP Coordinator",
          location: "Ankara (YDA Center) / Hybrid",
          type: "Full-Time",
          desc: "Lead coordination on large-scale BIM projects with Revit and Navisworks.",
        },
        {
          title: "Structural Design Engineer",
          location: "Ankara / Full-Time",
          type: "Full-Time",
          desc: "Design and verify seismic compliant structures using SAP2000, ETABS, and ideCAD.",
        },
        {
          title: "Full-Stack Software Engineer",
          location: "Ankara / Remote",
          type: "Full-Time",
          desc: "Develop our next-generation engineering cloud portals and data automation engines.",
        },
        {
          title: "Internship Program (Architecture & Civil)",
          location: "Ankara (YDA Center)",
          type: "Internship",
          desc: "High-potential engineering and architecture students eager to learn real-world BIM.",
        },
      ],
    },
    contact: {
      tag: "Contact",
      title: "Let's Shape the Future Together",
      subtitle: "Contact us for your projects or stop by our YDA Center office for coffee.",
      addressTitle: "Office Location",
      address: "YDA Center, Kızılırmak Mah. Dumlupınar Blv. No:9, Çankaya / Ankara, Turkey",
      email: "info@tsign.com.tr",
      phone: "+90 (312) 219 00 00",
      hours: "Monday - Friday: 09:00 - 18:30",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        service: "Selected Service Area",
        message: "Tell us about your project requirements...",
        submit: "Submit / Request Quote",
        success: "Thank you! Your message has been sent. Our team will contact you shortly.",
      },
    },
  },
};
