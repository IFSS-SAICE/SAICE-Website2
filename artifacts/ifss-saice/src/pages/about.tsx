import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf, Users, Globe2, Building2, CheckCircle2, ChevronRight, FileText, Activity,
  Award, ShieldCheck, Sparkles, Receipt, UserPlus, MapPinned, Lock, Scale,
  Calendar, Gavel, Coins, Stamp, Briefcase, Shield, Laptop, ArrowRight,
  Recycle, HeartHandshake, Handshake, Compass, BookOpen, Heart,
} from "lucide-react";
import aboutHero from "@/assets/images/about-hero.png";
import { PageHero } from "@/components/PageHero";

const subTitles: Record<string, { title: string; italic?: string; eyebrow: string; description: string }> = {
  "who-we-are": { eyebrow: "About us", title: "One organisation. Two arms.", italic: "One mission.", description: "We are SAICE — a Canadian registered charity — and IFSS Inc., our taxable operating subsidiary. The charity holds the mission, the tools and the grants. The for-profit delivers paid services, takes on enterprise contracts, and channels revenue back into the mission. Together we do what neither could do alone." },
  "structure": { eyebrow: "Our model", title: "How we are", italic: "structured", description: "A two-entity Mozilla-style structure: SAICE owns the mission, IFSS Inc. delivers the work." },
  "why-this-matters": { eyebrow: "Why it works", title: "Why this structure", italic: "matters", description: "Donor-grade governance with the agility of a tech company — and a clean firewall between the two." },
  "roadmap": { eyebrow: "Launching 2026", title: "Our 9-month launch", italic: "roadmap", description: "From plan to public launch — the milestones and dependencies between today and our first donor cycle." },
  "setup-funding": { eyebrow: "Year-one ask", title: "Year-one set-up", italic: "funding", description: "What it takes to stand up a donor-grade charity from day one — and where every Canadian dollar goes." },
  "mission": { eyebrow: "Foundations", title: "Mission, vision,", italic: "values", description: "What we believe, what we are here to do, and the principles that hold us to it." },
  "approach": { eyebrow: "How we work", title: "Our", italic: "approach", description: "Community-anchored, evidence-led, locally owned — the operating principles that shape every program." },
  "leadership": { eyebrow: "The team", title: "Leadership &", italic: "governance", description: "The people behind SAICE and IFSS Inc., and the boards keeping us accountable." },
  "history": { eyebrow: "Where we come from", title: "History &", italic: "milestones", description: "From IFSS Inc.'s 2023 founding to today — the moments that shaped where we are now." },
};

