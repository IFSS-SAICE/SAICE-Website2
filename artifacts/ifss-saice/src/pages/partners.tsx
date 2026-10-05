import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Building2, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionImage } from "@/components/SectionImage";
import logoMcGill from "@/assets/images/logos/mcgill.png";
import logoSEKU from "@/assets/images/logos/seku.png";
import logoICGLR from "@/assets/images/logos/icglr.png";
import logoAUDA from "@/assets/images/logos/auda-nepad.png";
import logoRCID from "@/assets/images/logos/rcid.png";
import { T, useTT } from "@/lib/i18n";

export default function Partners() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt("Partners | SAICE / IFSS Inc.", "Partenaires | SAICE / IFSS Inc.");
  }, [tt]);

  const strategicPartners: { name: string; full: string; desc: string; logo: string | null }[] = [
    {
      name: "McGill University",
      full: tt("McGill Master of Management in Analytics (MMA)", "Maîtrise en gestion de l'analytique (MMA) de McGill"),
      desc: tt(
        "Our cornerstone academic partner. McGill's capstone helped define predictive data models for our precision insight engines.",
        "Notre partenaire universitaire de référence. Le capstone McGill a contribué aux modèles prédictifs de nos moteurs d'analyse de précision.",
      ),
      logo: logoMcGill,
    },
    {
      name: "RCID-Rwanda",
      full: tt("Regional Research Centre for Integrated Development", "Centre régional de recherche pour le développement intégré"),
      desc: tt(
        "Strategic partner in Rwanda and the region, grounding our digital tools in rigorous agronomic research and local context.",
        "Partenaire stratégique au Rwanda et dans la région, ancrant nos outils dans une recherche agronomique rigoureuse et le contexte local.",
      ),
      logo: logoRCID,
    },
    {
      name: "South Eastern Kenya University",
      full: "SEKU",
      desc: tt(
        "Academic validation, student integration and local field testing for PAGES in Kenya.",
        "Validation académique, intégration étudiante et essais terrain locaux pour PAGES au Kenya.",
      ),
      logo: logoSEKU,
    },
    {
      name: "Terre des Jeunes Togo",
      full: tt("Terre des Jeunes (Togo Chapter)", "Terre des Jeunes (section Togo)"),
      desc: tt(
        "Lead implementation partner for the ICES pilot, mobilizing youth networks for circular-economy and waste-management innovation.",
        "Principal partenaire du pilote ICES, mobilisant les réseaux de jeunes pour l'innovation en économie circulaire et gestion des déchets.",
      ),
      logo: null,
    },
    {
      name: "Ripen",
      full: "Ripen",
      desc: tt(
        "Project-based learning and strategic academic links for continuous capacity building.",
        "Apprentissage par projet et liens académiques stratégiques pour un renforcement continu des capacités.",
      ),
      logo: null,
    },
    {
      name: "ICGLR",
      full: tt("International Conference on the Great Lakes Region", "Conférence internationale sur la région des Grands Lacs"),
      desc: tt(
        "Regional inter-governmental body supporting our conflict-sensitive development and cross-border cooperation in Rwanda, Burundi and DRC.",
        "Organisme intergouvernemental régional soutenant notre développement sensible aux conflits et notre coopération transfrontalière au Rwanda, Burundi et en RDC.",
      ),
      logo: logoICGLR,
    },
    {
      name: "AUDA-NEPAD",
      full: tt("African Union Development Agency", "Agence de développement de l'Union africaine"),
      desc: tt(
        "Aligns our programs with pan-African frameworks: CAADP, AU Agenda 2063 and the AU Continental AI Strategy.",
        "Aligne nos programmes sur les cadres panafricains : PDDAA, Agenda 2063 de l'UA et Stratégie continentale d'IA de l'UA.",
      ),
      logo: logoAUDA,
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title={tt("Our", "Nos")}
        italic={tt("partners", "partenaires")}
        description={tt(
          "We align with universities, regional networks and institutional donors for sustainable development and systemic change.",
          "Nous nous alignons avec universités, réseaux régionaux et bailleurs institutionnels pour le développement durable et le changement systémique.",
        )}
        crumbs={[{ label: tt("Partners", "Partenaires") }]}
        photo="partners.hero"
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionImage photo="partners.banner" kind="partnership" caption={tt("Universities, ministries, cooperatives, NGOs", "Universités, ministères, coopératives, ONG")} aspect="16/9" className="mt-10 mb-12" />

        {/* Strategic Partners */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-primary" /> <T en="Strategic Partners" fr="Partenaires stratégiques" />
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPartners.map((p, i) => (
              <Card key={i} className="border-muted-foreground/20 hover:shadow-md transition-shadow overflow-hidden">
                <div className="bg-white h-28 flex items-center justify-center px-6 border-b border-muted-foreground/10">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="max-h-16 max-w-full object-contain" loading="lazy" />
                  ) : (
                    <p className="font-serif text-base font-semibold text-foreground/70 text-center leading-tight">{p.name}</p>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold tracking-tight text-xl text-foreground mb-1">{p.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">{p.full}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Target funders */}
        <section className="mb-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3"><T en="Target funders" fr="Bailleurs ciblés" /></p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-4"><T en="Institutions we seek funding from" fr="Les institutions de financement ciblées" /></h2>
            <p className="text-muted-foreground leading-relaxed">
              <T
                en={<>Most funders below support only <strong className="text-foreground">registered charities</strong>. SAICE is the parent entity designed to give our programs access to this funding.</>}
                fr={<>La plupart de ces bailleurs soutiennent uniquement des <strong className="text-foreground">organismes de bienfaisance enregistrés</strong>. SAICE est l'entité-mère conçue pour ouvrir ce financement à nos programmes.</>}
              />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-primary/20 rounded-2xl p-7 bg-primary/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2"><T en="Tier 1 · Foundations" fr="Niveau 1 · Fondations" /></p>
              <h3 className="font-serif text-xl font-semibold mb-4"><T en="Philanthropic capital" fr="Capital philanthropique" /></h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { n: "Gates Foundation", d: tt("Agriculture, gender, digital", "Agriculture, genre, numérique") },
                  { n: "Mastercard Foundation", d: tt("Youth employment, Africa", "Emploi des jeunes, Afrique") },
                  { n: "Rockefeller Foundation", d: tt("Food systems, climate", "Systèmes alimentaires, climat") },
                ].map((f, i) => (
                  <div key={i} className="flex items-baseline justify-between border-primary/10 last:border-0 py-2">
                    <span className="font-semibold text-foreground">{f.n}</span>
                    <span className="text-xs text-muted-foreground">{f.d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-accent/20 rounded-2xl p-7 bg-accent/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2"><T en="Tier 2 · Bilateral and multilateral" fr="Niveau 2 · Bilatéraux et multilatéraux" /></p>
              <h3 className="font-serif text-xl font-semibold mb-4"><T en="Public development capital" fr="Capital public de développement" /></h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { n: "Global Affairs Canada (GAC)", d: tt("Canadian aid", "Aide canadienne") },
                  { n: "IDRC", d: tt("Research for development", "Recherche pour le développement") },
                  { n: tt("European Union", "Union européenne"), d: tt("EU external action", "Action extérieure de l'UE") },
                  { n: "African Development Bank (AfDB)", d: tt("Africa-focused MDB", "BMD axée sur l'Afrique") },
                  { n: "IFAD", d: tt("Rural smallholder finance", "Financement des petits exploitants ruraux") },
                  { n: tt("World Bank", "Banque mondiale"), d: tt("Country programs", "Programmes pays") },
                ].map((f, i) => (
                  <div key={i} className="flex items-baseline justify-between border-accent/10 last:border-0 py-2">
                    <span className="font-semibold text-foreground">{f.n}</span>
                    <span className="text-xs text-muted-foreground">{f.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-foreground/[0.03] border border-foreground/10 rounded-xl p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <T
                en={<><strong className="text-foreground">Why SAICE?</strong> Almost all these funders restrict grants to registered charities by mandate or law. IFSS Inc. alone could not receive them. <Link href="/about/why-this-matters" className="text-primary font-semibold hover:underline">How the SAICE structure enables access →</Link></>}
                fr={<><strong className="text-foreground">Pourquoi SAICE ?</strong> Presque tous ces bailleurs réservent leurs subventions aux organismes de bienfaisance enregistrés, par mandat ou par la loi. IFSS Inc. seul ne pourrait les recevoir. <Link href="/about/why-this-matters" className="text-primary font-semibold hover:underline">Comment la structure SAICE permet cet accès →</Link></>}
              />
            </p>
          </div>
        </section>

        {/* Network alignment */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
            <Globe2 className="w-6 h-6 text-accent" strokeWidth={1.5} /> <T en="Network alignment" fr="Alignement avec les réseaux" />
          </h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            <T
              en="Our work is designed to fit continental and global frameworks:"
              fr="Notre travail est conçu pour s'intégrer aux cadres continentaux et mondiaux :"
            />
          </p>
          <div className="flex flex-wrap gap-2">
            {["AUDA-NEPAD", "ICGLR", "AGRA", "FAO Hand-in-Hand", "CGIAR / GARDIAN", "AfDB TAAT III", "Digital Earth Africa"].map((net, i) => (
              <span key={i} className="px-3 py-1.5 bg-muted rounded-md text-sm font-medium border text-muted-foreground">
                {net}
              </span>
            ))}
          </div>
        </section>

        {/* Partner Form Placeholder */}
        <section className="bg-muted border rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-semibold tracking-tight mb-3"><T en="Become a Partner" fr="Devenir partenaire" /></h2>
            <p className="text-muted-foreground">
              <T
                en="Discuss academic, implementation, donor, technology or supply-chain partnerships through this form."
                fr="Ce formulaire ouvre un échange sur les partenariats académiques, de mise en œuvre, de financement, technologiques ou de chaîne d'approvisionnement."
              />
            </p>
          </div>

          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold"><T en="Organisation Name" fr="Nom de l'organisation" /></label>
                <Input placeholder={tt("Enter organization name", "Saisissez le nom de l'organisation")} disabled className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold"><T en="Partnership Type" fr="Type de partenariat" /></label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" disabled>
                  <option>{tt("Select type...", "Sélectionnez un type...")}</option>
                  <option>{tt("Academic / Research", "Académique / recherche")}</option>
                  <option>{tt("Implementation / Field", "Mise en œuvre / terrain")}</option>
                  <option>{tt("Donor / Funding", "Bailleur / financement")}</option>
                  <option>{tt("Technology / Infrastructure", "Technologie / infrastructure")}</option>
                  <option>{tt("Supply Chain", "Chaîne d'approvisionnement")}</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold"><T en="Country of Operation" fr="Pays d'intervention" /></label>
                <Input placeholder={tt("e.g. Rwanda, Kenya", "p. ex. Rwanda, Kenya")} disabled className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold"><T en="Contact Email" fr="Courriel de contact" /></label>
                <Input type="email" placeholder="email@example.com" disabled className="bg-background" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold"><T en="Message" fr="Message" /></label>
              <Textarea placeholder={tt("How can we collaborate?", "Comment pouvons-nous collaborer ?")} className="h-32 bg-background" disabled />
            </div>

            <Button className="w-full h-12 text-lg" disabled><T en="Submit Partnership Inquiry (Demo)" fr="Envoyer la demande de partenariat (démo)" /></Button>
          </form>
        </section>

      </div>
    </div>
  );
}
