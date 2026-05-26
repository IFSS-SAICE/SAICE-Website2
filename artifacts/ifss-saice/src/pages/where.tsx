import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, Building2, Users, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import whereHero from "@/assets/images/ices-hero.png";
import { SectionImage } from "@/components/SectionImage";

const countries = [
  {
    id: "rwanda",
    name: "Rwanda",
    focus: "PSTA 5 alignment, MINAGRI partnership.",
    activities: ["GIAH pilot (2025–2026)", "Sustainable Horticulture project", "PAGES deployment"],
    partners: ["RCID", "MINAGRI"],
    status: "Active Operations",
  },
  {
    id: "kenya",
    name: "Kenya",
    focus: "ASTGS alignment, Kenya MoA.",
    activities: ["PAGES pilot", "Agricultural data integration"],
    partners: ["SEKU partnership", "Kenya MoA"],
    status: "Active Operations",
  },
  {
    id: "burundi",
    name: "Burundi",
    focus: "ICGLR alignment, MINEMA.",
    activities: ["PAGES scale-out planning", "Cross-border trade tech"],
    partners: ["MINEMA"],
    status: "Scale-out Phase",
  },
  {
    id: "drc",
    name: "DRC",
    focus: "ICGLR alignment.",
    activities: ["PAGES scale-out planning", "Value chain mapping"],
    partners: ["Regional cooperatives"],
    status: "Scale-out Phase",
  },
  {
    id: "togo",
    name: "Togo",
    focus: "Circular economy innovation.",
    activities: ["ICES pilot with Terre des Jeunes Togo", "Waste mapping"],
    partners: ["Terre des Jeunes Togo", "Ripen partnership"],
    status: "Active Operations",
  },
  {
    id: "canada",
    name: "Canada (HQ)",
    focus: "Global headquarters and governance.",
    activities: ["McGill MMA capstone project", "SAICE Charity registration", "Donor relations"],
    partners: ["McGill University"],
    status: "Headquarters",
  }
];

export default function WhereWeWorkRoutes({ params }: { params?: { country?: string } }) {
  const countryId = params?.country;
  const activeCountry = countries.find(c => c.id === countryId);

  useEffect(() => {
    document.title = `Where We Work ${activeCountry ? `- ${activeCountry.name}` : ''} | SAICE / IFSS Inc.`;
  }, [activeCountry]);

  if (activeCountry) {
    return <CountryDetail country={activeCountry} />;
  }

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title="Where"
        italic="we work"
        description="Headquartered in Canada, our operational footprint covers the Great Lakes Region and West Africa. We partner directly with ministries, universities and cooperatives on the ground."
        crumbs={[{ label: "Where we work" }]}
        image={whereHero}
        imageAlt="Field operations across the Great Lakes Region"
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
                  <h3 className="font-serif font-semibold tracking-tight text-lg text-foreground">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{c.status}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CountryDetail({ country }: { country: typeof countries[0] }) {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title={country.name}
        description={country.focus}
        crumbs={[{ label: "Where we work", href: "/where-we-work" }, { label: country.name }]}
        image={whereHero}
        imageAlt={`${country.name} — field operations`}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionImage kind="field" caption={`${country.name} — on the ground`} aspect="16/9" className="mt-10 mb-12" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                What we do here
              </h2>
              <ul className="space-y-4">
                {country.activities.map((act, i) => (
                  <li key={i} className="flex gap-3 bg-card p-4 rounded-xl border">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground font-medium">{act}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Local Partners
              </h2>
              <div className="flex flex-wrap gap-2">
                {country.partners.map((partner, i) => (
                  <span key={i} className="px-4 py-2 bg-muted rounded-lg border text-sm font-medium text-foreground">
                    {partner}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-card p-6 rounded-2xl border border-muted-foreground/20">
              <h2 className="text-xl font-serif font-semibold tracking-tight mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-muted-foreground" />
                Local Office
              </h2>
              {country.id === 'canada' ? (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  61 B Rue Doyon<br/>G1E 5G1 Quebec, Canada
                </p>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  Office establishing. Managed via regional HQ network.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
