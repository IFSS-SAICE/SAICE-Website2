import { useEffect } from "react";
import { Link } from "wouter";
import {
  Leaf,
  Users,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Recycle,
  HeartHandshake,
  Handshake,
  Compass,
  BookOpen,
  Heart,
  Zap,
  GraduationCap,
  Building2,
  Landmark,
} from "lucide-react";
import aboutHero from "@/assets/images/about-hero.png";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";
import credibleHero from "@/assets/images/credible-hero.png";
import pacesEnergy from "@/assets/images/sections/energy.png";
import missionImg from "@/assets/images/sections/community.png";
import partnersBanner from "@/assets/images/partners-banner.png";
import logoMcGill from "@/assets/images/logos/mcgill.png";
import logoSEKU from "@/assets/images/logos/seku.png";
import logoICGLR from "@/assets/images/logos/icglr.png";
import logoAUDA from "@/assets/images/logos/auda-nepad.png";
import logoRCID from "@/assets/images/logos/rcid.png";

const SUB_TO_SECTION: Record<string, string> = {
  "who-we-are": "",
  story: "story",
  mission: "mission",
  vision: "mission",
  programs: "programs",
  approach: "approach",
  leadership: "leadership",
  experts: "experts",
  partners: "partners",
  partnerships: "partners",
};

