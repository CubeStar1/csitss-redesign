"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "./theme-switcher"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { NavigationMobile } from "./header-mobile"
import { motion, useAnimationControls, LayoutGroup } from "framer-motion"

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/papers', label: 'Papers' },
  { href: '/registration', label: 'Registration' },
  { href: '/awards', label: 'Awards' },
  { href: '/sponsorship', label: 'Sponsors' },
  { href: '/tracks', label: 'Tracks' },
  { href: '/contact', label: 'Contact' },
]

function BlobBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="blob-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.15)" />
          </linearGradient>
          <filter id="blob-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15" result="blob" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const blobControls = useAnimationControls()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="" />
      
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-4 left-0 right-0 z-40 mx-auto max-w-5xl"
      >
        
        <div className={cn(
          "mx-4 rounded-full border bg-background/60 backdrop-blur-xl transition-all duration-500",
          isScrolled ? "shadow-lg bg-background/80" : "shadow-sm"
        )}>
          <div className="flex h-14 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-3 relative group">
                <Image
                  src="/logos/rvce_logo.png"
                  alt="RVCE logo"
                  width={32}
                  height={32}
                  className="rounded-sm"
                />
              <span className="font-medium">CSITSS 2025</span>
            </Link>

            <nav className="hidden md:block relative">
              <LayoutGroup>
                <motion.ul className="flex items-center gap-1">
                  {navigationLinks.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.li key={item.href} className="relative">
                        <Link
                          href={item.href}
                          className={cn(
                            "relative rounded-full px-3 py-1.5 text-sm transition-colors duration-200",
                            isActive 
                              ? "text-primary font-medium" 
                              : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                        {isActive && (
                          <motion.div
                            layoutId="blob"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-sky-400/20 dark:from-blue-500/10 dark:to-sky-400/10 -z-10"
                            transition={{ 
                              type: "spring", 
                              stiffness: 400, 
                              damping: 30,
                              mass: 1
                            }}
                          >
                            <BlobBackground />
                          </motion.div>
                        )}
                      </motion.li>
                    )
                  })}
                </motion.ul>
              </LayoutGroup>
            </nav>

            <div className="flex items-center gap-2">
              <div className="md:hidden">
                <NavigationMobile navigationLinks={navigationLinks} />
              </div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  )
}