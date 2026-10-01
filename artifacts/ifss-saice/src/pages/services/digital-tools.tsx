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
        "Multi-buyer dashboards and KYC pre-screening for agri-input suppliers, exporters and aggregators, with off-take templates and export compliance modules.",
        "Tableaux de bord multi-acheteurs et pré-vérification KYC pour fournisseurs d'intrants agricoles, exportateurs et agrégateurs, avec contrats d'achat types et modules de conformité export.",
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
        "Custom satellite + sensor stacks and branded dashboards for ministries, financial institutions and large-scale farms.",
        "Couches satellite + capteurs sur mesure et tableaux de bord à vos couleurs pour ministères, institutions financières et grandes exploitations.",
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
        "Multi-cooperative, bank-grade reporting and audit-ready financial views, from one SME to a federation of fifty.",
        "Reporting multi-coopératives de qualité bancaire et vues financières prêtes pour l'audit, d'une PME à une fédération de cinquante.",
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
        "Manage sensor-equipped bin fleets for municipal and private operators, with fill-level optimisation.",
        "Gestion de flottes de bacs à capteurs pour opérateurs municipaux et privés, avec optimisation du remplissage.",
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
        "Sorting-facility dashboards for throughput, contamination rates and material recovery. Integrates with most conveyor and vision systems.",
        "Tableaux de bord de débit, taux de contamination et récupération des matières pour centres de tri. Intégration à la plupart des systèmes de convoyage et de vision.",
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
        "Bin and equipment asset management alongside any standard finance system.",
        "Gestion d'actifs pour bacs et équipements, compatible avec tout système financier standard.",
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
        "Regulatory dashboards for municipalities and producer responsibility schemes, with cross-stream KPIs and EPR reporting.",
        "Tableaux de bord réglementaires pour municipalités et régimes de responsabilité élargie des producteurs, avec indicateurs inter-flux et reporting REP.",
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
        "Low-bandwidth, offline-first operator and citizen-reporting apps with payments, in EN/FR/Kinyarwanda/Kirundi/Swahili.",
        "Applications opérateur et signalement citoyen, sobres en bande passante et orientées hors-ligne, avec paiements, en EN/FR/kinyarwanda/kirundi/swahili.",
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
        "MRV-verified methane and CO₂ averted, ready for carbon-market submission by ICES sites and partner operators.",
        "Méthane et CO₂ évités, vérifiés selon les normes MRV, prêts pour soumission aux marchés carbone par les sites ICES et opérateurs partenaires.",
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
        "Free for cooperatives, women- and youth-led SMEs, and ministries running SAICE-funded programs. Data stays in their tenant.",
        "Gratuit pour les coopératives, PME dirigées par des femmes et des jeunes, et ministères menant des programmes financés par SAICE. Données conservées dans leur tenant.",
      ),
    },
    {
      t: tt("Enterprise edition", "Édition Entreprise"),
      d: tt(
        "IFSS Inc. licences for private operators: annual licence + per-seat fees. Branded dashboards, SLAs and integrations included.",
        "Licences IFSS Inc. pour opérateurs privés : licence annuelle + frais par poste. Tableaux de bord à vos couleurs, SLA et intégrations inclus.",
      ),
    },
    {
      t: tt("Revenue share to SAICE", "Reversement à SAICE"),
      d: tt(
        "A published share of each enterprise licence funds SAICE, keeping public-good editions free forever.",
        "Une part publiée de chaque licence Entreprise finance SAICE, maintenant les éditions d'intérêt public gratuites à jamais.",
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero title={tt("One hub.", "Un seul espace.")}
        italic={tt("Every SAICE tool.", "Tous les outils SAICE.")}
        description={tt(
          "PAGES and ICES tools, free for cooperatives and SMEs under SAICE. Enterprise editions for ministries, exporters and operators are licensed through IFSS Inc.",
          "Outils PAGES et ICES, gratuits pour coopératives et PME sous SAICE. Éditions Entreprise pour ministères, exportateurs et opérateurs sous licence IFSS Inc.",
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
                en={<>Tools for farmers, cooperatives <span className="display-italic">and buyers.</span></>}
                fr={<>Des outils pour producteurs, coopératives <span className="display-italic">et acheteurs.</span></>}
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
