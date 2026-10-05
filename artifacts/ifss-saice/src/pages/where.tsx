import React, { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, Building2, Users, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionImage } from "@/components/SectionImage";
import type { PhotoSlot } from "@/lib/photos";
import { T, useTT } from "@/lib/i18n";

type CountryEntry = {
  id: string;
  name: { en: string; fr: string };
  focus: { en: string; fr: string };
  activities: { en: string; fr: string }[];
  partners: string[];
  status: { en: string; fr: string };
};

const partnerTranslations: Record<string, string> = {
  "SEKU partnership": "Partenariat SEKU",
  "Regional cooperatives": "Coopératives régionales",
  "Ripen partnership": "Partenariat Ripen",
};

/** Explicit per-country photo slots (no derived/fallback allocation). */
const COUNTRY_PHOTOS: Record<string, { hero: PhotoSlot; field: PhotoSlot }> = {
  rwanda: { hero: "where.rwanda.hero", field: "where.rwanda.field" },
  kenya: { hero: "where.kenya.hero", field: "where.kenya.field" },
  burundi: { hero: "where.burundi.hero", field: "where.burundi.field" },
  drc: { hero: "where.drc.hero", field: "where.drc.field" },
  togo: { hero: "where.togo.hero", field: "where.togo.field" },
  canada: { hero: "where.canada.hero", field: "where.canada.field" },
};

const countries: CountryEntry[] = [
  {
    id: "rwanda",
    name: { en: "Rwanda", fr: "Rwanda" },
    focus: { en: "PSTA 5 alignment, MINAGRI partnership.", fr: "Alignement sur PSTA 5, partenariat avec le MINAGRI." },
    activities: [
      { en: "GIAH pilot (2025–2026)", fr: "Pilote GIAH (2025-2026)" },
      { en: "Sustainable Horticulture project", fr: "Projet d'horticulture durable" },
      { en: "PAGES deployment", fr: "Déploiement de PAGES" },
    ],
    partners: ["RCID", "MINAGRI"],
    status: { en: "Active Operations", fr: "Opérations actives" },
  },
  {
    id: "kenya",
    name: { en: "Kenya", fr: "Kenya" },
    focus: { en: "ASTGS alignment, Kenya MoA.", fr: "Alignement sur ASTGS, ministère de l'Agriculture du Kenya." },
    activities: [
      { en: "PAGES pilot", fr: "Pilote PAGES" },
      { en: "Agricultural data integration", fr: "Intégration des données agricoles" },
    ],
    partners: ["SEKU partnership", "Kenya MoA"],
    status: { en: "Active Operations", fr: "Opérations actives" },
  },
  {
    id: "burundi",
    name: { en: "Burundi", fr: "Burundi" },
    focus: { en: "ICGLR alignment, MINEMA.", fr: "Alignement sur la CIRGL, MINEMA." },
    activities: [
      { en: "PAGES scale-out planning", fr: "Planification du passage à l'échelle de PAGES" },
      { en: "Cross-border trade tech", fr: "Technologies pour le commerce transfrontalier" },
    ],
    partners: ["MINEMA"],
    status: { en: "Scale-out Phase", fr: "Phase de passage à l'échelle" },
  },
  {
    id: "drc",
    name: { en: "DRC", fr: "RDC" },
    focus: { en: "ICGLR alignment.", fr: "Alignement sur la CIRGL." },
    activities: [
      { en: "PAGES scale-out planning", fr: "Planification du passage à l'échelle de PAGES" },
      { en: "Value chain mapping", fr: "Cartographie des chaînes de valeur" },
    ],
    partners: ["Regional cooperatives"],
    status: { en: "Scale-out Phase", fr: "Phase de passage à l'échelle" },
  },
  {
    id: "togo",
    name: { en: "Togo", fr: "Togo" },
    focus: { en: "Circular economy innovation.", fr: "Innovation en économie circulaire." },
    activities: [
      { en: "ICES pilot with Terre des Jeunes Togo", fr: "Pilote ICES avec Terre des Jeunes Togo" },
      { en: "Waste mapping", fr: "Cartographie des déchets" },
    ],
    partners: ["Terre des Jeunes Togo", "Ripen partnership"],
    status: { en: "Active Operations", fr: "Opérations actives" },
  },
  {
    id: "canada",
    name: { en: "Canada (HQ)", fr: "Canada (siège)" },
    focus: { en: "Global headquarters and governance.", fr: "Siège mondial et gouvernance." },
    activities: [
      { en: "McGill MMA capstone project", fr: "Projet de fin d'études MMA McGill" },
      { en: "SAICE Charity registration", fr: "Enregistrement caritatif de SAICE" },
      { en: "Donor relations", fr: "Relations avec les bailleurs" },
    ],
    partners: ["McGill University"],
    status: { en: "Headquarters", fr: "Siège" },
  },
];

