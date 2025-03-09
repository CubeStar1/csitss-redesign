import { motion } from "framer-motion";
import { CreditCard, DollarSign, AlertCircle, IndianRupee, Info } from "lucide-react";
import { ThemedButton } from "@/components/ui/themed-button";
import { registrationInstructions, importantNotes, bankDetails, registrationFees } from "@/data/registration";

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

function Registration() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-700 ring-1 ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-400/20">
            <div className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75 dark:bg-blue-500"></span>
              <span className="relative h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
            </div>
            <CreditCard className="h-4 w-4" />
            Early Bird Registration until September 18th, 2024
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-50">
            Conference{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-sky-300">Registration</span>
          </h1>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          {/* Registration Tables */}
          <motion.div
            variants={item}
            className="overflow-x-auto rounded-2xl border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-800/80"
          >
            <table className="min-w-full divide-x divide-y divide-blue-900 border-2 border-blue-900 text-sm">
              <thead className="divide-x divide-y divide-blue-900">
                <tr className="bg-blue-900 text-white">
                  <th colSpan={6}>Indian Delegates (INR)</th>
                </tr>
                <tr className="divide-x divide-blue-900">
                  <th colSpan={2} rowSpan={2}>
                    Categories
                  </th>
                  <th colSpan={2}>Early Bird Registration (On or before 18th September)</th>
                  <th colSpan={2}>Regular Registration</th>
                </tr>
                <tr className="divide-x divide-blue-900">
                  <th className="hidden"></th>
                  <th>IEEE</th>
                  <th>Non-IEEE</th>
                  <th>IEEE</th>
                  <th>Non-IEEE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-900">
                <tr className="divide-x divide-blue-900 text-center">
                  <th rowSpan={3}>With Authorship</th>
                  <th>Student/Research Scholars</th>
                  <td>₹{registrationFees.indian.earlyBird.ieee.student}</td>
                  <td>₹{registrationFees.indian.earlyBird.nonIeee.student}</td>
                  <td>₹{registrationFees.indian.regular.ieee.student}</td>
                  <td>₹{registrationFees.indian.regular.nonIeee.student}</td>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th className="hidden"></th>
                  <th>Academicians</th>
                  <td>₹{registrationFees.indian.earlyBird.ieee.academician}</td>
                  <td>₹{registrationFees.indian.earlyBird.nonIeee.academician}</td>
                  <td>₹{registrationFees.indian.regular.ieee.academician}</td>
                  <td>₹{registrationFees.indian.regular.nonIeee.academician}</td>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th className="hidden"></th>
                  <th>Industry Professionals</th>
                  <td>₹{registrationFees.indian.earlyBird.ieee.industry}</td>
                  <td>₹{registrationFees.indian.earlyBird.nonIeee.industry}</td>
                  <td>₹{registrationFees.indian.regular.ieee.industry}</td>
                  <td>₹{registrationFees.indian.regular.nonIeee.industry}</td>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th colSpan={2}>Pre Conference Tutorial</th>
                  <td colSpan={4}>₹{registrationFees.indian.tutorial}</td>
                </tr>
                <tr className="divide-x divide-blue-900 bg-blue-900 text-center text-white">
                  <th colSpan={6}>Foreign Delegates (USD)</th>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th colSpan={2} rowSpan={2}>
                    Categories
                  </th>
                  <th colSpan={2}>Early Bird Registration (On or before 18th September)</th>
                  <th colSpan={2}>Regular Registration</th>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th className="hidden"></th>
                  <th>IEEE</th>
                  <th>Non-IEEE</th>
                  <th>IEEE</th>
                  <th>Non-IEEE</th>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th rowSpan={3}>With Authorship</th>
                  <th>Student/Research Scholars</th>
                  <td>${registrationFees.foreign.earlyBird.ieee.student}</td>
                  <td>${registrationFees.foreign.earlyBird.nonIeee.student}</td>
                  <td>${registrationFees.foreign.regular.ieee.student}</td>
                  <td>${registrationFees.foreign.regular.nonIeee.student}</td>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th className="hidden"></th>
                  <th>Academicians</th>
                  <td>${registrationFees.foreign.earlyBird.ieee.academician}</td>
                  <td>${registrationFees.foreign.earlyBird.nonIeee.academician}</td>
                  <td>${registrationFees.foreign.regular.ieee.academician}</td>
                  <td>${registrationFees.foreign.regular.nonIeee.academician}</td>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th className="hidden"></th>
                  <th>Industry Professionals</th>
                  <td>${registrationFees.foreign.earlyBird.ieee.industry}</td>
                  <td>${registrationFees.foreign.earlyBird.nonIeee.industry}</td>
                  <td>${registrationFees.foreign.regular.ieee.industry}</td>
                  <td>${registrationFees.foreign.regular.nonIeee.industry}</td>
                </tr>
                <tr className="divide-x divide-blue-900 text-center">
                  <th colSpan={2}>Pre Conference Tutorial</th>
                  <td colSpan={4}>${registrationFees.foreign.tutorial}</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 text-sm italic text-red-600 dark:text-red-400">*All pricing details mentioned above are inclusive of 18% GST</p>
          </motion.div>

          {/* Payment Buttons */}
          <motion.div variants={item} className="flex flex-col justify-center gap-4 sm:flex-row">
            <ThemedButton variant="primary" size="lg" onClick={() => window.open("https://rzp.io/l/vMqgBae", "_blank")}>
              <IndianRupee className="mr-2 h-4 w-4" />
              Pay via Razorpay (Indian Delegates)
            </ThemedButton>
          </motion.div>

          {/* Foreign Delegates Bank Details */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-500/10 to-sky-500/10 p-6 backdrop-blur-sm dark:border-blue-700/50 dark:from-blue-500/20 dark:to-sky-500/20"
          >
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
              <DollarSign className="h-5 w-5" />
              Bank Details for Foreign Delegates
            </h3>
            <div className="grid grid-cols-1 gap-4 text-gray-600 md:grid-cols-2 dark:text-gray-300">
              <div>
                <p>
                  <span className="font-semibold">Beneficiary Name:</span> {bankDetails.beneficiaryName}
                </p>
                <p>
                  <span className="font-semibold">Bank Account Number:</span> {bankDetails.accountNumber}
                </p>
                <p>
                  <span className="font-semibold">Bank Name:</span> {bankDetails.bankName}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Branch Name:</span> {bankDetails.branchName}
                </p>
                <p>
                  <span className="font-semibold">IFSC Code:</span> {bankDetails.ifscCode}
                </p>
                <p>
                  <span className="font-semibold">SWIFT Code:</span> {bankDetails.swiftCode}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-800/80"
          >
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Instructions for Registration</h3>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 [&_strong]:font-medium">
              {registrationInstructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  {instruction}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-500/10 to-red-500/10 p-6 backdrop-blur-sm dark:border-amber-700/50 dark:from-amber-500/20 dark:to-red-500/20"
          >
            <div className="mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Important Notes</h3>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                  {note}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Registration;
