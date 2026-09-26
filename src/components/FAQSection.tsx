import React, { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, ArrowUpRight, PhoneCall } from 'lucide-react'

interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
  highlights?: string[]
}

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'Consultation & Procedure',
      question: 'What documents should I prepare for an initial legal consultation?',
      answer: 'For an effective assessment, please bring all relevant primary documents including copies of police complaints/FIRs, trial court orders, impugned government notices, agreements, revenue records (pattadar passbooks/registered sale deeds), and chronological timelines of events. In cyber and commercial disputes, having certified electronic correspondence (emails, transaction logs) will accelerate case formulation.',
      highlights: [
        'Chronological timeline of events & dispute background.',
        'Certified copies of FIR, charge sheet, or impugned administrative order.',
        'Primary contractual documents and registered title deeds.'
      ]
    },
    {
      id: 'faq-2',
      category: 'Criminal & Bail Law',
      question: 'How quickly can an urgent Anticipatory Bail or Quashing Petition be moved in the High Court?',
      answer: 'Urgent anticipatory bail applications (under Section 482 BNSS / Section 438 CrPC) and emergency stay/quashing petitions (under Section 528 BNSS / Section 482 CrPC) can typically be drafted, verified, filed, and mentioned before the Hon’ble High Court Bench within 24 to 48 hours, subject to statutory filing scrutiny and registry listing rules.',
      highlights: [
        'Emergency drafting & registry filing within 24–48 hours.',
        'Immediate mention before Vacation Bench or Regular Criminal Bench.',
        'Interim protection against coercive custodial action.'
      ]
    },
    {
      id: 'faq-3',
      category: 'Constitutional & High Court Writs',
      question: 'When should one file a High Court Writ Petition under Article 226 instead of a civil suit?',
      answer: 'A Writ Petition under Article 226 is filed against the State, government departments, statutory bodies, or municipal corporations for violation of fundamental rights, arbitrary administrative action, illegal demolition notices, or failure to perform statutory duties (Mandamus). Civil suits, by contrast, are filed before subordinate civil courts for private civil disputes between individual citizens or corporate entities.',
      highlights: [
        'Available against State authorities, statutory bodies, and government departments.',
        'Immediate interim injunctions against illegal executive overreach.',
        'Bypasses protracted trial court procedural delays in matters of administrative arbitrariness.'
      ]
    },
    {
      id: 'faq-4',
      category: 'Cyber Jurisprudence & Digital Evidence',
      question: 'How does Dr. Manik Yadav’s technological expertise assist in cybercrime and commercial trials?',
      answer: 'Holding a Ph.D. in Cyber Jurisprudence and an M.Tech alongside his LL.M, Dr. Manik Yadav brings deep forensic comprehension to digital trials. He specializes in scrutinizing electronic audit trails, cross-examining cyber forensics lab personnel, verifying cryptographic hash (SHA-256) integrity, and challenging uncertified digital extractions under Section 63 of Bharatiya Sakshya Adhiniyam (BSA) / Section 65B Evidence Act.',
      highlights: [
        'Forensic analysis of server logs, email headers, and mobile memory dumps.',
        'Rigorous compliance audit of Section 63 BSA electronic certificates.',
        'Strategic defense against manufactured or cherry-picked digital evidence.'
      ]
    },
    {
      id: 'faq-5',
      category: 'Ethics & Confidentiality',
      question: 'How is client confidentiality and advocate-client privilege safeguarded?',
      answer: 'All communications, case files, sensitive business proprietary data, and consultation disclosures are strictly protected under Section 126 of the Evidence Act / Section 132 Bharatiya Sakshya Adhiniyam. Absolute confidentiality is maintained across physical chamber files, encrypted communication channels, and legal advisory briefs.',
      highlights: [
        'Statutory advocate-client privilege protected under evidence law.',
        'End-to-end encrypted communication for digital case briefs.',
        'Strict non-disclosure standards maintained across all chamber staff.'
      ]
    },
    {
      id: 'faq-6',
      category: 'Jurisdiction & Multi-State Practice',
      question: 'Can Advocate Dr. Ilapur Manik Yadav represent clients in other High Courts and tribunals?',
      answer: 'Yes. While primarily based at the High Court Bar, Dr. Manik Yadav regularly represents corporate, institutional, and private clients before the Supreme Court of India, National Company Law Tribunal (NCLT), National Green Tribunal (NGT), Appellate Tribunal for Electricity (APTEL), and various High Courts across India.',
      highlights: [
        'Pan-India representation before Supreme Court, High Courts, and Central Tribunals.',
        'Specialized representation in Commercial Appellate Divisions and Arbitration Panels.',
        'Seamless virtual and physical hearing advocacy.'
      ]
    },
    {
      id: 'faq-7',
      category: 'Fee Structure & Retainers',
      question: 'How are legal fees, retainers, and litigation disbursements structured?',
      answer: 'Fee structures are established transparently based on case complexity, court jurisdiction (Trial Court, High Court, Supreme Court), anticipated hearings, and specialized research requirements. Options include per-appearance fees, composite stage-wise retainers (filing, interim argument, final hearing), and corporate advisory retainers.',
      highlights: [
        'Transparent written fee schedule provided prior to formal engagement.',
        'Stage-wise milestone billing for trial and appellate litigation.',
        'Customized monthly and annual retainer plans for corporate enterprises.'
      ]
    }
  ]

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-white text-slate-900 w-full overflow-hidden border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-left w-full">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-800 font-sans-clean">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 font-sans tracking-tight">
            Legal Guidance & FAQs.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg w-full font-normal leading-relaxed pt-1">
            Answers to common questions regarding High Court litigation, urgent bail procedures, constitutional writ remedies, fee structures, and confidential chamber consultations.
          </p>

          <div className="w-full h-[1.5px] bg-slate-200 mt-6" />
        </div>

        {/* FAQs Open Accordion List */}
        <div className="space-y-6 w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id
            return (
              <div 
                key={faq.id} 
                className={`w-full border-b border-slate-200 pb-6 transition-colors ${isOpen ? 'border-amber-600/60' : ''}`}
              >
                
                {/* Question Row (Clickable) */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-start justify-between gap-4 text-left py-2 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-amber-800 block">
                      {String(idx + 1).padStart(2, '0')}. {faq.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-950 group-hover:text-amber-800 transition-colors font-sans leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-lg border transition-all flex-shrink-0 mt-1 ${
                    isOpen 
                      ? 'bg-amber-100 text-amber-900 border-amber-300' 
                      : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:text-slate-950 group-hover:border-slate-300'
                  }`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer Body */}
                {isOpen && (
                  <div className="pt-4 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed pl-1 sm:pl-2 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>

                    {faq.highlights && (
                      <div className="pt-2 space-y-2 border-l-2 border-amber-600 pl-4 py-2 my-3 bg-amber-50/60 rounded-r-lg">
                        <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block">
                          Key Practice Takeaway:
                        </span>
                        <ul className="space-y-1.5">
                          {faq.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                              <span className="text-amber-800 font-bold">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

              </div>
            )
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="pt-6 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full border-t border-slate-200">
          <div className="space-y-1 text-left">
            <h4 className="text-lg sm:text-xl font-bold text-slate-950 font-sans">
              Have a Specific Legal Query Not Listed Here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Directly connect with the chamber of Advocate Dr. Ilapur Manik Yadav.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+919849012345"
              className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-950 font-sans-clean text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2 rounded border border-slate-300 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-700" />
              Call Chamber
            </a>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-7 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-sans-clean text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
