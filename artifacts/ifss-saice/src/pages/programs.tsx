import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Database,
  Server,
  Cpu,
  Fingerprint,
  Activity,
  LineChart,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  MapPin,
  BarChart3,
  FileText,
  Coins,
  Building2,
  Zap,
  Sun,
  BatteryCharging,
} from "lucide-react";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";
import { PageHero } from "@/components/PageHero";
import { SectionImage, type SectionImageKind } from "@/components/SectionImage";
import { T, useTT } from "@/lib/i18n";

export default function ProgramsRoutes({ params }: { params?: { track?: string, tool?: string } }) {
  const tt = useTT();
  const isPages = params?.track === 'pages' && !params.tool;
  const isIces = params?.track === 'ices' && !params.tool;
  const isPaces = params?.track === 'paces' && !params.tool;
  const isToc = params?.track === 'theory-of-change';
  const isTool = !!params?.tool;

  useEffect(() => {
    const base = tt("Programs", "Programmes");
    document.title = `${base} ${params?.track ? `- ${params.track}` : ''} | SAICE / IFSS Inc.`;
  }, [params, tt]);

  if (isToc) return <TheoryOfChange />;
  if (isTool) return <ToolDetail track={params.track!} tool={params.tool!} />;
  if (isPages) return <PagesTrack />;
  if (isIces) return <IcesTrack />;
  if (isPaces) return <PacesTrack />;

  // Default Overview
  return <ProgramsOverview />;
}

