import { CalendarDays, MapPin, History, Globe } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    name: "Event Date",
    value: "November 20-22, 2025",
    icon: CalendarDays,
    gradient: "from-rose-400/20 to-pink-500/20",
    iconGradient: "from-rose-400 to-pink-500",
  },
  {
    name: "Venue",
    value: "RV College of Engineering",
    icon: MapPin,
    gradient: "from-emerald-400/20 to-teal-500/20",
    iconGradient: "from-emerald-400 to-teal-500",
  },
  {
    name: "Previous Editions",
    value: "8 Successful Editions",
    icon: History,
    gradient: "from-blue-400/20 to-indigo-500/20",
    iconGradient: "from-blue-400 to-indigo-500",
  },
  {
    name: "Participation",
    value: "Global Researchers",
    icon: Globe,
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

export function StatsCards() {
  return (
    <section className="py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.gradient} border border-white/10 p-6 shadow-xl backdrop-blur-xl
                transition-all duration-300 ease-out hover:border-white/20 hover:shadow-2xl`}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${stat.iconGradient} p-2.5`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="mt-4 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-white dark:to-gray-200">
                    {stat.value}
                  </p>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">{stat.name}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute right-0 top-0 -z-10 h-24 w-24 -translate-y-1/3 translate-x-1/3 transform rounded-full bg-white/10 blur-2xl transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div className="absolute bottom-0 left-0 -z-10 h-16 w-16 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-white/10 blur-xl transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
