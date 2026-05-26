import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  SunMedium,
  Factory,
  Banknote,
  LineChart,
  Building2,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import pacesServicesImg from "@/assets/images/services/paces-services.png";

const deliverables = [
  {
    Icon: SunMedium,
    t: "Solar mini-grid feasibility & design",
    d: "Site selection, demand assessment, sizing, tariff modelling and community engagement — through to a bankable design pack.",
    detail:
      "GIS-driven site shortlisting, demand surveys, technical sizing (PV, BESS, distribution), tariff scenarios and a stakeholder-engagement plan. Output: a feasibility report and design pack ready for procurement or finance.",
  },
  {
    Icon: Factory,
    t: "Productive-use clean energy advisory",
    d: "Designing energy that powers agri-processing, cold-chain and waste sorting — so each kilowatt-hour creates a livelihood.",
    detail:
      "Value-chain diagnostics paired with appliance and load profiling. We co-design productive-use packages with cooperatives and SMEs, then sequence financing and TA so equipment lands with the people who can run it.",
  },
  {
    Icon: Banknote,
    t: "Climate finance structuring",
    d: "Blended-finance packs for mini-grids — combining concessional, results-based and commercial capital.",
    detail:
      "Capital-stack design, term-sheet support, RBF milestone definition and investor-ready financial models. Aligned with GCF, AfDB and bilateral facility templates so packs move quickly through development-finance pipelines.",
  },
  {
    Icon: LineChart,
    t: "Energy-access M&E",
    d: "Connection counts, kWh delivered and livelihood indicators — measured, verified and published quarterly.",
    detail:
      "MTF-aligned indicator set, automated meter-data ingestion, household and enterprise surveys, and a public quarterly dashboard. Designed to satisfy donor reporting and inform tariff and product-design decisions.",
  },
];

const who = [
  { Icon: Building2, t: "Governments & rural energy agencies", d: "Feasibility, design and M&E support for national electrification programmes." },
  { Icon: Banknote, t: "Developers & finance partners", d: "Bankable design packs, capital-stack structuring and results-based finance instrumentation." },
  { Icon: Users, t: "Cooperatives & productive-use SMEs", d: "Productive-use design and finance-readiness — usually subsidised under our discount policy." },
];

const policies = [
  "ESMAP Multi-Tier Framework (MTF) for energy access",
  "SE4All — Sustainable Energy for All",
  "GCF / AfDB results-based finance templates",
  "AU Agenda 2063 — Goal 7 (sustainable economies)",
];

export default function PacesServicesPage() {
  useEffect(() => {
    document.title =
      "Services for PACES · Sustainable energy — SAICE / IFSS Inc.";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Clean energy that"
        italic="pays its own way."
        description="Services for PACES · Sustainable energy. Designed around productive use — agri-processing, cold-chain, sorting — so the kilowatt-hour creates a livelihood, not just a light bulb."
        crumbs={[
          { label: "Our services", href: "/services" },
          { label: "Services for PACES" },
        ]}
        image={pacesServicesImg}
        imageAlt="Technician installing a solar panel on a rural rooftop at golden hour"
      />

      {/* Intro */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">What this stream is</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                Energy services <span className="display-italic">built around the load that pays.</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                PACES is our sustainable-energy program. The services here are how governments, developers and finance partners buy into the PACES stack — and how the margin flows back into SAICE programming.
              </p>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                Engagements run feasibility → design → finance → measure. Each deliverable below is scoped fixed-price or time-and-materials, with cooperative, women- and youth-led discounts applied at proposal stage.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">Aligned to</p>
                </div>
                <ul className="space-y-2.5">
                  {policies.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">Four deliverables</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What you can <span className="display-italic">commission.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {deliverables.map(({ Icon, t, d, detail }) => (
              <article key={t} className="blob-card bg-background p-7 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-3">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4">{d}</p>
                <p className="text-sm text-foreground/65 leading-relaxed">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who hires */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">Who hires this stream</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Three audiences. <span className="display-italic">One stack.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {who.map(({ Icon, t, d }) => (
              <div key={t} className="blob-card bg-card/40 p-6">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Bring us a <span className="display-italic">scope.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              The fastest path to a proposal is a one-page scope: site or programme, anchor productive load, financing horizon and the question you need answered. We come back within five working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
              >
                Get involved <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
              >
                Back to all services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
