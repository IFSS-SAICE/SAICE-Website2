import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Download,
  FileText,
  ExternalLink,
  Users,
  Leaf,
  ShieldCheck,
  Database,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

const quickLinks = [
  { href: "#top-line", label: "Top-line" },
  { href: "#how-we-count", label: "How we count" },
  { href: "#by-programme", label: "By programme" },
  { href: "#inclusion", label: "Inclusion" },
  { href: "#by-country", label: "By country" },
  { href: "#reports", label: "Reports & audits" },
  { href: "#evaluations", label: "Evaluations" },
  { href: "#stories", label: "Stories" },
  { href: "#learning", label: "What we got wrong" },
  { href: "#open-data", label: "Open data" },
];

const topLine = [
  { v: "5,000", l: "Agri-SMEs targeted for onboarding by 2029" },
  { v: "~100k", l: "Farmers reached through their cooperatives" },
  { v: "60 / 40 / 15 / 5", l: "% women · youth · ex-combatants · PwD" },
  { v: "6", l: "Countries — Canada, Rwanda, Kenya, Burundi, DRC, Togo" },
  { v: "CAD 759k", l: "Programme budget for the 2027–2029 cycle" },
  { v: "3", l: "Independent external evaluations across the cycle" },
];

const methodology = [
  { Icon: FileText, t: "Indicator dictionary", d: "Every indicator on this page has a one-page entry — definition, unit, source, frequency, who collects it, who QAs it, known limits." },
  { Icon: ShieldCheck, t: "Frameworks", d: "OECD-DAC, BetterEvaluation, GRI for ESG, MRV protocols for climate, FAIR for open data." },
  { Icon: CheckCircle2, t: "Three quality checks", d: "Source verification, sampling audit, and end-of-cycle independent verification — per indicator." },
  { Icon: AlertTriangle, t: "What we will publish even when it hurts", d: "Drop-off, churn, beneficiaries lost, indicators missed, evaluation findings we disagree with." },
];

const pagesIndicators = [
  "Agri-SMEs onboarded (target 5,000 by 2029)",
  "Cooperatives using the Smart Market Matchmaker",
  "Farmers reached through their cooperatives (~100k)",
  "Hectares under precision-agriculture insight",
  "Post-harvest loss reduction vs. baseline",
  "Verified financial-access events (credit, savings, insurance)",
  "Off-take contracts brokered (count and CAD value)",
  "Average price uplift vs. reference market",
];

const icesIndicators = [
  "Smart Bins deployed · fill-level accuracy",
  "Tonnes of waste captured at source",
  "Tonnes diverted from landfill or dumpsite",
  "Methane and CO₂e averted (MRV-verified)",
  "Carbon-finance value routed to cooperatives",
  "Youth and women earning income through ICES coops",
  "Sorting-line throughput and contamination rate",
  "Municipalities with active EPR-grade reporting",
];

const inclusion = [
  { pct: "60%", label: "Women", detail: "Share of beneficiaries, leadership roles, training hours and finance events — reported every quarter." },
  { pct: "40%", label: "Youth under 35", detail: "Eligibility verified by self-identification + cooperative records." },
  { pct: "15%", label: "Ex-combatants", detail: "Reported with a do-no-harm narrative — not just numbers." },
  { pct: "5%", label: "People with disabilities", detail: "Self-identification + community attestation. Aggregated to protect identity." },
];

const countries = [
  { c: "Rwanda", p: "PAGES pilot · ICES design", partner: "RCID-Rwanda" },
  { c: "Kenya", p: "PAGES pilot · ICES design", partner: "SEKU" },
  { c: "Burundi", p: "PAGES scale-out", partner: "Local coops + government" },
  { c: "DRC", p: "PAGES scale-out", partner: "Local coops + ICGLR" },
  { c: "Togo", p: "ICES pilot", partner: "Terre des Jeunes Togo · Ripen" },
  { c: "Canada", p: "HQ — programme management, fundraising, data engineering", partner: "SAICE · IFSS Inc. · McGill" },
];

const reports = [
  "Annual impact report (narrative)",
  "Audited financial statements — SAICE",
  "Audited financial statements — IFSS Inc.",
  "Consolidated note",
  "CRA T3010 filing",
  "Related-party transactions report",
  "Donor list (with consent)",
];

const evaluations = [
  { year: "2027", t: "Baseline study", d: "Sets the reference point for every cycle indicator. Commissioned by SAICE, contracted to a firm with no prior relationship." },
  { year: "2028", t: "Mid-term review", d: "Course-correction checkpoint. Findings, management response, and action log published in full." },
  { year: "2030", t: "Endline impact evaluation", d: "OECD-DAC criteria — relevance, coherence, effectiveness, efficiency, impact, sustainability." },
];

