import React, { useEffect } from "react";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import newsHero from "@/assets/images/about-hero.png";
import { SectionImage } from "@/components/SectionImage";
import { T, useTT } from "@/lib/i18n";

export default function News() {
  const tt = useTT();
  useEffect(() => {
    document.title = tt("News & Insights | SAICE / IFSS Inc.", "Actualités et analyses | SAICE / IFSS Inc.");
  }, [tt]);

  const articles = [
    {
      title: tt(
        "Sustainable Horticulture in East Africa: Key Learnings from Rwanda",
        "Horticulture durable en Afrique de l'Est : principaux enseignements du Rwanda",
      ),
      date: tt("August 12, 2025", "12 août 2025"),
      category: "PAGES",
      excerpt: tt(
        "Initial findings from our pilot, completed in July 2025: youth-focused innovation drives adoption of digital horticulture tools.",
        "Premiers constats du pilote achevé en juillet 2025 : l'innovation portée par la jeunesse stimule l'adoption d'outils horticoles numériques.",
      ),
      readTime: tt("5 min read", "5 min de lecture"),
    },
    {
      title: tt(
        "McGill MMA Capstone: Empowering Societies Through Analytics",
        "Projet de fin d'études MMA McGill : autonomiser les sociétés par l'analytique",
      ),
      date: tt("May 04, 2025", "4 mai 2025"),
      category: tt("Partnership", "Partenariat"),
      excerpt: tt(
        "How we collaborate with McGill University students on predictive models for the IoT-Precision Insight Engine.",
        "Notre collaboration avec les étudiants de l'Université McGill sur les modèles prédictifs du moteur IoT-Precision Insight.",
      ),
      readTime: tt("8 min read", "8 min de lecture"),
    },
    {
      title: tt(
        "Preparing for Launch: SAICE's Journey to Registered Charity Status",
        "Préparer le lancement : la trajectoire de SAICE vers le statut d'organisme de bienfaisance enregistré",
      ),
      date: tt("January 15, 2026", "15 janvier 2026"),
      category: tt("Organization", "Organisation"),
      excerpt: tt(
        "IFSS Inc.'s third year: our roadmap to launch the SAICE charity and accelerate grant-funded deployments.",
        "Troisième année d'IFSS Inc. : notre feuille de route pour lancer l'organisme de bienfaisance SAICE et accélérer les déploiements subventionnés.",
      ),
      readTime: tt("4 min read", "4 min de lecture"),
    },
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title={tt("News &", "Actualités et")}
        italic={tt("insights", "analyses")}
        description={tt(
          "Updates from the field, technical deep-dives, and organisational milestones from SAICE and IFSS Inc.",
          "Nouvelles du terrain, analyses techniques et jalons organisationnels de SAICE et IFSS Inc.",
        )}
        crumbs={[{ label: tt("News", "Actualités") }]}
        image={newsHero}
        imageAlt={tt("Updates from the field", "Nouvelles du terrain")}
      />
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionImage kind="story" caption={tt("Updates from the field", "Nouvelles du terrain")} aspect="16/9" className="mt-10 mb-12" />
        {/* Filter UI */}
        <div className="flex flex-wrap gap-3 mb-12 pb-6 border-foreground/10">
          <Button variant="secondary" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"><T en="All Updates" fr="Toutes les actualités" /></Button>
          <Button variant="outline" className="rounded-full"><T en="PAGES Program" fr="Programme PAGES" /></Button>
          <Button variant="outline" className="rounded-full"><T en="ICES Program" fr="Programme ICES" /></Button>
          <Button variant="outline" className="rounded-full">Rwanda</Button>
          <Button variant="outline" className="rounded-full">Kenya</Button>
          <Button variant="outline" className="rounded-full">Togo</Button>
          <Button variant="outline" className="rounded-full"><T en="Partnerships" fr="Partenariats" /></Button>
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
                  <T en="Read article" fr="Lire l'article" /> <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg"><T en="Load More Articles" fr="Charger plus d'articles" /></Button>
        </div>
      </div>
    </div>
  );
}
