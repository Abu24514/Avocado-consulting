"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { DropdownItem } from "@/types";
import { cn } from "@/lib/utils";

export function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: DropdownItem[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm font-medium text-white transition-colors duration-200 hover:text-brand"
      >
        {label}

        <FiChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 w-85 -translate-x-1/2 pt-3"
          >
            <div className="rounded-2xl border border-black/5 bg-white p-2.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "group block rounded-xl px-4 py-3 transition-all duration-200",
                    item.featured
                      ? "bg-brand/10"
                      : "bg-transparent hover:bg-brand/10"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className={cn(
                        "text-sm font-medium transition-colors duration-200",
                        item.featured
                          ? "text-brand"
                          : "text-black group-hover:text-brand"
                      )}
                    >
                      {item.label}
                    </p>

                    {item.featured && (
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-brand">
                        Flagship
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs leading-relaxed text-black/50 transition-colors duration-200 group-hover:text-black/70">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}