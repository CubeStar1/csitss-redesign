import { motion } from 'framer-motion';
import { FileText, Download, Send, CalendarDays } from 'lucide-react';
import { ThemedButton } from "@/components/ui/themed-button";

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

function Papers() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />
      
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/20">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <CalendarDays className="h-4 w-4" />
            Deadline: August 10th, 2024
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl mb-6">
            Call For{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300 bg-clip-text text-transparent">
              Papers
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Main Content Card */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Conference does not accept/encourage Survey/Review articles.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                Prospective authors are encouraged to submit quality and original research papers for presentation at the Conference. Authors are requested to submit their manuscripts in PDF format not exceeding 6 pages in A4 size through online submission at Microsoft CMT - on or before <span className="font-semibold">10<sup>th</sup> August 2024</span>.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                The manuscript should follow the standard IEEE template. The format of the paper could be downloaded using the template link below.
              </p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <ThemedButton
              variant="primary"
              size="lg"
              onClick={() => window.open('https://cmt3.research.microsoft.com/CSITSS2024', '_blank')}
            >
              <Send className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Submit Your Paper
            </ThemedButton>
            
            <ThemedButton
              variant="secondary"
              size="lg"
              onClick={() => window.open('https://www.ieee.org/conferences/publishing/templates.html', '_blank')}
            >
              <FileText className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
              IEEE Template
            </ThemedButton>

            <ThemedButton
              variant="secondary"
              size="lg"
              onClick={() => window.open('Guidelines to Authors - IEEE.pdf', '_blank')}
            >
              <Download className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Author Guidelines
            </ThemedButton>
          </motion.div>

          {/* Important Note Card */}
          <motion.div
            variants={item}
            className="mt-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-blue-500/20 dark:to-sky-500/20 p-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Important Note
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              All submissions will be peer-reviewed by domain experts. Papers must be submitted through the Microsoft CMT platform. Please ensure your submission follows all guidelines and formatting requirements.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Papers;
