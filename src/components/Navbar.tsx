import React, { useState, useEffect } from 'react'
import { Mail, Search, Menu, X } from 'lucide-react'

interface NavbarProps {
  onOpenSearch: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PRACTICE AREAS', href: '#practice-areas' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'VIDEOS', href: '#videos' },
    { label: 'FAQS', href: '#faqs' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <header 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
        isScrolled 
          ? 'py-3.5 bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'py-5 bg-gradient-to-b from-black/95 via-black/80 to-black/40 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo (Exact clean uppercase styling from Image 1: PAGE LAW) */}
        <a 
          href="#home" 
          className="flex items-center tracking-[0.22em] transition-opacity hover:opacity-90"
        >
          <span className="font-sans font-bold text-xl md:text-2xl uppercase tracking-[0.2em] text-white">
            ILAPUR MANIK YADAV
          </span>
        </a>

        {/* Desktop Menu Navigation (Exact layout from reference) */}
        <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
          <nav className="flex items-center space-x-4 xl:space-x-6 text-[11px] xl:text-[12px] font-semibold tracking-[0.15em] xl:tracking-[0.18em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-200 hover:text-white transition-colors duration-200 uppercase whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Icons (Mail, LinkedIn, Search from Reference) */}
          <div className="flex items-center space-x-4 pl-4 border-l border-white/30 text-white">
            <a 
              href="mailto:contact@manikyadavlaw.com" 
              className="hover:opacity-75 transition-opacity p-1" 
              title="Email Chamber"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-75 transition-opacity p-1" 
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <button 
              onClick={onOpenSearch}
              className="hover:opacity-75 transition-opacity p-1 cursor-pointer" 
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-[11px] font-bold tracking-wider px-3 py-1.5 uppercase bg-white text-black rounded"
          >
            Consult
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14]/98 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl mt-4">
          <nav className="flex flex-col space-y-3.5 text-xs font-bold tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-white py-1 transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-slate-300">
              <a href="mailto:contact@manikyadavlaw.com">
                <Mail className="w-5 h-5" />
              </a>
              <button onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}>
                <Search className="w-5 h-5" />
              </button>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-xs font-bold px-4 py-2 bg-white text-slate-950 uppercase tracking-wider rounded"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
