import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Sprout,
  Lock,
  Users,
  GraduationCap,
  Building2,
  FileSearch,
  Calendar,
  MapPin,
  Receipt,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import servicesHero from "@/assets/images/pages-hero.png";
import { SectionImage } from "@/components/SectionImage";

const esgDeliverables = [
  { t: "ESG due diligence", d: "Environmental, social and governance screens for investments, M&A targets, and project finance." },
  { t: "Sustainability reports", d: "GRI- or IFRS-S1/S2-aligned reports, suitable for boards, regulators, and major donors." },
  { t: "GHG baselines and pathways", d: "Scope 1–3 baselines, decarbonisation pathways, science-based-target readiness." },
  { t: "Governance & safeguarding", d: "Board charters, ESG committee mandates, PSEAH, do-no-harm and grievance-redress mechanisms." },
];

const agriDeliverables = [
  { t: "Value-chain mapping & gap analysis", d: "Inputs, production, aggregation, processing, logistics, markets — with gender, youth, conflict and climate lenses." },
  { t: "Market & buyer linkage strategy", d: "Demand mapping, anchor-buyer scouting, off-take and contract-farming structuring." },
  { t: "Bankable business plans", d: "For cooperatives and agri-SMEs — aligned with PSTA 5, ASTGS, CAADP Kampala 2026–2035, and AU Agenda 2063." },
  { t: "Climate-smart strategy & finance", d: "Input and irrigation design, climate-risk mapping, post-harvest loss reduction, MFI and mobile-money linkage." },
];

const digitalDeliverables = [
  { t: "Digital maturity audits", d: "Maturity scoring against the Principles for Digital Development and AU Continental AI Strategy." },
  { t: "System selection & architecture", d: "Open-source-first stack design, data-model definition, integration with national digital public infrastructure." },
  { t: "Low-bandwidth, multilingual UX", d: "Mobile-first, offline-first, USSD/SMS and IVR — in English, French, Kinyarwanda, Kirundi and Swahili." },
  { t: "Data protection & AI ethics", d: "Compliance design for Rwanda Law 058/2021, Kenya DPA 2019, PIPEDA, GDPR, UNESCO AI Ethics, and FAIR." },
];

const melDeliverables = [
  { t: "Results frameworks & theories of change", d: "Diagrams, indicator dictionaries, assumptions registers — publishable as part of grant proposals." },
  { t: "Baseline, mid-term & endline studies", d: "Survey design, sample frames, enumerator training, data quality assurance, analysis." },
  { t: "MEAL system design", d: "KoboToolbox, ODK, CommCare, DHIS2 or custom — chosen for what the client can sustain." },
  { t: "Independent OECD-DAC evaluations", d: "For ministries and donors, with conflict sensitivity layered on for the Great Lakes Region." },
];

const reportsDeliverables = [
  { t: "Concept notes", d: "2- to 5-page funder pitches, sharply scoped to a specific call." },
  { t: "Full grant proposals", d: "Narrative, results framework, work plan, risk register, budget and budget notes, annexes." },
  { t: "Donor reports", d: "Quarterly, annual and final reports — narrative + financial reconciliation." },
  { t: "Sector studies & policy briefs", d: "For ministries, regional bodies and continental institutions. EN/FR at publication grade." },
];

const pagesEnterprise = [
  { t: "Smart Market Matchmaker — Enterprise", d: "Multi-buyer dashboards, off-take contract templates, KYC pre-screen, exporter compliance modules." },
  { t: "IoT Precision Insight Engine — Enterprise", d: "Custom satellite + sensor stacks, branded dashboards, yield-forecast APIs." },
  { t: "ERP Finance & Inventory Tracker — Enterprise", d: "Multi-cooperative roll-ups, bank-grade reporting, audit-ready financial views." },
];

const icesEnterprise = [
  { t: "IoT Smart Bins fleet management", d: "Routing, fill-level optimisation, predictive maintenance." },
  { t: "AI & Robotics Sorting analytics", d: "Throughput, contamination rates, material-recovery dashboards." },
  { t: "RFID & Asset Management", d: "Bin and equipment tracking, asset register, depreciation tooling." },
  { t: "Data Analytics Platform", d: "Cross-stream KPIs, EPR reporting, regulatory dashboards." },
  { t: "Mobile & Digital Applications", d: "Operator apps, citizen reporting, payment integration." },
  { t: "ML Carbon Calculator", d: "Methane and CO₂ averted, verified to MRV standards and ready for carbon-market submission." },
];

