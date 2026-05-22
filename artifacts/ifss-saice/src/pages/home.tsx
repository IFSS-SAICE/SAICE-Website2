import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Recycle, Globe2, BarChart3, MapPin } from "lucide-react";
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
      <section className="relative w-full min-h-[85vh] flex items-center bg-muted overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={homeHero} alt="African farm digital agriculture" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Digital tools for resilient farmers and circular communities in Africa.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              SAICE — a Canadian registered charity (parent) — and IFSS Inc. — its operating arm — partner with farmers, cooperatives, municipalities and ministries across the Great Lakes Region.
            </p>
            <p className="text-sm font-medium text-primary uppercase tracking-widest">
              Innovations, inclusive systems and future generations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/programs">
                  Explore programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/get-involved/partner">Become a partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are in 60 seconds */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Who we are in 60 seconds</h2>
            <p className="mt-4 text-muted-foreground">A two-entity structure designed for impact and agility.</p>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our two flagship programs</h2>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Programme targets (5-year)</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our commitment to economic resilience, climate adaptation, and sustainable impacts in developing countries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold">5,000</p>
              <p className="text-sm text-primary-foreground/80 font-medium">SMEs onboarded</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold">100k</p>
              <p className="text-sm text-primary-foreground/80 font-medium">Farmers reached</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold">60%</p>
              <p className="text-sm text-primary-foreground/80 font-medium">Women</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold">40%</p>
              <p className="text-sm text-primary-foreground/80 font-medium">Youth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Where we work</h2>
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
      <section className="py-20 bg-card">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join us in driving sustainable growth.</h2>
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
