import { useEffect } from "react";
import { Link } from "wouter";
import {
  Leaf,
  Users,
  Globe2,
  CheckCircle2,
  ChevronRight,
  Activity,
  ShieldCheck,
  Sparkles,
  MapPinned,
  Lock,
  Briefcase,
  ArrowRight,
  Recycle,
  HeartHandshake,
  Handshake,
  Compass,
  BookOpen,
  Heart,
} from "lucide-react";
import aboutHero from "@/assets/images/about-hero.png";
import { PageHero } from "@/components/PageHero";

const SUB_TO_SECTION: Record<string, string> = {
  "who-we-are": "",
  story: "story",
  mission: "mission",
  programs: "programs",
  structure: "structure",
  "why-this-matters": "structure",
  "setup-funding": "structure",
  roadmap: "history",
  approach: "approach",
  leadership: "leadership",
  experts: "experts",
  history: "history",
  partners: "partners",
};

export default function AboutPage({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;

  useEffect(() => {
    document.title =
      "About SAICE & IFSS — Who we are, how we are structured, what we stand for";
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

  const quickLinks = [
    { href: "#story", label: "Our story" },
    { href: "#mission", label: "Mission & values" },
    { href: "#programs", label: "Programs" },
    { href: "#structure", label: "Structure" },
    { href: "#approach", label: "Approach" },
    { href: "#leadership", label: "Leadership" },
    { href: "#experts", label: "Experts" },
    { href: "#history", label: "History" },
    { href: "#partners", label: "Partners" },
  ];

  const values = [
    { t: "Solidarity", d: "We work with, not for. Our partners hold equal voice in design and ownership." },
    { t: "Inclusion", d: "Inclusion is designed in from day one, not bolted on at the end." },
    { t: "Stewardship", d: "The communities we serve own the data; the public owns the code." },
    { t: "Open knowledge", d: "What we learn, we publish — in plain language, in local languages, with the methods exposed." },
    { t: "Local ownership", d: "We aim to make every tool we build operable, repairable, and improvable by the people who use it." },
  ];

  const mandate = [
    "Make the knowledge of experienced researchers and specialists in Canada, Africa, the US and Europe available to small businesses and public institutions that would otherwise not reach it.",
    "Build digital tools as public goods — owned by the charity, licensed openly where appropriate, and used by anyone who needs them.",
    "Stand up the financial, governance and data infrastructure that lets those tools survive past any single grant or any single founder.",
    "Hold ourselves to donor-grade transparency — published indicators, audited financials, independent evaluations.",
  ];

  const programs = [
    {
      Icon: Leaf,
      eyebrow: "Track 1 · Agri-intelligence",
      title: "PAGES",
      lead: "Precision Agriculture for Green Economy and Sustainability",
      body: "Three connected tools — Smart Market Matchmaker, IoT Precision Insight Engine, and ERP Finance & Inventory Tracker. Active in Rwanda and Kenya, scaling to Burundi and DRC.",
      href: "/programs/pages",
      cta: "Explore PAGES",
    },
    {
      Icon: Recycle,
      eyebrow: "Track 2 · Circular economy",
      title: "ICES / ICE-Plus",
      lead: "Initiative for Circular Economy and Sustainability",
      body: "Six tools across smart bins, AI-powered sorting, RFID, mobile apps, analytics, and an ML carbon calculator. Piloting with Terre des Jeunes Togo and Ripen.",
      href: "/programs/ices",
      cta: "Explore ICES",
    },
  ];

  const approach = [
    { Icon: Compass, t: "Theory of change", d: "Every dollar traces from inputs → activities → outcomes → impact. We publish the diagrams, the indicators, and the assumptions." },
    { Icon: HeartHandshake, t: "GEDSI by design", d: "60% women, 40% youth, 15% ex-combatants, 5% people with disabilities — with delivery tailored to each group, not a single channel." },
    { Icon: ShieldCheck, t: "Data sovereignty & AI ethics", d: "SMEs and cooperatives own their data. We comply with Rwanda Law 058/2021, Kenya's Data Protection Act, the AU Continental AI Strategy 2024, and the UNESCO Recommendation on the Ethics of AI." },
    { Icon: Globe2, t: "Aligned with continental priorities", d: "CAADP Kampala 2026–2035, AU Agenda 2063, Rwanda's PSTA 5, Kenya's ASTGS, the ICGLR framework, and SDGs 1, 2, 5, 8, 9, 10, 13 and 17." },
  ];

  const saiceDoes = [
    "Mission and strategy",
    "Grant fundraising and donor relationships",
    "Programmes — PAGES and ICES",
    "Holds the brand, code, data and IP",
    "MEAL, GEDSI, safeguarding, AI ethics",
    "Country offices and partnerships",
    "Reports to donors and the public",
  ];
  const ifssDoes = [
    "Consulting and technical assistance",
    "Paid SaaS / enterprise licences of PAGES and ICES tools",
    "Transaction and marketplace services",
    "Takes impact-investor capital and commercial contracts",
    "Pays a revenue share back to SAICE under a published licence",
    "Operates at arm's length with independent accounts and staff",
    "Reports to SAICE under the related-party policy",
  ];

  const seats = [
    "Chair",
    "Vice-Chair",
    "Treasurer",
    "Secretary",
    "IFSS-nominated seat",
    "McGill seat",
    "Rwanda seat (RCID)",
    "Kenya seat (SEKU)",
    "At-large",
  ];

  const committees = [
    "Audit & Risk",
    "Programs & Impact",
    "Data, AI & Ethics",
    "GEDSI & Safeguarding",
    "Nominating & Governance",
  ];

  const experts: {
    name: string;
    initials: string;
    role: string;
    credentials?: string;
    bio: string;
  }[] = [
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
      bio: "20+ years across agricultural and economic policy, international trade and export promotion, project planning, capacity building, and food security. Has held senior roles in Kenya, Uganda and Rwanda, with project work in Tanzania and Burundi. Full Member of the UNWTO World Committee on Tourism Ethics since 2023.",
    },
    {
      name: "Tekalign Gutu Sakketa",
      initials: "TG",
      role: "Expert — Development Economics",
      credentials: "PhD, Bonn University · Postdoctoral Researcher, ZEF",
      bio: "Postdoctoral researcher at the Center for Development Research (ZEF), Bonn University. PhD in Development Economics on youth, well-being and employment. Two M.Sc. degrees in Agricultural Economics (Haramaya) and Globalization and Development (Antwerp). Former research officer at IFPRI. Focus on social protection, trade, food systems, and conflict-affected labour markets.",
    },
    {
      name: "Bibhash Das",
      initials: "BD",
      role: "Expert — Sustainable Energy",
      credentials: "MBA (TMU) · M.Sc. Wind Power (Uppsala) · B.Tech. (MNIT Jaipur)",
      bio: "Toronto-based sustainable-energy professional with over a decade across wind, solar and building-efficiency on three continents. Engineering and data-driven strategy — solar thermal for industrial steam, wind owner's engineering in Europe, renewable-energy policy in India. Integrates analytics and AI into sustainability work for NGOs, private and public institutions.",
    },
    {
      name: "Olivier Furaha",
      initials: "OF",
      role: "Expert — Rural & Agri-Business",
      credentials: "Postgraduate, International Agriculture",
      bio: "15+ years across projects management, planning, agri-business and advisory roles in Rwanda's public and private sectors. Twice Project Coordinator at the World Bank (Ministry of Agriculture; Ministry of Public Service and Labour). Grassroots experience in community development planning and MSME enabling-environment strategy.",
    },
    {
      name: "Divine Mugisha",
      initials: "DM",
      role: "Expert — Operations & Coordination",
      credentials: "Master's, Business Management",
      bio: "Administration, project coordination and organisational management across grassroots and international NGOs. Works on gender equality and youth-focused innovation — empowering young women to lead community solutions. Bilingual in French and English; thesis on project implementation in NGOs.",
    },
  ];

  const timeline = [
    { d: "Pre-2025", t: "IFSS Inc. founded in Canada to deliver technical assistance — ESG, agri value-chain, M&E, digital transformation and proposal development across Canada, the US, Kenya, Rwanda, Uganda, Burundi." },
    { d: "2025–2026", t: "McGill MMA capstone with IFSS produces the GIAH precision-agriculture platform, piloted with Rwandan cooperatives." },
    { d: "2026", t: "SAICE / SAIEC founded as the Canadian registered-charity parent. Federal incorporation; board seated; CRA charity application filed." },
    { d: "2026–2027", t: "Foreign-NGO registration in Rwanda and Kenya; PAGES expansion design." },
    { d: "2027", t: "Public launch and first major institutional grant proposals." },
    { d: "2027–2029", t: "PAGES and ICES three-year programme cycle." },
  ];

  const partners = [
    "McGill University",
    "RCID-Rwanda",
    "South Eastern Kenya University",
    "Terre des Jeunes Togo",
    "Ripen",
    "ICGLR",
    "AUDA-NEPAD",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title="One organisation. Two arms."
        italic="One mission."
        description="We are SAICE — a Canadian registered charity — and IFSS Inc., our taxable operating subsidiary. The charity holds the mission, the tools and the grants. The for-profit delivers paid services, takes on enterprise contracts, and channels revenue back into the mission. Together we do what neither could do alone."
        crumbs={[{ label: "About" }]}
        image={aboutHero}
        imageAlt="Leadership and field staff meeting with cooperative partners"
      />

      {/* Sticky in-page quick-link strip */}
      <nav
        aria-label="On this page"
        className="sticky top-20 z-30 bg-background/90 backdrop-blur border-foreground/10"
      >
        <div className="container px-4 lg:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 -mx-1 px-1 scrollbar-none">
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex flex-shrink-0 items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-foreground/70 hover:text-foreground hover:bg-card transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 1 — Our story */}
      <section id="story" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                From a Canadian consultancy to a regional{" "}
                <span className="display-italic">digital-public-goods organisation.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                IFSS — Invest for Solidarity and Sustainable Development — was founded in Canada to put research-grade technical assistance within reach of small businesses, public institutions and development partners in Africa, North America, and Europe. For more than a decade, IFSS has supported governments, cooperatives, start-ups and UN agencies on ESG, agricultural value chains, monitoring and evaluation, digital transformation, and proposal development.
              </p>
              <p>
                In 2025–2026, IFSS partnered with McGill University's Master of Management in Analytics (MMA) on the GIAH capstone — a precision-agriculture and market-matching digital platform piloted with cooperatives in Rwanda. The pilot worked. It also showed us, clearly, that the next phase needed two things the current structure could not deliver: access to charitable grant capital, and a governance model built for digital public goods.
              </p>
              <p>
                So in 2026 we created <strong className="text-foreground">SAICE</strong> — Solidarity for Agri-Intelligence and Circular Economy — a Canadian registered charity that now sits as the parent of IFSS Inc. SAICE holds the brand, the code, the data, and the grants. IFSS Inc. remains the operating arm, taking on consulting, enterprise SaaS, and impact-investor capital. Two flagship programs — PAGES and ICES — give the mission concrete shape across six countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Mission, vision, values */}
      <section id="mission" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-14">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Mission, vision, <span className="display-italic">values.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="blob-card bg-card p-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-accent" strokeWidth={2} />
                
              </div>
              <p className="font-serif text-xl text-foreground/85 leading-relaxed">
                To build, deploy and steward open digital public goods that help African agri-SMEs, cooperatives and circular-economy organisations earn more, decide better, and resist climate and market shocks — with women, youth, ex-combatants and people with disabilities centred in everything we do.
              </p>
            </div>
            <div className="blob-card bg-card p-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-accent" strokeWidth={2} />
                
              </div>
              <p className="font-serif text-xl text-foreground/85 leading-relaxed">
                A Great Lakes Region — and a wider African food and waste system — in which every small business can access the data, the finance and the markets it needs to grow on its own terms.
              </p>
            </div>
          </div>

          <div className="blob-card bg-card p-8 md:p-10">
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {values.map((v) => (
                <div key={v.t} className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-serif font-semibold text-foreground text-lg">{v.t}</p>
                    <p className="text-sm text-foreground/70 leading-relaxed mt-1">{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Mandate */}
      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Our mandate, <span className="display-italic">simply put.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {mandate.map((m, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 rounded-2xl bg-card border border-foreground/10"
              >
                <span className="font-serif text-4xl font-semibold text-accent leading-none flex-shrink-0">
                  0{i + 1}
                </span>
                <p className="text-foreground/80 leading-relaxed text-lg">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Scope */}
      <section className="py-14 md:py-16 bg-card/40">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Where we work and <span className="display-italic">who we serve.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { Icon: Globe2, t: "Countries today", d: "Canada (HQ) · Rwanda · Kenya · Burundi · Democratic Republic of Congo · Togo. Expanding from there as our programmes scale." },
              { Icon: Users, t: "Who we serve", d: "Small and medium agri-businesses, cooperatives, women's and youth enterprises, BDS providers, municipalities, government ministries, and the academic and research community." },
              { Icon: BookOpen, t: "Languages", d: "English and French today. Kinyarwanda joins at platform launch. Kirundi and Swahili follow in phase 2. Local-language UX is not optional — it is a precondition for adoption." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="blob-card bg-card p-7">
                <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Flagship programs */}
      <section id="programs" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Our two <span className="display-italic">flagship programs.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              PAGES focuses on precision agriculture and market access for small farms and cooperatives. ICES focuses on circular economy — turning waste streams into livelihoods and verified climate finance. The two share a single digital backbone, a single ethics policy, and a single accountability framework to the people we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {programs.map(({ Icon, eyebrow, title, lead, body, href, cta }) => (
              <Link
                key={title}
                href={href}
                className="group blob-card bg-card p-8 flex flex-col hover:bg-card/70 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                
                <h3 className="font-serif text-3xl font-semibold text-foreground tracking-tight mb-2">{title}</h3>
                <p className="font-serif italic text-accent text-lg mb-5">{lead}</p>
                <p className="text-foreground/75 leading-relaxed mb-7">{body}</p>
                <div className="mt-auto flex items-center justify-between pt-5 border-foreground/10">
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{cta}</span>
                  <span className="circle-arrow-sm">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Structure */}
      <section id="structure" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              How SAICE and IFSS Inc. <span className="display-italic">fit together.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              SAICE is the parent — a Canadian registered charity, federally incorporated under the Canada Not-for-profit Corporations Act and on the path to charitable registration with the Canada Revenue Agency. IFSS Inc. is its operating subsidiary — a Canadian taxable corporation that delivers paid services and enterprise software, and channels revenue back to SAICE under a published licence and revenue-share. The same structure used by Mozilla, Wikimedia, Digital Green, and One Acre Fund.
            </p>
          </div>

          {/* Diagram */}
          <div
            className="p-8 md:p-10 bg-background rounded-3xl border border-foreground/10 flex flex-col md:flex-row items-center justify-center gap-6 text-center mb-10"
            title="SAICE is the parent charity. IFSS Inc. is the operating subsidiary. Both are Canadian-registered, but only SAICE can issue donation receipts."
          >
            <div className="bg-card p-6 rounded-2xl border border-foreground/10 w-full max-w-xs relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Parent · Charity
              </div>
              <Leaf className="w-9 h-9 text-primary mx-auto mb-3 mt-2" strokeWidth={1.5} />
              <h3 className="font-serif font-semibold text-xl">SAICE</h3>
              <p className="text-xs text-foreground/65 mt-1">
                Brand · code · data · grants · programmes
              </p>
            </div>
            <div className="flex flex-col items-center text-foreground/55 gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest">
                controls + licences to
              </span>
              <div className="flex md:flex-row flex-col">
                <ChevronRight className="w-5 h-5 md:rotate-0 rotate-90 -mr-2" />
                <ChevronRight className="w-5 h-5 md:rotate-0 rotate-90 -mr-2" />
                <ChevronRight className="w-5 h-5 md:rotate-0 rotate-90" />
              </div>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-foreground/10 w-full max-w-xs relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Subsidiary · Commercial
              </div>
              <Activity className="w-9 h-9 text-accent mx-auto mb-3 mt-2" strokeWidth={1.5} />
              <h3 className="font-serif font-semibold text-xl">IFSS Inc.</h3>
              <p className="text-xs text-foreground/65 mt-1">
                Consulting · SaaS · enterprise · impact capital
              </p>
            </div>
          </div>

          {/* Who does what */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-7">
              <div className="flex items-center gap-2 mb-5">
                <Leaf className="w-4 h-4 text-primary" strokeWidth={1.75} />
                
              </div>
              <ul className="space-y-3 text-sm text-foreground/85">
                {saiceDoes.map((l) => (
                  <li key={l} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-7">
              <div className="flex items-center gap-2 mb-5">
                <Activity className="w-4 h-4 text-accent" strokeWidth={1.75} />
                
              </div>
              <ul className="space-y-3 text-sm text-foreground/85">
                {ifssDoes.map((l) => (
                  <li key={l} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 7 — Approach */}
      <section id="approach" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              What makes our work <span className="display-italic">credible.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {approach.map(({ Icon, t, d }) => (
              <div key={t} className="blob-card bg-card p-7">
                <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-tight mb-3">{t}</h3>
                <p className="text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Leadership */}
      <section id="leadership" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Who is <span className="display-italic">accountable.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              SAICE is governed by a 7–9 person Board of Directors with a majority independent of IFSS Inc. The board's standing committees cover audit and risk, programmes and impact, data and AI ethics, GEDSI and safeguarding, and nominations. Our day-to-day leadership team runs from Toronto, Kigali, Kitui, and Lomé.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 mb-8">
            {seats.map((seat) => (
              <div key={seat} className="rounded-2xl border border-foreground/10 bg-card p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-1.5">
                  Board seat
                </p>
                <p className="font-serif text-base font-semibold text-foreground">{seat}</p>
                <p className="text-[11px] text-foreground/55 mt-0.5">Open — recruiting</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-card border border-foreground/10 p-6 mb-8">
            
            <div className="flex flex-wrap gap-2">
              {committees.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-background border border-foreground/10 text-sm font-medium text-foreground/85"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/governance"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
            >
              Read our governance policies <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link
              href="/get-involved/partner"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
            >
              Nominate a board candidate
            </Link>
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <section id="experts" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Our <span className="display-italic">experts.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              The specialists who turn the charity's research into engagements — drawn from universities, research centres and country partners across Canada, Africa, Europe and Asia.
            </p>
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

      {/* 9 — History */}
      <section id="history" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Where we have <span className="display-italic">been.</span>
            </h2>
          </div>

          <ol className="relative border-l-2 border-foreground/10 pl-8 space-y-8 max-w-3xl">
            {timeline.map((m, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
                
                <p className="text-foreground/80 leading-relaxed">{m.t}</p>
              </li>
            ))}
          </ol>

          <p className="text-xs text-foreground/55 italic mt-8 max-w-3xl">
            Milestones with dates "TBC" will be updated as soon as we confirm them publicly.
          </p>
        </div>
      </section>

      {/* 10 — Partners */}
      <section id="partners" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Who we <span className="display-italic">work with.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              We do not work alone. Every programme we run is co-owned with research and implementation partners, and every country we work in is led by a partner organisation rooted there.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {partners.map((p) => (
              <span
                key={p}
                className="inline-flex items-center px-4 py-2.5 rounded-full bg-background border border-foreground/10 text-sm font-medium text-foreground/85"
              >
                {p}
              </span>
            ))}
          </div>

          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
          >
            Meet our partners <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* 11 — Confidentiality */}
      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="blob-card bg-card p-8 md:p-12 flex flex-col md:flex-row gap-8 max-w-5xl">
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-accent" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              
              <h3 className="font-serif text-3xl font-semibold tracking-tight mb-4">
                Confidentiality is <span className="display-italic">non-negotiable.</span>
              </h3>
              <p className="text-foreground/75 leading-relaxed mb-5 text-lg">
                We routinely handle commercially sensitive information from cooperatives, start-ups, ministries and donors. Our staff and contractors sign non-disclosure agreements. We comply with PIPEDA in Canada, Rwanda Law 058/2021, and Kenya's Data Protection Act 2019. Where the law of a partner country is silent, we apply the stricter standard.
              </p>
              <Link
                href="/legal/confidentiality"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
              >
                Read our confidentiality policy <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12 — Work with us */}
      <section className="py-14 md:py-16 bg-primary text-primary-foreground">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Three ways to{" "}
              <span className="font-serif italic font-light text-accent">get involved.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                Icon: HeartHandshake,
                t: "Donate to SAICE",
                d: "A tax-receipted Canadian charity. Your gift goes to programmes, not overheads.",
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
                Icon: Briefcase,
                t: "Join the team",
                d: "Open roles across Canada and our pilot countries.",
                cta: "See careers",
                href: "/get-involved",
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

          <div className="mt-12 text-sm text-primary-foreground/65 max-w-3xl border-primary-foreground/15 pt-6">
            <MapPinned className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" strokeWidth={2} />
            Toronto, Ontario · Kigali · Kitui · Lomé &nbsp;·&nbsp; contact@saice.org · contact@ifssgoal.org
          </div>
        </div>
      </section>
    </div>
  );
}
