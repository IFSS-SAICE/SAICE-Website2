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
import resourcesHero from "@/assets/images/resources-hero.png";
import { SectionImage } from "@/components/SectionImage";
import { ContactDialog } from "@/components/ContactDialog";

const launchSet = [
  { year: "2026", t: "PAGES Rwanda pilot — lessons learned", tag: "Working paper", program: "PAGES" },
  { year: "2026", t: "Integrated SAICE / IFSS programs — concept note", tag: "Concept note", program: "Cross-program" },
  { year: "2027", t: "PAGES baseline study — Rwanda and Kenya", tag: "Baseline", program: "PAGES" },
  { year: "2027", t: "ICES Togo pilot — launch brief", tag: "Policy brief", program: "ICES" },
  { year: "2027", t: "PACES mini-grid feasibility — first cohort", tag: "Feasibility", program: "PACES" },
  { year: "2027", t: "Services delivery handbook — how we engage partners", tag: "Handbook", program: "Services" },
];

const datasetsYes = [
  "Aggregated, de-identified indicator data per quarter",
  "Cooperative-level data — only with explicit consent on file",
  "Geospatial layers — farm parcels, waste-stream coverage, energy demand",
  "Survey instruments and de-identified responses where consent permits",
];

const codeItems = [
  "PAGES — market matchmaker, IoT precision insight, cooperative ERP",
  "ICES — smart-bin firmware, sorting analytics, ML carbon calculator",
  "PACES — mini-grid sizing tools, productive-use planner, MRV scripts",
  "Shared backbone — common data model, auth, USSD / SMS gateway, model cards",
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
      <PageHero title="Evidence we share,"
        italic="tools you can use."
        description="Briefs, datasets and code from our PAGES, ICES and PACES programs — published in plain language, under open licences, and free to build on."
        crumbs={[{ label: "Resources" }]}
        image={resourcesHero}
        imageAlt="Open research and publications"
      />

      {/* Publications */}
      <section id="publications" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
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
                          {item.year} · {item.program} · {item.tag}
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

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="publications" caption="Concept notes, policy briefs, papers" aspect="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Datasets + Code */}
      <section id="data-code" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 order-1">
              <SectionImage kind="dataset" caption="Open datasets & code repositories" aspect="4/3" />
            </div>

            <div className="lg:col-span-7 space-y-8 order-2">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  FAIR data, ready to reuse — <span className="display-italic">with the model cards that come with it.</span>
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  Every dataset has a DOI, a licence, a methodology note and a named contact. Every ML model in production has a model card — purpose, training data, performance, known failure modes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-3xl border border-primary/20 bg-background p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Datasets</p>
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

                <div className="rounded-3xl border border-accent/25 bg-background p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-4 h-4 text-accent" strokeWidth={1.75} />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Code</p>
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

              <p className="text-xs text-foreground/60">
                We will not publish anything that could re-identify an individual, partner data without written release, or material that puts beneficiaries at risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  A quarterly newsletter <span className="display-italic">you will actually want to open.</span>
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  Four issues per year. One big story, three short ones, the indicators we just refreshed, and two upcoming events. English and French from issue 1; Kinyarwanda from issue 5. We will never sell, share or rent the list.
                </p>
              </div>

              <form
                className="rounded-3xl border border-foreground/10 bg-card p-7 space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-3">
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
                </div>
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

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="newsletter" caption="Quarterly newsletter — EN / FR" aspect="4/3" />
            </div>
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
              <ContactDialog>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
                >
                  Request a walk-through
                </button>
              </ContactDialog>
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
