import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Leaf, Download, FileText, ExternalLink, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function ImpactRoutes({ params }: { params?: { sub?: string } }) {
  const isStories = params?.sub === 'stories';

  useEffect(() => {
    document.title = `Impact ${isStories ? '- Stories' : 'Dashboard'} | SAICE / IFSS Inc.`;
  }, [isStories]);

  if (isStories) return <Stories />;

  return <Dashboard />;
}

function Dashboard() {
  const stats = [
    { label: "SMEs Onboarded", value: "5,000", target: true },
    { label: "Farmers Reached", value: "100k", target: true },
    { label: "Women Participants", value: "60%", target: true },
    { label: "Youth Participants", value: "40%", target: true },
    { label: "Ex-combatant Inclusion", value: "15%", target: true },
    { label: "PwD Inclusion", value: "5%", target: true },
    { label: "CO₂e Averted (Tonnes)", value: "TBD", target: true, muted: true },
    { label: "Waste Diverted (Tonnes)", value: "TBD", target: true, muted: true }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero
        eyebrow="Monitoring & evaluation"
        title="Results"
        italic="dashboard"
        description="Transparent tracking of our progress against 5-year goals — and the stories behind the numbers."
        crumbs={[{ label: "Impact" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-wrap justify-end mb-10">
          <Link href="/impact/stories" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/20 text-sm font-semibold text-foreground hover:bg-card transition-colors">
            Read stories from the field <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>

        <section className="mb-16">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              Programme Targets (5-Year)
            </h2>
            <p className="text-sm text-muted-foreground">These metrics represent our committed targets across PAGES and ICES programs.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className={`border-none shadow-sm ${stat.muted ? 'bg-muted/50' : 'bg-card'}`}>
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 ${stat.muted ? 'text-muted-foreground' : 'text-foreground'}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="p-8 border rounded-2xl bg-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
              Annual Reports & Financials
            </h3>
            <div className="py-12 text-center bg-muted/50 rounded-xl border border-dashed">
              <p className="text-sm text-muted-foreground italic">Available after first reporting cycle.</p>
            </div>
          </section>

          <section className="p-8 border rounded-2xl bg-card">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Download className="w-5 h-5 text-muted-foreground" />
              External Evaluations
            </h3>
            <div className="py-12 text-center bg-muted/50 rounded-xl border border-dashed">
              <p className="text-sm text-muted-foreground italic">Independent evaluations will be posted here.</p>
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-xl text-sm text-muted-foreground">
          <h4 className="font-bold text-foreground mb-2">Methodology Note</h4>
          <p>Indicators are defined in alignment with the UN SDGs, CAADP framework, and FAIR data principles. Counting methodologies avoid double-counting across overlapping program interventions. Specific indicator dictionaries will be published alongside our first annual report.</p>
        </div>
      </div>
    </div>
  );
}

function Stories() {
  const stories = [
    {
      title: "IFSS × McGill MMA Capstone",
      desc: "Empowering societies through analytics. Students partnered with IFSS to map predictive models for agricultural yields in the GLR.",
      tag: "Partnership"
    },
    {
      title: "Sustainable Horticulture in East Africa",
      desc: "AI-driven solutions for horticulture in Rwanda, focused on youth innovation. (Concluded July 2025).",
      tag: "Rwanda"
    },
    {
      title: "International Conference (Sept 2025)",
      desc: "Sharing research on innovation and sustainability with global stakeholders, securing key validation for the ICES architecture.",
      tag: "Research"
    },
    {
      title: "Socio-economic integration of youth",
      desc: "Creating pathways for young entrepreneurs in agro-business through targeted digital tool adoption and micro-grants.",
      tag: "GEDSI"
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero
        eyebrow="Real impact on the ground"
        title="Stories from the"
        italic="field"
        description="Real impact on the ground across our pilot regions — the people, partners and projects behind the numbers."
        crumbs={[{ label: "Impact", href: "/impact" }, { label: "Stories" }]}
      />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <div className="h-48 bg-muted border-b flex items-center justify-center relative overflow-hidden">
                <Users className="w-12 h-12 text-muted-foreground/20 absolute" />
                <span className="absolute top-4 left-4 bg-background text-xs font-bold px-2 py-1 rounded shadow-sm border uppercase tracking-wider">
                  {story.tag}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-foreground">{story.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
