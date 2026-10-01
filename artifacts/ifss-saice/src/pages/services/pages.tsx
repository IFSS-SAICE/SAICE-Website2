import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Users,
  LineChart,
  Satellite,
  Banknote,
  Sprout,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import pagesServicesImg from "@/assets/images/services/pages-services.png";
import { T, useTT } from "@/lib/i18n";

export default function PagesServicesPage() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt(
      "Services for PAGES · Agri-intelligence — SAICE / IFSS Inc.",
      "Services pour PAGES · Agri-intelligence — SAICE / IFSS Inc.",
    );
  }, [tt]);

  const deliverables = [
    {
      Icon: Sprout,
      t: tt("Value-chain mapping & cooperative diagnostics", "Cartographie des chaînes de valeur et diagnostics coopératifs"),
      d: tt(
        "Parcel and cooperative mapping, baseline diagnostics and capability scoring, with gender, youth and climate built in.",
        "Cartographie des parcelles et coopératives, diagnostics de référence et notation des capacités, intégrant genre, jeunesse et climat.",
      ),
      detail: tt(
        "Field enumerators assess each cooperative using 42 indicators: governance, financial literacy, post-harvest losses, gendered access to inputs and climate-shock exposure. Outputs: a one-page diagnostic per cooperative and an aggregated summary for the funder or ministry.",
        "Les enquêteurs évaluent chaque coopérative à 42 indicateurs : gouvernance, éducation financière, pertes post-récolte, accès aux intrants selon le genre et exposition aux chocs climatiques. Livrables : diagnostic d'une page par coopérative et synthèse agrégée pour le bailleur ou le ministère.",
      ),
    },
    {
      Icon: LineChart,
      t: tt("Smart Market Matchmaker — Enterprise", "Smart Market Matchmaker — Entreprise"),
      d: tt(
        "Multi-buyer dashboards help cooperatives sell to formal buyers without losing margin to intermediaries.",
        "Tableaux de bord multi-acheteurs pour les coopératives : vendre aux acheteurs formels sans perdre de marge au profit des intermédiaires.",
      ),
      detail: tt(
        "Branded Enterprise tenant: buyer onboarding, KYC, off-take templates (EN/FR), shipment tracking and an exporter compliance module for GLOBALG.A.P., organic and EU-CSDDD documentation.",
        "Déploiement Entreprise multilocataire à vos couleurs : intégration des acheteurs, KYC, modèles de contrats d'achat (EN/FR), suivi des expéditions et module de conformité exportateur pour GLOBALG.A.P., bio et documentation EU-CSDDD.",
      ),
    },
    {
      Icon: Satellite,
      t: tt("IoT Precision Insight Engine — Enterprise", "Moteur IoT-Precision Insight — Entreprise"),
      d: tt(
        "Parcel-level intelligence at portfolio scale for ministries, exporters and agri-finance partners.",
        "Données à la parcelle, à l'échelle d'un portefeuille, pour ministères, exportateurs et partenaires de financement agricole.",
      ),
      detail: tt(
        "Sentinel-2 + Planet imagery fused with optional ground-sensor telemetry (soil moisture, weather). Indices, anomaly alerts, yield-forecast API, white-labelled dashboard, single sign-on and export pipeline to your data warehouse.",
        "Imagerie Sentinel-2 + Planet fusionnée avec télémétrie au sol en option (humidité du sol, météo). Indices, alertes d'anomalies, API de prévision des rendements, tableau de bord en marque blanche, authentification unique et pipeline d'export vers votre entrepôt de données.",
      ),
    },
    {
      Icon: Banknote,
      t: tt("Bankable business plans for agri-SMEs", "Plans d'affaires bancables pour PME agricoles"),
      d: tt(
        "Investment-grade business plans, financial models and concept notes for agri-SMEs and cooperatives.",
        "Plans d'affaires de qualité investissement, modèles financiers et notes conceptuelles pour PME agricoles et coopératives.",
      ),
      detail: tt(
        "Five-year financial model, sensitivity analysis, capital stack proposal and investor-ready narrative for public and blended finance. Aligned with PSTA 5 (Rwanda), ASTGS (Kenya), CAADP Kampala 2026–2035 and AU Agenda 2063.",
        "Modèle financier sur cinq ans, analyse de sensibilité, proposition de structure de capital et récit prêt pour les investisseurs, pour le financement public et mixte. Alignés sur PSTA 5 (Rwanda), ASTGS (Kenya), PDDAA Kampala 2026-2035 et l'Agenda 2063 de l'UA.",
      ),
    },
  ];

  const who = [
    { Icon: Users, t: tt("Cooperatives & producer organisations", "Coopératives et organisations de producteurs"), d: tt("Diagnostics, market access, and finance-readiness work — usually subsidised under our discount policy.", "Diagnostics, accès au marché et préparation au financement — généralement subventionnés au titre de notre politique de tarifs préférentiels.") },
    { Icon: LineChart, t: tt("Ministries & development partners", "Ministères et partenaires de développement"), d: tt("Sector diagnostics, M&E systems, and tenanted Enterprise rollouts across districts or countries.", "Diagnostics sectoriels, systèmes de suivi-évaluation et déploiements Entreprise multilocataires à l'échelle de districts ou de pays.") },
    { Icon: Banknote, t: tt("Agri-exporters & SMEs", "Exportateurs agricoles et PME"), d: tt("Compliance, traceability, buyer and finance links for off-take contracts.", "Conformité, traçabilité, liens acheteurs et financement pour les contrats d'achat.") },
  ];

  const policies = [
    tt("Rwanda — PSTA 5 (Strategic Plan for Agriculture Transformation)", "Rwanda — PSTA 5 (Plan stratégique pour la transformation de l'agriculture)"),
    tt("Kenya — ASTGS (Agricultural Sector Transformation & Growth Strategy)", "Kenya — ASTGS (Stratégie de transformation et de croissance du secteur agricole)"),
    tt("Continental — CAADP Kampala Declaration 2026–2035", "Continental — Déclaration PDDAA de Kampala 2026-2035"),
    tt("Continental — AU Agenda 2063", "Continental — Agenda 2063 de l'UA"),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={tt("From soil to shelf —", "Du sol à l'étalage —")}
        italic={tt("built for African smallholders.", "conçu pour les petits exploitants africains.")}
        description={tt(
          "PAGES · Agri-intelligence. Cooperative and parcel mapping, inclusion quotas, and field advisory with enterprise tools through implementation.",
          "PAGES · Agri-intelligence. Cartographie des coopératives et parcelles, quotas d'inclusion, conseil de terrain et outils Entreprise jusqu'à la mise en œuvre.",
        )}
        crumbs={[
          { label: tt("Our services", "Nos services"), href: "/services" },
          { label: tt("Services for PAGES", "Services pour PAGES") },
        ]}
        image={pagesServicesImg}
        imageAlt={tt("Agronomist and cooperative leader inspecting maize in the field", "Agronome et dirigeant·e de coopérative inspectant du maïs au champ")}
      />

      {/* Intro */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4"><T en="What this stream is" fr="Ce qu'est ce volet" /></p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                <T
                  en={<>Agri-intelligence that <span className="display-italic">earns its place in the field.</span></>}
                  fr={<>Une agri-intelligence qui <span className="display-italic">gagne sa place sur le terrain.</span></>}
                />
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                <T
                  en="PAGES is our agri-intelligence program. Funders, ministries, exporters and finance partners commission these services; the margin funds SAICE programs."
                  fr="PAGES est notre programme d'agri-intelligence. Bailleurs, ministères, exportateurs et partenaires financiers commandent ces services ; la marge finance les programmes SAICE."
                />
              </p>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                <T
                  en="Each engagement covers one of four deliverables, fixed-price or time-and-materials. Discounts for cooperatives and women- and youth-led organisations apply at proposal stage."
                  fr="Chaque mandat couvre un des quatre livrables, au forfait ou en régie. Remises pour coopératives et structures dirigées par des femmes ou des jeunes dès la proposition."
                />
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55"><T en="Aligned to" fr="Aligné sur" /></p>
                </div>
                <ul className="space-y-2.5">
                  {policies.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables in detail */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="Four deliverables" fr="Quatre livrables" /></p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>What you can <span className="display-italic">commission.</span></>}
                fr={<>Ce que vous pouvez <span className="display-italic">commander.</span></>}
              />
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {deliverables.map(({ Icon, t, d, detail }) => (
              <article key={t} className="blob-card bg-background p-7 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-3">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4">{d}</p>
                <p className="text-sm text-foreground/65 leading-relaxed">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who hires this stream */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="Who hires this stream" fr="Qui mobilise ce volet" /></p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Three audiences. <span className="display-italic">One stack.</span></>}
                fr={<>Trois publics. <span className="display-italic">Une seule pile.</span></>}
              />
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {who.map(({ Icon, t, d }) => (
              <div key={t} className="blob-card bg-card/40 p-6">
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

      {/* CTA */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Bring us a <span className="display-italic">scope.</span></>}
                fr={<>Apportez-nous un <span className="display-italic">cadrage.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Send a one-page scope: country, partner, target cooperatives and your question. We respond within five working days."
                fr="Envoyez un cadrage d'une page : pays, partenaire, coopératives cibles et votre question. Réponse sous cinq jours ouvrables."
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
              >
                <T en="Get involved" fr="S'impliquer" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors"
              >
                <T en="Back to all services" fr="Retour à tous les services" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
