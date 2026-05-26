import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Leaf,
  Users,
  Globe2,
  BarChart3,
  MapPin,
  Recycle,
  Zap,
  Compass,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import homeHero from "@/assets/images/home-hero.png";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";
import credibleHero from "@/assets/images/credible-hero.png";
import pacesHero from "@/assets/images/sections/energy.png";
import logoMcGill from "@/assets/images/logos/mcgill.png";
import logoSEKU from "@/assets/images/logos/seku.png";
import logoICGLR from "@/assets/images/logos/icglr.png";
import logoAUDA from "@/assets/images/logos/auda-nepad.png";
import logoRCID from "@/assets/images/logos/rcid.png";
import { SectionImage } from "@/components/SectionImage";

export default function Home() {
  useEffect(() => {
    document.title =
      "SAICE & IFSS — Digital tools for African agri-SMEs and circular communities";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="pt-6 pb-14 md:pt-8 md:pb-20">
        <div className="container px-4 lg:px-6">
          <div className="relative blob-card overflow-hidden min-h-[560px] md:min-h-[680px] lg:min-h-[760px] flex items-end">
            <img
              src={homeHero}
              alt="Farmers and cooperative members in the Great Lakes Region"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/50 to-foreground/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/45 to-transparent" />
            <div className="relative w-full p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-4xl text-background">
                <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                  Building <span className="display-italic">resilient futures</span> for African communities.
                </h1>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-background/85 leading-relaxed max-w-3xl">
                  SAICE is a non-profit centre working alongside farmers, cooperatives, youth, ministries, and researchers to advance food security, climate resilience, circular economies, and inclusive livelihoods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust strip */}
      <section className="py-10 border-foreground/10 bg-card/40">
        <div className="container px-4">
          
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 md:gap-x-14">
            {[
              "McGill University",
              "RCID-Rwanda",
              "South Eastern Kenya University",
              "Terre des Jeunes Togo",
              "Ripen",
              "ICGLR",
              "AUDA-NEPAD",
            ].map((partner) => (
              <span
                key={partner}
                className="font-serif text-base md:text-lg font-medium text-foreground/55 hover:text-foreground transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who we are in 60 seconds */}
      <section className="py-20 md:py-24">
        <div className="container px-4">
          <div className="mb-14 max-w-3xl">
            
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              One organisation. <span className="display-italic">Two arms.</span> One mission.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Leaf,
                eyebrow: "The charity",
                title: "SAICE",
                lead: "Solidarity for Agri-Intelligence and Circular Economy",
                desc: "A Canadian registered charity that holds the mission. SAICE owns our tools, raises grants, runs the programs, and reports impact to communities and donors.",
                href: "/about",
                cta: "About SAICE",
                tone: "primary" as const,
              },
              {
                icon: BarChart3,
                eyebrow: "The operating arm",
                title: "IFSS Inc.",
                lead: "Invest for Solidarity and Sustainable Development",
                desc: "The team that delivers consulting, software, and paid services — with revenue flowing back to SAICE to fund the mission.",
                href: "/services",
                cta: "See our services",
                tone: "accent" as const,
              },
            ].map(({ icon: Icon, eyebrow, title, lead, desc, href, cta, tone }, i) => (
              <Link
                key={i}
                href={href}
                className="group blob-card bg-card p-8 flex flex-col justify-between min-h-[360px] hover:bg-card/70 transition-colors"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                      tone === "primary"
                        ? "bg-primary/10"
                        : tone === "accent"
                          ? "bg-accent/15"
                          : "bg-foreground/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        tone === "primary"
                          ? "text-primary"
                          : tone === "accent"
                            ? "text-accent"
                            : "text-foreground"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 tracking-tight">
                    {title}
                  </h3>
                  <p className="font-serif italic text-foreground/75 text-base mb-4 leading-snug">
                    {lead}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-5 border-foreground/10">
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {cta}
                  </span>
                  <span className="circle-arrow-sm">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Flagship Programs */}
      <section className="py-20 md:py-24 bg-card/40">
        <div className="container px-4">
          <div className="mb-16 max-w-3xl">
            
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              From farm to fork to <span className="display-italic">circular economy,</span> powered by clean energy.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
              PAGES, ICES and PACES form one connected loop — agri-intelligence, circular waste, and the clean energy that powers both — on a shared digital backbone with shared ethics and accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                img: pagesHero,
                gradient: null,
                alt: "Smallholder farmer reviewing crop data on a tablet in a Rwandan field",
                eyebrow: "Track 1 · Agri-intelligence",
                title: "PAGES",
                subtitle: "Precision Agriculture for Green Economy and Sustainability",
                stats: "5,000 agri-SMEs · ~100,000 farmers · 60% women, 40% youth · 4 countries",
                body: "Three connected digital tools — Smart Market Matchmaker, IoT Precision Insight Engine, and ERP Finance & Inventory Tracker — that help small agri-businesses sell better, decide better, and qualify for finance.",
                href: "/programs/pages",
                cta: "Learn more",
                Icon: Leaf,
              },
              {
                img: icesHero,
                gradient: null,
                alt: "Youth cooperative members operating smart waste collection bins in a circular-economy pilot site",
                eyebrow: "Track 2 · Circular economy",
                title: "ICES",
                subtitle: "Initiative for Circular Economy and Sustainability",
                stats: "6 tools · CH₄ and CO₂ reductions · Youth & women-led cooperatives · Togo pilots",
                body: "IoT smart bins, AI sorting, RFID asset tracking, mobile apps, analytics and an ML carbon calculator — turning municipal and agri-waste into livelihoods and verified climate finance.",
                href: "/programs/ices",
                cta: "Learn more",
                Icon: Recycle,
              },
              {
                img: pacesHero,
                gradient: null,
                alt: "PACES — community solar mini-grid powering a rural agri-SME",
                eyebrow: "Track 3 · Sustainable energy",
                title: "PACES",
                subtitle: "Programs for Accessible Clean Energy and Sustainability",
                stats: "Solar mini-grids · Productive-use solar · Biogas from ICES waste · E-mobility",
                body: "Reliable, affordable clean energy for the cooperatives, municipalities and agri-SMEs that PAGES and ICES already serve — powering cold-chain, irrigation, collection routes and waste-to-energy.",
                href: "/programs/paces",
                cta: "Learn more",
                Icon: Zap,
              },
            ].map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group blob-card bg-card flex flex-col overflow-hidden hover:bg-card/70 transition-colors"
              >
                <div className="aspect-[16/10] relative overflow-hidden m-3 rounded-[1.5rem]">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={p.alt}
                      className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                      style={{ background: p.gradient ?? undefined }}
                    >
                      <p.Icon className="w-16 h-16 text-white/85" strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                    <p.Icon className="w-3 h-3 text-accent" strokeWidth={2} />
                    {p.eyebrow}
                  </div>
                </div>
                <div className="p-7 md:p-8 pt-3 flex-1 flex flex-col">
                  <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="font-serif italic text-accent text-lg mb-5">{p.subtitle}</p>
                  <p className="text-sm uppercase tracking-[0.18em] text-foreground/65 font-semibold mb-5">
                    {p.stats}
                  </p>
                  <p className="text-foreground/75 leading-relaxed mb-7 flex-1">{p.body}</p>
                  <div className="flex items-center justify-between pt-5 border-foreground/10">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {p.cta}
                    </span>
                    <span className="circle-arrow-sm flex-shrink-0">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Partners — equal partnership, where we work */}
      <section className="py-20 md:py-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            <div className="lg:col-span-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                Our partners
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Equal partnership, <span className="display-italic">across borders.</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
                Based in Canada, with universities, ministries, cooperatives and NGOs across Africa — Rwanda, Kenya, Burundi, DRC, Togo — and research and funding collaborators in Europe.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
                >
                  Meet our partners <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/where-we-work"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
                >
                  Country profiles
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { name: "McGill University", logo: logoMcGill },
              { name: "RCID-Rwanda", logo: logoRCID },
              { name: "South Eastern Kenya University", logo: logoSEKU },
              { name: "Terre des Jeunes Togo", logo: null },
              { name: "Ripen", logo: null },
              { name: "ICGLR", logo: logoICGLR },
              { name: "AUDA-NEPAD", logo: logoAUDA },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-foreground/10 bg-white px-4 py-5 flex items-center justify-center text-center min-h-[96px]"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-14 max-w-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <p className="font-serif text-sm font-semibold text-foreground/85 leading-tight">{p.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Our approach */}
      <section className="py-20 md:py-24 bg-card/40">
        <div className="container px-4">
          <figure className="relative overflow-hidden rounded-2xl mb-12" style={{ aspectRatio: "16/9" }}>
            <img
              src={credibleHero}
              alt="Theory-of-change diagram on a whiteboard with indicators and an audit checklist"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(15,52,96,0.35) 0%, rgba(15,118,110,0.20) 60%, rgba(0,0,0,0.10) 100%)" }}
            />
          </figure>
          <div className="mb-14 max-w-3xl">
            
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              What makes our work <span className="display-italic">credible.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                Icon: Compass,
                title: "Theory of change",
                desc: "Every dollar traces from inputs → activities → outcomes → impact. We publish the diagrams, the indicators, and the assumptions.",
              },
              {
                Icon: HeartHandshake,
                title: "GEDSI by design",
                desc: "Gender, disability and social inclusion are designed in, not bolted on — with measurable quotas and tailored delivery.",
              },
              {
                Icon: ShieldCheck,
                title: "Data sovereignty & AI ethics",
                desc: "SMEs and cooperatives own their data. We comply with Rwanda Law 058/2021, Kenya's Data Protection Act, and the AU Continental AI Strategy. We follow the FAIR principles for open data.",
              },
              {
                Icon: Globe2,
                title: "Aligned with continental priorities",
                desc: "CAADP Kampala 2026–2035, AU Agenda 2063, Rwanda's PSTA 5, Kenya's ASTGS, and the ICGLR framework.",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="blob-card bg-card p-8 flex flex-col gap-4 min-h-[220px]"
              >
                <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="text-foreground/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about/approach"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              Read our approach in full <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Three ways to get involved */}
      <section className="py-20 md:py-24">
        <div className="container px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">Work with us</p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Three ways to <span className="display-italic">get involved.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                kind: "donor" as const,
                title: "Donate to SAICE",
                body: "A Canadian registered charity. Your gift goes to programs, not overheads.",
                href: "/get-involved/donate",
                cta: "Donate now",
              },
              {
                kind: "partnership" as const,
                title: "Partner with us",
                body: "Universities, ministries, cooperatives, donors, technology providers — let's design what's next.",
                href: "/get-involved/partner",
                cta: "Start a conversation",
              },
              {
                kind: "services" as const,
                title: "Hire IFSS Inc.",
                body: "ESG advisory, agri value-chain TA, digital transformation, MEAL design, proposal development.",
                href: "/services",
                cta: "Get involved",
              },
            ].map(({ kind, title, body, href, cta }) => (
              <Link
                key={title}
                href={href}
                className="group blob-card bg-card overflow-hidden flex flex-col hover:bg-card/70 transition-colors"
              >
                <SectionImage
                  kind={kind}
                  aspect="3/2"
                  rounded="rounded-none"
                  className="mb-0"
                />
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">{body}</p>
                  <div className="mt-auto flex items-center justify-between pt-5 border-foreground/10">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {cta}
                    </span>
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
