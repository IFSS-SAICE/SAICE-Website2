import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, Smartphone, Database, Server, Cpu, Fingerprint, Activity, LineChart, ChevronRight, ArrowRight } from "lucide-react";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";
import { PageHero } from "@/components/PageHero";

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
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="Our"
        italic="programs"
        description="PAGES connects farm-to-fork resilience. ICES closes the loop with circular waste systems. Together they are the digital backbone of a resilient Great Lakes Region."
        crumbs={[{ label: "Programs" }]}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {[
            { img: pagesHero, alt: "PAGES", icon: Leaf, track: "Track 01", title: "PAGES", subtitle: "Precision Agriculture for Green Economy and Sustainability", body: "Empowering smallholder farmers and Agri-SMEs with accessible digital tools to improve yield, market access and financial inclusion.", href: "/programs/pages" },
            { img: icesHero, alt: "ICES", icon: Recycle, track: "Track 02", title: "ICES", subtitle: "Initiative for Circular Economy and Sustainability", body: "Supporting municipalities and youth organisations with IoT and AI to optimise waste management and build zero-waste circular communities.", href: "/programs/ices" },
          ].map((p, i) => (
            <Link key={i} href={p.href} className="group blob-card bg-card flex flex-col overflow-hidden hover:bg-card/70 transition-colors">
              <div className="aspect-[16/10] relative overflow-hidden m-3 rounded-[1.5rem]">
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                  {p.track}
                </div>
              </div>
              <div className="p-7 md:p-8 pt-3 flex-1 flex flex-col">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">{p.title}</h3>
                <p className="font-serif italic text-accent text-lg mb-4">{p.subtitle}</p>
                <p className="text-foreground/75 leading-relaxed mb-7 flex-1">{p.body}</p>
                <div className="flex items-center justify-between pt-5 border-foreground/10">
                  <span className="text-sm font-semibold text-foreground">Explore {p.title}</span>
                  <span className="circle-arrow-sm flex-shrink-0">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-serif font-semibold tracking-tight mb-4">Cross-cutting Digital Backbone</h3>
          <p className="text-muted-foreground mb-8">
            Both tracks share a unified technological approach emphasizing data interoperability, AI ethics, mobile-first delivery, USSD fallback for low-connectivity regions, and multilingual UX.
          </p>
          <Link href="/programs/theory-of-change" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-colors">
            View Combined Theory of Change
          </Link>
        </div>
      </div>
    </div>
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
              The programme assists communities from farm-to-fork, providing technical assistance at each stage of food production, storage, market and financial linkages. Assistance includes technology deployment, training, coaching, and strategic partnerships for sustainable growth and financial/market inclusion.
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
