import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf, Users, Globe2, Building2, CheckCircle2, ChevronRight, FileText, Activity,
  Award, ShieldCheck, Sparkles, Receipt, UserPlus, MapPinned, Lock, Scale,
  Calendar, Gavel, Coins, Stamp, Briefcase, Shield, Laptop, ArrowRight,
} from "lucide-react";
import aboutHero from "@/assets/images/about-hero.png";
import { PageHero } from "@/components/PageHero";

const subTitles: Record<string, { title: string; italic?: string; eyebrow: string; description: string }> = {
  "who-we-are": { eyebrow: "About SAICE / IFSS", title: "Who we", italic: "are", description: "A mission-locked Canadian charity and its social-enterprise operating arm, working alongside farmers and cooperatives across the Great Lakes Region." },
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
    document.title = `About - ${sub.replace(/-/g, ' ')} | SAICE / IFSS Inc.`;
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
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        IFSS Inc. was founded in 2023 in Quebec as a Canadian Social Enterprise. Through early partnerships, 
        including a McGill MMA capstone project, we recognized the need for a structure that could blend 
        commercial agility with philanthropic mission-locking.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        In 2026, we launch SAICE (Solidarity for Agri-Intelligence and Circular Economy), a registered charity 
        that will hold our mission, brands, and grants. This two-entity structure unlocks grants through the 
        charity while maintaining operational and technological agility through IFSS Inc.
      </p>
      
      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        <Card className="bg-muted/50 border-none">
          <CardContent className="pt-6">
            <Globe2 className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Scope & Reach</h3>
            <p className="text-sm text-muted-foreground">
              Operating across 6 countries: Rwanda, Kenya, Burundi, DRC, Togo, and our Canada HQ. 
              Launching in English, French, and Kinyarwanda, with Kirundi and Swahili planned for phase 2.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-accent/5 border-none">
          <CardContent className="pt-6">
            <Building2 className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-bold mb-2">What's Different Now</h3>
            <p className="text-sm text-muted-foreground">
              Our dual-entity structure ensures long-term sustainability. Learn how SAICE and IFSS Inc. 
              work together to deliver impact.
            </p>
            <Link href="/about/structure" className="inline-block mt-4 text-accent font-medium text-sm hover:underline">
              View our structure &rarr;
            </Link>
          </CardContent>
        </Card>
      </div>
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
              <h4 className="font-semibold text-foreground mb-1">{t}</h4>
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
                <h3 className="font-semibold text-foreground mb-1.5 leading-snug">{t}</h3>
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
              <h4 className="font-semibold text-foreground mb-1 leading-snug">{t}</h4>
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
        <h2 className="text-3xl font-bold text-foreground mb-6">Mission, Vision & Mandate</h2>
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
        <h3 className="text-2xl font-bold mb-6">Our Values</h3>
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
        <h3 className="text-xl font-bold mb-3 text-primary">Confidentiality Commitment</h3>
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
      <h2 className="text-3xl font-bold text-foreground">Our Approach</h2>
      
      <section className="mb-12">
        <h3 className="text-xl font-bold mb-4">Five Strategic Pillars</h3>
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
                <h4 className="font-bold text-foreground">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-bold mb-4">Theory of Change Overview</h3>
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
        <h3 className="text-xl font-bold mb-4">Methodology & Standards</h3>
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
        <h2 className="text-3xl font-bold text-foreground mb-6">Leadership and Governance</h2>
        <p className="text-lg text-muted-foreground mb-8">
          A dedicated team of experts and a structured board ensuring accountability, transparency, and impact.
        </p>

        <h3 className="text-xl font-bold mb-6 border-b pb-2">Executive Team</h3>
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

        <h3 className="text-xl font-bold mb-6 border-b pb-2">Subject Matter Experts</h3>
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
                <h4 className="font-bold text-foreground">{expert.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{expert.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-6 border-b pb-2">SAICE Board of Directors</h3>
        <p className="text-sm text-muted-foreground mb-6">Our 7–9 member board incorporates independent oversight alongside strategic academic and regional representation.</p>
        <div className="flex flex-wrap gap-3 mb-8">
          {["Chair", "Vice-Chair", "Treasurer", "Secretary", "IFSS-Nominated", "McGill Seat", "Rwanda Seat", "Kenya Seat", "At-large"].map((seat, i) => (
            <span key={i} className="px-3 py-1.5 bg-muted rounded-md text-xs font-medium border text-muted-foreground">
              {seat}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-4">Board Committees</h3>
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
      <h2 className="text-3xl font-bold text-foreground mb-8">History & Milestones</h2>
      <div className="relative border-l border-muted-foreground/20 ml-4 space-y-10 py-4">
        {milestones.map((item, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
            <span className="text-sm font-bold text-primary tracking-wider">{item.year}</span>
            <h3 className="text-xl font-bold mt-1 mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
