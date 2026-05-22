import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ExternalLink, Building2, Globe2 } from "lucide-react";

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
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Sustainable development requires collective action. We align with academic institutions, regional networks, and institutional donors to deliver systemic change.
          </p>
        </div>

        {/* Strategic Partners */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-primary" /> Strategic Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPartners.map((p, i) => (
              <Card key={i} className="border-muted-foreground/20 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-1">{p.name}</h3>
                  <p className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">{p.full}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                    Visit partner website <ExternalLink className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Donors & Networks */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Globe2 className="w-6 h-6 text-accent" /> Network Alignment
            </h2>
            <p className="text-muted-foreground mb-6">
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

          <section>
            <h2 className="text-2xl font-bold mb-6">Target Donor Pipeline</h2>
            <p className="text-muted-foreground mb-6">
              As SAICE transitions to a registered charity, we are aligning our programmatic reporting to the standards required by leading institutional donors:
            </p>
            <div className="flex flex-wrap gap-2">
              {["GAC", "IDRC", "Gates Foundation", "Mastercard Foundation", "Rockefeller", "EU", "AfDB", "IFAD", "World Bank"].map((donor, i) => (
                <span key={i} className="px-3 py-1.5 bg-primary/5 text-primary border border-primary/20 rounded-md text-sm font-medium">
                  {donor}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4 text-sm text-muted-foreground font-medium">
              <span>Categories:</span>
              <span className="border-b border-muted-foreground/30 border-dashed">Founding</span>
              <span className="border-b border-muted-foreground/30 border-dashed">Anchor</span>
              <span className="border-b border-muted-foreground/30 border-dashed">Programmatic</span>
            </div>
          </section>
        </div>

        {/* Partner Form Placeholder */}
        <section className="bg-muted border rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Become a Partner</h2>
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
