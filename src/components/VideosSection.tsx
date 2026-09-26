import React, { useState, useRef } from 'react'
import { Play, Pause, Maximize2, Video, Scale, ShieldCheck, Cpu, Building2 } from 'lucide-react'
import video1 from '../assets/vidoe-1.mp4'
import video2 from '../assets/video-2.mp4'
import video3 from '../assets/vidoe-3.mp4'
import video4 from '../assets/vidoe-4.mp4'

interface VideoItem {
  id: string
  title: string
  subtitle: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  src: string
  description: string
  tag: string
}

export const VideosSection: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const videoList: VideoItem[] = [
    {
      id: 'vid-1',
      title: 'High Court Constitutional Writ Jurisprudence',
      subtitle: 'Enforcing Fundamental Rights & Interim Stays under Articles 226 & 227',
      category: 'Constitutional Law',
      icon: Scale,
      src: video1,
      tag: 'High Court Practice',
      description: 'Comprehensive analysis on challenging arbitrary executive actions, tender violations, and securing emergent judicial relief at the High Court.'
    },
    {
      id: 'vid-2',
      title: 'Criminal Defence & Anticipatory Bail Jurisprudence',
      subtitle: 'Strategic Pre-Arrest Protection & Section 482 FIR Quashing',
      category: 'Criminal Defence',
      icon: ShieldCheck,
      src: video2,
      tag: 'BNSS & CrPC',
      description: 'Crucial courtroom strategies regarding the Triple Test in bail, anticipatory protection against arbitrary arrest, and quashing frivolous criminal proceedings.'
    },
    {
      id: 'vid-3',
      title: 'Cyber Law, IT Act & Digital Forensics Admissibility',
      subtitle: 'Masterclass on Electronic Records & Section 65B BSA Certificates',
      category: 'Cyber Jurisprudence',
      icon: Cpu,
      src: video3,
      tag: 'Ph.D. Tech Mastery',
      description: 'Doctorate-level deep-dive on electronic evidence authentication, chain-of-custody protocols, hash verification, and digital crime defense.'
    },
    {
      id: 'vid-4',
      title: 'Corporate Litigation & Commercial Dispute Resolution',
      subtitle: 'Arbitration Reliefs under Section 9 & High Stakes Company Law',
      category: 'Commercial Law',
      icon: Building2,
      src: video4,
      tag: 'ADR & Commercial Courts',
      description: 'Expert advocacy framework for commercial arbitration enforcement, shareholder disputes, interim protective measures, and contractual litigation.'
    }
  ]

  const handlePlayToggle = (id: string) => {
    const videoEl = videoRefs.current[id]
    if (!videoEl) return

    if (playingId === id) {
      videoEl.pause()
      setPlayingId(null)
    } else {
      // Pause any other playing video
      Object.keys(videoRefs.current).forEach((key) => {
        if (key !== id) {
          const el = videoRefs.current[key]
          if (el) el.pause()
        }
      })
      videoEl.play()
      setPlayingId(id)
    }
  }

  return (
    <section id="videos" className="py-20 lg:py-28 bg-[#09090b] text-white relative border-t border-neutral-800 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4 text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400 text-xs font-bold uppercase tracking-widest font-sans-clean">
            <Video className="w-4 h-4" />
            <span>Advocate Video Chamber & Lectures</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight">
            Courtroom Advocacy & <span className="text-amber-400">Legal Videos</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Watch Dr. Ilapur Manik Yadav break down complex constitutional writs, criminal bail jurisprudence, electronic evidence admissibility, and high-stake corporate disputes.
          </p>

          <div className="w-full h-[1.5px] bg-neutral-800 pt-2" />
        </div>

        {/* Video Grid (4 Videos - 2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {videoList.map((item) => {
            const Icon = item.icon
            const isCurrentPlaying = playingId === item.id

            return (
              <div 
                key={item.id}
                className="group rounded-3xl bg-neutral-900/90 border border-neutral-800/90 hover:border-amber-400/50 shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-amber-500/10"
              >
                {/* Video Media Container */}
                <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el
                    }}
                    src={item.src}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlayingId(item.id)}
                    onPause={() => {
                      if (playingId === item.id) setPlayingId(null)
                    }}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Overlay (Visible when paused) */}
                  {!isCurrentPlaying && (
                    <button
                      onClick={() => handlePlayToggle(item.id)}
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-black/70 hover:bg-amber-400 text-white hover:text-black border border-white/20 hover:border-amber-400 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer backdrop-blur-sm z-10"
                      aria-label="Play Video"
                    >
                      <Play className="w-7 h-7 ml-1 fill-current" />
                    </button>
                  )}

                  {/* Category Pill Badge on Video */}
                  <div className="absolute top-4 left-4 z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Modal Trigger */}
                  <button
                    onClick={() => setActiveVideoModal(item)}
                    className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Fullscreen Preview"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Video Meta & Description */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-amber-400/10 text-amber-400 border border-amber-400/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans-clean">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans leading-snug group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-slate-400 leading-snug">
                      {item.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Row */}
                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => handlePlayToggle(item.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      {isCurrentPlaying ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          <span>Pause Presentation</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Watch Lecture</span>
                        </>
                      )}
                    </button>

                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      Consult on this topic →
                    </a>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-sans-clean">
                  {activeVideoModal.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden">
              <video
                src={activeVideoModal.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-sm text-slate-300">
              {activeVideoModal.description}
            </p>
          </div>
        </div>
      )}

    </section>
  )
}
