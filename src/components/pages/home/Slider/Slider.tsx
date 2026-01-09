'use client'

import { useState } from 'react'
import { SLIDES } from '@/components/pages/home/Slider/slides.data'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import cn from 'clsx'

export const Slider = () => {
  const [activeSlideId, setActiveSlideId] = useState(1)

  // TODO: Slider animation

  return (
    <div className="relative">
      {SLIDES.map((slide) => (
        <div
          key={slide.id}
          className={cn(
            slide.id === activeSlideId ? 'block' : 'hidden',
            'rounded-3xl overflow-hidden my-2',
          )}
        >
          <Image
            src={slide.image}
            width={1500}
            height={300}
            alt=""
            className="w-full"
          />
        </div>
      ))}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
        <button
          className="bg-white/50  transition hover:bg-white/75 text-black font-bold p-2.5 rounded-lg"
          onClick={() => setActiveSlideId(
            activeSlideId === 1 ? SLIDES.length : activeSlideId - 1,
          )}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="bg-white/50  transition hover:bg-white/75 text-black font-bold p-2.5 rounded-lg"
          onClick={() => setActiveSlideId(
            activeSlideId === SLIDES.length ? 1 : activeSlideId + 1,
          )}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}