export default function AboutRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub || "who-we-are";

  useEffect(() => {
    document.title = sub === "who-we-are"
      ? "About SAICE & IFSS — Who we are, how we are structured, what we stand for"
      : `About — ${sub.replace(/-/g, " ")} | SAICE / IFSS Inc.`;
  }, [sub]);

  const meta = subTitles[sub] || subTitles["who-we-are"];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.title}
        italic={meta.italic}
        description={meta.description}
        crumbs={[{ label: "About", href: "/about" }, ...(sub !== "who-we-are" ? [{ label: meta.title + (meta.italic ? " " + meta.italic : "") }] : [])]}
        image={sub === "who-we-are" ? aboutHero : undefined}
        imageAlt={sub === "who-we-are" ? "Cooperative team meeting in Africa" : undefined}
      />

      <div className="container px-4 pb-20 flex flex-col md:flex-row gap-10">
        {/* Sidebar Nav */}
        <aside className="md:w-1/4 flex-shrink-0">
          <nav className="sticky top-24 space-y-1">
            {[
              { path: "who-we-are", label: "Who we are" },
              { path: "structure", label: "How we are structured" },
              { path: "why-this-matters", label: "Why this structure matters" },
              { path: "roadmap", label: "9-month launch roadmap" },
              { path: "setup-funding", label: "Year-one set-up funding" },
              { path: "mission", label: "Mission, vision, values" },
              { path: "approach", label: "Our approach" },
              { path: "leadership", label: "Leadership & governance" },
              { path: "history", label: "History & milestones" },
            ].map((item) => (
              <Link 
                key={item.path} 
                href={`/about/${item.path === 'who-we-are' ? '' : item.path}`}
                className={`flex items-center justify-between px-4 py-2.5 rounded-full transition-colors text-sm ${
                  sub === item.path 
                    ? "bg-foreground text-background font-semibold" 
                    : "hover:bg-card text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
                {sub === item.path && <ChevronRight className="w-3.5 h-3.5" />}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="md:w-3/4 max-w-3xl">
          {sub === "who-we-are" && <WhoWeAre />}
          {sub === "structure" && <Structure />}
          {sub === "why-this-matters" && <WhyThisMatters />}
          {sub === "roadmap" && <Roadmap />}
          {sub === "setup-funding" && <SetupFunding />}
          {sub === "mission" && <Mission />}
          {sub === "approach" && <Approach />}
          {sub === "leadership" && <Leadership />}
          {sub === "history" && <History />}
        </main>
      </div>
    </div>
  );
}

function WhoWeAre() {
  const quickLinks = [
    { href: "/about/structure", label: "How we are structured" },
    { href: "/about/mission", label: "Mission & values" },
    { href: "/about/approach", label: "Our approach" },
    { href: "/about/leadership", label: "Leadership" },
    { href: "/about/history", label: "History" },
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
      body: "Three connected tools: Smart Market Matchmaker, IoT Precision Insight Engine, ERP Finance & Inventory Tracker. Active in Rwanda and Kenya, scaling to Burundi and DRC.",
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

  const timeline = [
    { d: "Pre-2025", t: "IFSS Inc. founded in Canada to deliver technical assistance — ESG, agri value-chain, M&E, digital transformation and proposal development across Canada, the US, Kenya, Rwanda, Uganda, Burundi." },
    { d: "2025–2026", t: "McGill MMA capstone with IFSS produces the GIAH precision-agriculture platform, piloted with Rwandan cooperatives." },
    { d: "2026", t: "SAICE / SAIEC founded as the Canadian registered-charity parent. Federal incorporation; board seated; CRA charity application filed." },
    { d: "2026–2027", t: "Foreign-NGO registration in Rwanda and Kenya; PAGES expansion design." },
    { d: "2027", t: "Public launch and first major institutional grant proposals." },
    { d: "2027–2029", t: "PAGES and ICES three-year programme cycle." },
  ];

  const partners = ["McGill University", "RCID-Rwanda", "SEKU", "Terre des Jeunes Togo", "Ripen", "ICGLR", "AUDA-NEPAD"];

  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Quick-link strip */}
      <nav aria-label="On this page" className="flex flex-wrap gap-2 -mt-2">
        {quickLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card border border-foreground/10 text-xs font-semibold text-foreground/75 hover:text-foreground hover:border-foreground/25 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Our story */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Our story</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          From a Canadian consultancy to a regional <span className="display-italic">digital-public-goods organisation.</span>
        </h2>
        <p className="text-foreground/75 leading-relaxed">
          IFSS — Invest for Solidarity and Sustainable Development — was founded in Canada to put research-grade technical assistance within reach of small businesses, public institutions and development partners in Africa, North America, and Europe. For more than a decade, IFSS has supported governments, cooperatives, start-ups and UN agencies on ESG, agricultural value chains, monitoring and evaluation, digital transformation, and proposal development.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          In 2025–2026, IFSS partnered with McGill University's Master of Management in Analytics (MMA) on the GIAH capstone — a precision-agriculture and market-matching digital platform piloted with cooperatives in Rwanda. The pilot worked. It also showed us, clearly, that the next phase needed two things the current structure could not deliver: access to charitable grant capital, and a governance model built for digital public goods.
        </p>
        <p className="text-foreground/75 leading-relaxed">
          So in 2026 we created <strong className="text-foreground">SAICE</strong> — Solidarity for Agri-Intelligence and Circular Economy — a Canadian registered charity that now sits as the parent of IFSS Inc. SAICE holds the brand, the code, the data, and the grants. IFSS Inc. remains the operating arm, taking on consulting, enterprise SaaS, and impact-investor capital. Two flagship programs — PAGES and ICES — give the mission concrete shape across six countries.
        </p>
      </section>

      {/* Mission, vision, values */}
      <section className="space-y-8" id="mission">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent mb-3">What we stand for</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Mission, vision, <span className="display-italic">values.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="blob-card bg-card p-7">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-accent" strokeWidth={2} />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Mission</p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              To build, deploy and steward open digital public goods that help African agri-SMEs, cooperatives and circular-economy organisations earn more, decide better, and resist climate and market shocks — with women, youth, ex-combatants and people with disabilities centred in everything we do.
            </p>
          </div>
          <div className="blob-card bg-card p-7">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-accent" strokeWidth={2} />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Vision</p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              A Great Lakes Region — and a wider African food and waste system — in which every small business can access the data, the finance and the markets it needs to grow on its own terms.
            </p>
          </div>
        </div>

        <div className="blob-card bg-card p-7 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-5">Values</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {values.map((v) => (
              <div key={v.t} className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="font-serif font-semibold text-foreground">{v.t}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mt-0.5">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandate */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Our mandate</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          Our mandate, <span className="display-italic">simply put.</span>
        </h2>
        <ul className="space-y-4">
          {mandate.map((m, i) => (
            <li key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-foreground/10">
              <span className="font-serif text-2xl font-semibold text-accent leading-none flex-shrink-0 w-8">
                0{i + 1}
              </span>
              <p className="text-foreground/80 leading-relaxed">{m}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Scope */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Our scope</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          Where we work and <span className="display-italic">who we serve.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="blob-card bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <Globe2 className="w-4 h-4 text-accent" strokeWidth={2} />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Countries today</p>
            </div>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Canada (HQ) · Rwanda · Kenya · Burundi · Democratic Republic of Congo · Togo. Expanding from there as our programmes scale.
            </p>
          </div>
          <div className="blob-card bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-accent" strokeWidth={2} />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Who we serve</p>
            </div>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Small and medium agri-businesses, cooperatives, women's and youth enterprises, BDS providers, municipalities, government ministries, and the academic and research community.
            </p>
          </div>
          <div className="blob-card bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-accent" strokeWidth={2} />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Languages</p>
            </div>
            <p className="text-sm text-foreground/75 leading-relaxed">
              English and French today. Kinyarwanda joins at platform launch. Kirundi and Swahili follow in phase 2. Local-language UX is not optional — it is a precondition for adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship programs */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Two programs, one digital backbone</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          Our two <span className="display-italic">flagship programs.</span>
        </h2>
        <p className="text-foreground/75 leading-relaxed">
          PAGES focuses on precision agriculture and market access for small farms and cooperatives. ICES focuses on circular economy — turning waste streams into livelihoods and verified climate finance. The two share a single digital backbone, a single ethics policy, and a single accountability framework to the people we serve.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mt-2">
          {programs.map(({ Icon, eyebrow, title, lead, body, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group blob-card bg-card p-7 flex flex-col hover:bg-card/70 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-2">{eyebrow}</p>
              <h3 className="font-serif text-2xl font-semibold text-foreground tracking-tight mb-1">{title}</h3>
              <p className="font-serif italic text-foreground/70 mb-4">{lead}</p>
              <p className="text-sm text-foreground/75 leading-relaxed mb-6">{body}</p>
              <div className="mt-auto flex items-center justify-between pt-5 border-t border-foreground/10">
                <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{cta}</span>
                <span className="circle-arrow-sm"><ArrowRight className="w-4 h-4" strokeWidth={2} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How we are structured (summary) */}
      <section className="space-y-6" id="structure">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">How we are structured</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          How SAICE and IFSS Inc. <span className="display-italic">fit together.</span>
        </h2>
        <p className="text-foreground/75 leading-relaxed">
          SAICE is the parent — a Canadian registered charity, federally incorporated under the Canada Not-for-profit Corporations Act and on the path to charitable registration with the Canada Revenue Agency. IFSS Inc. is its operating subsidiary — a Canadian taxable corporation that delivers paid services and enterprise software, and channels revenue back to SAICE under a published licence and revenue-share. The same structure used by Mozilla, Wikimedia, Digital Green, and One Acre Fund.
        </p>

        {/* Diagram */}
        <div
          className="p-7 md:p-9 bg-card rounded-3xl border border-foreground/10 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6 text-center"
          title="SAICE is the parent charity. IFSS Inc. is the operating subsidiary. Both are Canadian-registered, but only SAICE can issue donation receipts."
        >
          <div className="bg-background p-5 rounded-2xl border border-foreground/10 w-full max-w-xs relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">Parent · Charity</div>
            <Leaf className="w-8 h-8 text-primary mx-auto mb-2 mt-2" strokeWidth={1.5} />
            <h3 className="font-serif font-semibold text-lg">SAICE</h3>
            <p className="text-xs text-foreground/65 mt-1">Brand · code · data · grants · programmes</p>
          </div>
          <div className="flex flex-col items-center text-foreground/55 gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest">controls + licences to</span>
            <div className="flex md:flex-row flex-col">
              <ChevronRight className="w-4 h-4 md:rotate-0 rotate-90 -mr-1.5" />
              <ChevronRight className="w-4 h-4 md:rotate-0 rotate-90 -mr-1.5" />
              <ChevronRight className="w-4 h-4 md:rotate-0 rotate-90" />
            </div>
          </div>
          <div className="bg-background p-5 rounded-2xl border border-foreground/10 w-full max-w-xs relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">Subsidiary · Commercial</div>
            <Activity className="w-8 h-8 text-accent mx-auto mb-2 mt-2" strokeWidth={1.5} />
            <h3 className="font-serif font-semibold text-lg">IFSS Inc.</h3>
            <p className="text-xs text-foreground/65 mt-1">Consulting · SaaS · enterprise · impact capital</p>
          </div>
        </div>

        {/* Who does what */}
        <div className="grid md:grid-cols-2 gap-5 mt-2">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-4 h-4 text-primary" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">SAICE · the charity, on top</span>
            </div>
            <ul className="space-y-2.5 text-sm text-foreground/85">
              {[
                "Mission and strategy",
                "Grant fundraising and donor relationships",
                "Programmes — PAGES and ICES",
                "Holds the brand, code, data, IP",
                "MEAL, GEDSI, safeguarding, AI ethics",
                "Country offices and partnerships",
                "Reports to donors and the public",
              ].map((l) => (
                <li key={l} className="flex gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-accent" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">IFSS Inc. · the operating arm</span>
            </div>
            <ul className="space-y-2.5 text-sm text-foreground/85">
              {[
                "Consulting and technical assistance",
                "Paid SaaS / enterprise licences of PAGES and ICES tools",
                "Transaction and marketplace services",
                "Takes impact-investor capital and commercial contracts",
                "Pays a revenue share back to SAICE under a published licence",
                "Operates at arm's length, with independent accounts and staff",
                "Reports to SAICE under the related-party policy",
              ].map((l) => (
                <li key={l} className="flex gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/about/structure" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4 mt-2">
          Read the full structure page <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>

      {/* Our approach */}
      <section className="space-y-6" id="approach">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Our approach</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          What makes our work <span className="display-italic">credible.</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {approach.map(({ Icon, t, d }) => (
            <div key={t} className="blob-card bg-card p-6">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-lg font-semibold tracking-tight mb-1.5">{t}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <Link href="/about/approach" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
          Read our approach in full <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>

      {/* Leadership */}
      <section className="space-y-6" id="leadership">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Leadership and governance</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          Who is <span className="display-italic">accountable.</span>
        </h2>
        <p className="text-foreground/75 leading-relaxed">
          SAICE is governed by a 7–9 person Board of Directors with a majority independent of IFSS Inc. The board's standing committees cover audit and risk, programmes and impact, data and AI ethics, GEDSI and safeguarding, and nominations. Our day-to-day leadership team runs from Toronto, Kigali, Kitui, and Lomé.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "Chair",
            "Vice-Chair",
            "Treasurer",
            "Secretary",
            "IFSS-nominated seat",
            "McGill seat",
            "Rwanda seat (RCID)",
            "Kenya seat (SEKU)",
            "At-large",
          ].map((seat) => (
            <div key={seat} className="rounded-2xl border border-foreground/10 bg-card p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-1">Board seat</p>
              <p className="font-serif text-sm font-semibold text-foreground">{seat}</p>
              <p className="text-[11px] text-foreground/55 mt-0.5">Open — recruiting</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-card border border-foreground/10 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">Five standing committees</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Audit & Risk",
              "Programs & Impact",
              "Data, AI & Ethics",
              "GEDSI & Safeguarding",
              "Nominating & Governance",
            ].map((c) => (
              <span key={c} className="inline-flex items-center px-3 py-1.5 rounded-full bg-background border border-foreground/10 text-xs font-medium text-foreground/80">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/about/leadership" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
            Meet the leadership team <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
          <Link href="/governance" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
            Read our governance policies
          </Link>
        </div>
      </section>

      {/* History */}
      <section className="space-y-6" id="history">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">History and milestones</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          Where we have <span className="display-italic">been.</span>
        </h2>
        <ol className="relative border-l-2 border-foreground/10 pl-6 space-y-6 ml-2">
          {timeline.map((m, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-accent" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-1">{m.d}</p>
              <p className="text-foreground/80 leading-relaxed">{m.t}</p>
            </li>
          ))}
        </ol>
        <p className="text-xs text-foreground/55 italic">Milestones with dates "TBC" will be updated as soon as we confirm them publicly.</p>
      </section>

      {/* Partners */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Partners and recognition</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          Who we <span className="display-italic">work with.</span>
        </h2>
        <p className="text-foreground/75 leading-relaxed">
          We do not work alone. Every programme we run is co-owned with research and implementation partners, and every country we work in is led by a partner organisation rooted there.
        </p>
        <div className="flex flex-wrap gap-2">
          {partners.map((p) => (
            <span key={p} className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-foreground/10 text-sm font-medium text-foreground/80">
              {p}
            </span>
          ))}
        </div>
        <Link href="/partners" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
          Meet our partners <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </section>

      {/* Confidentiality */}
      <section className="space-y-4">
        <div className="blob-card bg-card p-7 md:p-8 flex flex-col md:flex-row gap-6">
          <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
            <Lock className="w-5 h-5 text-accent" strokeWidth={1.75} />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-2">Confidentiality and trust</p>
            <h3 className="font-serif text-2xl font-semibold tracking-tight mb-3">Confidentiality is non-negotiable.</h3>
            <p className="text-foreground/75 leading-relaxed mb-4">
              We routinely handle commercially sensitive information from cooperatives, start-ups, ministries and donors. Our staff and contractors sign non-disclosure agreements. We comply with PIPEDA in Canada, Rwanda Law 058/2021, and Kenya's Data Protection Act 2019. Where the law of a partner country is silent, we apply the stricter standard.
            </p>
            <Link href="/legal/confidentiality" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4">
              Read our confidentiality policy <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Work with us — CTA band */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Work with us</p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
          Three ways to <span className="display-italic">get involved.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { Icon: HeartHandshake, t: "Donate to SAICE", d: "A tax-receipted Canadian charity. Your gift goes to programmes, not overheads.", cta: "Donate now", href: "/get-involved/donate" },
            { Icon: Handshake, t: "Partner with us", d: "Universities, ministries, cooperatives, donors, technology providers — let's design what's next.", cta: "Start a conversation", href: "/get-involved/partner" },
            { Icon: Briefcase, t: "Join the team", d: "Open roles across Canada and our pilot countries.", cta: "See careers", href: "/get-involved" },
          ].map(({ Icon, t, d, cta, href }) => (
            <Link key={t} href={href} className="group blob-card bg-card p-6 flex flex-col hover:bg-card/70 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed mb-5 flex-1">{d}</p>
              <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{cta}</span>
                <span className="circle-arrow-sm"><ArrowRight className="w-4 h-4" strokeWidth={2} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Structure() {
  const saiceDoes = [
    "Hold the PAGES and ICES brand, code, data and tools",
    "Raise grants and manage donor relationships",
    "Run the programs — training, BDS, cooperatives, policy work",
    "Own the rules: data privacy, AI ethics, GEDSI, conflict sensitivity, safeguarding (PSEAH)",
    "Own the measurement — MEAL, impact reports, external evaluations",
    "Register as a foreign NGO in Rwanda and Kenya",
  ];
  const ifssDoes = [
    "Sell the paid / enterprise version of PAGES and ICES tools to large buyers (exporters, banks, governments)",
    "Do consulting and implementation work for hire",
    "Take impact-investor capital (charities cannot)",
    "Handle commercial contracts with input suppliers, telcos and insurers",
    "Pay a royalty back to SAICE from its revenue",
  ];
  const separation = [
    { icon: Coins, t: "Separate books and accounts", d: "Grant money cannot subsidise commercial work. Each entity keeps its own bank accounts, staff and financials." },
    { icon: FileText, t: "Formal inter-entity contracts", d: "Asset transfer, IP licence, services agreement and trademark licence — all signed before operations begin." },
    { icon: Scale, t: "Majority-independent board", d: "SAICE allows only up to 2 IFSS-linked directors. The rest are independent — donor-grade governance from day one." },
    { icon: Stamp, t: "All fundraising in SAICE's name", d: "Donor relationships, receipts and grant agreements sit with the charity only — never the commercial arm." },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">The model</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.1]">How we are structured</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
          SAICE is the mission-owning <strong className="text-foreground">parent charity</strong>. IFSS Inc. is the commercial <strong className="text-foreground">subsidiary</strong> below it. Same structural model as Mozilla Foundation and Mozilla Corporation.
        </p>
      </div>

      {/* Structure Diagram */}
      <div className="p-8 md:p-10 bg-muted/40 rounded-2xl border border-foreground/10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center">
        <div className="bg-card p-6 rounded-xl border border-foreground/10 w-full max-w-xs relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">Parent · Charity</div>
          <Leaf className="w-9 h-9 text-primary mx-auto mb-3 mt-2" strokeWidth={1.5} />
          <h3 className="font-serif font-semibold text-xl">SAICE</h3>
          <p className="text-xs text-muted-foreground mt-1">Registered Charity (pending)</p>
          <ul className="text-sm mt-4 space-y-1.5 text-muted-foreground">
            <li>Owns mission & brand</li>
            <li>Holds IP & programs</li>
            <li>Raises grants</li>
          </ul>
        </div>

        <div className="hidden md:flex flex-col items-center text-muted-foreground gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest">Licence + services + royalty</span>
          <div className="flex">
            <ChevronRight className="w-5 h-5 -mr-2" />
            <ChevronRight className="w-5 h-5 -mr-2" />
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-foreground/10 w-full max-w-xs relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-wider">Subsidiary · Commercial</div>
          <Activity className="w-9 h-9 text-accent mx-auto mb-3 mt-2" strokeWidth={1.5} />
          <h3 className="font-serif font-semibold text-xl">IFSS Inc.</h3>
          <p className="text-xs text-muted-foreground mt-1">Canadian Social Enterprise · 2023</p>
          <ul className="text-sm mt-4 space-y-1.5 text-muted-foreground">
            <li>SaaS & tech delivery</li>
            <li>Consulting services</li>
            <li>Enterprise contracts</li>
          </ul>
        </div>
      </div>

      {/* Why this structure */}
      <section className="space-y-4 pt-4">
        <h3 className="font-serif text-2xl font-semibold">Why this structure</h3>
        <p className="text-muted-foreground leading-relaxed">
          Most major funders — Gates Foundation, Mastercard Foundation, Global Affairs Canada, IDRC, the EU, Rockefeller — only give money to registered charities. IFSS Inc. by itself cannot receive these grants.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          A registered charity can also issue Canadian donation receipts and access charitable capital; a normal non-profit or a hybrid "C3" cannot.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Critically, the charity must be the <strong className="text-foreground">parent</strong> of IFSS Inc., not a subsidiary of it — otherwise the Canada Revenue Agency will refuse or revoke charity status.
        </p>
        <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mt-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Named precedent</p>
          <p className="text-foreground">
            This is the same shape used by <strong>Mozilla Foundation</strong> (non-profit) and <strong>Mozilla Corporation</strong> (its for-profit product company). Other comparable models: Wikimedia, Digital Green, One Acre Fund.
          </p>
        </div>
      </section>

      {/* What goes where */}
      <section className="space-y-6">
        <h3 className="font-serif text-2xl font-semibold">What SAICE does · What IFSS Inc. does</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-primary/20 rounded-xl p-6 bg-primary/[0.03]">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">SAICE · Charity, on top</span>
            </div>
            <ul className="space-y-3">
              {saiceDoes.map((line, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-accent/20 rounded-xl p-6 bg-accent/[0.03]">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-accent" strokeWidth={1.5} />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">IFSS Inc. · Business arm, below</span>
            </div>
            <ul className="space-y-3">
              {ifssDoes.map((line, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/90 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we stay separate */}
      <section className="space-y-6">
        <h3 className="font-serif text-2xl font-semibold">How we stay separate and legal</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {separation.map(({ icon: Icon, t, d }, i) => (
            <div key={i} className="p-5 border border-foreground/10 rounded-xl bg-card">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-semibold tracking-tight text-foreground mb-1">{t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <blockquote className="border-l-4 border-accent pl-6 py-2 my-8">
        <p className="font-serif text-2xl md:text-[1.7rem] leading-snug text-foreground italic">
          "SAICE is the mission-owning parent that holds the tools and gets the grants; IFSS Inc. is the commercial arm below it that sells services and keeps the lights on — together they do what neither could do alone."
        </p>
      </blockquote>

      <div className="flex flex-wrap gap-4 pt-2">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/about/why-this-matters">Why this structure matters <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/about/roadmap">View our 9-month roadmap</Link>
        </Button>
      </div>
    </div>
  );
}

function WhyThisMatters() {
  const benefits = [
    { icon: Coins, t: "Unlocks grant funding IFSS Inc. cannot currently reach", d: "Gates, GAC, IDRC, EU, Mastercard Foundation and Rockefeller only fund registered charities. The SAICE parent makes that capital accessible for the first time." },
    { icon: Briefcase, t: "Keeps IFSS Inc. commercially free", d: "The subsidiary stays nimble for consulting, enterprise SaaS and impact-investor capital — instruments a registered charity cannot use." },
    { icon: ShieldCheck, t: "Protects the PAGES and ICES tools", d: "Mission-locked IP held by the charity. Even if IFSS Inc. is ever sold or restructured, the tools stay with the charity for beneficiaries." },
    { icon: Award, t: "Donor-grade governance from day one", d: "Majority-independent board, five committees, related-party policy, audit-ready books — directly addressing what the GIAH gap analysis flagged as missing." },
    { icon: UserPlus, t: "Senior-talent attraction", d: "A clear social mission with an institutional governance backbone is easier to recruit against than a pure-commercial vehicle." },
    { icon: MapPinned, t: "Smoother foreign-NGO registration", d: "Registered charity status materially speeds up foreign-NGO recognition in Rwanda and Kenya — and the country-office stand-up that follows." },
    { icon: Receipt, t: "Tax-exempt mission revenue + donor receipts", d: "SAICE is tax-exempt on mission revenue; Canadian donors receive eligible tax receipts once CRA registration completes." },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Why this matters</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.1]">
          Why the SAICE structure unlocks what IFSS alone could not
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
          The two-entity model is not a tax trick or a re-brand. It is the only way the organisation can reach the donor capital, the governance bar, and the country-office footprint our program needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {benefits.map(({ icon: Icon, t, d }, i) => (
          <div key={i} className="p-6 border border-foreground/10 rounded-xl bg-card hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif font-semibold tracking-tight text-foreground mb-1.5 leading-snug">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="border-l-4 border-accent pl-6 py-3 my-4">
        <p className="font-serif text-2xl md:text-[1.7rem] leading-snug text-foreground italic">
          "SAICE is the mission-owning parent that holds the tools and gets the grants; IFSS Inc. is the commercial arm below it that sells services and keeps the lights on — together they do what neither could do alone."
        </p>
      </blockquote>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl font-semibold mb-2">Help us stand it up.</h3>
          <p className="text-muted-foreground">Become a partner or contribute to our year-one launch budget.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/get-involved/partner">Become a partner</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/get-involved/donate">Donate to launch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Roadmap() {
  const months = [
    { m: "Month 1", t: "Name, trademarks, counsel", d: "Agree the final name, reserve trademarks in Canada, hire a specialist charity lawyer." },
    { m: "Month 2", t: "Incorporate and seat the board", d: "Federal incorporation of SAICE. Seat the initial 7–9 person board with majority-independent composition." },
    { m: "Month 3", t: "File CRA application", d: "Submit the registered-charity application to the Canada Revenue Agency. Open the operating bank account." },
    { m: "Month 4", t: "Sign inter-entity agreements", d: "Asset-transfer, IP licence, services agreement and trademark licence between SAICE and IFSS Inc. — all executed and on file." },
    { m: "Month 5", t: "Foreign-NGO registration begins", d: "File foreign-NGO registration in Rwanda and Kenya. Hire the first four executive roles (ED, Director of Programs, Director of MEAL, Head of Data/AI/Ethics)." },
    { m: "Month 6", t: "CRA approval; committees stand up", d: "Charitable status confirmed (typical 3–6 months). The five board committees begin operating: Audit & Risk, Programs & Impact, Data/AI/Ethics, GEDSI & Safeguarding, Nominating." },
    { m: "Month 7", t: "Public launch + first grant", d: "Public launch of SAICE. First major institutional grant application submitted to GAC or IDRC." },
    { m: "Month 9", t: "Country office live + second proposal", d: "First country office opens in Rwanda. Second grant proposal goes out the door." },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Launching 2026</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.1]">
          From plan to public launch — our 9-month roadmap
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
          SAICE is being stood up over a structured nine-month launch period that takes us from incorporation to first grant proposal and country-office launch.
        </p>
      </div>

      <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
          <Calendar className="w-5 h-5 text-accent" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">Where we are today · May 2026</p>
          <p className="text-foreground leading-relaxed">
            Counsel engaged, name reserved, founding board composition agreed. Incorporation paperwork is in preparation; CRA application targeted for Q3 2026.
          </p>
        </div>
      </div>

      <div className="relative pt-2">
        <div className="absolute left-[15px] md:left-1/2 md:-ml-px top-0 bottom-0 w-px bg-foreground/15" aria-hidden />
        <div className="space-y-10">
          {months.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative md:grid md:grid-cols-2 md:gap-12">
                <div className={`absolute left-[7px] md:left-1/2 md:-ml-[7px] top-1 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary z-10`} aria-hidden />
                <div className={`pl-10 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">{item.m}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1.5 leading-snug">{item.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-4">
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/about/setup-funding">See the year-one set-up budget <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/get-involved/partner">Discuss institutional strengthening</Link>
        </Button>
      </div>
    </div>
  );
}

function SetupFunding() {
  const categories = [
    { icon: Gavel, t: "Specialist charity legal counsel", d: "Federal counsel guiding incorporation, CRA application, inter-entity contracts and trademark strategy." },
    { icon: Stamp, t: "Federal incorporation", d: "SAICE incorporated federally under the Canada Not-for-profit Corporations Act." },
    { icon: Shield, t: "Trademarks", d: "Reserved Canadian trademarks for SAICE, SAIEC, PAGES and ICES brand families." },
    { icon: MapPinned, t: "Foreign NGO registration", d: "Recognition filings and counsel in Rwanda and Kenya so country offices can stand up legally." },
    { icon: FileText, t: "First independent audit", d: "External auditor engaged for the first reporting cycle — required by all institutional funders." },
    { icon: Shield, t: "D&O and liability insurance", d: "Directors-and-officers cover plus general liability for staff, board, and field operations." },
    { icon: Laptop, t: "Website and core systems", d: "Public website, donor CRM, MEAL platform, finance and HR systems." },
    { icon: Users, t: "First four executive hires", d: "Executive Director, Director of Programs, Director of MEAL, Head of Data/AI/Ethics." },
  ];

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Year-one capacity</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.1]">
          Setting it up: the year-one ask
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
          Standing up a donor-grade charity with the systems donors expect — legal, audit, insurance, executive hires, foreign-NGO registration, technology platform — requires up-front investment before programs begin.
        </p>
      </div>

      <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">Year-one set-up · before programs</p>
        <p className="font-serif text-5xl md:text-6xl font-semibold tracking-tight leading-none">CAD 465,000 – 686,000</p>
        <p className="text-primary-foreground/80 mt-4 max-w-xl leading-relaxed">
          One-time launch capital to incorporate, secure regulatory recognition, hire the founding executive team and put audit-grade systems in place.
        </p>
      </div>

      <section>
        <h3 className="font-serif text-2xl font-semibold mb-6">What it covers</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map(({ icon: Icon, t, d }, i) => (
            <div key={i} className="p-5 border border-foreground/10 rounded-xl bg-card">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-semibold tracking-tight text-foreground mb-1 leading-snug">{t}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-serif text-2xl font-semibold mb-6">How we plan to fund it</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-6 border border-primary/20 rounded-xl bg-primary/[0.03]">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Path A</p>
            <h4 className="font-serif text-xl font-semibold mb-2">Institutional-strengthening grant</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A dedicated set-up grant from Global Affairs Canada or the Mastercard Foundation, designed for exactly this kind of organisational stand-up.
            </p>
          </div>
          <div className="p-6 border border-accent/20 rounded-xl bg-accent/[0.03]">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Path B</p>
            <h4 className="font-serif text-xl font-semibold mb-2">Set-up carve-out of the first PAGES grant</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Allocate 8–12% of the first major PAGES programme grant to organisational set-up — a standard, donor-accepted mechanism for new charities.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/get-involved/donate">Support our launch</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/get-involved/partner">Discuss institutional strengthening</Link>
        </Button>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground mb-6">Mission, Vision & Mandate</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                Stimulating responsible and sustainable growth in societies by ensuring communities, businesses, 
                and public and private actors realize innovative and inclusive businesses for sustainable economic development.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-accent flex items-center gap-2">
                <Globe2 className="w-5 h-5" /> Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                A Great Lakes Region where digital tools, circular economy and inclusive finance let farmers, 
                youth and women lead the next decade of growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-serif font-semibold tracking-tight mb-6">Our Values</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {["Solidarity", "Inclusion", "Stewardship", "Open Knowledge", "Local Ownership", "Professionalism", "Integrity & Partnership", "Results-oriented Management", "Impartiality", "Team Spirit"].map((value, i) => (
            <div key={i} className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 p-6 rounded-xl border border-primary/10">
        <h3 className="text-xl font-serif font-semibold tracking-tight mb-3 text-primary">Confidentiality Commitment</h3>
        <p className="text-muted-foreground italic">
          IFSS Inc. and SAICE commit to handling all client, partner, and beneficiary information with strict confidentiality. Data is collected, stored, and processed only for the agreed purpose, with informed consent, and never shared with third parties without explicit authorisation.
        </p>
      </section>
    </div>
  );
}

function Approach() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground">Our Approach</h2>
      
      <section className="mb-12">
        <h3 className="text-xl font-serif font-semibold tracking-tight mb-4">Five Strategic Pillars</h3>
        <div className="grid gap-4">
          {[
            { title: "Strategic partnerships", desc: "Deals, Marketing, Financing, Business Plans" },
            { title: "Development of business partnerships", desc: "Fostering local and international B2B connections" },
            { title: "Resources Mobilization", desc: "Securing funding and essential capital for projects" },
            { title: "Visibility and Advocacy (Pladoyer)", desc: "Influencing policy and raising community profiles" },
            { title: "Linkage and Inclusion", desc: "Connecting SMEs, families, and individuals from low-income backgrounds" }
          ].map((pillar, i) => (
            <div key={i} className="flex gap-4 p-4 border rounded-lg bg-card">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {i + 1}
              </div>
              <div>
                <h4 className="font-serif font-semibold tracking-tight text-foreground">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-serif font-semibold tracking-tight mb-4">Theory of Change Overview</h3>
        <div className="p-6 bg-muted rounded-xl border flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <div className="flex-1"><span className="block font-bold text-primary mb-1">Inputs</span><span className="text-xs text-muted-foreground">Resources & Tech</span></div>
          <ChevronRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
          <div className="flex-1"><span className="block font-bold text-primary mb-1">Activities & Outputs</span><span className="text-xs text-muted-foreground">Capacity & Delivery</span></div>
          <ChevronRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
          <div className="flex-1"><span className="block font-bold text-primary mb-1">Outcomes</span><span className="text-xs text-muted-foreground">Adoption & Efficiency</span></div>
          <ChevronRight className="w-5 h-5 text-muted-foreground hidden sm:block" />
          <div className="flex-1"><span className="block font-bold text-primary mb-1">Impacts</span><span className="text-xs text-muted-foreground">Resilience & Growth</span></div>
        </div>
        <div className="mt-4 text-center">
          <Link href="/programs/theory-of-change" className="text-primary hover:underline font-medium text-sm">
            View detailed combined Theory of Change &rarr;
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-serif font-semibold tracking-tight mb-4">Methodology & Standards</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-muted-foreground mb-3 uppercase tracking-wider text-xs">Methodology Principles</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Co-design with cooperatives</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Do-no-harm</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> FAIR data</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Principles for Digital Development</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> GEDSI (Gender, Equity, Disability, Social Inclusion)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Conflict sensitivity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-muted-foreground mb-3 uppercase tracking-wider text-xs">Standards We Align With</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> CAADP Kampala 2026–2035</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> AU Continental AI Strategy 2024 & Agenda 2063</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> Rwanda PSTA 5 & Kenya ASTGS</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> ICGLR</li>
              <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-primary" /> UN SDGs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Leadership() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground mb-6">Leadership and Governance</h2>
        <p className="text-lg text-muted-foreground mb-8">
          A dedicated team of experts and a structured board ensuring accountability, transparency, and impact.
        </p>

        <h3 className="text-xl font-serif font-semibold tracking-tight mb-6 border-b pb-2">Executive Team</h3>
        <div className="grid gap-6 mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Leonard Nkunzimana</CardTitle>
              <CardDescription className="font-medium text-foreground">CEO, IFSS Inc.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                International cooperation & development professional with 15+ years of experience in driving sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-serif font-semibold tracking-tight mb-6 border-b pb-2">Subject Matter Experts</h3>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {[
            { name: "Brigitte Blais", role: "Environmental communications, Sustainable Carbon Management" },
            { name: "Dr. Joseph Nzomoi", role: "Agricultural & Economic policy, International Trade, UN World Committee on Tourism Ethics member" },
            { name: "Tekalign Gutu Sakketa", role: "Development Economics (PhD), Social protection programs" },
            { name: "Bibhash Das", role: "Sustainable energy professional, Low-carbon solutions (Wind/Solar)" },
            { name: "Olivier Furaha", role: "Projects management in agri-business and public development" },
            { name: "Divine Mugisha", role: "Administration, gender equality, youth-focused innovation" }
          ].map((expert, i) => (
            <div key={i} className="flex gap-4 p-4 border rounded-xl bg-card">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-muted-foreground flex-shrink-0">
                {expert.name.split(' ').map(n => n[0]).join('').substring(0,2)}
              </div>
              <div>
                <h4 className="font-serif font-semibold tracking-tight text-foreground">{expert.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{expert.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-semibold tracking-tight mb-6 border-b pb-2">SAICE Board of Directors</h3>
        <p className="text-sm text-muted-foreground mb-6">Our 7–9 member board incorporates independent oversight alongside strategic academic and regional representation.</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["Chair", "Vice-Chair", "Treasurer", "Secretary", "IFSS-Nominated", "McGill Seat", "Rwanda Seat", "Kenya Seat", "At-large"].map((seat, i) => (
            <span key={i} className="px-3 py-1.5 bg-muted rounded-md text-xs font-medium border text-muted-foreground">
              {seat}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-serif font-semibold tracking-tight mb-4">Board Committees</h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground list-disc pl-5">
          <li>Audit & Risk</li>
          <li>Programs & Impact</li>
          <li>Data/AI/Ethics</li>
          <li>GEDSI & Safeguarding</li>
          <li>Nominating & Governance</li>
        </ul>
      </section>
    </div>
  );
}

function History() {
  const milestones = [
    { year: "2023", title: "Incorporation", desc: "IFSS Inc. federally incorporated in Quebec under Canada Business Corporations Act." },
    { year: "2024", title: "Services Expansion", desc: "Portfolio expansion encompassing ESG, Agri Value Chains, Digital Transformation, M&E, Reports & Proposals." },
    { year: "2025", title: "McGill Partnership", desc: "McGill MMA capstone partnership. 'Sustainable Horticulture in East Africa' project (Rwanda case study) concluded in July 2025." },
    { year: "Sept 2025", title: "International Engagement", desc: "International conference participation, sharing research on innovation and sustainability." },
    { year: "2025-2026", title: "Regional Pilots", desc: "GIAH pilot deployed in Rwanda, proving out our core agricultural tracking models." },
    { year: "2026", title: "Charity Launch", desc: "Launch of SAICE charity, CRA registration application, and country office rollout across the Great Lakes Region." }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground mb-8">History & Milestones</h2>
      <div className="relative border-l border-muted-foreground/20 ml-4 space-y-10 py-4">
        {milestones.map((item, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
            <span className="text-sm font-bold text-primary tracking-wider">{item.year}</span>
            <h3 className="text-xl font-serif font-semibold tracking-tight mt-1 mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
