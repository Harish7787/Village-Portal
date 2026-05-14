import { Bus, Shield, ChevronDown } from 'lucide-react'

const Hero = ({ lang, t }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white px-4"
    >

      {/* Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>

        <img
          src="https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover scale-105"
          alt="Village Background"
        />

      </div>

      {/* Content */}
      <div className="max-w-5xl z-10">

        <h1 className="text-6xl md:text-[8rem] font-black mb-6 tracking-tighter leading-none">

          {t.hero_title}

        </h1>

        <p className="text-xl md:text-3xl mb-12 text-orange-200 font-light max-w-3xl mx-auto leading-relaxed">

          {t.hero_subtitle}

        </p>

        <div className="flex flex-wrap gap-5 justify-center">

          <a
            href="#transport"
            className="bg-[#ea580c] hover:bg-orange-600 text-white px-10 py-5 rounded-3xl font-bold transition-all shadow-2xl shadow-orange-500/30 flex items-center gap-3 active:scale-95"
          >
            <Bus size={20} />

            {lang === 'gu'
              ? 'બસ ટાઇમ ચેક કરો'
              : 'Check Bus Timings'}
          </a>

          <a
            href="#nagarpalika"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/30 px-10 py-5 rounded-3xl font-bold transition-all flex items-center gap-3 active:scale-95"
          >
            <Shield size={20} />

            {lang === 'gu'
              ? 'ગામની સેવાઓ'
              : 'Village Services'}
          </a>

        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">

        <ChevronDown size={32} />

      </div>

    </section>
  )
}

export default Hero