import { motion } from "framer-motion";
import { Award, Star, Users, Trophy, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { currentSponsors, SponsorsData, Sponsor, SponsorType } from "@/data/sponsors";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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
      damping: 12,
    },
  },
};

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <motion.a href={sponsor.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03, y: -8 }} className="group block w-[300px]">
      <div className="relative flex h-[320px] flex-col items-center justify-center gap-6 rounded-2xl border border-gray-200/50 bg-gradient-to-b from-white/90 to-white/60 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-2xl dark:border-gray-700/50 dark:from-gray-800/90 dark:to-gray-800/60 dark:group-hover:border-blue-400/50">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.05] to-sky-500/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-400/[0.03] dark:to-sky-400/[0.03]" />

        {/* Logo Container */}
        <div className="relative flex h-[180px] w-[220px] items-center justify-center rounded-xl bg-gradient-to-b from-white/80 to-white/40 p-6 transition-all duration-500 group-hover:shadow-lg dark:from-gray-900/80 dark:to-gray-900/40">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/[0.02] to-sky-500/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-400/[0.01] dark:to-sky-400/[0.01]" />
          <Image
            src={sponsor.logo.startsWith("http") ? sponsor.logo : `/sponsors/${sponsor.logo}`}
            alt={sponsor.name}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            className="transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Name and Link Icon */}
        <div className="relative mt-auto text-center">
          <p className="text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
            {sponsor.name}
          </p>
          <ArrowUpRight className="absolute -right-6 top-1.5 h-4 w-4 transform text-blue-500 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </div>
    </motion.a>
  );
}

function SponsorSection({ title, sponsors, icon: Icon }: { title: string; sponsors: Sponsor[]; icon?: any }) {
  if (sponsors.length === 0) return null;

  const gridCols = sponsors.length === 1 ? "grid-cols-1" : sponsors.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <motion.div variants={item} className="mb-20">
      <div className="mb-10 flex items-center gap-4">
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-3 backdrop-blur-sm dark:from-blue-400/10 dark:to-sky-400/10">
              <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          )}
          <h2 className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-400 dark:via-sky-400 dark:to-blue-400">
            {title}
          </h2>
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-transparent dark:from-blue-400/20 dark:via-sky-400/20" />
      </div>
      <motion.div variants={container} initial="hidden" animate="show" className={`grid ${gridCols} mx-auto max-w-[1000px] justify-center gap-10`}>
        {sponsors.map((sponsor) => (
          <motion.div key={sponsor.name} variants={item} className="flex justify-center">
            <SponsorCard sponsor={sponsor} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Sponsorship() {
  const groupedCurrentSponsors = currentSponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.type]) {
      acc[sponsor.type] = [];
    }
    acc[sponsor.type].push(sponsor);
    return acc;
  }, {} as Record<SponsorType, Sponsor[]>);

  const groupedPreviousSponsors = SponsorsData.reduce((acc, sponsor) => {
    if (!acc[sponsor.type]) {
      acc[sponsor.type] = [];
    }
    acc[sponsor.type].push(sponsor);
    return acc;
  }, {} as Record<SponsorType, Sponsor[]>);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-20 text-center">
          {/* Small Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-blue-500/10 px-4 py-2 text-sm text-blue-700 ring-1 ring-blue-700/10 backdrop-blur-sm dark:from-blue-400/10 dark:via-sky-400/10 dark:to-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75 dark:bg-blue-500"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <Award className="h-4 w-4" />
            Our Valued Partners
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl dark:text-gray-50">
            Sponsors of{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-sky-400 dark:to-blue-400">
              CSITSS 2024
            </span>
          </h1>
        </motion.div>

        {/* Current Year Sponsors */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">
          <SponsorSection title="Platinum Sponsors" sponsors={groupedCurrentSponsors.platinum || []} icon={Trophy} />
          <SponsorSection title="Gold Sponsors" sponsors={groupedCurrentSponsors.gold || []} icon={Star} />
          <SponsorSection title="Silver Sponsors" sponsors={groupedCurrentSponsors.silver || []} icon={Award} />
          <SponsorSection title="Other Sponsors" sponsors={groupedCurrentSponsors.others || []} icon={Users} />
        </motion.div>

        {/* Previous Year's Sponsors */}
        <motion.div
          variants={item}
          className="mt-40 rounded-2xl border border-gray-200/50 bg-gradient-to-b from-white/90 to-white/60 p-12 shadow-xl backdrop-blur-xl dark:border-gray-700/50 dark:from-gray-800/90 dark:to-gray-800/60"
        >
          <h2 className="mb-16 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-blue-400 dark:via-sky-400 dark:to-blue-400">
            Special Thanks to CSITSS 2023 Sponsors
          </h2>

          <div className="space-y-16">
            <SponsorSection title="Platinum Partners" sponsors={groupedPreviousSponsors.platinum || []} icon={Trophy} />
            <SponsorSection title="In Association With" sponsors={groupedPreviousSponsors["in association with"] || []} icon={Users} />
            <SponsorSection title="Diamond Partners" sponsors={groupedPreviousSponsors.diamond || []} icon={Star} />
            <SponsorSection title="Gold Partners" sponsors={groupedPreviousSponsors.gold || []} icon={Star} />
            <SponsorSection title="Silver Partners" sponsors={groupedPreviousSponsors.silver || []} icon={Award} />
            <SponsorSection title="Other Partners" sponsors={groupedPreviousSponsors.others || []} icon={Users} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Sponsorship;
