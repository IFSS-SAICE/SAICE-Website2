import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";

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
    { href: "/services", label: "Services & locations" },
    { href: "/impact", label: "Impact" },
    { href: "/resources", label: "Resources" },
    { href: "/get-involved/partner", label: "Get Involved" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo — circular brand mark + serif wordmark */}
        <Link href="/" className="flex items-center gap-3 relative z-50 group">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center ring-1 ring-accent/30 group-hover:ring-accent/50 transition-all">
            <Leaf className="w-5 h-5 text-accent-foreground" strokeWidth={1.75} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-semibold text-2xl text-primary tracking-tight">saice</span>
            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.22em] mt-0.5">IFSS Inc.</span>
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
          <Link href="/get-involved/donate" className="bg-foreground text-background hover:bg-foreground/85 h-11 px-6 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors">
            Donate
          </Link>
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
              <Link key={link.href} href={link.href} className="transition-colors hover:text-primary border-b pb-4 border-muted">
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
            
            <Link href="/get-involved/donate" className="flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl text-lg font-bold transition-colors">
              Donate to SAICE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-sidebar border-t py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-3xl leading-none text-primary tracking-tight">SAICE</span>
            <span className="text-xs font-medium leading-none text-muted-foreground uppercase tracking-[0.18em] mt-1.5">IFSS Inc.</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Digital tools for resilient farmers and circular communities in Africa. Same structural model as Mozilla Foundation and Mozilla Corporation — a mission-locked parent charity with a commercial operating arm.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>admin@ifssgoal.org</p>
            <p>61 B Rue Doyon, G1E 5G1 Quebec, Canada</p>
            <a href="https://www.linkedin.com/company/ifss-inc/about/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-primary hover:underline">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">About</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-primary">Who we are</Link></li>
            <li><Link href="/about/structure" className="hover:text-primary">Structure</Link></li>
            <li><Link href="/about/why-this-matters" className="hover:text-primary">Why it matters</Link></li>
            <li><Link href="/about/roadmap" className="hover:text-primary">9-month roadmap</Link></li>
            <li><Link href="/about/setup-funding" className="hover:text-primary">Year-one budget</Link></li>
            <li><Link href="/about/leadership" className="hover:text-primary">Leadership</Link></li>
            <li><Link href="/governance" className="hover:text-primary">Governance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Programs</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/programs/pages" className="hover:text-primary">PAGES (Agriculture)</Link></li>
            <li><Link href="/programs/ices" className="hover:text-primary">ICES (Circular Economy)</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/impact" className="hover:text-primary">Impact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/legal/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="/legal/confidentiality" className="hover:text-primary">Confidentiality</Link></li>
            <li><Link href="/legal/accessibility" className="hover:text-primary">Accessibility</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
        <p className="max-w-2xl text-center md:text-left leading-relaxed">
          &copy; 2026 SAICE (SAIEC en français). IFSS Inc. (Invest for Solidarity and Sustainable development Inc.) is incorporated in Canada (2023). SAICE charity registration pending.
        </p>
        <div className="flex items-center justify-center gap-2 font-semibold">
          <span className="text-primary">EN</span>
          <span>/</span>
          <span className="cursor-not-allowed">FR</span>
        </div>
      </div>
    </footer>
  );
}
