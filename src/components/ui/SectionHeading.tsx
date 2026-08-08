import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { FadeUp } from "@/components/common/FadeUp";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  return (
    <FadeUp>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <Heading
          className={cn(
            "mt-5 font-semibold text-3xl sm:text-4xl lg:text-[2.65rem] leading-[1.1] text-balance tracking-tight",
            tone === "light" ? "text-ink" : "text-white"
          )}
        >
          {title}
        </Heading>
        {description && (
          <p className={cn("mt-5 text-base leading-relaxed", tone === "light" ? "text-muted" : "text-white/65")}>
            {description}
          </p>
        )}
      </div>
    </FadeUp>
  );
}
