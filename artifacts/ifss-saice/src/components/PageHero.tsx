import React from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { getPhoto, type PhotoSlot } from "@/lib/photos";
import { useTT } from "@/lib/i18n";

type Crumb = { label: string; href?: string };

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  italic?: string;
  description?: string;
  crumbs?: Crumb[];
  /** Preferred: stable slot ID from the central photo registry. */
  photo?: PhotoSlot;
  image?: string;
  imageAlt?: string;
  align?: "left" | "center";
  actions?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  crumbs,
  photo,
  image,
  imageAlt,
  align = "left",
  actions,
}: PageHeroProps) {
  const centered = align === "center";
  const tt = useTT();
  const reg = photo ? getPhoto(photo) : null;
  // No silent fallback image: a hero without a photo renders on the brand colour only.
  const bg = reg?.src ?? image;
  const alt = imageAlt ?? (reg ? tt(reg.alt.en, reg.alt.fr) : "");

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Background image */}
      {bg && (
        <img
          src={bg}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden={alt ? undefined : true}
          data-photo-slot={photo}
          data-photo-source={reg?.source}
        />
      )}

      {/* Primary darkening overlay — keeps text legible on any image */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--primary) / 0.78) 0%, hsl(var(--primary) / 0.62) 55%, hsl(var(--primary) / 0.88) 100%)",
        }}
      />
      {/* Left vignette for left-aligned copy */}
      {!centered && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--primary) / 0.55) 0%, hsl(var(--primary) / 0.15) 55%, transparent 100%)",
          }}
        />
      )}
      {/* Subtle dotted-grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Accent radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 85% 25%, hsl(var(--accent) / 0.22), transparent 70%)",
        }}
      />

      <div className="relative container px-4 lg:px-6 pt-14 pb-20 md:pt-20 md:pb-28 min-h-[420px] md:min-h-[520px] flex flex-col">
        <div
          className={`flex-1 flex flex-col justify-center ${
            centered ? "max-w-4xl mx-auto text-center" : "max-w-4xl"
          }`}
        >
          {eyebrow && (
            <p
              className={`text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(154_55%_82%)] mb-5 ${
                centered ? "" : ""
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-tight text-primary-foreground"
            style={{ textShadow: "0 2px 24px hsl(var(--primary) / 0.45)" }}
          >
            {title}
            {italic && (
              <>
                {" "}
                <span className="display-italic" style={{ color: "hsl(154 55% 78%)" }}>
                  {italic}
                </span>
              </>
            )}
          </h1>
          {description && (
            <p
              className={`mt-6 text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-2xl ${
                centered ? "mx-auto" : ""
              }`}
            >
              {description}
            </p>
          )}
          {actions && (
            <div className={`mt-8 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
