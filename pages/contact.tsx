import { motion } from "framer-motion";
import { Phone, Mail, Users, ExternalLink, Building } from "lucide-react";

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

function ContactCard({ name, phone, email }: { name: string; phone: string; email: string }) {
  return (
    <motion.div
      variants={item}
      className="group relative rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/80"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.05] to-sky-500/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-400/[0.03] dark:to-sky-400/[0.03]" />
      <div className="relative space-y-6">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-3 dark:from-blue-400/10 dark:to-sky-400/10">
            <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{name}</h3>
        </div>

        <div className="space-y-4 pl-[3.25rem]">
          <a
            href={`tel:${phone}`}
            className="group/link flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <Phone className="h-5 w-5 text-blue-600/70 dark:text-blue-400/70" />
            <span className="text-lg">{phone}</span>
            <ExternalLink className="h-4 w-4 transform opacity-0 transition-all duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:opacity-100" />
          </a>

          <a
            href={`mailto:${email}`}
            className="group/link flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <Mail className="h-5 w-5 text-blue-600/70 dark:text-blue-400/70" />
            <span className="text-lg">{email}</span>
            <ExternalLink className="h-4 w-4 transform opacity-0 transition-all duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:opacity-100" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <section className="relative flex min-h-screen items-center bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16 text-center">
          {/* Small Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-blue-500/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue-700/10 backdrop-blur-sm dark:from-blue-400/10 dark:via-sky-400/10 dark:to-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75 dark:bg-blue-500"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <Building className="h-4 w-4" />
            RVCE Campus
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-gray-50">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-sky-400 dark:to-blue-400">
              Touch
            </span>
          </h1>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          {/* Contact Cards */}
          <motion.div variants={item} className="space-y-6">
            <ContactCard name="Dr. Shanta Rangaswamy, HoD CSE Department" phone="+91 97390 37207" email="shantharangaswamy@rvce.edu.in" />

            <ContactCard name="Dr. Anjaneyappa, HoD Civil Department" phone="+91 99808 47938" email="anjaneyappa@rvce.edu.in" />
          </motion.div>

          {/* General Contact Card */}
          <motion.div
            variants={item}
            className="mt-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-8 text-center backdrop-blur-sm dark:from-blue-500/20 dark:to-sky-500/20"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 dark:from-blue-400/20 dark:to-sky-400/20">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-gray-100">General Inquiries</h3>
            <a href="mailto:csitss2024@rvce.edu.in" className="group inline-flex items-center gap-2 text-lg text-blue-600 hover:underline dark:text-blue-400">
              <span>csitss2024@rvce.edu.in</span>
              <ExternalLink className="h-4 w-4 transform opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
