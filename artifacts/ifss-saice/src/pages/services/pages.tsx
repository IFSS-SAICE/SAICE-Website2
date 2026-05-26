import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Users,
  LineChart,
  Satellite,
  Banknote,
  Sprout,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import pagesServicesImg from "@/assets/images/services/pages-services.png";

const deliverables = [
  {
    Icon: Sprout,
    t: "Value-chain mapping & cooperative diagnostics",
    d: "Parcel- and cooperative-level mapping, baseline diagnostics and capability scoring. Gender, youth and climate lenses built into the methodology — not bolted on at the end.",
    detail:
      "Field enumerators walk each cooperative against a 42-indicator instrument covering governance, finance literacy, post-harvest losses, gendered access to inputs and exposure to climate shocks. Outputs: a one-page diagnostic per cooperative and an aggregated rollup for the funder or ministry.",
  },
  {
    Icon: LineChart,
    t: "Smart Market Matchmaker — Enterprise",
    d: "Multi-buyer dashboards, off-take templates and exporter compliance modules. Built so cooperatives can move volume to formal buyers without losing margin to intermediaries.",
    detail:
      "Tenanted Enterprise deployment with your branding, buyer onboarding, KYC, off-take contract templates (EN/FR), shipment tracking and an exporter-compliance module covering GLOBALG.A.P., organic and EU-CSDDD documentation.",
  },
  {
    Icon: Satellite,
    t: "IoT Precision Insight Engine — Enterprise",
    d: "Satellite and ground-sensor stacks, branded dashboards and yield-forecast APIs. Designed for ministries, exporters and agri-finance partners who need parcel-level signal at portfolio scale.",
    detail:
      "Sentinel-2 + Planet imagery fused with optional ground-sensor telemetry (soil moisture, weather). Indices, anomaly alerts and a yield-forecast API. White-labelled dashboard, single-sign-on, and an export pipeline to your data warehouse.",
  },
  {
    Icon: Banknote,
    t: "Bankable business plans for agri-SMEs",
    d: "Investment-grade business plans, financial models and concept notes for agri-SMEs and cooperatives going to market.",
    detail:
      "Five-year financial model, sensitivity analysis, capital stack proposal and an investor-ready narrative. Aligned with PSTA 5 (Rwanda), ASTGS (Kenya), CAADP Kampala 2026–2035 and AU Agenda 2063 so plans speak the language of public and blended-finance capital.",
  },
];

const who = [
  { Icon: Users, t: "Cooperatives & producer organisations", d: "Diagnostics, market access, and finance-readiness work — usually subsidised under our discount policy." },
  { Icon: LineChart, t: "Ministries & development partners", d: "Sector diagnostics, M&E systems, and tenanted Enterprise rollouts across districts or countries." },
  { Icon: Banknote, t: "Agri-exporters & SMEs", d: "Compliance, traceability and the buyer/finance pipeline that turns a harvest into an off-take contract." },
];

const policies = [
  "Rwanda — PSTA 5 (Strategic Plan for Agriculture Transformation)",
  "Kenya — ASTGS (Agricultural Sector Transformation & Growth Strategy)",
  "Continental — CAADP Kampala Declaration 2026–2035",
  "Continental — AU Agenda 2063",
];

export default function PagesServicesPage() {
  useEffect(() => {
    document.title =
      "Services for PAGES · Agri-intelligence — SAICE / IFSS Inc.";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="From soil to shelf —"
        italic="built for African smallholders."
        description="Services for PAGES · Agri-intelligence. Mapping at cooperative and parcel level. Inclusion quotas, not aspirations. Advisory and enterprise tooling that stays in the field through implementation."
        crumbs={[
          { label: "Our services", href: "/services" },
          { label: "Services for PAGES" },
        ]}
        image={pagesServicesImg}
        imageAlt="Agronomist and cooperative leader inspecting maize in the field"
      />

      {/* Intro */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">What this stream is</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                Agri-intelligence that <span className="display-italic">earns its place in the field.</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                PAGES is our agri-intelligence program. The services on this page are how funders, ministries, exporters and finance partners buy into the PAGES stack — and how the margin flows back into SAICE programming.
              </p>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                Every engagement is mapped to one of four deliverables below. Each is scoped fixed-price or time-and-materials, with cooperative, women- and youth-led discounts applied at proposal stage.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-accent" strokeWidth={1.75} />
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

      {/* Deliverables in detail */}
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

      {/* Who hires this stream */}
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
              The fastest path to a proposal is a one-page scope: country, partner, target cooperatives, and the question you need answered. We come back within five working days.
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
