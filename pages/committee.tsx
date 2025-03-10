"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Users, ChevronRight } from "lucide-react";
import { committees } from "@/data/committee";

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
      damping: 15,
    },
  },
};

interface CommitteeCardProps {
  name: string;
  path: string;
  featured?: boolean;
  isSinglePerson?: boolean;
}

function CommitteeCard({ name, path, featured = false, isSinglePerson = false }: CommitteeCardProps) {
  return (
    <motion.a
      href={`/committee-details/${path}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "block rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:bg-gray-800",
        "border border-gray-100 dark:border-gray-700",
        featured ? "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20" : ""
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "rounded-xl p-3",
              featured ? "bg-gradient-to-br from-blue-500 to-sky-500" : "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600"
            )}
          >
            <Users className={cn("h-5 w-5", featured ? "text-white" : "text-gray-700 dark:text-gray-300")} />
          </div>
          <div>
            <h3 className={cn("font-semibold", featured ? "text-xl text-gray-900 dark:text-gray-50" : "text-gray-800 dark:text-gray-200")}>{name}</h3>
            {!isSinglePerson && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">View Members</p>}
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
    </motion.a>
  );
}

export default function Committee() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-transparent py-20 dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            Conference{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-300">Committee</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Meet the distinguished members who make CSITSS 2025 possible through their leadership and expertise.
          </p>
        </motion.div>

        {/* Chief Patron Card - Featured */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
          <CommitteeCard name={committees[0].name} path={committees[0].path} featured={true} isSinglePerson={true} />
        </motion.div>

        {/* Committee Grid */}
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committees.slice(1).map((committee) => (
            <motion.div key={committee.path} variants={item}>
              <CommitteeCard name={committee.name} path={committee.path} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute right-0 top-1/3 -z-10 h-64 w-64 translate-x-1/4 transform rounded-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-64 w-64 -translate-x-1/4 transform rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-3xl" />
    </section>
  );
}