export default function WhereWeWorkRoutes({ params }: { params?: { country?: string } }) {
  const countryId = params?.country;
  const activeCountry = countries.find(c => c.id === countryId);
  const tt = useTT();

  useEffect(() => {
    const activeName = activeCountry ? ` - ${tt(activeCountry.name.en, activeCountry.name.fr)}` : "";
    document.title = tt(
      `Where We Work${activeName} | SAICE / IFSS Inc.`,
      `Où nous intervenons${activeName} | SAICE / IFSS Inc.`,
    );
  }, [activeCountry, tt]);

  if (activeCountry) {
    return <CountryDetail country={activeCountry} />;
  }

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title={tt("Where", "Où")}
        italic={tt("we work", "nous intervenons")}
        description={tt(
          "Canadian headquarters. Great Lakes and West African operations, partnering directly with ministries, universities and cooperatives.",
          "Siège au Canada. Opérations dans les Grands Lacs et en Afrique de l'Ouest, avec ministères, universités et coopératives comme partenaires directs.",
        )}
        crumbs={[{ label: tt("Where we work", "Où nous intervenons") }]}
        photo="where.hero"
      />
      <div className="container mx-auto px-4">

        {/* Map Visualization Placeholder */}
        <div className="bg-muted border rounded-3xl p-8 md:p-16 mb-16 relative overflow-hidden flex items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
             {/* Stylized Africa Map Placeholder - using SVG shapes */}
             <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] text-primary fill-current">
               <path d="M 20,40 Q 15,30 30,20 T 60,10 Q 75,15 85,30 T 70,60 Q 60,80 40,90 T 25,60 Z" />
             </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10 w-full max-w-4xl mx-auto">
            {countries.map(c => (
              <Link key={c.id} href={`/where-we-work/${c.id}`} className="block group">
                <div className="bg-background/90 backdrop-blur border p-6 rounded-2xl hover:border-primary hover:shadow-md transition-all text-center h-full flex flex-col justify-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  <h3 className="font-serif font-semibold tracking-tight text-lg text-foreground">{tt(c.name.en, c.name.fr)}</h3>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{tt(c.status.en, c.status.fr)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CountryDetail({ country }: { country: CountryEntry }) {
  const tt = useTT();
  const name = tt(country.name.en, country.name.fr);
  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title={name}
        description={tt(country.focus.en, country.focus.fr)}
        crumbs={[{ label: tt("Where we work", "Où nous intervenons"), href: "/where-we-work" }, { label: name }]}
        photo={COUNTRY_PHOTOS[country.id].hero}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionImage photo={COUNTRY_PHOTOS[country.id].field} kind="field" caption={tt(`${name} — on the ground`, `${name} — sur le terrain`)} aspect="16/9" className="mt-10 mb-12" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <T en="What we do here" fr="Ce que nous faisons ici" />
              </h2>
              <ul className="space-y-4">
                {country.activities.map((act, i) => (
                  <li key={i} className="flex gap-3 bg-card p-4 rounded-xl border">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">{tt(act.en, act.fr)}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <T en="Local Partners" fr="Partenaires locaux" />
              </h2>
              <div className="flex flex-wrap gap-2">
                {country.partners.map((partner, i) => (
                  <span key={i} className="px-4 py-2 bg-muted rounded-lg border text-sm font-medium text-foreground">
                    {tt(partner, partnerTranslations[partner] ?? partner)}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-card p-6 rounded-2xl border border-muted-foreground/20">
              <h2 className="text-xl font-serif font-semibold tracking-tight mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-muted-foreground" />
                <T en="Local Office" fr="Bureau local" />
              </h2>
              {country.id === 'canada' ? (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  61 B Rue Doyon<br/>G1E 5G1 {tt("Quebec, Canada", "Québec, Canada")}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  <T en="Office being established; managed through the regional HQ network." fr="Bureau en création, géré par le réseau régional du siège." />
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
