import React from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  italic?: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  align?: "left" | "center";
}

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  crumbs,
  image,
  imageAlt = "",
  align = "left",
}: PageHeroProps) {
  return (
    <section className="pt-8 pb-14 md:pt-12 md:pb-20">
      <div className="container px-4 lg:px-6">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-foreground/55 mb-8 flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <React.Fragment key={i}>
                  <ChevronRight className="w-3 h-3" strokeWidth={2} aria-hidden="true" />
                  {c.href && !isLast ? (
                    <Link href={c.href} className="hover:text-foreground transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground" aria-current={isLast ? "page" : undefined}>
                      {c.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {image ? (
          <div className="grid lg:grid-cols-12 gap-5 items-stretch">
            <div className={`lg:col-span-7 ${align === "center" ? "text-center" : ""}`}>
              {eyebrow && (
                <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.28em] mb-5">
                  {eyebrow}
                </p>
              )}
              <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-tight text-foreground">
                {title}
                {italic && <> <span className="display-italic">{italic}</span></>}
              </h1>
              {description && (
                <p className="mt-7 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl">
                  {description}
                </p>
              )}
            </div>
            <div className="lg:col-span-5 blob-card aspect-[5/4] lg:aspect-auto lg:min-h-[360px] relative">
              <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          <div className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.28em] mb-5">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-tight text-foreground">
              {title}
              {italic && <> <span className="display-italic">{italic}</span></>}
            </h1>
            {description && (
              <p className={`mt-7 text-lg md:text-xl text-foreground/75 leading-relaxed ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
