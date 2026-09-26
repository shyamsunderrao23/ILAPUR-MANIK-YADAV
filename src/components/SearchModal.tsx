import React, { useState } from 'react'
import { Search, X, Scale, ArrowRight } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')

  if (!isOpen) return null

  const items = [
    { title: 'High Court Writ Petitions & Article 226 Procedures', section: 'Insights & Articles', link: '#insights' },
    { title: 'Quashing of FIR under Section 482 CrPC / BNSS', section: 'Legal Explainers', link: '#insights' },
    { title: 'Digital Evidence Admissibility & Section 63 BSA', section: 'Articles', link: '#insights' },
    { title: 'Anticipatory Bail Jurisprudence & Precedents', section: 'Judgments & Updates', link: '#insights' },
    { title: 'Consultation Requirements & Fee Structure (FAQs)', section: 'FAQs & Guidance', link: '#faqs' },
    { title: 'Commercial Injunctions & Arbitration Enforcement', section: 'Practice Areas', link: '#practice-areas' },
    { title: 'Chamber Location & High Court Consultation Timings', section: 'Contact', link: '#contact' },
  ]

  const filtered = query.trim() === ''
    ? items
    : items.filter(i => i.title.toLowerCase().includes(query.toLowerCase()) || i.section.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl overflow-hidden text-slate-900">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-4">
          <Search className="w-5 h-5 text-amber-700" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search judgments, practice areas, or articles..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-900 p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Suggested Topics & Practice Sections
          </p>
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-amber-700">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-amber-800">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-amber-700 uppercase tracking-widest font-bold">
                      {item.section}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))
          ) : (
            <p className="text-xs text-slate-500 py-6 text-center">
              No matching records found for "{query}".
            </p>
          )}
        </div>

      </div>
    </div>
  )
}
