import React, { useEffect } from "react";
import { Link } from "wouter";
import { BookOpen, Database, Image as ImageIcon, Mail, FileText, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function ResourcesRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub || "hub";

  useEffect(() => {
    document.title = `Resources ${sub !== 'hub' ? `- ${sub}` : ''} | SAICE / IFSS Inc.`;
  }, [sub]);

  if (sub === 'publications') return <Publications />;
  if (sub === 'datasets') return <Datasets />;

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero
        eyebrow="Open knowledge"
        title="Resources"
        italic="hub"
        description="Our open knowledge base, research publications, datasets, and media assets to support sustainable development in the Great Lakes Region."
        crumbs={[{ label: "Resources" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/resources/publications" className="group">
            <div className="h-full p-8 rounded-2xl border bg-card hover:border-primary hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-3 flex items-center justify-between">
                Publications <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </h2>
              <p className="text-muted-foreground">
                Research papers, policy briefs, and annual reports detailing the impact of PAGES and ICES.
              </p>
            </div>
          </Link>

          <Link href="/resources/datasets" className="group">
            <div className="h-full p-8 rounded-2xl border bg-card hover:border-accent hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-serif font-semibold tracking-tight mb-3 flex items-center justify-between">
                Datasets & Code <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </h2>
              <p className="text-muted-foreground">
                FAIR-compliant data outputs, model cards, and open-source snippets supporting our digital tools.
              </p>
            </div>
          </Link>

          <div className="h-full p-8 rounded-2xl border bg-muted/50 cursor-not-allowed">
            <div className="w-12 h-12 rounded-xl bg-muted text-muted-foreground flex items-center justify-center mb-6">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-semibold tracking-tight mb-3 text-muted-foreground">Galleries</h2>
            <p className="text-muted-foreground text-sm">Media assets and field photography coming soon.</p>
          </div>

          <div className="h-full p-8 rounded-2xl border bg-muted/50 cursor-not-allowed">
            <div className="w-12 h-12 rounded-xl bg-muted text-muted-foreground flex items-center justify-center mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-serif font-semibold tracking-tight mb-3 text-muted-foreground">Newsletter Archive</h2>
            <p className="text-muted-foreground text-sm">Past updates and insights coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Publications() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero
        eyebrow="Research outputs"
        title="Publications"
        description="Research papers, policy briefs and annual reports detailing the impact of PAGES and ICES."
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Publications" }]}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="py-20 text-center border-2 border-dashed border-foreground/15 rounded-[1.5rem] bg-card mt-4">
          <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
          <h2 className="text-2xl font-serif font-semibold tracking-tight mb-2">Library Launching in 2026</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our publications library will launch alongside the first comprehensive PAGES and ICES research outputs following our charity registration in 2026.
          </p>
        </div>
      </div>
    </div>
  );
}

function Datasets() {
  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero
        eyebrow="Open knowledge · FAIR data"
        title="Datasets &"
        italic="code"
        description="We are committed to open knowledge and FAIR (Findable, Accessible, Interoperable, Reusable) data principles."
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Datasets & code" }]}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          <div className="p-6 border rounded-2xl bg-card">
            <h3 className="text-xl font-serif font-semibold tracking-tight mb-2 flex items-center justify-between">
              Data Management Plan 
              <span className="text-xs font-semibold px-2 py-1 bg-muted rounded text-muted-foreground">Draft</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our overarching framework for data collection, anonymization, and sharing across the Great Lakes Region.
            </p>
            <span className="text-primary text-sm hover:underline cursor-pointer">View placeholder link &rarr;</span>
          </div>

          <div className="p-6 border rounded-2xl bg-card">
            <h3 className="text-xl font-serif font-semibold tracking-tight mb-2 flex items-center justify-between">
              Model Cards (PAGES / ICES)
              <span className="text-xs font-semibold px-2 py-1 bg-muted rounded text-muted-foreground">Coming 2026</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Detailed descriptions of the AI models powering our precision insights and smart sorting tools, including training data provenance and ethical considerations.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-card">
            <h3 className="text-xl font-serif font-semibold tracking-tight mb-2 flex items-center justify-between">
              External Repositories
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Code snippets and interoperable datasets will be published here in alignment with CGIAR/GARDIAN standards.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="text-primary text-sm hover:underline cursor-pointer flex items-center gap-1">GitHub Placeholder <ExternalLink className="w-3 h-3" /></span>
              <span className="text-primary text-sm hover:underline cursor-pointer flex items-center gap-1">GARDIAN Links <ExternalLink className="w-3 h-3" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
