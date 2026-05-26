import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Leaf,
  Recycle,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import impactHero from "@/assets/images/impact-hero.png";
import impactStoriesHero from "@/assets/images/about-hero.png";
import { SectionImage } from "@/components/SectionImage";
import { T, useTT } from "@/lib/i18n";

export default function ImpactRoutes({ params }: { params?: { sub?: string } }) {
  const isStories = params?.sub === "stories";
  const tt = useTT();

  useEffect(() => {
    document.title = isStories
      ? tt(
          "Stories from the field | SAICE / IFSS Inc.",
          "Histoires du terrain | SAICE / IFSS Inc.",
        )
      : tt(
          "Impact — what our programs change · SAICE & IFSS",
          "Impact — ce que nos programmes changent · SAICE et IFSS",
        );
  }, [isStories, tt]);

  if (isStories) return <Stories />;
  return <Dashboard />;
}

function Dashboard() {
  const tt = useTT();

  const topLine = [
    { v: "3", l: tt("Programs — PAGES, ICES, PACES", "Programmes — PAGES, ICES, PACES") },
    { v: "6", l: tt("Countries — Canada, Rwanda, Kenya, Burundi, DRC, Togo", "Pays — Canada, Rwanda, Kenya, Burundi, RDC, Togo") },
    { v: "~100k", l: tt("Farmers reached through cooperatives by 2029", "Agriculteurs touchés via les coopératives d'ici 2029") },
    { v: "5,000", l: tt("Agri-SMEs targeted for onboarding by 2029", "PME agricoles ciblées pour intégration d'ici 2029") },
  ];

  const programs = [
    {
      tag: "PAGES",
      Icon: Leaf,
      t: tt("Agri-intelligence", "Agri-intelligence"),
      promise: tt(
        "Stronger cooperatives, better prices, less post-harvest loss.",
        "Des coopératives renforcées, de meilleurs prix, moins de pertes post-récolte.",
      ),
      indicators: [
        tt("Agri-SMEs onboarded (target 5,000 by 2029)", "PME agricoles intégrées (cible 5 000 d'ici 2029)"),
        tt("Farmers reached through cooperatives (~100k)", "Agriculteurs touchés via les coopératives (~100 000)"),
        tt("Off-take contracts brokered & average price uplift", "Contrats d'achat négociés et hausse moyenne des prix"),
      ],
      href: "/programs/pages",
      services: "/services#pages",
    },
    {
      tag: "ICES",
      Icon: Recycle,
      t: tt("Circular economy", "Économie circulaire"),
      promise: tt(
        "More waste recovered, fewer emissions, real livelihoods for waste-pickers.",
        "Plus de déchets valorisés, moins d'émissions, de vrais moyens de subsistance pour les récupérateurs.",
      ),
      indicators: [
        tt("Tonnes diverted from landfill or dumpsite", "Tonnes détournées des décharges et dépotoirs"),
        tt("Methane and CO₂e averted (MRV-verified)", "Méthane et CO₂e évités (vérifiés MRV)"),
        tt("Carbon-finance value routed to cooperatives", "Valeur de finance carbone redirigée vers les coopératives"),
      ],
      href: "/programs/ices",
      services: "/services#ices",
    },
    {
      tag: "PACES",
      Icon: Zap,
      t: tt("Sustainable energy", "Énergie durable"),
      promise: tt(
        "Clean energy that powers livelihoods — not just light bulbs.",
        "Une énergie propre qui alimente les moyens de subsistance — pas seulement les ampoules.",
      ),
      indicators: [
        tt("Mini-grids designed and commissioned", "Mini-réseaux conçus et mis en service"),
        tt("kWh delivered to productive-use customers", "kWh livrés à des clients à usage productif"),
        tt("Livelihood events linked to new connections", "Événements de subsistance liés aux nouveaux raccordements"),
      ],
      href: "/programs/paces",
      services: "/services#paces",
    },
  ];

  const inclusion = [
    { pct: "60%", label: tt("Women", "Femmes"), detail: tt("Share of beneficiaries, leadership roles, training and finance events.", "Part des bénéficiaires, rôles de direction, événements de formation et de financement.") },
    { pct: "40%", label: tt("Youth under 35", "Jeunes de moins de 35 ans"), detail: tt("Self-identified and verified through cooperative records.", "Auto-déclarés et vérifiés via les registres des coopératives.") },
    { pct: "15%", label: tt("Ex-combatants", "Ex-combattants"), detail: tt("Reported with a do-no-harm narrative — not just numbers.", "Rapportés avec une approche « ne pas nuire » — pas seulement des chiffres.") },
    { pct: "5%", label: tt("People with disabilities", "Personnes en situation de handicap"), detail: tt("Self-identification, aggregated to protect identity.", "Auto-identification, agrégée pour protéger l'identité.") },
  ];

  const stories: { tag: string; title: string; body: string; kind: "impact" | "education" | "data" | "global" }[] = [
    {
      tag: tt("Rwanda · PAGES · women-led", "Rwanda · PAGES · porté par des femmes"),
      title: tt(
        "Aline runs a 280-member maize cooperative in Musanze",
        "Aline dirige une coopérative de maïs de 280 membres à Musanze",
      ),
      body: tt(
        "What the Smart Market Matchmaker changed for her quarter — buyer access, price uplift, and the first finance event for 31 women in her group.",
        "Ce que le Smart Market Matchmaker a changé pour son trimestre — accès aux acheteurs, hausse des prix et premier événement de financement pour 31 femmes de son groupe.",
      ),
      kind: "impact",
    },
    {
      tag: tt("Togo · ICES · youth-led", "Togo · ICES · porté par les jeunes"),
      title: tt(
        "From street pickers to a registered cooperative",
        "Des récupérateurs de rue à une coopérative enregistrée",
      ),
      body: tt(
        "A Lomé waste-sorting line, one year in. How a 12-person collective became an EPR-grade reporting partner — and what the carbon receipts paid for.",
        "Une ligne de tri des déchets à Lomé, un an plus tard. Comment un collectif de 12 personnes est devenu un partenaire de reporting de niveau REP — et ce qu'ont financé les recettes carbone.",
      ),
      kind: "education",
    },
    {
      tag: tt("Cross-cutting · learning", "Transversal · apprentissage"),
      title: tt(
        "Three things we got wrong on the GIAH pilot — and one we got right",
        "Trois choses que nous avons ratées sur le pilote GIAH — et une que nous avons réussie",
      ),
      body: tt(
        "Honest notes from the field. Where our onboarding under-counted women, where IoT data outpaced cooperative literacy, and the one design call that held up.",
        "Notes honnêtes du terrain. Là où notre intégration a sous-compté les femmes, là où les données IoT ont devancé l'alphabétisation des coopératives, et le choix de conception qui a tenu.",
      ),
      kind: "data",
    },
    {
      tag: tt("Kenya · PAGES · methodology", "Kenya · PAGES · méthodologie"),
      title: tt(
        "What it costs to reach the last farmer",
        "Ce qu'il en coûte pour atteindre le dernier agriculteur",
      ),
      body: tt(
        "Unit-cost analysis from the SEKU pilot — enumerator time, mobile-money fees, and the share of the budget that never gets line-itemed in a logframe.",
        "Analyse des coûts unitaires du pilote SEKU — temps des enquêteurs, frais de mobile money et part du budget qui n'apparaît jamais en ligne dans un cadre logique.",
      ),
      kind: "global",
    },
  ];

  const evaluations = [
    { year: "2027", t: tt("Baseline study", "Étude de référence"), d: tt("Sets the reference point for every cycle indicator.", "Établit le point de référence pour chaque indicateur du cycle.") },
    { year: "2028", t: tt("Mid-term review", "Examen à mi-parcours"), d: tt("Course-correction checkpoint. Findings published in full.", "Point de réajustement. Conclusions publiées intégralement.") },
    { year: "2030", t: tt("Endline evaluation", "Évaluation finale"), d: tt("OECD-DAC criteria. Commissioned independently, published in full.", "Critères du CAD-OCDE. Commandée de manière indépendante, publiée intégralement.") },
  ];

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        title={tt("The change our programs", "Le changement que nos programmes")}
        italic={tt("set out to make.", "se sont engagés à porter.")}
        description={tt(
          "Three programs. Three sets of outcomes. Reported plainly, refreshed quarterly, and reviewed by partners outside our walls.",
          "Trois programmes. Trois ensembles de résultats. Rapportés simplement, actualisés chaque trimestre et examinés par des partenaires extérieurs.",
        )}
        crumbs={[{ label: tt("Impact", "Impact") }]}
        image={impactHero}
        imageAlt={tt(
          "Cooperative members reviewing program impact records together",
          "Membres de coopérative examinant ensemble les registres d'impact des programmes",
        )}
      />

      {/* Top-line */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>The headline numbers, <span className="display-italic">refreshed every quarter.</span></>}
                fr={<>Les chiffres clés, <span className="display-italic">actualisés chaque trimestre.</span></>}
              />
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topLine.map((s) => (
              <div key={s.l} className="blob-card bg-card p-6">
                <p className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-none">
                  {s.v}
                </p>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.l}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-foreground/55 leading-relaxed max-w-3xl">
            <T
              en="Pre-cycle baseline (2026). Live targets vs. actuals tracked from cycle start (2027)."
              fr="Référence pré-cycle (2026). Cibles et résultats réels suivis en direct dès le début du cycle (2027)."
            />
          </p>
        </div>
      </section>

      {/* By program */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="By program" fr="Par programme" /></p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>What each program <span className="display-italic">is set up to change.</span></>}
                fr={<>Ce que chaque programme <span className="display-italic">vise à changer.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Every service we deliver feeds one of these programs. Each program carries a small set of indicators that we publish — green ≥ 90% of target, amber 70–89%, red below 70%."
                fr="Chaque service que nous livrons alimente l'un de ces programmes. Chaque programme porte un petit ensemble d'indicateurs que nous publions — vert ≥ 90 % de la cible, ambre 70-89 %, rouge en deçà de 70 %."
              />
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {programs.map(({ tag, Icon, t, promise, indicators, href, services }) => (
              <div key={tag} className="rounded-3xl border border-foreground/10 bg-background p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{tag}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold tracking-tight mb-2">{t}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-5">{promise}</p>

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3"><T en="Key indicators" fr="Indicateurs clés" /></p>
                <ul className="space-y-2.5 mb-6">
                  {indicators.map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  <Link href={href} className="inline-flex items-center gap-1.5 text-accent hover:underline underline-offset-4">
                    <T en={<>About {tag}</>} fr={<>À propos de {tag}</>} /> <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>
                  <Link href={services} className="inline-flex items-center gap-1.5 text-foreground/70 hover:text-accent">
                    <T en={<>Services for {tag}</>} fr={<>Services pour {tag}</>} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="community" caption={tt("Women & youth in cooperatives", "Femmes et jeunes dans les coopératives")} aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Inclusion is contractual, <span className="display-italic">not aspirational.</span></>}
                fr={<>L'inclusion est contractuelle, <span className="display-italic">pas un vœu pieux.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Quota targets across every program. We publish share of beneficiaries, leadership roles, training hours and finance events — every quarter."
                fr="Des objectifs de quotas dans chaque programme. Nous publions la part des bénéficiaires, les rôles de direction, les heures de formation et les événements de financement — chaque trimestre."
              />
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {inclusion.map((g) => (
              <div key={g.label} className="rounded-2xl border border-foreground/10 bg-background p-6">
                <p className="font-serif text-4xl font-semibold tracking-tight text-accent leading-none mb-3">
                  {g.pct}
                </p>
                <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{g.label}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">{g.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent evaluations */}
      <section className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Not graded <span className="display-italic">by ourselves.</span></>}
                fr={<>Pas évalués <span className="display-italic">par nous-mêmes.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Three independent evaluations across the 2027–2029 cycle. Commissioned by SAICE, contracted to a firm with no prior relationship, and published in full."
                fr="Trois évaluations indépendantes sur le cycle 2027-2029. Commandées par SAICE, confiées à une firme sans relation antérieure, et publiées intégralement."
              />
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-4">
            {evaluations.map((e, i) => (
              <li key={e.t} className="rounded-2xl border border-foreground/10 bg-background p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">{e.year}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-tight mb-2">{e.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{e.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Stories preview */}
      <section className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>The people <span className="display-italic">behind the numbers.</span></>}
                fr={<>Les personnes <span className="display-italic">derrière les chiffres.</span></>}
              />
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              <T
                en="Stories from the field — written or filmed with the people whose lives the work touches, with consent on the record."
                fr="Histoires du terrain — écrites ou filmées avec les personnes dont notre travail touche la vie, avec consentement consigné."
              />
            </p>
          </div>

          <div className="-mx-4 lg:-mx-6 px-4 lg:px-6 overflow-x-auto scrollbar-thin snap-x snap-mandatory">
            <div className="flex gap-5 pb-4">
              {stories.map((s) => (
                <Link
                  key={s.title}
                  href="/impact/stories"
                  className="group snap-start flex-shrink-0 w-[85%] sm:w-[55%] md:w-[40%] lg:w-[30%] blob-card bg-card overflow-hidden flex flex-col hover:bg-card/70 transition-colors"
                >
                  <SectionImage
                    kind={s.kind}
                    aspect="3/2"
                    rounded="rounded-none"
                    className="mb-0"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">{s.tag}</p>
                    <h3 className="font-serif text-lg md:text-xl font-semibold tracking-tight text-foreground mb-3 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed flex-1">{s.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      <T en="Read or watch" fr="Lire ou regarder" /> <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stories() {
  const tt = useTT();
  const stories = [
    {
      tag: tt("Rwanda · PAGES · women-led", "Rwanda · PAGES · porté par des femmes"),
      title: tt(
        "Aline runs a 280-member maize cooperative in Musanze",
        "Aline dirige une coopérative de maïs de 280 membres à Musanze",
      ),
      body: tt(
        "Here is what the Smart Market Matchmaker changed for her quarter — buyer access, price uplift, and the first finance event for 31 women in her group.",
        "Voici ce que le Smart Market Matchmaker a changé pour son trimestre — accès aux acheteurs, hausse des prix et premier événement de financement pour 31 femmes de son groupe.",
      ),
    },
    {
      tag: tt("Togo · ICES · youth-led", "Togo · ICES · porté par les jeunes"),
      title: tt(
        "From street pickers to a registered cooperative",
        "Des récupérateurs de rue à une coopérative enregistrée",
      ),
      body: tt(
        "A Lomé waste-sorting line, one year in. How a 12-person collective became an EPR-grade reporting partner — and what the carbon receipts paid for.",
        "Une ligne de tri des déchets à Lomé, un an plus tard. Comment un collectif de 12 personnes est devenu un partenaire de reporting de niveau REP — et ce qu'ont financé les recettes carbone.",
      ),
    },
    {
      tag: tt("Cross-cutting · learning", "Transversal · apprentissage"),
      title: tt(
        "Three things we got wrong on the GIAH pilot — and one we got right",
        "Trois choses que nous avons ratées sur le pilote GIAH — et une que nous avons réussie",
      ),
      body: tt(
        "Honest notes from the field. Where our onboarding under-counted women, where IoT data outpaced cooperative literacy, and the one design call that held up under scale-out.",
        "Notes honnêtes du terrain. Là où notre intégration a sous-compté les femmes, là où les données IoT ont devancé l'alphabétisation des coopératives, et le choix de conception qui a tenu lors du passage à l'échelle.",
      ),
    },
    {
      tag: tt("Kenya · PAGES · methodology", "Kenya · PAGES · méthodologie"),
      title: tt(
        "What it costs to reach the last farmer",
        "Ce qu'il en coûte pour atteindre le dernier agriculteur",
      ),
      body: tt(
        "Unit-cost analysis from the SEKU pilot — enumerator time, mobile-money fees, and the share of the budget that never gets line-itemed in a logframe.",
        "Analyse des coûts unitaires du pilote SEKU — temps des enquêteurs, frais de mobile money et part du budget qui n'apparaît jamais en ligne dans un cadre logique.",
      ),
    },
  ];

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        title={tt("The people", "Les personnes")}
        italic={tt("behind the numbers.", "derrière les chiffres.")}
        description={tt(
          "Written or filmed with the people whose lives the work touches, with consent on the record. Plain language, no extractive photography.",
          "Écrites ou filmées avec les personnes dont notre travail touche la vie, avec consentement consigné. Langage simple, pas de photographie extractive.",
        )}
        crumbs={[{ label: tt("Impact", "Impact"), href: "/impact" }, { label: tt("Stories", "Histoires") }]}
        image={impactStoriesHero}
        imageAlt={tt(
          "Community members behind the work",
          "Membres de la communauté à l'origine du travail",
        )}
      />

      <section className="py-14 md:py-16">
        <div className="container px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {stories.map((s) => (
              <article key={s.title} className="blob-card bg-card p-7 flex flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">{s.tag}</p>
                <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">{s.body}</p>
                <div className="mt-auto pt-4 border-foreground/10 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground"><T en="Read or watch" fr="Lire ou regarder" /></span>
                  <span className="circle-arrow-sm">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
