import React from 'react'
import { ShieldCheck, Award, Lightbulb, Users, Sparkles } from 'lucide-react'
import lawBooksGavelImg from '../assets/law_books_gavel_transparent.png'
import coreValuesImg from '../assets/core_values_integrity_excellence.png'

export const CoreValuesExpertise: React.FC = () => {
  const coreValues = [
    {
      title: 'Integrity',
      desc: 'We uphold the highest ethical standards.',
      icon: ShieldCheck
    },
    {
      title: 'Professionalism',
      desc: 'Delivering expert legal solutions.',
      icon: Award
    },
    {
      title: 'Innovation',
      desc: 'Embracing creativity in every case.',
      icon: Lightbulb
    },
    {
      title: 'Client-Centric',
      desc: 'Prioritizing your unique needs.',
      icon: Users
    },
    {
      title: 'Excellence',
      desc: 'Striving for unmatched quality.',
      icon: Sparkles
    }
  ]

  return (
    <section id="values-expertise" className="py-16 lg:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 2-Column Open Grid: Left (Our Core Values) | Right (Our Legal Expertise at Your Service) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT BLOCK: OUR CORE VALUES */}
          <div className="flex flex-col justify-between space-y-6">
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-sans tracking-tight">
                Our Core Values.
              </h2>
            </div>

            {/* Content: List of 5 Core Values + Integrity & Excellence Bowl Image */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 pt-2">
              
              {/* List */}
              <div className="space-y-4.5 flex-1 w-full">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-base sm:text-lg font-bold text-slate-950 font-sans leading-tight">
                      {val.title}:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core Values Image (Bowl with Integrity & Excellence) */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-end flex-shrink-0">
                <img 
                  src={coreValuesImg} 
                  alt="Our Core Values - Integrity and Excellence" 
                  className="w-56 sm:w-64 md:w-72 lg:w-80 max-w-full object-contain drop-shadow-lg transition-transform hover:scale-105 duration-300"
                />
              </div>

            </div>

            {/* Bottom Underline */}
            <div className="w-full h-[1.5px] bg-slate-300 mt-6" />

          </div>

          {/* RIGHT BLOCK: OUR LEGAL EXPERTISE AT YOUR SERVICE */}
          <div className="flex flex-col justify-between space-y-6">
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-sans tracking-tight">
                Our Legal Expertise at <br className="hidden sm:inline" />
                Your Service
              </h2>
            </div>

            {/* Interactive Diagram: Central Stack of Law Books & Gavel with 4 Connected Callouts & Pointer Lines */}
            <div className="relative w-full pt-2 pb-4">
              
              {/* Desktop/Tablet Diagram Layout (Hidden on very small mobile, visible sm+) */}
              <div className="relative hidden sm:block w-full min-h-[360px] md:min-h-[400px]">
                
                {/* SVG Pointer Lines Overlay */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                  viewBox="0 0 600 380" 
                  preserveAspectRatio="none"
                >
                  {/* Top-Left: Corporate Law -> Gavel */}
                  <circle cx="230" cy="55" r="3.5" fill="#0f172a" />
                  <path 
                    d="M 230 55 L 265 55 L 290 80" 
                    fill="none" 
                    stroke="#0f172a" 
                    strokeWidth="1.75" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Top-Right: Real Estate Law -> Gavel */}
                  <circle cx="370" cy="55" r="3.5" fill="#0f172a" />
                  <path 
                    d="M 370 55 L 335 55 L 310 80" 
                    fill="none" 
                    stroke="#0f172a" 
                    strokeWidth="1.75" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Bottom-Left: Books Corner -> Contracts & Agreements */}
                  <circle cx="160" cy="295" r="3.5" fill="#0f172a" />
                  <path 
                    d="M 225 240 L 195 295 L 160 295" 
                    fill="none" 
                    stroke="#0f172a" 
                    strokeWidth="1.75" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Bottom-Right: Books Corner -> Intellectual Property Law */}
                  <circle cx="440" cy="295" r="3.5" fill="#0f172a" />
                  <path 
                    d="M 375 240 L 405 295 L 440 295" 
                    fill="none" 
                    stroke="#0f172a" 
                    strokeWidth="1.75" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Center Image: Law Books Stack with Gavel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[260px] lg:w-[280px] z-0 flex justify-center items-center">
                  <img 
                    src={lawBooksGavelImg} 
                    alt="Legal Expertise - Law Books & Gavel" 
                    className="w-full object-contain drop-shadow-xl transition-transform hover:scale-105 duration-300"
                  />
                </div>

                {/* Top-Left Callout: Corporate Law */}
                <div className="absolute top-2 left-0 w-[35%] text-right pr-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 font-sans leading-tight">
                    Corporate Law
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug mt-1 max-w-[180px] ml-auto">
                    Guiding businesses with company formation, mergers, and regulatory compliance.
                  </p>
                </div>

                {/* Top-Right Callout: Real Estate Law */}
                <div className="absolute top-2 right-0 w-[35%] text-left pl-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 font-sans leading-tight">
                    Real Estate Law
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug mt-1 max-w-[180px]">
                    Expertise in property transactions, leasing agreements, and resolving disputes.
                  </p>
                </div>

                {/* Bottom-Left Callout: Contracts & Agreements */}
                <div className="absolute bottom-2 left-0 w-[42%] text-left pr-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 font-sans leading-tight">
                    Contracts & Agreements
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug mt-1 max-w-[200px]">
                    Drafting, reviewing, and negotiating contracts that protect your interests.
                  </p>
                </div>

                {/* Bottom-Right Callout: Intellectual Property Law */}
                <div className="absolute bottom-2 right-0 w-[42%] text-right pl-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-950 font-sans leading-tight">
                    Intellectual Property Law
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-snug mt-1 max-w-[200px] ml-auto">
                    Protecting your creative works and business identity with trademarks, copyrights, and patents.
                  </p>
                </div>

              </div>

              {/* Mobile Fallback Layout (< sm) */}
              <div className="sm:hidden space-y-6">
                <div className="flex justify-center py-2">
                  <img 
                    src={lawBooksGavelImg} 
                    alt="Legal Expertise - Law Books & Gavel" 
                    className="w-52 object-contain drop-shadow-lg"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-0.5 border-l-2 border-slate-900 pl-3">
                    <h4 className="text-sm font-bold text-slate-950 font-sans">Corporate Law</h4>
                    <p className="text-xs text-slate-600">Guiding businesses with company formation, mergers, and regulatory compliance.</p>
                  </div>
                  <div className="space-y-0.5 border-l-2 border-slate-900 pl-3">
                    <h4 className="text-sm font-bold text-slate-950 font-sans">Real Estate Law</h4>
                    <p className="text-xs text-slate-600">Expertise in property transactions, leasing agreements, and resolving disputes.</p>
                  </div>
                  <div className="space-y-0.5 border-l-2 border-slate-900 pl-3">
                    <h4 className="text-sm font-bold text-slate-950 font-sans">Contracts & Agreements</h4>
                    <p className="text-xs text-slate-600">Drafting, reviewing, and negotiating contracts that protect your interests.</p>
                  </div>
                  <div className="space-y-0.5 border-l-2 border-slate-900 pl-3">
                    <h4 className="text-sm font-bold text-slate-950 font-sans">Intellectual Property Law</h4>
                    <p className="text-xs text-slate-600">Protecting your creative works and business identity with trademarks, copyrights, and patents.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Underline */}
            <div className="w-full h-[1.5px] bg-slate-300 mt-6" />

          </div>

        </div>

      </div>
    </section>
  )
}
