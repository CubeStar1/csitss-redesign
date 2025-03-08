import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

type Track = {
  title: string;
  items: string[];
};

function TrackCard({ track }: { track: Track }) {
  return (
    <motion.div
      variants={item}
      className="relative rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 transition-all duration-300 hover:shadow-2xl group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-sky-500/[0.05] dark:from-blue-400/[0.03] dark:to-sky-400/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-blue-400/10 dark:to-sky-400/10">
            <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{track.title}</h3>
        </div>
        
        <ul className="space-y-3 pl-[3.25rem]">
          {track.items.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 }
                }
              }}
              className="flex items-start gap-3 group/item"
            >
              <ArrowRight className="w-4 h-4 mt-1 text-blue-500/70 dark:text-blue-400/70 transition-transform group-hover/item:translate-x-1" />
              <span className="text-gray-600 dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Tracks() {
  const tracks = [
    {
      title: 'Computational Analysis of Structural and Functional Materials',
      items: [
        'Energy Materials, Nanomaterials, Smart Materials',
        'High-performance Embedded Computation',
        'Decision and Planning',
        'Target Tracking/Recognition',
      ],
    },
    {
      title: 'Green Electronics: Sustainable Practices',
      items: [
        'Eco-Friendly Materials for Electronics',
        'Energy-Efficient Electronic Devices',
        'Green Supply Chain Management in Electronics',
        'Biodegradable and Organic Electronics',
      ],
    },
    {
      title: 'Robotics and Automation',
      items: [
        'Artificial Intelligence in Robotics',
        'Human-Robot Interaction',
        'Agricultural Robotics',
        'Robotic Perception and Sensing',
      ],
    },
    {
      title: 'Photonics, Optoelectronics and Mechatronics Systems',
      items: [
        'Fiber optics and optical communications',
        'Optical sensors and imaging systems',
        'Control systems and intelligent systems',
        'Micro-electromechanical systems (MEMS)',
      ],
    },
    {
      title: 'Artificial Intelligence for Sustainable World',
      items: [
        'AI and ML engineering and science applications',
        'Natural language processing and large language models for regional requirements',
        'Advanced AI models and algorithms',
        'Mathematical algorithms for ML',
        'New generation hardware architectures for AI',
        'Generative AI for society and industry',
      ],
    },
    {
      title: 'Digital Transformation in Various Sectors of Economy',
      items: [
        'Digital transformation in Logistics',
        'Digitization and Inclusivity in Banking and Financial Services Sector',
        'Digital Modeling practices in Manufacturing',
        'E-commerce and E-business',
      ],
    },
    {
      title: 'Renewable Energy and Environmental Engineering',
      items: [
        'Microgrids & Smart grids',
        'Power Electronics application to Renewable Energy systems',
        'Computational Intelligent Techniques for Energy Sustainability',
        'Distributed Energy system and Control Strategies',
        'Power System operation, resilience, monitoring and control',
        'Carbon Capture, Utilization & Storage (CCUS) and Alternative Fuels',
        'Sustainable construction materials and technologies',
      ],
    },
    {
      title: 'Cyber-Physical Systems',
      items: [
        'Next-Generation CPS Architectures',
        'IoT-based Smart Infrastructures',
        'Cybersecurity Challenges in CPS',
        'Ethical Considerations in CPS Design and Deployment',
      ],
    },
    {
      title: 'Biomedical Electronics and Healthcare Applications',
      items: [
        'Biomedical Image processing',
        'Biosensors and Wearable electronics',
        'Point of care devices, Bio_Mems',
      ],
    },
    {
      title: 'Quantum Mechanics and Computing',
      items: [
        'Hybrid quantum-classical computing systems',
        'Quantum simulation and modelling',
        'Quantum machine learning and optimization algorithms',
      ],
    },
    {
      title: 'Next-Generation Communication Systems',
      items: [
        'Internet of Things (IoT), 5G and Beyond',
        'Edge Computing and Edge Networking',
        'Software-Defined Networking (SDN) and Network Function Virtualization (NFV)',
        'Satellite Communication Systems',
        'Wireless Sensor Networks and Smart Grid Communication',
        'Blockchain and Distributed Ledger Technologies (DLT)',
        'Emerging Communication Technologies',
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />
      
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 px-3 py-1 text-sm text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/20">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <Layers className="h-4 w-4" />
            Research Areas
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl lg:text-7xl mb-8">
            Conference{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Tracks
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Authors are invited to submit their original research work in the following areas (but not limited to):
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {tracks.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Tracks;
