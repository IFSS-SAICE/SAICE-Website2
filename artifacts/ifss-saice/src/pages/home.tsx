import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Leaf,
  Users,
  Globe2,
  BarChart3,
  MapPin,
  Recycle,
  Compass,
  ShieldCheck,
  HeartHandshake,
  Mail,
  Handshake,
  Briefcase,
} from "lucide-react";
import homeHero from "@/assets/images/home-hero.png";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";
import logoMcGill from "@/assets/images/logos/mcgill.png";
import logoSEKU from "@/assets/images/logos/seku.png";
import logoICGLR from "@/assets/images/logos/icglr.png";
import logoAUDA from "@/assets/images/logos/auda-nepad.png";
import logoRCID from "@/assets/images/logos/rcid.png";
import { SectionImage } from "@/components/SectionImage";

export default function Home() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
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
              From farm to fork to <span className="display-italic">circular economy.</span>
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
              Together, PAGES and ICES cover the full agri-food and waste loop, with shared digital infrastructure, shared ethics, and shared accountability to the people we serve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {[
              {
                img: pagesHero,
                alt: "Smallholder farmer reviewing crop data on a tablet in a Rwandan field",
                eyebrow: "Track 1 · Agri-intelligence",
                title: "PAGES",
                subtitle: "Precision Agriculture for Green Economy and Sustainability",
                stats: "5,000 agri-SMEs · ~100,000 farmers · 60% women, 40% youth · 4 countries",
                body: "Three connected digital tools — a Smart Market Matchmaker, an IoT Precision Insight Engine, and an ERP Finance & Inventory Tracker — that help small agri-businesses sell better, decide better, and qualify for finance.",
                href: "/programs/pages",
                cta: "Explore PAGES",
                Icon: Leaf,
              },
              {
                img: icesHero,
                alt: "Youth cooperative members operating smart waste collection bins in a circular-economy pilot site",
                eyebrow: "Track 2 · Circular economy",
                title: "ICES / ICE-Plus",
                subtitle: "Initiative for Circular Economy and Sustainability",
                stats: "6 tools · CH₄ and CO₂ reductions · Youth & women-led cooperatives · Togo pilots",
                body: "IoT smart bins, AI-powered sorting, RFID asset tracking, mobile apps, data analytics, and a machine-learning carbon calculator — turning municipal and agri-waste into livelihoods and verified climate finance.",
                href: "/programs/ices",
                cta: "Explore ICES",
                Icon: Recycle,
              },
            ].map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group blob-card bg-card flex flex-col overflow-hidden hover:bg-card/70 transition-colors"
              >
                <div className="aspect-[16/10] relative overflow-hidden m-3 rounded-[1.5rem]">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
          <SectionImage kind="education" caption="What makes our work credible" aspect="16/9" className="mb-12" />
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
            
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Three ways to <span className="display-italic">work with us.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                Icon: HeartHandshake,
                eyebrow: "Donate",
                title: "Donate to SAICE",
                body: "Receive a Canadian tax receipt. Your donation goes to programs, not overheads — overheads are funded by IFSS Inc. revenue and institutional grants.",
                href: "/get-involved/donate",
                cta: "Donate now",
                tone: "primary" as const,
              },
              {
                Icon: Handshake,
                eyebrow: "Partner",
                title: "Partner with us",
                body: "Universities, ministries, cooperatives, donors, technology providers — tell us how you'd like to work together. We respond within 5 business days.",
                href: "/get-involved/partner",
                cta: "Start a conversation",
                tone: "accent" as const,
              },
              {
                Icon: Briefcase,
                eyebrow: "Hire IFSS Inc.",
                title: "Hire IFSS Inc.",
                body: "Need ESG advisory, agri value-chain TA, digital transformation, MEAL design, or proposal development? Every contract fuels the mission.",
                href: "/services",
                cta: "Request a proposal",
                tone: "foreground" as const,
              },
            ].map(({ Icon, eyebrow, title, body, href, cta, tone }) => (
              <Link
                key={title}
                href={href}
                className="group blob-card bg-card p-8 flex flex-col justify-between min-h-[320px] hover:bg-card/70 transition-colors"
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
                      className={`w-5 h-5 ${
                        tone === "primary"
                          ? "text-primary"
                          : tone === "accent"
                            ? "text-accent"
                            : "text-foreground"
                      }`}
                      strokeWidth={1.75}
                    />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{body}</p>
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

      {/* 11. Newsletter */}
      <section className="py-20 md:py-24 bg-card/40">
        <div className="container px-4">
          <div className="blob-card bg-card p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-5">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              
              <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">
                Get the next <span className="display-italic">briefing.</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                We send a short, useful update once a month — program news, new publications, open roles, and field stories. No filler.
              </p>
            </div>

            <form
              className="lg:col-span-7 flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubscribed(true);
              }}
            >
              {subscribed ? (
                <div className="p-6 rounded-2xl bg-accent/10 border border-accent/25">
                  <p className="font-serif text-xl font-semibold text-foreground mb-1">
                    Thanks{firstName ? `, ${firstName}` : ""}.
                  </p>
                  <p className="text-sm text-foreground/70">
                    You'll receive our next briefing at{" "}
                    <span className="font-medium text-foreground">{email}</span>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      className="h-12 px-4 rounded-full bg-background border border-foreground/15 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="h-12 px-4 rounded-full bg-background border border-foreground/15 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Country (optional)"
                      className="h-12 px-4 rounded-full bg-background border border-foreground/15 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                    <select
                      defaultValue="EN"
                      className="h-12 px-4 rounded-full bg-background border border-foreground/15 text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="EN">Language — English</option>
                      <option value="FR">Langue — Français</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 font-semibold text-sm transition-colors self-start"
                  >
                    Subscribe <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <p className="text-xs text-foreground/55 leading-relaxed mt-1">
                    We follow PIPEDA and CASL. Unsubscribe with one click anytime.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
