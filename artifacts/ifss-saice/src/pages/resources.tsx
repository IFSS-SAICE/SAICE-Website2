import { useEffect } from "react";
import {
  ArrowRight,
  Code2,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import resourcesHero from "@/assets/images/resources-hero.png";
import { SectionImage } from "@/components/SectionImage";
import { T, useTT } from "@/lib/i18n";

export default function ResourcesRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;
  const tt = useTT();

  const launchSet = [
    { year: "2026", t: tt("PAGES Rwanda pilot — lessons learned", "Pilote PAGES Rwanda — enseignements"), tag: tt("Working paper", "Document de travail"), program: "PAGES" },
    { year: "2026", t: tt("Integrated SAICE / IFSS programs — concept note", "Programmes intégrés SAICE / IFSS — note conceptuelle"), tag: tt("Concept note", "Note conceptuelle"), program: tt("Cross-program", "Inter-programmes") },
    { year: "2027", t: tt("PAGES baseline study — Rwanda and Kenya", "Étude de référence PAGES — Rwanda et Kenya"), tag: tt("Baseline", "Étude de référence"), program: "PAGES" },
    { year: "2027", t: tt("ICES Togo pilot — launch brief", "Pilote ICES Togo — note de lancement"), tag: tt("Policy brief", "Note politique"), program: "ICES" },
    { year: "2027", t: tt("PACES mini-grid feasibility — first cohort", "Faisabilité mini-réseaux PACES — première cohorte"), tag: tt("Feasibility", "Étude de faisabilité"), program: "PACES" },
    { year: "2027", t: tt("Services delivery handbook — how we engage partners", "Manuel de prestation de services — comment nous mobilisons nos partenaires"), tag: tt("Handbook", "Manuel"), program: tt("Services", "Services") },
  ];

  const datasetsYes = [
    tt("Aggregated, de-identified indicator data per quarter", "Données d'indicateurs agrégées et anonymisées, par trimestre"),
    tt("Cooperative-level data — only with explicit consent on file", "Données à l'échelle des coopératives — uniquement avec consentement explicite enregistré"),
    tt("Geospatial layers — farm parcels, waste-stream coverage, energy demand", "Couches géospatiales — parcelles agricoles, couverture des flux de déchets, demande énergétique"),
    tt("Survey instruments and de-identified responses where consent permits", "Instruments d'enquête et réponses anonymisées lorsque le consentement le permet"),
  ];

  const codeItems = [
    tt("PAGES — market matchmaker, IoT precision insight, cooperative ERP", "PAGES — mise en relation marchés, précision IoT, ERP coopératif"),
    tt("ICES — smart-bin firmware, sorting analytics, ML carbon calculator", "ICES — firmware des bacs intelligents, analytique de tri, calculateur carbone par apprentissage automatique"),
    tt("PACES — mini-grid sizing tools, productive-use planner, MRV scripts", "PACES — outils de dimensionnement des mini-réseaux, planificateur d'usages productifs, scripts MRV"),
    tt("Shared backbone — common data model, auth, USSD / SMS gateway, model cards", "Socle commun — modèle de données partagé, authentification, passerelle USSD / SMS, fiches de modèles"),
  ];

  useEffect(() => {
    document.title = sub
      ? tt(`Resources — ${sub} · SAICE / IFSS Inc.`, `Ressources — ${sub} · SAICE / IFSS Inc.`)
      : tt(
          "Resources — Publications, Datasets, Code · SAICE & IFSS",
          "Ressources — Publications, jeux de données, code · SAICE et IFSS",
        );
  }, [sub, tt]);

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero title={tt("Evidence we share,", "Des preuves partagées,")}
        italic={tt("tools you can use.", "des outils à votre disposition.")}
        description={tt(
          "Briefs, datasets and code from our PAGES, ICES and PACES programs — published in plain language, under open licences, and free to build on.",
          "Notes, jeux de données et code issus de nos programmes PAGES, ICES et PACES — publiés en langage clair, sous licences ouvertes et libres de réutilisation.",
        )}
        crumbs={[{ label: tt("Resources", "Ressources") }]}
        image={resourcesHero}
        imageAlt={tt("Open research and publications", "Recherche ouverte et publications")}
      />

      {/* Publications */}
      <section id="publications" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  <T
                    en={<>What we publish, <span className="display-italic">and how to find it.</span></>}
                    fr={<>Ce que nous publions, <span className="display-italic">et comment le trouver.</span></>}
                  />
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  <T
                    en="Concept notes, policy briefs, working papers, peer-reviewed papers and donor reports. Each item carries a one-page summary, a full PDF, a DOI where applicable, and a recommended citation."
                    fr="Notes conceptuelles, notes politiques, documents de travail, articles évalués par les pairs et rapports aux bailleurs. Chaque document comprend un résumé d'une page, un PDF complet, un DOI le cas échéant et une citation recommandée."
                  />
                </p>
              </div>

              <div className="space-y-3">
                {launchSet.map((item) => (
                  <div
                    key={item.t}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-card p-5 hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={1.75} />
                      <div>
                        <p className="font-serif text-base font-semibold tracking-tight text-foreground leading-snug">{item.t}</p>
                        <p className="text-xs text-foreground/55 mt-1">
                          {item.year} · {item.program} · {item.tag}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45 whitespace-nowrap pt-1.5">
                      <T en="Coming" fr="À venir" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="publications" caption={tt("Concept notes, policy briefs, papers", "Notes conceptuelles, notes politiques, articles")} aspect="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Datasets + Code */}
      <section id="data-code" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 order-1">
              <SectionImage kind="dataset" caption={tt("Open datasets & code repositories", "Jeux de données ouverts et dépôts de code")} aspect="4/3" />
            </div>

            <div className="lg:col-span-7 space-y-8 order-2">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  <T
                    en={<>FAIR data, ready to reuse — <span className="display-italic">with the model cards that come with it.</span></>}
                    fr={<>Des données FAIR, prêtes à être réutilisées — <span className="display-italic">avec les fiches de modèles qui les accompagnent.</span></>}
                  />
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  <T
                    en="Every dataset has a DOI, a licence, a methodology note and a named contact. Every ML model in production has a model card — purpose, training data, performance, known failure modes."
                    fr="Chaque jeu de données dispose d'un DOI, d'une licence, d'une note méthodologique et d'un point de contact nommé. Chaque modèle d'apprentissage automatique en production possède une fiche de modèle — finalité, données d'entraînement, performances, modes de défaillance connus."
                  />
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-3xl border border-primary/20 bg-background p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary"><T en="Datasets" fr="Jeux de données" /></p>
                  </div>
                  <ul className="space-y-3">
                    {datasetsYes.map((d) => (
                      <li key={d} className="flex gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-1" strokeWidth={2} />
                        <p className="text-sm text-foreground/80 leading-relaxed">{d}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-accent/25 bg-background p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-4 h-4 text-accent" strokeWidth={1.75} />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent"><T en="Code" fr="Code" /></p>
                  </div>
                  <ul className="space-y-3">
                    {codeItems.map((c) => (
                      <li key={c} className="flex gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                        <p className="text-sm text-foreground/80 leading-relaxed">{c}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-xs text-foreground/60">
                <T
                  en="We will not publish anything that could re-identify an individual, partner data without written release, or material that puts beneficiaries at risk."
                  fr="Nous ne publierons rien qui pourrait permettre de réidentifier une personne, ni de données de partenaires sans autorisation écrite, ni de contenu mettant les bénéficiaires en danger."
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  <T
                    en={<>A quarterly newsletter <span className="display-italic">you will actually want to open.</span></>}
                    fr={<>Une infolettre trimestrielle <span className="display-italic">que vous aurez envie d'ouvrir.</span></>}
                  />
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  <T
                    en="Four issues per year. One big story, three short ones, the indicators we just refreshed, and two upcoming events. English and French from issue 1; Kinyarwanda from issue 5. We will never sell, share or rent the list."
                    fr="Quatre numéros par an. Un grand sujet, trois courts, les indicateurs que nous venons d'actualiser et deux événements à venir. Anglais et français dès le premier numéro ; kinyarwanda à partir du cinquième. Nous ne vendrons, ne partagerons ni ne louerons jamais la liste."
                  />
                </p>
              </div>

              <form
                className="rounded-3xl border border-foreground/10 bg-card p-7 space-y-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60"><T en="Email" fr="Courriel" /></span>
                    <input
                      type="email"
                      className="mt-1.5 w-full h-11 px-4 rounded-full border border-foreground/15 bg-background text-sm focus:outline-none focus:border-accent"
                      placeholder="you@example.org"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60"><T en="I am a" fr="Je suis" /></span>
                    <select className="mt-1.5 w-full h-11 px-4 rounded-full border border-foreground/15 bg-background text-sm focus:outline-none focus:border-accent">
                      <option>{tt("Donor", "Bailleur")}</option>
                      <option>{tt("Researcher", "Chercheur·e")}</option>
                      <option>{tt("Practitioner", "Praticien·ne")}</option>
                      <option>{tt("Journalist", "Journaliste")}</option>
                      <option>{tt("Other", "Autre")}</option>
                    </select>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
                >
                  <T en="Subscribe" fr="S'abonner" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
                <p className="text-xs text-foreground/55 leading-relaxed pt-1">
                  <T en="Four emails a year. Unsubscribe in one click." fr="Quatre courriels par an. Désabonnement en un clic." />
                </p>
              </form>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="newsletter" caption={tt("Quarterly newsletter — EN / FR", "Infolettre trimestrielle — EN / FR")} aspect="4/3" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
