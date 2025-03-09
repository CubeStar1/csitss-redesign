"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Day1, Day2, Day3, ScheduleData } from "@/data/program-schedule";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      damping: 15,
    },
  },
};

function ScheduleTable({ data }: { data: ScheduleData }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200/50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />

      <div className="relative">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {data.columns.map((col: string, index: number) => (
                <TableHead
                  key={index}
                  className="h-12 whitespace-nowrap border-b border-gray-200/50 bg-gray-100/80 font-semibold text-gray-700 backdrop-blur-sm"
                >
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.rows.map((row: string[], index: number) => (
              <TableRow
                key={index}
                className={`
                  transition-colors hover:bg-gray-50/50
                  ${index % 2 === 0 ? "bg-white/80" : "bg-gray-50/80"}
                `}
              >
                {row.map((cell: string, cellIndex: number) => (
                  <TableCell
                    key={cellIndex}
                    className={`border-b border-gray-100/50 py-4 ${cellIndex === 0 ? "whitespace-nowrap font-medium text-gray-900" : ""} ${
                      cell === "High Tea" || cell === "Lunch" || cell === "TEA BREAK" || cell === "LUNCH" ? "font-medium text-blue-600" : "text-gray-600"
                    } ${cellIndex === row.length - 1 ? "whitespace-nowrap text-gray-500" : ""}`}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default function ProgramSchedule() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      {/* Decorative Blobs */}
      <div className="absolute right-0 top-1/4 -z-10 h-96 w-96 translate-x-1/3 transform rounded-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -z-10 h-96 w-96 -translate-x-1/3 transform rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16">
        <motion.div variants={item} className="mb-12 text-center">
          <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">Conference Schedule</span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-50">Program Schedule</h1>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
        </motion.div>

        <motion.div variants={item} className="relative z-10">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3 rounded-xl border border-gray-200/50 bg-white/50 p-1 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/50">
              <TabsTrigger
                value="day1"
                className="rounded-lg text-gray-600 transition-all duration-300 data-[state=active]:border-none data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md dark:text-gray-300 dark:data-[state=active]:text-white"
              >
                Day 1
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                className="rounded-lg text-gray-600 transition-all duration-300 data-[state=active]:border-none data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md dark:text-gray-300 dark:data-[state=active]:text-white"
              >
                Day 2
              </TabsTrigger>
              <TabsTrigger
                value="day3"
                className="rounded-lg text-gray-600 transition-all duration-300 data-[state=active]:border-none data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md dark:text-gray-300 dark:data-[state=active]:text-white"
              >
                Day 3
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="space-y-8 focus-visible:outline-none">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">{Day1[0].head[1][0]}</h2>
              </div>
              {Day1.map((track, index) => (
                <motion.div key={index} variants={item} className="overflow-hidden">
                  <h3 className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-200">
                    Track {index + 1}: {track.columns[2]}
                  </h3>
                  <ScheduleTable data={track} />
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="day2">
              <motion.div variants={item} className="space-y-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">{Day2.head[1][0]}</h2>
                </div>
                <ScheduleTable data={Day2} />
              </motion.div>
            </TabsContent>

            <TabsContent value="day3">
              <motion.div variants={item} className="space-y-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">{Day3.head[1][0]}</h2>
                </div>
                <ScheduleTable data={Day3} />
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
}
