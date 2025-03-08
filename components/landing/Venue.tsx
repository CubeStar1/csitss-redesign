import { MapPin, Navigation, Hotel, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react'

export function Venue() {
  const [showImageModal, setShowImageModal] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-white to-transparent dark:from-transparent dark:via-gray-900 dark:to-transparent py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 px-4 py-2 text-base text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/20">
            <MapPin className="h-5 w-5" />
            Conference Venue
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
            RV College of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300 bg-clip-text text-transparent">
              Engineering
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Mysore Road, RV Vidyaniketan Post, Bengaluru-560059
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/5 to-sky-500/5 p-1 backdrop-blur-xl transition-all hover:from-blue-500/10 hover:to-sky-500/10 dark:from-blue-400/5 dark:to-sky-300/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[23px] shadow-lg transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </motion.div>

          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/5 to-sky-500/5 p-1 backdrop-blur-xl transition-all hover:from-blue-500/10 hover:to-sky-500/10 dark:from-blue-400/5 dark:to-sky-300/5 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src="./map2.jpg"
                  alt="RVCE Campus"
                  className="h-[400px] w-full rounded-[23px] object-cover shadow-lg transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl border-none bg-transparent p-0">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src="./map2.jpg"
                alt="RVCE Campus - Enlarged View"
                className="w-full rounded-lg"
              />
            </DialogContent>
          </Dialog>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://goo.gl/maps/sXWGV9iXqQRwz2PJ9"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative overflow-hidden rounded-full px-6 py-3 transition-all",
              "bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-sky-400",
              "text-sm font-semibold text-white shadow-md",
              "hover:shadow-xl hover:from-blue-500 hover:to-sky-400",
              "inline-flex items-center justify-center gap-2"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Navigation className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            Get Directions
          </a>
          <a
            href="HOTELS.pdf"
            className={cn(
              "group relative overflow-hidden rounded-full px-6 py-3 transition-all",
              "bg-white dark:bg-gray-800",
              "text-sm font-semibold text-gray-900 dark:text-white shadow-md",
              "hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700",
              "inline-flex items-center justify-center gap-2",
              "border border-gray-200 dark:border-gray-700"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <Hotel className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            Nearby Hotels List
          </a>
        </motion.div>
      </div>
    </section>
  )
} 