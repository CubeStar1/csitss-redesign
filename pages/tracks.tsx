import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";
import { tracks, Track } from "@/data/tracks";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

function TrackCard({ track }: { track: Track }) {
  return (
    <motion.div
      variants={item}
      className="group relative rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/80"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.05] to-sky-500/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-400/[0.03] dark:to-sky-400/[0.03]" />
      <div className="relative space-y-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-3 dark:from-blue-400/10 dark:to-sky-400/10">
            <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{track.title}</h3>
        </div>

        <ul className="space-y-3 pl-[3.25rem]">
          {track.items.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 },
                },
              }}
              className="group/item flex items-start gap-3"
            >
              <ArrowRight className="mt-1 h-4 w-4 text-blue-500/70 transition-transform group-hover/item:translate-x-1 dark:text-blue-400/70" />
              <span className="text-gray-600 dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Tracks() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-700 ring-1 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75 dark:bg-blue-500"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <Layers className="h-4 w-4" />
            Research Areas
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-gray-50">
            Conference{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-sky-400 dark:to-blue-400">
              Tracks
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Authors are invited to submit their original research work in the following areas (but not limited to):
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          {tracks.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Tracks;
