/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { Hero } from "@/components/landing/Hero"
import { About } from "@/components/landing/About"
import { Venue } from "@/components/landing/Venue"
import Timeline from '@/components/TimeLine'
import Gallery from '@/components/Gallery'

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Timeline Section */}
       <Timeline />

      {/* Venue Section */}
      <Venue />

      {/* Gallery Section */}
      <Gallery />
    </main>
  )
}
