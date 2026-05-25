import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Building2,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";

type Tool = {
  name: string;
  tag: string;
  desc: string;
  bullets: string[];
  url: string;
  docs: string;
};

const pagesTools: Tool[] = [
  {
    name: "Smart Market Matchmaker",
    tag: "Market access",
    desc: "Multi-buyer dashboards, off-take contract templates, KYC pre-screen, and exporter compliance modules — built for agri-input suppliers, exporters and aggregators.",
    bullets: ["Buyer–seller match scoring", "Off-take contract library", "Exporter compliance pack"],
    url: "https://tools.saice.org/pages/smart-market",
    docs: "https://docs.saice.org/pages/smart-market",
  },
  {
    name: "IoT Precision Insight Engine",
    tag: "Agronomy & climate",
    desc: "Custom satellite + sensor stacks with branded dashboards and yield-forecast APIs. Designed for ministries, financial institutions and large-scale farms.",
    bullets: ["Sentinel-2 + sensor fusion", "Yield-forecast API", "Climate-risk maps"],
    url: "https://tools.saice.org/pages/precision-insight",
    docs: "https://docs.saice.org/pages/precision-insight",
  },
  {
    name: "ERP Finance & Inventory Tracker",
    tag: "Cooperative operations",
    desc: "Multi-cooperative roll-ups, bank-grade reporting, and audit-ready financial views — usable by a single SME or a federation of fifty.",
    bullets: ["Multi-entity roll-ups", "IFRS-ready reports", "Mobile money integration"],
    url: "https://tools.saice.org/pages/erp",
    docs: "https://docs.saice.org/pages/erp",
  },
];

const icesTools: Tool[] = [
  {
    name: "IoT Smart Bins",
    tag: "Collection",
    desc: "Fleet management for sensor-equipped bins — routing, fill-level optimisation, and predictive maintenance for municipal and private operators.",
    bullets: ["Dynamic routing", "Fill-level forecasting", "Predictive maintenance"],
    url: "https://tools.saice.org/ices/smart-bins",
    docs: "https://docs.saice.org/ices/smart-bins",
  },
  {
    name: "AI & Robotics Sorting",
    tag: "Material recovery",
    desc: "Throughput, contamination-rate, and material-recovery dashboards for sorting facilities — integrates with most conveyor and vision systems.",
    bullets: ["Contamination tracking", "Material-recovery KPIs", "Operator overrides"],
    url: "https://tools.saice.org/ices/sorting",
    docs: "https://docs.saice.org/ices/sorting",
  },
  {
    name: "RFID & Asset Management",
    tag: "Assets",
    desc: "Bin and equipment tracking, asset register and depreciation tooling — works alongside any standard finance system.",
    bullets: ["RFID + QR tracking", "Asset register", "Depreciation tooling"],
    url: "https://tools.saice.org/ices/rfid",
    docs: "https://docs.saice.org/ices/rfid",
  },
  {
    name: "Data Analytics Platform",
    tag: "Reporting",
    desc: "Cross-stream KPIs, EPR reporting and regulatory dashboards — one place for everything a municipality or producer responsibility scheme needs to file.",
    bullets: ["EPR filings", "Cross-stream KPIs", "Regulator-ready exports"],
    url: "https://tools.saice.org/ices/analytics",
    docs: "https://docs.saice.org/ices/analytics",
  },
  {
    name: "Mobile & Digital Applications",
    tag: "Citizen & operator",
    desc: "Operator apps, citizen reporting flows, and payment integration — low-bandwidth and offline-first, in EN/FR/Kinyarwanda/Kirundi/Swahili.",
    bullets: ["Offline-first", "Multilingual UX", "Payment integration"],
    url: "https://tools.saice.org/ices/apps",
    docs: "https://docs.saice.org/ices/apps",
  },
  {
    name: "ML Carbon Calculator",
    tag: "MRV & carbon",
    desc: "Methane and CO₂ averted, verified to MRV standards and ready for carbon-market submission — for ICES sites and partner operators.",
    bullets: ["MRV-compliant", "Methane + CO₂", "Carbon-market exports"],
    url: "https://tools.saice.org/ices/carbon",
    docs: "https://docs.saice.org/ices/carbon",
  },
];

function ToolCard({ tool, accent }: { tool: Tool; accent: "primary" | "accent" }) {
  const isPrimary = accent === "primary";
  return (
    <div
      className={`rounded-3xl border p-6 md:p-7 flex flex-col ${
        isPrimary
          ? "border-primary/20 bg-primary/[0.03]"
          : "border-accent/25 bg-accent/[0.04]"
      }`}
    >
      
      <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight mb-2">
        {tool.name}
      </h3>
      <p className="text-sm text-foreground/75 leading-relaxed mb-5">{tool.desc}</p>

      <ul className="space-y-2 mb-6">
        {tool.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-foreground/80">
            <CheckCircle2
              className={`w-3.5 h-3.5 flex-shrink-0 mt-1 ${
                isPrimary ? "text-primary" : "text-accent"
              }`}
              strokeWidth={2}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2.5">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
        >
          Visit tool <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </a>
        <a
          href={tool.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
        >
          Documentation <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

export default function DigitalToolsHubPage() {
  useEffect(() => {
    document.title = "Digital Tools Hub — SAICE / IFSS Inc.";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="One hub."
        italic="Every SAICE tool."
        description="A single home for the digital tools that power our PAGES and ICES programmes. Cooperatives and SMEs use them for free under SAICE; ministries, exporters and operators license the enterprise editions through IFSS Inc."
        crumbs={[
          { label: "Our services", href: "/services" },
          { label: "Digital Tools Hub" },
        ]}
        actions={
          <div className="flex flex-wrap gap-3">
            <a
              href="#pages"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold transition-colors"
            >
              PAGES tools <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#ices"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm font-semibold transition-colors"
            >
              ICES tools
            </a>
          </div>
        }
      />

      {/* PAGES */}
      <section id="pages" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-4 h-4 text-primary" strokeWidth={1.75} />
              
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Tools for farmers, cooperatives, <span className="display-italic">and the people who buy from them.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pagesTools.map((t) => (
              <ToolCard key={t.name} tool={t} accent="primary" />
            ))}
          </div>
        </div>
      </section>

      {/* ICES */}
      <section id="ices" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-accent" strokeWidth={1.75} />
              
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Tools for municipalities, processors <span className="display-italic">and waste operators.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {icesTools.map((t) => (
              <ToolCard key={t.name} tool={t} accent="accent" />
            ))}
          </div>
        </div>
      </section>

      {/* How licensing works */}
      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Free for the mission. <span className="display-italic">Paid for the rest.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                t: "Public-good edition",
                d: "Cooperatives, women- and youth-led SMEs, and ministries running SAICE-funded programmes use the tools at no cost. Data stays in their tenant.",
              },
              {
                t: "Enterprise edition",
                d: "Licensed by IFSS Inc. to private operators with annual licence + per-seat fees. Branded dashboards, SLAs, and integrations included.",
              },
              {
                t: "Revenue share to SAICE",
                d: "A published share of every enterprise licence flows back to SAICE to keep the public-good editions free, forever.",
              },
            ].map(({ t, d }) => (
              <div key={t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/services#proposal"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
            >
              Request a licence quote <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
            >
              Back to Our services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
