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
import getInvolvedHero from "@/assets/images/about-hero.png";
import { SectionImage } from "@/components/SectionImage";
import { ContactDialog } from "@/components/ContactDialog";

const giveMethods = [
  "One-off online gift (CAD, USD, EUR, GBP) — card, PayPal, Apple / Google Pay",
  "Monthly recurring gift — cancel any time, no fees",
  "Bank transfer or wire",
  "Gift of securities (Canada) — bypass capital-gains tax",
  "Donor-Advised Fund (DAF) — Canada and US",
  "Legacy gift — bequests, life insurance, RRSP / RRIF designations",
];

const partnerTypes = [
  {
    t: "Cooperatives & producer organisations",
    d: "Bring members and on-the-ground data; we bring PAGES, ICES or PACES tools, training and finance linkages.",
    region: "Africa",
  },
  {
    t: "Municipalities & utilities",
    d: "Co-design ICES collection routes and PACES mini-grids; we bring smart sensing, MRV and climate-finance access.",
    region: "Africa",
  },
  {
    t: "Ministries & public agencies",
    d: "Embed PAGES, ICES or PACES into national strategies — policy briefs, TA and joint pilots.",
    region: "Africa",
  },
  {
    t: "Research & academic institutions",
    d: "Co-author studies, share datasets, supervise interns and field a joint MRV agenda.",
    region: "Africa · Europe",
  },
  {
    t: "Donor & philanthropic partners",
    d: "Restricted and unrestricted grants, blended finance, MOUs with quarterly written reviews.",
    region: "Canada · Europe · Africa",
  },
  {
    t: "Technology partners",
    d: "Hardware, platforms or services integrated into our programs under a shared-IP agreement.",
    region: "Global",
  },
];

const volunteerTracks = [
  { t: "Strategy & advisory", d: "Board observerships, committee advisors, program reviewers." },
  { t: "Data & ML", d: "Model-card reviews, dataset curation, MEAL data audits." },
  { t: "Legal & compliance", d: "Contract review, privacy, charity-sector compliance." },
  { t: "Design & UX", d: "Accessibility audits, local-language UX, gallery curation." },
  { t: "Writing & editing", d: "Plain-language summaries, translations, brief editing." },
  { t: "Field placements", d: "Credentialed professionals only (medical, agronomy, engineering) under a written placement agreement." },
];

const internships = [
  { t: "Programs Intern — SAICE", loc: "Canada HQ / remote" },
  { t: "MEAL & Research Intern", loc: "Canada HQ / partner sites" },
  { t: "Country Coordination Intern", loc: "Africa partner sites" },
  { t: "Communications & Policy Intern", loc: "Canada HQ / remote" },
  { t: "ML / Data Engineering Intern", loc: "Remote · all programs" },
  { t: "Partnerships Intern — IFSS Inc.", loc: "Canada HQ" },
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
      : "Get involved — Donate, Partner, Volunteer, Careers · SAICE & IFSS";
  }, [sub]);

  return (
    <div className="min-h-screen pb-0 bg-background">
      <PageHero
        title="Back the work."
        italic="Five ways to start."
        description="Donor, partner, volunteer, researcher or future colleague — pick the path that fits."
        crumbs={[{ label: "Get involved" }]}
        image={getInvolvedHero}
        imageAlt="Team and community members in the field"
      />

      {/* Donate */}
      <section id="donate" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Donate · SAICE</p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  Your gift, <span className="display-italic">clearly spent.</span>
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  Donations go to SAICE, a Canadian registered charity headquartered in Quebec City. Funds support program delivery across our African partner sites, with European and Canadian partners co-funding research and evaluation.
                </p>
              </div>

            </div>

            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-28">
              <SectionImage kind="donor" caption="Your gift, simply put" aspect="4/3" />
              <div className="rounded-3xl border border-foreground/10 bg-card p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">Ways to give</p>
                <ul className="space-y-3">
                  {giveMethods.map((m) => (
                    <li key={m} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <p className="text-sm text-foreground/80 leading-relaxed">{m}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-foreground/60 leading-relaxed">
                  Major gifts (CAD 10,000+): direct line to the Executive Director and Board Chair. Optional recognition and tailored reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="partnership" caption="Canada HQ · African & European partners" aspect="4/3" />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Handshake className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Partner · Collaborate</p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  Co-design <span className="display-italic">what comes next.</span>
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  Every program is co-owned with research, implementation and donor partners — anchored in our African delivery sites, backed by European research collaborators, and coordinated from Canada. Signed MOUs both sides, named relationship owner, quarterly written review.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {partnerTypes.map((p) => (
                  <div key={p.t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-base font-semibold tracking-tight">{p.t}</h3>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent whitespace-nowrap pt-1">
                        {p.region}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/75 leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <ContactDialog>
                  <button type="button" className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors">
                    Start a partnership conversation <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </ContactDialog>
                <Link href="/services" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
                  See our services
                </Link>
              </div>
              <p className="text-xs text-foreground/55">
                First reply within 2 business days. MOU draft within 4 weeks for qualifying partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-14 md:py-16 scroll-mt-32">
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Volunteer · Skilled time</p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  Five hours a month, <span className="display-italic">used well.</span>
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  No drop-in volunteering. Every volunteer signs an agreement, gets matched to a real piece of work, and has a named SAICE contact. Most work is remote; field placements are reserved for credentialed professionals.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {volunteerTracks.map((v) => (
                  <div key={v.t} className="rounded-2xl border border-foreground/10 bg-card p-6">
                    <h3 className="font-serif text-base font-semibold tracking-tight mb-2">{v.t}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{v.d}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-foreground/60">
                Minimum 5 hours / month, one quarter committed. PSEAH and safeguarding training before first task. First reply within 5 business days; matching within 4 weeks if a track is open.
              </p>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="team" caption="Volunteers — five hours a month" aspect="4/3" />
            </div>
          </div>
        </div>
      </section>

      {/* Careers & internships */}
      <section id="careers" className="py-14 md:py-16 bg-card/40 scroll-mt-32">
        <span id="internships" className="block -translate-y-32 invisible" aria-hidden="true" />
        <div className="container px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <SectionImage kind="internship" caption="Learn by doing — real work" aspect="4/3" />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Careers · Internships</p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                  Learn by doing, <span className="display-italic">on work that matters.</span>
                </h2>
                <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                  Roles sit under SAICE (programs, MEAL, communications) or IFSS Inc. (research collaborations, partnerships). Every posting names the team, the mentor and the stipend.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
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
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">How we hire</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {internshipPrinciples.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                      <p className="text-sm text-foreground/80 leading-relaxed">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
              <a href="#careers" className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 text-sm font-semibold transition-colors">
                Apply for a role
              </a>
            </div>
            <p className="mt-5 text-sm text-foreground/65">
              Or just say hello —{" "}
              <ContactDialog>
                <button type="button" className="text-accent hover:underline underline-offset-4 inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" strokeWidth={2} /> we read every message
                </button>
              </ContactDialog>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
