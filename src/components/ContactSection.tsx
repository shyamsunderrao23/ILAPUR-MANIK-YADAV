import React, { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import advocateStanding from '../assets/advocate_standing.png'

export const ContactSection: React.FC = () => {
  const [agreed, setAgreed] = useState(false)
  const [countryCode, setCountryCode] = useState('+91')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: 'High Court Writs & Constitutional Law',
    message: ''
  })

  const getWhatsAppUrl = () => {
    const text = `*New Legal Consultation Request - Chamber of Dr. Ilapur Manik Yadav*\n\n` +
      `*Name:* ${formData.firstName} ${formData.lastName}\n` +
      `*Phone:* ${countryCode} ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Practice Area:* ${formData.practiceArea}\n` +
      `*Requirement:* ${formData.message}`

    return `https://wa.me/919652440024?text=${encodeURIComponent(text)}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const url = getWhatsAppUrl()
    window.location.href = url
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-slate-900">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Main Card (Matching Exact Reference Layout from Image 1) */}
        <div className="rounded-[32px] border border-slate-200/90 bg-white shadow-xl shadow-slate-100/80 p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Advocate Standing Photo (2nd Image) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <img 
                src={advocateStanding} 
                alt="Dr. Ilapur Manik Yadav - Advocate High Court" 
                className="w-full max-h-[620px] object-contain object-bottom"
              />
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 font-sans tracking-tight">
                  Get in touch
                </h2>
                <p className="text-slate-500 text-sm sm:text-[15px] mt-2 leading-relaxed">
                  Have questions? We're here to help. Contact us to discuss your legal needs.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 font-sans">Redirecting to WhatsApp...</h3>
                  <p className="text-sm text-slate-600">
                    Thank you, <strong>{formData.firstName}</strong>. Your consultation details for <strong>{formData.practiceArea}</strong> are being forwarded to Chamber WhatsApp.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase rounded-full transition-colors inline-flex items-center gap-2 shadow-sm"
                    >
                      Chat on WhatsApp (+91 9652440024)
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ firstName: '', lastName: '', email: '', phone: '', practiceArea: 'High Court Writs & Constitutional Law', message: '' })
                      }}
                      className="px-6 py-2.5 border border-slate-300 text-slate-700 text-xs font-bold uppercase rounded-full hover:bg-slate-100 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Name Fields (2 Columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 font-sans">
                        First name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:border-slate-950 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5 font-sans">
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:border-slate-950 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 font-sans">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:border-slate-950 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number with Country Code */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 font-sans">
                      Phone number
                    </label>
                    <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:border-slate-950 transition-colors">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-slate-50 border-r border-slate-200 px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-700 focus:outline-none cursor-pointer"
                      >
                        <option value="+91">IN +91</option>
                        <option value="+1">US +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+971">UAE +971</option>
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Practice Areas Dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 font-sans">
                      Practice Area / Legal Domain
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:border-slate-950 focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="High Court Writs & Constitutional Law">High Court Writs & Constitutional Law (Articles 226 & 227)</option>
                      <option value="Criminal Defence & Bail Jurisprudence">Criminal Defence & Bail Jurisprudence (BNSS / CrPC)</option>
                      <option value="Cyber Law, IT & Digital Forensics">Cyber Law, IT & Digital Forensics (BSA & Tech)</option>
                      <option value="Corporate & Commercial Disputes">Corporate & Commercial Disputes (NCLT & Courts)</option>
                      <option value="Civil, Property & Real Estate Law">Civil, Property & Real Estate Law (Partition / Titles)</option>
                      <option value="Arbitration & Alternate Dispute Resolution">Arbitration & Alternate Dispute Resolution (ADR)</option>
                      <option value="General Legal Advisory & Consultation">General Legal Advisory & Consultation</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5 font-sans">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Briefly describe your legal requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:border-slate-950 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="flex items-center gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-950 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-slate-600 cursor-pointer">
                      You agree to our friendly <a href="#privacy" className="underline hover:text-slate-950 font-medium">privacy policy</a>.
                    </label>
                  </div>

                  {/* Submit Pill Button (Exact Black Pill Button with Circular Arrow from Reference) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-between px-6 py-3 rounded-full bg-[#18181b] hover:bg-black text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md cursor-pointer"
                    >
                      <span>Contact Us Today</span>
                      <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center ml-4">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>

        {/* Large "Let's work together" & Email Section (Exact Typography from Reference Image 1) */}
        <div className="text-center py-24 sm:py-32 space-y-2">
          <h2 className="font-cormorant italic text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-slate-900 tracking-tight leading-none font-normal">
            Let's work together
          </h2>
          <div className="pt-2">
            <a 
              href="mailto:hello@lwyer.com" 
              className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-slate-950 hover:text-amber-800 transition-colors tracking-tight font-normal inline-block"
            >
              hello@lwyer.com
            </a>
          </div>
        </div>

        {/* Footer Bar (Exact layout with Pill buttons from Reference Image 1) */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ILAPUR MANIK YADAV. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="mailto:contact@manikyadavlaw.com"
              className="px-4 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-900 text-[11px] font-medium transition-colors"
            >
              Email
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-900 text-[11px] font-medium transition-colors"
            >
              X
            </a>
            <a
              href="https://www.facebook.com/share/19BqWQMrLq/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-900 text-[11px] font-medium transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/dr_ilapur_manik_yadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-900 text-[11px] font-medium transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
