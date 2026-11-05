import { styles } from '../styles';
import { stats } from '../constants';
import { photo } from '../assets';

const handlePortraitError = (event) => {
  const fallback = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="800" viewBox="0 0 640 800">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#facc15" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="640" height="800" rx="32" fill="url(#bg)"/>
      <circle cx="320" cy="260" r="112" fill="#e2e8f0" fill-opacity="0.9"/>
      <path d="M200 620c28-108 104-162 120-162s92 54 120 162" fill="#f8fafc" fill-opacity="0.9"/>
      <text x="320" y="720" text-anchor="middle" font-size="34" font-family="Arial, sans-serif" fill="#0f172a" font-weight="700">ADITYA RAJ</text>
    </svg>
  `)}`;

  event.currentTarget.src = fallback;
  event.currentTarget.onerror = null;
};

const Hero = () => {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen w-full items-center overflow-hidden bg-[linear-gradient(135deg,#020817_0%,#0f172a_38%,#111827_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.15),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className={`${styles.paddingX} relative mx-auto grid w-full max-w-7xl gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center`}>
        <div className="max-w-3xl">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I’m <span className="text-yellow-400">Aditya Raj</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 max-w-2xl text-white/80`}>
            I build scalable, resilient systems for high-traffic products, combining backend architecture, cloud operations, and product-minded front-end execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-300 hover:text-yellow-300"
            >
              Let’s talk
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">6+</div>
              <div className="mt-1 text-sm text-slate-300">Years as a software engineer</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">45%</div>
              <div className="mt-1 text-sm text-slate-300">Avg. latency reduction</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">7</div>
              <div className="mt-1 text-sm text-slate-300">Products and enhancements delivered</div>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[420px] md:flex md:items-center md:justify-center">
          <div className="absolute h-[360px] w-[360px] rounded-full bg-yellow-400/15 blur-3xl" />
          <div className="absolute h-[440px] w-[300px] rounded-[32px] border border-white/10 bg-slate-900/60 shadow-[0_30px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl" />
          <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <img
              src={photo}
              alt="Aditya Raj portrait"
              onError={handlePortraitError}
              className="h-[360px] w-[280px] rounded-[22px] object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 justify-center">
        <a href="#about" className="flex h-[50px] w-[30px] items-start justify-center rounded-full border-2 border-white/30 p-2">
          <span className="mt-1 h-2.5 w-2.5 animate-bounce rounded-full bg-yellow-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;