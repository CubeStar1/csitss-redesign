import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  gradient: string;
  iconGradient: string;
  className?: string;
  // For stats variant
  value?: string;
  isStatCard?: boolean;
}

export function GradientCard({ icon: Icon, title, description, gradient, iconGradient, className, value, isStatCard = false }: GradientCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn(
        "group relative overflow-hidden bg-gradient-to-br",
        gradient,
        "backdrop-blur-xl dark:bg-opacity-20",
        "border border-white/10 shadow-xl hover:border-white/20 hover:shadow-2xl",
        "transition-all duration-300 ease-out",
        isStatCard ? "h-[160px] rounded-2xl p-6" : "rounded-3xl p-8",
        className
      )}
    >
      {isStatCard ? (
        // Stats Card Layout
        <div className="flex h-full flex-col justify-between">
          <div>
            {Icon && (
              <div className={cn("inline-flex rounded-xl bg-gradient-to-br p-2.5", iconGradient)}>
                <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
            )}
            <p className="mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">{value}</p>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</p>
        </div>
      ) : (
        // Feature Card Layout
        <>
          {Icon && (
            <div className={cn("inline-flex rounded-2xl bg-gradient-to-br p-3", iconGradient)}>
              <Icon className="h-6 w-6 text-white" />
            </div>
          )}
          <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-gray-50">{title}</h3>
          {description && <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>}
        </>
      )}

      {/* Decorative elements */}
      <div className="absolute right-0 top-0 -z-10 h-24 w-24 -translate-y-1/3 translate-x-1/3 transform rounded-full bg-white/10 blur-2xl transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 dark:bg-white/5"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-16 w-16 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-white/10 blur-xl transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0 dark:bg-white/5"></div>
    </motion.div>
  );
}