const whyUs = [
  { Icon: GraduationCap, t: "Research-grade methods", d: "Practice co-designed with McGill University, RCID-Rwanda and South Eastern Kenya University. McGill MMA capstone students have stress-tested our tooling." },
  { Icon: Sprout, t: "Field-tested", d: "GIAH precision-agriculture pilot in Rwanda (2025–2026). Cleantech workshops. Multi-country business-incubation work. Real cooperatives, not test data." },
  { Icon: Leaf, t: "A charity behind the firm", d: "IFSS Inc. is owned by SAICE, a Canadian registered charity. Margin you pay funds the programs." },
  { Icon: Receipt, t: "Donor-grade transparency", d: "Audited financials, published indicators, independent external evaluations, related-party policy on every cross-entity transaction." },
  { Icon: MapPin, t: "Local presence", d: "Offices and field staff in Kigali, Kitui, Lomé. We do not fly in, write a report, and leave." },
  { Icon: Lock, t: "Confidentiality by default", d: "NDA on every engagement. Data protection to Rwanda Law 058/2021, Kenya DPA 2019, PIPEDA, GDPR — whichever is stricter." },
];

const faqs = [
  { q: "Are IFSS Inc. and SAICE the same organisation?", a: "No. SAICE is the parent charity; IFSS Inc. is its operating arm. Only SAICE can issue donation receipts; only IFSS Inc. signs consulting contracts." },
  { q: "Does paying IFSS Inc. count as a donation?", a: "No — it's a paid engagement, not tax-deductible. To make a charitable gift, donate to SAICE directly." },
  { q: "How much of what I pay IFSS Inc. goes back to SAICE?", a: "A published revenue share, set by the SAICE board annually and disclosed in the audited accounts." },
  { q: "Will my data be used to train PAGES or ICES?", a: "No — not without your written, opt-in consent on a per-engagement basis. Client data stays in the client tenant; SAICE-owned model improvements are derived only from data we own outright or from data shared under explicit licence." },
  { q: "Can SAICE program staff work on my IFSS Inc. engagement?", a: "Yes, but only under the related-party policy — with written disclosure, time-tracking, and reimbursement of SAICE at full cost. Conflicts of interest are managed by the audit committee." },
  { q: "What countries can you work in?", a: "We are currently operational in Canada, Rwanda, Kenya, Burundi, DRC, and Togo. We have worked previously in the US, Uganda, and other Great Lakes Region countries. New countries on request, subject to a feasibility review." },
  { q: "Do you sign NDAs?", a: "Yes, on every engagement. We also accept client NDAs and have a standard mutual-NDA template (see the contractor NDA on the governance page)." },
  { q: "Can I see references?", a: "Yes, on request — typically two named references per service line, sector-matched to your project." },
];

