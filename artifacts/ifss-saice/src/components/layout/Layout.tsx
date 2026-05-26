import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf, ArrowUpRight, ArrowLeft, ArrowRight, Mail, MapPin, Linkedin, Sprout, Recycle, BarChart3, BookOpen, HandCoins, Users } from "lucide-react";
import { SiteSearch } from "./SiteSearch";
import exploreAgriculture from "@/assets/images/sections/agriculture.png";
import exploreCircular from "@/assets/images/sections/circular-economy.png";
import exploreReport from "@/assets/images/sections/report.png";
import explorePublications from "@/assets/images/sections/publications.png";
import exploreGlobal from "@/assets/images/sections/global.png";
import exploreInternship from "@/assets/images/sections/internship.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks: { href: string; label: string; children?: { href: string; label: string; desc?: string }[] }[] = [
    { href: "/about", label: "About" },
    {
      href: "/programs",
      label: "Programs",
      children: [
        { href: "/programs/pages", label: "PAGES", desc: "Precision Agriculture for Green Economy and Sustainability" },
        { href: "/programs/ices", label: "ICES", desc: "Initiative for Circular Economy and Sustainability" },
        { href: "/programs/paces", label: "PACES", desc: "Programs for Accessible Clean Energy and Sustainability" },
      ],
    },
    { href: "/services", label: "Our services" },
    { href: "/impact", label: "Impact" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="max-w-[2100px] mx-auto flex h-24 items-center justify-between px-3 lg:px-4">
        {/* Logo — circular brand mark + serif wordmark */}
        <Link href="/" className="flex items-center gap-4 relative z-50 group">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center ring-1 ring-accent/30 group-hover:ring-accent/50 transition-all">
            <Leaf className="w-7 h-7 text-accent-foreground" strokeWidth={1.75} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-semibold text-[2rem] text-primary tracking-tight">saice</span>
            <span className="text-[10px] font-medium text-foreground/60 uppercase tracking-[0.22em] mt-1.5">IFSS Inc.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10 xl:gap-14 mx-10 text-lg xl:text-xl font-medium text-foreground/85">
          {navLinks.map(link => (
            link.children ? (
              <div key={link.href} className="relative group">
                <Link href={link.href} className="relative py-1 inline-flex items-center gap-1 transition-colors hover:text-primary">
                  {link.label}
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  <div className="bg-background border border-foreground/10 rounded-2xl shadow-lg p-2">
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-4 py-3 rounded-xl hover:bg-card transition-colors"
                      >
                        <p className="font-serif text-[15px] font-semibold text-foreground leading-tight">{c.label}</p>
                        {c.desc && (
                          <p className="text-xs text-foreground/60 mt-1 leading-snug">{c.desc}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="relative py-1 transition-colors hover:text-primary group">
                {link.label}
                <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Right actions */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/65">
            <span className="text-primary">EN</span>
            <span className="opacity-40">/</span>
            <span className="cursor-not-allowed opacity-50" title="Coming soon">FR</span>
          </div>
          <Link href="/get-involved" className="bg-foreground text-background hover:bg-foreground/85 h-11 px-6 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors">
            Get Involved
          </Link>
          <SiteSearch />
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2 text-foreground relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-6 pb-6 lg:hidden overflow-y-auto animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 text-lg font-medium mb-12">
            {navLinks.map(link => (
              <div key={link.href} className="pb-4 border-muted">
                <Link href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-3 ml-3 flex flex-col gap-3 text-base font-normal text-foreground/75">
                    {link.children.filter(c => c.href !== link.href).map((c) => (
                      <Link key={c.href} href={c.href} className="hover:text-primary transition-colors">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-auto space-y-6">
            <div className="flex items-center justify-center gap-4 text-sm font-semibold text-muted-foreground bg-muted py-4 rounded-xl">
              <span className="text-primary">EN (English)</span>
              <span>|</span>
              <span className="cursor-not-allowed">FR</span>
            </div>
            
            <Link href="/get-involved" className="flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl text-lg font-bold transition-colors">
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

type ExploreCard = {
  href: string;
  label: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  tint: string;
  img: string;
  alt: string;
};

const exploreCards: ExploreCard[] = [
  {
    href: "/programs#pages",
    label: "Tools",
    title: "PAGES precision agronomy",
    desc: "Field-ready advisory tools built with cooperatives in Rwanda and Kenya.",
    Icon: Sprout,
    tint: "from-[hsl(154_55%_42%)] to-[hsl(170_45%_28%)]",
    img: exploreAgriculture,
    alt: "Smallholder farmers tending crops in a Rwandan field at sunrise",
  },
  {
    href: "/programs#ices",
    label: "Programs",
    title: "ICES circular economy",
    desc: "Youth-led waste, water, and reuse pilots starting in Togo.",
    Icon: Recycle,
    tint: "from-[hsl(200_50%_42%)] to-[hsl(220_45%_28%)]",
    img: exploreCircular,
    alt: "Youth cooperative sorting recyclables at a circular-economy pilot site",
  },
  {
    href: "/impact",
    label: "Impact",
    title: "Indicators and audits",
    desc: "Independent evaluations and field data, published openly.",
    Icon: BarChart3,
    tint: "from-[hsl(28_70%_50%)] to-[hsl(14_55%_32%)]",
    img: exploreReport,
    alt: "Printed evaluation report on a field officer's desk with notes",
  },
  {
    href: "/resources",
    label: "Publications",
    title: "Open research library",
    desc: "Reports, datasets, and code releases from our team and partners.",
    Icon: BookOpen,
    tint: "from-[hsl(260_40%_48%)] to-[hsl(280_38%_28%)]",
    img: explorePublications,
    alt: "Stacked research publications and a laptop on a wooden desk",
  },
  {
    href: "/get-involved#partner",
    label: "Grants & partners",
    title: "Co-fund a deployment",
    desc: "How donors, foundations, and ministries can underwrite a country rollout.",
    Icon: HandCoins,
    tint: "from-[hsl(154_55%_42%)] to-[hsl(190_50%_30%)]",
    img: exploreGlobal,
    alt: "A pinned world map showing co-funded deployment sites across Africa",
  },
  {
    href: "/get-involved#volunteer",
    label: "Community",
    title: "Volunteer & intern",
    desc: "Researchers, agronomists, and students working alongside our teams.",
    Icon: Users,
    tint: "from-[hsl(340_50%_48%)] to-[hsl(320_40%_28%)]",
    img: exploreInternship,
    alt: "An intern reviewing field notes with a senior researcher in the office",
  },
];

const footerLinkCols: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Organisation",
    links: [
      { href: "/about", label: "About" },
      { href: "/governance", label: "Governance" },
      { href: "/partners", label: "Partners" },
      { href: "/where", label: "Where we work" },
      { href: "/news", label: "News" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "/programs", label: "Programs" },
      { href: "/services", label: "Our services" },
      { href: "/impact", label: "Impact" },
      { href: "/impact/stories", label: "Impact stories" },
    ],
  },
  {
    title: "Engage",
    links: [
      { href: "/get-involved#donate", label: "Donate" },
      { href: "/get-involved#partner", label: "Partner" },
      { href: "/get-involved#volunteer", label: "Volunteer" },
      { href: "/get-involved#internships", label: "Internships" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources#publications", label: "Publications" },
      { href: "/resources#data", label: "Data & code" },
      { href: "/resources#newsletter", label: "Newsletter" },
      { href: "/resources#donor-pack", label: "Donor pack" },
      { href: "/legal", label: "Legal" },
    ],
  },
];

function ExploreCarousel() {
  const PER_PAGE_DESKTOP = 3;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(exploreCards.length / PER_PAGE_DESKTOP);
  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white mb-4">
            Explore
          </p>
          <Link href="/" className="inline-flex items-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center ring-1 ring-primary-foreground/20 group-hover:ring-primary-foreground/40 transition-all">
              <Leaf className="w-7 h-7 text-accent-foreground" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-semibold text-[2rem] text-primary-foreground tracking-tight">saice</span>
              <span className="text-[10px] font-medium text-primary-foreground/60 uppercase tracking-[0.22em] mt-1.5">IFSS Inc.</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 mr-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-8 bg-primary-foreground" : "w-4 bg-primary-foreground/25 hover:bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-primary-foreground/25 text-primary-foreground/85 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-primary-foreground/25 text-primary-foreground/85 hover:bg-primary-foreground/10 hover:border-primary-foreground/40 flex items-center justify-center transition-colors"
          >
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Desktop: paged 3-up */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {exploreCards
          .slice(page * PER_PAGE_DESKTOP, page * PER_PAGE_DESKTOP + PER_PAGE_DESKTOP)
          .map((c) => (
            <ExploreCardItem key={c.href} card={c} />
          ))}
      </div>

      {/* Mobile: native horizontal scroll */}
      <div className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {exploreCards.map((c) => (
          <div key={c.href} className="snap-start shrink-0 w-[82%]">
            <ExploreCardItem card={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExploreCardItem({ card }: { card: ExploreCard }) {
  const { Icon } = card;
  return (
    <Link
      href={card.href}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-primary-foreground/15 bg-primary-foreground/[0.04] hover:border-primary-foreground/30 transition-colors h-full"
    >
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={card.img}
          alt={card.alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-br ${card.tint} mix-blend-multiply opacity-60`}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <Icon className="absolute right-5 bottom-5 w-12 h-12 text-primary-foreground" strokeWidth={1.5} />
        <span className="absolute top-5 left-5 inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground bg-black/30 backdrop-blur px-2.5 py-1 rounded-full">
          {card.label}
        </span>
      </div>
      <div className="flex flex-col justify-between gap-8 p-7 md:p-8 flex-1">
        <div>
          <p className="font-serif text-xl md:text-2xl font-medium tracking-tight text-primary-foreground group-hover:text-[hsl(154_55%_78%)] transition-colors leading-snug">
            {card.title}
          </p>
          <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
            {card.desc}
          </p>
        </div>
        <ArrowUpRight
          className="w-5 h-5 text-primary-foreground/40 group-hover:text-[hsl(154_55%_78%)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          strokeWidth={1.75}
        />
      </div>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Subtle dotted-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 85% 15%, hsl(var(--accent) / 0.18), transparent 70%)",
        }}
      />

      <div className="relative">
        {/* EXPLORE SAICE — distinct band above the lower footer */}
        <div className="relative bg-[hsl(174_50%_9%)] border-b border-primary-foreground/10">
          <div className="container px-4 lg:px-6 pt-20 md:pt-24 pb-16 md:pb-20">
            <ExploreCarousel />
          </div>
        </div>

        {/* Lower footer */}
        <div className="border-primary-foreground/15">
          <div className="container px-4 lg:px-6 pt-14 pb-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
              {/* Brand block */}
              <div className="lg:col-span-4">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center ring-1 ring-primary-foreground/20">
                    <Leaf className="w-5 h-5 text-accent-foreground" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-serif font-semibold text-2xl text-primary-foreground tracking-tight">saice</span>
                    <span className="text-[10px] font-medium text-primary-foreground/60 uppercase tracking-[0.22em] mt-1">IFSS Inc.</span>
                  </div>
                </Link>
                <p className="mt-6 text-sm text-primary-foreground/65 leading-relaxed max-w-sm">
                  Digital public goods for African farmers and circular communities. A Canadian charity (SAICE) with an operating arm (IFSS Inc.).
                </p>

                <ul className="mt-7 space-y-2.5 text-sm text-primary-foreground/70">
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-primary-foreground/55" strokeWidth={2} />
                    <a href="mailto:admin@ifssgoal.org" className="hover:text-primary-foreground transition-colors">
                      admin@ifssgoal.org
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-primary-foreground/55 mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span>61 B Rue Doyon, G1E 5G1, Quebec, Canada</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Linkedin className="w-3.5 h-3.5 text-primary-foreground/55" strokeWidth={2} />
                    <a
                      href="https://www.linkedin.com/company/ifss-inc/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Link columns */}
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerLinkCols.map((col) => (
                  <div key={col.title}>
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-foreground/80 mb-5">
                      {col.title}
                    </h3>
                    <ul className="space-y-2.5 text-sm text-primary-foreground/70">
                      {col.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="hover:text-primary-foreground transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-14 pt-6 border-primary-foreground/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-primary-foreground/55">
              <p className="max-w-2xl leading-relaxed">
                &copy; 2026 SAICE (SAIEC en français). IFSS Inc. (Invest for Solidarity and Sustainable Development Inc.) is incorporated in Canada (2023). SAICE charity registration pending.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="text-primary-foreground">EN</span>
                  <span className="opacity-40">/</span>
                  <span className="opacity-50" title="Coming soon">FR</span>
                </div>
                <Link href="/legal" className="hover:text-primary-foreground transition-colors">
                  Legal
                </Link>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
