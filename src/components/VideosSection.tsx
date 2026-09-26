import React, { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Maximize2 } from 'lucide-react'
import video1 from '../assets/vidoe-1.mp4'
import video2 from '../assets/video-2.mp4'
import video3 from '../assets/vidoe-3.mp4'
import video4 from '../assets/vidoe-4.mp4'

interface VideoItem {
  id: string
  src: string
}

export const VideosSection: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null)
  const [mutedStates, setMutedStates] = useState<{ [key: string]: boolean }>({
    'vid-1': true,
    'vid-2': true,
    'vid-3': true,
    'vid-4': true,
  })

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const videoList: VideoItem[] = [
    { id: 'vid-1', src: video1 },
    { id: 'vid-2', src: video2 },
    { id: 'vid-3', src: video3 },
    { id: 'vid-4', src: video4 }
  ]

  // Ensure all videos play on mount
  useEffect(() => {
    Object.values(videoRefs.current).forEach((videoEl) => {
      if (videoEl) {
        videoEl.muted = true
        videoEl.play().catch(() => {
          // Autoplay fallback
        })
      }
    })
  }, [])

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const currentMuted = mutedStates[id]
    const targetMuted = !currentMuted

    setMutedStates((prev) => {
      const next = { ...prev }
      if (!targetMuted) {
        // If unmuting this video, mute all other videos
        Object.keys(next).forEach((key) => {
          next[key] = key === id ? false : true
          const el = videoRefs.current[key]
          if (el) {
            el.muted = key === id ? false : true
          }
        })
      } else {
        next[id] = true
        const el = videoRefs.current[id]
        if (el) el.muted = true
      }
      return next
    })
  }

  return (
    <section 
      id="videos" 
      className="scroll-mt-28 py-16 lg:py-24 bg-black text-white relative border-t border-neutral-800 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white">
            Videos
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Autoplay Videos In A Single Line (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {videoList.map((item) => {
            const isMuted = mutedStates[item.id] ?? true

            return (
              <div 
                key={item.id}
                className="group relative rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/60 shadow-xl overflow-hidden aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16] flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
              >
                {/* Autoplaying Looped Video */}
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el
                  }}
                  src={item.src}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover pointer-events-none"
                />

                {/* Top Right Fullscreen Button */}
                <button
                  onClick={() => setActiveVideoModal(item.src)}
                  className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white border border-white/15 transition-all cursor-pointer backdrop-blur-sm shadow-md"
                  title="Fullscreen View"
                  aria-label="Expand video"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Mute / Unmute Button Overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    onClick={(e) => toggleMute(item.id, e)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer font-sans text-xs font-semibold ${
                      !isMuted
                        ? 'bg-amber-400 text-black shadow-amber-400/30'
                        : 'bg-black/70 hover:bg-black/90 text-white border border-white/20'
                    }`}
                    title={isMuted ? 'Click to unmute' : 'Click to mute'}
                    aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-4 h-4 text-white/90" />
                        <span className="hidden group-hover:inline">Unmute</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4 text-black animate-pulse" />
                        <span>Sound On</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            )
          })}
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-end">
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden">
              <video
                src={activeVideoModal}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
