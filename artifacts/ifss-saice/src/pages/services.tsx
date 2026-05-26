import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Lock,
  Building2,
  FileSearch,
  Calendar,
  Receipt,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import servicesHero from "@/assets/images/services/hero-services.png";
import pagesServicesImg from "@/assets/images/services/pages-services.png";
import icesServicesImg from "@/assets/images/services/ices-services.png";
import pacesServicesImg from "@/assets/images/services/paces-services.png";

const pagesDeliverables = [
  { t: "Value-chain mapping & cooperative diagnostics", d: "From soil to shelf — gender, youth and climate lenses built in." },
  { t: "Smart Market Matchmaker — Enterprise", d: "Multi-buyer dashboards, off-take templates, exporter compliance modules." },
  { t: "IoT Precision Insight Engine — Enterprise", d: "Satellite and sensor stacks, branded dashboards, yield-forecast APIs." },
  { t: "Bankable business plans for agri-SMEs", d: "Aligned with PSTA 5, ASTGS, CAADP Kampala 2026–2035 and AU Agenda 2063." },
];

const icesDeliverables = [
  { t: "Waste-stream audits & circular strategy", d: "Diagnostics and roadmaps for cities, EPR schemes and waste-led SMEs." },
  { t: "IoT Smart Bins & sorting analytics", d: "Fleet management, routing, AI sorting, material-recovery dashboards." },
  { t: "ML Carbon Calculator (MRV-grade)", d: "Methane and CO₂ averted, verified for carbon-market submission." },
  { t: "Cooperative incubation for waste-pickers", d: "Youth- and women-led co-ops set up to take on contracts at scale." },
];

const pacesDeliverables = [
  { t: "Solar mini-grid feasibility & design", d: "Site selection, sizing, tariff modelling and community engagement." },
  { t: "Productive-use clean energy advisory", d: "Designing energy that powers agri-processing, cold-chain and waste sorting." },
  { t: "Climate finance structuring", d: "Blended-finance packs for mini-grids, results-based and concessional capital." },
  { t: "Energy-access M&E", d: "Connection, kWh and livelihood indicators — published quarterly." },
];

const crossCutting = [
  {
    Icon: Sparkles,
    t: "ESG & sustainability",
    d: "GRI / IFRS-S1/S2 reports, GHG baselines, safeguarding policies — applied across PAGES, ICES and PACES.",
  },
  {
    Icon: FileSearch,
    t: "M&E and independent evaluation",
    d: "OECD-DAC evaluations, MEAL system design, baselines and endlines — for ministries, donors and our own programs.",
  },
  {
    Icon: Receipt,
    t: "Reports, proposals & policy briefs",
    d: "Concept notes, grant proposals and donor reports — in EN/FR, publication-grade.",
  },
];

const faqs = [
  { q: "Are IFSS Inc. and SAICE the same organisation?", a: "No. SAICE is the parent charity; IFSS Inc. is its operating arm. Only SAICE can issue donation receipts; only IFSS Inc. signs consulting contracts." },
  { q: "Does paying IFSS Inc. count as a donation?", a: "No — it's an engagement, not a tax-deductible gift. To make a charitable gift, donate to SAICE directly." },
  { q: "How much of what I pay IFSS Inc. goes back to SAICE?", a: "A published revenue share, set by the SAICE board annually and disclosed in the audited accounts." },
  { q: "Will my data be used to train PAGES or ICES?", a: "No — not without your written, opt-in consent on a per-engagement basis. Client data stays in the client tenant; SAICE-owned model improvements are derived only from data we own outright or from data shared under explicit licence." },
  { q: "Can SAICE program staff work on my IFSS Inc. engagement?", a: "Yes, but only under the related-party policy — with written disclosure, time-tracking, and reimbursement of SAICE at full cost. Conflicts of interest are managed by the audit committee." },
  { q: "What countries can you work in?", a: "We are currently operational in Canada, Rwanda, Kenya, Burundi, DRC, and Togo. We have worked previously in the US, Uganda, and other Great Lakes Region countries. New countries on request, subject to a feasibility review." },
  { q: "Do you sign NDAs?", a: "Yes, on every engagement. We also accept client NDAs and have a standard mutual-NDA template (see the contractor NDA on the governance page)." },
  { q: "Can I see references?", a: "Yes, on request — typically two named references per program, sector-matched to your project." },
];

