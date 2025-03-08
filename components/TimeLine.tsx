import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Download, X } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemedButton } from '@/components/ui/themed-button';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation: Variants = {
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

interface TimelineItem {
  label: string;
  date: string;
  gradient: string;
  iconGradient: string;
}

const CustomTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showPopup, setShowPopup] = useState(false);

  const timelineData: TimelineItem[] = [
    {
      label: 'Paper Submission Begins',
      date: '20th March 2025',
      gradient: 'from-blue-400/20 to-indigo-500/20',
      iconGradient: 'from-blue-400 to-indigo-500'
    },
    {
      label: 'Paper Submission Deadline',
      date: '20th July 2025',
      gradient: 'from-emerald-400/20 to-teal-500/20',
      iconGradient: 'from-emerald-400 to-teal-500'
    },
    {
      label: 'Notification of Acceptance',
      date: '30th August 2025',
      gradient: 'from-amber-400/20 to-orange-500/20',
      iconGradient: 'from-amber-400 to-orange-500'
    },
    {
      label: 'Camera Ready Paper',
      date: '10th September 2025',
      gradient: 'from-rose-400/20 to-pink-500/20',
      iconGradient: 'from-rose-400 to-pink-500'
    },
    {
      label: 'Conference Registration',
      date: '10th October 2025',
      gradient: 'from-purple-400/20 to-violet-500/20',
      iconGradient: 'from-purple-400 to-violet-500'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('timeline');
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);

      if (isVisible) {
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height));
        const newActiveIndex = Math.floor(progress * timelineData.length);
        setActiveIndex(Math.min(newActiveIndex, timelineData.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-white to-transparent dark:from-transparent dark:via-gray-900 dark:to-transparent py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>

      {/* Popup Notification */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: showPopup ? 1 : 0, 
          y: showPopup ? 0 : -100 
        }}
        className="fixed top-4 right-4 z-50"
      >
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-4 rounded-xl shadow-xl backdrop-blur-xl flex items-center gap-3">
          <span className="font-medium">Coming Soon!</span>
          <button 
            onClick={() => setShowPopup(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" id="timeline">
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={container}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 px-4 py-2 text-base text-blue-700 dark:text-blue-300 ring-1 ring-blue-700/10 dark:ring-blue-400/20">
            <Calendar className="h-5 w-5" />
            Important Dates
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
            Conference{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line - Desktop Only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden lg:block bg-gradient-to-b from-blue-500/20 to-sky-500/20 dark:from-blue-400/20 dark:to-sky-300/20"></div>

          <div className="relative space-y-8 lg:space-y-16">
            {timelineData.map((timelineItem, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className={cn(
                  "relative flex items-center lg:justify-between gap-8",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                  "flex-row" // Default for mobile
                )}
              >
                {/* Content Side */}
                <div className={cn(
                  "flex items-start gap-8 w-full lg:w-[calc(50%-2rem)]",
                  index % 2 === 0 ? "lg:text-right lg:flex-row-reverse" : "lg:text-left",
                  "text-left flex-row relative" // Added relative for mobile line positioning
                )}>
                  {/* Mobile Timeline Line */}
                  {index < timelineData.length - 1 && (
                    <div className="absolute left-8 top-[4rem] w-0.5 h-24 lg:hidden bg-gradient-to-b from-blue-500/20 to-sky-500/20 dark:from-blue-400/20 dark:to-sky-300/20"></div>
                  )}

                  <motion.div
                    initial={false}
                    animate={{
                      scale: index <= activeIndex ? 1 : 0.9,
                      opacity: index <= activeIndex ? 1 : 0.5
                    }}
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl z-10", // Added z-10
                      "bg-gradient-to-br shadow-lg transition-all duration-500",
                      index <= activeIndex ? timelineItem.gradient : "from-gray-400/20 to-gray-500/20"
                    )}
                  >
                    <Clock className="w-8 h-8 text-gray-800 dark:text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      y: index <= activeIndex ? 0 : 20,
                      opacity: index <= activeIndex ? 1 : 0.7
                    }}
                    className="flex-1 pt-3"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                      {timelineItem.label}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                      {timelineItem.date}
                    </p>
                  </motion.div>
                </div>

                {/* Center Dot - Desktop Only */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 dark:from-blue-400 dark:to-sky-300 shadow-lg"></div>

                {/* Empty Space for Other Side */}
                <div className="hidden lg:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          variants={itemAnimation}
          className="mt-16 text-center"
        >
          <ThemedButton
            variant="primary"
            onClick={handleDownload}
            className="px-8"
          >
            <Download className="w-5 w-5 mr-2" />
            Download Pre-Conference Schedule
          </ThemedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomTimeline;