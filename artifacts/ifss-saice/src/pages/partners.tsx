import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Building2, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function Partners() {
  useEffect(() => {
    document.title = "Partners | SAICE / IFSS Inc.";
  }, []);

  const strategicPartners = [
    {
      name: "RCID",
      full: "Regional Research Centre for Integrated Development",
      desc: "A key strategic partner operating in Rwanda and the broader region, ensuring our digital tools are grounded in rigorous agronomic research and local context."
    },
    {
      name: "SEKU",
      full: "Southern Eastern Kenya University",
      desc: "Providing academic validation, student integration, and localized field testing for PAGES deployments in Kenya."
    },
    {
      name: "McGill University",
      full: "McGill Master of Management in Analytics (MMA)",
      desc: "Our cornerstone academic partner. The McGill capstone partnership helped define the predictive data models underlying our precision insight engines."
    },
    {
      name: "Terre des Jeunes Togo",
      full: "Terre des Jeunes (Togo Chapter)",
      desc: "Our primary implementation partner for the ICES pilot, mobilizing youth networks for circular economy and waste management innovations."
    },
    {
      name: "Ripen",
      full: "Ripen",
      desc: "Supporting our project-based learning and strategic academic linkages to ensure continuous capacity building."
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title="Our"
        italic="partners"
        description="Sustainable development requires collective action. We align with academic institutions, regional networks and institutional donors to deliver systemic change."
        crumbs={[{ label: "Partners" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Strategic Partners */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-semibold tracking-tight mb-8 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-primary" /> Strategic Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPartners.map((p, i) => (
              <Card key={i} className="border-muted-foreground/20 hover:shadow-md transition-shadow">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">Target funders</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">The institutions we are built to receive capital from</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most of the major funders below give only to <strong className="text-foreground">registered charities</strong>. That single constraint is precisely why SAICE exists as the parent entity — so the program can access this tier of capital while IFSS Inc. handles the commercial work below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-primary/20 rounded-2xl p-7 bg-primary/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Tier 1 · Foundations</p>
              <h3 className="font-serif text-xl font-semibold mb-4">Philanthropic capital</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { n: "Gates Foundation", d: "Agriculture, gender, digital" },
                  { n: "Mastercard Foundation", d: "Youth employment, Africa" },
                  { n: "Rockefeller Foundation", d: "Food systems, climate" },
                ].map((f, i) => (
                  <div key={i} className="flex items-baseline justify-between border-primary/10 last:border-0 py-2">
                    <span className="font-semibold text-foreground">{f.n}</span>
                    <span className="text-xs text-muted-foreground">{f.d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-accent/20 rounded-2xl p-7 bg-accent/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Tier 2 · Bilateral and multilateral</p>
              <h3 className="font-serif text-xl font-semibold mb-4">Public development capital</h3>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { n: "Global Affairs Canada (GAC)", d: "Canadian aid" },
                  { n: "IDRC", d: "Research for development" },
                  { n: "European Union", d: "EU external action" },
                  { n: "African Development Bank (AfDB)", d: "Africa-focused MDB" },
                  { n: "IFAD", d: "Rural smallholder finance" },
                  { n: "World Bank", d: "Country programs" },
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
              <strong className="text-foreground">Why these funders specifically?</strong> Almost every name above is restricted by mandate or law to giving grants only to registered charities. IFSS Inc. alone could not receive them. <Link href="/about/why-this-matters" className="text-primary font-semibold hover:underline">See why the SAICE structure unlocks this →</Link>
            </p>
          </div>
        </section>

        {/* Network alignment */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
            <Globe2 className="w-6 h-6 text-accent" strokeWidth={1.5} /> Network alignment
          </h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Our interventions are designed to integrate seamlessly with continental and global frameworks:
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
            <h2 className="text-3xl font-serif font-semibold tracking-tight mb-3">Become a Partner</h2>
            <p className="text-muted-foreground">
              Fill out this form to start a conversation about academic, implementation, donor, technology, or supply-chain partnerships.
            </p>
          </div>

          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Organisation Name</label>
                <Input placeholder="Enter organization name" disabled className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Partnership Type</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" disabled>
                  <option>Select type...</option>
                  <option>Academic / Research</option>
                  <option>Implementation / Field</option>
                  <option>Donor / Funding</option>
                  <option>Technology / Infrastructure</option>
                  <option>Supply Chain</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Country of Operation</label>
                <Input placeholder="e.g. Rwanda, Kenya" disabled className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Contact Email</label>
                <Input type="email" placeholder="email@example.com" disabled className="bg-background" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Message</label>
              <Textarea placeholder="How can we collaborate?" className="h-32 bg-background" disabled />
            </div>

            <Button className="w-full h-12 text-lg" disabled>Submit Partnership Inquiry (Demo)</Button>
          </form>
        </section>

      </div>
    </div>
  );
}
