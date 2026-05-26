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
        "Parcel- and cooperative-level mapping, baseline diagnostics and capability scoring. Gender, youth and climate lenses built into the methodology — not bolted on at the end.",
        "Cartographie à l'échelle des parcelles et des coopératives, diagnostics de référence et notation des capacités. Les dimensions genre, jeunesse et climat sont intégrées à la méthodologie, et non ajoutées en fin de parcours.",
      ),
      detail: tt(
        "Field enumerators walk each cooperative against a 42-indicator instrument covering governance, finance literacy, post-harvest losses, gendered access to inputs and exposure to climate shocks. Outputs: a one-page diagnostic per cooperative and an aggregated rollup for the funder or ministry.",
        "Des enquêteurs de terrain évaluent chaque coopérative à l'aide d'un instrument à 42 indicateurs couvrant la gouvernance, l'éducation financière, les pertes post-récolte, l'accès aux intrants selon le genre et l'exposition aux chocs climatiques. Livrables : un diagnostic d'une page par coopérative et une synthèse agrégée pour le bailleur ou le ministère.",
      ),
    },
    {
      Icon: LineChart,
      t: tt("Smart Market Matchmaker — Enterprise", "Smart Market Matchmaker — Entreprise"),
      d: tt(
        "Multi-buyer dashboards, off-take templates and exporter compliance modules. Built so cooperatives can move volume to formal buyers without losing margin to intermediaries.",
        "Tableaux de bord multi-acheteurs, modèles de contrats d'achat et modules de conformité exportateur. Conçu pour que les coopératives écoulent leurs volumes auprès d'acheteurs formels sans perdre de marge au profit des intermédiaires.",
      ),
      detail: tt(
        "Tenanted Enterprise deployment with your branding, buyer onboarding, KYC, off-take contract templates (EN/FR), shipment tracking and an exporter-compliance module covering GLOBALG.A.P., organic and EU-CSDDD documentation.",
        "Déploiement Entreprise multilocataire à vos couleurs : intégration des acheteurs, KYC, modèles de contrats d'achat (EN/FR), suivi des expéditions et un module de conformité exportateur couvrant GLOBALG.A.P., bio et la documentation EU-CSDDD.",
      ),
    },
    {
      Icon: Satellite,
      t: tt("IoT Precision Insight Engine — Enterprise", "Moteur IoT-Precision Insight — Entreprise"),
      d: tt(
        "Satellite and ground-sensor stacks, branded dashboards and yield-forecast APIs. Designed for ministries, exporters and agri-finance partners who need parcel-level signal at portfolio scale.",
        "Couches satellitaires et capteurs de terrain, tableaux de bord à vos couleurs et API de prévision des rendements. Conçu pour les ministères, exportateurs et partenaires de financement agricole qui ont besoin d'un signal à la parcelle, à l'échelle d'un portefeuille.",
      ),
      detail: tt(
        "Sentinel-2 + Planet imagery fused with optional ground-sensor telemetry (soil moisture, weather). Indices, anomaly alerts and a yield-forecast API. White-labelled dashboard, single-sign-on, and an export pipeline to your data warehouse.",
        "Imagerie Sentinel-2 + Planet fusionnée avec la télémétrie de capteurs au sol en option (humidité du sol, météo). Indices, alertes d'anomalies et API de prévision des rendements. Tableau de bord en marque blanche, authentification unique et pipeline d'export vers votre entrepôt de données.",
      ),
    },
    {
      Icon: Banknote,
      t: tt("Bankable business plans for agri-SMEs", "Plans d'affaires bancables pour PME agricoles"),
      d: tt(
        "Investment-grade business plans, financial models and concept notes for agri-SMEs and cooperatives going to market.",
        "Plans d'affaires de qualité investissement, modèles financiers et notes conceptuelles pour les PME agricoles et les coopératives qui se présentent au marché.",
      ),
      detail: tt(
        "Five-year financial model, sensitivity analysis, capital stack proposal and an investor-ready narrative. Aligned with PSTA 5 (Rwanda), ASTGS (Kenya), CAADP Kampala 2026–2035 and AU Agenda 2063 so plans speak the language of public and blended-finance capital.",
        "Modèle financier sur cinq ans, analyse de sensibilité, proposition de structure de capital et narratif prêt pour les investisseurs. Aligné sur PSTA 5 (Rwanda), ASTGS (Kenya), PDDAA Kampala 2026-2035 et l'Agenda 2063 de l'UA pour que les plans parlent le langage des capitaux publics et mixtes.",
      ),
    },
  ];

  const who = [
    { Icon: Users, t: tt("Cooperatives & producer organisations", "Coopératives et organisations de producteurs"), d: tt("Diagnostics, market access, and finance-readiness work — usually subsidised under our discount policy.", "Diagnostics, accès au marché et préparation au financement — généralement subventionnés au titre de notre politique de tarifs préférentiels.") },
    { Icon: LineChart, t: tt("Ministries & development partners", "Ministères et partenaires de développement"), d: tt("Sector diagnostics, M&E systems, and tenanted Enterprise rollouts across districts or countries.", "Diagnostics sectoriels, systèmes de suivi-évaluation et déploiements Entreprise multilocataires à l'échelle de districts ou de pays.") },
    { Icon: Banknote, t: tt("Agri-exporters & SMEs", "Exportateurs agricoles et PME"), d: tt("Compliance, traceability and the buyer/finance pipeline that turns a harvest into an off-take contract.", "Conformité, traçabilité et chaîne acheteur/financement qui transforme une récolte en contrat d'achat.") },
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
          "Services for PAGES · Agri-intelligence. Mapping at cooperative and parcel level. Inclusion quotas, not aspirations. Advisory and enterprise tooling that stays in the field through implementation.",
          "Services pour PAGES · Agri-intelligence. Cartographie à l'échelle des coopératives et des parcelles. Des quotas d'inclusion, pas de simples intentions. Conseil et outils Entreprise qui restent sur le terrain jusqu'à la mise en œuvre.",
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
                  en="PAGES is our agri-intelligence program. The services on this page are how funders, ministries, exporters and finance partners buy into the PAGES stack — and how the margin flows back into SAICE programming."
                  fr="PAGES est notre programme d'agri-intelligence. Les services présentés sur cette page sont la façon dont bailleurs, ministères, exportateurs et partenaires financiers s'engagent dans la pile PAGES — et dont la marge revient dans la programmation SAICE."
                />
              </p>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                <T
                  en="Every engagement is mapped to one of four deliverables below. Each is scoped fixed-price or time-and-materials, with cooperative, women- and youth-led discounts applied at proposal stage."
                  fr="Chaque engagement correspond à l'un des quatre livrables ci-dessous. Chacun est cadré au forfait ou en régie, avec des remises pour coopératives et structures dirigées par des femmes ou des jeunes appliquées dès la proposition."
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
                en="The fastest path to a proposal is a one-page scope: country, partner, target cooperatives, and the question you need answered. We come back within five working days."
                fr="La voie la plus rapide vers une proposition est un cadrage d'une page : pays, partenaire, coopératives cibles et la question à laquelle vous voulez une réponse. Nous revenons vers vous sous cinq jours ouvrables."
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
