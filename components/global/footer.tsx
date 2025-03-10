"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const column1 = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/speakers", label: "Speakers" },
    { href: "/papers", label: "Papers" },
    { href: "/registration", label: "Registration" },
  ];

  const column2 = [
    { href: "/awards", label: "Awards" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/tracks", label: "Tracks" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-background/80 border-t backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* College Details */}
          <div className="flex flex-col items-center text-center md:col-span-6 md:items-start md:text-left">
            <Image src="/logos/rvce_logo.png" alt="RVCE Logo" width={80} height={80} className="rounded-lg" />
            <p className="text-primary mt-6 text-base italic">Go, change the world</p>
            <div className="mt-6">
              <h2 className="text-primary mb-4 text-xl font-bold">RV College of Engineering</h2>
              <div className="text-muted-foreground space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <p>RV Vidyanikethan Post, Mysuru Road Bengaluru - 560059</p>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Phone className="h-4 w-4 shrink-0" />
                  <p>+91-080-68188100</p>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:principal@rvce.edu.in" className="hover:text-primary transition-colors">
                    principal@rvce.edu.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center md:col-span-6 md:items-end md:justify-center md:pl-12">
            <div className="grid grid-cols-2 gap-x-24 gap-y-4">
              <div className="space-y-3">
                {column1.map((link) => (
                  <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary block text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {column2.map((link) => (
                  <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary block text-sm transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">© {currentYear === 2022 ? "2022" : `2022-${currentYear}`} IEEE RVCE</p>
            <div className="text-muted-foreground text-sm">
              Developed by{" "}
              <Link href="https://ieee-rvce.org/#/devs" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                IEEE RVCE SE Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
