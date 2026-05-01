import React, { useMemo } from "react"

import clothing1 from "../assets/clothing1.jpg"
import clothing2 from "../assets/clothing2.jpg"
import clothing3 from "../assets/clothing3.jpg"
import clothing4 from "../assets/clothing4.jpg"
import clothing5 from "../assets/clothing5.jpg"
import clothing6 from "../assets/clothing6.jpg"
import clothing7 from "../assets/clothing7.jpg"
import clothing8 from "../assets/clothing8.avif"
import clothing9 from "../assets/clothing9.jpg"
import clothing10 from "../assets/clothing10.jpg"
import clothing11 from "../assets/clothing11.jpg"
import clothing12 from "../assets/clothing12.jpg"
import clothing13 from "../assets/clothing13.jpg"
import clothing14 from "../assets/clothing14.jpg"
import clothing15 from "../assets/clothing15.jpg"
import clothing16 from "../assets/clothing16.jpg"
import clothing17 from "../assets/clothing17.jpg"

// import FadeInOnScroll from "../utils/FadeInOnScroll"

const imageSources = [
  clothing1, clothing2, clothing3, clothing4, clothing5, clothing6, clothing7,
  clothing8, clothing9, clothing10, clothing11, clothing12, clothing13,
  clothing14, clothing15, clothing16, clothing17
]

const layout = [
  { top: 4, left: 4, width: 210 },
  { top: 8, left: 22, width: 230 },
  { top: 5, left: 45, width: 220 },
  { top: 10, left: 66, width: 210 },

  { top: 32, left: 8, width: 230 },
  { top: 30, left: 32, width: 220 },
  { top: 34, left: 55, width: 230 },

  { top: 58, left: 16, width: 220 },
  { top: 56, left: 40, width: 230 },
  { top: 58, left: 64, width: 210 },
]

const directions = [
  { x: -120, y: 0 },
  { x: 120, y: 0 },
  { x: 0, y: -120 },
  { x: 0, y: 120 },
  { x: -100, y: -80 },
  { x: 100, y: 80 },
]

function getRandomImages() {
  return layout.map((spot, index) => ({
    src: imageSources[index],
    top: spot.top + Math.random() * 4 - 2,
    left: spot.left + Math.random() * 4 - 2,
    width: spot.width + Math.random() * 30 - 15,
    rotation: Math.random() * 6 - 3,
    delay: index * 0.30,
    fromX: index % 2 === 0 ? -80 : 80,
    fromY: index % 3 === 0 ? -60 : 60,
  }))
}

export default function MacWindow() {
  const floatingImages = useMemo(() => getRandomImages(), [])

  return (
    <div className="bg-white flex flex-col rounded-xl shadow-2xl border border-gray-200 h-[520px] w-full max-w-4xl mt-10 overflow-hidden">
      <div className="bg-white flex gap-2 items-center p-3 border-b border-gray-200">
        <div className="bg-red-400 h-3 w-3 rounded-full"></div>
        <div className="bg-yellow-400 h-3 w-3 rounded-full"></div>
        <div className="bg-green-400 h-3 w-3 rounded-full"></div>
      </div>

      <div className="relative bg-gray-100 h-full overflow-hidden">
        {floatingImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt=""
            className="absolute h-60 object-cover shadow-xl animate-fade-float"
            style={{
              top: `${img.top}%`,
              left: `${img.left}%`,
              width: `${img.width}px`,
              "--from-x": `${img.fromX}px`,
              "--from-y": `${img.fromY}px`,
              animationDelay: `${img.delay}s`,
              zIndex: index,
            }}
          />
        ))}
      </div>
    </div>
  )
}