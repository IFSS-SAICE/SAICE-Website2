import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, X } from "lucide-react";

type Entry = { title: string; href: string; description: string; tags?: string[] };

const SITE_INDEX: Entry[] = [
  { title: "Home", href: "/", description: "SAICE & IFSS Inc. — building digital public goods for African farmers and circular communities." },
  { title: "About", href: "/about", description: "One organisation. Two arms. One mission — the charity and its operating arm." },
  { title: "Programs", href: "/programs", description: "PAGES, ICES, and our cross-cutting tracks." },
  { title: "Our services", href: "/services", description: "Expertise for hire. ESG, agri value chains, digital transformation, M&E, enterprise PAGES + ICES licences." },
  { title: "Impact", href: "/impact", description: "Lasting change, built in the open. Quarterly indicators, audited reports, external evaluations." },
  { title: "Impact stories", href: "/impact/stories", description: "Field stories from PAGES and ICES." },
  { title: "Resources", href: "/resources", description: "Open knowledge — publications, datasets, code, newsletter, donor pack, citation strings." },
  { title: "Get involved — Donate", href: "/get-involved#donate", description: "Donate to SAICE — CAD 100 allocation and ways to give." },
  { title: "Get involved — Partner", href: "/get-involved#partner", description: "Partner with us — four partnership types." },
  { title: "Get involved — Volunteer", href: "/get-involved#volunteer", description: "Volunteer tracks across research, design, writing, field placements." },
  { title: "Get involved — Internships", href: "/get-involved#internships", description: "Paid internships across SAICE and IFSS Inc." },
  { title: "Contact", href: "/contact", description: "Get in touch with SAICE / IFSS Inc." },
  { title: "Governance", href: "/governance", description: "Board, policies, accountability, financials." },
  { title: "Partners", href: "/partners", description: "Funders, technical partners, country partners." },
  { title: "Where we work", href: "/where", description: "Canada and pilot countries — Rwanda, Kenya, Togo." },
  { title: "News", href: "/news", description: "Updates from the SAICE / IFSS network." },
  { title: "Legal", href: "/legal", description: "Privacy, terms, charitable registration." },
];

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      // focus after the input mounts
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as Entry[];
    return SITE_INDEX.filter((e) => {
      const hay = `${e.title} ${e.description} ${(e.tags ?? []).join(" ")}`.toLowerCase();
      return hay.includes(q);
    }).slice(0, 8);
  }, [query]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].href);
      setOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Search the site"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-foreground/15 text-foreground/75 hover:text-foreground hover:bg-foreground/5 transition-colors"
        >
          <Search className="w-4 h-4" strokeWidth={2} />
        </button>
      ) : (
        <form onSubmit={submit} className="flex items-center gap-2">
          <div className="relative flex items-center">
            <Search
              className="absolute left-3.5 w-4 h-4 text-foreground/45 pointer-events-none"
              strokeWidth={2}
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages…"
              className="h-11 w-72 lg:w-80 pl-10 pr-10 rounded-full border border-foreground/20 bg-background text-sm font-medium text-foreground placeholder:text-foreground/45 outline-none focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10 transition-shadow"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close search"
              className="absolute right-2 inline-flex items-center justify-center w-7 h-7 rounded-full text-foreground/55 hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
              <X className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>
        </form>
      )}

      {/* Results dropdown */}
      {open && query.trim().length > 0 && (
        <div className="absolute right-0 mt-2 w-[26rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-foreground/10 bg-background shadow-xl shadow-foreground/5 overflow-hidden z-50">
          {results.length === 0 ? (
            <p className="px-5 py-4 text-sm text-foreground/60">
              No matches for <span className="font-medium text-foreground">"{query}"</span>.
            </p>
          ) : (
            <ul className="py-2 max-h-[60vh] overflow-y-auto">
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-3 hover:bg-foreground/5 transition-colors"
                  >
                    <p className="font-serif text-base font-semibold tracking-tight text-foreground leading-snug">
                      {r.title}
                    </p>
                    <p className="text-xs text-foreground/60 mt-1 leading-relaxed line-clamp-2">
                      {r.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
