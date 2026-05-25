import React, { useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SectionImage } from "@/components/SectionImage";

export default function News() {
  useEffect(() => {
    document.title = "News & Insights | SAICE / IFSS Inc.";
  }, []);

  const articles = [
    {
      title: "Sustainable Horticulture in East Africa: Key Learnings from Rwanda",
      date: "August 12, 2025",
      category: "PAGES",
      excerpt: "Following the conclusion of our pilot project in July 2025, we share initial findings on how youth-focused innovation is driving adoption of digital horticulture tools.",
      readTime: "5 min read"
    },
    {
      title: "McGill MMA Capstone: Empowering Societies Through Analytics",
      date: "May 04, 2025",
      category: "Partnership",
      excerpt: "A deep dive into our collaboration with McGill University students to develop the predictive models underlying the IoT-Precision Insight Engine.",
      readTime: "8 min read"
    },
    {
      title: "Preparing for Launch: SAICE's Journey to Registered Charity Status",
      date: "January 15, 2026",
      category: "Organization",
      excerpt: "As IFSS Inc. enters its third year of operations, we detail our roadmap for launching the SAICE charity to accelerate grant-funded deployments.",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title="News &"
        italic="insights"
        description="Updates from the field, technical deep-dives, and organisational milestones from SAICE and IFSS Inc."
        crumbs={[{ label: "News" }]}
      />
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionImage kind="story" caption="Updates from the field" aspect="16/9" className="mt-10 mb-12" />
        {/* Filter UI */}
        <div className="flex flex-wrap gap-3 mb-12 pb-6 border-foreground/10">
          <Button variant="secondary" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">All Updates</Button>
          <Button variant="outline" className="rounded-full">PAGES Program</Button>
          <Button variant="outline" className="rounded-full">ICES Program</Button>
          <Button variant="outline" className="rounded-full">Rwanda</Button>
          <Button variant="outline" className="rounded-full">Kenya</Button>
          <Button variant="outline" className="rounded-full">Togo</Button>
          <Button variant="outline" className="rounded-full">Partnerships</Button>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="group flex flex-col border rounded-2xl overflow-hidden bg-card hover:shadow-md transition-all">
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <span className="absolute top-4 left-4 bg-background text-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {article.readTime}</span>
                </div>
                <h2 className="text-xl font-serif font-semibold tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center text-sm font-semibold text-primary group-hover:underline cursor-pointer">
                  Read article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">Load More Articles</Button>
        </div>
      </div>
    </div>
  );
}
