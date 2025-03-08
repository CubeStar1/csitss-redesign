import { motion } from 'framer-motion'
import { Award, Star, Users, Trophy, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { currentSponsors, SponsorsData, Sponsor, SponsorType } from '@/data/sponsors'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
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
      damping: 12
    }
  }
};

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <motion.a
      href={sponsor.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -8 }}
      className="block w-[300px] group"
    >
      <div className="relative h-[320px] rounded-2xl bg-gradient-to-b from-white/90 to-white/60 dark:from-gray-800/90 dark:to-gray-800/60 shadow-lg backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 p-8 flex flex-col items-center justify-center gap-6 transition-all duration-500 group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50 group-hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-sky-500/[0.05] dark:from-blue-400/[0.03] dark:to-sky-400/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Logo Container */}
        <div className="relative w-[220px] h-[180px] flex items-center justify-center bg-gradient-to-b from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-900/40 rounded-xl p-6 group-hover:shadow-lg transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-sky-500/[0.02] dark:from-blue-400/[0.01] dark:to-sky-400/[0.01] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={sponsor.logo.startsWith('http') ? sponsor.logo : `/sponsors/${sponsor.logo}`}
            alt={sponsor.name}
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
            className="transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Name and Link Icon */}
        <div className="relative text-center mt-auto">
          <p className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {sponsor.name}
          </p>
          <ArrowUpRight className="w-4 h-4 absolute -right-6 top-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-blue-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.a>
  );
}

function SponsorSection({ title, sponsors, icon: Icon }: { title: string; sponsors: Sponsor[]; icon?: any }) {
  if (sponsors.length === 0) return null;

  const gridCols = sponsors.length === 1 ? 'grid-cols-1' : 
                   sponsors.length === 2 ? 'sm:grid-cols-2' : 
                   'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <motion.div variants={item} className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-blue-400/10 dark:to-sky-400/10 backdrop-blur-sm">
              <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          )}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-transparent dark:from-blue-400/20 dark:via-sky-400/20" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`grid ${gridCols} gap-10 justify-center max-w-[1000px] mx-auto`}
      >
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          {/* Small Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-blue-500/10 dark:from-blue-400/10 dark:via-sky-400/10 dark:to-blue-400/10 px-4 py-2 text-sm text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/20 backdrop-blur-sm">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <Award className="h-4 w-4" />
            Our Valued Partners
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl lg:text-7xl mb-8">
            Sponsors of{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              CSITSS 2024
            </span>
          </h1>
        </motion.div>

        {/* Current Year Sponsors */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >
          <SponsorSection 
            title="Platinum Sponsors" 
            sponsors={groupedCurrentSponsors.platinum || []} 
            icon={Trophy}
          />
          <SponsorSection 
            title="Gold Sponsors" 
            sponsors={groupedCurrentSponsors.gold || []} 
            icon={Star}
          />
          <SponsorSection 
            title="Silver Sponsors" 
            sponsors={groupedCurrentSponsors.silver || []} 
            icon={Award}
          />
          <SponsorSection 
            title="Other Sponsors" 
            sponsors={groupedCurrentSponsors.others || []} 
            icon={Users}
          />
        </motion.div>

        {/* Previous Year's Sponsors */}
        <motion.div
          variants={item}
          className="mt-40 rounded-2xl bg-gradient-to-b from-white/90 to-white/60 dark:from-gray-800/90 dark:to-gray-800/60 backdrop-blur-xl shadow-xl p-12 border border-gray-200/50 dark:border-gray-700/50"
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
            Special Thanks to CSITSS 2023 Sponsors
          </h2>
          
          <div className="space-y-16">
            <SponsorSection 
              title="Platinum Partners" 
              sponsors={groupedPreviousSponsors.platinum || []} 
              icon={Trophy}
            />
            <SponsorSection 
              title="In Association With" 
              sponsors={groupedPreviousSponsors['in association with'] || []} 
              icon={Users}
            />
            <SponsorSection 
              title="Diamond Partners" 
              sponsors={groupedPreviousSponsors.diamond || []} 
              icon={Star}
            />
            <SponsorSection 
              title="Gold Partners" 
              sponsors={groupedPreviousSponsors.gold || []} 
              icon={Star}
            />
            <SponsorSection 
              title="Silver Partners" 
              sponsors={groupedPreviousSponsors.silver || []} 
              icon={Award}
            />
            <SponsorSection 
              title="Other Partners" 
              sponsors={groupedPreviousSponsors.others || []} 
              icon={Users}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Sponsorship
