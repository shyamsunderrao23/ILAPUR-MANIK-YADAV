import React from 'react'
import ladyJusticeImg from '../assets/lady_justice_transparent.png'
import judgeGavelImg from '../assets/judge_gavel_transparent.png'

export const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-16 lg:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* 2-Column Open Layout: Left Block (Vision) | Right Block (Mission) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* OPEN BLOCK 1: OUR VISION */}
          <div className="flex flex-col justify-between space-y-6">

            {/* Content: Title + Description + Lady Justice Image */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center flex-1 py-2">
              
              {/* Text Area */}
              <div className="sm:col-span-7 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
                  Our Vision
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To be a premier, globally recognized legal chamber pioneering transformative constitutional advocacy, cutting-edge cyber jurisprudence, and uncompromising excellence in justice delivery.
                </p>
              </div>

              {/* Image: Lady Justice Statue */}
              <div className="sm:col-span-5 flex justify-center sm:justify-end items-center">
                <img 
                  src={ladyJusticeImg} 
                  alt="Lady Justice - Our Vision" 
                  className="w-full max-w-[200px] sm:max-w-[240px] max-h-[280px] object-contain"
                />
              </div>

            </div>

            {/* Bottom Underline */}
            <div className="w-full h-[1.5px] bg-slate-300 mt-4" />

          </div>

          {/* OPEN BLOCK 2: OUR MISSION */}
          <div className="flex flex-col justify-between space-y-6">

            {/* Content: Title + Description + Judge's Gavel Image */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center flex-1 py-2">
              
              {/* Text Area */}
              <div className="sm:col-span-7 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To deliver innovative legal solutions tailored to meet the unique needs of our clients while upholding the highest standards of integrity, professionalism, and courtroom advocacy.
                </p>
              </div>

              {/* Image: Judge Gavel */}
              <div className="sm:col-span-5 flex justify-center sm:justify-end items-center">
                <img 
                  src={judgeGavelImg} 
                  alt="Judge's Gavel - Our Mission" 
                  className="w-full max-w-[200px] sm:max-w-[240px] max-h-[280px] object-contain"
                />
              </div>

            </div>

            {/* Bottom Underline */}
            <div className="w-full h-[1.5px] bg-slate-300 mt-4" />

          </div>

        </div>

      </div>
    </section>
  )
}
