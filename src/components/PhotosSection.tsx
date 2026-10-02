import React, { useState } from 'react'
import { Images, X, ChevronLeft, ChevronRight, Maximize2, ChevronDown, ChevronUp } from 'lucide-react'
import photo1 from '../assets/photos/photo_1.png'
import photo2 from '../assets/photos/photo_2.jpg'
import photo3 from '../assets/photos/photo_3.jpg'
import photo4 from '../assets/photos/photo_4.jpg'
import photo5 from '../assets/photos/photo_5.jpg'
import photo6 from '../assets/photos/photo_6.jpg'
import photo7 from '../assets/photos/photo_7.png'
import photo8 from '../assets/photos/photo_8.png'
import photo9 from '../assets/photos/photo_9.png'
import photo10 from '../assets/photos/photo_10.jpg'
import photo11 from '../assets/photos/photo_11.jpg'
import photo12 from '../assets/photos/photo_12.jpg'
import photo13 from '../assets/photos/photo_13.jpg'
import photo14 from '../assets/photos/photo_14.jpg'
import photo15 from '../assets/photos/photo_15.jpg'
import photo16 from '../assets/photos/photo_16.png'
import photo17 from '../assets/photos/photo_17.jpg'
import photo18 from '../assets/photos/photo_18.jpg'
import photo19 from '../assets/photos/photo_19.jpg'
import photo20 from '../assets/photos/photo_20.jpg'
import photo21 from '../assets/photos/photo_21.jpg'
import photo22 from '../assets/photos/photo_22.jpg'
import photo23 from '../assets/photos/photo_23.jpg'
import photo24 from '../assets/photos/photo_24.jpg'
import photo25 from '../assets/photos/photo_25.jpg'
import photo26 from '../assets/photos/photo_26.jpg'

interface PhotoItem {
  id: number
  src: string
  alt: string
  title: string
}

