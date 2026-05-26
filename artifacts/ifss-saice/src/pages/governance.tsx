import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, FileText, Scale } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import governanceHero from "@/assets/images/about-hero.png";
import governanceBoard from "@/assets/images/governance-board.png";
import governancePolicies from "@/assets/images/governance-policies.png";
import { T, useTT } from "@/lib/i18n";

export default function Governance() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt(
      "Governance & Transparency | SAICE / IFSS Inc.",
      "Gouvernance et transparence | SAICE / IFSS Inc.",
    );
  }, [tt]);

  const POLICIES: { en: string; fr: string }[] = [
    { en: "Privacy & Data Protection", fr: "Confidentialité et protection des données" },
    { en: "AI Ethics & Algorithmic Accountability", fr: "Éthique de l'IA et reddition de comptes algorithmique" },
    { en: "GEDSI — Gender, Equity, Disability, Social Inclusion", fr: "ÉDIS — Égalité, diversité, handicap, inclusion sociale" },
    { en: "Safeguarding / PSEAH", fr: "Sauvegarde / PEAHS" },
    { en: "Whistle-blower Protection", fr: "Protection des lanceurs d'alerte" },
    { en: "Conflict of Interest", fr: "Conflits d'intérêts" },
    { en: "Anti-Bribery & Corruption", fr: "Lutte contre la corruption" },
    { en: "Environmental Sustainability", fr: "Durabilité environnementale" },
  ];

  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero
        title={tt("Governance &", "Gouvernance et")}
        italic={tt("transparency.", "transparence.")}
        description={tt(
          "A majority-independent board and clear policies — published openly, reviewed regularly.",
          "Un conseil majoritairement indépendant et des politiques claires — publiées en accès libre, revues régulièrement.",
        )}
        crumbs={[{ label: tt("Governance", "Gouvernance") }]}
        image={governanceHero}
        imageAlt={tt("Governance and oversight", "Gouvernance et supervision")}
      />

      <div className="container px-4 lg:px-6 max-w-6xl mx-auto">
        {/* Board */}
        <section className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <figure className="lg:col-span-7 relative overflow-hidden rounded-3xl" style={{ aspectRatio: "16/9" }}>
            <img
              src={governanceBoard}
              alt={tt("SAICE / IFSS board of directors in session", "Conseil d'administration de SAICE / IFSS en séance")}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="lg:col-span-5">
            <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <ShieldCheck className="w-5 h-5 text-accent" strokeWidth={1.75} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
              <T en="The board" fr="Le conseil" />
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">
              <T
                en={<>Majority <span className="display-italic">independent.</span></>}
                fr={<>Majoritairement <span className="display-italic">indépendant.</span></>}
              />
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              <T
                en="Academic, civil-society and partner-country voices set strategy and oversee risk, ethics and finances."
                fr="Des voix issues du monde universitaire, de la société civile et des pays partenaires définissent la stratégie et supervisent les risques, l'éthique et les finances."
              />
            </p>
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
            >
              <T en="Meet the board" fr="Découvrir le conseil" /> <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </section>

        {/* Policies */}
        <section className="mt-20 md:mt-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 lg:order-2">
            <figure className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
              <img
                src={governancePolicies}
                alt={tt("Core policies and accountability charter on a desk", "Politiques fondamentales et charte de reddition de comptes sur un bureau")}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="lg:col-span-7 lg:order-1">
            <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <FileText className="w-5 h-5 text-accent" strokeWidth={1.75} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
              <T en="Core policies" fr="Politiques fondamentales" />
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-6">
              <T
                en={<>The rules we <span className="display-italic">hold ourselves to.</span></>}
                fr={<>Les règles que nous <span className="display-italic">nous imposons.</span></>}
              />
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {POLICIES.map((p) => (
                <li
                  key={p.en}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-card border border-foreground/10 text-sm text-foreground"
                >
                  <FileText className="w-4 h-4 text-accent shrink-0" strokeWidth={1.75} />
                  <span>{tt(p.en, p.fr)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Brief footer strip */}
        <section className="mt-20 md:mt-24 grid md:grid-cols-2 gap-5">
          <div className="blob-card bg-card p-7 flex items-start gap-4">
            <Scale className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.75} />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-tight mb-1"><T en="Structure" fr="Structure" /></h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                <T
                  en="IFSS Inc. (2023) — Canadian social enterprise. SAICE — Canadian charity registration in progress."
                  fr="IFSS Inc. (2023) — entreprise sociale canadienne. SAICE — enregistrement caritatif canadien en cours."
                />
              </p>
            </div>
          </div>
          <div className="blob-card bg-card p-7 flex items-start gap-4">
            <FileText className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.75} />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-tight mb-1"><T en="Audits & filings" fr="Audits et déclarations" /></h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                <T
                  en="Audited statements and CRA T3010 filings will be published after the first reporting cycle as a registered charity."
                  fr="Les états financiers audités et les déclarations T3010 de l'ARC seront publiés après le premier cycle de reddition de comptes en tant qu'organisme de bienfaisance enregistré."
                />
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
