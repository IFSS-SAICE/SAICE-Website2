import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Database,
  Server,
  Cpu,
  Fingerprint,
  Activity,
  LineChart,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  BookOpen,
  MapPin,
  BarChart3,
  FileText,
  Coins,
  Building2,
} from "lucide-react";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";
import { PageHero } from "@/components/PageHero";
import { SectionImage, type SectionImageKind } from "@/components/SectionImage";

export default function ProgramsRoutes({ params }: { params?: { track?: string, tool?: string } }) {
  const isPages = params?.track === 'pages' && !params.tool;
  const isIces = params?.track === 'ices' && !params.tool;
  const isToc = params?.track === 'theory-of-change';
  const isTool = !!params?.tool;

  useEffect(() => {
    document.title = `Programs ${params?.track ? `- ${params.track}` : ''} | SAICE / IFSS Inc.`;
  }, [params]);

  if (isToc) return <TheoryOfChange />;
  if (isTool) return <ToolDetail track={params.track!} tool={params.tool!} />;
  if (isPages) return <PagesTrack />;
  if (isIces) return <IcesTrack />;

  // Default Overview
  return <ProgramsOverview />;
}

function ProgramsOverview() {
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="From farm to fork to"
        italic="circular economy."
        description="Two programs, one digital backbone. PAGES connects small farms to markets and finance. ICES turns waste into livelihoods and climate finance."
        crumbs={[{ label: "Programs" }]}
      />

      {/* Why two programs */}
      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Two halves of the <span className="display-italic">same problem.</span>
            </h2>
            <div className="mt-6 space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                Smallholder agriculture and waste are two ends of the same African economic story. Farmers struggle to earn fair prices, qualify for finance, or weather climate shocks. Their crops, packaging, and post-harvest losses end up in waste streams that are rarely captured, sorted or monetised.
              </p>
              <p>
                PAGES tackles the first half — making small agri-businesses more visible to markets, finance, and climate-smart inputs. ICES tackles the second — making the resulting waste streams traceable, sortable, monetisable, and climate-credentialed. Together they close the loop.
              </p>
              <p>
                Two programs because the buyers, donors, and policy frameworks differ. One shared backbone because the data, ethics, and people they serve are the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program cards */}
      <section className="py-10 md:py-12 bg-card/40">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
            <ProgramCard
              id="pages"
              img={pagesHero}
              imgAlt="PAGES — smallholder farmer reviewing crop data on a tablet"
              eyebrow="Track 1 · Agri-intelligence"
              title="PAGES"
              subtitle="Precision Agriculture for Green Economy and Sustainability"
              pitch="Helps small agri-businesses sell more, lose less, and qualify for finance — via a Smart Market Matchmaker, IoT Precision Insight Engine, and ERP Finance & Inventory Tracker."
              targets={[
                "5,000 agri-SMEs · ~100,000 farmers",
                "60% women · 40% youth · 15% ex-combatant",
                "Rwanda & Kenya pilot · Burundi & DRC scale-out",
              ]}
              funders={["GAC", "IDRC", "Gates Foundation", "Mastercard Foundation", "Rockefeller", "AfDB TAAT III", "FAO Hand-in-Hand", "IFAD"]}
              href="/programs/pages"
              toneClass="primary"
            />
            <ProgramCard
              id="ices"
              img={icesHero}
              imgAlt="ICES — youth cooperative members operating smart waste collection bins"
              eyebrow="Track 2 · Circular economy"
              title="ICES / ICE-Plus"
              subtitle="Initiative for Circular Economy and Sustainability"
              pitch="Turns municipal and agri-waste streams into livelihoods and verified climate finance — via smart bins, AI sorting, RFID tracking, analytics, mobile apps, and an ML Carbon Calculator."
              targets={[
                "Youth- and women-led cooperatives",
                "Methane and CO₂ averted, quarterly",
                "Income for waste-pickers, sorters and SMEs",
              ]}
              funders={["EU Global Gateway", "World Bank FSR", "Rockefeller", "Co-Impact", "Shell Foundation", "Mastercard Foundation", "AfDB climate", "IFAD climate"]}
              href="/programs/ices"
              toneClass="accent"
            />
          </div>
        </div>
      </section>

      {/* Shared digital backbone */}
      <section id="backbone" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What both programs <span className="display-italic">share.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Both programs are designed and operated to the same standards — so a partner who joins one can adopt the other without re-learning the rules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {([
              {
                Icon: Database,
                kind: "dataset" as SectionImageKind,
                eyebrow: "Data",
                title: "Shared data layer",
                desc: "Common data model for SMEs, cooperatives, parcels, harvests, transactions, waste flows, and emissions. Interoperable with Digital Earth Africa, FAO HiH, GIEWS, SERVIR and CGIAR GARDIAN.",
              },
              {
                Icon: ShieldCheck,
                kind: "governance" as SectionImageKind,
                eyebrow: "Ethics",
                title: "Shared ethics & privacy",
                desc: "One AI Ethics policy. One data-protection regime — Rwanda Law 058/2021, Kenya DPA 2019, PIPEDA, GDPR where applicable. SMEs and cooperatives own their data.",
              },
              {
                Icon: BarChart3,
                kind: "impact" as SectionImageKind,
                eyebrow: "MEAL",
                title: "Shared MEAL framework",
                desc: "One results framework, one indicator dictionary, one external mid-term evaluation, one learning agenda. Donors get a single, consistent reporting view across both programs.",
              },
              {
                Icon: Users,
                kind: "community" as SectionImageKind,
                eyebrow: "GEDSI",
                title: "Shared GEDSI & safeguarding",
                desc: "Same gender, disability and inclusion targets across both tracks. Same PSEAH, do-no-harm and grievance-redress mechanism in local languages.",
              },
            ]).map(({ Icon, kind, eyebrow, title, desc }) => (
              <article key={title} className="blob-card bg-card flex flex-col overflow-hidden">
                <div className="m-3">
                  <SectionImage kind={kind} aspect="3/2" caption={eyebrow} />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">{eyebrow}</p>
                  <h3 className="font-serif text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Theory of change combined */}
      <section id="toc" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              How the two programs <span className="display-italic">work together.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              We track every dollar from inputs through activities to outcomes to impact. Below is the high-level view; the full diagrams sit on the Theory of change page.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-foreground/10 bg-background">
            <table className="w-full text-sm">
              <caption className="sr-only">Combined theory of change for PAGES and ICES, by layer</caption>
              <thead className="bg-foreground/5 text-left">
                <tr>
                  <th scope="col" className="p-4 font-serif font-semibold text-foreground w-32">Layer</th>
                  <th scope="col" className="p-4 font-serif font-semibold text-primary">PAGES</th>
                  <th scope="col" className="p-4 font-serif font-semibold text-accent">ICES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/10">
                {[
                  { layer: "Inputs", p: "Grants, technical staff, McGill MMA capstone, RCID & SEKU faculty", i: "Grants, technical staff, Terre des Jeunes & Ripen field teams" },
                  { layer: "Activities & outputs", p: "Three tools deployed, BDS training, cooperative onboarding, policy briefs", i: "Six tools deployed, youth and women cooperatives onboarded, sorting infrastructure" },
                  { layer: "Outcomes", p: "Higher prices, lower post-harvest loss, finance access, climate-smart inputs", i: "Higher waste capture, methane/CO₂ averted, livelihoods for youth and women" },
                  { layer: "Impacts", p: "Resilient agri-SMEs, food-secure households, formalised cooperatives", i: "Cleaner municipalities, monetised circular flows, verified climate finance" },
                  { layer: "Cross-cutting", p: "GEDSI quotas met, AI & data ethics enforced, conflict sensitivity applied", i: "Same — quotas, ethics, conflict sensitivity, do-no-harm" },
                ].map((row) => (
                  <tr key={row.layer}>
                    <th scope="row" className="p-4 font-semibold text-foreground/85 align-top text-left">{row.layer}</th>
                    <td className="p-4 text-foreground/75 leading-relaxed align-top">{row.p}</td>
                    <td className="p-4 text-foreground/75 leading-relaxed align-top">{row.i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Link href="/programs/theory-of-change" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              See the full theory of change <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Where the programs operate — country cards with partners */}
      <section id="countries" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Six countries today, <span className="display-italic">more in the queue.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Each program is co-owned with partner organisations rooted in the country we work in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {([
              { c: "Rwanda", flag: "🇷🇼", img: "field" as SectionImageKind, p: "Pilot", i: "In design", lead: "RCID-Rwanda" },
              { c: "Kenya", flag: "🇰🇪", img: "agriculture" as SectionImageKind, p: "Pilot", i: "In design", lead: "South Eastern Kenya University" },
              { c: "Burundi", flag: "🇧🇮", img: "community" as SectionImageKind, p: "Scale-out", i: null, lead: "Local cooperatives + government" },
              { c: "DRC", flag: "🇨🇩", img: "community" as SectionImageKind, p: "Scale-out", i: null, lead: "Local cooperatives + ICGLR" },
              { c: "Togo", flag: "🇹🇬", img: "circular-economy" as SectionImageKind, p: null, i: "Pilot", lead: "Terre des Jeunes Togo · Ripen" },
              { c: "Canada", flag: "🇨🇦", img: "team" as SectionImageKind, p: "HQ", i: "HQ", lead: "SAICE · IFSS Inc. · McGill University" },
            ]).map((row) => (
              <article key={row.c} className="blob-card bg-card flex flex-col overflow-hidden">
                <div className="m-3">
                  <SectionImage kind={row.img} aspect="3/2" caption={row.c} />
                </div>
                <div className="px-6 pb-6 pt-1 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-semibold tracking-tight flex items-center gap-2">
                    <span aria-hidden="true">{row.flag}</span> {row.c}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {row.p && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        PAGES · {row.p}
                      </span>
                    )}
                    {row.i && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                        ICES · {row.i}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 block mb-1">Lead partner</span>
                    {row.lead}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/where-we-work" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              See country profiles <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/partners" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Meet all our partners
            </Link>
          </div>
        </div>
      </section>

      {/* Standards and alignment */}
      <section id="standards" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What we <span className="display-italic">plug into.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Both programs are designed to slot into the strategies that ministries and continental bodies are already running — not to compete with them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 max-w-5xl">
            {[
              { t: "CAADP Kampala Declaration 2026–2035", d: "Africa's flagship agriculture transformation strategy." },
              { t: "AU Agenda 2063 & AU Continental AI Strategy 2024", d: "Continental vision and AI guard-rails." },
              { t: "Rwanda's PSTA 5 (2024–2029)", d: "Strategic Plan for Agriculture Transformation." },
              { t: "Kenya's ASTGS (2019–2029)", d: "Agricultural Sector Transformation and Growth Strategy." },
              { t: "ICGLR", d: "International Conference on the Great Lakes Region." },
              { t: "AUDA-NEPAD", d: "Programmatic and policy alignment." },
              { t: "SDGs 1, 2, 5, 8, 9, 10, 13, 17", d: "Poverty, hunger, gender, decent work, innovation, inequality, climate, partnerships." },
              { t: "Standards & ethics", d: "UNESCO Recommendation on the Ethics of AI · FAIR principles · Principles for Digital Development · OECD-DAC evaluation criteria." },
            ].map((s) => (
              <div key={s.t} className="flex gap-3 p-4 rounded-xl bg-background">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="font-serif text-base font-semibold tracking-tight">{s.t}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mt-0.5">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we publish */}
      <section id="publish" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Open knowledge <span className="display-italic">by default.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every quarter, a program update. Every year, an audited impact report. Every grant cycle, an independent external evaluation. Every relevant dataset, released under FAIR principles unless privacy or security demands otherwise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { Icon: BarChart3, title: "Quarterly dashboard", desc: "Live indicators from both programs." },
              { Icon: BookOpen, title: "Annual impact report", desc: "Narrative + audited financials." },
              { Icon: FileText, title: "Policy briefs", desc: "Four+ per cycle, co-published with MINAGRI, Kenya MoA, ICGLR, AUDA-NEPAD." },
              { Icon: Database, title: "Datasets & code", desc: "Open releases under FAIR / Apache 2.0 where appropriate." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-foreground/10 bg-card p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/impact" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              See the dashboard <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/resources#publications" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Browse publications
            </Link>
            <Link href="/resources#data-code" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Browse datasets & code
            </Link>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section id="engage" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Three ways <span className="display-italic">to engage.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {([
              {
                Icon: Coins,
                kind: "donor" as SectionImageKind,
                eyebrow: "Fund a program",
                title: "Institutional and major donors",
                desc: "PAGES and ICES are designed to absorb thematic, country-specific or pan-African grants.",
                cta: "See our donor pack",
                href: "/resources#donor-pack",
              },
              {
                Icon: MapPin,
                kind: "field" as SectionImageKind,
                eyebrow: "Run a pilot",
                title: "Cooperatives, municipalities, ministries",
                desc: "Bring your data and your community; we'll bring the tools and the training.",
                cta: "Propose a pilot",
                href: "/contact",
              },
              {
                Icon: Building2,
                kind: "digital-tools" as SectionImageKind,
                eyebrow: "Build with us",
                title: "Researchers, engineers, designers",
                desc: "We welcome contributors to the open codebase and co-authors on policy briefs.",
                cta: "See contribution guidelines",
                href: "/get-involved#volunteer",
              },
            ]).map(({ Icon, kind, eyebrow, title, desc, cta, href }) => (
              <Link key={title} href={href} className="group blob-card bg-card flex flex-col overflow-hidden hover:bg-card/70 transition-colors">
                <div className="m-3">
                  <SectionImage kind={kind} aspect="16/9" caption={eyebrow} />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">{eyebrow}</p>
                  <h3 className="font-serif text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">{desc}</p>
                  <div className="flex items-center justify-between pt-4 mt-2">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{cta}</span>
                    <span className="circle-arrow-sm">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({
  id,
  img,
  imgAlt,
  eyebrow,
  title,
  subtitle,
  pitch,
  targets,
  funders,
  href,
  toneClass,
}: {
  id: string;
  img: string;
  imgAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  pitch: string;
  targets: string[];
  funders: string[];
  href: string;
  toneClass: "primary" | "accent";
}) {
  const tone = toneClass === "primary" ? "text-primary" : "text-accent";
  const toneBg = toneClass === "primary" ? "bg-primary/10" : "bg-accent/10";
  return (
    <article id={id} className="group blob-card bg-card flex flex-col overflow-hidden scroll-mt-32">
      <div className="aspect-[16/10] relative overflow-hidden m-3 rounded-[1.5rem]">
        <img src={img} alt={imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
          {eyebrow}
        </div>
      </div>
      <div className="p-7 md:p-8 pt-3 flex-1 flex flex-col">
        <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">{title}</h3>
        <p className={`font-serif italic ${tone} text-lg mb-4`}>{subtitle}</p>
        <p className="text-foreground/75 leading-relaxed mb-6">{pitch}</p>

        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">Key targets</p>
          <ul className="space-y-1.5">
            {targets.map((t) => (
              <li key={t} className="flex gap-2.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${tone} flex-shrink-0 mt-1`} strokeWidth={2} />
                <span className="text-sm text-foreground/80 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">Funder fit</p>
          <ul className="flex flex-wrap gap-1.5">
            {funders.map((f) => (
              <li key={f} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${toneBg} ${tone}`}>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          <Link href={href} className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-foreground text-background hover:bg-foreground/85 text-xs font-semibold transition-colors">
            Explore {title.split(" ")[0]} <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function PagesTrack() {
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="PAGES"
        description="Main goal: support farmers and Agri-SMEs in developing countries. In the Great Lakes Region of Africa, PAGES is empowering smallholder farmers and Agri-SMEs with accessible digital tools."
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "PAGES" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-6 text-muted-foreground">
            <p>
              The program assists communities from farm-to-fork, providing technical assistance at each stage of food production, storage, market and financial linkages. Assistance includes technology deployment, training, coaching, and strategic partnerships for sustainable growth and financial/market inclusion.
            </p>
            <p>
              PAGES technologies are environment-friendly, easy to use, and adapt to local languages — no advanced study required.
            </p>
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl mt-6">
              <h3 className="font-serif font-semibold tracking-tight text-primary mb-2">Target Beneficiaries</h3>
              <p className="text-sm">5,000 SMEs · ~100,000 farmers · 60% women · 40% youth · 15% ex-combatant · 5% PwD.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">Operations</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Pilot:</strong> Rwanda, Kenya</li>
                <li><strong>Scale-out:</strong> Burundi, DRC</li>
              </ul>
            </div>
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>RCID</li>
                <li>SEKU</li>
                <li>McGill University</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8">PAGES Core Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard 
            title="Smart Market Matchmaker" 
            desc="Links producers to markets, increasing farmer bargaining power."
            icon={<Smartphone />}
            link="/programs/pages/smart-market-matchmaker"
          />
          <ToolCard 
            title="IoT-Precision Insight Engine" 
            desc="Soil moisture and crop-health info leveraging ArcGIS, GPS, and NDVI."
            icon={<Activity />}
            link="/programs/pages/iot-precision-insight-engine"
          />
          <ToolCard 
            title="ERP Finance & Inventory Tracker" 
            desc="Automates accounting, sales, inventory, and production for Agri-SMEs."
            icon={<Database />}
            link="/programs/pages/erp-finance-inventory-tracker"
          />
        </div>
      </div>
    </div>
  );
}

function IcesTrack() {
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="ICES /"
        italic="ICE-Plus"
        description="Supporting communities, municipalities and youth organisations managing waste collection — to build zero-waste municipalities across the Great Lakes Region."
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "ICES" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-6 text-muted-foreground">
            <p>
              Goal: enhance efficiency of waste collection, enable storage and conversion of waste into renewable energy, contribute to GHG (methane and CO₂) reduction. 
            </p>
            <p>
              By leveraging digital tools, ICE-Plus optimizes collection routes and improves data accuracy in waste quantification. Supports environmental sustainability AND creates employment opportunities for youth and women. Easy to use — no advanced science/tech knowledge required.
            </p>
            <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl mt-6">
              <h3 className="font-serif font-semibold tracking-tight text-accent mb-2">Target Beneficiaries</h3>
              <p className="text-sm">Municipalities, youth organisations, women's cooperatives.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">Operations</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Pilot:</strong> Togo (Terre des Jeunes)</li>
                <li><strong>Scale-out:</strong> Replicable to other municipalities</li>
              </ul>
            </div>
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Terre des Jeunes Togo</li>
                <li>Ripen</li>
                <li>SEKU & RCID</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8">ICES Core Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard 
            title="IoT Sensors (Smart Bins)" 
            desc="Monitors fill levels; trucks dispatched only when bins are full."
            icon={<Server />}
            link="/programs/ices/iot-smart-bins"
          />
          <ToolCard 
            title="AI & Robotics in Sorting" 
            desc="Computer vision identifies and separates recyclables automatically."
            icon={<Cpu />}
            link="/programs/ices/ai-robotics-sorting"
          />
          <ToolCard 
            title="RFID & Asset Management" 
            desc="Automates bin identification, weighing, and pay-as-you-throw billing."
            icon={<Fingerprint />}
            link="/programs/ices/rfid-asset-management"
          />
          <ToolCard 
            title="Data Analytics Platform" 
            desc="Forecasts waste generation and optimizes resource allocation."
            icon={<LineChart />}
            link="/programs/ices/data-analytics-platform"
          />
          <ToolCard 
            title="Mobile & Digital Applications" 
            desc="Real-time monitoring and data logging for field workers."
            icon={<Smartphone />}
            link="/programs/ices/mobile-digital-applications"
          />
          <ToolCard 
            title="Carbon Calculator & ML" 
            desc="Precise carbon emissions estimation and financial impact analysis."
            icon={<CloudRain />}
            link="/programs/ices/carbon-calculator-ml"
          />
        </div>
      </div>
    </div>
  );
}

function CloudRain(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  );
}

function ToolCard({ title, desc, icon, link }: { title: string, desc: string, icon: React.ReactNode, link: string }) {
  return (
    <Link href={link} className="block group">
      <Card className="h-full hover:shadow-md transition-shadow border-muted-foreground/20">
        <CardContent className="p-6">
          <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>
          <h3 className="font-serif font-semibold tracking-tight text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function ToolDetail({ track, tool }: { track: string, tool: string }) {
  const isPages = track === 'pages';
  const colorClass = isPages ? "text-primary" : "text-accent";
  const bgClass = isPages ? "bg-primary" : "bg-accent";

  const getToolInfo = () => {
    switch(tool) {
      case 'smart-market-matchmaker':
        return {
          title: "Smart Market Matchmaker",
          what: "Links producers to markets; farmers connect to potential buyers, increasing farmer bargaining power on price; provides localization info on farmers.",
          who: "Cooperatives, smallholder farmers, processors, traders, BDS providers, financial institutions.",
          tech: "Mobile-first UX, USSD fallback, GPS-tagged producer profiles."
        };
      case 'iot-precision-insight-engine':
        return {
          title: "IoT-Precision Insight Engine",
          what: "Provides soil moisture and crop-health information leveraging ArcGIS, GPS data, and NDVI. Supports farmers in monitoring crop diseases, farming system health, and decision planning. Empowers vulnerable communities and increases bargaining power on insurance, financial access, and price negotiation.",
          who: "Cooperatives, smallholder farmers, processors, traders, BDS providers, financial institutions.",
          tech: "ArcGIS · GPS · NDVI · IoT sensors · mobile-first UX."
        };
      case 'erp-finance-inventory-tracker':
        return {
          title: "ERP Finance & Inventory Tracker",
          what: "Supports small businesses to grow profitably by automating accounting, sales, inventory, and production in one comprehensive solution.",
          who: "Cooperatives, smallholder farmers, processors, traders, BDS providers, financial institutions.",
          tech: "Odoo backbone."
        };
      case 'iot-smart-bins':
        return {
          title: "IoT Sensors (Smart Bins)",
          what: "Reduces unnecessary, costly, high-emission collection trips. Sensors monitor fill levels; trucks dispatched only when bins are full.",
          who: "Municipalities, youth organizations, waste collection cooperatives.",
          tech: "IoT fill-level sensors, Low-power WAN, secure cloud dashboard."
        };
      case 'ai-robotics-sorting':
        return {
          title: "AI & Robotics in Sorting",
          what: "Computer vision and AI-powered robots identify, classify, and separate recyclables with higher accuracy than manual labor.",
          who: "Material recovery facilities, large-scale municipal waste operations.",
          tech: "Computer vision, robotics control systems, edge AI processing."
        };
      case 'rfid-asset-management':
        return {
          title: "RFID & Asset Management",
          what: "Rugged RFID tags on bins/dumpsters automate identification, monitoring, collection. RFID readers on trucks track, weigh, and log in real-time. Reduces theft, optimizes routes, supports pay-as-you-throw billing.",
          who: "Municipalities, fleet operators, waste management authorities.",
          tech: "Rugged RFID tags, truck-mounted readers, real-time sync."
        };
      case 'data-analytics-platform':
        return {
          title: "Data Analytics Platform",
          what: "Analyzes historical data to forecast future waste generation and optimize resource allocation for upcoming projects.",
          who: "City planners, environmental analysts, program managers.",
          tech: "Big data processing pipeline, predictive forecasting algorithms."
        };
      case 'mobile-digital-applications':
        return {
          title: "Mobile & Digital Applications",
          what: "Enables field workers, communities, and youth organizations to use applications for real-time monitoring and to receive, log, and report data from the field.",
          who: "Field workers, community youth groups, cooperative members.",
          tech: "React Native mobile apps, offline-first sync architecture."
        };
      case 'carbon-calculator-ml':
        return {
          title: "Carbon Calculator & Machine Learning",
          what: "Integration of calculators and ML for precise carbon emissions estimation before municipal waste-management projects — including AI training itself — and sophisticated analysis of carbon impact on financial markets. Monitors project impact day-after-day on energy generation, CO₂ emissions, and financial impacts for beneficiaries.",
          who: "Environmental consultants, impact investors, municipal authorities.",
          tech: "Machine learning impact models, carbon-credit API integrations."
        };
      default:
        return { title: tool.replace(/-/g, ' '), what: "Description pending.", who: "Pending", tech: "Pending" };
    }
  };

  const info = getToolInfo();

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href={`/programs/${track}`} className={`text-sm font-medium hover:underline mb-8 inline-block ${colorClass}`}>
          &larr; Back to {track.toUpperCase()}
        </Link>
        <h1 className="text-4xl font-serif font-semibold tracking-tight mb-6 text-foreground">{info.title}</h1>
        
        <div className="space-y-8 mt-12">
          <section className="p-6 bg-muted rounded-2xl border">
            <h2 className="text-xl font-serif font-semibold tracking-tight mb-4">What it does</h2>
            <p className="text-muted-foreground leading-relaxed">{info.what}</p>
          </section>

          <div className="grid sm:grid-cols-2 gap-6">
            <section className="p-6 bg-card border rounded-2xl">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-3">Who uses it</h2>
              <p className="text-sm text-muted-foreground">{info.who}</p>
            </section>
            
            <section className="p-6 bg-card border rounded-2xl">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-3">How it works (Tech)</h2>
              <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">{info.tech}</p>
            </section>
          </div>

          <section className="flex flex-col sm:flex-row gap-6 p-6 border rounded-2xl">
            <div className="flex-1">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-2">Languages</h2>
              <p className="text-sm text-muted-foreground">EN, FR, Kinyarwanda (Phase 2: Kirundi, Swahili)</p>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-2">Privacy & Data</h2>
              <p className="text-sm text-muted-foreground">Strict data ownership protocols aligned with GDPR and local DPA laws. FAIR data principles applied.</p>
            </div>
          </section>

          <div className="flex flex-wrap gap-4 pt-8">
            <button className={`${bgClass} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
              Try it / Pilot it (Enterprise)
            </button>
            <button className="bg-transparent border-2 border-muted-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
              Cooperative Onboarding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TheoryOfChange() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title="Combined theory of"
        italic="change"
        description="How PAGES and ICES translate inputs into measurable outcomes across the Great Lakes Region."
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "Theory of change" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {/* PAGES Column */}
          <div className="space-y-6">
            <div className="text-center pb-4 border-b-4 border-primary">
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-primary">PAGES (Track 1)</h2>
              <p className="text-sm text-muted-foreground font-medium mt-1">Agriculture & Economy</p>
            </div>
            
            <TocBox step="Inputs" color="bg-primary/5 border-primary/20">
              Resources; Policy dialogue, Partnerships, Risk analysis; AI and digital tools available; Training, Coaching; Capacity building and advocacy.
            </TocBox>
            
            <ArrowDown />
            
            <TocBox step="Activities & Outputs" color="bg-primary/10 border-primary/30">
              Strengthened capacity of beneficiaries; Increased access to financial needs; Increased access to raw materials for selected value chains; Increased participation of private actors, Youth and Women; Improved advocacy, policy reforms and visibility.
            </TocBox>
            
            <ArrowDown />
            
            <TocBox step="Outcomes" color="bg-primary/15 border-primary/40">
              Increased adoption of AI and digital tools; Increased global health of farming and food production; Increased access to financial and market services; Reduced transaction costs and improved stock management.
            </TocBox>
            
            <ArrowDown />
            
            <TocBox step="Impacts" color="bg-primary border-primary text-primary-foreground">
              Increased socio-economic wellbeing; Food security and increased incomes for beneficiaries; Environmental protection (air quality and CO₂ emissions); Socio-economic and financial inclusion for Youth and Women.
            </TocBox>
          </div>

          {/* ICES Column */}
          <div className="space-y-6">
            <div className="text-center pb-4 border-b-4 border-accent">
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-accent">ICES (Track 2)</h2>
              <p className="text-sm text-muted-foreground font-medium mt-1">Circular Economy & Waste</p>
            </div>
            
            <TocBox step="Inputs" color="bg-accent/5 border-accent/20">
              Resources; Policy dialogue, Risk analysis; AI and digital tools; Capacity building and advocacy.
            </TocBox>
            
            <ArrowDown />
            
            <TocBox step="Activities & Outputs" color="bg-accent/10 border-accent/30">
              Real-time waste-level measurement; Optimized collection; Accurate waste segregation; Reduced manual handling; Instant feedback to users.
            </TocBox>
            
            <ArrowDown />
            
            <TocBox step="Outcomes" color="bg-accent/15 border-accent/40">
              Decreased operational costs; Low fuel consumption and CO₂ emissions; High-quality recyclables; Increased public participation.
            </TocBox>
            
            <ArrowDown />
            
            <TocBox step="Impacts" color="bg-accent border-accent text-accent-foreground">
              Realization of circular economy; Zero-waste municipalities; Environmental protection (air quality and CO₂ emissions); Socio-economic additionality.
            </TocBox>
          </div>
        </div>

        {/* Cross-cutting bottom bar */}
        <div className="mt-16 p-6 bg-muted border rounded-2xl text-center shadow-sm">
          <h3 className="font-serif font-semibold tracking-tight text-foreground mb-3">Cross-Cutting Goals</h3>
          <p className="text-muted-foreground text-sm">
            Gender, Equity, Disability, Social Inclusion (GEDSI) · Climate Resilience · Accountable Governance · FAIR Data Practices
          </p>
        </div>
      </div>
    </div>
  );
}

function TocBox({ step, children, color }: { step: string, children: React.ReactNode, color: string }) {
  return (
    <div className={`p-5 rounded-xl border ${color} shadow-sm relative`}>
      <h3 className="font-bold text-sm uppercase tracking-widest mb-3 opacity-90">{step}</h3>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center -my-3 relative z-10">
      <div className="w-8 h-8 rounded-full bg-background border flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </div>
  );
}
