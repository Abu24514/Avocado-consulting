import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/common/FadeUp";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="relative bg-white py-32 md:py-48 flex items-center justify-center min-h-[85vh] overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-144 w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/6 blur-3xl" />
        <div className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-brand/8 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-forest/6 blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Giant ghost numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-46%] select-none font-bold text-[13rem] sm:text-[18rem] md:text-[22rem] leading-none tracking-tighter text-ink/9"
      >
        404
      </span>

      <Container className="relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Eyebrow Style 404 Tag */}
          <FadeUp>
            <div className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5">
              <span className="font-mono text-sm font-semibold tracking-widest text-brand uppercase">
                404 Error
              </span>
            </div>
          </FadeUp>

          {/* Main Heading */}
          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-bold text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight text-balance">
              We lost this page
            </h1>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.18}>
            <p className="mt-6 text-muted text-lg leading-relaxed max-w-md mx-auto">
              Sorry, the page you are looking for doesn&apos;t exist, has
              been moved, or is temporarily unavailable.
            </p>
          </FadeUp>

          {/* Actions */}
          <FadeUp delay={0.26}>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-forest hover:shadow-xl hover:-translate-y-1"
              >
                <FiArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to Homepage
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink hover:-translate-y-1"
              >
                <FiSearch
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                Contact Support
              </Link>
            </div>
          </FadeUp>
        </div>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
      `}</style>
    </section>
  );
}