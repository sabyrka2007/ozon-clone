'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SLIDES } from '@/components/pages/home/Slider/slides.data'

export const Slider = () => {
  const [current, setCurrent] = useState(0)
  const slidesCount = SLIDES.length

  const goPrev = () => {
    setCurrent((prev) => prev - 1)
  }

  const goNext = () => {
    setCurrent((prev) => prev + 1)
  }

  return (
    <div className="relative overflow-hidden rounded-3xl my-2">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="min-w-full select-none">
            <Image
              src={slide.image}
              width={1500}
              height={300}
              alt=""
              className="w-full"
              draggable={false}
              priority
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4">
        {current > 0 ? (
          <button
            onClick={goPrev}
            className="bg-white/50 hover:bg-white/75 transition p-2.5 rounded-lg"
          >
            <ChevronLeft size={20} />
          </button>
        ) : (
          <div />
        )}

        {current < slidesCount - 1 ? (
          <button
            onClick={goNext}
            className="bg-white/50 hover:bg-white/75 transition p-2.5 rounded-lg"
          >
            <ChevronRight size={20} />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