export const PhotosSection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const photos: PhotoItem[] = [
    {
      id: 1,
      src: photo1,
      alt: 'Advocate Dr. Ilapur Manik Yadav with Dignitaries and Legal Fraternity',
      title: 'Advocate Dr. Ilapur Manik Yadav with Dignitaries and Legal Fraternity'
    },
    {
      id: 2,
      src: photo2,
      alt: 'High Court Delegation & Warm Reception',
      title: 'High Court Delegation & Warm Reception'
    },
    {
      id: 3,
      src: photo3,
      alt: 'Court Premises Legal Assembly and Procession',
      title: 'Court Premises Legal Assembly and Procession'
    },
    {
      id: 4,
      src: photo4,
      alt: 'Public Greetings & Community Engagement',
      title: 'Public Greetings & Community Engagement'
    },
    {
      id: 5,
      src: photo5,
      alt: 'Legal Counsel Gathering & Media Interaction',
      title: 'Legal Counsel Gathering & Media Interaction'
    },
    {
      id: 6,
      src: photo6,
      alt: 'Advocates Legal Discussion and File Review',
      title: 'Advocates Legal Discussion and File Review'
    },
    {
      id: 7,
      src: photo7,
      alt: 'High Court Advocates Association at Judicial Chambers Entrance',
      title: 'High Court Advocates Association at Judicial Chambers Entrance'
    },
    {
      id: 8,
      src: photo8,
      alt: 'Felicitations and Warm Greetings with Legal Colleagues',
      title: 'Felicitations and Warm Greetings with Legal Colleagues'
    },
    {
      id: 9,
      src: photo9,
      alt: 'Honoring Advocate Dr. Manik Yadav at Ceremonial Gathering',
      title: 'Honoring Advocate Dr. Manik Yadav at Ceremonial Gathering'
    },
    {
      id: 10,
      src: photo10,
      alt: 'Community Assembly & Well-Wishers Gathering',
      title: 'Community Assembly & Well-Wishers Gathering'
    },
    {
      id: 11,
      src: photo11,
      alt: 'Bouquet Felicitation & Welcome Ceremony',
      title: 'Bouquet Felicitation & Welcome Ceremony'
    },
    {
      id: 12,
      src: photo12,
      alt: 'Advocate Dr. Ilapur Manik Yadav Addressing the Assembly',
      title: 'Advocate Dr. Ilapur Manik Yadav Addressing the Assembly'
    },
    {
      id: 13,
      src: photo13,
      alt: 'Public Leadership & Community Address',
      title: 'Public Leadership & Community Address'
    },
    {
      id: 14,
      src: photo14,
      alt: 'Award Presentation & Institutional Recognition',
      title: 'Award Presentation & Institutional Recognition'
    },
    {
      id: 15,
      src: photo15,
      alt: 'Certificate Presentation & Honors',
      title: 'Certificate Presentation & Honors'
    },
    {
      id: 16,
      src: photo16,
      alt: 'Press Coverage: High Court Advocate Dr. Ilapur Manik Yadav Demands Clarity on GO 97',
      title: 'Press Coverage: High Court Advocate Dr. Ilapur Manik Yadav Demands Clarity on GO 97'
    },
    {
      id: 17,
      src: photo17,
      alt: 'Meeting with Senior Political Dignitaries & Legal Counsel',
      title: 'Meeting with Senior Political Dignitaries & Legal Counsel'
    },
    {
      id: 18,
      src: photo18,
      alt: 'Community Leadership Delegation & Assembly',
      title: 'Community Leadership Delegation & Assembly'
    },
    {
      id: 19,
      src: photo19,
      alt: 'Keynote Panel Address at Public Convention',
      title: 'Keynote Panel Address at Public Convention'
    },
    {
      id: 20,
      src: photo20,
      alt: 'Press Conference & Media Briefing on Public Policy & Legal Rights',
      title: 'Press Conference & Media Briefing on Public Policy & Legal Rights'
    },
    {
      id: 21,
      src: photo21,
      alt: 'Public Delegation & Community Procession with Leadership',
      title: 'Public Delegation & Community Procession with Leadership'
    },
    {
      id: 22,
      src: photo22,
      alt: 'Ceremonial Shawl & Bouquet Felicitation with Dignitaries',
      title: 'Ceremonial Shawl & Bouquet Felicitation with Dignitaries'
    },
    {
      id: 23,
      src: photo23,
      alt: 'Cordial Reception & Discussion with Senior Leadership',
      title: 'Cordial Reception & Discussion with Senior Leadership'
    },
    {
      id: 24,
      src: photo24,
      alt: 'Honoring and Shawl Presentation at State Dignitary Meeting',
      title: 'Honoring and Shawl Presentation at State Dignitary Meeting'
    },
    {
      id: 25,
      src: photo25,
      alt: 'Telangana High Court Advocates Association Gathering & Tribute',
      title: 'Telangana High Court Advocates Association Gathering & Tribute'
    },
    {
      id: 26,
      src: photo26,
      alt: 'High Court Advocates Assembly & Commemoration Ceremony',
      title: 'High Court Advocates Assembly & Commemoration Ceremony'
    }
  ]

  const INITIAL_COUNT = 6
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT)

  const displayedPhotos = photos.slice(0, visibleCount)
  const hasMore = visibleCount < photos.length
  const remainingCount = photos.length - visibleCount
  const nextBatchCount = Math.min(6, remainingCount)

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, photos.length))
  }

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT)
    document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhotoIndex(null)
  }

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length)
    }
  }

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length)
    }
  }

  return (
    <section 
      id="photos" 
      className="scroll-mt-28 py-16 lg:py-24 bg-black text-white relative border-t border-neutral-800 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">
            <Images className="w-3.5 h-3.5" />
            <span>Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white">
            Photos
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mt-3" />
        </div>

        {/* 3 Photos Per Row Grid (No Hover Effects, Smooth Transitions) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ease-in-out">
          {displayedPhotos.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="relative rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-xl aspect-[4/3] cursor-pointer transition-opacity duration-500 animate-in fade-in fill-mode-both"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
              />

              {/* Subtle top-right zoom icon button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  openLightbox(index)
                }}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white/90 border border-white/15 backdrop-blur-sm shadow-md cursor-pointer"
                title="View Full Size"
                aria-label="Expand image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Incremental View More / Show Less Button */}
        <div className="text-center pt-4">
          {hasMore ? (
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-amber-400/60 font-sans text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg hover:shadow-amber-400/10 cursor-pointer"
            >
              <span>View More Photos (+{nextBatchCount})</span>
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </button>
          ) : photos.length > INITIAL_COUNT ? (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-amber-400/60 font-sans text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg hover:shadow-amber-400/10 cursor-pointer"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4 text-amber-400" />
            </button>
          ) : null}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-3 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Title & Close */}
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/80 px-1">
              <span className="text-xs sm:text-sm font-medium text-slate-300 truncate max-w-[80%]">
                Photo {selectedPhotoIndex + 1} of {photos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image in Lightbox */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].alt}
                className="w-full h-full object-contain"
              />

              {/* Prev / Next Navigation */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors backdrop-blur-sm cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors backdrop-blur-sm cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
