import { motion } from "framer-motion";
import { BookOpen, Users, Award, Send, Sparkles } from "lucide-react";
import { ThemedButton } from "@/components/ui/themed-button";
import { GradientCard } from "@/components/ui/gradient-card";
import { cn } from "@/lib/utils";

const topics = [
  "Green Electronics",
  "Renewable Energy",
  "Robotics and Automation",
  "Photonics",
  "Artificial Intelligence",
  "Cyber-Physical Systems",
  "Quantum Mechanics",
  "Computing",
];

const features = [
  {
    icon: BookOpen,
    title: "IEEE Publication",
    description: "All peer-reviewed and selected papers will be submitted for possible inclusion in the IEEE digital library.",
    gradient: "from-blue-400/20 to-indigo-500/20",
    iconGradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with leading academicians, scientists, researchers, and industry representatives from around the world.",
    gradient: "from-emerald-400/20 to-teal-500/20",
    iconGradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Award,
    title: "Legacy of Excellence",
    description: "Building on the success of eight previous editions, CSITSS continues to be a premier platform for knowledge exchange.",
    gradient: "from-amber-400/20 to-orange-500/20",
    iconGradient: "from-amber-400 to-orange-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-white to-transparent py-24 sm:py-32 dark:from-transparent dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-base text-blue-700 ring-1 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20">
            <Sparkles className="h-5 w-5" />
            About CSITSS
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            International Conference on{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-300">
              Computational Systems
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            The 9<sup>th</sup> International Conference on Computational Systems and Information Technology for Sustainable Solutions [CSITSS — 2025] brings
            together leading academicians, scientists, researchers, and industry representatives from around the world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <GradientCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* Research Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/20 bg-white/50 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-800/50"
        >
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Research Topics</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Explore cutting-edge research across various domains of computational systems and sustainable solutions.
              </p>
              <div className="mt-8">
                <ThemedButton variant="primary" onClick={() => window.open("https://cmt3.research.microsoft.com/CSITSS2024", "_blank")}>
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Submit Your Research
                </ThemedButton>
              </div>
            </div>
            <div className="flex-1">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {topics.map((topic, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
