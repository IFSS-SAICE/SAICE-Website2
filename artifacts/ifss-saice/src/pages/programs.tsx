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
  MapPin,
  BarChart3,
  FileText,
  Coins,
  Building2,
  Zap,
  Sun,
  BatteryCharging,
} from "lucide-react";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";
import { PageHero } from "@/components/PageHero";
import { SectionImage, type SectionImageKind } from "@/components/SectionImage";

export default function ProgramsRoutes({ params }: { params?: { track?: string, tool?: string } }) {
  const isPages = params?.track === 'pages' && !params.tool;
  const isIces = params?.track === 'ices' && !params.tool;
  const isPaces = params?.track === 'paces' && !params.tool;
  const isToc = params?.track === 'theory-of-change';
  const isTool = !!params?.tool;

  useEffect(() => {
    document.title = `Programs ${params?.track ? `- ${params.track}` : ''} | SAICE / IFSS Inc.`;
  }, [params]);

  if (isToc) return <TheoryOfChange />;
  if (isTool) return <ToolDetail track={params.track!} tool={params.tool!} />;
  if (isPages) return <PagesTrack />;
  if (isIces) return <IcesTrack />;
  if (isPaces) return <PacesTrack />;

  // Default Overview
  return <ProgramsOverview />;
}

function ProgramsOverview() {
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="From farm to fork to"
        italic="circular economy."
        description="Three programs, one digital backbone. PAGES connects small farms to markets and finance. ICES turns waste into livelihoods and climate finance. PACES brings clean, affordable energy to both."
        crumbs={[{ label: "Programs" }]}
      />

      {/* Why three programs */}
      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                Three sides of the <span className="display-italic">same loop.</span>
              </h2>
              <div className="mt-6 space-y-5 text-lg text-foreground/75 leading-relaxed">
                <p>
                  Smallholder agriculture, waste, and energy are three ends of the same African economic story. Farmers struggle to earn fair prices, qualify for finance, or weather climate shocks. Their crops, packaging, and post-harvest losses end up in waste streams that are rarely captured, sorted or monetised. And almost none of it runs on clean, reliable power.
                </p>
                <p>
                  PAGES makes small agri-businesses more visible to markets, finance, and climate-smart inputs. ICES makes the resulting waste streams traceable, sortable, monetisable, and climate-credentialed. PACES powers all of it — solar mini-grids, productive-use appliances, e-mobility and biogas from the waste ICES captures. Together they close the loop.
                </p>
                <p>
                  Three programs because the buyers, donors and policy frameworks differ. One shared backbone because the data, ethics, and people they serve are the same.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="circular-economy" aspect="4/3" caption="Farm to fork to circular economy" />
            </div>
          </div>
        </div>
      </section>

      {/* Program cards */}
      <section className="py-10 md:py-12 bg-card/40">
        <div className="container px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <ProgramCard
              id="paces"
              kind="energy"
              imgAlt="PACES — community solar mini-grid powering a rural Agri-SME"
              eyebrow="Track 3 · Sustainable energy"
              title="PACES / PACE-Plus"
              subtitle="Programs for Accessible Clean Energy and Sustainability"
              pitch="Brings reliable, affordable clean energy to the cooperatives, municipalities and agri-SMEs that PAGES and ICES already serve — solar mini-grids, productive-use appliances, e-mobility for collection routes, and biogas from organic waste."
              targets={[
                "Solar mini-grids for cooperatives and rural SMEs",
                "Productive-use solar for cold-chain, milling and irrigation",
                "Biogas & WTE from ICES-captured organic waste",
              ]}
              funders={["GEF", "GCF", "SEforALL", "AfDB SEFA", "EU Global Gateway", "World Bank ESMAP", "Shell Foundation", "Rockefeller"]}
              href="/programs/paces"
              toneClass="energy"
            />
          </div>
        </div>
      </section>

      {/* Shared digital backbone */}
      <section id="backbone" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What all three programs <span className="display-italic">share.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              All three programs are designed and operated to the same standards — so a partner who joins one can adopt the others without re-learning the rules.
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
                desc: "One results framework, one indicator dictionary, one external mid-term evaluation, one learning agenda. Donors get a single, consistent reporting view across all three programs.",
              },
              {
                Icon: Users,
                kind: "community" as SectionImageKind,
                eyebrow: "GEDSI",
                title: "Shared GEDSI & safeguarding",
                desc: "Same gender, disability and inclusion targets across all three tracks. Same PSEAH, do-no-harm and grievance-redress mechanism in local languages.",
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

      {/* Where the programs operate — country cards with partners */}
      <section id="countries" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Six countries today, <span className="display-italic">more in the queue.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Each program is co-owned with partner organisations rooted in the country we work in, and slots into the strategies its ministries are already running — not competing with them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {([
              { c: "Rwanda", flag: "🇷🇼", img: "field" as SectionImageKind, p: "Pilot", i: "In design", lead: "RCID-Rwanda", aligns: ["PSTA 5 (2024–2029)", "CAADP Kampala", "AU Agenda 2063", "ICGLR"] },
              { c: "Kenya", flag: "🇰🇪", img: "agriculture" as SectionImageKind, p: "Pilot", i: "In design", lead: "South Eastern Kenya University", aligns: ["ASTGS (2019–2029)", "CAADP Kampala", "AU Agenda 2063"] },
              { c: "Burundi", flag: "🇧🇮", img: "community" as SectionImageKind, p: "Scale-out", i: null, lead: "Local cooperatives + government", aligns: ["CAADP Kampala", "ICGLR", "AU Agenda 2063"] },
              { c: "DRC", flag: "🇨🇩", img: "community" as SectionImageKind, p: "Scale-out", i: null, lead: "Local cooperatives + ICGLR", aligns: ["CAADP Kampala", "ICGLR", "AUDA-NEPAD"] },
              { c: "Togo", flag: "🇹🇬", img: "circular-economy" as SectionImageKind, p: null, i: "Pilot", lead: "Terre des Jeunes Togo · Ripen", aligns: ["AUDA-NEPAD", "AU Agenda 2063", "AU Continental AI Strategy"] },
              { c: "Canada", flag: "🇨🇦", img: "team" as SectionImageKind, p: "HQ", i: "HQ", lead: "SAICE · IFSS Inc. · McGill University", aligns: ["SDGs 1, 2, 5, 8, 9, 10, 13, 17", "OECD-DAC criteria", "UNESCO AI Ethics", "FAIR principles"] },
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
                  <div className="mt-4 pt-4 border-t border-foreground/10">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 block mb-2">Plugs into</span>
                    <div className="flex flex-wrap gap-1.5">
                      {row.aligns.map((a) => (
                        <span key={a} className="inline-flex text-[11px] font-medium px-2.5 py-1 rounded-full bg-foreground/[0.06] text-foreground/75">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-3xl">
            Across all countries we apply the same standards and ethics: UNESCO Recommendation on the Ethics of AI · FAIR principles · Principles for Digital Development · OECD-DAC evaluation criteria.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/where-we-work" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              See country profiles <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/partners" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Meet all our partners
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
              },
              {
                Icon: MapPin,
                kind: "field" as SectionImageKind,
                eyebrow: "Run a pilot",
                title: "Cooperatives, municipalities, ministries",
                desc: "Bring your data and your community; we'll bring the tools and the training.",
              },
              {
                Icon: Building2,
                kind: "digital-tools" as SectionImageKind,
                eyebrow: "Build with us",
                title: "Researchers, engineers, designers",
                desc: "We welcome contributors to the open codebase and co-authors on policy briefs.",
              },
            ]).map(({ Icon, kind, eyebrow, title, desc }) => (
              <article key={title} className="blob-card bg-card flex flex-col overflow-hidden">
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
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/get-involved" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              Get involved <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({
  id,
  img,
  kind,
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
  img?: string;
  kind?: SectionImageKind;
  imgAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  pitch: string;
  targets: string[];
  funders: string[];
  href: string;
  toneClass: "primary" | "accent" | "energy";
}) {
  const tone =
    toneClass === "primary" ? "text-primary" :
    toneClass === "accent" ? "text-accent" :
    "text-amber-700 dark:text-amber-500";
  const toneBg =
    toneClass === "primary" ? "bg-primary/10" :
    toneClass === "accent" ? "bg-accent/10" :
    "bg-amber-500/10";
  return (
    <article id={id} className="group blob-card bg-card flex flex-col overflow-hidden scroll-mt-32">
      <div className="m-3 relative">
        {img ? (
          <div className="aspect-[16/10] relative overflow-hidden rounded-[1.5rem]">
            <img src={img} alt={imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        ) : kind ? (
          <SectionImage kind={kind} aspect="16/10" rounded="rounded-[1.5rem]" />
        ) : null}
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

function PacesTrack() {
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="PACES /"
        italic="PACE-Plus"
        description="Programs for Accessible Clean Energy and Sustainability — bringing reliable, affordable clean energy to the cooperatives, municipalities and agri-SMEs that PAGES and ICES already serve."
        crumbs={[{ label: "Programs", href: "/programs" }, { label: "PACES" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="my-10">
          <SectionImage kind="energy" aspect="16/9" rounded="rounded-[1.75rem]" caption="Clean energy for productive use" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-6 text-muted-foreground">
            <p>
              Goal: close the energy gap that holds back smallholder agri-SMEs and youth cooperatives — power cold-chains, milling, irrigation, sorting lines and EV collection routes with clean, locally owned systems.
            </p>
            <p>
              PACES is designed to plug into PAGES and ICES — the same cooperatives, the same data layer, the same MEAL framework. Organic waste captured by ICES becomes biogas feedstock; solar mini-grids power PAGES cold-rooms and ERP terminals; e-trikes replace diesel on collection routes.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl mt-6">
              <h3 className="font-serif font-semibold tracking-tight text-amber-700 dark:text-amber-500 mb-2">Target Beneficiaries</h3>
              <p className="text-sm">Rural cooperatives and agri-SMEs · municipalities and youth waste cooperatives · off-grid clinics, schools and irrigation schemes in PAGES/ICES regions.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">Operations</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>Pilot:</strong> Rwanda, Togo</li>
                <li><strong>Scale-out:</strong> Kenya, Burundi, DRC</li>
              </ul>
            </div>
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">Partners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Local energy cooperatives</li>
                <li>RCID · SEKU · Terre des Jeunes</li>
                <li>McGill University</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8">PACES Core Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard
            title="Solar Mini-Grids"
            desc="Community-owned PV + storage to power cooperatives, clinics and rural SMEs."
            icon={<Sun />}
            link="/programs/paces/solar-mini-grids"
          />
          <ToolCard
            title="Productive-Use Solar"
            desc="Solar cold-rooms, mills, pumps and dryers — sized for PAGES cooperatives."
            icon={<Zap />}
            link="/programs/paces/productive-use-solar"
          />
          <ToolCard
            title="Biogas & Waste-to-Energy"
            desc="Turns ICES-captured organic waste into cooking gas and electricity."
            icon={<Activity />}
            link="/programs/paces/biogas-wte"
          />
          <ToolCard
            title="E-Mobility for Collection"
            desc="Electric trikes and light vehicles for waste collection and last-mile agri-logistics."
            icon={<BatteryCharging />}
            link="/programs/paces/e-mobility"
          />
          <ToolCard
            title="Energy Data Platform"
            desc="Monitors generation, consumption and avoided emissions across all PACES sites."
            icon={<LineChart />}
            link="/programs/paces/energy-data-platform"
          />
          <ToolCard
            title="Pay-as-You-Go Billing"
            desc="Mobile-money metering and revenue collection for cooperatively run systems."
            icon={<Smartphone />}
            link="/programs/paces/payg-billing"
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
  const isPaces = track === 'paces';
  const colorClass = isPages ? "text-primary" : isPaces ? "text-amber-700 dark:text-amber-500" : "text-accent";
  const bgClass = isPages ? "bg-primary" : isPaces ? "bg-amber-600" : "bg-accent";

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
      case 'solar-mini-grids':
        return {
          title: "Solar Mini-Grids",
          what: "Community-owned solar PV with battery storage sized for cooperatives, rural SMEs, clinics and schools that are off-grid or under-served. Designed for local operation, repair and tariff governance.",
          who: "Rural cooperatives, off-grid SMEs, clinics, schools, municipalities.",
          tech: "PV arrays · LFP storage · smart inverters · remote monitoring."
        };
      case 'productive-use-solar':
        return {
          title: "Productive-Use Solar",
          what: "Solar-powered cold-rooms, mills, pumps, dryers and refrigeration sized for PAGES cooperatives — reduces post-harvest loss and raises margins without diesel.",
          who: "PAGES cooperatives, agri-SMEs, women's processing groups.",
          tech: "Solar-direct DC appliances · hybrid AC/DC packs · IoT metering."
        };
      case 'biogas-wte':
        return {
          title: "Biogas & Waste-to-Energy",
          what: "Converts organic waste captured by ICES into cooking gas, electricity and digestate fertiliser — closing the loop between waste collection and clean cooking.",
          who: "ICES cooperatives, municipalities, peri-urban households.",
          tech: "Anaerobic digesters · gas-clean-up · CHP units · IoT monitoring."
        };
      case 'e-mobility':
        return {
          title: "E-Mobility for Collection",
          what: "Electric trikes and light vehicles for ICES waste-collection routes and PAGES last-mile agri-logistics — charged from PACES solar mini-grids where available.",
          who: "Youth waste cooperatives, agri-aggregators, municipal fleets.",
          tech: "E-trikes · swappable batteries · solar charging hubs · fleet telematics."
        };
      case 'energy-data-platform':
        return {
          title: "Energy Data Platform",
          what: "Monitors generation, consumption, uptime and avoided emissions across every PACES site — feeds the shared MEAL framework and the ICES Carbon Calculator.",
          who: "Program managers, donors, cooperative boards, regulators.",
          tech: "Time-series database · MQTT ingest · dashboards · carbon-API integration."
        };
      case 'payg-billing':
        return {
          title: "Pay-as-You-Go Billing",
          what: "Mobile-money metering and revenue collection for cooperatively run mini-grids and productive-use appliances — keeps systems financially sustainable after donor funding ends.",
          who: "Cooperative operators, mini-grid customers, mobile-money providers.",
          tech: "Smart meters · USSD/SMS workflows · mobile-money APIs · reconciliation."
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
