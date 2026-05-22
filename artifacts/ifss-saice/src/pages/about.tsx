import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Users, Globe2, Building2, CheckCircle2, ChevronRight, FileText, Activity } from "lucide-react";
import aboutHero from "@/assets/images/about-hero.png";

export default function AboutRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub || "who-we-are";

  useEffect(() => {
    document.title = `About - ${sub.replace(/-/g, ' ')} | SAICE / IFSS Inc.`;
  }, [sub]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutHero} alt="Cooperative meeting in Africa" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar-primary/90 to-sidebar-primary/40 mix-blend-multiply" />
        </div>
        <div className="container relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 capitalize">
            {sub.replace(/-/g, ' ')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Learn about our dual-entity structure, our leadership, and the history that shaped our mission.
          </p>
        </div>
      </section>

      <div className="container px-4 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="md:w-1/4 flex-shrink-0">
          <nav className="sticky top-24 space-y-1">
            {[
              { path: "who-we-are", label: "Who we are" },
              { path: "structure", label: "How we are structured" },
              { path: "mission", label: "Mission, vision, values" },
              { path: "approach", label: "Our approach" },
              { path: "leadership", label: "Leadership & governance" },
              { path: "history", label: "History & milestones" },
            ].map((item) => (
              <Link 
                key={item.path} 
                href={`/about/${item.path === 'who-we-are' ? '' : item.path}`}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  sub === item.path 
                    ? "bg-primary text-primary-foreground font-medium" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {sub === item.path && <ChevronRight className="w-4 h-4" />}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="md:w-3/4 max-w-3xl">
          {sub === "who-we-are" && <WhoWeAre />}
          {sub === "structure" && <Structure />}
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
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-foreground">How we are structured</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        We utilize a dual-entity model to maximize both impact and innovation. SAICE (the parent charity) 
        and IFSS Inc. (the operating subsidiary) work in tandem.
      </p>

      {/* Structure Diagram */}
      <div className="p-8 bg-muted rounded-2xl border flex flex-col md:flex-row items-center justify-center gap-8 text-center my-8">
        <div className="bg-card p-6 rounded-xl shadow-sm border w-full max-w-xs relative">
          <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold">PARENT</div>
          <Leaf className="w-10 h-10 text-primary mx-auto mb-3" />
          <h3 className="font-bold text-lg">SAICE</h3>
          <p className="text-xs text-muted-foreground mt-2">Registered Charity</p>
          <ul className="text-sm mt-4 space-y-1 text-muted-foreground">
            <li>Owns Mission & Brand</li>
            <li>Holds IP & Programs</li>
            <li>Manages Grants</li>
          </ul>
        </div>
        
        <div className="hidden md:flex flex-col items-center text-muted-foreground">
          <span className="text-xs font-semibold uppercase tracking-widest mb-1">Licence & Services</span>
          <div className="flex gap-1">
            <ChevronRight className="w-5 h-5" />
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl shadow-sm border w-full max-w-xs relative">
          <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-bold">SUBSIDIARY</div>
          <Activity className="w-10 h-10 text-accent mx-auto mb-3" />
          <h3 className="font-bold text-lg">IFSS Inc.</h3>
          <p className="text-xs text-muted-foreground mt-2">Operating Arm (Social Enterprise)</p>
          <ul className="text-sm mt-4 space-y-1 text-muted-foreground">
            <li>SaaS & Tech Delivery</li>
            <li>Consulting Services</li>
            <li>Enterprise Contracts</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold">Inter-entity Rules & Oversight</h3>
        <p className="text-muted-foreground">
          To ensure transparency and mission alignment, the entities are bound by strict governance frameworks including an Asset-transfer agreement, IP licence-back, services agreement, and a related-party policy. SAICE is governed by a majority independent board with an audit committee.
        </p>
        <p className="text-sm text-muted-foreground italic bg-muted/50 p-4 rounded-lg">
          Comparable proven structures: Mozilla Foundation/Corporation, Wikimedia, Digital Green, One Acre Fund.
        </p>
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
