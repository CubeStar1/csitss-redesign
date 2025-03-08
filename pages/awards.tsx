import { motion } from 'framer-motion';
import { Award, Download, Mail } from 'lucide-react';
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

function Awards() {
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
            <Award className="h-4 w-4" />
            Recognition for Excellence
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl mb-6">
            Conference{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300 bg-clip-text text-transparent">
              Awards
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
                The following awards will be conferred by CSITSS-2024:
              </p>
              
              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-400/10">
                    <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">1</span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Best Ph.D Thesis</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Recognition for outstanding doctoral research in conference themes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-400/10">
                    <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">2</span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">Best Paper Awards</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Separate categories for faculty and student research papers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ph.D. Thesis Award Details */}
          {/* Ph.D. Thesis Award Details */}
          <motion.div
            variants={item}
            className="rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-blue-500/20 dark:to-sky-500/20 p-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
          >
            <p className="text-gray-700 dark:text-gray-300">
              Ph.D. scholars, who have been awarded their Ph.D. degree in the conference themes specified, from recognized universities during the period June 1, 2023 to May 31, 2024, are eligible to apply for CSITSS 2024 Best Ph.D. Thesis Award. Ph.D. Thesis (in pdf format) and degree certificate can be submitted to the <strong>Email ID: csitss2024@rvce.edu.in</strong>. Application fees: Rs.1000/-. While registering for <strong>Best Thesis award</strong>, enter the paper ID as 9999.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <ThemedButton
              variant="primary"
              size="lg"
              onClick={() => window.open('PhD-Results.pdf', '_blank')}
            >
              <Download className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Download PhD Results
            </ThemedButton>
            
            <ThemedButton
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = 'mailto:csitss2024@rvce.edu.in'}
            >
              <Mail className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Contact for Queries
            </ThemedButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Awards;
