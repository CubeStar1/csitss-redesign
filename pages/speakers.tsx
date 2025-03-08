import { motion } from "framer-motion"
import Image from "next/image"
import { GradientCard } from "@/components/ui/gradient-card"
import { Users, Brain, Lightbulb } from "lucide-react"

type SpeakerType = {
  id: number
  name: string
  designation: string
  topic?: string
  imageLink: string
}

const keynoteSpeakers: SpeakerType[] = [
  {
    id: 1,
    name: 'Sri. S S Iyengar',
    designation:
      'Distinguished University Professor, Florida International University (FIU), Miami',
    imageLink: '/speakers/ss_iyenger.jpeg',
  },
  {
    id: 2,
    name: 'Chaitra Vedullapalli',
    designation: 'Cofounder & CMO, Meylah',
    imageLink: '/speakers/chaitra_v.jpeg',
  },
  {
    id: 3,
    name: 'Prof. Dr.-Ing. Vinod Rajamani',
    designation: 'Professor, University of Applied Sciences and Arts Dortmund',
    imageLink:
      'https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/3312b7eed140ac54332cfc22f82c192c.jpg',
  },
]

const aiForAllSpeakers: SpeakerType[] = [
  {
    id: 4,
    name: 'Mr. Raj Pagaku',
    designation:
      'VP Engineering, Security Business Unit, Juniper Networks India Pvt Ltd, Bengaluru, India',
    topic: 'Inclusive AI: Shaping the Future for Everyone',
    imageLink:
      'https://media.licdn.com/dms/image/v2/D5603AQHYe3rt7tTUZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690629699833?e=1735776000&v=beta&t=kILq2XM2fufTdX-vVWqQWYw2E8EJGwS_sSRuuxW5dfs',
  },
  {
    id: 5,
    name: 'Dr. Nagaraju G',
    designation:
      'Director, Ophthalmology, Minto Eye Hospital, BMCRI, Bengaluru',
    topic: 'AI in Health Care',
    imageLink:
      'https://mhbmcri.karnataka.gov.in/storage/pdf-files/DrNagraj.jpg',
  },
]

const digitalTransformationSpeakers: SpeakerType[] = [
  {
    id: 6,
    name: 'Dr. K B Shyam Prasad',
    designation:
      'Momentive Performance Materials India Pvt Ltd, India Technology Centre, Bengaluru',
    topic: 'Accelerate Innovation through Digital Tools',
    imageLink:
      'https://media.licdn.com/dms/image/v2/C5603AQH8tHEbqXh4dg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517713735746?e=1735776000&v=beta&t=PEUeA-D3bFctLoqUEMUQ_8IAL_IlunJ3RPc2rVHb9kI',
  },
  {
    id: 7,
    name: 'Mr. Abhi Anand',
    designation:
      'Director (Financial Services Leader), PwC, Bagmane Tech Park, Bengaluru',
    topic: 'Sustainable AI Applications',
    imageLink:
      'https://media.licdn.com/dms/image/v2/D5603AQHZ1kZTvzQ-tA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692179908763?e=1735776000&v=beta&t=Rya_Qbez8e9baX4U9ZtaTIalpl8o95Z5xbyI_Gf_Q6Y',
  },
]

function SpeakerCard({ speaker }: { speaker: SpeakerType }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={speaker.imageLink}
          alt={speaker.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold">{speaker.name}</h3>
        <p className="mt-2 text-sm text-gray-300">{speaker.designation}</p>
        {speaker.topic && (
          <div className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
            {speaker.topic}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function SectionTitle({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className={`inline-block rounded-full bg-gradient-to-r ${gradient} bg-clip-text px-8 py-3 text-4xl font-extrabold text-transparent`}>
        {children}
      </h2>
    </motion.div>
  )
}

export default function Speakers() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Track Overview Cards */}
        <div className="grid gap-8 mb-24 md:grid-cols-3">
          <GradientCard
            icon={Users}
            title="Keynote Speakers"
            description="Distinguished experts sharing their insights and vision"
            gradient="from-purple-500/20 to-indigo-500/20"
            iconGradient="from-purple-500 to-indigo-500"
          />
          <GradientCard
            icon={Brain}
            title="AI for All"
            description="Track 1: Exploring the democratization of artificial intelligence"
            gradient="from-blue-500/20 to-cyan-500/20"
            iconGradient="from-blue-500 to-cyan-500"
          />
          <GradientCard
            icon={Lightbulb}
            title="Digital Transformation"
            description="Track 2: Leading the change in digital innovation"
            gradient="from-teal-500/20 to-emerald-500/20"
            iconGradient="from-teal-500 to-emerald-500"
          />
        </div>

        {/* Keynote Speakers */}
        <div className="mb-24">
          <SectionTitle gradient="from-purple-600 via-indigo-600 to-blue-600">
            Keynote Speakers
          </SectionTitle>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
          <SectionTitle gradient="from-blue-600 via-cyan-600 to-teal-600">
            Track 1: AI for All
          </SectionTitle>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2"
          >
            {aiForAllSpeakers.map((speaker) => (
              <motion.div key={speaker.id} variants={item}>
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Digital Transformation Track */}
        <div>
          <SectionTitle gradient="from-teal-600 via-emerald-600 to-green-600">
            Track 2: Digital Transformation
          </SectionTitle>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 grid gap-8 sm:grid-cols-2"
          >
            {digitalTransformationSpeakers.map((speaker) => (
              <motion.div key={speaker.id} variants={item}>
                <SpeakerCard speaker={speaker} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
