"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Split navigation links into columns
  const column1 = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/speakers', label: 'Speakers' },
    { href: '/papers', label: 'Papers' },
    { href: '/registration', label: 'Registration' },
  ]

  const column2 = [
    { href: '/awards', label: 'Awards' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/tracks', label: 'Tracks' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="border-t bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* College Details */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start md:col-span-6">
            <Image
              src="/logo_rvce.jpg"
              alt="RVCE Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <p className="text-base italic text-primary mt-6">
              Go, change the world
            </p>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-primary mb-4">
                RV College of Engineering
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <p>RV Vidyanikethan Post, Mysuru Road Bengaluru - 560059</p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="h-4 w-4 shrink-0" />
                  <p>+91 80 6717 8021</p>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:principal@rvce.edu.in" className="hover:text-primary transition-colors">
                    principal@rvce.edu.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center md:col-span-6 md:pl-12 md:items-end md:justify-center">
            <div className="grid grid-cols-2 gap-x-24 gap-y-4">
              <div className="space-y-3">
                {column1.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {column2.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear === 2022 ? "2022" : `2022-${currentYear}`} IEEE RVCE
            </p>
            <div className="text-sm text-muted-foreground">
              Developed by{" "}
              <Link
                href="https://ieee-rvce.org/#/devs"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                IEEE RVCE SE Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 