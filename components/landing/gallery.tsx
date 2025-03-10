import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const imgLinks = [
    "/gallery/image_1.webp",
    "/gallery/image_2.webp",
    "/gallery/image_3.webp",
    "/gallery/image_4.webp",
    "/gallery/image_5.webp",
    "/gallery/image_6.webp",
    "/gallery/image_7.webp",
    "/gallery/image_8.webp",
    "/gallery/image_9.webp",
    "/gallery/image_10.webp",
    "/gallery/image_11.webp",
    "/gallery/image_12.webp",
    "/gallery/image_13.webp",
    "/gallery/image_14.webp",
    "/gallery/image_15.webp",
    "/gallery/image_16.webp",
    "/gallery/image_17.webp",
    "/gallery/image_18.webp",
    "/gallery/image_19.webp",
    "/gallery/image_20.webp",
    "/gallery/image_21.webp",
    "/gallery/image_22.webp",
    "/gallery/image_23.webp",
    "/gallery/image_24.webp",
    "/gallery/image_25.webp",
    "/gallery/image_26.webp",
    "/gallery/image_27.webp",
  ];

  const columns = [
    imgLinks.slice(0, Math.ceil(imgLinks.length / 3)),
    imgLinks.slice(Math.ceil(imgLinks.length / 3), Math.ceil(imgLinks.length / 3) * 2),
    imgLinks.slice(Math.ceil(imgLinks.length / 3) * 2),
  ];

  const getImageNumber = (link: string) => {
    const match = link.match(/image_(\d+)\.webp/);
    return match ? match[1] : "";
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const getRandomOffset = () => {
    const offsets = [-4, -2, 0, 2, 4];
    return offsets[Math.floor(Math.random() * offsets.length)];
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent via-white to-transparent py-24 sm:py-32 dark:from-transparent dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-base text-blue-700 ring-1 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20">
            <Camera className="h-5 w-5" />
            Photo Gallery
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
            Capturing{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-300">Moments</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">A collection of memories from our previous conferences</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-8">
              {column.map((link, imgIndex) => {
                const randomOffset = getRandomOffset();
                return (
                  <Dialog key={link}>
                    <DialogTrigger asChild>
                      <motion.div
                        variants={item}
                        whileHover={{
                          scale: 1.02,
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        className={cn(
                          "group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/5 to-sky-500/5 p-1",
                          "cursor-pointer backdrop-blur-xl transition-all duration-300",
                          "hover:from-blue-500/10 hover:to-sky-500/10 dark:from-blue-400/5 dark:to-sky-300/5",
                          `translate-y-[${randomOffset}px]`
                        )}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                          <Image
                            src={link}
                            alt={`Gallery image ${getImageNumber(link)}`}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            width={1000}
                            height={1000}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="translate-y-4 transform text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                Image {getImageNumber(link)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl border-none bg-transparent p-0">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-lg"
                      >
                        <Image
                          src={link}
                          alt={`Gallery image ${getImageNumber(link)} - Enlarged View`}
                          className="rounded-lg object-contain"
                          width={1920}
                          height={1080}
                          priority
                        />
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
