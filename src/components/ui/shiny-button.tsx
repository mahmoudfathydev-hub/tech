"use client"

import React from "react"
import { motion, type MotionProps } from "motion/react"
import { cn } from "@/lib/utils"

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 1 },
  animate: { "--x": "-100%", scale: 1.1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
}

interface ShinyButtonProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative cursor-pointer rounded-xl px-8 py-3 font-medium bg-[#2384eb] text-white shadow-lg backdrop-blur-xl transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-xl",
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative block text-sm tracking-wide uppercase"
        style={{
          maskImage:
            "linear-gradient(-75deg,#1c6fd1 calc(var(--x) + 20%),transparent calc(var(--x) + 30%),#1c6fd1 calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(#000,#000) content-box exclude,linear-gradient(#000,#000)",
          WebkitMask:
            "linear-gradient(#000,#000) content-box exclude,linear-gradient(#000,#000)",
          backgroundImage:
            "linear-gradient(-75deg,#1c6fd1/10% calc(var(--x)+20%),#1c6fd1/50% calc(var(--x)+25%),#1c6fd1/10% calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px pointer-events-none"
      />
    </motion.button>
  )
})

ShinyButton.displayName = "ShinyButton"