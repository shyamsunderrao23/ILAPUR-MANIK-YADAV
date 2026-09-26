import React from 'react'
import { GraduationCap, Scale, CheckCircle2, ArrowRight, Gavel, Landmark } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3">
          <p className="text-amber-700 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-sans-clean flex items-center gap-2">
            <Scale className="w-4 h-4" />
            <span>Advocate Profile & Credentials</span>
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-slate-950 font-sans tracking-tight leading-[1.12]">
            Dedicated High Court Advocacy with Multi-Disciplinary Excellence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
            Combining extensive courtroom litigation experience with advanced academic credentials in Law and Technology (<strong>M.Tech | LL.M | Ph.D.</strong>) to deliver strategic legal solutions.
          </p>
        </div>

        {/* 3-Column Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Academic Pedigree */}
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 space-y-5 hover:shadow-md hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 font-sans">
              Academic Pedigree
            </h3>
            <div className="space-y-3 text-sm">
              <div className="border-l-2 border-amber-600 pl-3">
                <span className="font-bold text-slate-900 block font-sans">Ph.D. in Law & Technology</span>
                <span className="text-xs text-slate-600">Advanced doctoral research in Cyber Jurisprudence & Electronic Evidence</span>
              </div>
              <div className="border-l-2 border-slate-300 pl-3">
                <span className="font-bold text-slate-900 block font-sans">LL.M (Master of Laws)</span>
                <span className="text-xs text-slate-600">Constitutional Litigation & Criminal Law specializations</span>
              </div>
              <div className="border-l-2 border-slate-300 pl-3">
                <span className="font-bold text-slate-900 block font-sans">M.Tech (Technology)</span>
                <span className="text-xs text-slate-600">Technical depth providing an edge in IT, cyber forensic & IP matters</span>
              </div>
            </div>
          </div>

          {/* Card 2: Courtroom Practice */}
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 space-y-5 hover:shadow-md hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
              <Gavel className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 font-sans">
              Courtroom Practice
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Regular appearance before the Hon’ble High Court benches, Appellate Tribunals, and Special Courts representing corporate institutions and private clients in high-stakes matters.
            </p>
            <div className="space-y-2 pt-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>High Court Writs (Article 226 / 227 Petitions)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Anticipatory & Regular Bail Jurisprudence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Section 482 Quashing & Criminal Defense</span>
              </div>
            </div>
          </div>

          {/* Card 3: Key Experience Numbers */}
          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-8 space-y-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 font-sans">
                Professional Record
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-slate-950 font-sans">15+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Years at Bar</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-amber-700 font-sans">500+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Court Matters</div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Member of the High Court Bar Association. Committed to uncompromising client confidentiality and ethical advocacy.
            </p>
          </div>

        </div>

        {/* Practice Areas Summary Grid */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-sans">
                Core Practice Areas
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                Strategic counsel across specialized judicial forums
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-800 hover:text-amber-950"
            >
              <span>Consult On Your Matter</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-slate-950 text-base mb-1.5">High Court Writs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mandamus, Certiorari, stay orders, service law disputes & government tender challenges.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-slate-950 text-base mb-1.5">Criminal Defense</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bail hearings, FIR quashing, ACB/ED economic offense defense, and trial representation.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-slate-950 text-base mb-1.5">Cyber & Tech Law</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sec 65B electronic evidence admissibility, data protection, cyber fraud & IP disputes.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h4 className="font-bold text-slate-950 text-base mb-1.5">Commercial & Arbitration</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contractual enforcement, shareholder disputes, NCLT insolvency & arbitral tribunals.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