function ProgramsOverview() {
  const tt = useTT();
  return (
    <div className="min-h-screen pb-20">
      <PageHero title={tt("From farm to fork to", "De la ferme à la fourchette à")}
        italic={tt("circular economy.", "l'économie circulaire.")}
        description={tt(
          "One digital backbone. PAGES links small farms to markets and finance. ICES turns waste into livelihoods and climate finance. PACES powers both with clean, affordable energy.",
          "Une infrastructure numérique commune. PAGES relie petites exploitations, marchés et financement. ICES transforme les déchets en moyens de subsistance et finance climatique. PACES fournit une énergie propre et abordable aux deux."
        )}
        crumbs={[{ label: tt("Programs", "Programmes") }]}
        image={icesHero}
        imageAlt={tt("Field operations across our programs", "Opérations de terrain dans nos programmes")}
      />

      {/* Why three programs */}
      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                <T
                  en={<>Three sides of the <span className="display-italic">same loop.</span></>}
                  fr={<>Trois facettes d'<span className="display-italic">une même boucle.</span></>}
                />
              </h2>
              <div className="mt-6 space-y-5 text-lg text-foreground/75 leading-relaxed">
                <p>
                  <T
                    en="Agriculture, waste and energy are linked in Africa. Smallholders struggle for fair prices and finance amid climate shocks. Crops, packaging and post-harvest losses become waste rarely captured, sorted or monetised. Clean, reliable power remains scarce."
                    fr="Agriculture, déchets et énergie sont liés en Afrique. Les petits producteurs peinent à obtenir des prix justes et un financement face aux chocs climatiques. Récoltes, emballages et pertes post-récolte deviennent des déchets rarement captés, triés ou valorisés. L'énergie propre et fiable reste rare."
                  />
                </p>
                <p>
                  <T
                    en="PAGES connects small agri-businesses to markets, finance and climate-smart inputs. ICES makes their waste traceable, sortable, monetisable and climate-credentialed. PACES closes the loop with solar mini-grids, productive-use appliances, e-mobility and biogas from ICES-captured waste."
                    fr="PAGES relie petites entreprises agricoles, marchés, financement et intrants climato-intelligents. ICES rend leurs déchets traçables, triables, valorisables et certifiés climat. PACES boucle la boucle : mini-réseaux solaires, équipements à usage productif, e-mobilité et biogaz issus des déchets captés par ICES."
                  />
                </p>
                <p>
                  <T
                    en="Different buyers, donors and policy frameworks; shared data, ethics and communities."
                    fr="Acheteurs, bailleurs et cadres politiques distincts ; données, éthique et communautés partagées."
                  />
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <SectionImage kind="circular-economy" aspect="4/3" caption={tt("Farm to fork to circular economy", "De la ferme à la fourchette à l'économie circulaire")} />
            </div>
          </div>
        </div>
      </section>

      {/* Program cards */}
      <section className="py-10 md:py-12 bg-card/40">
        <div className="container px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProgramCard
              id="pages"
              img={pagesHero}
              imgAlt={tt("PAGES — smallholder farmer reviewing crop data on a tablet", "PAGES — petit agriculteur consultant des données de culture sur une tablette")}
              eyebrow={tt("Track 1 · Agri-intelligence", "Volet 1 · Agri-intelligence")}
              title="PAGES"
              subtitle={tt("Precision Agriculture for Green Economy and Sustainability", "Agriculture de précision pour une économie verte et durable")}
              pitch={tt(
                "Helps small agri-businesses sell more, lose less and qualify for finance with Smart Market Matchmaker, IoT Precision Insight Engine and ERP Finance & Inventory Tracker.",
                "Aide les petites entreprises agricoles à vendre plus, perdre moins et accéder au financement avec Smart Market Matchmaker, le moteur de précision IoT et le suivi ERP finances et stocks."
              )}
              targets={[
                tt("5,000 agri-SMEs · ~100,000 farmers", "5 000 PME agricoles · ~100 000 agriculteurs"),
                tt("60% women · 40% youth · 15% ex-combatant", "60 % de femmes · 40 % de jeunes · 15 % d'ex-combattants"),
                tt("Rwanda & Kenya pilot · Burundi & DRC scale-out", "Pilote au Rwanda et au Kenya · mise à l'échelle au Burundi et en RDC"),
              ]}
              funders={["GAC", "IDRC", "Gates Foundation", "Mastercard Foundation", "Rockefeller", "AfDB TAAT III", "FAO Hand-in-Hand", "IFAD"]}
              href="/programs/pages"
              toneClass="primary"
            />
            <ProgramCard
              id="ices"
              img={icesHero}
              imgAlt={tt("ICES — youth cooperative members operating smart waste collection bins", "ICES — membres d'une coopérative de jeunes opérant des bacs intelligents de collecte des déchets")}
              eyebrow={tt("Track 2 · Circular economy", "Volet 2 · Économie circulaire")}
              title="ICES"
              subtitle={tt("Initiative for Circular Economy and Sustainability", "Initiative pour l'économie circulaire et la durabilité")}
              pitch={tt(
                "Municipal and agri-waste become livelihoods and verified climate finance through smart bins, AI sorting, RFID, analytics, mobile apps and an ML Carbon Calculator.",
                "Déchets municipaux et agricoles valorisés en revenus et finance climatique vérifiée : bacs intelligents, tri IA, suivi RFID, analytique, applications mobiles et calculateur carbone par apprentissage automatique."
              )}
              targets={[
                tt("Youth- and women-led cooperatives", "Coopératives dirigées par les jeunes et les femmes"),
                tt("Methane and CO₂ averted, quarterly", "Méthane et CO₂ évités, trimestriellement"),
                tt("Income for waste-pickers, sorters and SMEs", "Revenus pour les ramasseurs, les trieurs et les PME"),
              ]}
              funders={["EU Global Gateway", "World Bank FSR", "Rockefeller", "Co-Impact", "Shell Foundation", "Mastercard Foundation", "AfDB climate", "IFAD climate"]}
              href="/programs/ices"
              toneClass="accent"
            />
            <ProgramCard
              id="paces"
              kind="energy"
              imgAlt={tt("PACES — community solar mini-grid powering a rural Agri-SME", "PACES — mini-réseau solaire communautaire alimentant une PME agricole rurale")}
              eyebrow={tt("Track 3 · Sustainable energy", "Volet 3 · Énergie durable")}
              title="PACES"
              subtitle={tt("Programs for Accessible Clean Energy and Sustainability", "Programmes pour une énergie propre, accessible et durable")}
              pitch={tt(
                "Reliable, affordable clean energy for PAGES and ICES cooperatives, municipalities and agri-SMEs: solar mini-grids, productive-use appliances, e-mobility for collection and biogas from organic waste.",
                "Énergie propre, fiable et abordable pour coopératives, municipalités et PME agricoles PAGES et ICES : mini-réseaux solaires, équipements à usage productif, e-mobilité pour la collecte et biogaz issu des déchets organiques."
              )}
              targets={[
                tt("Solar mini-grids for cooperatives and rural SMEs", "Mini-réseaux solaires pour les coopératives et les PME rurales"),
                tt("Productive-use solar for cold-chain, milling and irrigation", "Solaire à usage productif pour la chaîne du froid, la mouture et l'irrigation"),
                tt("Biogas & WTE from ICES-captured organic waste", "Biogaz et valorisation énergétique des déchets organiques captés par ICES"),
              ]}
              funders={["GEF", "GCF", "SEforALL", "AfDB SEFA", "EU Global Gateway", "World Bank ESMAP", "Shell Foundation", "Rockefeller"]}
              href="/programs/paces"
              toneClass="energy"
            />
          </div>
        </div>
      </section>

      {/* Shared digital backbone */}
      <section id="backbone" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>What all three programs <span className="display-italic">share.</span></>}
                fr={<>Ce que les trois programmes <span className="display-italic">partagent.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Shared design and operating standards let partners adopt all three programs under the same rules."
                fr="Des normes de conception et d'exploitation communes permettent d'adopter les trois programmes selon les mêmes règles."
              />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {([
              {
                Icon: Database,
                kind: "dataset" as SectionImageKind,
                eyebrow: tt("Data", "Données"),
                title: tt("Shared data layer", "Couche de données partagée"),
                desc: tt(
                  "Common data model for SMEs, cooperatives, parcels, harvests, transactions, waste flows, and emissions. Interoperable with Digital Earth Africa, FAO HiH, GIEWS, SERVIR and CGIAR GARDIAN.",
                  "Modèle de données commun pour les PME, les coopératives, les parcelles, les récoltes, les transactions, les flux de déchets et les émissions. Interopérable avec Digital Earth Africa, FAO HiH, GIEWS, SERVIR et CGIAR GARDIAN."
                ),
              },
              {
                Icon: ShieldCheck,
                kind: "governance" as SectionImageKind,
                eyebrow: tt("Ethics", "Éthique"),
                title: tt("Shared ethics & privacy", "Éthique et vie privée partagées"),
                desc: tt(
                  "One AI Ethics policy. One data-protection regime — Rwanda Law 058/2021, Kenya DPA 2019, PIPEDA, GDPR where applicable. SMEs and cooperatives own their data.",
                  "Une seule politique d'éthique de l'IA. Un seul régime de protection des données — loi rwandaise 058/2021, DPA Kenya 2019, LPRPDE, RGPD lorsque applicable. Les PME et les coopératives sont propriétaires de leurs données."
                ),
              },
              {
                Icon: BarChart3,
                kind: "impact" as SectionImageKind,
                eyebrow: tt("MEAL", "SEAA"),
                title: tt("Shared MEAL framework", "Cadre SEAA partagé"),
                desc: tt(
                  "A single results framework, indicator dictionary, external mid-term evaluation and learning agenda give donors consistent reporting across all three programs.",
                  "Un cadre de résultats, un dictionnaire d'indicateurs, une évaluation externe à mi-parcours et un agenda d'apprentissage communs assurent un reporting cohérent aux bailleurs sur les trois programmes."
                ),
              },
              {
                Icon: Users,
                kind: "community" as SectionImageKind,
                eyebrow: tt("GEDSI", "GEDSI"),
                title: tt("Shared GEDSI & safeguarding", "GEDSI et sauvegarde partagés"),
                desc: tt(
                  "Same gender, disability and inclusion targets across all three tracks. Same PSEAH, do-no-harm and grievance-redress mechanism in local languages.",
                  "Mêmes cibles de genre, de handicap et d'inclusion sur les trois volets. Mêmes mécanismes PSEAH, do-no-harm et de traitement des plaintes, en langues locales."
                ),
              },
            ]).map(({ Icon, kind, eyebrow, title, desc }) => (
              <article key={title} className="blob-card bg-card flex flex-col overflow-hidden">
                <div className="m-3">
                  <SectionImage kind={kind} aspect="3/2" caption={eyebrow} />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">{eyebrow}</p>
                  <h3 className="font-serif text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Where the programs operate — country cards with partners */}
      <section id="countries" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Six countries today, <span className="display-italic">more in the queue.</span></>}
                fr={<>Six pays aujourd'hui, <span className="display-italic">d'autres à venir.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Programs are co-owned with local partner organisations and support existing ministry strategies rather than competing with them."
                fr="Programmes copilotés avec des partenaires locaux, en appui aux stratégies ministérielles existantes, sans les concurrencer."
              />
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {([
              { c: tt("Rwanda", "Rwanda"), flag: "🇷🇼", img: "field" as SectionImageKind, p: tt("Pilot", "Pilote"), i: tt("In design", "En conception"), lead: "RCID-Rwanda", aligns: ["PSTA 5 (2024–2029)", "CAADP Kampala", "AU Agenda 2063", "ICGLR"] },
              { c: tt("Kenya", "Kenya"), flag: "🇰🇪", img: "agriculture" as SectionImageKind, p: tt("Pilot", "Pilote"), i: tt("In design", "En conception"), lead: "South Eastern Kenya University", aligns: ["ASTGS (2019–2029)", "CAADP Kampala", "AU Agenda 2063"] },
              { c: tt("Burundi", "Burundi"), flag: "🇧🇮", img: "community" as SectionImageKind, p: tt("Scale-out", "Mise à l'échelle"), i: null, lead: tt("Local cooperatives + government", "Coopératives locales + gouvernement"), aligns: ["CAADP Kampala", "ICGLR", "AU Agenda 2063"] },
              { c: tt("DRC", "RDC"), flag: "🇨🇩", img: "community" as SectionImageKind, p: tt("Scale-out", "Mise à l'échelle"), i: null, lead: tt("Local cooperatives + ICGLR", "Coopératives locales + CIRGL"), aligns: ["CAADP Kampala", "ICGLR", "AUDA-NEPAD"] },
              { c: tt("Togo", "Togo"), flag: "🇹🇬", img: "circular-economy" as SectionImageKind, p: null, i: tt("Pilot", "Pilote"), lead: "Terre des Jeunes Togo · Ripen", aligns: ["AUDA-NEPAD", "AU Agenda 2063", "AU Continental AI Strategy"] },
              { c: tt("Canada", "Canada"), flag: "🇨🇦", img: "team" as SectionImageKind, p: tt("HQ", "Siège"), i: tt("HQ", "Siège"), lead: "SAICE · IFSS Inc. · McGill University", aligns: [tt("SDGs 1, 2, 5, 8, 9, 10, 13, 17", "ODD 1, 2, 5, 8, 9, 10, 13, 17"), tt("OECD-DAC criteria", "Critères CAD-OCDE"), tt("UNESCO AI Ethics", "Éthique de l'IA UNESCO"), tt("FAIR principles", "Principes FAIR")] },
            ]).map((row) => (
              <article key={row.c} className="blob-card bg-card flex flex-col overflow-hidden">
                <div className="m-3">
                  <SectionImage kind={row.img} aspect="3/2" caption={row.c} />
                </div>
                <div className="px-6 pb-6 pt-1 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-semibold tracking-tight flex items-center gap-2">
                    <span aria-hidden="true">{row.flag}</span> {row.c}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {row.p && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        PAGES · {row.p}
                      </span>
                    )}
                    {row.i && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                        ICES · {row.i}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 block mb-1">
                      <T en="Lead partner" fr="Partenaire principal" />
                    </span>
                    {row.lead}
                  </p>
                  <div className="mt-4 pt-4 border-t border-foreground/10">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 block mb-2">
                      <T en="Plugs into" fr="S'inscrit dans" />
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {row.aligns.map((a) => (
                        <span key={a} className="inline-flex text-[11px] font-medium px-2.5 py-1 rounded-full bg-foreground/[0.06] text-foreground/75">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/65 leading-relaxed max-w-3xl">
            <T
              en="Across all countries we apply the same standards and ethics: UNESCO Recommendation on the Ethics of AI · FAIR principles · Principles for Digital Development · OECD-DAC evaluation criteria."
              fr="Dans tous les pays, nous appliquons les mêmes normes et la même éthique : Recommandation de l'UNESCO sur l'éthique de l'IA · principes FAIR · Principes pour le développement numérique · critères d'évaluation CAD-OCDE."
            />
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/where-we-work" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              <T en="See country profiles" fr="Voir les profils par pays" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/partners" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              <T en="Meet all our partners" fr="Découvrir tous nos partenaires" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section id="engage" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Three ways <span className="display-italic">to engage.</span></>}
                fr={<>Trois façons <span className="display-italic">de s'engager.</span></>}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {([
              {
                Icon: Coins,
                kind: "donor" as SectionImageKind,
                eyebrow: tt("Fund a program", "Financer un programme"),
                title: tt("Institutional and major donors", "Bailleurs institutionnels et grands donateurs"),
                desc: tt(
                  "PAGES and ICES are designed to absorb thematic, country-specific or pan-African grants.",
                  "PAGES et ICES sont conçus pour absorber des subventions thématiques, par pays ou panafricaines."
                ),
              },
              {
                Icon: MapPin,
                kind: "field" as SectionImageKind,
                eyebrow: tt("Run a pilot", "Mener un pilote"),
                title: tt("Cooperatives, municipalities, ministries", "Coopératives, municipalités, ministères"),
                desc: tt(
                  "Bring your data and your community; we'll bring the tools and the training.",
                  "Apportez vos données et votre communauté ; nous apportons les outils et la formation."
                ),
              },
              {
                Icon: Building2,
                kind: "digital-tools" as SectionImageKind,
                eyebrow: tt("Build with us", "Construire avec nous"),
                title: tt("Researchers, engineers, designers", "Chercheurs, ingénieurs, designers"),
                desc: tt(
                  "We welcome contributors to the open codebase and co-authors on policy briefs.",
                  "Nous accueillons des contributeurs au code ouvert et des co-auteurs pour nos notes de politique."
                ),
              },
            ]).map(({ Icon, kind, eyebrow, title, desc }) => (
              <article key={title} className="blob-card bg-card flex flex-col overflow-hidden">
                <div className="m-3">
                  <SectionImage kind={kind} aspect="16/9" caption={eyebrow} />
                </div>
                <div className="p-6 pt-2 flex-1 flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55">{eyebrow}</p>
                  <h3 className="font-serif text-xl font-semibold tracking-tight">{title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">{desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/get-involved" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              <T en="Get involved" fr="S'impliquer" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({
  id,
  img,
  kind,
  imgAlt,
  eyebrow,
  title,
  subtitle,
  pitch,
  targets,
  funders,
  href,
  toneClass,
}: {
  id: string;
  img?: string;
  kind?: SectionImageKind;
  imgAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  pitch: string;
  targets: string[];
  funders: string[];
  href: string;
  toneClass: "primary" | "accent" | "energy";
}) {
  const tone =
    toneClass === "primary" ? "text-primary" :
    toneClass === "accent" ? "text-accent" :
    "text-amber-700 dark:text-amber-500";
  const toneBg =
    toneClass === "primary" ? "bg-primary/10" :
    toneClass === "accent" ? "bg-accent/10" :
    "bg-amber-500/10";
  const firstWord = title.split(" ")[0];
  return (
    <article id={id} className="group blob-card bg-card flex flex-col overflow-hidden scroll-mt-32">
      <div className="m-3 relative">
        {img ? (
          <div className="aspect-[16/10] relative overflow-hidden rounded-[1.5rem]">
            <img src={img} alt={imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        ) : kind ? (
          <SectionImage kind={kind} aspect="16/10" rounded="rounded-[1.5rem]" />
        ) : null}
        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
          {eyebrow}
        </div>
      </div>
      <div className="p-7 md:p-8 pt-3 flex-1 flex flex-col">
        <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">{title}</h3>
        <p className={`font-serif italic ${tone} text-lg mb-4`}>{subtitle}</p>
        <p className="text-foreground/75 leading-relaxed mb-6">{pitch}</p>

        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">
            <T en="Key targets" fr="Cibles clés" />
          </p>
          <ul className="space-y-1.5">
            {targets.map((t) => (
              <li key={t} className="flex gap-2.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${tone} flex-shrink-0 mt-1`} strokeWidth={2} />
                <span className="text-sm text-foreground/80 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-2">
            <T en="Funder fit" fr="Adéquation bailleurs" />
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {funders.map((f) => (
              <li key={f} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${toneBg} ${tone}`}>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          <Link href={href} className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-foreground text-background hover:bg-foreground/85 text-xs font-semibold transition-colors">
            <T en={`Explore ${firstWord}`} fr={`Découvrir ${firstWord}`} /> <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function PagesTrack() {
  const tt = useTT();
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="PAGES"
        description={tt(
          "Accessible digital tools for farmers and Agri-SMEs in developing countries, supporting smallholders across Africa's Great Lakes Region.",
          "Outils numériques accessibles pour agriculteurs et PME agricoles des pays en développement, au service des petits producteurs de la région des Grands Lacs africains."
        )}
        crumbs={[{ label: tt("Programs", "Programmes"), href: "/programs" }, { label: "PAGES" }]}
        image={pagesHero}
        imageAlt={tt("PAGES precision agriculture in the field", "PAGES — agriculture de précision sur le terrain")}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-6 text-muted-foreground">
            <p>
              <T
                en="Farm-to-fork technical support covers production, storage, market and finance links. Technology deployment, training, coaching and strategic partnerships support sustainable growth and financial and market inclusion."
                fr="L'appui technique de la ferme à la fourchette couvre production, stockage, marchés et financement. Déploiement technologique, formation, coaching et partenariats stratégiques favorisent croissance durable et inclusion financière et commerciale."
              />
            </p>
            <p>
              <T
                en="PAGES technologies are environment-friendly, easy to use, and adapt to local languages — no advanced study required."
                fr="Les technologies PAGES sont respectueuses de l'environnement, faciles à utiliser et s'adaptent aux langues locales — aucune étude avancée n'est requise."
              />
            </p>
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl mt-6">
              <h3 className="font-serif font-semibold tracking-tight text-primary mb-2">
                <T en="Target Beneficiaries" fr="Bénéficiaires visés" />
              </h3>
              <p className="text-sm">
                <T
                  en="5,000 SMEs · ~100,000 farmers · 60% women · 40% youth · 15% ex-combatant · 5% PwD."
                  fr="5 000 PME · ~100 000 agriculteurs · 60 % de femmes · 40 % de jeunes · 15 % d'ex-combattants · 5 % de personnes en situation de handicap."
                />
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">
                <T en="Operations" fr="Opérations" />
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong><T en="Pilot:" fr="Pilote :" /></strong> <T en="Rwanda, Kenya" fr="Rwanda, Kenya" /></li>
                <li><strong><T en="Scale-out:" fr="Mise à l'échelle :" /></strong> <T en="Burundi, DRC" fr="Burundi, RDC" /></li>
              </ul>
            </div>
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">
                <T en="Partners" fr="Partenaires" />
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>RCID</li>
                <li>SEKU</li>
                <li>McGill University</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8">
          <T en="PAGES Core Tools" fr="Outils clés PAGES" />
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard
            title={tt("Smart Market Matchmaker", "Smart Market Matchmaker")}
            desc={tt(
              "Links producers to markets, increasing farmer bargaining power.",
              "Met en relation les producteurs et les marchés, renforçant le pouvoir de négociation des agriculteurs."
            )}
            icon={<Smartphone />}
            link="/programs/pages/smart-market-matchmaker"
          />
          <ToolCard
            title={tt("IoT-Precision Insight Engine", "Moteur IoT d'analyse de précision")}
            desc={tt(
              "Soil moisture and crop-health info leveraging ArcGIS, GPS, and NDVI.",
              "Informations sur l'humidité du sol et la santé des cultures à partir d'ArcGIS, du GPS et de l'indice NDVI."
            )}
            icon={<Activity />}
            link="/programs/pages/iot-precision-insight-engine"
          />
          <ToolCard
            title={tt("ERP Finance & Inventory Tracker", "Suivi ERP finances et stocks")}
            desc={tt(
              "Automates accounting, sales, inventory, and production for Agri-SMEs.",
              "Automatise la comptabilité, les ventes, les stocks et la production pour les PME agricoles."
            )}
            icon={<Database />}
            link="/programs/pages/erp-finance-inventory-tracker"
          />
        </div>
      </div>
    </div>
  );
}

function IcesTrack() {
  const tt = useTT();
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="ICES /"
        italic="ICE-Plus"
        description={tt(
          "Supporting waste collection by communities, municipalities and youth organisations for zero-waste municipalities across the Great Lakes Region.",
          "Appui à la collecte par les communautés, municipalités et organisations de jeunesse pour des municipalités zéro déchet dans la région des Grands Lacs."
        )}
        crumbs={[{ label: tt("Programs", "Programmes"), href: "/programs" }, { label: "ICES" }]}
        image={icesHero}
        imageAlt={tt("ICES circular economy operations", "ICES — opérations d'économie circulaire")}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-6 text-muted-foreground">
            <p>
              <T
                en="Goal: efficient collection, waste storage and conversion to renewable energy, and reduced GHG emissions (methane and CO₂)."
                fr="Objectif : collecte efficace, stockage et conversion des déchets en énergie renouvelable, réduction des GES (méthane et CO₂)."
              />
            </p>
            <p>
              <T
                en="ICE-Plus uses digital tools to optimise routes and measure waste accurately, supporting environmental sustainability and jobs for youth and women. Easy to use; no advanced science or tech knowledge required."
                fr="ICE-Plus optimise les tournées et mesure précisément les déchets grâce au numérique, favorisant durabilité environnementale et emplois pour jeunes et femmes. Facile à utiliser ; aucune connaissance scientifique ou technique avancée requise."
              />
            </p>
            <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl mt-6">
              <h3 className="font-serif font-semibold tracking-tight text-accent mb-2">
                <T en="Target Beneficiaries" fr="Bénéficiaires visés" />
              </h3>
              <p className="text-sm">
                <T en="Municipalities, youth organisations, women's cooperatives." fr="Municipalités, organisations de jeunesse, coopératives de femmes." />
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">
                <T en="Operations" fr="Opérations" />
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong><T en="Pilot:" fr="Pilote :" /></strong> <T en="Togo (Terre des Jeunes)" fr="Togo (Terre des Jeunes)" /></li>
                <li><strong><T en="Scale-out:" fr="Mise à l'échelle :" /></strong> <T en="Replicable to other municipalities" fr="Réplicable à d'autres municipalités" /></li>
              </ul>
            </div>
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">
                <T en="Partners" fr="Partenaires" />
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Terre des Jeunes Togo</li>
                <li>Ripen</li>
                <li>SEKU & RCID</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8">
          <T en="ICES Core Tools" fr="Outils clés ICES" />
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard
            title={tt("IoT Sensors (Smart Bins)", "Capteurs IoT (bacs intelligents)")}
            desc={tt(
              "Monitors fill levels; trucks dispatched only when bins are full.",
              "Surveille les niveaux de remplissage ; les camions ne sont envoyés que lorsque les bacs sont pleins."
            )}
            icon={<Server />}
            link="/programs/ices/iot-smart-bins"
          />
          <ToolCard
            title={tt("AI & Robotics in Sorting", "IA et robotique pour le tri")}
            desc={tt(
              "Computer vision identifies and separates recyclables automatically.",
              "La vision par ordinateur identifie et sépare automatiquement les recyclables."
            )}
            icon={<Cpu />}
            link="/programs/ices/ai-robotics-sorting"
          />
          <ToolCard
            title={tt("RFID & Asset Management", "RFID et gestion d'actifs")}
            desc={tt(
              "Automates bin identification, weighing, and pay-as-you-throw billing.",
              "Automatise l'identification des bacs, leur pesée et la facturation à l'usage."
            )}
            icon={<Fingerprint />}
            link="/programs/ices/rfid-asset-management"
          />
          <ToolCard
            title={tt("Data Analytics Platform", "Plateforme d'analytique de données")}
            desc={tt(
              "Forecasts waste generation and optimizes resource allocation.",
              "Prévoit la production de déchets et optimise l'allocation des ressources."
            )}
            icon={<LineChart />}
            link="/programs/ices/data-analytics-platform"
          />
          <ToolCard
            title={tt("Mobile & Digital Applications", "Applications mobiles et numériques")}
            desc={tt(
              "Real-time monitoring and data logging for field workers.",
              "Suivi en temps réel et enregistrement des données pour les agents de terrain."
            )}
            icon={<Smartphone />}
            link="/programs/ices/mobile-digital-applications"
          />
          <ToolCard
            title={tt("Carbon Calculator & ML", "Calculateur carbone et apprentissage automatique")}
            desc={tt(
              "Precise carbon emissions estimation and financial impact analysis.",
              "Estimation précise des émissions de carbone et analyse de l'impact financier."
            )}
            icon={<CloudRain />}
            link="/programs/ices/carbon-calculator-ml"
          />
        </div>
      </div>
    </div>
  );
}

function PacesTrack() {
  const tt = useTT();
  return (
    <div className="min-h-screen pb-20">
      <PageHero title="PACES /"
        italic="PACE-Plus"
        description={tt(
          "Programs for Accessible Clean Energy and Sustainability — bringing reliable, affordable clean energy to the cooperatives, municipalities and agri-SMEs that PAGES and ICES already serve.",
          "Programmes pour une énergie propre, accessible et durable — une énergie propre, fiable et abordable pour les coopératives, les municipalités et les PME agricoles déjà servies par PAGES et ICES."
        )}
        crumbs={[{ label: tt("Programs", "Programmes"), href: "/programs" }, { label: "PACES" }]}
        image={icesHero}
        imageAlt={tt("PACES clean energy deployments", "PACES — déploiements d'énergie propre")}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="my-10">
          <SectionImage kind="energy" aspect="16/9" rounded="rounded-[1.75rem]" caption={tt("Clean energy for productive use", "Énergie propre à usage productif")} />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="col-span-2 space-y-6 text-muted-foreground">
            <p>
              <T
                en="Goal: close the energy gap for smallholder agri-SMEs and youth cooperatives. Clean, locally owned systems power cold-chains, milling, irrigation, sorting lines and EV collection routes."
                fr="Objectif : combler le déficit énergétique des petites PME agricoles et coopératives de jeunes. Des systèmes propres, détenus localement, alimentent chaîne du froid, mouture, irrigation, lignes de tri et collecte électrique."
              />
            </p>
            <p>
              <T
                en="PACES is designed to share PAGES and ICES cooperatives, data and MEAL framework. ICES organic waste feeds biogas; solar mini-grids power PAGES cold-rooms and ERP terminals; e-trikes replace diesel on collection routes."
                fr="PACES est conçu pour partager coopératives, données et cadre SEAA avec PAGES et ICES. Les déchets organiques ICES alimentent le biogaz ; les mini-réseaux solaires alimentent chambres froides et terminaux ERP PAGES ; les e-tricycles remplacent le diesel pour la collecte."
              />
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl mt-6">
              <h3 className="font-serif font-semibold tracking-tight text-amber-700 dark:text-amber-500 mb-2">
                <T en="Target Beneficiaries" fr="Bénéficiaires visés" />
              </h3>
              <p className="text-sm">
                <T
                  en="Rural cooperatives and agri-SMEs · municipalities and youth waste cooperatives · off-grid clinics, schools and irrigation schemes in PAGES/ICES regions."
                  fr="Coopératives rurales et PME agricoles · municipalités et coopératives de jeunes pour les déchets · cliniques hors-réseau, écoles et périmètres irrigués dans les régions PAGES/ICES."
                />
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">
                <T en="Operations" fr="Opérations" />
              </h4>
              <ul className="space-y-2 text-sm">
                <li><strong><T en="Pilot:" fr="Pilote :" /></strong> <T en="Rwanda, Togo" fr="Rwanda, Togo" /></li>
                <li><strong><T en="Scale-out:" fr="Mise à l'échelle :" /></strong> <T en="Kenya, Burundi, DRC" fr="Kenya, Burundi, RDC" /></li>
              </ul>
            </div>
            <div className="bg-card p-6 border rounded-xl shadow-sm">
              <h4 className="font-bold mb-3 uppercase text-xs tracking-wider text-muted-foreground">
                <T en="Partners" fr="Partenaires" />
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><T en="Local energy cooperatives" fr="Coopératives énergétiques locales" /></li>
                <li>RCID · SEKU · Terre des Jeunes</li>
                <li>McGill University</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8">
          <T en="PACES Core Tools" fr="Outils clés PACES" />
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ToolCard
            title={tt("Solar Mini-Grids", "Mini-réseaux solaires")}
            desc={tt(
              "Community-owned PV + storage to power cooperatives, clinics and rural SMEs.",
              "PV + stockage détenus par la communauté pour alimenter coopératives, cliniques et PME rurales."
            )}
            icon={<Sun />}
            link="/programs/paces/solar-mini-grids"
          />
          <ToolCard
            title={tt("Productive-Use Solar", "Solaire à usage productif")}
            desc={tt(
              "Solar cold-rooms, mills, pumps and dryers — sized for PAGES cooperatives.",
              "Chambres froides, moulins, pompes et séchoirs solaires — dimensionnés pour les coopératives PAGES."
            )}
            icon={<Zap />}
            link="/programs/paces/productive-use-solar"
          />
          <ToolCard
            title={tt("Biogas & Waste-to-Energy", "Biogaz et valorisation énergétique")}
            desc={tt(
              "Turns ICES-captured organic waste into cooking gas and electricity.",
              "Transforme les déchets organiques captés par ICES en gaz de cuisson et en électricité."
            )}
            icon={<Activity />}
            link="/programs/paces/biogas-wte"
          />
          <ToolCard
            title={tt("E-Mobility for Collection", "E-mobilité pour la collecte")}
            desc={tt(
              "Electric trikes and light vehicles for waste collection and last-mile agri-logistics.",
              "Tricycles et véhicules légers électriques pour la collecte des déchets et la logistique agricole du dernier kilomètre."
            )}
            icon={<BatteryCharging />}
            link="/programs/paces/e-mobility"
          />
          <ToolCard
            title={tt("Energy Data Platform", "Plateforme de données énergétiques")}
            desc={tt(
              "Monitors generation, consumption and avoided emissions across all PACES sites.",
              "Surveille la production, la consommation et les émissions évitées sur l'ensemble des sites PACES."
            )}
            icon={<LineChart />}
            link="/programs/paces/energy-data-platform"
          />
          <ToolCard
            title={tt("Pay-as-You-Go Billing", "Facturation à l'usage")}
            desc={tt(
              "Mobile-money metering and revenue collection for cooperatively run systems.",
              "Mesure et collecte des recettes par mobile-money pour des systèmes opérés en coopérative."
            )}
            icon={<Smartphone />}
            link="/programs/paces/payg-billing"
          />
        </div>
      </div>
    </div>
  );
}

function CloudRain(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </svg>
  );
}

function ToolCard({ title, desc, icon, link }: { title: string, desc: string, icon: React.ReactNode, link: string }) {
  return (
    <Link href={link} className="block group">
      <Card className="h-full hover:shadow-md transition-shadow border-muted-foreground/20">
        <CardContent className="p-6">
          <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>
          <h3 className="font-serif font-semibold tracking-tight text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function ToolDetail({ track, tool }: { track: string, tool: string }) {
  const tt = useTT();
  const isPages = track === 'pages';
  const isPaces = track === 'paces';
  const colorClass = isPages ? "text-primary" : isPaces ? "text-amber-700 dark:text-amber-500" : "text-accent";
  const bgClass = isPages ? "bg-primary" : isPaces ? "bg-amber-600" : "bg-accent";

  const getToolInfo = () => {
    switch(tool) {
      case 'smart-market-matchmaker':
        return {
          title: tt("Smart Market Matchmaker", "Smart Market Matchmaker"),
          what: tt(
            "Connects producers to potential buyers, strengthens price bargaining and provides farmer location data.",
            "Relie les producteurs aux acheteurs potentiels, renforce la négociation des prix et fournit leur localisation."
          ),
          who: tt(
            "Cooperatives, smallholder farmers, processors, traders, BDS providers, financial institutions.",
            "Coopératives, petits agriculteurs, transformateurs, commerçants, prestataires de services aux entreprises, institutions financières."
          ),
          tech: tt("Mobile-first UX, USSD fallback, GPS-tagged producer profiles.", "Expérience mobile-first, repli USSD, profils producteurs géolocalisés par GPS.")
        };
      case 'iot-precision-insight-engine':
        return {
          title: tt("IoT-Precision Insight Engine", "Moteur IoT d'analyse de précision"),
          what: tt(
            "ArcGIS, GPS and NDVI data track soil moisture, crop health and disease, supporting farming-system monitoring and planning. Helps vulnerable communities negotiate insurance, finance access and prices.",
            "Les données ArcGIS, GPS et NDVI suivent humidité du sol, santé et maladies des cultures, pour surveiller les systèmes agricoles et planifier. Aide les communautés vulnérables à négocier assurance, accès au financement et prix."
          ),
          who: tt(
            "Cooperatives, smallholder farmers, processors, traders, BDS providers, financial institutions.",
            "Coopératives, petits agriculteurs, transformateurs, commerçants, prestataires de services aux entreprises, institutions financières."
          ),
          tech: tt("ArcGIS · GPS · NDVI · IoT sensors · mobile-first UX.", "ArcGIS · GPS · NDVI · capteurs IoT · expérience mobile-first.")
        };
      case 'erp-finance-inventory-tracker':
        return {
          title: tt("ERP Finance & Inventory Tracker", "Suivi ERP finances et stocks"),
          what: tt(
            "Automates accounting, sales, inventory and production in one solution for profitable small-business growth.",
            "Automatise comptabilité, ventes, stocks et production dans une solution pour la croissance rentable des petites entreprises."
          ),
          who: tt(
            "Cooperatives, smallholder farmers, processors, traders, BDS providers, financial institutions.",
            "Coopératives, petits agriculteurs, transformateurs, commerçants, prestataires de services aux entreprises, institutions financières."
          ),
          tech: tt("Odoo backbone.", "Socle Odoo.")
        };
      case 'iot-smart-bins':
        return {
          title: tt("IoT Sensors (Smart Bins)", "Capteurs IoT (bacs intelligents)"),
          what: tt(
            "Fill-level sensors guide dispatch: trucks go only when bins are full, reducing unnecessary trips, costs and emissions.",
            "Les capteurs de remplissage guident l'envoi des camions uniquement pour les bacs pleins, réduisant tournées inutiles, coûts et émissions."
          ),
          who: tt("Municipalities, youth organizations, waste collection cooperatives.", "Municipalités, organisations de jeunesse, coopératives de collecte des déchets."),
          tech: tt("IoT fill-level sensors, Low-power WAN, secure cloud dashboard.", "Capteurs IoT de niveau de remplissage, réseau étendu basse consommation, tableau de bord cloud sécurisé.")
        };
      case 'ai-robotics-sorting':
        return {
          title: tt("AI & Robotics in Sorting", "IA et robotique pour le tri"),
          what: tt(
            "Computer vision and AI-powered robots identify, classify, and separate recyclables with higher accuracy than manual labor.",
            "La vision par ordinateur et des robots pilotés par IA identifient, classent et séparent les recyclables avec une précision supérieure au tri manuel."
          ),
          who: tt("Material recovery facilities, large-scale municipal waste operations.", "Centres de récupération des matières, opérations municipales de déchets à grande échelle."),
          tech: tt("Computer vision, robotics control systems, edge AI processing.", "Vision par ordinateur, systèmes de contrôle robotique, traitement IA en périphérie.")
        };
      case 'rfid-asset-management':
        return {
          title: tt("RFID & Asset Management", "RFID et gestion d'actifs"),
          what: tt(
            "Rugged bin/dumpster tags and truck-mounted RFID readers automate identification, collection, tracking, weighing and real-time logging. Reduces theft, optimises routes and supports pay-as-you-throw billing.",
            "Étiquettes robustes sur bacs et bennes et lecteurs RFID embarqués : identification, collecte, suivi, pesée et enregistrement automatisés en temps réel. Réduit le vol, optimise les tournées et permet la facturation à l'usage."
          ),
          who: tt("Municipalities, fleet operators, waste management authorities.", "Municipalités, opérateurs de flottes, autorités de gestion des déchets."),
          tech: tt("Rugged RFID tags, truck-mounted readers, real-time sync.", "Étiquettes RFID robustes, lecteurs embarqués sur camions, synchronisation en temps réel.")
        };
      case 'data-analytics-platform':
        return {
          title: tt("Data Analytics Platform", "Plateforme d'analytique de données"),
          what: tt(
            "Uses historical data to forecast waste and optimise resource allocation for future projects.",
            "Utilise les données historiques pour prévoir les déchets et optimiser les ressources des projets futurs."
          ),
          who: tt("City planners, environmental analysts, program managers.", "Urbanistes, analystes environnementaux, responsables de programmes."),
          tech: tt("Big data processing pipeline, predictive forecasting algorithms.", "Pipeline de traitement big data, algorithmes de prévision prédictive.")
        };
      case 'mobile-digital-applications':
        return {
          title: tt("Mobile & Digital Applications", "Applications mobiles et numériques"),
          what: tt(
            "Apps for field workers, communities and youth organisations to monitor in real time and receive, log and report field data.",
            "Applications pour agents de terrain, communautés et organisations de jeunesse : suivi en temps réel, réception, enregistrement et remontée des données de terrain."
          ),
          who: tt("Field workers, community youth groups, cooperative members.", "Agents de terrain, groupes de jeunes communautaires, membres de coopératives."),
          tech: tt("React Native mobile apps, offline-first sync architecture.", "Applications mobiles React Native, architecture de synchronisation hors-ligne d'abord.")
        };
      case 'carbon-calculator-ml':
        return {
          title: tt("Carbon Calculator & Machine Learning", "Calculateur carbone et apprentissage automatique"),
          what: tt(
            "Calculators and ML precisely estimate carbon emissions before municipal waste projects, including AI training, and analyse carbon's impact on financial markets. Tracks daily project impacts on energy generation, CO₂ emissions and beneficiaries' finances.",
            "Calculateurs et apprentissage automatique estiment précisément les émissions de carbone avant les projets municipaux de déchets, entraînement de l'IA inclus, et analysent l'impact carbone sur les marchés financiers. Suivi quotidien des impacts sur l'énergie produite, les émissions de CO₂ et les finances des bénéficiaires."
          ),
          who: tt("Environmental consultants, impact investors, municipal authorities.", "Consultants en environnement, investisseurs d'impact, autorités municipales."),
          tech: tt("Machine learning impact models, carbon-credit API integrations.", "Modèles d'impact en apprentissage automatique, intégrations d'API de crédits carbone.")
        };
      case 'solar-mini-grids':
        return {
          title: tt("Solar Mini-Grids", "Mini-réseaux solaires"),
          what: tt(
            "Community-owned solar PV and batteries sized for off-grid or under-served cooperatives, rural SMEs, clinics and schools. Local operation, repair and tariff governance.",
            "PV et batteries communautaires dimensionnés pour coopératives, PME rurales, cliniques et écoles hors-réseau ou mal desservies. Exploitation, maintenance et gouvernance tarifaire locales."
          ),
          who: tt("Rural cooperatives, off-grid SMEs, clinics, schools, municipalities.", "Coopératives rurales, PME hors-réseau, cliniques, écoles, municipalités."),
          tech: tt("PV arrays · LFP storage · smart inverters · remote monitoring.", "Champs photovoltaïques · stockage LFP · onduleurs intelligents · supervision à distance.")
        };
      case 'productive-use-solar':
        return {
          title: tt("Productive-Use Solar", "Solaire à usage productif"),
          what: tt(
            "Solar-powered cold-rooms, mills, pumps, dryers and refrigeration sized for PAGES cooperatives — reduces post-harvest loss and raises margins without diesel.",
            "Chambres froides, moulins, pompes, séchoirs et réfrigération à énergie solaire dimensionnés pour les coopératives PAGES — réduit les pertes post-récolte et augmente les marges, sans diesel."
          ),
          who: tt("PAGES cooperatives, agri-SMEs, women's processing groups.", "Coopératives PAGES, PME agricoles, groupes de transformation portés par les femmes."),
          tech: tt("Solar-direct DC appliances · hybrid AC/DC packs · IoT metering.", "Appareils CC alimentés directement par le solaire · ensembles hybrides CA/CC · comptage IoT.")
        };
      case 'biogas-wte':
        return {
          title: tt("Biogas & Waste-to-Energy", "Biogaz et valorisation énergétique"),
          what: tt(
            "ICES organic waste becomes cooking gas, electricity and digestate fertiliser, linking waste collection to clean cooking.",
            "Les déchets organiques ICES deviennent gaz de cuisson, électricité et digestat fertilisant, reliant collecte et cuisson propre."
          ),
          who: tt("ICES cooperatives, municipalities, peri-urban households.", "Coopératives ICES, municipalités, ménages péri-urbains."),
          tech: tt("Anaerobic digesters · gas-clean-up · CHP units · IoT monitoring.", "Digesteurs anaérobies · épuration du gaz · unités de cogénération · supervision IoT.")
        };
      case 'e-mobility':
        return {
          title: tt("E-Mobility for Collection", "E-mobilité pour la collecte"),
          what: tt(
            "Electric trikes and light vehicles for ICES waste-collection routes and PAGES last-mile agri-logistics — charged from PACES solar mini-grids where available.",
            "Tricycles et véhicules légers électriques pour les tournées de collecte ICES et la logistique agricole du dernier kilomètre PAGES — rechargés sur les mini-réseaux solaires PACES lorsque disponibles."
          ),
          who: tt("Youth waste cooperatives, agri-aggregators, municipal fleets.", "Coopératives de jeunes pour les déchets, agrégateurs agricoles, flottes municipales."),
          tech: tt("E-trikes · swappable batteries · solar charging hubs · fleet telematics.", "E-tricycles · batteries interchangeables · stations solaires de recharge · télématique de flotte.")
        };
      case 'energy-data-platform':
        return {
          title: tt("Energy Data Platform", "Plateforme de données énergétiques"),
          what: tt(
            "Tracks generation, consumption, uptime and avoided emissions at every PACES site for shared MEAL and the ICES Carbon Calculator.",
            "Suit production, consommation, disponibilité et émissions évitées sur chaque site PACES pour le cadre SEAA partagé et le calculateur carbone ICES."
          ),
          who: tt("Program managers, donors, cooperative boards, regulators.", "Responsables de programmes, bailleurs, conseils de coopératives, régulateurs."),
          tech: tt("Time-series database · MQTT ingest · dashboards · carbon-API integration.", "Base de données temporelles · ingestion MQTT · tableaux de bord · intégration d'API carbone.")
        };
      case 'payg-billing':
        return {
          title: tt("Pay-as-You-Go Billing", "Facturation à l'usage"),
          what: tt(
            "Mobile-money metering and revenue collection for cooperatively run mini-grids and productive-use appliances — keeps systems financially sustainable after donor funding ends.",
            "Mesure et collecte des recettes par mobile-money pour les mini-réseaux et les équipements à usage productif opérés en coopérative — assure la pérennité financière des systèmes après la fin du financement bailleur."
          ),
          who: tt("Cooperative operators, mini-grid customers, mobile-money providers.", "Opérateurs de coopératives, clients de mini-réseaux, fournisseurs de mobile-money."),
          tech: tt("Smart meters · USSD/SMS workflows · mobile-money APIs · reconciliation.", "Compteurs intelligents · flux USSD/SMS · API mobile-money · réconciliation.")
        };
      default:
        return { title: tool.replace(/-/g, ' '), what: tt("Description pending.", "Description à venir."), who: tt("Pending", "À venir"), tech: tt("Pending", "À venir") };
    }
  };

  const info = getToolInfo();

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href={`/programs/${track}`} className={`text-sm font-medium hover:underline mb-8 inline-block ${colorClass}`}>
          &larr; <T en={`Back to ${track.toUpperCase()}`} fr={`Retour à ${track.toUpperCase()}`} />
        </Link>
        <h1 className="text-4xl font-serif font-semibold tracking-tight mb-6 text-foreground">{info.title}</h1>

        <div className="space-y-8 mt-12">
          <section className="p-6 bg-muted rounded-2xl border">
            <h2 className="text-xl font-serif font-semibold tracking-tight mb-4">
              <T en="What it does" fr="Ce qu'il fait" />
            </h2>
            <p className="text-muted-foreground leading-relaxed">{info.what}</p>
          </section>

          <div className="grid sm:grid-cols-2 gap-6">
            <section className="p-6 bg-card border rounded-2xl">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-3">
                <T en="Who uses it" fr="Qui l'utilise" />
              </h2>
              <p className="text-sm text-muted-foreground">{info.who}</p>
            </section>

            <section className="p-6 bg-card border rounded-2xl">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-3">
                <T en="How it works (Tech)" fr="Comment ça marche (technique)" />
              </h2>
              <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">{info.tech}</p>
            </section>
          </div>

          <section className="flex flex-col sm:flex-row gap-6 p-6 border rounded-2xl">
            <div className="flex-1">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-2">
                <T en="Languages" fr="Langues" />
              </h2>
              <p className="text-sm text-muted-foreground">
                <T en="EN, FR, Kinyarwanda (Phase 2: Kirundi, Swahili)" fr="EN, FR, kinyarwanda (Phase 2 : kirundi, swahili)" />
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-serif font-semibold tracking-tight mb-2">
                <T en="Privacy & Data" fr="Confidentialité et données" />
              </h2>
              <p className="text-sm text-muted-foreground">
                <T
                  en="Strict data ownership protocols aligned with GDPR and local DPA laws. FAIR data principles applied."
                  fr="Protocoles stricts de propriété des données alignés sur le RGPD et les lois locales de protection des données. Principes FAIR appliqués."
                />
              </p>
            </div>
          </section>

          <div className="flex flex-wrap gap-4 pt-8">
            <button className={`${bgClass} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
              <T en="Try it / Pilot it (Enterprise)" fr="Essayer / piloter (entreprise)" />
            </button>
            <button className="bg-transparent border-2 border-muted-foreground text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">
              <T en="Cooperative Onboarding" fr="Intégration coopérative" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TheoryOfChange() {
  const tt = useTT();
  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title={tt("Combined theory of", "Théorie du")}
        italic={tt("change", "changement combinée")}
        description={tt(
          "How PAGES and ICES translate inputs into measurable outcomes across the Great Lakes Region.",
          "Comment PAGES et ICES traduisent leurs intrants en résultats mesurables dans la région des Grands Lacs."
        )}
        crumbs={[{ label: tt("Programs", "Programmes"), href: "/programs" }, { label: tt("Theory of change", "Théorie du changement") }]}
        image={pagesHero}
        imageAlt={tt("Theory of change across our programs", "Théorie du changement de nos programmes")}
      />
      <div className="container mx-auto px-4 max-w-5xl">

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {/* PAGES Column */}
          <div className="space-y-6">
            <div className="text-center pb-4 border-b-4 border-primary">
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-primary">
                <T en="PAGES (Track 1)" fr="PAGES (volet 1)" />
              </h2>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                <T en="Agriculture & Economy" fr="Agriculture et économie" />
              </p>
            </div>

            <TocBox step={tt("Inputs", "Intrants")} color="bg-primary/5 border-primary/20">
              <T
                en="Resources; policy dialogue, partnerships and risk analysis; AI and digital tools; training and coaching; capacity building and advocacy."
                fr="Ressources ; dialogue politique, partenariats et analyse des risques ; IA et outils numériques ; formation et coaching ; renforcement des capacités et plaidoyer."
              />
            </TocBox>

            <ArrowDown />

            <TocBox step={tt("Activities & Outputs", "Activités et extrants")} color="bg-primary/10 border-primary/30">
              <T
                en="Stronger beneficiary capacity; greater access to finance and selected value-chain raw materials; more private-sector, youth and women participation; stronger advocacy, policy reforms and visibility."
                fr="Capacités des bénéficiaires renforcées ; meilleur accès au financement et aux matières premières des chaînes de valeur sélectionnées ; participation accrue du privé, des jeunes et des femmes ; plaidoyer, réformes politiques et visibilité renforcés."
              />
            </TocBox>

            <ArrowDown />

            <TocBox step={tt("Outcomes", "Résultats")} color="bg-primary/15 border-primary/40">
              <T
                en="More AI and digital-tool adoption; healthier farming and food production; better finance and market access; lower transaction costs and improved stock management."
                fr="Adoption accrue de l'IA et du numérique ; systèmes agricoles et production alimentaire plus sains ; meilleur accès aux services financiers et de marché ; coûts de transaction réduits et stocks mieux gérés."
              />
            </TocBox>

            <ArrowDown />

            <TocBox step={tt("Impacts", "Impacts")} color="bg-primary border-primary text-primary-foreground">
              <T
                en="Greater socio-economic wellbeing, food security and beneficiary incomes; environmental protection (air quality and CO₂ emissions); socio-economic and financial inclusion for youth and women."
                fr="Bien-être socio-économique, sécurité alimentaire et revenus des bénéficiaires accrus ; protection environnementale (qualité de l'air et émissions de CO₂) ; inclusion socio-économique et financière des jeunes et des femmes."
              />
            </TocBox>
          </div>

          {/* ICES Column */}
          <div className="space-y-6">
            <div className="text-center pb-4 border-b-4 border-accent">
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-accent">
                <T en="ICES (Track 2)" fr="ICES (volet 2)" />
              </h2>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                <T en="Circular Economy & Waste" fr="Économie circulaire et déchets" />
              </p>
            </div>

            <TocBox step={tt("Inputs", "Intrants")} color="bg-accent/5 border-accent/20">
              <T
                en="Resources; Policy dialogue, Risk analysis; AI and digital tools; Capacity building and advocacy."
                fr="Ressources ; dialogue politique, analyse des risques ; IA et outils numériques ; renforcement des capacités et plaidoyer."
              />
            </TocBox>

            <ArrowDown />

            <TocBox step={tt("Activities & Outputs", "Activités et extrants")} color="bg-accent/10 border-accent/30">
              <T
                en="Real-time waste-level measurement; Optimized collection; Accurate waste segregation; Reduced manual handling; Instant feedback to users."
                fr="Mesure en temps réel du niveau des déchets ; collecte optimisée ; tri précis des déchets ; manutention manuelle réduite ; retours immédiats aux usagers."
              />
            </TocBox>

            <ArrowDown />

            <TocBox step={tt("Outcomes", "Résultats")} color="bg-accent/15 border-accent/40">
              <T
                en="Decreased operational costs; Low fuel consumption and CO₂ emissions; High-quality recyclables; Increased public participation."
                fr="Coûts opérationnels réduits ; faible consommation de carburant et émissions de CO₂ réduites ; recyclables de haute qualité ; participation du public accrue."
              />
            </TocBox>

            <ArrowDown />

            <TocBox step={tt("Impacts", "Impacts")} color="bg-accent border-accent text-accent-foreground">
              <T
                en="Realization of circular economy; Zero-waste municipalities; Environmental protection (air quality and CO₂ emissions); Socio-economic additionality."
                fr="Réalisation de l'économie circulaire ; municipalités zéro déchet ; protection de l'environnement (qualité de l'air et émissions de CO₂) ; additionnalité socio-économique."
              />
            </TocBox>
          </div>
        </div>

        {/* Cross-cutting bottom bar */}
        <div className="mt-16 p-6 bg-muted border rounded-2xl text-center shadow-sm">
          <h3 className="font-serif font-semibold tracking-tight text-foreground mb-3">
            <T en="Cross-Cutting Goals" fr="Objectifs transversaux" />
          </h3>
          <p className="text-muted-foreground text-sm">
            <T
              en="Gender, Equity, Disability, Social Inclusion (GEDSI) · Climate Resilience · Accountable Governance · FAIR Data Practices"
              fr="Genre, équité, handicap, inclusion sociale (GEDSI) · résilience climatique · gouvernance responsable · pratiques de données FAIR"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

function TocBox({ step, children, color }: { step: string, children: React.ReactNode, color: string }) {
  return (
    <div className={`p-5 rounded-xl border ${color} shadow-sm relative`}>
      <h3 className="font-bold text-sm uppercase tracking-widest mb-3 opacity-90">{step}</h3>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex justify-center -my-3 relative z-10">
      <div className="w-8 h-8 rounded-full bg-background border flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </div>
  );
}
