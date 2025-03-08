"use client";

import { cn } from "@/lib/utils";

interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function DotPattern({ className, glow, ...props }: DotPatternProps) {
  return (
    <div
      className={cn("absolute inset-0 -z-10 h-full w-full", className)}
      {...props}
    >
      <div
        className={cn(
          "absolute h-full w-full",
          "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
          glow &&
            "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        )}
      />
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl" />
      )}
    </div>
  );
} 