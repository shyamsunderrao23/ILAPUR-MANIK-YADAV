import React, { useState } from 'react'
import { X, Phone, CheckCircle2, Shield } from 'lucide-react'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [booked, setBooked] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Criminal Defence / Urgent Bail',
    consultationType: 'In-Chamber (High Court Chambers)',
    preferredDate: '',
    notes: ''
  })

  if (!isOpen) return null

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setBooked(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-900">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-slate-950">Consultation Booked!</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your consultation request for <strong>{formData.category}</strong> has been logged. Dr. Ilapur Manik Yadav's chamber associate will call you shortly at <strong>{formData.phone}</strong>.
            </p>
            <button
              onClick={() => { setBooked(false); onClose(); }}
              className="mt-4 px-6 py-2.5 bg-slate-950 text-white font-bold uppercase text-xs tracking-wider rounded cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs uppercase tracking-widest font-bold mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Chamber Consultation</span>
            </div>
            
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-950 mb-2">
              Book Free Initial Case Assessment
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Connect directly with Dr. Ilapur Manik Yadav, Practising Advocate, High Court.
            </p>

            <form onSubmit={handleBooking} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98490 XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Meeting Mode
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:bg-white focus:outline-none"
                  >
                    <option>In-Chamber (High Court)</option>
                    <option>Virtual / Video Call (Zoom)</option>
                    <option>Urgent Tele-Conference</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Matter Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:bg-white focus:outline-none"
                >
                  <option>Criminal Defence / Urgent Bail</option>
                  <option>High Court Writ Petition / Stay</option>
                  <option>Cyber Forensics / Tech Litigation</option>
                  <option>Corporate & Commercial Dispute</option>
                  <option>Property & Real Estate Dispute</option>
                  <option>Other Legal Assistance</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Brief Matter Note
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any upcoming court hearing date or key urgency details..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-slate-900 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-slate-950 hover:bg-amber-700 text-white font-bold uppercase tracking-widest text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Confirm Free Consultation
                </button>
              </div>

              <div className="text-center">
                <a 
                  href="tel:+919849012345" 
                  className="text-xs text-amber-800 hover:underline inline-flex items-center gap-1.5 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Need immediate emergency bail? Call: (+91) 98490 12345
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}
