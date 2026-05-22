import { useEffect } from "react";
import { Link } from "wouter";
import {
  Leaf,
  Users,
  Globe2,
  CheckCircle2,
  ChevronRight,
  FileText,
  Activity,
  ShieldCheck,
  Sparkles,
  MapPinned,
  Lock,
  Scale,
  Calendar,
  Coins,
  Stamp,
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

  const separation = [
    { Icon: Coins, t: "Separate books and accounts", d: "Grant money cannot subsidise commercial work. Each entity keeps its own bank accounts, staff and financials." },
    { Icon: FileText, t: "Formal inter-entity contracts", d: "Asset transfer, IP licence, services agreement and trademark licence — all signed before operations begin." },
    { Icon: Scale, t: "Majority-independent board", d: "SAICE allows only up to two IFSS-linked directors. The rest are independent — donor-grade governance from day one." },
    { Icon: Stamp, t: "All fundraising in SAICE's name", d: "Donor relationships, receipts and grant agreements sit with the charity only — never the commercial arm." },
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
      <PageHero
        eyebrow="About us"
        title="One organisation. Two arms."
        italic="One mission."
        description="We are SAICE — a Canadian registered charity — and IFSS Inc., our taxable operating subsidiary. The charity holds the mission, the tools and the grants. The for-profit delivers paid services, takes on enterprise contracts, and channels revenue back into the mission. Together we do what neither could do alone."
        crumbs={[{ label: "About" }]}
        image={aboutHero}
        imageAlt="Leadership and field staff meeting with cooperative partners"
      />

      {/* Sticky in-page quick-link strip */}
      <nav
        aria-label="On this page"
        className="sticky top-20 z-30 bg-background/90 backdrop-blur border-y border-foreground/10"
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
      <section id="story" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
                Our story
              </p>
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
      <section id="mission" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              What we stand for
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Mission, vision, <span className="display-italic">values.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="blob-card bg-card p-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-accent" strokeWidth={2} />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Mission</p>
              </div>
              <p className="font-serif text-xl text-foreground/85 leading-relaxed">
                To build, deploy and steward open digital public goods that help African agri-SMEs, cooperatives and circular-economy organisations earn more, decide better, and resist climate and market shocks — with women, youth, ex-combatants and people with disabilities centred in everything we do.
              </p>
            </div>
            <div className="blob-card bg-card p-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-accent" strokeWidth={2} />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Vision</p>
              </div>
              <p className="font-serif text-xl text-foreground/85 leading-relaxed">
                A Great Lakes Region — and a wider African food and waste system — in which every small business can access the data, the finance and the markets it needs to grow on its own terms.
              </p>
            </div>
          </div>

          <div className="blob-card bg-card p-8 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-6">
              Values
            </p>
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
      <section className="py-20 md:py-24">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Our mandate
            </p>
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
      <section className="py-20 md:py-24 bg-card/40">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Our scope
            </p>
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
      <section id="programs" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Two programs, one digital backbone
            </p>
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-2">{eyebrow}</p>
                <h3 className="font-serif text-3xl font-semibold text-foreground tracking-tight mb-2">{title}</h3>
                <p className="font-serif italic text-accent text-lg mb-5">{lead}</p>
                <p className="text-foreground/75 leading-relaxed mb-7">{body}</p>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-foreground/10">
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
      <section id="structure" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              How we are structured
            </p>
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
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  SAICE · the charity, on top
                </span>
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
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  IFSS Inc. · the operating arm
                </span>
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

          {/* How we stay separate */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-5">
              How we stay separate and legal
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {separation.map(({ Icon, t, d }) => (
                <div key={t} className="p-5 border border-foreground/10 rounded-2xl bg-background">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-serif font-semibold text-foreground mb-1">{t}</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Approach */}
      <section id="approach" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Our approach
            </p>
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
      <section id="leadership" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Leadership and governance
            </p>
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">
              Five standing committees
            </p>
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

      {/* 9 — History */}
      <section id="history" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              History and milestones
            </p>
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-1.5">
                  {m.d}
                </p>
                <p className="text-foreground/80 leading-relaxed">{m.t}</p>
              </li>
            ))}
          </ol>

          <p className="text-xs text-foreground/55 italic mt-8 max-w-3xl">
            Milestones with dates "TBC" will be updated as soon as we confirm them publicly.
          </p>

          <div className="mt-10 rounded-2xl bg-card border border-foreground/10 p-6 flex flex-col md:flex-row items-start gap-5 max-w-3xl">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-1">
                Where we are today · May 2026
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Counsel engaged, name reserved, founding board composition agreed. Incorporation paperwork is in preparation; CRA application targeted for Q3 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — Partners */}
      <section id="partners" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-5">
              Partners and recognition
            </p>
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
      <section className="py-20 md:py-24">
        <div className="container px-4 lg:px-6">
          <div className="blob-card bg-card p-8 md:p-12 flex flex-col md:flex-row gap-8 max-w-5xl">
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-accent" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">
                Confidentiality and trust
              </p>
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
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/70 mb-5">
              Work with us
            </p>
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
                <div className="flex items-center justify-between pt-5 border-t border-primary-foreground/15">
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

          <div className="mt-12 text-sm text-primary-foreground/65 max-w-3xl border-t border-primary-foreground/15 pt-6">
            <MapPinned className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" strokeWidth={2} />
            Toronto, Ontario · Kigali · Kitui · Lomé &nbsp;·&nbsp; contact@saice.org · contact@ifssgoal.org
          </div>
        </div>
      </section>
    </div>
  );
}
