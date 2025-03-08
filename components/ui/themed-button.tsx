"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ButtonProps } from "@/components/ui/button"

interface ThemedButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "primary" | "secondary"
}

const variants = {
  primary: "group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white",
  secondary: "group bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700",
}

const baseStyles = "w-full sm:w-auto px-8 h-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"

export function ThemedButton({ 
  variant = "primary", 
  className, 
  children,
  ...props 
}: ThemedButtonProps) {
  return (
    <Button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Button>
  )
} 