"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Member {
  name: string;
  post: string;
  imgLink: string;
}

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

function MemberCard({ member }: { member: Member }) {
  return (
    <motion.div
      variants={item}
      className={cn(
        "overflow-hidden rounded-2xl bg-white dark:bg-gray-800",
        "border border-gray-100 dark:border-gray-700",
        "group transition-all duration-300 hover:shadow-xl"
      )}
    >
      <div className="flex flex-col items-stretch md:flex-row">
        <div className="relative h-[360px] w-full shrink-0 bg-gray-100 md:h-[280px] md:w-[320px] dark:bg-gray-700">
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-500/5 to-sky-500/5 transition-opacity duration-300 group-hover:opacity-0" />
          <Image
            src={member.imgLink}
            alt={member.name}
            fill
            className="transform object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-50 dark:group-hover:text-blue-400">
            {member.name}
          </h3>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{member.post}</p>
        </div>
      </div>
    </motion.div>
  );
}

const CommitteeDetail = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [committeeName, setCommitteeName] = useState("");

  useEffect(() => {
    const fetchCommitteeData = async () => {
      const pathname = window.location.pathname;
      const name = pathname.split("/").pop();

      if (name) {
        try {
          const data = require(`../../data/${name}`).default;
          setMembers(data);
          // Convert path to readable name
          setCommitteeName(
            name
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          );
        } catch (error) {
          console.error("Error fetching committee data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCommitteeData();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading members...</span>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-transparent py-20 dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      {/* Content Container */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back Button and Header */}
        <div className="mb-12">
          <Link
            href="/committee"
            className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Committees</span>
          </Link>

          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">{committeeName}</h1>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-sky-500" />
          </motion.div>
        </div>

        {/* Members Grid */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          {members.map((member, index) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/3 -z-10 h-64 w-64 translate-x-1/4 transform rounded-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 -z-10 h-64 w-64 -translate-x-1/4 transform rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 blur-3xl" />
    </section>
  );
};

export default CommitteeDetail;
