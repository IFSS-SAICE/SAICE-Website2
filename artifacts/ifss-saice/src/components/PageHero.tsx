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
  actions?: React.ReactNode;
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
  actions,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Subtle dotted-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Accent radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, hsl(var(--accent) / 0.18), transparent 70%)",
        }}
      />

      <div className="relative container px-4 lg:px-6 pt-10 pb-20 md:pt-14 md:pb-28">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-medium text-primary-foreground/60 mb-10 flex-wrap"
          >
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Home
            </Link>
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <React.Fragment key={i}>
                  <ChevronRight className="w-3 h-3" strokeWidth={2} aria-hidden="true" />
                  {c.href && !isLast ? (
                    <Link href={c.href} className="hover:text-primary-foreground transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      className="text-primary-foreground"
                      aria-current={isLast ? "page" : undefined}
                    >
                      {c.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {image ? (
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className={`lg:col-span-7 ${centered ? "text-center" : ""}`}>
              <HeroBody
                eyebrow={eyebrow}
                title={title}
                italic={italic}
                description={description}
                actions={actions}
                centered={centered}
              />
            </div>
            <div className="lg:col-span-5 relative aspect-[5/4] lg:aspect-auto lg:min-h-[380px] rounded-3xl overflow-hidden ring-1 ring-primary-foreground/15 shadow-2xl">
              <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, hsl(var(--primary) / 0.55) 100%)",
                }}
              />
            </div>
          </div>
        ) : (
          <div className={centered ? "max-w-4xl mx-auto text-center" : "max-w-5xl"}>
            <HeroBody
              eyebrow={eyebrow}
              title={title}
              italic={italic}
              description={description}
              actions={actions}
              centered={centered}
            />
          </div>
        )}
      </div>
    </section>
  );
}

function HeroBody({
  eyebrow,
  title,
  italic,
  description,
  actions,
  centered,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  italic?: string;
  description?: string;
  actions?: React.ReactNode;
  centered: boolean;
}) {
  return (
    <>
      <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.02] tracking-tight text-primary-foreground">
        {title}
        {italic && (
          <>
            {" "}
            <span className="display-italic" style={{ color: "hsl(154 55% 72%)" }}>
              {italic}
            </span>
          </>
        )}
      </h1>
      {description && (
        <p
          className={`mt-7 text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
      {actions && (
        <div className={`mt-9 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
          {actions}
        </div>
      )}
    </>
  );
}
