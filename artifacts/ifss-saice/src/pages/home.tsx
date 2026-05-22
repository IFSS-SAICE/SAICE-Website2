import React, { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Globe2, BarChart3, MapPin } from "lucide-react";
import homeHero from "@/assets/images/home-hero.png";
import pagesHero from "@/assets/images/pages-hero.png";
import icesHero from "@/assets/images/ices-hero.png";

export default function Home() {
  useEffect(() => {
    document.title = "SAICE / IFSS Inc. | Digital tools for resilient farmers";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero — standard landing hero: editorial headline + dominant image */}
      <section className="pt-10 pb-14 md:pt-14 md:pb-20">
        <div className="container px-4 lg:px-6">
          <div className="max-w-6xl mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Announcing SAICE · 2026
            </div>
            <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] leading-[0.98] tracking-tight text-foreground">
              <span className="display-italic">Digital tools</span> for resilient farmers and circular communities in Africa.
            </h1>
            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-7 text-lg md:text-xl text-foreground/75 leading-relaxed">
                SAICE — a Canadian charity — and IFSS Inc., its operating arm, partner with farmers, cooperatives, municipalities and ministries across the Great Lakes Region.
              </p>
              <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
                <Link href="/programs" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 font-semibold text-sm transition-colors">
                  Explore programs <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <Link href="/get-involved/partner" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold text-sm transition-colors">
                  Become a partner
                </Link>
              </div>
            </div>
          </div>

          {/* Dominant single hero image — standard pattern */}
          <div className="relative blob-card aspect-[21/9] md:aspect-[21/8] overflow-hidden">
            <img src={homeHero} alt="Farmers using digital tools in the Great Lakes Region" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-3">
              <p className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.22em] text-background/95 max-w-[20ch] text-right">
                Innovations · Inclusive systems · Future generations
              </p>
              <Link href="/about" aria-label="Learn about SAICE" className="circle-arrow">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick site map — summarizes every major section */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.28em] mb-4">Explore the site</p>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-xl">
                Everything we <span className="display-italic">do</span>, in one place.
              </h2>
            </div>
            <p className="md:max-w-sm text-foreground/70 leading-relaxed">
              A quick map of the organisation, our two flagship programs, where we work, and how to get involved.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/about", title: "About", desc: "Mission, structure, leadership and roadmap.", icon: Users },
              { href: "/programs", title: "Programs", desc: "PAGES & ICES — our two flagship tracks.", icon: Leaf },
              { href: "/where-we-work", title: "Where we work", desc: "Six countries across the Great Lakes Region.", icon: Globe2 },
              { href: "/impact", title: "Impact", desc: "Targets, results and stories from the field.", icon: BarChart3 },
            ].map(({ href, title, desc, icon: Icon }) => (
              <Link key={href} href={href} className="group blob-card bg-card p-6 flex flex-col justify-between min-h-[200px] hover:bg-card/70 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1.5">{title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
                </div>
                <div className="flex justify-end mt-4">
                  <span className="circle-arrow-sm">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are in 60 seconds */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.28em] mb-5">Who we are in sixty seconds</p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">A two-entity structure <span className="display-italic">designed for impact</span> and agility.</h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg max-w-2xl">Same structural model as Mozilla Foundation and Mozilla Corporation — a mission-locked parent charity with a commercial operating arm below it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Leaf, label: "Parent · Charity", title: "SAICE", desc: "Solidarity for Agri-Intelligence and Circular Economy. The parent charity that owns our mission, brands (PAGES / ICES), and manages programmatic grants.", href: "/about/structure", accent: "primary" as const },
              { icon: BarChart3, label: "Operating arm", title: "IFSS Inc.", desc: "Invest for Solidarity and Sustainable development Inc. Our Canadian social enterprise subsidiary delivering SaaS tools, consulting and enterprise contracts.", href: "/about", accent: "accent" as const },
              { icon: Users, label: "Global & local", title: "Our partners", desc: "We scale our impact through strategic partners including RCID, SEKU, McGill University, Terre des Jeunes Togo and Ripen.", href: "/partners", accent: "foreground" as const },
            ].map(({ icon: Icon, label, title, desc, href, accent }, i) => (
              <Link key={i} href={href} className="group blob-card bg-card p-8 flex flex-col justify-between min-h-[340px] hover:bg-card/70 transition-colors">
                <div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${accent === "primary" ? "bg-primary/10" : accent === "accent" ? "bg-accent/15" : "bg-foreground/10"}`}>
                    <Icon className={`h-5 w-5 ${accent === "primary" ? "text-primary" : accent === "accent" ? "text-accent" : "text-foreground"}`} strokeWidth={1.5} />
                  </div>
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] mb-2 ${accent === "primary" ? "text-primary" : accent === "accent" ? "text-accent" : "text-foreground/60"}`}>{label}</p>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-tight">{title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{desc}</p>
                </div>
                <div className="flex justify-end mt-6">
                  <span className="circle-arrow-sm">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4">
          <div className="mb-16 max-w-3xl">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.28em] mb-5">Two complementary tracks</p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">Our two <span className="display-italic">flagship programs</span></h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg">PAGES takes farmers from farm to fork. ICES closes the loop with circular waste systems. Together they are the digital backbone of a resilient Great Lakes Region.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {[
              { img: pagesHero, alt: "PAGES Program", track: "Track 01", title: "PAGES", subtitle: "Precision Agriculture for Green Economy and Sustainability", body: "Assisting communities from farm to fork — technical assistance at each stage of food production, storage, market and financial linkages.", statLabel: "Target reach", statValue: "100,000 farmers", statColor: "text-accent", href: "/programs/pages" },
              { img: icesHero, alt: "ICES Program", track: "Track 02", title: "ICES / ICE-Plus", subtitle: "Initiative for Circular Economy and Sustainability", body: "Enhancing efficiency of waste collection, enabling storage and conversion of waste into renewable energy, contributing to GHG reduction.", statLabel: "Target focus", statValue: "Zero-waste municipalities", statColor: "text-accent", href: "/programs/ices" },
            ].map((p, i) => (
              <Link key={i} href={p.href} className="group blob-card bg-card flex flex-col overflow-hidden hover:bg-card/70 transition-colors">
                <div className="aspect-[16/10] relative overflow-hidden m-3 rounded-[1.5rem]">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
                    {p.track}
                  </div>
                </div>
                <div className="p-7 md:p-8 pt-3 flex-1 flex flex-col">
                  <h3 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">{p.title}</h3>
                  <p className="font-serif italic text-accent text-lg mb-4">{p.subtitle}</p>
                  <p className="text-foreground/75 leading-relaxed mb-7 flex-1">{p.body}</p>
                  <div className="flex items-end justify-between pt-5 border-t border-foreground/10">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/65 font-semibold">{p.statLabel}</p>
                      <p className={`font-serif text-2xl font-semibold tracking-tight mt-1 ${p.statColor}`}>{p.statValue}</p>
                    </div>
                    <span className="circle-arrow-sm flex-shrink-0">
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="mb-16 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/70 mb-5">Programme targets · 5-year</p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">By <span className="font-serif italic font-light text-accent">the numbers</span></h2>
            <p className="text-primary-foreground/80 mt-6 leading-relaxed text-lg">
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
          <div className="grid md:grid-cols-12 gap-5 items-stretch">
            <div className="md:col-span-7 blob-card bg-card p-10 md:p-14 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.28em] mb-5">Footprint</p>
                <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">Where <span className="display-italic">we work</span></h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-xl">
                  Headquartered in Canada, our operational focus is the Great Lakes Region of Africa and beyond, partnering with local communities and ministries.
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {['Rwanda', 'Kenya', 'Burundi', 'DRC', 'Togo', 'Canada (HQ)'].map((country) => (
                    <li key={country} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-background border border-foreground/10 text-sm font-medium text-foreground">
                      <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/where-we-work" className="mt-10 inline-flex items-center gap-2 self-start h-12 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 font-semibold text-sm transition-colors w-fit">
                View country profiles <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
            <div className="md:col-span-5 blob-card-dark p-10 md:p-12 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
              <Globe2 className="absolute -right-10 -bottom-10 w-72 h-72 text-background/[0.06]" strokeWidth={1} />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-background/75 mb-5">At launch</p>
                <p className="font-serif text-3xl md:text-4xl leading-[1.1] tracking-tight">
                  Operating across <span className="font-light italic text-accent">6 countries</span>
                </p>
                <p className="mt-5 text-background/80 leading-relaxed">Trilingual launch in EN / FR / Kinyarwanda.</p>
                <p className="mt-2 text-sm text-background/65">Adding Kirundi and Swahili in phase 2.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-16">
        <div className="container px-4">
          <p className="text-center text-[11px] font-semibold text-foreground/65 uppercase tracking-[0.28em] mb-10">Trusted by strategic partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 md:gap-x-20">
            {['RCID', 'SEKU', 'McGill University', 'Terre des Jeunes Togo', 'Ripen'].map((partner) => (
              <div key={partner} className="font-serif text-xl md:text-2xl font-medium text-foreground/55 hover:text-foreground transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24">
        <div className="container px-4">
          <div className="blob-card bg-card p-12 md:p-20 text-center max-w-5xl mx-auto">
            <p className="text-[11px] font-semibold text-accent uppercase tracking-[0.28em] mb-5">Get involved</p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-10 max-w-3xl mx-auto">Join us in <span className="display-italic">driving sustainable growth.</span></h2>
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
        </div>
      </section>
    </div>
  );
}