const engageCtas = [
  { Icon: Sparkles, t: "Donate", d: "A tax-receipted gift to SAICE funds programme delivery, not overheads.", cta: "Donate now", href: "/get-involved" },
  { Icon: ShieldCheck, t: "Evaluate us", d: "Researchers, M&E firms and universities — we welcome unsolicited evaluation proposals.", cta: "Propose an evaluation", href: "/contact" },
  { Icon: Database, t: "Reuse our data", d: "Pull the open datasets, cite SAICE, send us what you find.", cta: "Open the data portal", href: "/resources" },
];

export default function ImpactRoutes({ params }: { params?: { sub?: string } }) {
  const isStories = params?.sub === "stories";

  useEffect(() => {
    document.title = isStories
      ? "Stories from the field | SAICE / IFSS Inc."
      : "Impact — Indicators, Evaluations, Stories · SAICE & IFSS";
  }, [isStories]);

  if (isStories) return <Stories />;
  return <Dashboard />;
}

function Dashboard() {
  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        eyebrow="Our impact"
        title="Numbers we will publish"
        italic="whether the news is good or bad."
        description="Every quarter we update this page with live indicators from PAGES and ICES. Every year we publish an audited impact report. Every grant cycle we commission an independent external evaluation. If a number moves the wrong way, we say so — and we explain what we are doing about it."
        crumbs={[{ label: "Impact" }]}
      />

      <section className="pb-4">
        <div className="container px-4 lg:px-6">
          <div className="flex flex-wrap gap-3">
            <a href="#reports" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              Download the latest impact report (PDF) <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a href="#top-line" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Open the live dashboard
            </a>
            <a href="#how-we-count" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              See our methodology
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

      {/* Top-line indicators */}
      <section id="top-line" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Top-line indicators
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              The headline numbers, <span className="display-italic">refreshed every quarter.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topLine.map((s) => (
              <div key={s.l} className="blob-card bg-card p-6">
                <p className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-none">
                  {s.v}
                </p>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.l}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-foreground/55 leading-relaxed max-w-3xl">
            Last refreshed: pre-cycle baseline (2026). Targets vs. actuals tracked from cycle start (2027). Independent verification under OECD-DAC criteria.
          </p>
        </div>
      </section>

      {/* How we count */}
      <section id="how-we-count" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              How we count
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Methodology <span className="display-italic">before numbers.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              If you cannot see how we count, you should not trust what we count. The methods note goes first — on purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {methodology.map(({ Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-foreground/10 bg-background p-6">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#reports" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              Download the indicator dictionary <Download className="w-4 h-4" strokeWidth={2} />
            </a>
            <Link href="/resources" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Read the MEAL framework
            </Link>
          </div>
        </div>
      </section>

      {/* By programme */}
      <section id="by-programme" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Indicators by programme
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Target → actual → variance, <span className="display-italic">indicator by indicator.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Each indicator carries a colour band — green ≥ 90% of target, amber 70–89%, red below 70% — and a one-line note explaining the variance. Live numbers appear once the 2027 cycle starts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border border-primary/20 bg-primary/[0.03] p-7">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-4 h-4 text-primary" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  PAGES — Track 1 · Precision Agriculture
                </span>
              </div>
              <ul className="space-y-3">
                {pagesIndicators.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                    <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-accent/25 bg-accent/[0.04] p-7">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-4 h-4 text-accent" strokeWidth={1.75} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  ICES — Track 2 · Circular Economy
                </span>
              </div>
              <ul className="space-y-3">
                {icesIndicators.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                    <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusion */}
      <section id="inclusion" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Inclusion (GEDSI)
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Inclusion is contractual, <span className="display-italic">not aspirational.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Quota targets across both programmes. We publish share of beneficiaries, leadership roles, training hours and finance events for each group — every quarter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inclusion.map((g) => (
              <div key={g.label} className="rounded-2xl border border-foreground/10 bg-background p-6">
                <p className="font-serif text-4xl font-semibold tracking-tight text-accent leading-none mb-3">
                  {g.pct}
                </p>
                <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{g.label}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">{g.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By country */}
      <section id="by-country" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Indicators by country
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Six countries, <span className="display-italic">one results page each.</span>
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="text-left border-b border-foreground/15">
                  <th className="py-3 pr-4 font-serif font-semibold text-foreground">Country</th>
                  <th className="py-3 px-4 font-serif font-semibold text-foreground">Programme</th>
                  <th className="py-3 pl-4 font-serif font-semibold text-foreground">Lead partner</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((row) => (
                  <tr key={row.c} className="border-b border-foreground/10 align-top">
                    <td className="py-4 pr-4 font-medium text-foreground flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" strokeWidth={2} />
                      {row.c}
                    </td>
                    <td className="py-4 px-4 text-foreground/75 leading-relaxed">{row.p}</td>
                    <td className="py-4 pl-4 text-foreground/75 leading-relaxed">{row.partner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reports & audits */}
      <section id="reports" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Annual reports & audited financials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              The full picture, every year, <span className="display-italic">audited.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              First audited cycle: fiscal year 2027. Pre-cycle reports (2026) cover incorporation, board formation, and CRA application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {reports.map((r) => (
              <a
                key={r}
                href="#"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-foreground/10 bg-background p-5 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={1.75} />
                  <div>
                    <p className="font-serif text-base font-semibold tracking-tight text-foreground">{r}</p>
                    <p className="text-xs text-foreground/55 mt-1">Available after first reporting cycle</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-foreground/40 group-hover:text-accent transition-colors flex-shrink-0" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Independent evaluations */}
      <section id="evaluations" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Independent external evaluations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Not graded <span className="display-italic">by ourselves.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Three independent evaluations across the 2027–2029 cycle. Each is commissioned by SAICE, contracted to a firm with no prior relationship, and published in full — including the parts we wish were different.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-4">
            {evaluations.map((e, i) => (
              <li key={e.t} className="rounded-2xl border border-foreground/10 bg-card p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{e.year}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{e.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{e.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stories preview */}
      <section id="stories" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
                Stories from the field
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                The people <span className="display-italic">behind the numbers.</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                Every quarter we publish at least four stories — written or filmed with the people whose lives the work touches, with consent on the record. Plain language, no extractive photography, named with permission and pseudonymised by default.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/impact/stories" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
                Browse all stories <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link href="/get-involved" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
                Subscribe to the digest
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we got wrong */}
      <section id="learning" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              The learning agenda
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              A public list of things we missed, <span className="display-italic">and what we changed.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Most impact pages on the internet do not have this section. We do — because no honest donor believes a perfect track record. At least one new entry per quarter; older entries stay live with status updates.
            </p>
          </div>

          <article className="rounded-3xl border border-accent/25 bg-accent/[0.04] p-7 md:p-9 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-accent" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                Worked example · GIAH Rwanda pilot
              </span>
            </div>
            <p className="text-base md:text-lg text-foreground/85 leading-relaxed font-serif italic mb-5">
              "Our cooperative-onboarding survey under-represented female heads of household. We added a women-only enumerator team for round two; share rose from 31% to 58%."
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-5 border-t border-accent/20 text-sm">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60 mb-1">Cost</p>
                <p className="text-foreground/85">CAD 18,000 extra</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60 mb-1">Status</p>
                <p className="text-foreground/85">Resolved</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60 mb-1">Embedded in</p>
                <p className="text-foreground/85">PAGES onboarding SOP v1.2</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Open data + engage */}
      <section id="open-data" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Open data & engagement
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Open by default, <span className="display-italic">restricted only when ethics demand it.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Where the data is ours to release, it is FAIR. Aggregated indicator data per quarter, model cards for PAGES and ICES, geospatial layers, and methodology notes — under CC-BY 4.0 for data, Apache 2.0 for code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {engageCtas.map(({ Icon, t, d, cta, href }) => (
              <Link
                key={t}
                href={href}
                className="group blob-card bg-background p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-5 flex-1">{d}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {cta} <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Stories() {
  const stories = [
    {
      tag: "Rwanda · PAGES · women-led",
      title: "Aline runs a 280-member maize cooperative in Musanze",
      body: "Here is what the Smart Market Matchmaker changed for her quarter — buyer access, price uplift, and the first finance event for 31 women in her group.",
    },
    {
      tag: "Togo · ICES · youth-led",
      title: "From street pickers to a registered cooperative",
      body: "A Lomé waste-sorting line, one year in. How a 12-person collective became an EPR-grade reporting partner — and what the carbon receipts paid for.",
    },
    {
      tag: "Cross-cutting · learning",
      title: "Three things we got wrong on the GIAH pilot — and one we got right",
      body: "Honest notes from the field. Where our onboarding under-counted women, where IoT data outpaced cooperative literacy, and the one design call that held up under scale-out.",
    },
    {
      tag: "Kenya · PAGES · methodology",
      title: "What it costs to reach the last farmer",
      body: "Unit-cost analysis from the SEKU pilot — enumerator time, mobile-money fees, and the share of the budget that never gets line-itemed in a logframe.",
    },
  ];

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        eyebrow="Stories from the field"
        title="The people"
        italic="behind the numbers."
        description="Written or filmed with the people whose lives the work touches, with consent on the record. Plain language, no extractive photography, royalties or honoraria offered for all paid contributions."
        crumbs={[{ label: "Impact", href: "/impact" }, { label: "Stories" }]}
      />

      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {stories.map((s) => (
              <article key={s.title} className="blob-card bg-card p-7 flex flex-col">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">
                  {s.tag}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">{s.body}</p>
                <div className="mt-auto pt-4 border-t border-foreground/10 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Read or watch</span>
                  <span className="circle-arrow-sm">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-foreground/10 bg-card/40 p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-1" strokeWidth={1.75} />
              <div>
                <p className="font-serif text-lg font-semibold tracking-tight text-foreground">Quarterly story digest</p>
                <p className="text-sm text-foreground/70 leading-relaxed mt-1">
                  Four new stories every quarter, plus one "what we got wrong" entry. English and French.
                </p>
              </div>
            </div>
            <Link href="/get-involved" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/impact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
              <ExternalLink className="w-4 h-4" strokeWidth={2} />
              Back to the impact dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
