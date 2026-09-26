import React from 'react'
import { Newspaper, Calendar, ArrowUpRight } from 'lucide-react'

export const InTheNews: React.FC = () => {
  const articles = [
    {
      id: 1,
      source: 'Legal Era National Journal',
      date: 'August 2024',
      title: 'Digital Evidence in the New Bharatiya Sakshya Adhiniyam: A Critical Analysis',
      desc: 'Dr. Ilapur Manik Yadav examines the technical challenges of electronic certificate authentication and hash verification under contemporary criminal jurisprudence.',
      tag: 'Legal Analysis',
      readTime: '6 min read'
    },
    {
      id: 2,
      source: 'The Law Chronicle',
      date: 'May 2024',
      title: 'High Court Grants Urgent Protection in Landmark AI & Copyright Dispute',
      desc: 'Advocate Manik Yadav successfully argues before the High Court on jurisdictional boundaries and safe-harbor liabilities for tech platforms.',
      tag: 'Case Report',
      readTime: '4 min read'
    },
    {
      id: 3,
      source: 'Bar & Bench Digest',
      date: 'January 2024',
      title: 'Balancing Article 21 Rights with Preventive Detention Powers',
      desc: 'A constitutional treatise discussing the stringent procedural safeguards required prior to passing preventive detention and advisory board mandates.',
      tag: 'Constitutional Law',
      readTime: '8 min read'
    }
  ]

  return (
    <section id="news" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-700 text-xs tracking-[0.25em] font-bold uppercase mb-3">
              <Newspaper className="w-4 h-4" />
              <span>Media & Publications</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-wide">
              In The <span className="gold-text-gradient">News & Commentary</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Thought leadership, high-profile media mentions, and published scholarly articles on emerging legal doctrines.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">
                  {item.source}
                </p>

                <h3 className="font-cinzel text-lg font-bold text-slate-950 mb-3 group-hover:text-amber-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>{item.readTime}</span>
                <span className="inline-flex items-center gap-1 text-slate-950 font-bold group-hover:text-amber-700 group-hover:translate-x-1 transition-all">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
