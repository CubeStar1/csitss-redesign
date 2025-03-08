import { motion } from 'framer-motion';
import { CreditCard, DollarSign, AlertCircle, IndianRupee, Info } from 'lucide-react';
import { ThemedButton } from "@/components/ui/themed-button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

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
}

function Registration() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 dark:to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
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
            <CreditCard className="h-4 w-4" />
            Early Bird Registration until September 18th, 2024
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl mb-6">
            Conference{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300 bg-clip-text text-transparent">
              Registration
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Registration Tables */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl p-6 border border-gray-200/50 dark:border-gray-700/50 overflow-x-auto"
          >
            <table className="min-w-full divide-y divide-x text-sm border-2 border-blue-900 divide-blue-900">
              <thead className="divide-x divide-y divide-blue-900">
                <tr className="bg-blue-900 text-white">
                  <th colSpan={6}>Indian Delegates (INR)</th>
                </tr>
                <tr className="divide-x divide-blue-900">
                  <th colSpan={2} rowSpan={2}>Categories</th>
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
                <tr className="divide-x text-center divide-blue-900">
                  <th rowSpan={3}>With Authorship</th>
                  <th>Student/Research Scholars</th>
                  <td>₹5310</td>
                  <td>₹6490</td>
                  <td>₹6490</td>
                  <td>₹7670</td>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th className="hidden"></th>
                  <th>Academicians</th>
                  <td>₹7080</td>
                  <td>₹8260</td>
                  <td>₹8260</td>
                  <td>₹10030</td>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th className="hidden"></th>
                  <th>Industry Professionals</th>
                  <td>₹8260</td>
                  <td>₹9440</td>
                  <td>₹11800</td>
                  <td>₹15930</td>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th colSpan={2}>Pre Conference Tutorial</th>
                  <td colSpan={4}>₹500</td>
                </tr>
                <tr className="divide-x text-center bg-blue-900 text-white divide-blue-900">
                  <th colSpan={6}>Foreign Delegates (USD)</th>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th colSpan={2} rowSpan={2}>Categories</th>
                  <th colSpan={2}>Early Bird Registration (On or before 18th September)</th>
                  <th colSpan={2}>Regular Registration</th>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th className="hidden"></th>
                  <th>IEEE</th>
                  <th>Non-IEEE</th>
                  <th>IEEE</th>
                  <th>Non-IEEE</th>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th rowSpan={3}>With Authorship</th>
                  <th>Student/Research Scholars</th>
                  <td>$80</td>
                  <td>$110</td>
                  <td>$110</td>
                  <td>$130</td>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th className="hidden"></th>
                  <th>Academicians</th>
                  <td>$100</td>
                  <td>$130</td>
                  <td>$135</td>
                  <td>$165</td>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th className="hidden"></th>
                  <th>Industry Professionals</th>
                  <td>$110</td>
                  <td>$135</td>
                  <td>$200</td>
                  <td>$240</td>
                </tr>
                <tr className="divide-x text-center divide-blue-900">
                  <th colSpan={2}>Pre Conference Tutorial</th>
                  <td colSpan={4}>$25</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 text-sm text-red-600 dark:text-red-400 italic">
              *All pricing details mentioned above are inclusive of 18% GST
            </p>
          </motion.div>

          {/* Payment Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <ThemedButton
              variant="primary"
              size="lg"
              onClick={() => window.open('https://rzp.io/l/vMqgBae', '_blank')}
            >
              <IndianRupee className="h-4 w-4 mr-2" />
              Pay via Razorpay (Indian Delegates)
            </ThemedButton>
          </motion.div>

          {/* Foreign Delegates Bank Details */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 dark:from-blue-500/20 dark:to-sky-500/20 p-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Bank Details for Foreign Delegates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
              <div>
                <p><span className="font-semibold">Beneficiary Name:</span> PRINCIPAL, RVCE</p>
                <p><span className="font-semibold">Bank Account Number:</span> 136010112055</p>
                <p><span className="font-semibold">Bank Name:</span> KOTAK MAHINDRA BANK</p>
              </div>
              <div>
                <p><span className="font-semibold">Branch Name:</span> RVCE Campus, Bengaluru</p>
                <p><span className="font-semibold">IFSC Code:</span> KKBK0008053</p>
                <p><span className="font-semibold">SWIFT Code:</span> KKBKINBB</p>
              </div>
            </div>
          </motion.div>

          {/* Instructions */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Instructions for Registration</h3>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 [&_strong]:font-medium">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                At least one author per accepted paper has to register.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                At least one author must present their accepted paper in the conference for consideration of publication on IEEE explore.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                Registration fee for the paper (**with authorship**) includes access to the pre conference tutorial, conference proceedings, all technical sessions and presenter certificate.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                Registration fee for the **pre conference tutorial** includes access to the pre conference tutorial only (7th Nov 2024).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                Registration fee for the **conference participation without authorship-attendee** is not entitled for paper publication, however participation certificate will be provided.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                Registration for **Indian Delegates is through Razorpay** and **Foreign Delegates can use the account details** mentioned for bank transfer.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                While registering for **Best Thesis Award**, enter paper id as 9999.
              </li>
            </ul>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            variants={item}
            className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-red-500/10 dark:from-amber-500/20 dark:to-red-500/20 p-6 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Important Notes</h3>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                Registration category should be chosen appropriately from the aforementioned table.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                Registration fees are not refundable or non-transferable.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                You must save the payment proof in <span className="italic">pdf</span>. This payment proof file is to be attached in a section while filling the registration form.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                CSITSS-2024 organizing committee will not be responsible for any financial loss caused by improper transactions during registration process in CSITSS-2024.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                The author's name(s) must match the ones provided during the manuscript submission, registration (There should be one/same name at all stages of the conference).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400"></span>
                The submission of invalid proofs will lead to the cancellation of participation in the conference.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Registration;
