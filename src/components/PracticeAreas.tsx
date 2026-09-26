import React from 'react'
import { 
  ShieldCheck, 
  Scale, 
  FileText, 
  Cpu, 
  Building2, 
  Landmark, 
  Award
} from 'lucide-react'
import advocateConstitutionImg from '../assets/advocate_holding_constitution.png'

export const PracticeAreas: React.FC = () => {
  const leftAreas = [
    {
      id: 'constitutional-writs',
      title: 'High Court Writs & Constitutional Law',
      tag: 'Articles 226 & 227',
      icon: Landmark,
      description: 'Challenging arbitrary state action, administrative overreach, tender cancellations, and enforcing fundamental rights with urgent interim stays.'
    },
    {
      id: 'criminal-defense',
      title: 'Criminal Defence & Bail Jurisprudence',
      tag: 'BNSS / CrPC & High Court',
      icon: ShieldCheck,
      description: 'Strategic pre-arrest protection, regular bail, and quashing of unwarranted FIRs and charge sheets under Section 482 CrPC / BNSS.'
    },
    {
      id: 'cyber-law',
      title: 'Cyber Law, IT & Digital Forensics',
      tag: 'Ph.D. & M.Tech Mastery',
      icon: Cpu,
      description: 'Leveraging doctorate-level mastery in cyber law to challenge digital evidence admissibility under Section 65B BSA, data breaches, and cyber fraud.'
    }
  ]

  const rightAreas = [
    {
      id: 'corporate-litigation',
      title: 'Corporate & Commercial Disputes',
      tag: 'NCLT & Commercial Courts',
      icon: Building2,
      description: 'Litigation and representation in company disputes, insolvency proceedings, contractual breaches, and debt recovery.'
    },
    {
      id: 'property-civil',
      title: 'Civil, Property & Real Estate Law',
      tag: 'Title & Partition Suits',
      icon: FileText,
      description: 'Resolving high-stake title claims, family partition disputes, specific performance suits, and High Court regular first/second appeals.'
    },
    {
      id: 'arbitration',
      title: 'Arbitration & Alternate Dispute Resolution',
      tag: 'Domestic & International ADR',
      icon: Scale,
      description: 'Counsel for domestic and institutional arbitrations, including Section 9 pre-arbitral protective reliefs, Section 11 appointments, and award enforcement.'
    }
  ]

  return (
    <section id="practice-areas" className="relative z-20 py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-slate-950">
            Core Legal <span className="text-amber-800">Practice Areas</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Formidable courtroom advocacy, strategic judicial drafting, and specialized interdisciplinary mastery across constitutional, criminal, and civil domains.
          </p>
        </div>

        {/* 3-Column Open Layout: Left Items | Center Advocate Image | Right Items */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* SVG Dotted Looped Curved Lines with Arrows (Desktop Only) - Light Tone */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" 
            viewBox="0 0 1200 800" 
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              {/* Unified Forward Arrowhead (points in direction of travel: < on left, > on right) */}
              <marker id="arrow-head" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="9" markerHeight="9" orient="auto">
                <path d="M 0 1.5 L 11 6 L 0 10.5 L 3.5 6 z" fill="#94a3b8" />
              </marker>

              {/* Dot at origin on advocate image */}
              <marker id="dot-origin" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4.5" markerHeight="4.5">
                <circle cx="5" cy="5" r="3.5" fill="#94a3b8" />
              </marker>
            </defs>

            {/* 1. Top Left Looped Dotted Arrow */}
            <path 
              d="M 465 240 C 430 300, 360 280, 375 210 C 390 145, 450 160, 420 120 C 390 85, 345 95, 300 115" 
              stroke="#94a3b8" 
              strokeWidth="2.2" 
              strokeDasharray="0 11" 
              strokeLinecap="round"
              markerStart="url(#dot-origin)"
              markerEnd="url(#arrow-head)" 
            />

            {/* 2. Middle Left Looped Dotted Arrow */}
            <path 
              d="M 445 420 C 410 470, 350 450, 365 390 C 380 330, 440 345, 405 380 C 370 410, 340 395, 300 395" 
              stroke="#94a3b8" 
              strokeWidth="2.2" 
              strokeDasharray="0 11" 
              strokeLinecap="round"
              markerStart="url(#dot-origin)"
              markerEnd="url(#arrow-head)" 
            />

            {/* 3. Bottom Left Looped Dotted Arrow */}
            <path 
              d="M 455 580 C 420 530, 355 550, 370 610 C 385 675, 445 660, 415 700 C 380 735, 340 710, 300 680" 
              stroke="#94a3b8" 
              strokeWidth="2.2" 
              strokeDasharray="0 11" 
              strokeLinecap="round"
              markerStart="url(#dot-origin)"
              markerEnd="url(#arrow-head)" 
            />

            {/* 4. Top Right Looped Dotted Arrow */}
            <path 
              d="M 735 240 C 770 300, 840 280, 825 210 C 810 145, 750 160, 780 120 C 810 85, 855 95, 900 115" 
              stroke="#94a3b8" 
              strokeWidth="2.2" 
              strokeDasharray="0 11" 
              strokeLinecap="round"
              markerStart="url(#dot-origin)"
              markerEnd="url(#arrow-head)" 
            />

            {/* 5. Middle Right Looped Dotted Arrow */}
            <path 
              d="M 755 420 C 790 470, 850 450, 835 390 C 820 330, 760 345, 795 380 C 830 410, 860 395, 900 395" 
              stroke="#94a3b8" 
              strokeWidth="2.2" 
              strokeDasharray="0 11" 
              strokeLinecap="round"
              markerStart="url(#dot-origin)"
              markerEnd="url(#arrow-head)" 
            />

            {/* 6. Bottom Right Looped Dotted Arrow */}
            <path 
              d="M 745 580 C 780 530, 845 550, 830 610 C 815 675, 755 660, 785 700 C 820 735, 860 710, 900 680" 
              stroke="#94a3b8" 
              strokeWidth="2.2" 
              strokeDasharray="0 11" 
              strokeLinecap="round"
              markerStart="url(#dot-origin)"
              markerEnd="url(#arrow-head)" 
            />
          </svg>

          {/* LEFT COLUMN: Open Practice Area Blocks */}
          <div className="relative z-10 lg:col-span-3 xl:col-span-3 space-y-10 order-2 lg:order-1">
            {leftAreas.map((area) => {
              const Icon = area.icon
              return (
                <div key={area.id} className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-amber-100/70 text-amber-900">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-sans-clean">
                      {area.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-sans leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* CENTER COLUMN: Central Advocate Portrait with Constitution of India - Increased Size */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 text-center relative py-4 lg:py-0">
            <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[600px] flex flex-col items-center">
              
              {/* Full Advocate Portrait holding Constitution of India */}
              <div className="relative w-full flex items-center justify-center">
                <img 
                  src={advocateConstitutionImg} 
                  alt="Advocate Dr. Ilapur Manik Yadav holding Constitution of India" 
                  className="w-auto h-[520px] sm:h-[620px] lg:h-[720px] xl:h-[780px] max-w-full object-contain"
                />
              </div>

              {/* Bottom Details */}
              <div className="mt-4 w-full max-w-[360px] text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="font-bold text-slate-950 uppercase tracking-wider">Dr. Ilapur Manik Yadav</span>
                  <span className="text-amber-800 font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> 15+ Yrs Bar
                  </span>
                </div>
                <p className="text-[12px] text-slate-600">
                  Practising Advocate, High Court | Ph.D. in Cyber Jurisprudence | M.Tech | LL.M
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-block w-full mt-2 py-2.5 px-4 rounded-full bg-slate-950 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md text-center"
                >
                  Request Legal Consultation
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Open Practice Area Blocks */}
          <div className="relative z-10 lg:col-span-3 xl:col-span-3 space-y-10 order-3">
            {rightAreas.map((area) => {
              const Icon = area.icon
              return (
                <div key={area.id} className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-amber-100/70 text-amber-900">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-sans-clean">
                      {area.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 font-sans leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
