import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Recycle,
  ClipboardList,
  Cpu,
  Calculator,
  Users,
  Building2,
  Factory,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import icesServicesImg from "@/assets/images/services/ices-services.png";

const deliverables = [
  {
    Icon: ClipboardList,
    t: "Waste-stream audits & circular strategy",
    d: "Diagnostics and roadmaps for cities, EPR schemes and waste-led SMEs — from material flow analysis to a sequenced investment plan.",
    detail:
      "Six- to twelve-week engagements: characterisation studies, MFA, stakeholder mapping, and a costed circular roadmap with phased capex, governance recommendations and a draft EPR fee structure where relevant.",
  },
  {
    Icon: Cpu,
    t: "IoT Smart Bins & sorting analytics",
    d: "Fleet management, route optimisation, AI-assisted sorting and material-recovery dashboards — deployed as Enterprise tenants.",
    detail:
      "Hardware-agnostic backend that ingests fill-level sensors, weighbridge data and MRF computer-vision feeds. Outputs: route plans for collection fleets, contamination alerts, and a recovery-rate dashboard for operations and reporting teams.",
  },
  {
    Icon: Calculator,
    t: "ML Carbon Calculator (MRV-grade)",
    d: "Methane and CO₂ averted, calculated to MRV standards and packaged for carbon-market submission.",
    detail:
      "Methodology mapped to Verra VM0046 / VCS waste-sector protocols. Activity data ingested from Smart Bins or third-party systems, emissions factors localised, and a verifier-ready evidence pack generated per reporting period.",
  },
  {
    Icon: Users,
    t: "Cooperative incubation for waste-pickers",
    d: "Youth- and women-led cooperatives set up to take on collection, sorting and recovery contracts at scale.",
    detail:
      "Registration support, financial literacy, occupational safety, contract templates and a 12-month TA package. Run jointly with municipal partners; graduates plug directly into EPR-scheme reporting pipelines.",
  },
];

const who = [
  { Icon: Building2, t: "Cities & municipalities", d: "Diagnostics, master plans, and operations dashboards for solid-waste departments." },
  { Icon: Factory, t: "EPR schemes & producers", d: "Compliance, reporting and verified material-recovery data for plastic, packaging and e-waste schemes." },
  { Icon: Users, t: "Waste-led cooperatives & SMEs", d: "Incubation, tooling and finance-readiness — usually subsidised under our discount policy." },
];

const policies = [
  "Verra VM0046 — Methodology for Reduction of Landfill Disposal",
  "VCS Standard (Verified Carbon Standard) — Waste sector",
  "EU CSDDD — supply-chain due diligence",
  "African Circular Economy Alliance (ACEA) framework",
];

export default function IcesServicesPage() {
  useEffect(() => {
    document.title =
      "Services for ICES · Circular economy — SAICE / IFSS Inc.";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="Circular systems that"
        italic="actually close the loop."
        description="Services for ICES · Circular economy. Audit, design, instrument, measure. We help cities, EPR schemes and waste-led SMEs move material — and prove it with MRV-grade carbon data."
        crumbs={[
          { label: "Our services", href: "/services" },
          { label: "Services for ICES" },
        ]}
        image={icesServicesImg}
        imageAlt="Engineer inspecting a smart waste-bin sensor in a recovery facility"
      />

      {/* Intro */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">What this stream is</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                Circular work that <span className="display-italic">moves material — and proves it.</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                ICES is our circular-economy program. The services here are how municipalities, EPR schemes, producers and waste-led SMEs buy into the ICES stack — and how the margin flows back into SAICE programming.
              </p>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                Engagements run audit → design → instrument → measure. Each deliverable below is scoped fixed-price or time-and-materials, with cooperative, women- and youth-led discounts applied at proposal stage.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <Recycle className="w-4 h-4 text-accent" strokeWidth={1.75} />
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
              The fastest path to a proposal is a one-page scope: city or scheme, material streams, target tonnage and the question you need answered. We come back within five working days.
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
