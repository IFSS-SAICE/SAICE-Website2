import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Leaf,
  Recycle,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import impactHero from "@/assets/images/impact-hero.png";
import impactStoriesHero from "@/assets/images/about-hero.png";
import { SectionImage } from "@/components/SectionImage";

const topLine = [
  { v: "3", l: "Programs — PAGES, ICES, PACES" },
  { v: "6", l: "Countries — Canada, Rwanda, Kenya, Burundi, DRC, Togo" },
  { v: "~100k", l: "Farmers reached through cooperatives by 2029" },
  { v: "5,000", l: "Agri-SMEs targeted for onboarding by 2029" },
];

const programs = [
  {
    tag: "PAGES",
    Icon: Leaf,
    t: "Agri-intelligence",
    promise: "Stronger cooperatives, better prices, less post-harvest loss.",
    indicators: [
      "Agri-SMEs onboarded (target 5,000 by 2029)",
      "Farmers reached through cooperatives (~100k)",
      "Off-take contracts brokered & average price uplift",
    ],
    href: "/programs/pages",
    services: "/services#pages",
  },
  {
    tag: "ICES",
    Icon: Recycle,
    t: "Circular economy",
    promise: "More waste recovered, fewer emissions, real livelihoods for waste-pickers.",
    indicators: [
      "Tonnes diverted from landfill or dumpsite",
      "Methane and CO₂e averted (MRV-verified)",
      "Carbon-finance value routed to cooperatives",
    ],
    href: "/programs/ices",
    services: "/services#ices",
  },
  {
    tag: "PACES",
    Icon: Zap,
    t: "Sustainable energy",
    promise: "Clean energy that powers livelihoods — not just light bulbs.",
    indicators: [
      "Mini-grids designed and commissioned",
      "kWh delivered to productive-use customers",
      "Livelihood events linked to new connections",
    ],
    href: "/programs/paces",
    services: "/services#paces",
  },
];

const inclusion = [
  { pct: "60%", label: "Women", detail: "Share of beneficiaries, leadership roles, training and finance events." },
  { pct: "40%", label: "Youth under 35", detail: "Self-identified and verified through cooperative records." },
  { pct: "15%", label: "Ex-combatants", detail: "Reported with a do-no-harm narrative — not just numbers." },
  { pct: "5%", label: "People with disabilities", detail: "Self-identification, aggregated to protect identity." },
];

const evaluations = [
  { year: "2027", t: "Baseline study", d: "Sets the reference point for every cycle indicator." },
  { year: "2028", t: "Mid-term review", d: "Course-correction checkpoint. Findings published in full." },
  { year: "2030", t: "Endline evaluation", d: "OECD-DAC criteria. Commissioned independently, published in full." },
];

export default function ImpactRoutes({ params }: { params?: { sub?: string } }) {
  const isStories = params?.sub === "stories";

  useEffect(() => {
    document.title = isStories
      ? "Stories from the field | SAICE / IFSS Inc."
      : "Impact — what our programs change · SAICE & IFSS";
  }, [isStories]);

  if (isStories) return <Stories />;
  return <Dashboard />;
}

function Dashboard() {
  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        title="The change our programs"
        italic="set out to make."
        description="Three programs. Three sets of outcomes. Reported plainly, refreshed quarterly, and reviewed by partners outside our walls."
        crumbs={[{ label: "Impact" }]}
        image={impactHero}
        imageAlt="Cooperative members reviewing program impact records together"
      />

      {/* Top-line */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              The headline numbers, <span className="display-italic">refreshed every quarter.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topLine.map((s) => (
              <div key={s.l} className="blob-card bg-card p-6">
                <p className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-none">
                  {s.v}
                </p>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-foreground/55 leading-relaxed max-w-3xl">
            Pre-cycle baseline (2026). Live targets vs. actuals tracked from cycle start (2027).
          </p>
        </div>
      </section>

      {/* By program */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">By program</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              What each program <span className="display-italic">is set up to change.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every service we deliver feeds one of these programs. Each program carries a small set of indicators that we publish — green ≥ 90% of target, amber 70–89%, red below 70%.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {programs.map(({ tag, Icon, t, promise, indicators, href, services }) => (
              <div key={tag} className="rounded-3xl border border-foreground/10 bg-background p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{tag}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-5">{promise}</p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">Key indicators</p>
                <ul className="space-y-2.5 mb-6">
                  {indicators.map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <Link href={href} className="inline-flex items-center gap-1.5 text-accent hover:underline underline-offset-4">
                    About {tag} <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>
                  <Link href={services} className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-accent">
                    Services for {tag}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="community" caption="Women & youth in cooperatives" aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Inclusion is contractual, <span className="display-italic">not aspirational.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Quota targets across every program. We publish share of beneficiaries, leadership roles, training hours and finance events — every quarter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inclusion.map((g) => (
              <div key={g.label} className="rounded-2xl border border-foreground/10 bg-background p-6">
                <p className="font-serif text-4xl font-semibold tracking-tight text-accent leading-none mb-3">
                  {g.pct}
                </p>
                <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{g.label}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">{g.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent evaluations */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Not graded <span className="display-italic">by ourselves.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Three independent evaluations across the 2027–2029 cycle. Commissioned by SAICE, contracted to a firm with no prior relationship, and published in full.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-4">
            {evaluations.map((e, i) => (
              <li key={e.t} className="rounded-2xl border border-foreground/10 bg-background p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{e.year}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{e.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{e.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stories preview */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                The people <span className="display-italic">behind the numbers.</span>
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                Stories from the field — written or filmed with the people whose lives the work touches, with consent on the record.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Link href="/impact/stories" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
                Browse all stories <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link href="/resources" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
                Reports & open data
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stories() {
  const stories = [
    {
      tag: "Rwanda · PAGES · women-led",
      title: "Aline runs a 280-member maize cooperative in Musanze",
      body: "Here is what the Smart Market Matchmaker changed for her quarter — buyer access, price uplift, and the first finance event for 31 women in her group.",
    },
    {
      tag: "Togo · ICES · youth-led",
      title: "From street pickers to a registered cooperative",
      body: "A Lomé waste-sorting line, one year in. How a 12-person collective became an EPR-grade reporting partner — and what the carbon receipts paid for.",
    },
    {
      tag: "Cross-cutting · learning",
      title: "Three things we got wrong on the GIAH pilot — and one we got right",
      body: "Honest notes from the field. Where our onboarding under-counted women, where IoT data outpaced cooperative literacy, and the one design call that held up under scale-out.",
    },
    {
      tag: "Kenya · PAGES · methodology",
      title: "What it costs to reach the last farmer",
      body: "Unit-cost analysis from the SEKU pilot — enumerator time, mobile-money fees, and the share of the budget that never gets line-itemed in a logframe.",
    },
  ];

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        title="The people"
        italic="behind the numbers."
        description="Written or filmed with the people whose lives the work touches, with consent on the record. Plain language, no extractive photography."
        crumbs={[{ label: "Impact", href: "/impact" }, { label: "Stories" }]}
        image={impactStoriesHero}
        imageAlt="Community members behind the work"
      />

      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {stories.map((s) => (
              <article key={s.title} className="blob-card bg-card p-7 flex flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">{s.tag}</p>
                <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">{s.body}</p>
                <div className="mt-auto pt-4 border-foreground/10 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">Read or watch</span>
                  <span className="circle-arrow-sm">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
