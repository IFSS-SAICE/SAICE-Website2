import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, FileText, Scale } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import governanceHero from "@/assets/images/about-hero.png";
import governanceBoard from "@/assets/images/governance-board.png";
import governancePolicies from "@/assets/images/governance-policies.png";

const POLICIES = [
  "Privacy & Data Protection",
  "AI Ethics & Algorithmic Accountability",
  "GEDSI — Gender, Equity, Disability, Social Inclusion",
  "Safeguarding / PSEAH",
  "Whistle-blower Protection",
  "Conflict of Interest",
  "Anti-Bribery & Corruption",
  "Environmental Sustainability",
];

export default function Governance() {
  useEffect(() => {
    document.title = "Governance & Transparency | SAICE / IFSS Inc.";
  }, []);

  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero
        title="Governance &"
        italic="transparency."
        description="A majority-independent board and clear policies — published openly, reviewed regularly."
        crumbs={[{ label: "Governance" }]}
        image={governanceHero}
        imageAlt="Governance and oversight"
      />

      <div className="container px-4 lg:px-6 max-w-6xl mx-auto">
        {/* Board */}
        <section className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <figure className="lg:col-span-7 relative overflow-hidden rounded-3xl" style={{ aspectRatio: "16/9" }}>
            <img
              src={governanceBoard}
              alt="SAICE / IFSS board of directors in session"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="lg:col-span-5">
            <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <ShieldCheck className="w-5 h-5 text-accent" strokeWidth={1.75} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
              The board
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-4">
              Majority <span className="display-italic">independent.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Academic, civil-society and partner-country voices set strategy and oversee risk, ethics and finances.
            </p>
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
            >
              Meet the board <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </section>

        {/* Policies */}
        <section className="mt-20 md:mt-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 lg:order-2">
            <figure className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/3" }}>
              <img
                src={governancePolicies}
                alt="Core policies and accountability charter on a desk"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
          <div className="lg:col-span-7 lg:order-1">
            <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <FileText className="w-5 h-5 text-accent" strokeWidth={1.75} />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
              Core policies
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] mb-6">
              The rules we <span className="display-italic">hold ourselves to.</span>
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {POLICIES.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-card border border-foreground/10 text-sm text-foreground"
                >
                  <FileText className="w-4 h-4 text-accent shrink-0" strokeWidth={1.75} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Brief footer strip */}
        <section className="mt-20 md:mt-24 grid md:grid-cols-2 gap-5">
          <div className="blob-card bg-card p-7 flex items-start gap-4">
            <Scale className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.75} />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-tight mb-1">Structure</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                IFSS Inc. (2023) — Canadian social enterprise. SAICE — Canadian charity registration in progress.
              </p>
            </div>
          </div>
          <div className="blob-card bg-card p-7 flex items-start gap-4">
            <FileText className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.75} />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-tight mb-1">Audits & filings</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Audited statements and CRA T3010 filings will be published after the first reporting cycle as a registered charity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
