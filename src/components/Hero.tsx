import { Scale } from 'lucide-react'
import advocateSeated from '../assets/advocate_seated.png'

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden"
    >
      {/* 1. TOP ROW: Left Name/Details & Right Seated Advocate Portrait - Shifted Upwards */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-14 flex-1 flex items-center pt-16 sm:pt-20 pb-4 transform -translate-y-3 sm:-translate-y-6 md:-translate-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          
          {/* Left Hero Details Box */}
          <div className="lg:col-span-7 text-left space-y-4 z-10">
            
            {/* Subtitle */}
            <p className="text-white text-sm sm:text-base md:text-[17px] font-medium tracking-[0.24em] uppercase font-sans-clean">
              Practising Advocate, High Court
            </p>

            {/* Main Name Heading (Exact 2 lines matching Image 2) */}
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] font-bold uppercase tracking-[0.05em] font-sans leading-[1.08]">
              <span className="block whitespace-nowrap">ILAPUR MANIK</span>
              <span className="block">YADAV</span>
            </h1>

            {/* Academic Qualifications */}
            <p className="text-amber-300 text-sm sm:text-base md:text-[16px] font-semibold tracking-[0.28em] uppercase font-sans-clean pt-0.5">
              M.TECH &nbsp;|&nbsp; LL.M &nbsp;|&nbsp; PH.D.
            </p>

            {/* Contact Phone */}
            <div className="pt-1 pb-3">
              <a 
                href="tel:+919849012345" 
                className="text-white hover:text-amber-300 text-lg sm:text-xl md:text-2xl font-sans tracking-[0.12em] transition-colors font-medium"
              >
                (+91) 98490 12345
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
                className="px-8 py-4 bg-white text-slate-950 font-sans-clean text-xs sm:text-sm md:text-[14px] font-bold tracking-[0.2em] uppercase hover:bg-slate-200 transition-colors cursor-pointer inline-block shadow-none text-center"
              >
                FREE CONSULTATION
              </a>
            </div>

          </div>

          {/* Right Seated Advocate Portrait Image - Shifted slightly upward */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end transform -translate-y-1 sm:-translate-y-2 md:-translate-y-3">
            <img 
              src={advocateSeated} 
              alt="Advocate Dr. Ilapur Manik Yadav - High Court" 
              className="w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[580px] max-h-[720px] object-contain object-bottom filter drop-shadow-2xl"
            />
          </div>

        </div>
      </div>

      {/* 2. BOTTOM ROW: Full Text Content About The Advocate - Shifted Upwards */}
      <div id="about" className="relative z-20 w-full bg-black pt-0 pb-12 lg:pb-16 -mt-6 sm:-mt-10 md:-mt-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 space-y-6 text-left">
          
          {/* Header Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <Scale className="w-4 h-4" />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-amber-400 font-sans-clean">
              About Advocate Dr. Ilapur Manik Yadav
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white font-sans leading-snug w-full max-w-6xl">
            Seasoned High Court Advocate combining premier courtroom advocacy with multi-disciplinary technological and legal mastery.
          </h3>

          {/* Two Full-Width Narrative Paragraphs */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base md:text-[17px] leading-relaxed w-full">
            
            {/* Paragraph 1 */}
            <p>
              With over <strong className="text-white font-semibold">15+ years of formidable practice at the High Court Bar</strong>, Dr. Ilapur Manik Yadav has built a distinguished reputation across trial courts, appellate tribunals, and the High Court. Over the course of his career, he has successfully represented and secured milestone relief in more than <strong className="text-white font-semibold">500+ court matters</strong>, specializing in High Court Constitutional Writ Petitions (Articles 226 & 227), Anticipatory and Regular Bail jurisprudence, FIR and charge sheet quashing under Section 482 CrPC / BNSS, corporate litigation, property partitions, and defense in complex economic and vigilance offenses.
            </p>

            {/* Paragraph 2 */}
            <p>
              Distinguished by a rare interdisciplinary academic foundation holding a <strong className="text-amber-300 font-semibold">Ph.D. in Cyber Jurisprudence & Law, a Master of Laws (LL.M) in Constitutional & Criminal Law, and a Master of Technology (M.Tech)</strong>, Dr. Manik Yadav brings unparalleled analytical precision to electronic evidence admissibility (Section 65B BSA), cybersecurity compliance, institutional arbitration, and commercial disputes. His practice is anchored in relentless courtroom preparation, strategic judicial navigation, and uncompromising dedication to advocate-client privilege.
            </p>

          </div>

        </div>
      </div>

    </section>
  )
}
