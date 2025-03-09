"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

function About() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>

        {/* Decorative Blobs */}
        <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 translate-x-1/3 transform rounded-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 -z-10 h-96 w-96 -translate-x-1/3 transform rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-3xl" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          {/* Vision Section */}
          <motion.section variants={container} initial="hidden" animate="show" className="mx-auto mb-24 max-w-4xl">
            <motion.div variants={item} className="mb-12 text-center">
              <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">Our Vision</span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-50">Vision</h1>
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
            </motion.div>
            <motion.div
              variants={item}
              className="rounded-2xl border border-white/20 bg-white/40 p-8 shadow-xl backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/40"
            >
              <p className="text-center text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Leadership in Quality Technical Education, Interdisciplinary Research and Innovation, focusing on Sustainable and Inclusive Technology.
              </p>
            </motion.div>
          </motion.section>

          {/* Mission Section */}
          <motion.section variants={container} initial="hidden" animate="show" className="mx-auto mb-24 max-w-4xl">
            <motion.div variants={item} className="mb-12 text-center">
              <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">Our Mission</span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-50">Mission</h2>
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
            </motion.div>
            <motion.div variants={container} className="space-y-6">
              {[
                "To deliver outcome-based quality education, emphasizing on experiential learning with state-of-the-art infrastructure.",
                "To create a conducive environment for interdisciplinary research and innovation.",
                "To develop professionals through holistic education focusing on individual growth, discipline, integrity, ethics and social sensitivity.",
                "To nurture industry-institution collaboration leading to competency enhancement and entrepreneurship.",
                "To focus on technologies that are sustainable and inclusive, benefiting all sections of the society.",
              ].map((mission, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                  whileHover={{ y: -2 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-sky-500/5" />
                  <div className="relative flex items-start gap-6 p-6">
                    <div className="flex-none">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{mission}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* About Section */}
          <motion.section variants={container} initial="hidden" animate="show" className="mx-auto max-w-6xl">
            <motion.div variants={item} className="mb-16 text-center">
              <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">About Us</span>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-50">About RVCE</h2>
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
            </motion.div>

            <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
              <motion.div variants={item} className="relative h-[40vh] min-h-[300px] rounded-2xl shadow-2xl lg:h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-sky-500/10"></div>
                <Image
                  src="/rv2.jpg"
                  alt="RV College of Engineering Campus"
                  fill
                  className="transform rounded-2xl object-cover object-center transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"></div>
              </motion.div>

              <motion.div variants={container} className="space-y-6 md:space-y-8">
                <motion.div
                  variants={item}
                  className="rounded-2xl border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-sm md:p-8 dark:border-gray-700/30 dark:bg-gray-800/40"
                >
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-base leading-relaxed md:text-lg">
                      RV College of Engineering (RVCE) established in 1963 is one of the earliest self-financing engineering colleges in the country. The
                      institution is run by Rashtreeya Sikshana Samithi Trust (RSST) a not-for-profit Trust. RVCE is an Autonomous college.
                    </p>
                    <p className="mt-4 text-base leading-relaxed md:text-lg">
                      Currently, the institution offers 15 Bachelors, 14 Master Programs and all the departments have Research Centres, affiliated to
                      Visvesvaraya Technological University (VTU) Belagavi.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={item}
                  className="rounded-2xl border border-white/20 bg-white/40 p-6 shadow-xl backdrop-blur-sm md:p-8 dark:border-gray-700/30 dark:bg-gray-800/40"
                >
                  <h3 className="mb-4 text-lg font-semibold text-gray-900 md:mb-6 md:text-xl dark:text-gray-50">Recent Achievements</h3>
                  <motion.ul variants={container} className="space-y-3 md:space-y-4">
                    {[
                      "Ranked 96th in the Country by National Institutional Ranking Framework (NIRF: 2021-22)",
                      '"Engineering College of the Year-2023" by Higher Education Review Magazine',
                      "Ranked 10th in the country & 2nd in Karnataka - IIRF Ranking (2023)",
                      "Ranked 6th among top 100 Private Engineering Colleges",
                    ].map((achievement, index) => (
                      <motion.li key={index} variants={item} className="flex items-start gap-3 md:gap-4">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600/20 to-sky-500/20 text-sm font-medium text-blue-600 md:h-6 md:w-6 dark:text-blue-400">
                          ✓
                        </span>
                        <p className="text-sm text-gray-600 md:text-base dark:text-gray-300">{achievement}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div variants={container} className="grid grid-cols-3 gap-4 md:gap-6">
                  {[
                    { value: "1700+", label: "Publications" },
                    { value: "70", label: "Patents Filed" },
                    { value: "₹30Cr+", label: "Research Grants" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="rounded-xl border border-white/20 bg-white/40 p-4 text-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-2xl md:p-6 dark:border-gray-700/30 dark:bg-gray-800/40 dark:hover:bg-gray-800/60"
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">{stat.value}</div>
                      <div className="mt-1 text-xs text-gray-600 md:mt-2 md:text-sm dark:text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}

export default About;
