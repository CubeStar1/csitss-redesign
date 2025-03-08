import { motion } from 'framer-motion';
import { Phone, Mail, Users, ExternalLink, Building } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

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
};

function ContactCard({ name, phone, email }: { name: string; phone: string; email: string }) {
  return (
    <motion.div
      variants={item}
      className="relative rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 transition-all duration-300 hover:shadow-2xl group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-sky-500/[0.05] dark:from-blue-400/[0.03] dark:to-sky-400/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-blue-400/10 dark:to-sky-400/10">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{name}</h3>
        </div>
        
        <div className="space-y-4 pl-[3.25rem]">
          <a href={`tel:${phone}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link">
            <Phone className="w-5 h-5 text-blue-600/70 dark:text-blue-400/70" />
            <span className="text-lg">{phone}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
          
          <a href={`mailto:${email}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link">
            <Mail className="w-5 h-5 text-blue-600/70 dark:text-blue-400/70" />
            <span className="text-lg">{email}</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />
      
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Small Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-blue-500/10 dark:from-blue-400/10 dark:via-sky-400/10 dark:to-blue-400/10 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/20 backdrop-blur-sm">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <Building className="h-4 w-4" />
            RVCE Campus
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl lg:text-7xl mb-8">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Contact Cards */}
          <motion.div variants={item} className="space-y-6">
            <ContactCard
              name="Dr. Shanta Rangaswamy, HoD CSE Department"
              phone="+91 97390 37207"
              email="shantharangaswamy@rvce.edu.in"
            />
            
            <ContactCard
              name="Dr. Anjaneyappa, HoD Civil Department"
              phone="+91 99808 47938"
              email="anjaneyappa@rvce.edu.in"
            />
          </motion.div>

          {/* General Contact Card */}
          <motion.div
            variants={item}
            className="mt-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-blue-500/20 dark:to-sky-500/20 p-8 backdrop-blur-sm text-center"
          >
            <div className="inline-flex justify-center items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20 dark:from-blue-400/20 dark:to-sky-400/20 mb-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-3">
              General Inquiries
            </h3>
            <a
              href="mailto:csitss2024@rvce.edu.in"
              className="inline-flex items-center gap-2 text-lg text-blue-600 dark:text-blue-400 hover:underline group"
            >
              <span>csitss2024@rvce.edu.in</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;