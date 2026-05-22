import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Globe2, BarChart3, MapPin, Calendar } from "lucide-react";
import homeHero from "@/assets/images/home-hero.png";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";

export default function Home() {
  useEffect(() => {
    document.title = "SAICE / IFSS Inc. | Digital tools for resilient farmers";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[88vh] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={homeHero} alt="African farm digital agriculture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
        </div>
        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-3xl space-y-7">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">
              Announcing SAICE · 2026
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.02]">
              Digital tools for resilient farmers and circular communities in Africa.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              SAICE — a Canadian charity (registration pending, parent entity) — and IFSS Inc. — its operating arm — partner with farmers, cooperatives, municipalities and ministries across the Great Lakes Region.
            </p>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.22em]">
              Innovations · Inclusive systems · Future generations
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 h-12 px-6">
                <Link href="/programs">
                  Explore programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 h-12 px-6">
                <Link href="/get-involved/partner">Become a partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap strip */}
      <Link href="/about/roadmap" className="block bg-primary text-primary-foreground hover:bg-primary/95 transition-colors group">
        <div className="container px-4 py-4 flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4" strokeWidth={1.5} />
            <span className="font-semibold uppercase tracking-widest text-xs text-primary-foreground/80">Launching 2026</span>
            <span className="hidden sm:inline text-primary-foreground/40">·</span>
            <span className="font-medium">From plan to public launch in nine months</span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-semibold text-primary-foreground/90 group-hover:text-primary-foreground">
            See the roadmap <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>

      {/* Who we are in 60 seconds */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-4">Who we are in sixty seconds</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">A two-entity structure designed for impact and agility.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">Same structural model as Mozilla Foundation and Mozilla Corporation — a mission-locked parent charity with a commercial operating arm below it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SAICE</CardTitle>
                <CardDescription className="text-sm uppercase tracking-wider text-primary font-semibold">Registered Charity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solidarity for Agri-Intelligence and Circular Economy. The parent charity that owns our mission, brands (PAGES/ICES), and manages programmatic grants.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>IFSS Inc.</CardTitle>
                <CardDescription className="text-sm uppercase tracking-wider text-accent font-semibold">Operating Arm</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Invest for Solidarity and Sustainable development Inc. Our Canadian Social Enterprise subsidiary delivering SaaS tools, consulting, and enterprise contracts.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>Our Partners</CardTitle>
                <CardDescription className="text-sm uppercase tracking-wider text-secondary-foreground font-semibold">Global & Local</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We scale our impact through strategic partners including RCID, SEKU, McGill University, Terre des Jeunes Togo, and Ripen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-4">Two complementary tracks</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Our two flagship programs</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">PAGES takes farmers from farm to fork. ICES closes the loop with circular waste systems. Together they are the digital backbone of a resilient Great Lakes Region.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="group rounded-2xl overflow-hidden shadow-lg bg-card transition-all hover:shadow-xl">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={pagesHero} alt="PAGES Program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">PAGES (Track 1)</h3>
                  <p className="text-white/90 font-medium">Precision Agriculture for Green Economy and Sustainability</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground mb-6">
                  Assisting communities from farm-to-fork, providing technical assistance at each stage of food production, storage, market and financial linkages.
                </p>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Target Reach</p>
                    <p className="text-xl font-bold text-primary">100,000 farmers</p>
                  </div>
                  <Button asChild variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link href="/programs/pages">View Program <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden shadow-lg bg-card transition-all hover:shadow-xl">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={icesHero} alt="ICES Program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">ICES / ICE-Plus (Track 2)</h3>
                  <p className="text-white/90 font-medium">Initiative for Circular Economy and Sustainability</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground mb-6">
                  Enhancing efficiency of waste collection, enabling storage and conversion of waste into renewable energy, contributing to GHG reduction.
                </p>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Target Focus</p>
                    <p className="text-xl font-bold text-accent">Zero-waste municipalities</p>
                  </div>
                  <Button asChild variant="ghost" className="group-hover:bg-accent group-hover:text-accent-foreground">
                    <Link href="/programs/ices">View Program <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70 mb-4">Programme targets · 5-year</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">By the numbers</h2>
            <p className="text-primary-foreground/80 mt-5 leading-relaxed">
              Our five-year commitment to economic resilience, climate adaptation and inclusive growth in the Great Lakes Region.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/15 border-y border-primary-foreground/15">
            {[
              { n: "5,000", l: "SMEs onboarded" },
              { n: "100k", l: "Farmers reached" },
              { n: "60%", l: "Women" },
              { n: "40%", l: "Youth" },
            ].map((s, i) => (
              <div key={i} className="text-center py-10 px-4">
                <p className="font-serif text-5xl md:text-6xl font-semibold tracking-tight">{s.n}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70 font-semibold mt-4">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/15 border-b border-primary-foreground/15">
            {[
              { n: "15%", l: "Ex-combatant" },
              { n: "5%", l: "Persons with disability" },
              { n: "6", l: "Countries" },
              { n: "3+", l: "Languages at launch" },
            ].map((s, i) => (
              <div key={i} className="text-center py-10 px-4">
                <p className="font-serif text-5xl md:text-6xl font-semibold tracking-tight">{s.n}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70 font-semibold mt-4">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.25em]">Footprint</p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Where we work</h2>
              <p className="text-lg text-muted-foreground">
                Headquartered in Canada, our operational focus is the Great Lakes Region of Africa and beyond, partnering with local communities and ministries.
              </p>
              <ul className="space-y-4">
                {['Rwanda', 'Kenya', 'Burundi', 'DRC', 'Togo', 'Canada (HQ)'].map((country) => (
                  <li key={country} className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">{country}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/where-we-work">View country profiles</Link>
              </Button>
            </div>
            <div className="md:w-1/2 bg-muted rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
              <Globe2 className="w-full h-full text-primary/10 absolute inset-0 -z-10" />
              <div className="text-center space-y-4 relative z-10 bg-background/80 backdrop-blur p-8 rounded-2xl border">
                <p className="font-bold text-xl">Operating across 6 countries</p>
                <p className="text-muted-foreground">Trilingual launch EN/FR/Kinyarwanda</p>
                <p className="text-sm text-muted-foreground">Adding Kirundi and Swahili in phase 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by Strategic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['RCID', 'SEKU', 'McGill University', 'Terre des Jeunes Togo', 'Ripen'].map((partner) => (
              <div key={partner} className="text-xl font-bold text-foreground">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-card">
        <div className="container px-4 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.25em] mb-4">Get involved</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-8">Join us in driving sustainable growth.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/get-involved/donate">Donate to SAICE</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/get-involved/partner">Partner with us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/news">Read our insights</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
