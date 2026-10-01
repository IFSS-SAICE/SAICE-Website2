import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  SunMedium,
  Factory,
  Banknote,
  LineChart,
  Building2,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import pacesServicesImg from "@/assets/images/services/paces-services.png";
import { T, useTT } from "@/lib/i18n";

export default function PacesServicesPage() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt(
      "Services for PACES · Sustainable energy — SAICE / IFSS Inc.",
      "Services pour PACES · Énergie durable — SAICE / IFSS Inc.",
    );
  }, [tt]);

  const deliverables = [
    {
      Icon: SunMedium,
      t: tt("Solar mini-grid feasibility & design", "Faisabilité et conception de mini-réseaux solaires"),
      d: tt(
        "From site selection and demand assessment to a bankable design, with community engagement.",
        "Du choix des sites et de l'évaluation de la demande à une conception bancable, avec engagement communautaire.",
      ),
      detail: tt(
        "GIS site shortlist, demand surveys, sizing (PV, BESS, distribution), tariff modelling and scenarios, and stakeholder-engagement plan. Outputs: feasibility report and design pack for procurement or finance.",
        "Présélection par SIG, enquêtes de demande, dimensionnement (PV, BESS, distribution), modélisation et scénarios tarifaires, plan d'engagement des parties prenantes. Livrables : rapport de faisabilité et dossier de conception pour approvisionnement ou financement.",
      ),
    },
    {
      Icon: Factory,
      t: tt("Productive-use clean energy advisory", "Conseil en énergie propre à usage productif"),
      d: tt(
        "Energy for agri-processing, cold-chain and waste sorting, supporting livelihoods.",
        "Énergie pour la transformation agricole, la chaîne du froid et le tri des déchets, au service des moyens de subsistance.",
      ),
      detail: tt(
        "Value-chain diagnostics, appliance and load profiling. Productive-use packages co-designed with cooperatives and SMEs, with phased financing and TA for capable equipment operators.",
        "Diagnostics de chaînes de valeur, profils des équipements et des charges. Solutions d'usage productif coconçues avec coopératives et PME, financement et assistance technique échelonnés pour des opérateurs capables d'exploiter les équipements.",
      ),
    },
    {
      Icon: Banknote,
      t: tt("Climate finance structuring", "Structuration de la finance climat"),
      d: tt(
        "Blended-finance packs for mini-grids — combining concessional, results-based and commercial capital.",
        "Montages de finance mixte pour mini-réseaux — combinant capitaux concessionnels, basés sur les résultats et commerciaux.",
      ),
      detail: tt(
        "Capital-stack design, term-sheet support, RBF milestones and investor-ready financial models, aligned with GCF, AfDB and bilateral facility templates for development finance.",
        "Structure de capital, appui aux term sheets, jalons RBF et modèles financiers pour investisseurs, alignés sur les modèles du FVC, de la BAD et des facilités bilatérales de financement du développement.",
      ),
    },
    {
      Icon: LineChart,
      t: tt("Energy-access M&E", "Suivi-évaluation de l'accès à l'énergie"),
      d: tt(
        "Connection counts, kWh delivered and livelihood indicators — measured, verified and published quarterly.",
        "Nombre de raccordements, kWh livrés et indicateurs de moyens de subsistance — mesurés, vérifiés et publiés chaque trimestre.",
      ),
      detail: tt(
        "MTF-aligned indicators, automated meter-data ingestion, household and enterprise surveys, and a public quarterly dashboard for donor reporting, tariff and product-design decisions.",
        "Indicateurs alignés sur le MTF, ingestion automatisée des données compteurs, enquêtes ménages et entreprises, et tableau de bord public trimestriel pour le reporting bailleurs et les décisions tarifaires et de conception des produits.",
      ),
    },
  ];

  const who = [
    { Icon: Building2, t: tt("Governments & rural energy agencies", "Gouvernements et agences d'énergie rurale"), d: tt("Feasibility, design and M&E support for national electrification programmes.", "Soutien à la faisabilité, à la conception et au suivi-évaluation des programmes nationaux d'électrification.") },
    { Icon: Banknote, t: tt("Developers & finance partners", "Développeurs et partenaires financiers"), d: tt("Bankable design packs, capital structuring and results-based finance instrumentation.", "Dossiers de conception bancables, structuration du capital et instrumentation de la finance basée sur les résultats.") },
    { Icon: Users, t: tt("Cooperatives & productive-use SMEs", "Coopératives et PME à usage productif"), d: tt("Productive-use design and finance-readiness — usually subsidised under our discount policy.", "Conception d'usages productifs et préparation au financement — généralement subventionnés au titre de notre politique de tarifs préférentiels.") },
  ];

  const policies = [
    tt("ESMAP Multi-Tier Framework (MTF) for energy access", "Cadre multi-niveaux (MTF) de l'ESMAP pour l'accès à l'énergie"),
    tt("SE4All — Sustainable Energy for All", "SE4All — Énergie durable pour tous"),
    tt("GCF / AfDB results-based finance templates", "Modèles de finance basée sur les résultats du FVC et de la BAD"),
    tt("AU Agenda 2063 — Goal 7 (sustainable economies)", "Agenda 2063 de l'UA — Objectif 7 (économies durables)"),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={tt("Clean energy that", "Une énergie propre qui")}
        italic={tt("pays its own way.", "se finance d'elle-même.")}
        description={tt(
          "PACES · Sustainable energy for productive use: agri-processing, cold-chain and sorting that support livelihoods.",
          "PACES · Énergie durable à usage productif : transformation agricole, chaîne du froid et tri au service des moyens de subsistance.",
        )}
        crumbs={[
          { label: tt("Our services", "Nos services"), href: "/services" },
          { label: tt("Services for PACES", "Services pour PACES") },
        ]}
        image={pacesServicesImg}
        imageAlt={tt("Technician installing a solar panel on a rural rooftop at golden hour", "Technicien·ne installant un panneau solaire sur un toit rural à l'heure dorée")}
      />

      {/* Intro */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4"><T en="What this stream is" fr="Ce qu'est ce volet" /></p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                <T
                  en={<>Energy services <span className="display-italic">built around the load that pays.</span></>}
                  fr={<>Des services énergétiques <span className="display-italic">conçus autour de la charge qui paie.</span></>}
                />
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                <T
                  en="PACES is our sustainable-energy program. Governments, developers and finance partners commission these services; the margin funds SAICE programs."
                  fr="PACES est notre programme d'énergie durable. Gouvernements, développeurs et partenaires financiers commandent ces services ; la marge finance les programmes SAICE."
                />
              </p>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                <T
                  en="Feasibility → design → finance → measure, scoped fixed-price or time-and-materials. Discounts for cooperatives and women- and youth-led organisations apply at proposal stage."
                  fr="Faisabilité → conception → financement → mesure, au forfait ou en régie. Remises pour coopératives et structures dirigées par des femmes ou des jeunes dès la proposition."
                />
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent" strokeWidth={1.75} />
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

      {/* Deliverables */}
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

      {/* Who hires */}
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
                en="Send a one-page scope: site or programme, anchor productive load, financing horizon and your question. We respond within five working days."
                fr="Envoyez un cadrage d'une page : site ou programme, charge productive d'ancrage, horizon de financement et votre question. Réponse sous cinq jours ouvrables."
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
