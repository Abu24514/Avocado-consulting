"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { NavDropdown } from "./NavDropdown";
import { servicesDropdown, featuresDropdown } from "@/data/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"services" | "features" | null>(null);

  useEffect(() => {

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-full transition-all duration-300 px-5",
            scrolled
              ? "bg-ink/85 backdrop-blur-xl border border-white/10 h-16 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)]"
              : "bg-transparent h-20 border border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-11 h-11 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5">
              <Image
                src="/logo.png"
                alt="Avocado Consulting logo"
                width={44}
                height={44}
                className="object-contain w-full h-full"
              />
            </span>
            <span className="font-semibold text-lg tracking-tight text-white">
              Avocado
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-white/75 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-white/75 hover:text-white transition-colors"
            >
              About
            </Link>
            <NavDropdown label="Services" items={servicesDropdown} />
            <NavDropdown label="Features" items={featuresDropdown} />
          </nav>

          {/* Desktop Contact Button (Fixed Design) */}
          <div className="hidden lg:block shrink-0">
            <ButtonLink href="/contact" variant="primary" size="md">
              Contact Us
            </ButtonLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 mx-6"
          >
            <div className="rounded-3xl bg-ink border border-white/10 px-6 py-6 flex flex-col gap-1 shadow-2xl">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white py-3 border-b border-white/5"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white py-3 border-b border-white/5"
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <button
                onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
                className="flex items-center justify-between text-base font-medium text-white py-3 border-b border-white/5"
              >
                Services
                <FiChevronDown className={cn("transition-transform", mobileSection === "services" && "rotate-180")} />
              </button>
              {mobileSection === "services" && (
                <div className="pl-3 pb-2 flex flex-col gap-4 pt-3">
                  {servicesDropdown.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Features Dropdown */}
              <button
                onClick={() => setMobileSection(mobileSection === "features" ? null : "features")}
                className="flex items-center justify-between text-base font-medium text-white py-3 border-b border-white/5"
              >
                Features
                <FiChevronDown className={cn("transition-transform", mobileSection === "features" && "rotate-180")} />
              </button>
              {mobileSection === "features" && (
                <div className="pl-3 pb-2 flex flex-col gap-4 pt-3">
                  {featuresDropdown.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Contact Button */}
              <ButtonLink
                href="/contact"
                variant="primary"
                size="md"
                className="mt-6 w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}