export default function AboutPage({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;

  useEffect(() => {
    document.title =
      "About SAICE & IFSS — Mission, programs, partnerships, experts";
  }, []);

  useEffect(() => {
    if (!sub) return;
    const target = SUB_TO_SECTION[sub];
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [sub]);

  const values = [
    { t: "Solidarity", d: "We work with, not for. Partners hold equal voice in design and ownership." },
    { t: "Inclusion", d: "GEDSI is designed in from day one, not bolted on at the end." },
    { t: "Stewardship", d: "Communities own the data. The public owns the code." },
    { t: "Open knowledge", d: "What we learn, we publish — in plain language and local languages." },
    { t: "Local ownership", d: "Every tool we build is operable and improvable by the people who use it." },
    { t: "Accountability", d: "Donor-grade transparency — audited financials, independent evaluations, public indicators." },
  ];

  const programs = [
    {
      img: pagesHero,
      gradient: null,
      alt: "Smallholder farmer reviewing crop data on a tablet in a Rwandan field",
      eyebrow: "Track 1 · Agri-intelligence",
      title: "PAGES",
      subtitle: "Precision Agriculture for Green Economy and Sustainability",
      stats: "5,000 agri-SMEs · ~100,000 farmers · 60% women, 40% youth · 4 countries",
      body: "Three connected tools — Smart Market Matchmaker, IoT Precision Insight Engine, and ERP Finance & Inventory Tracker — that help small agri-businesses sell better, decide better, and qualify for finance.",
      href: "/programs/pages",
      cta: "Explore PAGES",
      Icon: Leaf,
    },
    {
      img: icesHero,
      gradient: null,
      alt: "Youth cooperative members operating smart waste collection bins in a circular-economy pilot site",
      eyebrow: "Track 2 · Circular economy",
      title: "ICES / ICE-Plus",
      subtitle: "Initiative for Circular Economy and Sustainability",
      stats: "6 tools · CH₄ and CO₂ reductions · Youth & women-led cooperatives · Togo pilots",
      body: "IoT smart bins, AI sorting, RFID asset tracking, mobile apps, analytics and an ML carbon calculator — turning municipal and agri-waste into livelihoods and verified climate finance.",
      href: "/programs/ices",
      cta: "Explore ICES",
      Icon: Recycle,
    },
    {
      img: pacesEnergy,
      gradient: null,
      alt: "PACES — community solar mini-grid powering a rural agri-SME",
      eyebrow: "Track 3 · Sustainable energy",
      title: "PACES / PACE-Plus",
      subtitle: "Programs for Accessible Clean Energy and Sustainability",
      stats: "Solar mini-grids · Productive-use solar · Biogas from ICES waste · E-mobility",
      body: "Reliable, affordable clean energy for the cooperatives, municipalities and agri-SMEs that PAGES and ICES already serve — powering cold-chain, irrigation, collection routes and waste-to-energy.",
      href: "/programs/paces",
      cta: "Explore PACES",
      Icon: Zap,
    },
  ];

  const partners: {
    name: string;
    logo: string | null;
    role: string;
    Icon: typeof GraduationCap;
    kind: string;
  }[] = [
    { name: "McGill University", logo: logoMcGill, role: "Academic anchor in Canada — capstone teams, research collaboration and graduate placements.", Icon: GraduationCap, kind: "Academic · Canada" },
    { name: "RCID — Rwanda", logo: logoRCID, role: "Country lead for PAGES pilots with cooperatives across Rwanda's Eastern and Southern provinces.", Icon: Landmark, kind: "Implementation · Rwanda" },
    { name: "South Eastern Kenya University", logo: logoSEKU, role: "Research partner on agri-intelligence pilots and farmer-extension protocols in Kenya.", Icon: GraduationCap, kind: "Academic · Kenya" },
    { name: "Terre des Jeunes Togo", logo: null, role: "Youth-led implementation partner for ICES circular-economy pilots in Lomé.", Icon: HeartHandshake, kind: "Implementation · Togo" },
    { name: "Ripen", logo: null, role: "Technology partner on smart-bin telemetry, AI sorting and the carbon-calculator backbone.", Icon: Building2, kind: "Technology" },
    { name: "ICGLR", logo: logoICGLR, role: "Regional policy alignment across the Great Lakes — peace, security and shared natural resources.", Icon: Globe2, kind: "Policy · Regional" },
    { name: "AUDA-NEPAD", logo: logoAUDA, role: "Continental alignment — CAADP, AU Agenda 2063 and the African AI Strategy.", Icon: Globe2, kind: "Policy · Continental" },
  ];

  const experts = [
    {
      name: "Leonard Nkunzimana",
      initials: "LN",
      role: "Chief Executive Officer",
      credentials: "Advanced Masters, Development Management & Evaluation, University of Antwerp",
      bio: "CEO of IFSS Inc. since 2022. 15+ years across international cooperation, programs management and evaluation — including with University of Burundi and WUSC / AICC as Trade & Market Research Advisor. Research scholar at Arizona State University. Works in English, French and African languages.",
    },
    {
      name: "Brigitte Blais",
      initials: "BB",
      role: "Expert — Environment & Climate",
      credentials: "B. STS, DGE-GES, ISSP-SEA",
      bio: "Around 30 years in environmental communications and analysis before energy regulators. Second-cycle diplomas in Sustainable Carbon Management and Environmental Management. Helps organisations accelerate the move to climate action and sustainable development.",
    },
    {
      name: "Joseph Nzomoi",
      initials: "JN",
      role: "Expert — Agricultural Economics",
      credentials: "PhD, Senior Economist & Policy Advisor",
      bio: "20+ years across agricultural and economic policy, international trade and export promotion, project planning, capacity building, and food security. Senior roles in Kenya, Uganda and Rwanda, with project work in Tanzania and Burundi. Full Member of the UNWTO World Committee on Tourism Ethics since 2023.",
    },
    {
      name: "Tekalign Gutu Sakketa",
      initials: "TG",
      role: "Expert — Development Economics",
      credentials: "PhD, Bonn University · Postdoctoral Researcher, ZEF",
      bio: "Postdoctoral researcher at the Center for Development Research (ZEF), Bonn University. PhD in Development Economics on youth, well-being and employment. Two M.Sc. degrees (Haramaya; Antwerp). Former research officer at IFPRI. Focus on social protection, trade, food systems, and conflict-affected labour markets.",
    },
    {
      name: "Bibhash Das",
      initials: "BD",
      role: "Expert — Sustainable Energy",
      credentials: "MBA (TMU) · M.Sc. Wind Power (Uppsala) · B.Tech. (MNIT Jaipur)",
      bio: "Toronto-based sustainable-energy professional with over a decade across wind, solar and building-efficiency on three continents. Solar thermal for industrial steam, wind owner's engineering in Europe, renewable-energy policy in India. Integrates analytics and AI into sustainability work for NGOs and institutions.",
    },
    {
      name: "Olivier Furaha",
      initials: "OF",
      role: "Expert — Rural & Agri-Business",
      credentials: "Postgraduate, International Agriculture",
      bio: "15+ years across projects management, planning, agri-business and advisory roles in Rwanda's public and private sectors. Twice Project Coordinator at the World Bank (Ministry of Agriculture; Ministry of Public Service and Labour). Grassroots experience in community development and MSME enabling-environment strategy.",
    },
    {
      name: "Divine Mugisha",
      initials: "DM",
      role: "Expert — Operations & Coordination",
      credentials: "Master's, Business Management",
      bio: "Administration, project coordination and organisational management across grassroots and international NGOs. Works on gender equality and youth-focused innovation — empowering young women to lead community solutions. Bilingual in French and English.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1 — Hero (matches landing page) */}
      <section className="pt-6 pb-14 md:pt-8 md:pb-20">
        <div className="container px-4 lg:px-6">
          <div className="relative blob-card overflow-hidden min-h-[520px] md:min-h-[620px] lg:min-h-[700px] flex items-end">
            <img
              src={aboutHero}
              alt="Leadership and field staff meeting with cooperative partners"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/50 to-foreground/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
            <div className="relative w-full p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-4xl text-background">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-background/80 mb-5">
                  About SAICE / IFSS
                </p>
                <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                  One organisation. <span className="display-italic">Two arms.</span> One mission.
                </h1>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-background/85 leading-relaxed max-w-3xl">
                  SAICE is a Canadian registered charity. IFSS Inc. is its operating arm. The charity holds the mission, the tools and the grants. The operating arm delivers paid services and sends revenue back to the mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Story · Mission · Vision (text one side, image the other) */}
      <section id="story" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Text column */}
            <div className="space-y-12 md:space-y-14">
              {/* Story */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                  Our story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
                  A decade of field work, a new <span className="display-italic">charter for impact.</span>
                </h2>
                <p className="text-foreground/75 leading-relaxed text-lg mb-4">
                  IFSS Inc. began in Canada a decade ago, supporting governments, cooperatives and UN agencies on ESG, agri value chains and digital transformation across Africa, Europe and North America.
                </p>
                <p className="text-foreground/75 leading-relaxed text-lg">
                  In 2026, our McGill pilot in Rwanda made the next step clear. We founded <strong className="text-foreground">SAICE</strong> — a Canadian registered charity — to hold the mission, the tools and the grants. IFSS Inc. remains the operating arm.
                </p>
              </div>

              {/* Mission */}
              <div id="mission" className="scroll-mt-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                  Mission
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-[1.25] mb-4">
                  Open digital public goods that help African agri-SMEs and circular-economy organisations <span className="display-italic">earn more, decide better, and resist shocks.</span>
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Women, youth, ex-combatants and people with disabilities sit at the centre — as decision-makers, not as a separate track.
                </p>
              </div>

              {/* Vision */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                  Vision
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-[1.25] mb-4">
                  A Great Lakes Region — and a wider African food and waste system — where every small business can <span className="display-italic">grow on its own terms.</span>
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Communities own the tools they depend on. Local knowledge sits beside research data. Climate finance reaches the people doing the work.
                </p>
              </div>

              {/* Values */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-6">
                  Our values
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  {values.map((v) => (
                    <div key={v.t} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1.5" strokeWidth={2} />
                      <div>
                        <p className="font-serif font-semibold text-foreground">{v.t}</p>
                        <p className="text-sm text-foreground/70 leading-relaxed mt-0.5">{v.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image column — matches text height on desktop */}
            <figure className="relative overflow-hidden rounded-3xl w-full h-full min-h-[28rem] aspect-[4/5] lg:aspect-auto">
              <img
                src={missionImg}
                alt="Community gathering with a young facilitator under a shade tree"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 4 — Programs (full image cards, matching home) */}
      <section id="programs" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4">
          <div className="mb-12 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
              Our programs
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
              Three flagship programs, <span className="display-italic">one shared backbone.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { eyebrow: "Track 1 · Agri-intelligence", title: "PAGES", line: "Precision agriculture and market access for small farms and cooperatives." },
              { eyebrow: "Track 2 · Circular economy", title: "ICES", line: "Turning municipal and agri-waste into livelihoods and verified climate finance." },
              { eyebrow: "Track 3 · Sustainable energy", title: "PACES", line: "Solar mini-grids and productive-use clean energy powering the work above." },
            ].map((p) => (
              <div key={p.title} className="border-l border-accent/30 pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
                  {p.eyebrow}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{p.line}</p>
              </div>
            ))}
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-accent transition-colors"
          >
            Explore all programs
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* 5 — Partnerships (detailed) */}
      <section id="partners" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4">
          {/* Banner image above the header */}
          <figure className="relative overflow-hidden rounded-3xl aspect-[21/9] mb-12 md:mb-14">
            <img
              src={partnersBanner}
              alt="Hands of partners from Canada, Africa and Europe collaborating over an unfolded map at a meeting table"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          <div className="max-w-3xl mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
              Partnerships
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
              Equal partnership, <span className="display-italic">across borders.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              Based in Canada, with universities, ministries, cooperatives and NGOs across Africa — Rwanda, Kenya, Burundi, DRC, Togo — and research and funding collaborators in Europe.
            </p>
          </div>

          {/* Merged partner cards — logo + role info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl bg-card border border-foreground/10 p-6 flex flex-col"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white border border-foreground/10 flex items-center justify-center p-3 mb-5">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <p.Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  )}
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
                  {p.kind}
                </p>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">{p.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6 — Governance & approach (merged, NGO-standard) */}
      <section id="approach" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4">
          <figure className="relative overflow-hidden rounded-3xl aspect-[21/9] mb-12 md:mb-14">
            <img
              src={credibleHero}
              alt="Theory-of-change diagram on a whiteboard with indicators and an audit checklist"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          <div className="max-w-3xl mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
              Governance
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
              Led with care. <span className="display-italic">Run with integrity.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              Our work is only as trustworthy as the way we are run. The communities we serve are entitled to know who decides what, how, and on what basis — so we publish it.
            </p>
          </div>

          {/* Five plain-language principles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {[
              { t: "Communities first", d: "Every decision is tested against one question — does this serve the people we exist for?" },
              { t: "Independent, but close", d: "Our board answers to no single funder or partner — and stays close to the work on the ground." },
              { t: "Diversity by design", d: "African, diaspora, women and youth voices sit at every table as decision-makers." },
              { t: "Open by default", d: "Statutes, board, policies and audited accounts are public. Confidentiality is the exception." },
              { t: "Accountability that bites", d: "Conflicts are declared. Concerns are heard. Mistakes are documented and corrected." },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                <p className="font-serif text-lg font-semibold text-foreground mb-2 leading-snug">{p.t}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          {/* Board snapshot */}
          <div className="rounded-3xl bg-card border border-foreground/10 p-8 md:p-10 mb-12">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                  Our board
                </p>
                <p className="font-serif text-2xl md:text-3xl text-foreground leading-[1.25] mb-5">
                  A board that <span className="display-italic">looks like the work.</span>
                </p>
                <p className="text-foreground/75 leading-relaxed">
                  Seven to eleven directors, mostly independent, with built-in seats for women, African leaders, the diaspora and youth.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { n: "7–11", l: "Directors on the board" },
                  { n: "50%+", l: "Women directors" },
                  { n: "50%+", l: "Africa & diaspora" },
                  { n: "1+", l: "Youth seat under 35" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-background/60 border border-foreground/10 p-5">
                    <p className="font-serif text-3xl md:text-4xl font-semibold text-accent leading-none mb-2">{s.n}</p>
                    <p className="text-xs text-foreground/70 leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Committees + quick facts */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                Standing committees
              </p>
              <p className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-6">
                Where the detailed work gets done.
              </p>
              <ul className="space-y-3">
                {[
                  { t: "Finance, Audit & Risk", d: "Budget, audit, controls, donor compliance." },
                  { t: "Programs & Impact", d: "Strategy, MEL, theory of change, annual impact report." },
                  { t: "Nominations & Governance", d: "Board succession, diversity, by-laws, self-assessment." },
                  { t: "Ethics, Safeguarding & Integrity", d: "Code of conduct, safeguarding, whistleblower, data ethics." },
                  { t: "Compensation & People", d: "Pay, senior appointments, DEI and well-being." },
                ].map((c) => (
                  <li key={c.t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-serif font-semibold text-foreground">{c.t}.</span>{" "}
                      <span className="text-foreground/65">{c.d}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href="/governance"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-accent transition-colors mt-8"
              >
                Full governance & policies
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {[
                { Icon: ShieldCheck, t: "Legal form", d: "Canadian non-profit; CRA charity registration in progress." },
                { Icon: Globe2, t: "Where we are", d: "HQ Toronto · Kigali · Bujumbura · partner sites in the region." },
                { Icon: BookOpen, t: "Languages", d: "Work in EN & FR; programs in Kinyarwanda, Kirundi & local languages." },
                { Icon: Users, t: "Advisory bodies", d: "Academic, Community & Youth, and Policy councils that shape our work." },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-foreground/10 bg-card p-5">
                  <Icon className="w-5 h-5 text-accent mb-3" strokeWidth={1.75} />
                  <p className="font-serif font-semibold text-foreground mb-1">{t}</p>
                  <p className="text-xs text-foreground/65 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experts" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                Our experts
              </p>
              <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                The specialists behind <span className="display-italic">the work.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
                Drawn from universities, research centres and country partners across Canada, Africa, Europe and Asia — the specialists who turn the charity's research into engagements with cooperatives, ministries and donors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experts.map((e) => (
              <article
                key={e.name}
                className="rounded-2xl border border-foreground/10 bg-card p-6 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center font-serif text-xl font-semibold flex-shrink-0">
                    {e.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg font-semibold leading-tight text-foreground">
                      {e.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold mt-0.5">{e.role}</p>
                  </div>
                </div>
                {e.credentials && (
                  <p className="text-xs text-foreground/55 mb-3 leading-relaxed">{e.credentials}</p>
                )}
                <p className="text-sm text-foreground/75 leading-relaxed flex-1">{e.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Get involved (matches home) */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70 mb-4">
              Work with us
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Three ways to{" "}
              <span className="font-serif italic font-light text-accent">get involved.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                Icon: HeartHandshake,
                t: "Donate to SAICE",
                d: "A Canadian registered charity. Your gift goes to programs, not overheads.",
                cta: "Donate now",
                href: "/get-involved/donate",
              },
              {
                Icon: Handshake,
                t: "Partner with us",
                d: "Universities, ministries, cooperatives, donors, technology providers — let's design what's next.",
                cta: "Start a conversation",
                href: "/get-involved/partner",
              },
              {
                Icon: Building2,
                t: "Hire IFSS Inc.",
                d: "ESG advisory, agri value-chain TA, digital transformation, MEAL design, proposal development.",
                cta: "Request a proposal",
                href: "/services",
              },
            ].map(({ Icon, t, d, cta, href }) => (
              <Link
                key={t}
                href={href}
                className="group rounded-3xl bg-primary-foreground/[0.06] hover:bg-primary-foreground/[0.10] border border-primary-foreground/10 p-7 flex flex-col transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-tight mb-3">{t}</h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed mb-7 flex-1">{d}</p>
                <div className="flex items-center justify-between pt-5 border-primary-foreground/15">
                  <span className="text-sm font-semibold group-hover:text-accent transition-colors">
                    {cta}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-primary-foreground/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
