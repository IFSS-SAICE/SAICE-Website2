import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Recycle,
  ClipboardList,
  Cpu,
  Calculator,
  Users,
  Building2,
  Factory,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import icesServicesImg from "@/assets/images/services/ices-services.png";
import { T, useTT } from "@/lib/i18n";

export default function IcesServicesPage() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt(
      "Services for ICES · Circular economy — SAICE / IFSS Inc.",
      "Services pour ICES · Économie circulaire — SAICE / IFSS Inc.",
    );
  }, [tt]);

  const deliverables = [
    {
      Icon: ClipboardList,
      t: tt("Waste-stream audits & circular strategy", "Audits des flux de déchets et stratégie circulaire"),
      d: tt(
        "Diagnostics and roadmaps for cities, EPR schemes and waste-led SMEs — from material flow analysis to a sequenced investment plan.",
        "Diagnostics et feuilles de route pour les villes, les régimes REP et les PME du secteur des déchets — de l'analyse des flux de matières à un plan d'investissement séquencé.",
      ),
      detail: tt(
        "Six- to twelve-week engagements: characterisation studies, MFA, stakeholder mapping, and a costed circular roadmap with phased capex, governance recommendations and a draft EPR fee structure where relevant.",
        "Missions de six à douze semaines : études de caractérisation, AFM, cartographie des parties prenantes et feuille de route circulaire chiffrée avec investissements échelonnés, recommandations de gouvernance et projet de barème de redevances REP le cas échéant.",
      ),
    },
    {
      Icon: Cpu,
      t: tt("IoT Smart Bins & sorting analytics", "Bacs intelligents IoT et analytique de tri"),
      d: tt(
        "Fleet management, route optimisation, AI-assisted sorting and material-recovery dashboards — deployed as Enterprise tenants.",
        "Gestion de flotte, optimisation des tournées, tri assisté par IA et tableaux de bord de récupération des matières — déployés en tenants Entreprise.",
      ),
      detail: tt(
        "Hardware-agnostic backend that ingests fill-level sensors, weighbridge data and MRF computer-vision feeds. Outputs: route plans for collection fleets, contamination alerts, and a recovery-rate dashboard for operations and reporting teams.",
        "Backend indépendant du matériel qui ingère les capteurs de niveau de remplissage, les données de pesage et les flux de vision par ordinateur des centres de tri. Livrables : plans de tournées pour les flottes de collecte, alertes de contamination et tableau de bord du taux de récupération pour les équipes d'exploitation et de reporting.",
      ),
    },
    {
      Icon: Calculator,
      t: tt("ML Carbon Calculator (MRV-grade)", "Calculateur carbone par apprentissage automatique (qualité MRV)"),
      d: tt(
        "Methane and CO₂ averted, calculated to MRV standards and packaged for carbon-market submission.",
        "Méthane et CO₂ évités, calculés selon les normes MRV et préparés pour soumission aux marchés carbone.",
      ),
      detail: tt(
        "Methodology mapped to Verra VM0046 / VCS waste-sector protocols. Activity data ingested from Smart Bins or third-party systems, emissions factors localised, and a verifier-ready evidence pack generated per reporting period.",
        "Méthodologie alignée sur les protocoles Verra VM0046 / VCS pour le secteur des déchets. Données d'activité ingérées depuis les bacs intelligents ou des systèmes tiers, facteurs d'émissions localisés et dossier de preuves prêt pour vérification généré à chaque période de reporting.",
      ),
    },
    {
      Icon: Users,
      t: tt("Cooperative incubation for waste-pickers", "Incubation coopérative pour les récupérateurs informels"),
      d: tt(
        "Youth- and women-led cooperatives set up to take on collection, sorting and recovery contracts at scale.",
        "Coopératives dirigées par des jeunes et des femmes, structurées pour décrocher des contrats de collecte, de tri et de récupération à grande échelle.",
      ),
      detail: tt(
        "Registration support, financial literacy, occupational safety, contract templates and a 12-month TA package. Run jointly with municipal partners; graduates plug directly into EPR-scheme reporting pipelines.",
        "Appui à l'enregistrement, éducation financière, sécurité au travail, modèles de contrats et accompagnement technique de 12 mois. Mené conjointement avec les partenaires municipaux ; les coopératives diplômées s'intègrent directement aux chaînes de reporting des régimes REP.",
      ),
    },
  ];

  const who = [
    { Icon: Building2, t: tt("Cities & municipalities", "Villes et municipalités"), d: tt("Diagnostics, master plans, and operations dashboards for solid-waste departments.", "Diagnostics, schémas directeurs et tableaux de bord opérationnels pour les services de gestion des déchets solides.") },
    { Icon: Factory, t: tt("EPR schemes & producers", "Régimes REP et producteurs"), d: tt("Compliance, reporting and verified material-recovery data for plastic, packaging and e-waste schemes.", "Conformité, reporting et données vérifiées de récupération des matières pour les régimes plastique, emballage et DEEE.") },
    { Icon: Users, t: tt("Waste-led cooperatives & SMEs", "Coopératives et PME du secteur des déchets"), d: tt("Incubation, tooling and finance-readiness — usually subsidised under our discount policy.", "Incubation, outillage et préparation au financement — généralement subventionnés au titre de notre politique de tarifs préférentiels.") },
  ];

  const policies = [
    tt("Verra VM0046 — Methodology for Reduction of Landfill Disposal", "Verra VM0046 — Méthodologie de réduction de la mise en décharge"),
    tt("VCS Standard (Verified Carbon Standard) — Waste sector", "Norme VCS (Verified Carbon Standard) — Secteur des déchets"),
    tt("EU CSDDD — supply-chain due diligence", "CSDDD UE — devoir de vigilance des chaînes d'approvisionnement"),
    tt("African Circular Economy Alliance (ACEA) framework", "Cadre de l'Alliance africaine pour l'économie circulaire (ACEA)"),
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={tt("Circular systems that", "Des systèmes circulaires qui")}
        italic={tt("actually close the loop.", "bouclent réellement la boucle.")}
        description={tt(
          "Services for ICES · Circular economy. Audit, design, instrument, measure. We help cities, EPR schemes and waste-led SMEs move material — and prove it with MRV-grade carbon data.",
          "Services pour ICES · Économie circulaire. Auditer, concevoir, instrumenter, mesurer. Nous aidons les villes, les régimes REP et les PME des déchets à mobiliser de la matière — et à le prouver avec des données carbone de qualité MRV.",
        )}
        crumbs={[
          { label: tt("Our services", "Nos services"), href: "/services" },
          { label: tt("Services for ICES", "Services pour ICES") },
        ]}
        image={icesServicesImg}
        imageAlt={tt("Engineer inspecting a smart waste-bin sensor in a recovery facility", "Ingénieur·e inspectant un capteur de bac intelligent dans un centre de récupération")}
      />

      {/* Intro */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4"><T en="What this stream is" fr="Ce qu'est ce volet" /></p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                <T
                  en={<>Circular work that <span className="display-italic">moves material — and proves it.</span></>}
                  fr={<>Une démarche circulaire qui <span className="display-italic">mobilise la matière — et le prouve.</span></>}
                />
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                <T
                  en="ICES is our circular-economy program. The services here are how municipalities, EPR schemes, producers and waste-led SMEs buy into the ICES stack — and how the margin flows back into SAICE programming."
                  fr="ICES est notre programme d'économie circulaire. Les services ci-dessous sont la façon dont municipalités, régimes REP, producteurs et PME du secteur des déchets s'engagent dans la pile ICES — et dont la marge revient dans la programmation SAICE."
                />
              </p>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                <T
                  en="Engagements run audit → design → instrument → measure. Each deliverable below is scoped fixed-price or time-and-materials, with cooperative, women- and youth-led discounts applied at proposal stage."
                  fr="Les engagements suivent un cycle audit → conception → instrumentation → mesure. Chaque livrable ci-dessous est cadré au forfait ou en régie, avec des remises pour coopératives et structures dirigées par des femmes ou des jeunes appliquées dès la proposition."
                />
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-foreground/10 bg-card/40 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                    <Recycle className="w-4 h-4 text-accent" strokeWidth={1.75} />
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
                en="The fastest path to a proposal is a one-page scope: city or scheme, material streams, target tonnage and the question you need answered. We come back within five working days."
                fr="La voie la plus rapide vers une proposition est un cadrage d'une page : ville ou régime, flux de matières, tonnage cible et la question à laquelle vous voulez une réponse. Nous revenons vers vous sous cinq jours ouvrables."
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
