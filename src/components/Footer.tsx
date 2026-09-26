import React from 'react'
import { Mail, Phone, ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand & Profile */}
          <div className="space-y-4">
            <div>
              <span className="font-cinzel text-lg font-bold text-white tracking-[0.18em] uppercase block">
                ILAPUR MANIK YADAV
              </span>
              <span className="text-xs text-amber-400 font-semibold tracking-widest uppercase">
                Practising Advocate, High Court
              </span>
              <div className="text-[11px] text-slate-400 font-cinzel mt-1 tracking-wider">
                M.TECH • LL.M • PH.D.
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Committed to highest standards of legal representation, courtroom advocacy, and ethical jurisprudence across High Court and Appellate Tribunals.
            </p>
            <div className="flex items-center space-x-3 text-slate-300">
              <a href="mailto:contact@manikyadavlaw.com" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="tel:+919849012345" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-white tracking-[0.2em] uppercase mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium tracking-wide">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home & Overview</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Dr. Manik Yadav</a></li>
              <li><a href="#expertise" className="hover:text-amber-300 transition-colors">Practice Areas & Expertise</a></li>
              <li><a href="#judgments" className="hover:text-amber-300 transition-colors">Notable Judgments</a></li>
              <li><a href="#news" className="hover:text-amber-300 transition-colors">In The News & Publications</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact & Chamber Location</a></li>
            </ul>
          </div>

          {/* Col 3: Key Practice Areas */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-white tracking-[0.2em] uppercase mb-4">
              Primary Domains
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>High Court Writ Petitions (Art 226/227)</li>
              <li>Criminal Defence & Anticipatory Bail</li>
              <li>Cyber Law & Digital Forensics</li>
              <li>Commercial Litigation & Injunctions</li>
              <li>Civil & Real Estate Disputes</li>
              <li>Arbitration & Tribunal Matters</li>
            </ul>
          </div>

          {/* Col 4: Chamber Details */}
          <div>
            <h4 className="font-cinzel text-xs font-bold text-white tracking-[0.2em] uppercase mb-4">
              Chamber Timings
            </h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <p><strong>High Court:</strong><br />Monday – Friday: 10:30 AM – 4:30 PM</p>
              <p><strong>Evening Chamber:</strong><br />Monday – Saturday: 5:30 PM – 9:00 PM</p>
              <p className="text-amber-400 font-mono pt-1">
                <strong>Emergency Bail Line:</strong><br />(+91) 98490 12345
              </p>
            </div>
          </div>

        </div>

        {/* Bar Council Compliance Legal Disclaimer Box */}
        <div className="my-8 p-5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] leading-relaxed text-slate-400">
          <p className="font-semibold text-slate-300 uppercase tracking-wider mb-1">
            Disclaimer as per Bar Council of India Rules:
          </p>
          <p>
            This website is designed solely for informational purposes to provide general background information about Advocate Dr. Ilapur Manik Yadav. Under the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. By visiting this website, the user acknowledges that there has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever by Dr. Ilapur Manik Yadav or his chamber members to solicit any work through this website.
          </p>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4">
          <p>© {new Date().getFullYear()} Chamber of Dr. Ilapur Manik Yadav, Advocate High Court. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  )
}
