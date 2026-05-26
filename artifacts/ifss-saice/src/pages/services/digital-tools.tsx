import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Building2,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import digitalToolsHero from "@/assets/images/pages-hero.png";
import { T, useTT } from "@/lib/i18n";

type Tool = {
  name: string;
  tag: string;
  desc: string;
  bullets: string[];
  url: string;
  docs: string;
};

function ToolCard({ tool, accent }: { tool: Tool; accent: "primary" | "accent" }) {
  const isPrimary = accent === "primary";
  return (
    <div
      className={`rounded-3xl border p-6 md:p-7 flex flex-col ${
        isPrimary
          ? "border-primary/20 bg-primary/[0.03]"
          : "border-accent/25 bg-accent/[0.04]"
      }`}
    >

      <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight mb-2">
        {tool.name}
      </h3>
      <p className="text-sm text-foreground/75 leading-relaxed mb-5">{tool.desc}</p>

      <ul className="space-y-2 mb-6">
        {tool.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-foreground/80">
            <CheckCircle2
              className={`w-3.5 h-3.5 flex-shrink-0 mt-1 ${
                isPrimary ? "text-primary" : "text-accent"
              }`}
              strokeWidth={2}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2.5">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
        >
          <T en="Visit tool" fr="Accéder à l'outil" /> <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
        </a>
        <a
          href={tool.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
        >
          <T en="Documentation" fr="Documentation" /> <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

export default function DigitalToolsHubPage() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt(
      "Digital Tools Hub — SAICE / IFSS Inc.",
      "Espace outils numériques — SAICE / IFSS Inc.",
    );
  }, [tt]);

  const pagesTools: Tool[] = [
    {
      name: tt("Smart Market Matchmaker", "Smart Market Matchmaker"),
      tag: tt("Market access", "Accès au marché"),
      desc: tt(
        "Multi-buyer dashboards, off-take contract templates, KYC pre-screen, and exporter compliance modules — built for agri-input suppliers, exporters and aggregators.",
        "Tableaux de bord multi-acheteurs, modèles de contrats d'achat, pré-vérification KYC et modules de conformité exportateur — conçus pour les fournisseurs d'intrants agricoles, les exportateurs et les agrégateurs.",
      ),
      bullets: [
        tt("Buyer–seller match scoring", "Score de mise en relation acheteur-vendeur"),
        tt("Off-take contract library", "Bibliothèque de contrats d'achat"),
        tt("Exporter compliance pack", "Trousse de conformité exportateur"),
      ],
      url: "https://tools.saice.org/pages/smart-market",
      docs: "https://docs.saice.org/pages/smart-market",
    },
    {
      name: tt("IoT Precision Insight Engine", "Moteur IoT-Precision Insight"),
      tag: tt("Agronomy & climate", "Agronomie et climat"),
      desc: tt(
        "Custom satellite + sensor stacks with branded dashboards and yield-forecast APIs. Designed for ministries, financial institutions and large-scale farms.",
        "Couches satellite + capteurs sur mesure avec tableaux de bord à vos couleurs et API de prévision des rendements. Conçu pour les ministères, les institutions financières et les exploitations à grande échelle.",
      ),
      bullets: [
        tt("Sentinel-2 + sensor fusion", "Fusion Sentinel-2 + capteurs"),
        tt("Yield-forecast API", "API de prévision des rendements"),
        tt("Climate-risk maps", "Cartes de risque climatique"),
      ],
      url: "https://tools.saice.org/pages/precision-insight",
      docs: "https://docs.saice.org/pages/precision-insight",
    },
    {
      name: tt("ERP Finance & Inventory Tracker", "ERP finance et suivi des stocks"),
      tag: tt("Cooperative operations", "Exploitation coopérative"),
      desc: tt(
        "Multi-cooperative roll-ups, bank-grade reporting, and audit-ready financial views — usable by a single SME or a federation of fifty.",
        "Consolidation multi-coopératives, reporting de qualité bancaire et vues financières prêtes pour l'audit — utilisables par une seule PME comme par une fédération de cinquante.",
      ),
      bullets: [
        tt("Multi-entity roll-ups", "Consolidation multi-entités"),
        tt("IFRS-ready reports", "Rapports conformes IFRS"),
        tt("Mobile money integration", "Intégration mobile money"),
      ],
      url: "https://tools.saice.org/pages/erp",
      docs: "https://docs.saice.org/pages/erp",
    },
  ];

  const icesTools: Tool[] = [
    {
      name: tt("IoT Smart Bins", "Bacs intelligents IoT"),
      tag: tt("Collection", "Collecte"),
      desc: tt(
        "Fleet management for sensor-equipped bins — routing, fill-level optimisation, and predictive maintenance for municipal and private operators.",
        "Gestion de flotte pour bacs équipés de capteurs — tournées, optimisation du niveau de remplissage et maintenance prédictive pour opérateurs publics et privés.",
      ),
      bullets: [
        tt("Dynamic routing", "Tournées dynamiques"),
        tt("Fill-level forecasting", "Prévision du niveau de remplissage"),
        tt("Predictive maintenance", "Maintenance prédictive"),
      ],
      url: "https://tools.saice.org/ices/smart-bins",
      docs: "https://docs.saice.org/ices/smart-bins",
    },
    {
      name: tt("AI & Robotics Sorting", "Tri par IA et robotique"),
      tag: tt("Material recovery", "Récupération des matières"),
      desc: tt(
        "Throughput, contamination-rate, and material-recovery dashboards for sorting facilities — integrates with most conveyor and vision systems.",
        "Tableaux de bord de débit, de taux de contamination et de récupération des matières pour les centres de tri — s'intègre à la plupart des systèmes de convoyage et de vision.",
      ),
      bullets: [
        tt("Contamination tracking", "Suivi de la contamination"),
        tt("Material-recovery KPIs", "Indicateurs de récupération des matières"),
        tt("Operator overrides", "Surcharges opérateur"),
      ],
      url: "https://tools.saice.org/ices/sorting",
      docs: "https://docs.saice.org/ices/sorting",
    },
    {
      name: tt("RFID & Asset Management", "RFID et gestion d'actifs"),
      tag: tt("Assets", "Actifs"),
      desc: tt(
        "Bin and equipment tracking, asset register and depreciation tooling — works alongside any standard finance system.",
        "Suivi des bacs et équipements, registre d'actifs et outils d'amortissement — fonctionne aux côtés de tout système financier standard.",
      ),
      bullets: [
        tt("RFID + QR tracking", "Suivi RFID + QR"),
        tt("Asset register", "Registre d'actifs"),
        tt("Depreciation tooling", "Outils d'amortissement"),
      ],
      url: "https://tools.saice.org/ices/rfid",
      docs: "https://docs.saice.org/ices/rfid",
    },
    {
      name: tt("Data Analytics Platform", "Plateforme d'analytique de données"),
      tag: tt("Reporting", "Reporting"),
      desc: tt(
        "Cross-stream KPIs, EPR reporting and regulatory dashboards — one place for everything a municipality or producer responsibility scheme needs to file.",
        "Indicateurs inter-flux, reporting REP et tableaux de bord réglementaires — un seul endroit pour tout ce qu'une municipalité ou un régime de responsabilité élargie des producteurs doit transmettre.",
      ),
      bullets: [
        tt("EPR filings", "Déclarations REP"),
        tt("Cross-stream KPIs", "Indicateurs inter-flux"),
        tt("Regulator-ready exports", "Exports prêts pour le régulateur"),
      ],
      url: "https://tools.saice.org/ices/analytics",
      docs: "https://docs.saice.org/ices/analytics",
    },
    {
      name: tt("Mobile & Digital Applications", "Applications mobiles et numériques"),
      tag: tt("Citizen & operator", "Citoyens et opérateurs"),
      desc: tt(
        "Operator apps, citizen reporting flows, and payment integration — low-bandwidth and offline-first, in EN/FR/Kinyarwanda/Kirundi/Swahili.",
        "Applications opérateur, parcours de signalement citoyen et intégration des paiements — sobres en bande passante et orientés hors-ligne, en EN/FR/kinyarwanda/kirundi/swahili.",
      ),
      bullets: [
        tt("Offline-first", "Hors-ligne d'abord"),
        tt("Multilingual UX", "Expérience multilingue"),
        tt("Payment integration", "Intégration des paiements"),
      ],
      url: "https://tools.saice.org/ices/apps",
      docs: "https://docs.saice.org/ices/apps",
    },
    {
      name: tt("ML Carbon Calculator", "Calculateur carbone par apprentissage automatique"),
      tag: tt("MRV & carbon", "MRV et carbone"),
      desc: tt(
        "Methane and CO₂ averted, verified to MRV standards and ready for carbon-market submission — for ICES sites and partner operators.",
        "Méthane et CO₂ évités, vérifiés selon les normes MRV et prêts pour soumission aux marchés carbone — pour les sites ICES et les opérateurs partenaires.",
      ),
      bullets: [
        tt("MRV-compliant", "Conforme MRV"),
        tt("Methane + CO₂", "Méthane + CO₂"),
        tt("Carbon-market exports", "Exports vers les marchés carbone"),
      ],
      url: "https://tools.saice.org/ices/carbon",
      docs: "https://docs.saice.org/ices/carbon",
    },
  ];

  const licensing = [
    {
      t: tt("Public-good edition", "Édition d'intérêt public"),
      d: tt(
        "Cooperatives, women- and youth-led SMEs, and ministries running SAICE-funded programs use the tools at no cost. Data stays in their tenant.",
        "Les coopératives, les PME dirigées par des femmes et des jeunes ainsi que les ministères qui mènent des programmes financés par SAICE utilisent les outils sans frais. Les données restent dans leur tenant.",
      ),
    },
    {
      t: tt("Enterprise edition", "Édition Entreprise"),
      d: tt(
        "Licensed by IFSS Inc. to private operators with annual licence + per-seat fees. Branded dashboards, SLAs, and integrations included.",
        "Concédée par IFSS Inc. aux opérateurs privés avec licence annuelle + redevances par poste. Tableaux de bord à vos couleurs, SLA et intégrations inclus.",
      ),
    },
    {
      t: tt("Revenue share to SAICE", "Reversement à SAICE"),
      d: tt(
        "A published share of every enterprise licence flows back to SAICE to keep the public-good editions free, forever.",
        "Une part publiée de chaque licence Entreprise revient à SAICE pour maintenir gratuites, à jamais, les éditions d'intérêt public.",
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title={tt("One hub.", "Un seul espace.")}
        italic={tt("Every SAICE tool.", "Tous les outils SAICE.")}
        description={tt(
          "A single home for the digital tools that power our PAGES and ICES programs. Cooperatives and SMEs use them for free under SAICE; ministries, exporters and operators license the enterprise editions through IFSS Inc.",
          "Un point d'accès unique pour les outils numériques qui font tourner nos programmes PAGES et ICES. Les coopératives et les PME les utilisent gratuitement sous SAICE ; les ministères, exportateurs et opérateurs souscrivent aux éditions Entreprise via IFSS Inc.",
        )}
        crumbs={[
          { label: tt("Our services", "Nos services"), href: "/services" },
          { label: tt("Digital Tools Hub", "Espace outils numériques") },
        ]}
        image={digitalToolsHero}
        imageAlt={tt("Digital tools hub for SAICE programs", "Espace outils numériques pour les programmes SAICE")}
        actions={
          <div className="flex flex-wrap gap-3">
            <a
              href="#pages"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold transition-colors"
            >
              <T en="PAGES tools" fr="Outils PAGES" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#ices"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm font-semibold transition-colors"
            >
              <T en="ICES tools" fr="Outils ICES" />
            </a>
          </div>
        }
      />

      {/* PAGES */}
      <section id="pages" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-4 h-4 text-primary" strokeWidth={1.75} />

            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Tools for farmers, cooperatives, <span className="display-italic">and the people who buy from them.</span></>}
                fr={<>Des outils pour les producteurs, les coopératives, <span className="display-italic">et celles et ceux qui leur achètent.</span></>}
              />
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pagesTools.map((t) => (
              <ToolCard key={t.name} tool={t} accent="primary" />
            ))}
          </div>
        </div>
      </section>

      {/* ICES */}
      <section id="ices" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-accent" strokeWidth={1.75} />

            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Tools for municipalities, processors <span className="display-italic">and waste operators.</span></>}
                fr={<>Des outils pour les municipalités, les transformateurs <span className="display-italic">et les opérateurs de déchets.</span></>}
              />
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {icesTools.map((t) => (
              <ToolCard key={t.name} tool={t} accent="accent" />
            ))}
          </div>
        </div>
      </section>

      {/* How licensing works */}
      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">

            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Free for the mission. <span className="display-italic">Paid for the rest.</span></>}
                fr={<>Gratuit pour la mission. <span className="display-italic">Payant pour le reste.</span></>}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {licensing.map(({ t, d }) => (
              <div key={t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/services#proposal"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
            >
              <T en="Request a licence quote" fr="Demander un devis de licence" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
            >
              <T en="Back to Our services" fr="Retour à Nos services" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
