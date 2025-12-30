import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* 1. GİRİŞ (HERO) BÖLÜMÜ */}
<section id="hakkimda" className="flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
  <div className="mb-6 px-4 py-1 border border-blue-500/30 bg-blue-500/10 rounded-full text-blue-400 text-sm animate-fade-in">
    Bursa'da Yaşayan Full-Stack Geliştirici
  </div>
  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent pb-2">
    Yusuf İslam Aras
  </h1>
  <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
    Uludağ Üniversitesi Bilgisayar Programcılığı mezunuyum. 
    <span className="text-slate-200"> .NET ekosistemi, React ve Next.js</span> kullanarak modern çözümler üretiyorum.
  </p>
  
  {/* BUTONLAR */}
  <div className="mt-10 flex flex-wrap justify-center gap-4">
    <a href="#projeler" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
      Projelerimi Gör
    </a>
    
    {/* CV İNDİR BUTONU */}
    <a 
      href="/yusuf-islam-aras-cv.pdf" 
      download 
      className="flex items-center gap-2 border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      CV'mi İndir
    </a>
  </div>
</section>

      {/* 2. PROJELER BÖLÜMÜ */}
      <section id="projeler" className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
          Projelerim
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Halı Saha Rezervasyon */}
          <div className="group bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 bg-emerald-400/10 rounded-full">Next.js + Supabase</span>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition">Halı Saha Rezervasyon Sistemi</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Kullanıcıların halı saha randevularını yönetebildiği, ödeme ve takvim entegrasyonuna sahip kapsamlı bir web uygulaması.
            </p>
          </div>

          {/* Lojistik ve Freelance */}
          <div className="group bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-blue-400 text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 bg-blue-400/10 rounded-full">.NET Core + SQL Server</span>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">Kurumsal & Lojistik Çözümleri</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Şahin Lojistik ve çeşitli fabrikalar için geliştirilmiş yönetim panelleri ve kurumsal web siteleri.
            </p>
          </div>

          {/* FlyBirdGame */}
          <div className="group bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-orange-500/50 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-orange-400 text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 bg-orange-400/10 rounded-full">C# & Unity</span>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-orange-400 transition">FlyBirdGame</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Mobil platformlar için geliştirilen, yüksek skor odaklı ve eğlenceli bir arcade oyunu.
            </p>
          </div>

          {/* CanimAilem .NET MAUI */}
          <div className="group bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <span className="text-purple-400 text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 bg-purple-400/10 rounded-full">.NET MAUI</span>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-purple-400 transition">CanimAilem App</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Modern mobil uygulama teknolojileri ile aile içi iletişimi hedefleyen kişisel bir mobil proje.
            </p>
          </div>
        </div>
      </section>
      {/* DENEYİM VE EĞİTİM ZAMAN ÇİZELGESİ */}
<section id="deneyim" className="max-w-4xl mx-auto py-20 px-4">
  <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
    <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
    Yolculuğum
  </h2>
  <div className="space-y-8 border-l-2 border-slate-800 ml-4 pl-8 relative">
    {/* Güncel: Freelance */}
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      <h3 className="text-xl font-bold text-white">Full-Stack Freelance Developer</h3>
      <p className="text-blue-400 text-sm mb-2">2025 - Günümüz</p>
      <ul className="text-slate-400 text-sm list-disc list-inside space-y-1">
        <li>Şahin Lojistik için kapsamlı kurumsal web çözümleri.</li>
        <li>Taksi ve transfer sektörü için 3 farklı web platformunun yeniden inşası.</li>
        <li>Fabrikalar için özel yönetim panelleri ve kurumsal kimlik çalışmaları.</li>
      </ul>
    </div>

    {/* Eğitim */}
    <div className="relative">
      <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-700"></div>
      <h3 className="text-xl font-bold text-white">Uludağ Üniversitesi</h3>
      <p className="text-slate-400 text-sm mb-2">Bilgisayar Programcılığı Mezunu</p>
      <p className="text-slate-500 text-sm italic">
        Yazılım geliştirme temelleri, veri yapıları ve ASP.NET ekosistemi üzerine uzmanlaşma.
      </p>
    </div>
  </div>
</section>
{/* HİZMETLER */}
<section className="bg-slate-900/20 py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center text-white">Neler Yapabilirim?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
        <h4 className="text-xl font-bold text-blue-400 mb-4">Web Geliştirme</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          ASP.NET Core MVC ve React kullanarak hızlı, güvenli ve SEO uyumlu kurumsal web siteleri geliştiriyorum.
        </p>
      </div>
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
        <h4 className="text-xl font-bold text-emerald-400 mb-4">SaaS & Rezervasyon</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          Next.js ve Supabase ile Halı Saha Rezervasyon Sistemi gibi kompleks iş mantığına sahip uygulamalar kurguluyorum.
        </p>
      </div>
      <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
        <h4 className="text-xl font-bold text-purple-400 mb-4">Mobil Çözümler</h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          .NET MAUI ile cross-platform mobil uygulamalar ve Unity ile eğlenceli arcade oyunlar tasarlıyorum.
        </p>
      </div>
    </div>
  </div>
</section>
{/* İLETİŞİM FORMU */}
<section id="iletisim" className="max-w-2xl mx-auto py-20 px-4 text-center">
  <h2 className="text-3xl font-bold mb-4 text-white">Bir Projen mi Var?</h2>
  <p className="text-slate-400 mb-10">Bursa'da veya uzaktan, projelerini hayata geçirmek için kahve eşliğinde konuşalım.</p>
  
  <form className="space-y-4 text-left">
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">Adın</label>
      <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition" placeholder="Yusuf İslam..." />
    </div>
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">E-posta Adresin</label>
      <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition" placeholder="ornek@mail.com" />
    </div>
    <div>
      <label className="block text-sm font-medium text-slate-400 mb-2">Mesajın</label>
      <textarea className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition h-32" placeholder="Halı saha projem için görüşmek istiyorum..."></textarea>
    </div>
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]">
      Mesaj Gönder
    </button>
  </form>
</section>
      {/* 3. YETENEKLER BÖLÜMÜ */}
      <section id="yetenekler" className="bg-slate-900/30 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Teknoloji Çantam</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["C#", "ASP.NET Core MVC", "ASP.NET Web API", "SQL Server", "React.js", "Next.js", "Supabase", "Tailwind CSS", ".NET MAUI"].map((skill) => (
              <span key={skill} className="px-6 py-3 bg-slate-800/50 rounded-2xl text-slate-300 border border-slate-700/50 hover:bg-slate-700 transition cursor-default shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

    {/* FOOTER - Güncellenmiş Hali */}
<footer className="py-20 text-center border-t border-slate-900">
  <div className="flex justify-center gap-6 mb-8">
    <a href="https://github.com/yusufislamaras" target="_blank" className="text-slate-400 hover:text-white transition">GitHub</a>
    <a href="https://www.linkedin.com/in/yusuf-islam-aras/" target="_blank" className="text-slate-400 hover:text-white transition">LinkedIn</a>
    <a href="mailto:yusufislamaras08@email.com" className="text-slate-400 hover:text-white transition">E-posta</a>
  </div>
  <p className="text-slate-500 text-sm">
    © 2025 Yusuf İslam Aras. Uludağ Üniversitesi Mezunu | Full-Stack Developer
  </p>
  <p className="text-slate-600 text-xs mt-2 italic">Bursa, Türkiye</p>
</footer>
    </main>
  );
}