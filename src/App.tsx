import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PracticeAreas } from './components/PracticeAreas'
import { VisionMission } from './components/VisionMission'
import { CoreValuesExpertise } from './components/CoreValuesExpertise'
import { InsightsSection } from './components/InsightsSection'
import { FAQSection } from './components/FAQSection'
import { ContactSection } from './components/ContactSection'
import { ConsultationModal } from './components/ConsultationModal'
import { SearchModal } from './components/SearchModal'

function App() {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Navbar */}
      <Navbar 
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        {/* Unified Hero Section (Left Details + Right Seated Image + Bottom About Narrative) */}
        <Hero />

        {/* Practice Areas Section with Center Advocate holding Constitution */}
        <PracticeAreas />

        {/* Vision & Mission Section matching reference */}
        <VisionMission />

        {/* Core Values & Legal Expertise Section matching reference */}
        <CoreValuesExpertise />

        {/* Legal Insights Section (Pure Black Background) */}
        <InsightsSection />

        {/* FAQs Section (Placed above Get in Touch / Contact) */}
        <FAQSection />

        {/* Contact Us Section matching Reference */}
        <ContactSection />
      </main>

      {/* Interactive Modals */}
      <ConsultationModal 
        isOpen={consultationOpen} 
        onClose={() => setConsultationOpen(false)} 
      />

      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </div>
  )
}

export default App
