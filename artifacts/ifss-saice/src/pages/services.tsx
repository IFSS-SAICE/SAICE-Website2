import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Leaf,
  Lock,
  Building2,
  FileSearch,
  Calendar,
  Receipt,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionImage } from "@/components/SectionImage";
import { T, useTT } from "@/lib/i18n";
import servicesHero from "@/assets/images/services/hero-services.png";
import pagesServicesImg from "@/assets/images/services/pages-services.png";
import icesServicesImg from "@/assets/images/services/ices-services.png";
import pacesServicesImg from "@/assets/images/services/paces-services.png";


function ServiceDetail({
  id,
  eyebrow,
  title,
  italic,
  intro,
  deliverables,
  bg,
  img,
  imgAlt,
  imgCaption,
  learnMoreHref,
}: {
  id: string;
  eyebrow: string;
  title: string;
  italic: string;
  intro: React.ReactNode;
  deliverables: { t: string; d: string }[];
  bg?: string;
  img: string;
  imgAlt: string;
  imgCaption: string;
  learnMoreHref?: string;
}) {
  const imageRight = id === "ices";
  return (
    <section id={id} className={`py-14 md:py-16 scroll-mt-32 ${bg ?? ""}`}>
      <div className="container px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          <div className={`lg:col-span-7 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">{eyebrow}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              {title} <span className="display-italic">{italic}</span>
            </h2>
            <div className="mt-6 text-foreground/75 leading-relaxed text-lg space-y-4">
              {intro}
            </div>
            <ul className="mt-7 space-y-3.5">
              {deliverables.map((d) => (
                <li key={d.t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <span className="font-serif font-semibold text-foreground">{d.t}.</span>{" "}
                    <span className="text-foreground/70">{d.d}</span>
                  </p>
                </li>
              ))}
            </ul>
            {learnMoreHref && (
              <div className="mt-8">
                <Link
                  href={learnMoreHref}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
                >
                  <T en="Learn more" fr="En savoir plus" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              </div>
            )}
          </div>
          <div className={`lg:col-span-5 lg:sticky lg:top-28 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
            <figure className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <img src={img} alt={imgAlt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/55 to-transparent" />
              <figcaption className="absolute left-4 bottom-4 md:left-5 md:bottom-5">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                  {imgCaption}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const notionHubUrl = (import.meta.env.VITE_NOTION_HUB_URL as string | undefined) ?? "";
  const tt = useTT();

  const pagesDeliverables = [
    { t: tt("Value-chain mapping & cooperative diagnostics", "Cartographie des chaînes de valeur et diagnostics coopératifs"), d: tt("From soil to shelf — gender, youth and climate lenses built in.", "Du sol à l'étal — lentilles genre, jeunesse et climat intégrées.") },
    { t: tt("Smart Market Matchmaker — Enterprise", "Smart Market Matchmaker — Entreprise"), d: tt("Multi-buyer dashboards, off-take templates, exporter compliance modules.", "Tableaux de bord multi-acheteurs, modèles de contrats d'achat, modules de conformité à l'exportation.") },
    { t: tt("IoT Precision Insight Engine — Enterprise", "IoT Precision Insight Engine — Entreprise"), d: tt("Satellite and sensor stacks, branded dashboards, yield-forecast APIs.", "Piles satellite et capteurs, tableaux de bord personnalisés, API de prévision des rendements.") },
    { t: tt("Bankable business plans for agri-SMEs", "Plans d'affaires bancables pour PME agricoles"), d: tt("Aligned with PSTA 5, ASTGS, CAADP Kampala 2026–2035 and AU Agenda 2063.", "Alignés sur PSTA 5, ASTGS, CAADP Kampala 2026-2035 et Agenda 2063 de l'UA.") },
  ];

  const icesDeliverables = [
    { t: tt("Waste-stream audits & circular strategy", "Audits des flux de déchets et stratégie circulaire"), d: tt("Diagnostics and roadmaps for cities, EPR schemes and waste-led SMEs.", "Diagnostics et feuilles de route pour villes, dispositifs REP et PME des déchets.") },
    { t: tt("IoT Smart Bins & sorting analytics", "Bacs intelligents IoT et analytique de tri"), d: tt("Fleet management, routing, AI sorting, material-recovery dashboards.", "Gestion de flotte, tournées, tri par IA, tableaux de bord de récupération des matières.") },
    { t: tt("ML Carbon Calculator (MRV-grade)", "Calculateur carbone ML (qualité MRV)"), d: tt("Methane and CO₂ averted, verified for carbon-market submission.", "Méthane et CO₂ évités, vérifiés pour soumission sur les marchés du carbone.") },
    { t: tt("Cooperative incubation for waste-pickers", "Incubation coopérative pour récupérateurs de déchets"), d: tt("Youth- and women-led co-ops prepared for large-scale contracts.", "Coopératives dirigées par des jeunes et des femmes, préparées aux contrats à grande échelle.") },
  ];

  const pacesDeliverables = [
    { t: tt("Solar mini-grid feasibility & design", "Faisabilité et conception de mini-réseaux solaires"), d: tt("Site selection, sizing, tariff modelling and community engagement.", "Choix de site, dimensionnement, modélisation tarifaire et engagement communautaire.") },
    { t: tt("Productive-use clean energy advisory", "Conseil en énergie propre à usage productif"), d: tt("Energy for agri-processing, cold-chain and waste sorting.", "Énergie pour la transformation agricole, la chaîne du froid et le tri des déchets.") },
    { t: tt("Climate finance structuring", "Structuration de la finance climat"), d: tt("Blended-finance packs for mini-grids, results-based and concessional capital.", "Montages de financement mixte pour mini-réseaux, capitaux concessionnels et axés sur les résultats.") },
    { t: tt("Energy-access M&E", "Suivi-évaluation de l'accès à l'énergie"), d: tt("Connection, kWh and livelihood indicators — published quarterly.", "Indicateurs de connexion, de kWh et de moyens de subsistance — publiés trimestriellement.") },
  ];

  const crossCutting = [
    {
      Icon: Sparkles,
      t: tt("ESG & sustainability", "ESG et durabilité"),
      d: tt("GRI / IFRS-S1/S2 reports, GHG baselines, safeguarding policies — applied across PAGES, ICES and PACES.", "Rapports GRI / IFRS-S1/S2, lignes de base GES, politiques de sauvegarde — appliqués à PAGES, ICES et PACES."),
    },
    {
      Icon: FileSearch,
      t: tt("M&E and independent evaluation", "Suivi-évaluation et évaluation indépendante"),
      d: tt("OECD-DAC evaluations, MEAL system design, baselines and endlines — for ministries, donors and our own programs.", "Évaluations OCDE-CAD, conception de systèmes MEAL, lignes de base et de fin — pour ministères, bailleurs et nos propres programmes."),
    },
    {
      Icon: Receipt,
      t: tt("Reports, proposals & policy briefs", "Rapports, propositions et notes de politique"),
      d: tt("Concept notes, grant proposals and donor reports — in EN/FR, publication-grade.", "Notes conceptuelles, propositions de subvention et rapports aux bailleurs — en FR/EN, qualité publication."),
    },
  ];

  const faqs = [
    { q: tt("Are IFSS Inc. and SAICE the same organisation?", "IFSS Inc. et SAICE sont-elles la même organisation ?"), a: tt("No. SAICE is the parent charity; IFSS Inc. is its operating arm. Only SAICE can issue donation receipts; only IFSS Inc. signs consulting contracts.", "Non. SAICE est l'organisme de bienfaisance mère ; IFSS Inc. en est le bras opérationnel. Seule SAICE peut émettre des reçus de don ; seule IFSS Inc. signe des contrats de conseil.") },
    { q: tt("Does paying IFSS Inc. count as a donation?", "Payer IFSS Inc. compte-t-il comme un don ?"), a: tt("No — it's an engagement, not a tax-deductible gift. To make a charitable gift, donate to SAICE directly.", "Non — il s'agit d'un mandat, pas d'un don déductible d'impôt. Pour faire un don de bienfaisance, donnez directement à SAICE.") },
    { q: tt("How much of what I pay IFSS Inc. goes back to SAICE?", "Quelle part de ce que je verse à IFSS Inc. retourne à SAICE ?"), a: tt("A published revenue share, set by the SAICE board annually and disclosed in the audited accounts.", "Une part de revenus publiée, fixée annuellement par le conseil de SAICE et divulguée dans les comptes audités.") },
    { q: tt("Will my data be used to train PAGES or ICES?", "Mes données seront-elles utilisées pour entraîner PAGES ou ICES ?"), a: tt("No — not without your written, opt-in consent on a per-engagement basis. Client data stays in the client tenant; SAICE-owned model improvements are derived only from data we own outright or from data shared under explicit licence.", "Non — pas sans votre consentement écrit explicite, mandat par mandat. Les données client restent dans l'environnement client ; les améliorations de modèles appartenant à SAICE proviennent uniquement de données dont nous sommes pleinement propriétaires ou partagées sous licence explicite.") },
    { q: tt("Can SAICE program staff work on my IFSS Inc. engagement?", "Le personnel des programmes SAICE peut-il travailler sur mon mandat IFSS Inc. ?"), a: tt("Yes, but only under the related-party policy — with written disclosure, time-tracking, and reimbursement of SAICE at full cost. Conflicts of interest are managed by the audit committee.", "Oui, mais uniquement dans le cadre de la politique sur les parties liées — avec divulgation écrite, suivi du temps et remboursement de SAICE au coût complet. Les conflits d'intérêts sont gérés par le comité d'audit.") },
    { q: tt("What countries can you work in?", "Dans quels pays pouvez-vous intervenir ?"), a: tt("We are currently operational in Canada, Rwanda, Kenya, Burundi, DRC, and Togo. We have worked previously in the US, Uganda, and other Great Lakes Region countries. New countries on request, subject to a feasibility review.", "Nous sommes actuellement opérationnels au Canada, au Rwanda, au Kenya, au Burundi, en RDC et au Togo. Nous avons déjà travaillé aux États-Unis, en Ouganda et dans d'autres pays de la région des Grands Lacs. Nouveaux pays sur demande, sous réserve d'une étude de faisabilité.") },
    { q: tt("Do you sign NDAs?", "Signez-vous des accords de confidentialité ?"), a: tt("Yes, on every engagement. We also accept client NDAs and have a standard mutual-NDA template (see the contractor NDA on the governance page).", "Oui, à chaque mandat. Nous acceptons aussi les NDA des clients et disposons d'un modèle standard de NDA mutuel (voir le NDA contractant sur la page gouvernance).") },
    { q: tt("Can I see references?", "Puis-je voir des références ?"), a: tt("Yes, on request — typically two named references per program, sector-matched to your project.", "Oui, sur demande — généralement deux références nommées par programme, en lien avec le secteur de votre projet.") },
  ];

  useEffect(() => {
    document.title = tt(
      "Our Services — Aligned to PAGES, ICES and PACES · SAICE / IFSS Inc.",
      "Nos services — Alignés sur PAGES, ICES et PACES · SAICE / IFSS Inc.",
    );
  }, [tt]);

  useEffect(() => {
    if (!sub) return;
    const el = document.getElementById(sub);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [sub]);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title={tt("Services that power", "Des services au service")}
        italic={tt("our programs.", "de nos programmes.")}
        description={tt("Advisory, delivery and digital tools.", "Conseil, mise en œuvre et outils numériques.")}
        crumbs={[{ label: tt("Our services", "Nos services") }]}
        image={servicesHero}
        imageAlt={tt("Field deployment of digital advisory tools", "Déploiement sur le terrain d'outils-conseil numériques")}
      />

      {/* How services map to programs */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="How we work" fr="Notre façon de travailler" /></p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Three programs. <span className="display-italic">Three service streams.</span></>}
                fr={<>Trois programmes. <span className="display-italic">Trois flux de services.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Funders, ministries and enterprise partners commission advisory, delivery and digital tools aligned to PAGES, ICES or PACES. Every engagement's margin funds the programs."
                fr="Bailleurs, ministères et entreprises commandent conseil, mise en œuvre et outils numériques alignés sur PAGES, ICES ou PACES. La marge de chaque mandat finance les programmes."
              />
            </p>
            <p className="mt-4 text-sm text-foreground/65 leading-relaxed">
              <T
                en="Research-grade methods tested in cooperatives. Teams in Kigali, Kitui and Lomé. NDA on every engagement; data protection under the stricter law."
                fr="Méthodes de qualité recherche testées en coopératives. Équipes à Kigali, Kitui et Lomé. NDA pour chaque mandat ; protection des données selon la loi la plus stricte."
              />
            </p>
          </div>
        </div>
      </section>

      {/* Services for PAGES */}
      <ServiceDetail
        id="pages"
        bg="bg-card/40"
        eyebrow={tt("Services for PAGES · Agri-intelligence", "Services pour PAGES · Agri-intelligence")}
        title={tt("From soil to shelf —", "Du sol à l'étal —")}
        italic={tt("built for African smallholders.", "conçu pour les petits producteurs africains.")}
        intro={
          <p>
            <T
              en="Cooperative and parcel mapping, inclusion quotas, and field advisory with enterprise tools through implementation."
              fr="Cartographie des coopératives et parcelles, quotas d'inclusion, conseil de terrain et outils d'entreprise jusqu'à la mise en œuvre."
            />
          </p>
        }
        deliverables={pagesDeliverables}
        img={pagesServicesImg}
        imgAlt={tt("Agronomist and cooperative leader inspecting maize in the field", "Agronome et responsable coopératif inspectant du maïs au champ")}
        imgCaption={tt("PAGES · Field", "PAGES · Terrain")}
        learnMoreHref="/services/pages"
      />

      {/* Services for ICES */}
      <ServiceDetail
        id="ices"
        eyebrow={tt("Services for ICES · Circular economy", "Services pour ICES · Économie circulaire")}
        title={tt("Circular systems that", "Des systèmes circulaires qui")}
        italic={tt("actually close the loop.", "bouclent vraiment la boucle.")}
        intro={
          <p>
            <T
              en="Audit, design, instrumentation and measurement for cities, EPR schemes and waste-led SMEs, backed by MRV-grade carbon data."
              fr="Audit, conception, instrumentation et mesure pour villes, dispositifs REP et PME des déchets, avec données carbone de qualité MRV."
            />
          </p>
        }
        deliverables={icesDeliverables}
        img={icesServicesImg}
        imgAlt={tt("Engineer inspecting a smart waste-bin sensor in a recovery facility", "Ingénieur inspectant un capteur de bac à déchets intelligent dans un centre de récupération")}
        imgCaption={tt("ICES · Recovery", "ICES · Récupération")}
        learnMoreHref="/services/ices"
      />

      {/* Services for PACES */}
      <ServiceDetail
        id="paces"
        bg="bg-card/40"
        eyebrow={tt("Services for PACES · Sustainable energy", "Services pour PACES · Énergie durable")}
        title={tt("Clean energy that", "Une énergie propre qui")}
        italic={tt("pays its own way.", "rentabilise son propre déploiement.")}
        intro={
          <p>
            <T
              en="Energy for productive use — agri-processing, cold-chain and sorting — that supports livelihoods."
              fr="Énergie à usage productif — transformation agricole, chaîne du froid et tri — au service des moyens de subsistance."
            />
          </p>
        }
        deliverables={pacesDeliverables}
        img={pacesServicesImg}
        imgAlt={tt("Technician installing a solar panel on a rural rooftop at golden hour", "Technicien installant un panneau solaire sur un toit rural à l'heure dorée")}
        imgCaption={tt("PACES · Mini-grid", "PACES · Mini-réseau")}
        learnMoreHref="/services/paces"
      />

      {/* Cross-cutting services */}
      <section id="cross-cutting" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="Cross-cutting" fr="Transversal" /></p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Applied across <span className="display-italic">every program.</span></>}
                fr={<>Appliqué à <span className="display-italic">chaque programme.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Three practices for our programs and those of funders, ministries and partners."
                fr="Trois pratiques pour nos programmes et ceux des bailleurs, ministères et partenaires."
              />
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {crossCutting.map(({ Icon, t, d }) => (
              <div key={t} className="blob-card bg-background p-6">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools Hub — Zamuka-style flagship block */}
      <section id="digital-hub" className="relative scroll-mt-32 py-14 md:py-20 bg-primary text-primary-foreground overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 80% 25%, hsl(var(--accent) / 0.22), transparent 70%)",
          }}
        />

        <div className="relative container px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 h-8 px-4 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-[0.22em]">
              <T en="Developed by IFSS Inc. · Powered by Notion" fr="Développé par IFSS Inc. · Propulsé par Notion" />
            </span>
            <h2 className="mt-7 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02]">
              <T
                en={<>Digital Tools <span className="display-italic" style={{ color: "hsl(154 55% 72%)" }}>Hub.</span></>}
                fr={<>Espace outils <span className="display-italic" style={{ color: "hsl(154 55% 72%)" }}>numériques.</span></>}
              />
            </h2>
            <p className="mt-6 text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto">
              <T
                en="IFSS Inc.'s Notion workspace brings PAGES, ICES and PACES tools together. Free for cooperatives; open to everyone else, with proceeds funding the mission."
                fr="L'espace Notion d'IFSS Inc. réunit les outils PAGES, ICES et PACES. Gratuit pour les coopératives ; ouvert à tous, les recettes finançant la mission."
              />
            </p>
          </div>

          {/* White content card */}
          <div className="mt-12 md:mt-14 max-w-5xl mx-auto rounded-3xl bg-background text-foreground p-8 md:p-12 shadow-2xl shadow-black/20">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-center">
              <T en="What's inside" fr="Ce qu'on y trouve" />
            </h3>
            <div className="mx-auto mt-3 h-px w-12 bg-accent" />

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="w-4 h-4 text-primary" strokeWidth={1.75} />
                  
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  {[
                    "Smart Market Matchmaker",
                    "IoT Precision Insight Engine",
                    "ERP Finance & Inventory Tracker",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="font-serif font-semibold">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  
                </div>
                <ul className="space-y-2.5 text-sm text-foreground/80">
                  {[
                    "IoT Smart Bins",
                    "AI & Robotics Sorting",
                    "RFID & Asset Management",
                    "Data Analytics Platform",
                    "Mobile & Digital Applications",
                    "ML Carbon Calculator",
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <span className="font-serif font-semibold">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Notion workspace embed slot */}
            <div className="mt-10 rounded-2xl border border-foreground/10 bg-card/60 overflow-hidden">
              {notionHubUrl ? (
                <iframe
                  src={notionHubUrl}
                  title={tt("IFSS Digital Tools Hub — Notion workspace", "Espace outils numériques IFSS — espace de travail Notion")}
                  loading="lazy"
                  className="w-full h-[520px] block bg-background"
                />
              ) : (
                <div className="px-6 py-10 md:px-10 md:py-14 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                    <Sparkles className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="font-serif text-lg md:text-xl font-semibold tracking-tight">
                    <T en="The Notion workspace embeds here." fr="L'espace de travail Notion s'intègre ici." />
                  </p>
                  <p className="mt-3 text-sm text-foreground/70 max-w-md mx-auto leading-relaxed">
                    <T
                      en="The IFSS Digital Tools Hub will appear here once its public Notion URL is set."
                      fr="L'espace outils numériques IFSS apparaîtra ici dès que son URL publique Notion sera définie."
                    />
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={notionHubUrl ?? "#"}
                target={notionHubUrl ? "_blank" : undefined}
                rel={notionHubUrl ? "noopener noreferrer" : undefined}
                aria-disabled={!notionHubUrl}
                className={`inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background text-sm font-semibold transition-colors ${
                  notionHubUrl ? "hover:bg-foreground/85" : "opacity-60 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!notionHubUrl) e.preventDefault();
                }}
              >
                {notionHubUrl ? tt("Open in Notion", "Ouvrir dans Notion") : tt("Notion workspace — coming soon", "Espace Notion — bientôt disponible")}
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <p className="md:pl-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-5"><T en="How we work" fr="Notre façon de travailler" /></p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: tt("Fixed-price", "Forfait"), d: tt("Well-defined scopes — proposals, reports, audits, evaluations. Milestones billed on delivery.", "Mandats bien définis — propositions, rapports, audits, évaluations. Jalons facturés à la livraison.") },
              { t: tt("Time and materials", "Temps et matériel"), d: tt("Exploratory or adaptive work. Rate card shared under NDA. Weekly burn report.", "Travail exploratoire ou adaptatif. Grille de tarifs partagée sous NDA. Rapport de consommation hebdomadaire.") },
              { t: tt("Retainer", "Mandat récurrent"), d: tt("Ongoing M&E, technical assistance or product work. Quarterly true-up.", "Suivi-évaluation, assistance technique ou travaux produit en continu. Ajustement trimestriel.") },
            ].map(({ t, d }) => (
              <div key={t} className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-accent/25 bg-accent/[0.04] p-6">
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} /><T en="Cooperatives, women- and youth-led SMEs, and Indigenous-led organisations qualify for a 15–30% discount." fr="Les coopératives, les PME dirigées par des femmes ou des jeunes et les organisations dirigées par des Autochtones bénéficient d'un rabais de 15 à 30 %." /></li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} /><T en="Multi-country and multi-year PAGES, ICES or PACES rollouts are scoped at preferential rates." fr="Les déploiements PAGES, ICES ou PACES multi-pays et pluriannuels sont chiffrés à des tarifs préférentiels." /></li>
              <li className="flex gap-2.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} /><T en="Pro-bono work is considered case by case, subject to board approval." fr="Le travail pro bono est étudié au cas par cas, sous réserve de l'approbation du conseil." /></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who buys our services */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="Who hires us" fr="Qui nous mandate" /></p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Three ways <span className="display-italic">to use our services.</span></>}
                fr={<>Trois façons <span className="display-italic">d'utiliser nos services.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Choose your path. We'll scope advisory, delivery and digital tools for your role and program."
                fr="Choisissez votre voie. Nous cadrerons conseil, mise en œuvre et outils numériques selon votre rôle et votre programme."
              />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                kind: "donor" as const,
                eyebrow: tt("Funders & donors", "Bailleurs et donateurs"),
                title: tt("Commission services that feed a program", "Commandez des services qui alimentent un programme"),
                body: tt("Bilateral and philanthropic funders commission proposals, evaluations and delivery for PAGES, ICES or PACES. The margin funds SAICE.", "Bailleurs bilatéraux et philanthropiques commandent propositions, évaluations et mise en œuvre pour PAGES, ICES ou PACES. La marge finance SAICE."),
              },
              {
                kind: "partnership" as const,
                eyebrow: tt("Governments & cooperatives", "Gouvernements et coopératives"),
                title: tt("Co-design delivery in your country", "Coconcevez la mise en œuvre dans votre pays"),
                body: tt("Ministries, municipalities, EPR schemes and cooperatives bring mandates and communities. We provide diagnostics, digital tools and training.", "Ministères, municipalités, dispositifs REP et coopératives apportent mandats et communautés. Nous fournissons diagnostics, outils numériques et formation."),
              },
              {
                kind: "services" as const,
                eyebrow: tt("Enterprises & SMEs", "Entreprises et PME"),
                title: tt("Buy advisory and enterprise tooling", "Achetez du conseil et des outils d'entreprise"),
                body: tt("Agri-exporters, energy developers and ESG-bound enterprises engage IFSS Inc. for ESG advisory, value-chain TA, digital transformation and M&E.", "Exportateurs agricoles, développeurs énergétiques et entreprises soumises à des obligations ESG mandatent IFSS Inc. pour le conseil ESG, l'AT sur les chaînes de valeur, la transformation numérique et le suivi-évaluation."),
              },
            ].map(({ kind, eyebrow, title, body }) => (
              <article
                key={title}
                className="blob-card bg-card overflow-hidden flex flex-col"
              >
                <SectionImage
                  kind={kind}
                  aspect="3/2"
                  rounded="rounded-none"
                  className="mb-0"
                />
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">{eyebrow}</p>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 tracking-tight leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
            >
              <T en="Get involved" fr="S'impliquer" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Frequently asked <span className="display-italic">questions.</span></>}
                fr={<>Questions <span className="display-italic">fréquentes.</span></>}
              />
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-foreground/10 border-foreground/10">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  >
                    <span className="font-serif text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-foreground/60 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      strokeWidth={2}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 -mt-1 text-sm text-foreground/75 leading-relaxed pr-10">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
