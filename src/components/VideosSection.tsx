import React, { useState, useRef } from 'react'
import { Play, Maximize2 } from 'lucide-react'
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
  const [playingId, setPlayingId] = useState<string | null>(null)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const videoList: VideoItem[] = [
    { id: 'vid-1', src: video1 },
    { id: 'vid-2', src: video2 },
    { id: 'vid-3', src: video3 },
    { id: 'vid-4', src: video4 }
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
    <section id="videos" className="py-16 lg:py-24 bg-black text-white relative border-t border-neutral-800 overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white">
            Videos
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-3" />
        </div>

        {/* 4 Videos In A Single Line (Grid with 4 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {videoList.map((item) => {
            const isCurrentPlaying = playingId === item.id

            return (
              <div 
                key={item.id}
                className="group relative rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/60 shadow-xl overflow-hidden aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16] flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Video Player */}
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
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/75 hover:bg-amber-400 text-white hover:text-black border border-white/20 hover:border-amber-400 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-2xl cursor-pointer backdrop-blur-sm z-10"
                    aria-label="Play Video"
                  >
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </button>
                )}

                {/* Expand Modal Trigger */}
                <button
                  onClick={() => setActiveVideoModal(item.src)}
                  className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer opacity-80 hover:opacity-100"
                  title="Fullscreen View"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
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
