"use client";

import { CalendarDays, Download, Send, MapPin, History, Globe, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { Button } from "@/components/ui/button"
import { ThemedButton } from "@/components/ui/themed-button"

const stats = [
  {
    name: 'Event Date',
    value: 'November 20-22, 2025',
    icon: CalendarDays,
    gradient: 'from-rose-400/20 to-pink-500/20',
    iconGradient: 'from-rose-400 to-pink-500'
  },
  {
    name: 'Venue',
    value: 'RV College of Engineering',
    icon: MapPin,
    gradient: 'from-emerald-400/20 to-teal-500/20',
    iconGradient: 'from-emerald-400 to-teal-500'
  },
  {
    name: 'Previous Editions',
    value: '8 Successful Editions',
    icon: History,
    gradient: 'from-blue-400/20 to-indigo-500/20',
    iconGradient: 'from-blue-400 to-indigo-500'
  },
  {
    name: 'Participation',
    value: 'Global Researchers',
    icon: Globe,
    gradient: 'from-amber-400/20 to-orange-500/20',
    iconGradient: 'from-amber-400 to-orange-500'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export function Hero() {
  const scrollToTimeline = () => {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>
      {/* Dot Pattern Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(85rem_circle_at_top_right,white,transparent)]",
          )}
        />
      </div> */}
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-1 flex-col items-start"
          >
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/20">
              <div className="flex h-2 w-2">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"></span>
                <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
              </div>
              <CalendarDays className="h-4 w-4" />
              November 20-22, 2025
            </div>

            {/* Main Title */}
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-6xl">
              WELCOME TO{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300 bg-clip-text text-transparent">
                CSITSS-2025
              </span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              9<sup>th</sup> International Conference on Computational Systems and Information Technology
              for Sustainable Solutions, bringing together leading academicians, scientists, and
              researchers from around the world.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
              <ThemedButton
                variant="primary"
                size="lg"
                onClick={() => window.open('https://cmt3.research.microsoft.com/CSITSS2024', '_blank')}
              >
                <Send className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
                Submit Paper
              </ThemedButton>
              <ThemedButton
                variant="secondary"
                size="lg"
                onClick={() => window.open('CSITSS 2024 Brochure.pdf', '_blank')}
              >
                <Download className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
                Download Brochure
              </ThemedButton>
              <ThemedButton
                variant="secondary"
                size="lg"
                onClick={scrollToTimeline}
              >
                <ChevronDown className="h-4 w-4 mr-2 transition-transform group-hover:translate-y-1" />
                View Timeline
              </ThemedButton>
            </div>
          </motion.div>

          {/* Right Image - Hidden on mobile, shown on larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative  lg:flex flex-1 items-center justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20"></div>
              <Image
                src="/rv2.jpg"
                alt="RVCE Campus"
                fill
                className="object-cover object-center opacity-90 dark:opacity-80"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 right-6 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/logos/rvce_logo.png"
                  alt="RVCE Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Organized by</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    RV College of Engineering<sup className="text-xs">®</sup>
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Mysore Road, Bengaluru</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.name}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.gradient} dark:bg-opacity-20 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 ease-out
                  border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className={`inline-flex rounded-xl bg-gradient-to-br ${stat.iconGradient} p-2.5`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <p className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                      {stat.value}
                    </p>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">{stat.name}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute right-0 top-0 -z-10 h-24 w-24 translate-x-1/3 -translate-y-1/3 transform rounded-full bg-white/10 dark:bg-white/5 blur-2xl transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:translate-x-0"></div>
                <div className="absolute bottom-0 left-0 -z-10 h-16 w-16 translate-y-1/2 -translate-x-1/2 transform rounded-full bg-white/10 dark:bg-white/5 blur-xl transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:translate-x-0"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 