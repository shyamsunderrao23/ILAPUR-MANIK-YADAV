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
              <a href="mailto:contact@manikyadavlaw.com" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/share/19BqWQMrLq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/dr_ilapur_manik_yadav/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="tel:+919849012345" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-amber-400 transition-colors" title="Phone">
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