function ServiceDetail({
  id,
  eyebrow,
  title,
  italic,
  intro,
  deliverables,
  bg,
}: {
  id: string;
  eyebrow: string;
  title: string;
  italic: string;
  intro: React.ReactNode;
  deliverables: { t: string; d: string }[];
  bg?: string;
}) {
  const imageKind =
    id === "esg" ? "governance" as const :
    id === "agri" ? "agriculture" as const :
    id === "digital" ? "digital-tools" as const :
    id === "mel" ? "data" as const :
    id === "reports" ? "report" as const :
    "services" as const;
  const imageRight = id === "esg" || id === "digital" || id === "reports";
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
            <SectionImage
              kind={imageKind}
              caption={typeof title === "string" ? title : "Service line"}
              aspect="4/3"
            />
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

  useEffect(() => {
    document.title =
      "Our Services — IFSS Inc. · Consulting, Advisory and Enterprise SaaS";
  }, []);

  useEffect(() => {
    if (!sub) return;
    const el = document.getElementById(sub);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [sub]);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="Expertise for hire."
        italic="Every contract fuels the mission."
        description="Advisory, delivery and digital tools — with proceeds reinvested in the mission."
        crumbs={[{ label: "Our services" }]}
        image={servicesHero}
        imageAlt="Field deployment of digital advisory tools"
      />

      {/* ESG */}
      <ServiceDetail
        id="esg"
        bg="bg-card/40"
        eyebrow="Service line · 01"
        title="ESG that holds up"
        italic="to scrutiny."
        intro={
          <>
            <p>
              We help organisations turn ESG from a reporting chore into a credible, decision-useful instrument. Our work is grounded in GRI Standards, IFC Performance Standards, the OECD Guidelines for Multinational Enterprises, the GHG Protocol, the TCFD recommendations, and the AU Continental AI Strategy where AI tools are part of the picture.
            </p>
          </>
        }
        deliverables={esgDeliverables}
      />

      {/* Agri */}
      <ServiceDetail
        id="agri"
        eyebrow="Service line · 02"
        title="From soil to shelf —"
        italic="built for African smallholders."
        intro={
          <p>
            Most agri value-chain work in Africa fails on three things: it is mapped at too high a level, it ignores women and youth, and it stops at the report. We do the opposite. We map at cooperative and parcel level, we set hard inclusion quotas, and we stay through implementation.
          </p>
        }
        deliverables={agriDeliverables}
      />

      {/* Digital */}
      <ServiceDetail
        id="digital"
        bg="bg-card/40"
        eyebrow="Service line · 03"
        title="Digital that reaches"
        italic="the last farmer."
        intro={
          <p>
            Digital transformation in African development too often means a fancy app for the capital and nothing for the cooperative two hours from a paved road. We design from the bottom up — USSD and SMS first, then smartphone, then web — and we treat local languages, low-bandwidth devices, and gender-aware UX as engineering requirements, not nice-to-haves.
          </p>
        }
        deliverables={digitalDeliverables}
      />

      {/* M&E */}
      <ServiceDetail
        id="mel"
        eyebrow="Service line · 04"
        title="Donor-grade M&E"
        italic="without the box-ticking."
        intro={
          <p>
            We design and run MEAL systems that tell the truth — including when the news is bad. Our practice is grounded in the OECD-DAC evaluation criteria (relevance, coherence, effectiveness, efficiency, impact, sustainability) and the BetterEvaluation framework, with conflict sensitivity layered on for the Great Lakes Region.
          </p>
        }
        deliverables={melDeliverables}
      />

      {/* Reports */}
      <ServiceDetail
        id="reports"
        bg="bg-card/40"
        eyebrow="Service line · 05"
        title="Reports that get funded."
        italic="Reports that get read."
        intro={
          <p>
            A proposal is not a writing exercise. It is a logic problem dressed in prose. We treat it that way — and our win rate shows it. We write for GAC, IDRC, FCDO, the EU, the World Bank, IFAD, AfDB, the Gates Foundation, Mastercard Foundation, Rockefeller and a long tail of bilateral and private donors — in both English and French.
          </p>
        }
        deliverables={reportsDeliverables}
      />

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
              SAICE flagship initiative
            </span>
            <h2 className="mt-7 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02]">
              Digital Tools{" "}
              <span className="display-italic" style={{ color: "hsl(154 55% 72%)" }}>
                Hub.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto">
              Every SAICE digital tool in one place — from market matchmaking and precision agronomy to smart bins and carbon MRV. Free for cooperatives. Licensed for everyone else, with the proceeds funding the mission.
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services/digital-tools"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
              >
                Explore the Digital Tools Hub
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                href="#proposal"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
              >
                Book an enterprise demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Built for the work, <span className="display-italic">not for the slide deck.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map(({ Icon, t, d }) => (
              <div key={t} className="blob-card bg-background p-6">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/governance" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
              Read about our governance and transparency <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Transparent <span className="display-italic">on principle.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              We do not publish day-rates because the right number depends on scope, country, team mix, and whether the work feeds a SAICE program. We are happy to share an indicative budget within 5 business days of a discovery call.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { t: "Fixed-price", d: "For well-defined scopes — proposals, reports, audits, evaluations. Milestones billed on delivery." },
              { t: "Time and materials", d: "For exploratory or adaptive work. Rate card shared under NDA. Weekly burn report included." },
              { t: "Retainer", d: "For ongoing MEAL, technical-assistance, or product-management work. Quarterly true-up." },
            ].map(({ t, d }) => (
              <div key={t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                
                <h3 className="font-serif text-xl font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-6 max-w-3xl">
            
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />Cooperatives, women- and youth-led SMEs, and Indigenous-led organisations qualify for a 15–30% discount.</li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />Multi-country and multi-year rollouts of PAGES or ICES Enterprise carry volume discounts.</li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />Pro-bono work is considered case by case, subject to board approval.</li>
            </ul>
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
                Share a few details about the engagement — sector, countries, service line, budget range and timeline. A specialist will come back with an indicative scoping note within 5 business days.
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
                    <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 mb-2">Service line(s) needed *</legend>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["ESG", "Agri value chains", "Digital transformation", "M&E", "Reports & proposals", "Enterprise SaaS", "Other"].map((s) => (
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
