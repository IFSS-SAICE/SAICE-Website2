import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Heart,
  Handshake,
  Users,
  Briefcase,
  Mail,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionImage } from "@/components/SectionImage";

const quickLinks = [
  { href: "#donate", label: "Donate" },
  { href: "#partner", label: "Partner" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#internships", label: "Internships" },
  { href: "#contact", label: "Contact" },
];

const allocation = [
  { v: 72, label: "Direct program delivery — PAGES and ICES field activities" },
  { v: 12, label: "MEAL, evaluation and learning" },
  { v: 9, label: "Country offices and partner cooperatives" },
  { v: 7, label: "Canada HQ, governance and finance" },
];

const giveMethods = [
  "One-off online gift (CAD, USD, EUR, GBP) — card, PayPal, Apple/Google Pay",
  "Monthly recurring gift — cancel any time, no fees",
  "Bank transfer or wire",
  "Gift of securities (Canada) — bypass capital-gains tax",
  "Donor-Advised Fund (DAF) — Canada and US",
  "Legacy gift — bequests, life insurance, RRSP/RRIF designations",
];

const partnerTypes = [
  { t: "Cooperative or producer organisation", d: "Bring your members and your data; we bring PAGES tools, training and finance linkages.", entity: "SAICE-led" },
  { t: "Municipality or waste-management body", d: "Bring your collection routes and waste streams; we bring ICES tools, MRV and carbon-finance access.", entity: "SAICE-led" },
  { t: "Ministry or public agency", d: "Co-design policy briefs, deliver TA, embed PAGES or ICES into national strategy.", entity: "SAICE + IFSS Inc." },
  { t: "Technology provider", d: "Hardware (IoT, sensors), platforms (cloud, telecoms), or services integrated into PAGES or ICES.", entity: "IFSS Inc." },
  { t: "Institutional or major donor", d: "PAGES and ICES are designed to absorb thematic, country-specific or pan-African grants. Donor pack on request.", entity: "SAICE" },
  { t: "Researcher, engineer or designer", d: "Contribute to the open codebase, co-author policy briefs, or audit model cards and datasets.", entity: "SAICE + IFSS Inc." },
];

const volunteerTracks = [
  { t: "Strategy & advisory", d: "Board observerships, committee advisors, program reviewers." },
  { t: "Data & ML", d: "Model card reviews, dataset curation, MEAL data audits." },
  { t: "Legal & compliance", d: "Contract review, privacy, charity-sector compliance." },
  { t: "Design & UX", d: "Accessibility audits, local-language UX, gallery curation." },
  { t: "Writing & editing", d: "Plain-language summaries, translations, policy-brief editing." },
  { t: "Field placements", d: "Licensed professionals only (medical, agronomy, engineering) under a written placement agreement." },
];

const internships = [
  { t: "Programs Intern, SAICE", loc: "Toronto / remote" },
  { t: "MEAL & Research Intern", loc: "Toronto / Kigali" },
  { t: "Country Office Intern", loc: "Rwanda · Kenya · Togo" },
  { t: "Communications & Policy Intern", loc: "Toronto / remote" },
  { t: "ML / Data Engineering Intern", loc: "Remote · PAGES & ICES" },
  { t: "Business Development Intern, IFSS Inc.", loc: "Toronto" },
];

const internshipPrinciples = [
  "Paid placements — we do not run unpaid internships.",
  "Named mentor, written learning plan, real project ownership.",
  "Structured interviews, named panellists, clear rubrics.",
  "GEDSI lens at sourcing, shortlisting and offer stages.",
];

export default function GetInvolvedRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;

  useEffect(() => {
    document.title = sub
      ? `Get involved — ${sub} · SAICE / IFSS Inc.`
      : "Get involved — Donate, Partner, Volunteer, Work with us · SAICE & IFSS";
  }, [sub]);

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero title="Back the work."
        italic="Five ways to start."
        description="Donor, partner, volunteer, researcher, or intern — pick the path that fits."
        crumbs={[{ label: "Get involved" }]}
      />

      <section className="pt-8 pb-4">
        <div className="container px-4 lg:px-6">
          <div className="flex flex-wrap gap-3">
            <a href="#donate" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              Donate to SAICE <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <a href="#partner" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Partner with us
            </a>
            <a href="#volunteer" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Volunteer
            </a>
            <a href="#internships" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              See internships
            </a>
          </div>
        </div>
      </section>

      {/* Sticky quick links */}
      <nav className="sticky top-20 z-30 bg-background/90 backdrop-blur border-foreground/10">
        <div className="container px-4 lg:px-6">
          <div className="flex overflow-x-auto gap-x-7 gap-y-2 py-3 text-sm font-medium text-foreground/70 scrollbar-thin">
            {quickLinks.map((l) => (
              <a key={l.href} href={l.href} className="whitespace-nowrap hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Donate */}
      <section id="donate" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="donor" caption="Your gift, simply put" aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-4 h-4 text-accent" strokeWidth={1.75} />
              
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Your gift, <span className="display-italic">simply put.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Donations go to SAICE, a Canadian registered charity. Funds are spent on program delivery, MEAL, and country-office operations. To make a charitable gift, donate to SAICE; for paid engagements, work with IFSS Inc.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7 rounded-3xl border border-foreground/10 bg-background p-7">
              
              <div className="space-y-4">
                {allocation.map((a) => (
                  <div key={a.label}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <p className="text-sm text-foreground/85 leading-relaxed pr-3">{a.label}</p>
                      <span className="font-serif text-lg font-semibold tracking-tight text-foreground whitespace-nowrap">
                        ${a.v}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-foreground/5 overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${a.v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-5 border-foreground/10 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
                  Donate now <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>
                <button className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
                  Set up a monthly gift
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl border border-foreground/10 bg-background p-7">
              
              <ul className="space-y-3">
                {giveMethods.map((m) => (
                  <li key={m} className="flex gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                    <p className="text-sm text-foreground/80 leading-relaxed">{m}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-5 border-foreground/10 text-xs text-foreground/60 leading-relaxed">
                Major gifts (CAD 10,000+): direct line to the Executive Director and Board Chair. Optional recognition and tailored reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="partnership" caption="Co-designing what comes next" aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Handshake className="w-4 h-4 text-accent" strokeWidth={1.75} />
              
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Co-design <span className="display-italic">what comes next.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Every program is co-owned with research, implementation and donor partners rooted in each country we work in. A signed MOU or contract on both sides — never a handshake — with a named relationship owner and a quarterly written review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {partnerTypes.map((p) => (
              <div key={p.t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif text-base font-semibold tracking-tight">{p.t}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent whitespace-nowrap pt-1">
                    {p.entity}
                  </span>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
              Start a partnership conversation <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/resources" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
              Download the partner pack
            </Link>
          </div>
          <p className="mt-4 text-xs text-foreground/55">
            First reply within 2 business days. MOU draft within 4 weeks for qualifying partnerships.
          </p>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="team" caption="Volunteers — five hours a month" aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-accent" strokeWidth={1.75} />
              
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Five hours a month, <span className="display-italic">used well.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              We do not run drop-in volunteering. Every volunteer signs an agreement, gets matched to a real piece of work, and has a named SAICE staff contact. Most volunteers work remotely; field placements are reserved for credentialed professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteerTracks.map((v) => (
              <div key={v.t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{v.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-foreground/60">
            Minimum 5 hours/month, one quarter committed. PSEAH and safeguarding training before first task. First reply within 5 business days; matching within 4 weeks if a track is open.
          </p>
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <SectionImage kind="internship" caption="Learn by doing — real work" aspect="16/9" className="mb-10" />
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-accent" strokeWidth={1.75} />
              
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
              Learn by doing, <span className="display-italic">on real work that matters.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Internships sit either under SAICE (programs, MEAL, communications) or IFSS Inc. (consulting, SaaS, business development). Every posting names the team, the mentor, and the stipend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-8">
            {internships.map((r) => (
              <div
                key={r.t}
                className="flex items-start justify-between gap-4 rounded-2xl border border-foreground/10 bg-card p-5"
              >
                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={1.75} />
                  <div>
                    <p className="font-serif text-base font-semibold tracking-tight text-foreground leading-snug">{r.t}</p>
                    <p className="text-xs text-foreground/55 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" strokeWidth={2} />
                      {r.loc}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/45 whitespace-nowrap pt-1.5">
                  Opening 2027
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-accent/25 bg-accent/[0.04] p-7">
            
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
              {internshipPrinciples.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                  <p className="text-sm text-foreground/80 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final contact band */}
      <section id="contact" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="rounded-3xl border border-foreground/10 bg-background p-7 md:p-10 text-center">
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] max-w-2xl mx-auto">
              There is a path on this page <span className="display-italic">for every reader.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#donate" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
                Donate now <Heart className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#partner" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
                Partner with us
              </a>
              <a href="#internships" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
                Apply for an internship
              </a>
            </div>
            <p className="mt-5 text-sm text-foreground/65">
              Or just say hello —{" "}
              <Link href="/contact" className="text-accent hover:underline underline-offset-4 inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" strokeWidth={2} /> we read every message
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
