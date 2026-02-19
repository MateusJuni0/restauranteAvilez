'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useSpring(0, { damping: 20, stiffness: 250 })
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const checkHover = () => {
      const hoveredEl = document.querySelectorAll(':hover')
      const lastEl = hoveredEl[hoveredEl.length - 1]
      if (lastEl) {
        const style = window.getComputedStyle(lastEl)
        setIsHovering(style.cursor === 'pointer')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', checkHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-[#D4AF37] rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250 }}
    />
  )
}