function ServiceDetail({
  id,
  eyebrow,
  title,
  italic,
  intro,
  deliverables,
  bg,
  img,
  imgAlt,
  imgCaption,
}: {
  id: string;
  eyebrow: string;
  title: string;
  italic: string;
  intro: React.ReactNode;
  deliverables: { t: string; d: string }[];
  bg?: string;
  img: string;
  imgAlt: string;
  imgCaption: string;
}) {
  const imageRight = id === "ices";
  return (
    <section id={id} className={`py-14 md:py-16 scroll-mt-32 ${bg ?? ""}`}>
      <div className="container px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          <div className={`lg:col-span-7 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">{eyebrow}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              {title} <span className="display-italic">{italic}</span>
            </h2>
            <div className="mt-6 text-foreground/75 leading-relaxed text-lg space-y-4">
              {intro}
            </div>
            <ul className="mt-7 space-y-3.5">
              {deliverables.map((d) => (
                <li key={d.t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <span className="font-serif font-semibold text-foreground">{d.t}.</span>{" "}
                    <span className="text-foreground/70">{d.d}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`lg:col-span-5 lg:sticky lg:top-28 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
            <figure className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <img src={img} alt={imgAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/55 to-transparent" />
              <figcaption className="absolute left-4 bottom-4 md:left-5 md:bottom-5">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                  {imgCaption}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const notionHubUrl = (import.meta.env.VITE_NOTION_HUB_URL as string | undefined) ?? "";

  useEffect(() => {
    document.title =
      "Our Services — Aligned to PAGES, ICES and PACES · SAICE / IFSS Inc.";
  }, []);

  useEffect(() => {
    if (!sub) return;
    const el = document.getElementById(sub);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [sub]);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Services that power"
        italic="our programs."
        description="Three programs. Three streams of services."
        crumbs={[{ label: "Our services" }]}
        image={servicesHero}
        imageAlt="Field deployment of digital advisory tools"
      />

      {/* How services map to programs */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">How we work</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Three programs. <span className="display-italic">Three service streams.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every engagement we take on is aligned to one of our three programs — and every margin we earn funds them. Funders, ministries and enterprise partners can buy the advisory, delivery and digital tools that sit behind each program.
            </p>
            <p className="mt-4 text-sm text-foreground/65 leading-relaxed">
              Research-grade methods, field-tested in real cooperatives. Local teams in Kigali, Kitui and Lomé. NDA on every engagement; data protection to whichever law is stricter.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { tag: "PAGES", t: "Agri-intelligence", d: "Cooperatives, smallholders, food systems.", href: "/programs/pages" },
              { tag: "ICES", t: "Circular economy", d: "Waste, recycling, MRV-grade carbon.", href: "/programs/ices" },
              { tag: "PACES", t: "Sustainable energy", d: "Mini-grids, productive use, climate finance.", href: "/programs/paces" },
            ].map((p) => (
              <Link
                key={p.tag}
                href={p.href}
                className="blob-card bg-background p-6 hover:bg-card/40 transition-colors block"
              >
                <span className="inline-flex items-center h-6 px-3 rounded-full bg-accent/15 text-accent text-[10px] font-semibold uppercase tracking-[0.22em]">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight">{p.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.d}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Services for {p.tag} <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>

          {/* Engagement models */}
          <div className="mt-12 md:mt-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-5">How we engage</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { t: "Fixed-price", d: "Well-defined scopes — proposals, reports, audits, evaluations. Milestones billed on delivery." },
                { t: "Time and materials", d: "Exploratory or adaptive work. Rate card shared under NDA. Weekly burn report." },
                { t: "Retainer", d: "Ongoing M&E, technical assistance or product work. Quarterly true-up." },
              ].map(({ t, d }) => (
                <div key={t} className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                  <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/[0.04] p-6">
              <ul className="space-y-2.5 text-sm text-foreground/80">
                <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />Cooperatives, women- and youth-led SMEs, and Indigenous-led organisations qualify for a 15–30% discount.</li>
                <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />Multi-country and multi-year PAGES, ICES or PACES rollouts are scoped at preferential rates.</li>
                <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />Pro-bono work is considered case by case, subject to board approval.</li>
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/governance" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
                Read about our governance and transparency <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services for PAGES */}
      <ServiceDetail
        id="pages"
        bg="bg-card/40"
        eyebrow="Services for PAGES · Agri-intelligence"
        title="From soil to shelf —"
        italic="built for African smallholders."
        intro={
          <p>
            Mapping at cooperative and parcel level. Inclusion quotas, not aspirations. Advisory and enterprise tooling that stays in the field through implementation.
          </p>
        }
        deliverables={pagesDeliverables}
        img={pagesServicesImg}
        imgAlt="Agronomist and cooperative leader inspecting maize in the field"
        imgCaption="PAGES · Field"
      />

      {/* Services for ICES */}
      <ServiceDetail
        id="ices"
        eyebrow="Services for ICES · Circular economy"
        title="Circular systems that"
        italic="actually close the loop."
        intro={
          <p>
            Audit, design, instrument, measure. We help cities, EPR schemes and waste-led SMEs move material — and prove it with MRV-grade carbon data.
          </p>
        }
        deliverables={icesDeliverables}
        img={icesServicesImg}
        imgAlt="Engineer inspecting a smart waste-bin sensor in a recovery facility"
        imgCaption="ICES · Recovery"
      />

      {/* Services for PACES */}
      <ServiceDetail
        id="paces"
        bg="bg-card/40"
        eyebrow="Services for PACES · Sustainable energy"
        title="Clean energy that"
        italic="pays its own way."
        intro={
          <p>
            Designed around productive use — agri-processing, cold-chain, sorting — so the kilowatt-hour creates a livelihood, not just a light bulb.
          </p>
        }
        deliverables={pacesDeliverables}
        img={pacesServicesImg}
        imgAlt="Technician installing a solar panel on a rural rooftop at golden hour"
        imgCaption="PACES · Mini-grid"
      />

      {/* Cross-cutting services */}
      <section id="cross-cutting" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">Cross-cutting</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Applied across <span className="display-italic">every program.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Three practices we run for our own programs — and offer to funders, ministries and partners working on theirs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {crossCutting.map(({ Icon, t, d }) => (
              <div key={t} className="blob-card bg-background p-6">
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

      {/* Digital Tools Hub — Zamuka-style flagship block */}
      <section id="digital-hub" className="relative scroll-mt-32 py-14 md:py-20 bg-primary text-primary-foreground overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 80% 25%, hsl(var(--accent) / 0.22), transparent 70%)",
          }}
        />

        <div className="relative container px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-[0.22em]">
              Developed by IFSS Inc. · Powered by Notion
            </span>
            <h2 className="mt-7 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02]">
              Digital Tools{" "}
              <span className="display-italic" style={{ color: "hsl(154 55% 72%)" }}>
                Hub.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto">
              Built by IFSS Inc. and delivered as a Notion workspace — every tool for our PAGES, ICES and PACES programs in one place. Free for cooperatives. Open to everyone else with proceeds funding the mission.
            </p>
          </div>

          {/* White content card */}
          <div className="mt-12 md:mt-14 max-w-5xl mx-auto rounded-3xl bg-background text-foreground p-8 md:p-12 shadow-2xl shadow-black/20">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-center">
              What's inside
            </h3>
            <div className="mx-auto mt-3 h-px w-12 bg-accent" />

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  {[
                    "Smart Market Matchmaker",
                    "IoT Precision Insight Engine",
                    "ERP Finance & Inventory Tracker",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="font-serif font-semibold">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  {[
                    "IoT Smart Bins",
                    "AI & Robotics Sorting",
                    "RFID & Asset Management",
                    "Data Analytics Platform",
                    "Mobile & Digital Applications",
                    "ML Carbon Calculator",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="font-serif font-semibold">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Notion workspace embed slot */}
            <div className="mt-10 rounded-2xl border border-foreground/10 bg-card/60 overflow-hidden">
              {notionHubUrl ? (
                <iframe
                  src={notionHubUrl}
                  title="IFSS Digital Tools Hub — Notion workspace"
                  loading="lazy"
                  className="w-full h-[520px] block bg-background"
                />
              ) : (
                <div className="px-6 py-10 md:px-10 md:py-14 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                    <Sparkles className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="font-serif text-lg md:text-xl font-semibold tracking-tight">
                    The Notion workspace embeds here.
                  </p>
                  <p className="mt-3 text-sm text-foreground/70 max-w-md mx-auto leading-relaxed">
                    The IFSS-built Digital Tools Hub goes live on Notion. Once the public URL is set, this section becomes a live embed.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={notionHubUrl ?? "#"}
                target={notionHubUrl ? "_blank" : undefined}
                rel={notionHubUrl ? "noopener noreferrer" : undefined}
                aria-disabled={!notionHubUrl}
                className={`inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background text-sm font-semibold transition-colors ${
                  notionHubUrl ? "hover:bg-foreground/85" : "opacity-60 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!notionHubUrl) e.preventDefault();
                }}
              >
                {notionHubUrl ? "Open in Notion" : "Notion workspace — coming soon"}
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <Link
                href="/services/digital-tools"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
              >
                See what's inside
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Honest answers to <span className="display-italic">the questions buyers actually ask.</span>
            </h2>
          </div>
          <div className="max-w-3xl divide-foreground/10 border-foreground/10">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  >
                    <span className="font-serif text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-foreground/60 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={2}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 -mt-1 text-sm text-foreground/75 leading-relaxed pr-10">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get a proposal — form */}
      <section id="proposal" className="py-14 md:py-16 bg-primary text-primary-foreground scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-2">
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] mb-6">
                Tell us what you need.{" "}
                <span className="font-serif italic font-light text-accent">We reply within 2 business days.</span>
              </h2>
              <p className="text-base text-primary-foreground/80 leading-relaxed mb-8">
                Share a few details about the engagement — program, countries, scope, budget range and timeline. A specialist will come back with an indicative scoping note within 5 business days.
              </p>
              <div className="space-y-4 border-primary-foreground/15 pt-6">
                {[
                  { Icon: Calendar, t: "2 business days", d: "Human reply on every enquiry — automated EN/FR acknowledgement first." },
                  { Icon: FileSearch, t: "5 business days", d: "Indicative scoping note follows the discovery call." },
                  { Icon: Lock, t: "NDA on file", d: "Standard mutual NDA available; client NDAs accepted." },
                ].map(({ Icon, t, d }) => (
                  <div key={t} className="flex gap-3">
                    <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    <div>
                      <p className="font-serif font-semibold text-primary-foreground text-sm">{t}</p>
                      <p className="text-xs text-primary-foreground/65 leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 rounded-3xl bg-background text-foreground p-6 md:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-6 h-6 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight mb-2">Thanks — your enquiry is in.</h3>
                  <p className="text-sm text-foreground/70 max-w-md mx-auto leading-relaxed">
                    A specialist will reply within 2 business days. Anything urgent? Email{" "}
                    <a href="mailto:hello@ifssgoal.org" className="text-accent font-semibold underline underline-offset-4">hello@ifssgoal.org</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 h-10 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      
                      <input required type="text" className="mt-1.5 w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm" />
                    </label>
                    <label className="block">
                      
                      <input required type="text" className="mt-1.5 w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm" />
                    </label>
                    <label className="block">
                      
                      <input required type="email" className="mt-1.5 w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm" />
                    </label>
                    <label className="block">
                      
                      <input required type="text" placeholder="e.g. Rwanda, Kenya" className="mt-1.5 w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm" />
                    </label>
                  </div>

                  <fieldset>
                    <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 mb-2">Program(s) of interest *</legend>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["PAGES — Agri-intelligence", "ICES — Circular economy", "PACES — Sustainable energy", "ESG & sustainability", "M&E and evaluation", "Reports & proposals", "Other"].map((s) => (
                        <label key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                          <input type="checkbox" name="service" value={s} className="rounded border-foreground/30 text-accent focus:ring-accent/30" />
                          {s}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      
                      <select className="mt-1.5 w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm">
                        <option>Prefer to discuss</option>
                        <option>&lt; CAD 25k</option>
                        <option>25–100k</option>
                        <option>100–250k</option>
                        <option>250k–1M</option>
                        <option>&gt; 1M</option>
                      </select>
                    </label>
                    <label className="block">
                      
                      <select className="mt-1.5 w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm">
                        <option>Flexible</option>
                        <option>&lt; 1 month</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6–12 months</option>
                        <option>12+ months</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    
                    <textarea required rows={4} className="mt-1.5 w-full px-3 py-2.5 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm resize-y" />
                  </label>

                  <label className="block">
                    
                    <select className="mt-1.5 w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-sm">
                      <option>Not sure</option>
                      <option>Yes — cooperative, women- or youth-led SME, or Indigenous-led</option>
                      <option>No</option>
                    </select>
                  </label>

                  <label className="flex items-start gap-2.5 text-xs text-foreground/70 pt-1">
                    <input required type="checkbox" className="mt-0.5 rounded border-foreground/30 text-accent focus:ring-accent/30" />
                    <span>
                      I agree to the IFSS Inc. <Link href="/legal" className="text-accent underline underline-offset-4">privacy notice</Link> and confirm I am authorised to share the above information. *
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold transition-colors"
                  >
                    Send my enquiry <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
