import { Hero } from "@/components/landing/hero-section";
import { About } from "@/components/landing/about-section";
import { Venue } from "@/components/landing/venue-section";
import Timeline from "@/components/landing/timeline";
import Gallery from "@/components/landing/gallery";

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <About />

      <Timeline />

      <Venue />

      <Gallery />
    </main>
  );
}
