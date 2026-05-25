import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Code2,
  Download,
  FileText,
  Package,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionImage } from "@/components/SectionImage";

const quickLinks = [
  { href: "#inputs-activities", label: "Program inputs" },
  { href: "#publications", label: "Publications" },
  { href: "#data-code", label: "Data & code" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#donor-pack", label: "Donor pack" },
  { href: "#cite", label: "How to cite us" },
];

const programInputs = {
  pages: {
    inputs: "Resources; policy dialogue, partnerships, risk analysis; AI and digital tools available; training and coaching; capacity building and advocacy.",
    activities: "Strengthened capacity of beneficiaries; increased access to finance; access to raw materials for selected value chains; greater participation of private actors, youth and women; improved advocacy, policy reforms and visibility.",
  },
  ices: {
    inputs: "Resources; policy dialogue, risk analysis; AI and digital tools; capacity building and advocacy.",
    activities: "Real-time waste-level measurement; optimised collection; accurate waste segregation; reduced manual handling; instant feedback to users.",
  },
};

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
  "Survey instruments and de-identified responses where consent permits",
];

const codeItems = [
  "PAGES — Smart Market Matchmaker, IoT Precision Insight, ERP",
  "ICES — Smart Bins firmware, Sorting analytics, ML Carbon Calculator",
  "Shared backbone — common data model, auth, USSD/SMS gateway",
  "Model cards — one per production ML component, with retraining cadence",
];

const citations = [
  { t: "Publication", d: "SAICE & IFSS Inc. (Year). Title. Toronto, Canada. https://doi.org/[DOI]" },
  { t: "Dataset", d: "SAICE (Year). Title [Data set]. Version. https://doi.org/[DOI]" },
  { t: "Code", d: "SAICE (Year). Repository name (Version) [Source code]. https://github.com/saice/..." },
];

export default function ResourcesRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;

  useEffect(() => {
    document.title = sub
      ? `Resources — ${sub} · SAICE / IFSS Inc.`
      : "Resources — Publications, Datasets, Code · SAICE & IFSS";
  }, [sub]);

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero title="Open knowledge,"
        italic="free to use."
        description="What we learn, in plain language and open licences. Use it, cite us, and tell us what you found."
        crumbs={[{ label: "Resources" }]}
      />

      <section className="pt-8 pb-4">
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
      <nav className="sticky top-20 z-30 bg-background/90 backdrop-blur border-foreground/10">
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

      {/* Program inputs & activities */}
      <section id="inputs-activities" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What we deploy, <span className="display-italic">and what it produces.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              The inputs and activities side of each program's theory of change. Outcomes and impacts sit on the <Link href="/impact#theory-of-change" className="text-accent hover:underline underline-offset-4">Impact</Link> page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border border-primary/20 bg-card p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary mb-4">PAGES · Agriculture & Economy</p>
              <div className="space-y-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">Inputs</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{programInputs.pages.inputs}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">Activities & outputs</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{programInputs.pages.activities}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-accent/25 bg-card p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">ICES · Circular Economy & Waste</p>
              <div className="space-y-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">Inputs</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{programInputs.ices.inputs}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">Activities & outputs</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{programInputs.ices.activities}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="publications" caption="Concept notes, policy briefs, papers" aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What we publish, <span className="display-italic">and how to find it.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Concept notes, policy briefs, working papers, peer-reviewed papers and donor reports. Each item carries a one-page summary, a full PDF, a DOI where applicable, and a recommended citation.
            </p>
          </div>

          <div className="space-y-3">
            {launchSet.map((item) => (
              <div
                key={item.t}
                className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-card p-5 hover:border-accent/40 transition-colors"
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
      </section>

      {/* Datasets + Code */}
      <section id="data-code" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="dataset" caption="Open datasets & code repositories" aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              FAIR data, ready to reuse — <span className="display-italic">with the model cards that come with it.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every dataset has a DOI, a licence, a methodology note and a named contact. Every ML model in production has a model card — purpose, training data, performance, known failure modes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-3xl border border-primary/20 bg-background p-7">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.75} />
                
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

            <div className="rounded-3xl border border-accent/25 bg-background p-7">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4 text-accent" strokeWidth={1.75} />
                
              </div>
              <ul className="space-y-3">
                {codeItems.map((c) => (
                  <li key={c} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                    <p className="text-sm text-foreground/80 leading-relaxed">{c}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-5 text-xs text-foreground/60">
            We will not publish anything that could re-identify an individual, partner data without written release, or material that puts beneficiaries at risk.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="newsletter" caption="Quarterly newsletter — EN / FR" aspect="16/9" className="mb-10" />
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                A quarterly newsletter <span className="display-italic">you will actually want to open.</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                Four issues per year. One big story, three short ones, the indicators we just refreshed, and two upcoming events. English and French from issue 1; Kinyarwanda from issue 5. We will never sell, share or rent the list.
              </p>
            </div>

            <form
              className="lg:col-span-5 rounded-3xl border border-foreground/10 bg-card p-7 space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
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
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
              >
                Subscribe <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </button>
              <p className="text-xs text-foreground/55 leading-relaxed pt-1">
                Four emails a year. Unsubscribe in one click.
              </p>
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
                
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                Everything a foundation needs <span className="display-italic">to say yes (or no).</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed">
                A single ZIP, refreshed quarterly — governance, COI and related-party policies, safeguarding and PSEAH, data and AI-ethics policies, audited financials, latest impact report, and the letter of authority for IFSS Inc. Light form gate, no paywall.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <button className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
                Download donor pack <Download className="w-4 h-4" strokeWidth={2} />
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

      {/* Cite us */}
      <section id="cite" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-8">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Use the work — <span className="display-italic">give us credit.</span>
            </h2>
            <p className="mt-6 text-base text-foreground/75 leading-relaxed">
              Cite SAICE for charity outputs and IFSS Inc. for paid-engagement deliverables. APA 7, Chicago, BibTeX and RIS exportable from every publication page.
            </p>
          </div>

          <div className="space-y-3">
            {citations.map((c) => (
              <div key={c.t} className="grid sm:grid-cols-12 gap-4 rounded-2xl border border-foreground/10 bg-card p-5">
                
                <p className="sm:col-span-9 text-sm text-foreground/80 font-mono leading-relaxed break-words">
                  {c.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/legal/terms" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
              Read the full reuse and licensing policy <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
