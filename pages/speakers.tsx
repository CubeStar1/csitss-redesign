import { motion } from "framer-motion";
import Image from "next/image";
import { GradientCard } from "@/components/ui/gradient-card";
import { Users, Brain, Lightbulb, Star } from "lucide-react";
import { SpeakerType, keynoteSpeakers, aiForAllSpeakers, digitalTransformationSpeakers } from "@/data/speakers";

function SpeakerCard({ speaker }: { speaker: SpeakerType }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800/50 dark:ring-white/10"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image src={speaker.imageLink} alt={speaker.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-xl font-bold text-transparent">{speaker.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-300">{speaker.designation}</p>
        {speaker.topic && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
            <Star className="h-3.5 w-3.5" />
            {speaker.topic}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SectionTitle({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
      <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-50">
        <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{children}</span>
      </h2>
    </motion.div>
  );
}

export default function Speakers() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Track Overview Cards */}
        <div className="mb-24 grid gap-8 md:grid-cols-3">
          <GradientCard
            icon={Users}
            title="Keynote Speakers"
            description="Distinguished experts sharing their insights and vision"
            gradient="from-purple-500/20 to-indigo-500/20 dark:from-purple-500/10 dark:to-indigo-500/10"
            iconGradient="from-purple-500 to-indigo-500"
          />
          <GradientCard
            icon={Brain}
            title="AI for All"
            description="Track 1: Exploring the democratization of artificial intelligence"
            gradient="from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10"
            iconGradient="from-blue-500 to-cyan-500"
          />
          <GradientCard
            icon={Lightbulb}
            title="Digital Transformation"
            description="Track 2: Leading the change in digital innovation"
            gradient="from-teal-500/20 to-emerald-500/20 dark:from-teal-500/10 dark:to-emerald-500/10"
            iconGradient="from-teal-500 to-emerald-500"
          />
        </div>

        {/* Keynote Speakers */}
        <div className="mb-24">
          <SectionTitle gradient="from-purple-600 via-indigo-600 to-blue-600">Keynote Speakers</SectionTitle>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {keynoteSpeakers.map((speaker) => (
              <motion.div key={speaker.id} variants={item}>
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* AI for All Track */}
        <div className="mb-24">
          <SectionTitle gradient="from-blue-600 via-cyan-600 to-teal-600">Track 1: AI for All</SectionTitle>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-16 grid gap-8 sm:grid-cols-2">
            {aiForAllSpeakers.map((speaker) => (
              <motion.div key={speaker.id} variants={item}>
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Digital Transformation Track */}
        <div>
          <SectionTitle gradient="from-teal-600 via-emerald-600 to-green-600">Track 2: Digital Transformation</SectionTitle>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-16 grid gap-8 sm:grid-cols-2">
            {digitalTransformationSpeakers.map((speaker) => (
              <motion.div key={speaker.id} variants={item}>
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
