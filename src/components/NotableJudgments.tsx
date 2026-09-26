import React, { useState } from 'react'
import { Scale, Calendar, BookmarkCheck } from 'lucide-react'

interface Judgment {
  id: string
  title: string
  citation: string
  bench: string
  year: string
  category: string
  summary: string
  outcome: string
}

export const NotableJudgments: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const judgments: Judgment[] = [
    {
      id: '1',
      title: 'Landmark High Court Stay on Arbitrary Tender Disqualification',
      citation: 'W.P. No. 14208 of 2023',
      bench: 'Hon’ble High Court Bench',
      year: '2023',
      category: 'Constitutional',
      summary: 'Argued successfully against state authority exclusion in a multi-crore infrastructure procurement tender. Established violation of Article 14 and principles of natural justice.',
      outcome: 'Quashed disqualification order and reinstated petitioner with full bidding rights.'
    },
    {
      id: '2',
      title: 'Quashing of Complex Multi-Jurisdictional Cyber Crime FIR',
      citation: 'Crl. P. No. 8914 of 2023',
      bench: 'Hon’ble High Court Criminal Bench',
      year: '2023',
      category: 'Cyber & Criminal',
      summary: 'Demonstrated complete absence of foundational electronic evidence compliance under Sec 65B and lack of territorial nexus, establishing malicious prosecution.',
      outcome: 'Entire criminal proceedings against corporate executives quashed in limine.'
    },
    {
      id: '3',
      title: 'Anticipatory Bail Secured in High-Stakes Financial Offense Matter',
      citation: 'Crl. M.P. No. 4521 of 2024',
      bench: 'Special Sessions Court',
      year: '2024',
      category: 'Criminal Defense',
      summary: 'Represented prominent director facing allegations under banking regulation statutes. Successfully argued absence of flight risk and complete cooperation with statutory authorities.',
      outcome: 'Granted pre-arrest bail with protective conditions against custodial detention.'
    },
    {
      id: '4',
      title: 'High Court Interim Injunction on Commercial Trademark Infringement',
      citation: 'C.S. No. 312 of 2024',
      bench: 'Commercial Division, High Court',
      year: '2024',
      category: 'Corporate & IP',
      summary: 'Secured urgent ad-interim ex-parte injunction restraining counterfeit manufacture and digital sale of proprietary technology products.',
      outcome: 'Restraining order granted within 24 hours of filing with local commissioner appointment.'
    }
  ]

  const categories = ['All', 'Constitutional', 'Criminal Defense', 'Cyber & Criminal', 'Corporate & IP']

  const filteredJudgments = activeCategory === 'All'
    ? judgments
    : judgments.filter(j => j.category.includes(activeCategory) || j.category === activeCategory)

  return (
    <section id="judgments" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-amber-700 text-xs tracking-[0.25em] font-bold uppercase mb-3">
            <Scale className="w-4 h-4" />
            <span>Courtroom Precedents</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-wide">
            Notable <span className="gold-text-gradient">Judgments & Orders</span>
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            A selection of representative judicial orders, landmark stays, and judgments argued before the High Court and subordinate judiciary.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Judgments Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJudgments.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3.5 py-1.5 rounded-md bg-amber-50 border border-amber-200 text-amber-800 font-mono text-xs font-bold">
                    {item.citation}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-slate-950 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mb-4">
                  {item.bench}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Outcome Highlight Box */}
              <div className="pt-5 border-t border-slate-100">
                <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <BookmarkCheck className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block">Relief Granted</span>
                    <span className="text-xs sm:text-sm text-emerald-800 leading-relaxed">{item.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
