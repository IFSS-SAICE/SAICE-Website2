import { useEffect } from "react";
import {
  Heart,
  Handshake,
  Users,
  Briefcase,
  Mail,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionImage } from "@/components/SectionImage";
import { ContactDialog } from "@/components/ContactDialog";
import { T, useTT } from "@/lib/i18n";

export default function GetInvolvedRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;
  const tt = useTT();

  const SUB_FR: Record<string, string> = {
    donate: "don",
    partner: "partenariat",
    volunteer: "bénévolat",
    careers: "carrières",
    intern: "stage",
  };

  useEffect(() => {
    document.title = sub
      ? tt(
          `Get involved — ${sub} · SAICE / IFSS Inc.`,
          `S'impliquer — ${SUB_FR[sub] ?? sub} · SAICE / IFSS Inc.`,
        )
      : tt(
          "Get involved — Donate, Partner, Volunteer, Intern · SAICE & IFSS",
          "S'impliquer — Don, Partenariat, Bénévolat, Stage · SAICE et IFSS",
        );
  }, [sub, tt]);

  const giveMethods = [
    tt(
      "One-off online gift (CAD, USD, EUR, GBP) — card, PayPal, Apple / Google Pay",
      "Don ponctuel en ligne (CAD, USD, EUR, GBP) — carte, PayPal, Apple / Google Pay",
    ),
    tt("Monthly recurring gift — cancel any time, no fees", "Don mensuel récurrent — annulable à tout moment, sans frais"),
    tt("Bank transfer or wire", "Virement bancaire"),
    tt("Gift of securities (Canada) — bypass capital-gains tax", "Don de titres (Canada) — sans impôt sur les gains en capital"),
    tt("Donor-Advised Fund (DAF) — Canada and US", "Fonds à vocation arrêtée par le donateur (FVAD) — Canada et États-Unis"),
    tt("Legacy gift — bequests, life insurance, RRSP / RRIF designations", "Don planifié — legs, assurance vie, désignations REER / FERR"),
  ];

  const partnerTypes = [
    {
      t: tt("Cooperatives & producer organisations", "Coopératives et organisations de producteurs"),
      d: tt(
        "Your members and field data; our PAGES, ICES or PACES tools, training and finance links.",
        "Vos membres et données de terrain ; nos outils PAGES, ICES ou PACES, formations et liens de financement.",
      ),
      region: tt("Africa", "Afrique"),
    },
    {
      t: tt("Municipalities & utilities", "Municipalités et services publics"),
      d: tt(
        "Co-design ICES collection routes and PACES mini-grids with our smart sensing, MRV and climate-finance access.",
        "Co-concevoir les circuits ICES et mini-réseaux PACES avec nos capteurs intelligents, le MRV et l'accès à la finance climat.",
      ),
      region: tt("Africa", "Afrique"),
    },
    {
      t: tt("Ministries & public agencies", "Ministères et agences publiques"),
      d: tt(
        "Embed PAGES, ICES or PACES into national strategies — policy briefs, TA and joint pilots.",
        "Intégrer PAGES, ICES ou PACES dans les stratégies nationales — notes de politique, assistance technique et pilotes conjoints.",
      ),
      region: tt("Africa", "Afrique"),
    },
    {
      t: tt("Research & academic institutions", "Institutions de recherche et universités"),
      d: tt(
        "Co-author studies, share datasets, supervise interns and field a joint MRV agenda.",
        "Coécrire des études, partager des jeux de données, superviser des stagiaires et porter un agenda MRV commun.",
      ),
      region: tt("Africa · Europe", "Afrique · Europe"),
    },
    {
      t: tt("Donor & philanthropic partners", "Bailleurs et partenaires philanthropiques"),
      d: tt(
        "Restricted and unrestricted grants, blended finance, MOUs with quarterly written reviews.",
        "Subventions affectées et non affectées, finance mixte, protocoles d'entente avec revues écrites trimestrielles.",
      ),
      region: tt("Canada · Europe · Africa", "Canada · Europe · Afrique"),
    },
    {
      t: tt("Technology partners", "Partenaires technologiques"),
      d: tt(
        "Program hardware, platforms or services under a shared-IP agreement.",
        "Matériel, plateformes ou services pour nos programmes, avec entente de propriété intellectuelle partagée.",
      ),
      region: tt("Global", "Mondial"),
    },
  ];

  const volunteerTracks = [
    { t: tt("Strategy & advisory", "Stratégie et conseil"), d: tt("Board observerships, committee advisors, program reviewers.", "Postes d'observateur au conseil, conseillers de comités, examinateurs de programmes.") },
    { t: tt("Data & ML", "Données et apprentissage automatique"), d: tt("Model-card reviews, dataset curation, MEAL data audits.", "Revues de fiches de modèles, curation de jeux de données, audits de données SERA.") },
    { t: tt("Legal & compliance", "Juridique et conformité"), d: tt("Contract review, privacy, charity-sector compliance.", "Revue de contrats, confidentialité, conformité du secteur caritatif.") },
    { t: tt("Design & UX", "Design et UX"), d: tt("Accessibility audits, local-language UX, gallery curation.", "Audits d'accessibilité, UX en langues locales, curation de galeries.") },
    { t: tt("Writing & editing", "Rédaction et révision"), d: tt("Plain-language summaries, translations, brief editing.", "Résumés en langage clair, traductions, révision de notes.") },
    { t: tt("Field placements", "Placements sur le terrain"), d: tt("Credentialed professionals only (medical, agronomy, engineering) under a written placement agreement.", "Professionnels accrédités uniquement (médical, agronomie, ingénierie), dans le cadre d'une entente de placement écrite.") },
  ];

  const internships = [
    { t: tt("Programs Intern — SAICE", "Stagiaire en programmes — SAICE"), loc: tt("Canada HQ / remote", "Siège canadien / télétravail") },
    { t: tt("MEAL & Research Intern", "Stagiaire SERA et recherche"), loc: tt("Canada HQ / partner sites", "Siège canadien / sites partenaires") },
    { t: tt("Country Coordination Intern", "Stagiaire en coordination-pays"), loc: tt("Africa partner sites", "Sites partenaires en Afrique") },
    { t: tt("Communications & Policy Intern", "Stagiaire en communications et politique"), loc: tt("Canada HQ / remote", "Siège canadien / télétravail") },
    { t: tt("ML / Data Engineering Intern", "Stagiaire en apprentissage automatique / ingénierie des données"), loc: tt("Remote · all programs", "Télétravail · tous les programmes") },
    { t: tt("Partnerships Intern — IFSS Inc.", "Stagiaire en partenariats — IFSS Inc."), loc: tt("Canada HQ", "Siège canadien") },
  ];

  const internshipPrinciples = [
    tt("Paid placements — we do not run unpaid internships.", "Placements rémunérés — nous ne proposons pas de stages non rémunérés."),
    tt("Named mentor, written learning plan, real project ownership.", "Mentor désigné, plan d'apprentissage écrit, prise en charge réelle de projet."),
    tt("Structured interviews, named panellists, clear rubrics.", "Entrevues structurées, jury nommément désigné, grilles claires."),
    tt("GEDSI lens at sourcing, shortlisting and offer stages.", "Lentille GEDSI au sourcing, à la présélection et à l'offre."),
  ];

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        title={tt("Back the work.", "Soutenez le travail.")}
        italic={tt("Five ways to start.", "Cinq façons de commencer.")}
        description={tt(
          "Donor, partner, volunteer, researcher or future colleague — find your path.",
          "Donateur, partenaire, bénévole, chercheur ou futur collègue — trouvez votre voie.",
        )}
        crumbs={[{ label: tt("Get involved", "S'impliquer") }]}
        photo="getInvolved.hero"
      />

      {/* Donate */}
      <section id="donate" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent"><T en="Donate" fr="Don" /></p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  <T
                    en={<>Your gift, <span className="display-italic">clearly spent.</span></>}
                    fr={<>Votre don, <span className="display-italic">utilisé en toute clarté.</span></>}
                  />
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  <T
                    en="Give to SAICE, a Canadian registered charity based in Quebec City. Donations fund programs at African partner sites; European and Canadian partners co-fund research and evaluation."
                    fr="Donnez à SAICE, organisme de bienfaisance enregistré au Canada, basé à Québec. Les dons financent les programmes sur les sites partenaires africains ; des partenaires européens et canadiens cofinancent la recherche et l'évaluation."
                  />
                </p>
              </div>

              <div className="rounded-3xl border border-foreground/10 bg-card p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4"><T en="Ways to give" fr="Façons de donner" /></p>
                <ul className="space-y-3">
                  {giveMethods.map((m) => (
                    <li key={m} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <p className="text-sm text-foreground/80 leading-relaxed">{m}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage photo="getInvolved.donate" kind="donor" caption={tt("Your gift, simply put", "Votre don, simplement")} aspect="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage photo="getInvolved.partner" kind="partnership" caption={tt("Canada HQ · African & European partners", "Siège canadien · partenaires africains et européens")} aspect="4/3" />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Handshake className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent"><T en="Partner" fr="Partenariat" /></p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  <T
                    en={<>Co-design <span className="display-italic">what comes next.</span></>}
                    fr={<>Co-concevoir <span className="display-italic">la suite.</span></>}
                  />
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  <T
                    en="Programs are co-owned with research, delivery and donor partners: African sites, European research support, Canadian coordination. Each partnership has a mutually signed MOU, a named lead and quarterly written reviews."
                    fr="Programmes portés avec les partenaires de recherche, de mise en œuvre et de financement : sites africains, appui scientifique européen, coordination canadienne. Chaque partenariat a un protocole d'entente signé des deux côtés, un responsable désigné et des revues écrites trimestrielles."
                  />
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {partnerTypes.map((p) => (
                  <div key={p.t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-base font-semibold tracking-tight">{p.t}</h3>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent whitespace-nowrap pt-1">
                        {p.region}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/75 leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent"><T en="Volunteer" fr="Bénévolat" /></p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  <T
                    en={<>Five hours a month, <span className="display-italic">used well.</span></>}
                    fr={<>Cinq heures par mois, <span className="display-italic">bien employées.</span></>}
                  />
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  <T
                    en="No drop-in volunteering. Each volunteer has an agreement, a defined assignment and a named SAICE contact. Mostly remote; field placements are for credentialed professionals only."
                    fr="Pas de bénévolat ponctuel. Chaque bénévole a une entente, un mandat défini et un contact SAICE désigné. Principalement à distance ; placements sur le terrain réservés aux professionnels accrédités."
                  />
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {volunteerTracks.map((v) => (
                  <div key={v.t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                    <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{v.t}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{v.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage photo="getInvolved.volunteer" kind="team" caption={tt("Volunteers — five hours a month", "Bénévoles — cinq heures par mois")} aspect="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Careers & internships */}
      <section id="careers" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <span id="internships" className="block -translate-y-32 invisible" aria-hidden="true" />
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage photo="getInvolved.internship" kind="internship" caption={tt("Learn by doing — real work", "Apprendre en faisant — du vrai travail")} aspect="4/3" />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent"><T en="Intern" fr="Stage" /></p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  <T
                    en={<>Learn by doing, <span className="display-italic">on work that matters.</span></>}
                    fr={<>Apprendre en faisant, <span className="display-italic">sur des sujets qui comptent.</span></>}
                  />
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  <T
                    en="Roles: SAICE (programs, MEAL, communications) or IFSS Inc. (research collaborations, partnerships). Each posting lists the team, mentor and stipend."
                    fr="Postes : SAICE (programmes, SERA, communications) ou IFSS Inc. (collaborations de recherche, partenariats). Chaque offre précise l'équipe, le mentor et l'indemnité."
                  />
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {internships.map((r) => (
                  <div
                    key={r.t}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-card p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={1.75} />
                      <div>
                        <p className="font-serif text-base font-semibold tracking-tight text-foreground leading-snug">{r.t}</p>
                        <p className="text-xs text-foreground/55 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" strokeWidth={2} />
                          {r.loc}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45 whitespace-nowrap pt-1.5">
                      <T en="Opening 2027" fr="Ouverture 2027" />
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-accent/25 bg-accent/[0.04] p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4"><T en="How we hire" fr="Comment nous recrutons" /></p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {internshipPrinciples.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <p className="text-sm text-foreground/80 leading-relaxed">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final contact band */}
      <section id="contact" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="rounded-3xl border border-foreground/10 bg-background p-7 md:p-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] max-w-2xl mx-auto">
              <T
                en={<>Interested in getting involved <span className="display-italic">with SAICE?</span></>}
                fr={<>Envie de vous impliquer <span className="display-italic">avec SAICE ?</span></>}
              />
            </h2>
            <p className="mt-5 text-sm md:text-base text-foreground/70 max-w-xl mx-auto leading-relaxed">
              <T
                en="Funding, partnership, volunteering, internship or question? Share a few details; the right team member will reply."
                fr="Financement, partenariat, bénévolat, stage ou question ? Donnez quelques détails ; la bonne personne vous répondra."
              />
            </p>
            <div className="mt-8 flex justify-center">
              <ContactDialog
                title={<T en="Send us a message" fr="Envoyez-nous un message" />}
                description={
                  <T
                    en="Introduce yourself and your interest. We reply within a few working days."
                    fr="Présentez-vous et précisez votre intérêt. Réponse en quelques jours ouvrables."
                  />
                }
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" strokeWidth={2} />
                  <T en="Send us a message" fr="Envoyez-nous un message" />
                </button>
              </ContactDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
