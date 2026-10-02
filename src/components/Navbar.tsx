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
    // { label: 'INSIGHTS', href: '#insights' }, // Temporarily hidden
    { label: 'VIDEOS', href: '#videos' },
    { label: 'PHOTOS', href: '#photos' },
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

          {/* Action Icons (Mail, Instagram, Search) */}
          <div className="flex items-center space-x-4 pl-4 border-l border-white/30 text-white">
            <a 
              href="mailto:contact@manikyadavlaw.com" 
              className="hover:opacity-75 transition-opacity p-1" 
              title="Email Chamber"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/dr_ilapur_manik_yadav/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-75 transition-opacity p-1" 
              title="Instagram Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
