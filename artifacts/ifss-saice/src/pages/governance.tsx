import React, { useEffect } from "react";
import { Link } from "wouter";
import { ShieldCheck, FileText, Scale, Eye, AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import governanceHero from "@/assets/images/about-hero.png";

export default function Governance() {
  useEffect(() => {
    document.title = "Governance & Transparency | SAICE / IFSS Inc.";
  }, []);

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title="Governance &"
        italic="transparency"
        description="Rigorous oversight, open reporting and ethical standards are the foundation of our work with communities and institutional donors."
        crumbs={[{ label: "Governance" }]}
        image={governanceHero}
        imageAlt="Governance and oversight"
      />
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="space-y-12">
          
          <section className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <Scale className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-2">Corporate Structure</h2>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-foreground">IFSS Inc.</strong> is incorporated (2023) under the Canada Business Corporations Act as a Social Enterprise.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">SAICE</strong> is currently undergoing registration as a Canadian charity (approval pending).
              </p>
              <div className="p-4 bg-muted rounded-xl mt-4">
                <h4 className="font-serif font-semibold tracking-tight text-sm mb-2">Related-Party Transactions</h4>
                <p className="text-sm text-muted-foreground">
                  To ensure complete financial transparency in our dual-entity structure, an annual note detailing all resource flows, licensing agreements, and service contracts between SAICE and IFSS Inc. will be published upon conclusion of our first fiscal year as a charity.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <Eye className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-2">Board Oversight</h2>
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-muted-foreground">
                SAICE is governed by a majority independent board with representation from academia and our operational regions in Africa.
              </p>
              <Link href="/about/leadership" className="inline-flex text-primary font-medium hover:underline">
                View Board & Committee Composition &rarr;
              </Link>
            </div>
          </section>

          <section className="bg-card p-8 rounded-2xl border shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-2">Audits & Filings</h2>
            </div>
            <div className="md:w-2/3">
              <div className="p-6 border-2 border-dashed rounded-xl bg-muted/30 text-center">
                <p className="text-muted-foreground italic text-sm">
                  Audited financial statements and CRA T3010 filings will be available here after the conclusion of our first fiscal reporting cycle as a registered charity.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card p-8 rounded-2xl border shadow-sm">
            <h2 className="text-2xl font-serif font-semibold tracking-tight mb-6">Core Policies</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Privacy & Data Protection",
                "AI Ethics & Algorithmic Accountability",
                "GEDSI (Gender, Equity, Disability, Social Inclusion)",
                "Safeguarding / PSEAH",
                "Whistle-blower Protection",
                "Conflict of Interest",
                "Anti-Bribery & Corruption",
                "Environmental Sustainability"
              ].map((policy, i) => (
                <div key={i} className="flex justify-between items-center p-4 border rounded-xl hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{policy}</span>
                  <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </div>
              ))}
            </div>
          </section>

          <section className="bg-destructive/5 border border-destructive/20 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive shrink-0" />
              <div>
                <h2 className="text-xl font-serif font-semibold tracking-tight mb-2 text-foreground">Complaints and Grievance Mechanism</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  We are committed to providing a safe, confidential avenue for beneficiaries, partners, and staff to report concerns, safeguarding issues, or policy violations.
                </p>
                <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-destructive/90 transition-colors">
                  Submit a Report (Placeholder)
                </button>
                <p className="text-xs text-muted-foreground mt-3">
                  Available in English, Français, and Kinyarwanda. Reports can be submitted anonymously.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
