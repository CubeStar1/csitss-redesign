import { motion } from "framer-motion"
import Image from "next/image"

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        {/* Vision Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">Vision</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>
          <motion.p 
            variants={fadeInUp}
            className="mt-8 text-gray-600 dark:text-gray-300 text-center text-lg"
          >
            Leadership in Quality Technical Education, Interdisciplinary Research and Innovation, focusing on Sustainable and Inclusive Technology.
          </motion.p>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">Mission</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="mt-12 space-y-4"
          >
            {[
              "To deliver outcome-based quality education, emphasizing on experiential learning with state-of-the-art infrastructure.",
              "To create a conducive environment for interdisciplinary research and innovation.",
              "To develop professionals through holistic education focusing on individual growth, discipline, integrity, ethics and social sensitivity.",
              "To nurture industry-institution collaboration leading to competency enhancement and entrepreneurship.",
              "To focus on technologies that are sustainable and inclusive, benefiting all sections of the society."
            ].map((mission, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium">
                  {index + 1}
                </span>
                <p className="text-gray-600 dark:text-gray-300 py-1">{mission}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50">About RVCE</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-blue-900/20 dark:to-sky-900/20"></div>
              <Image
                src="/rv2.jpg"
                alt="RV College of Engineering Campus"
                width={800}
                height={600}
                className="relative object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"></div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="space-y-6"
            >
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  RV College of Engineering (RVCE) established in 1963 is one of the earliest self-financing engineering colleges in the country. The institution is run by Rashtreeya Sikshana Samithi Trust (RSST) a not-for-profit Trust. RVCE is an Autonomous college.
                </p>
                <p>
                  Currently, the institution offers 15 Bachelors, 14 Master Programs and all the departments have Research Centres, affiliated to Visvesvaraya Technological University (VTU) Belagavi.
                </p>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Recent Achievements</h3>
                  <ul className="list-disc pl-4 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Ranked 96th in the Country by National Institutional Ranking Framework (NIRF: 2021-22)</li>
                    <li>"Engineering College of the Year-2023" by Higher Education Review Magazine</li>
                    <li>Ranked 10th in the country & 2nd in Karnataka - IIRF Ranking (2023)</li>
                    <li>Ranked 6th among top 100 Private Engineering Colleges</li>
                  </ul>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="text-2xl font-bold text-blue-500">1700+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Publications</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="text-2xl font-bold text-blue-500">70</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Patents Filed</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-center">
                    <div className="text-2xl font-bold text-blue-500">₹30Cr+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Research Grants</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  )
}

export default About
