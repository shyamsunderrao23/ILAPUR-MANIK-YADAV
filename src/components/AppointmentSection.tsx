import React, { useState } from 'react'
import { Award, FileText, CheckCircle2, Maximize2, X } from 'lucide-react'
import advocateStanding from '../assets/advocate_standing_transparent.png'
import appointmentLetter from '../assets/appointment_letter.png'
import dottedLoopArrow from '../assets/dotted_loop_arrow_clean.png'

export const AppointmentSection: React.FC = () => {
  const [letterModalOpen, setLetterModalOpen] = useState(false)

  return (
    <section 
      id="appointment" 
      className="py-16 lg:py-28 bg-white text-slate-900 relative border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1540px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Official State Appointment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans tracking-tight text-slate-950">
            Telangana Legal Student Association
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mt-3" />
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium pt-1 max-w-3xl mx-auto leading-relaxed">
            Honored and Appointed as the <strong className="text-slate-950 font-bold">Telangana State Working President</strong> for the welfare, democratic representation, and protection of legal students’ rights.
          </p>
        </div>

        {/* Main Content: Left Advocate + Center Wide Looping Dotted Arrow + Right Appointment Letter */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6 xl:gap-10 pt-4">
          
          {/* LEFT: Advocate Standing Image */}
          <div className="w-full lg:w-[400px] xl:w-[460px] flex flex-col items-center lg:items-end justify-center flex-shrink-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-full flex justify-center">
              <img
                src={advocateStanding}
                alt="Advocate Dr. Ilapur Manik Yadav - Telangana State Working President"
                className="w-full h-auto max-h-[680px] object-contain filter drop-shadow-2xl select-none"
              />
            </div>
            {/* Caption badge */}
            <div className="mt-4 text-center lg:text-right space-y-1 w-full">
              <h4 className="text-lg sm:text-xl font-bold text-slate-950 font-sans tracking-wide">
                Dr. Ilapur Manik Yadav
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-widest">
                Telangana State Working President (TLSA)
              </p>
            </div>
          </div>

          {/* CENTER: Exact Looping Dotted Arrow (Centered & Increased Width) */}
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 w-[240px] xl:w-[300px] self-center -my-8 z-20">
            <div className="w-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <img
                src={dottedLoopArrow}
                alt="Pointer arrow to appointment letter"
                className="w-full h-auto object-contain filter drop-shadow-md select-none opacity-95"
              />
            </div>
          </div>

          {/* Mobile Looping Dotted Arrow */}
          <div className="flex lg:hidden items-center justify-center my-2">
            <img
              src={dottedLoopArrow}
              alt="Pointer arrow"
              className="w-36 sm:w-44 h-auto object-contain opacity-95 transform rotate-90 my-1"
            />
          </div>

          {/* RIGHT: Appointment Letter Document Card */}
          <div className="w-full lg:w-[410px] xl:w-[460px] flex flex-col items-center lg:items-start justify-center flex-shrink-0">
            {/* Letter Frame */}
            <div 
              onClick={() => setLetterModalOpen(true)}
              className="group relative w-full max-w-[390px] sm:max-w-[420px] lg:max-w-full bg-white rounded-3xl border-2 border-slate-200 hover:border-amber-500/80 shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer p-4 sm:p-5 bg-gradient-to-b from-slate-50/80 via-white to-amber-50/20"
            >
              {/* Document preview header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                    <FileText className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900 tracking-wider uppercase">
                      Official Appointment Letter
                    </span>
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium">
                      Regd. No: 655/2024, TELANGANA
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Document Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner max-h-[460px] sm:max-h-[490px] lg:max-h-[510px] aspect-[1/1.32] flex items-center justify-center">
                <img
                  src={appointmentLetter}
                  alt="Telangana Legal Student Association Appointment Letter - Mr. Ilapur Manik Yadav"
                  className="w-full h-full object-contain object-top"
                />

                {/* Click to expand overlay button */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/75 hover:bg-slate-950 text-white backdrop-blur-md transition-all shadow-lg cursor-pointer">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Document footer meta */}
              <div className="pt-3 text-center">
                <span className="inline-flex items-center gap-1 text-xs text-slate-600 font-semibold group-hover:text-amber-700 transition-colors">
                  <span>Click to view full letter in high resolution</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Full Resolution Appointment Letter Lightbox Modal */}
      {letterModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLetterModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4 max-h-[94vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-amber-600" />
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-950">
                  TLSA Appointment Letter &mdash; Mr. Ilapur Manik Yadav (State Working President)
                </h3>
              </div>
              <button
                onClick={() => setLetterModalOpen(false)}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close document modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto rounded-2xl border border-slate-200 flex justify-center bg-slate-50 p-3 sm:p-4">
              <img
                src={appointmentLetter}
                alt="TLSA Appointment Letter Full View"
                className="w-full max-w-[720px] h-auto object-contain shadow-md rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
