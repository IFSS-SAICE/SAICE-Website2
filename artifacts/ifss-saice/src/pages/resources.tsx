import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Database,
  Code2,
  Image as ImageIcon,
  Mail,
  Package,
  Download,
  FileText,
  Globe,
  ShieldCheck,
  Sparkles,
  Languages,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

const quickLinks = [
  { href: "#trust", label: "What's different" },
  { href: "#categories", label: "At a glance" },
  { href: "#publications", label: "Publications" },
  { href: "#data-code", label: "Data & code" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#donor-pack", label: "Donor pack" },
  { href: "#cite", label: "How to cite us" },
];

const trust = [
  { Icon: Globe, t: "Open by default", d: "CC-BY 4.0 for data, Apache 2.0 for code — unless ethics or contract demand otherwise." },
  { Icon: ShieldCheck, t: "FAIR", d: "Findable, Accessible, Interoperable, Reusable. DOI, licence, methodology and contact on every dataset." },
  { Icon: Sparkles, t: "Plain language", d: "Every publication has a one-page summary you can hand to a minister or cooperative manager." },
  { Icon: Languages, t: "Multilingual", d: "English and French at launch. Kinyarwanda summaries at platform launch. Kirundi and Swahili in phase 2." },
];

const categories = [
  { Icon: BookOpen, t: "Publications & policy briefs", d: "Concept notes, peer-reviewed papers, working papers, policy briefs.", who: "Donors · ministries · researchers", href: "#publications" },
  { Icon: Database, t: "Datasets", d: "Aggregated indicators, geospatial layers, cooperative-level data (with consent).", who: "Researchers · ministries · NGOs", href: "#data-code" },
  { Icon: Code2, t: "Code & model cards", d: "Open-source repos, PAGES and ICES model cards, data-management plans.", who: "Developers · ML researchers · partners", href: "#data-code" },
  { Icon: ImageIcon, t: "Galleries & video", d: "Photo galleries, tool demos, partner interviews, beneficiary stories.", who: "Journalists · donors · comms teams", href: "#newsletter" },
  { Icon: Mail, t: "Newsletter & blog", d: "Quarterly newsletter, news & insights blog — signed posts, dated corrections.", who: "Subscribers · supporters · partners", href: "#newsletter" },
  { Icon: Package, t: "Donor pack", d: "Governance, audited financials, capability statement, due-diligence ZIP.", who: "Foundations · institutional donors", href: "#donor-pack" },
];

const publicationTypes = [
  "Concept notes — 2–5 page funder pitches",
  "Policy briefs — 4–6 pages for ministries (≥4 per cycle)",
  "Working papers — pre-peer-review with partners",
  "Peer-reviewed papers — McGill, RCID-Rwanda, SEKU",
  "Donor reports — quarterly, annual, final",
  "Annual impact report — flagship publication",
];

const launchSet = [
  { year: "2026", t: "GIAH/PAGES Rwanda pilot — lessons learned", tag: "Working paper" },
  { year: "2026", t: "Concept note — gap analysis and integrated version", tag: "Concept note" },
  { year: "2027", t: "PAGES baseline study — Rwanda and Kenya", tag: "Baseline" },
  { year: "2027", t: "ICES Togo pilot launch brief", tag: "Policy brief" },
];

const datasetsYes = [
  "Aggregated, de-identified indicator data per quarter",
  "Cooperative-level data — only with explicit consent on file",
  "Geospatial layers — footprints, waste-stream coverage, parcel indices",
  "Survey instruments and raw responses (de-identified) where consent permits",
];

const datasetsNo = [
  "Anything that could re-identify an individual in a small cooperative",
  "Partner data without their written release",
  "Anything that puts a beneficiary at safety or commercial risk",
];

const codeItems = [
  "PAGES — Smart Market Matchmaker, IoT Precision Insight, ERP Finance & Inventory",
  "ICES — Smart Bins firmware, Sorting analytics, ML Carbon Calculator",
  "Shared backbone — common data model, auth, USSD/SMS gateway",
  "Model cards — one per production ML component, with retraining cadence",
];

const citations = [
  { t: "Publication", d: "SAICE & IFSS Inc. (Year). Title. Toronto, Canada. https://doi.org/[DOI]" },
  { t: "Dataset", d: "SAICE (Year). Title [Data set]. Version. https://doi.org/[DOI]" },
  { t: "Code", d: "SAICE (Year). Repository name (Version) [Source code]. https://github.com/saice/..." },
  { t: "Story or article", d: "Author surname, initial. (Year, Month). Title. SAICE Insights. https://ifssgoal.org/..." },
];

export default function ResourcesRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;

  useEffect(() => {
    document.title = sub
      ? `Resources — ${sub} · SAICE / IFSS Inc.`
      : "Resources — Publications, Datasets, Code, Galleries · SAICE & IFSS";
  }, [sub]);

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        eyebrow="Resources"
        title="Open knowledge from the field,"
        italic="for anyone who can use it."
        description="Everything we learn — what works, what does not, the data behind the numbers — published in plain language, in local languages where we can, under open licences by default. Use it, cite us, and tell us what you found."
        crumbs={[{ label: "Resources" }]}
      />

      <section className="pb-4">
        <div className="container px-4 lg:px-6">
          <div className="flex flex-wrap gap-3">
            <a href="#publications" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              Browse publications <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a href="#data-code" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Browse data & code
            </a>
            <a href="#newsletter" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Subscribe to the newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Sticky quick links */}
      <nav className="sticky top-20 z-30 bg-background/90 backdrop-blur border-y border-foreground/10">
        <div className="container px-4 lg:px-6">
          <div className="flex overflow-x-auto gap-x-7 gap-y-2 py-3 text-sm font-medium text-foreground/70 scrollbar-thin">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="whitespace-nowrap hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Trust band */}
      <section id="trust" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              What makes these resources different
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Open, FAIR, plain language, <span className="display-italic">versioned and dated.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trust.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              At a glance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Six places <span className="display-italic">to start.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(({ Icon, t, d, who, href }) => (
              <a
                key={t}
                href={href}
                className="group blob-card bg-background p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4 flex-1">{d}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/55 pt-3 border-t border-foreground/10">
                  {who}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Publications & policy briefs
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What we publish, <span className="display-italic">and how to find it.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Filter by year, country, programme, type and audience. Each item has a one-page summary, a full PDF, a DOI where applicable, and a recommended citation.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-5 rounded-3xl border border-foreground/10 bg-card p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                Publication types we carry
              </p>
              <ul className="space-y-3">
                {publicationTypes.map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                    <p className="text-sm text-foreground/80 leading-relaxed">{t}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                Launch set
              </p>
              <div className="space-y-3">
                {launchSet.map((item) => (
                  <div
                    key={item.t}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-background p-5 hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={1.75} />
                      <div>
                        <p className="font-serif text-base font-semibold tracking-tight text-foreground leading-snug">{item.t}</p>
                        <p className="text-xs text-foreground/55 mt-1">
                          {item.year} · {item.tag}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45 whitespace-nowrap pt-1.5">
                      Coming
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datasets + Code */}
      <section id="data-code" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Datasets, code & model cards
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              FAIR data, ready to reuse — <span className="display-italic">with the model cards that should come with it.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every dataset has a DOI, a licence, a methodology note, a data dictionary and a named contact. Every ML model in production has a model card — purpose, training data, performance, fairness checks, known failure modes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-7">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  What we publish
                </span>
              </div>
              <ul className="space-y-3">
                {datasetsYes.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                    <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-foreground/15 bg-background p-7">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-4 h-4 text-foreground/50" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  What we will not publish
                </span>
              </div>
              <ul className="space-y-3">
                {datasetsNo.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <XCircle className="w-3.5 h-3.5 text-foreground/40 flex-shrink-0 mt-1" strokeWidth={2} />
                    <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-accent/25 bg-accent/[0.04] p-7">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-4 h-4 text-accent" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                Code & model cards
              </span>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
              {codeItems.map((c) => (
                <li key={c} className="flex gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-sm text-foreground/80 leading-relaxed">{c}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-foreground/60">
              Licences — Apache 2.0 by default; AGPL for backend where derivative-work openness matters. Partner-specific carve-outs documented.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
                Newsletter
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                A quarterly newsletter <span className="display-italic">you will actually want to open.</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                Four issues per year. One big story, three short ones, the indicators we just refreshed, the publications we just released, and two upcoming events. Plain-text option for low-bandwidth subscribers. We will never sell, share or rent the list.
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                English and French from issue 1. Kinyarwanda from issue 5.
              </p>
            </div>

            <form
              className="lg:col-span-5 rounded-3xl border border-foreground/10 bg-card p-7 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">Name</span>
                <input
                  type="text"
                  className="mt-1.5 w-full h-11 px-4 rounded-full border border-foreground/15 bg-background text-sm focus:outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">Email</span>
                <input
                  type="email"
                  className="mt-1.5 w-full h-11 px-4 rounded-full border border-foreground/15 bg-background text-sm focus:outline-none focus:border-accent"
                  placeholder="you@example.org"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">I am a</span>
                <select className="mt-1.5 w-full h-11 px-4 rounded-full border border-foreground/15 bg-background text-sm focus:outline-none focus:border-accent">
                  <option>Donor</option>
                  <option>Researcher</option>
                  <option>Practitioner</option>
                  <option>Journalist</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex gap-2.5 items-start pt-2 text-xs text-foreground/65 leading-relaxed">
                <input type="checkbox" className="mt-0.5 accent-accent" />
                <span>I agree to receive the quarterly newsletter. Unsubscribe in one click.</span>
              </label>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
              >
                Subscribe <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Donor pack */}
      <section id="donor-pack" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="rounded-3xl border border-accent/25 bg-background p-7 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <Package className="w-4 h-4 text-accent" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  Donor pack
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                Everything a foundation needs <span className="display-italic">to say yes (or no).</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed">
                A single ZIP, refreshed quarterly — governance documents, COI and related-party policies, safeguarding and PSEAH, data and AI-ethics policies, audited financials, latest impact report, external evaluations, capability statement, and the letter of authority for IFSS Inc.
              </p>
              <p className="mt-4 text-sm text-foreground/60">
                Light form gate (name, organisation, email) for follow-up — no paywall, no marketing emails.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
                Download the donor pack <Download className="w-4 h-4" strokeWidth={2} />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
              >
                Request a walk-through
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cite + reuse */}
      <section id="cite" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              How to cite us · reuse policy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Use the work — <span className="display-italic">give us credit.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Cite SAICE for charity programme outputs and IFSS Inc. for commercial deliverables. Use the DOI when available; canonical URL when not. APA 7, Chicago, BibTeX and RIS exportable from every publication page.
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {citations.map((c) => (
              <div key={c.t} className="grid sm:grid-cols-12 gap-4 rounded-2xl border border-foreground/10 bg-card p-5">
                <p className="sm:col-span-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {c.t}
                </p>
                <p className="sm:col-span-9 text-sm text-foreground/80 font-mono leading-relaxed break-words">
                  {c.d}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-card/40 p-7">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">You may</p>
                <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
                  <li>Reuse, remix and redistribute under the licence shown.</li>
                  <li>Translate any publication with credit and a link back.</li>
                  <li>Embed the indicators dashboard with the standard code.</li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">You must</p>
                <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
                  <li>Credit SAICE (and IFSS Inc. where commercial).</li>
                  <li>Keep the same licence on derivative works.</li>
                  <li>Not imply endorsement by SAICE or its partners.</li>
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">You must not</p>
                <ul className="space-y-2 text-sm text-foreground/75 leading-relaxed">
                  <li>Re-identify individuals from de-identified data.</li>
                  <li>Use SAICE or partner logos without permission.</li>
                  <li>Train commercial ML models on open data without a separate licence.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-foreground/10 flex flex-wrap gap-3">
              <Link href="/legal/terms" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
                Read the full reuse and licensing policy <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-foreground">
                Submit a publication request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
