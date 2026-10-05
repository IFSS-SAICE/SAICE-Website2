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
import logoMcGill from "@/assets/images/logos/mcgill.png";
import logoSEKU from "@/assets/images/logos/seku.png";
import logoICGLR from "@/assets/images/logos/icglr.png";
import logoAUDA from "@/assets/images/logos/auda-nepad.png";
import logoRCID from "@/assets/images/logos/rcid.png";
import { SectionImage } from "@/components/SectionImage";
import { photoProps, type PhotoSlot } from "@/lib/photos";
import { T, useTT } from "@/lib/i18n";

export default function Home() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt(
      "SAICE & IFSS — Digital tools for African agri-SMEs and circular communities",
      "SAICE et IFSS — Outils numériques pour les PME agricoles africaines et les communautés circulaires",
    );
  }, [tt]);

  const whoCards = [
    {
      icon: Leaf,
      eyebrow: tt("The charity", "L'organisme de bienfaisance"),
      title: "SAICE",
      lead: tt(
        "Solidarity for Agri-Intelligence and Circular Economy",
        "Solidarité pour l'agri-intelligence et l'économie circulaire",
      ),
      desc: tt(
        "A Canadian registered charity. SAICE owns our tools, raises grants, runs programs and reports impact.",
        "Un organisme de bienfaisance enregistré au Canada. SAICE détient nos outils, mobilise des subventions, mène les programmes et rend compte de l'impact.",
      ),
      href: "/about",
      cta: tt("About SAICE", "À propos de SAICE"),
      tone: "primary" as const,
    },
    {
      icon: BarChart3,
      eyebrow: tt("The operating arm", "Le bras opérationnel"),
      title: "IFSS Inc.",
      lead: tt(
        "Invest for Solidarity and Sustainable Development",
        "Investir pour la solidarité et le développement durable",
      ),
      desc: tt(
        "Consulting, software and paid services — with revenue funding SAICE's mission.",
        "Conseil, logiciels et services payants — les revenus financent la mission de SAICE.",
      ),
      href: "/services",
      cta: tt("See our services", "Voir nos services"),
      tone: "accent" as const,
    },
  ];

  const programCards = [
    {
      photo: "home.program.pages" as PhotoSlot,
      eyebrow: tt("Track 1 · Agri-intelligence", "Volet 1 · Agri-intelligence"),
      title: "PAGES",
      subtitle: tt(
        "Precision Agriculture for Green Economy and Sustainability",
        "Agriculture de précision pour une économie verte et durable",
      ),
      stats: tt(
        "5,000 agri-SMEs · ~100,000 farmers · 60% women, 40% youth · 4 countries",
        "5 000 PME agricoles · ~100 000 agriculteurs · 60 % femmes, 40 % jeunes · 4 pays",
      ),
      body: tt(
        "Three connected digital tools that help small agri-businesses sell better, decide better and qualify for finance.",
        "Trois outils numériques connectés pour aider les petites entreprises agricoles à mieux vendre, mieux décider et accéder au financement.",
      ),
      href: "/programs/pages",
      cta: tt("Learn more", "En savoir plus"),
      Icon: Leaf,
    },
    {
      photo: "home.program.ices" as PhotoSlot,
      eyebrow: tt("Track 2 · Circular economy", "Volet 2 · Économie circulaire"),
      title: "ICES",
      subtitle: tt(
        "Initiative for Circular Economy and Sustainability",
        "Initiative pour l'économie circulaire et la durabilité",
      ),
      stats: tt(
        "6 tools · CH₄ and CO₂ reductions · Youth & women-led cooperatives · Togo pilots",
        "6 outils · Réductions de CH₄ et CO₂ · Coopératives portées par les jeunes et les femmes · Pilotes au Togo",
      ),
      body: tt(
        "Smart bins, AI sorting and carbon tracking that turn municipal and agri-waste into livelihoods and verified climate finance.",
        "Bacs intelligents, tri par IA et suivi carbone pour transformer les déchets municipaux et agricoles en moyens de subsistance et en finance climat vérifiée.",
      ),
      href: "/programs/ices",
      cta: tt("Learn more", "En savoir plus"),
      Icon: Recycle,
    },
    {
      photo: "home.program.paces" as PhotoSlot,
      eyebrow: tt("Track 3 · Sustainable energy", "Volet 3 · Énergie durable"),
      title: "PACES",
      subtitle: tt(
        "Programs for Accessible Clean Energy and Sustainability",
        "Programmes pour une énergie propre, accessible et durable",
      ),
      stats: tt(
        "Solar mini-grids · Productive-use solar · Biogas from ICES waste · E-mobility",
        "Mini-réseaux solaires · Solaire à usage productif · Biogaz à partir des déchets ICES · Mobilité électrique",
      ),
      body: tt(
        "Reliable, affordable clean energy for the communities PAGES and ICES already serve.",
        "Une énergie propre, fiable et abordable pour les communautés déjà desservies par PAGES et ICES.",
      ),
      href: "/programs/paces",
      cta: tt("Learn more", "En savoir plus"),
      Icon: Zap,
    },
  ];

  const approachItems = [
    {
      Icon: Compass,
      title: tt("Theory of change", "Théorie du changement"),
      desc: tt(
        "Every dollar traces from inputs to impact. We publish our indicators and assumptions.",
        "Chaque dollar se suit des intrants jusqu'à l'impact. Nous publions nos indicateurs et hypothèses.",
      ),
    },
    {
      Icon: HeartHandshake,
      title: tt("GEDSI by design", "GEDSI dès la conception"),
      desc: tt(
        "Gender, disability and social inclusion built in, with measurable quotas.",
        "Genre, handicap et inclusion sociale intégrés dès le départ, avec des quotas mesurables.",
      ),
    },
    {
      Icon: ShieldCheck,
      title: tt("Data sovereignty & AI ethics", "Souveraineté des données et éthique de l'IA"),
      desc: tt(
        "SMEs and cooperatives own their data. We comply with Rwanda Law 058/2021, Kenya's Data Protection Act and the AU Continental AI Strategy.",
        "Les PME et coopératives possèdent leurs données. Nous respectons la loi rwandaise 058/2021, la Data Protection Act kényane et la Stratégie continentale de l'UA sur l'IA.",
      ),
    },
    {
      Icon: Globe2,
      title: tt("Aligned with continental priorities", "Aligné sur les priorités continentales"),
      desc: tt(
        "CAADP Kampala 2026–2035, AU Agenda 2063, Rwanda's PSTA 5, Kenya's ASTGS, and the ICGLR framework.",
        "PDDAA Kampala 2026-2035, Agenda 2063 de l'UA, PSTA 5 du Rwanda, ASTGS du Kenya et cadre de la CIRGL.",
      ),
    },
  ];

  const involveCards = [
    {
      kind: "donor" as const,
      photo: "home.involve.donate" as PhotoSlot,
      title: tt("Donate to SAICE", "Faire un don à SAICE"),
      body: tt(
        "A Canadian registered charity. Your gift goes to programs, not overheads.",
        "Un organisme de bienfaisance enregistré au Canada. Votre don finance les programmes, pas les frais généraux.",
      ),
      href: "/get-involved/donate",
      cta: tt("Donate now", "Faire un don"),
    },
    {
      kind: "partnership" as const,
      photo: "home.involve.partner" as PhotoSlot,
      title: tt("Partner with us", "Devenir partenaire"),
      body: tt(
        "Universities, ministries, cooperatives and donors — let's build together.",
        "Universités, ministères, coopératives et bailleurs — construisons ensemble.",
      ),
      href: "/get-involved/partner",
      cta: tt("Start a conversation", "Entamer la discussion"),
    },
    {
      kind: "services" as const,
      photo: "home.involve.hire" as PhotoSlot,
      title: tt("Hire IFSS Inc.", "Mandater IFSS Inc."),
      body: tt(
        "ESG advisory, agri value-chain TA, digital transformation, MEAL design, proposal development.",
        "Conseil ESG, assistance technique aux chaînes de valeur agricoles, transformation numérique, conception SERA, montage de propositions.",
      ),
      href: "/services",
      cta: tt("Get involved", "S'impliquer"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="pt-6 pb-14 md:pt-8 md:pb-20">
        <div className="container px-4 lg:px-6">
          <div className="relative blob-card overflow-hidden min-h-[560px] md:min-h-[680px] lg:min-h-[760px] flex items-end">
            <img
              {...photoProps("home.hero", tt)}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/50 to-foreground/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/45 to-transparent" />
            <div className="relative w-full p-6 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-4xl text-background">
                <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
                  <T
                    en={<>Building <span className="display-italic">resilient futures</span> for African communities.</>}
                    fr={<>Bâtir des <span className="display-italic">avenirs résilients</span> pour les communautés africaines.</>}
                  />
                </h1>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-background/85 leading-relaxed max-w-3xl">
                  <T
                    en="A non-profit centre working with farmers, cooperatives and youth for food security, climate resilience and inclusive livelihoods."
                    fr="Un centre à but non lucratif aux côtés des agriculteurs, coopératives et jeunes pour la sécurité alimentaire, la résilience climatique et des moyens de subsistance inclusifs."
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who we are in 60 seconds */}
      <section className="py-20 md:py-24">
        <div className="container px-4">
          <div className="mb-14 max-w-3xl">
            
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>One organisation. <span className="display-italic">Two arms.</span> One mission.</>}
                fr={<>Une organisation. <span className="display-italic">Deux bras.</span> Une mission.</>}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {whoCards.map(({ icon: Icon, eyebrow, title, lead, desc, href, cta, tone }, i) => (
              <Link
                key={i}
                href={href}
                className="group blob-card bg-card p-8 flex flex-col justify-between min-h-[300px] hover:bg-card/70 transition-colors"
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
              <T
                en={<>From farm to fork to <span className="display-italic">circular economy,</span> powered by clean energy.</>}
                fr={<>De la ferme à l'assiette à <span className="display-italic">l'économie circulaire,</span> alimentée par une énergie propre.</>}
              />
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
              <T
                en="Three programs, one connected loop on a shared digital backbone."
                fr="Trois programmes, une seule boucle connectée sur une infrastructure numérique commune."
              />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programCards.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group blob-card bg-card flex flex-col overflow-hidden hover:bg-card/70 transition-colors"
              >
                <div className="aspect-[16/10] relative overflow-hidden m-3 rounded-[1.5rem]">
                  <img
                    {...photoProps(p.photo, tt)}
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
                <T en="Our partners" fr="Nos partenaires" />
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                <T
                  en={<>Equal partnership, <span className="display-italic">across borders.</span></>}
                  fr={<>Un partenariat d'égal à égal, <span className="display-italic">par-delà les frontières.</span></>}
                />
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
                <T
                  en="Based in Canada, working with partners in Rwanda, Kenya, Burundi, DRC, Togo and Europe."
                  fr="Basés au Canada, avec des partenaires au Rwanda, au Kenya, au Burundi, en RDC, au Togo et en Europe."
                />
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
                >
                  <T en="Meet our partners" fr="Rencontrer nos partenaires" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/where-we-work"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
                >
                  <T en="Country profiles" fr="Profils-pays" />
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
              {...photoProps("home.credible", tt)}
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
              <T
                en={<>What makes our work <span className="display-italic">credible.</span></>}
                fr={<>Ce qui rend notre travail <span className="display-italic">crédible.</span></>}
              />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {approachItems.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="blob-card bg-card p-8 flex flex-col gap-4 min-h-[180px]"
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
              <T en="Read our approach in full" fr="Lire notre approche en détail" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Three ways to get involved */}
      <section className="py-20 md:py-24">
        <div className="container px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="Work with us" fr="Travailler avec nous" /></p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Three ways to <span className="display-italic">get involved.</span></>}
                fr={<>Trois façons de <span className="display-italic">s'impliquer.</span></>}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {involveCards.map(({ kind, photo, title, body, href, cta }) => (
              <Link
                key={title}
                href={href}
                className="group blob-card bg-card overflow-hidden flex flex-col hover:bg-card/70 transition-colors"
              >
                <SectionImage
                  photo={photo}
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
