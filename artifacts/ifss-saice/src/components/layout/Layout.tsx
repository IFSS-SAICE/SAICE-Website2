import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf, ArrowUpRight, Mail, MapPin, Linkedin } from "lucide-react";
import { SiteSearch } from "./SiteSearch";

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

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/services", label: "Our services" },
    { href: "/impact", label: "Impact" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="w-full flex h-24 items-center justify-between px-6 lg:px-10">
        {/* Logo — circular brand mark + serif wordmark */}
        <Link href="/" className="flex items-center gap-4 relative z-50 group">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center ring-1 ring-accent/30 group-hover:ring-accent/50 transition-all">
            <Leaf className="w-7 h-7 text-accent-foreground" strokeWidth={1.75} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-semibold text-[2rem] text-primary tracking-tight">saice</span>
            
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-foreground/85">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="relative py-1 transition-colors hover:text-primary group">
              {link.label}
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
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
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary pb-4 border-muted">
                {link.label}
              </Link>
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

const exploreLinks = [
  { href: "/about", label: "About SAICE & IFSS", desc: "Who we are and how we're structured." },
  { href: "/programs", label: "Programs", desc: "PAGES, ICES, and the work behind them." },
  { href: "/services", label: "Our services", desc: "Expertise for hire, with revenue back to the mission." },
  { href: "/impact", label: "Impact", desc: "Indicators, audits, and independent evaluations." },
  { href: "/resources", label: "Resources", desc: "Open publications, datasets, code, and the newsletter." },
  { href: "/get-involved", label: "Get involved", desc: "Donate, partner, volunteer, or intern with us." },
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
        {/* EXPLORE — Inside SAICE */}
        <div className="container px-4 lg:px-6 pt-20 md:pt-24 pb-16 md:pb-20">
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight max-w-4xl">
            Start{" "}
            <span className="display-italic" style={{ color: "hsl(154 55% 72%)" }}>
              anywhere.
            </span>
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {exploreLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative flex flex-col justify-between gap-8 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/[0.04] hover:bg-primary-foreground/[0.07] hover:border-primary-foreground/30 p-6 md:p-7 min-h-[200px] transition-colors"
              >
                <div>
                  <p className="font-serif text-xl md:text-2xl font-medium tracking-tight text-primary-foreground group-hover:text-[hsl(154_55%_78%)] transition-colors">
                    {l.label}
                  </p>
                  <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
                    {l.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 text-primary-foreground/40 group-hover:text-[hsl(154_55%_78%)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  strokeWidth={1.75}
                />
              </Link>
            ))}
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
