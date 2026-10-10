import advocateHeroMain from '../assets/advocate_hero_main.png'

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-[calc(100vh-80px)] bg-black text-white flex flex-col justify-center overflow-hidden"
    >
      {/* Hero Content: Left Name/Details & Right Advocate Portrait */}
      <div className="relative z-10 w-full max-w-[1480px] mx-auto px-6 md:px-12 lg:px-14 flex items-center pt-8 sm:pt-12 md:pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full">
          
          {/* Left Hero Details Box */}
          <div className="lg:col-span-6 text-left space-y-5 sm:space-y-6 z-10 py-6 pr-0 lg:pr-4">
            
            {/* Subtitle */}
            <p className="text-white text-sm sm:text-base md:text-[17px] font-medium tracking-[0.24em] uppercase font-sans-clean">
              Practising Advocate, High Court
            </p>

            {/* Main Name Heading (Grand, Prominent 2-Line Typography) */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[68px] 2xl:text-[76px] font-extrabold uppercase tracking-[0.04em] font-sans leading-[1.06]">
              <span className="block">DR. ILAPUR</span>
              <span className="block">MANIK YADAV</span>
            </h1>

            {/* Academic Qualifications */}
            <p className="text-amber-300 text-sm sm:text-base md:text-[17px] font-semibold tracking-[0.28em] uppercase font-sans-clean pt-0.5">
              M.TECH &nbsp;|&nbsp; LL.M &nbsp;|&nbsp; PH.D.
            </p>

            {/* Contact Phone */}
            <div className="pt-1 pb-2">
              <a 
                href="tel:+918555015409" 
                className="text-white hover:text-amber-300 text-xl sm:text-2xl md:text-[26px] font-sans tracking-[0.12em] transition-colors font-medium"
              >
                (+91) 85550 15409
              </a>
            </div>

            {/* Free Consultation Button */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-9 py-4.5 bg-white text-slate-950 font-sans-clean text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.2em] uppercase hover:bg-slate-200 transition-colors cursor-pointer inline-block shadow-none text-center"
              >
                FREE CONSULTATION
              </a>
            </div>

          </div>

          {/* Right Advocate Half-Body Portrait Image (Bigger & Grand Presence) */}
          <div className="lg:col-span-6 flex items-center lg:items-end justify-center lg:justify-end transform translate-y-0 sm:translate-y-2 lg:translate-y-4">
            <img 
              src={advocateHeroMain} 
              alt="Dr. Ilapur Manik Yadav - Practising Advocate, High Court" 
              className="w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[700px] xl:max-w-[780px] 2xl:max-w-[840px] max-h-[820px] xl:max-h-[900px] object-contain object-bottom filter drop-shadow-2xl transition-transform duration-300 origin-bottom"
            />
          </div>

        </div>
      </div>

      {/* Full-Width Legal Practice Areas Strip */}
      <div className="relative z-20 w-full bg-black/95 border-t border-white/10 py-5 sm:py-6 px-4 sm:px-6 md:px-12 mt-auto">
        <div className="max-w-[1560px] mx-auto flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 md:gap-x-5 gap-y-2.5 sm:gap-y-3 text-center text-xs sm:text-sm md:text-[15px] lg:text-[16px] tracking-[0.12em] uppercase font-bold text-slate-100">
          <span className="hover:text-amber-300 transition-colors">Civil</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Criminal</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Property & Land Disputes</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Bail Matters</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Divorce & Family Matters</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Appeals & Revisions</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Writ Petitions</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">FIR Quashing</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Cheque Bounce Cases</span>
          <span className="text-amber-400 font-bold select-none">|</span>
          <span className="hover:text-amber-300 transition-colors">Injunction & Declaration Suits</span>
        </div>
      </div>
    </section>
  )
}
