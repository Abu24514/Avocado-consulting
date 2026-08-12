"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { navLinks, servicesDropdown } from "@/data/nav"; // adjust path as per your project
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "X", href: "#", icon: FaXTwitter },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/60 pt-20 pb-10 ">
      {/* Animated Grid Lines Background — same as Hero */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Shining Lines */}
        <motion.div
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute left-[15%] md:left-[25%] w-px h-62.5 bg-linear-to-b from-transparent via-brand to-transparent opacity-60"
        />
        <motion.div
          initial={{ top: "-100%" }}
          animate={{ top: "100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 3.5 }}
          className="absolute left-[85%] md:left-[75%] w-px h-50 bg-linear-to-b from-transparent via-brand to-transparent opacity-50"
        />
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[35%] h-px w-75 bg-linear-to-r from-transparent via-brand to-transparent opacity-60"
        />

        {/* Soft vignette so grid never fights the text */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-ink/70" />
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-12 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-11 h-11 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
                <Image src="/logo.png" alt="Avocado Consulting logo" width={44} height={44} className="object-contain w-full h-full" />
              </span>
              <span className="font-semibold text-lg text-white">Avocado Consulting</span>
            </div>
            <p className="text-xs uppercase tracking-[0.16em] text-brand/80 mb-4">
              Technology &middot; Strategy &middot; Growth
            </p>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Avocado Consulting helps businesses simplify operations,
              implement powerful CRM systems, and use AI to build smarter,
              more scalable organizations.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-brand hover:text-brand hover:bg-brand/10 transition-colors"
                  >
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-white/35 mb-4">Company</p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-white/35 mb-4">Services</p>
            <ul className="space-y-3 text-sm">
              {servicesDropdown.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/35">
          <p>&copy; 2026 Avocado Consulting</p>
          <div className="flex gap-6">
            <Link href="/policies" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}