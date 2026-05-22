import React, { useEffect } from "react";
import { Link } from "wouter";
import { Heart, Handshake, Users, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";

const labels: Record<string, { eyebrow: string; title: string; italic: string; description: string }> = {
  donate: { eyebrow: "Get involved", title: "Support the", italic: "mission", description: "Your donation directly funds the deployment of PAGES and ICES tools to cooperatives and municipalities that cannot afford commercial licences." },
  partner: { eyebrow: "Get involved", title: "Partner", italic: "with us", description: "Co-design programs, fund a deployment, or integrate our tools into your network — we work with ministries, universities and institutional donors." },
  volunteer: { eyebrow: "Get involved", title: "Volunteer", italic: "your skills", description: "Lend your time and expertise to communities building digital agriculture and circular economy systems on the ground." },
  careers: { eyebrow: "Get involved", title: "Build a", italic: "career", description: "Join a small, focused team working at the intersection of digital innovation and sustainable development in the Great Lakes Region." },
};

export default function GetInvolvedRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub || "donate";

  useEffect(() => {
    document.title = `Get Involved - ${sub.charAt(0).toUpperCase() + sub.slice(1)} | SAICE / IFSS Inc.`;
  }, [sub]);

  const meta = labels[sub] || labels.donate;

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero
        eyebrow={meta.eyebrow}
        title={meta.title}
        italic={meta.italic}
        description={meta.description}
        crumbs={[{ label: "Get involved", href: "/get-involved/donate" }, { label: meta.title + " " + meta.italic }]}
      />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className="md:w-1/4">
            <nav className="space-y-1 sticky top-24">
              <NavLink path="donate" current={sub} icon={<Heart className="w-4 h-4" />} label="Donate" />
              <NavLink path="partner" current={sub} icon={<Handshake className="w-4 h-4" />} label="Partner with us" />
              <NavLink path="volunteer" current={sub} icon={<Users className="w-4 h-4" />} label="Volunteer" />
              <NavLink path="careers" current={sub} icon={<Briefcase className="w-4 h-4" />} label="Careers" />
            </nav>
          </aside>

          {/* Content */}
          <main className="md:w-3/4 max-w-3xl">
            {sub === "donate" && <Donate />}
            {sub === "partner" && <Partner />}
            {sub === "volunteer" && <Volunteer />}
            {sub === "careers" && <Careers />}
          </main>
        </div>
      </div>
    </div>
  );
}

function NavLink({ path, current, icon, label }: { path: string, current: string, icon: React.ReactNode, label: string }) {
  const active = path === current;
  return (
    <Link 
      href={`/get-involved/${path}`}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all font-medium text-sm ${
        active 
        ? "bg-foreground text-background font-semibold" 
        : "text-foreground/70 hover:bg-card hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

function Donate() {
  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-primary mb-4">Support our mission</h2>
        <p className="text-foreground leading-relaxed mb-8">
          Your donation directly funds the deployment of PAGES and ICES tools to cooperatives and municipalities that cannot afford commercial licenses. 
        </p>

        <div className="bg-card border rounded-xl p-6 shadow-sm">
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="default" className="w-32">One-time</Button>
            <Button variant="outline" className="w-32">Monthly</Button>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <button className="py-4 border-2 rounded-xl font-bold text-lg hover:border-primary hover:bg-primary/5 transition-colors focus:border-primary focus:bg-primary/5">
              $50
            </button>
            <button className="py-4 border-2 border-primary bg-primary/5 rounded-xl font-bold text-lg text-primary relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase px-2 py-0.5 rounded-full font-semibold tracking-wide">
                Suggested
              </span>
              $120
            </button>
            <button className="py-4 border-2 rounded-xl font-bold text-lg hover:border-primary hover:bg-primary/5 transition-colors focus:border-primary focus:bg-primary/5">
              $500
            </button>
          </div>

          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary">
              $120 trains 1 cooperative leader on Smart Matchmaker
            </p>
          </div>

          <Button size="lg" className="w-full text-lg h-14">Proceed to Donate</Button>
        </div>
      </div>

      <div className="text-xs text-muted-foreground p-4 bg-muted rounded-lg leading-relaxed">
        <strong>Important Legal Notice regarding SAICE and IFSS Inc.</strong><br/>
        SAICE is a Canadian registered charity (registration pending). Donations are eligible for a Canadian tax receipt once registration is confirmed. IFSS Inc. (our operating subsidiary) is a commercial social enterprise and cannot issue tax receipts for donations.
      </div>
    </div>
  );
}

function Partner() {
  return (
    <div className="space-y-8 animate-in fade-in">
      <h2 className="text-3xl font-bold mb-4">Partner with us</h2>
      <p className="text-muted-foreground text-lg mb-8">
        We actively seek academic, implementation, donor, technology, and supply-chain partners to scale our impact. Expected response time: 2-3 business days.
      </p>

      <form className="space-y-6 bg-card p-8 border rounded-2xl shadow-sm" onSubmit={e => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Organisation Name</label>
            <input type="text" className="w-full p-3 border rounded-lg bg-background" placeholder="Acme NGO" disabled />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Contact Email</label>
            <input type="email" className="w-full p-3 border rounded-lg bg-background" placeholder="contact@example.com" disabled />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Partnership Type</label>
          <select className="w-full p-3 border rounded-lg bg-background" disabled>
            <option>Academic / Research</option>
            <option>Implementation / Field</option>
            <option>Donor / Funding</option>
            <option>Technology / Infrastructure</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Message</label>
          <textarea className="w-full p-3 border rounded-lg bg-background h-32" placeholder="Tell us about how we can collaborate..." disabled></textarea>
        </div>

        <Button disabled className="w-full">Submit Inquiry (Demo)</Button>

        <p className="text-sm text-center text-muted-foreground mt-4">
          Or email us directly at <a href="mailto:admin@ifssgoal.org" className="text-primary hover:underline">admin@ifssgoal.org</a>
        </p>
      </form>
    </div>
  );
}

function Volunteer() {
  return (
    <div className="space-y-8 animate-in fade-in">
      <h2 className="text-3xl font-bold mb-4">Volunteer</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Our volunteers provide critical capacity. We recruit globally for remote roles and locally for field support.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {[
          { role: "Translators", desc: "EN to/from FR, Kinyarwanda, Kirundi, Swahili." },
          { role: "Tech Mentors", desc: "Advising cooperative leaders on digital tools." },
          { role: "Comms & Design", desc: "Helping share our impact stories visually." },
          { role: "Board Observers", desc: "Specialist advisory roles for our committees." }
        ].map((v, i) => (
          <div key={i} className="p-6 border rounded-xl bg-card">
            <h3 className="font-bold mb-2">{v.role}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-6 bg-muted rounded-xl flex items-center justify-between">
        <div>
          <h3 className="font-bold mb-1">Ready to help?</h3>
          <p className="text-sm text-muted-foreground">Review our Code of Conduct and apply.</p>
        </div>
        <Button variant="secondary">Apply Now (Placeholder)</Button>
      </div>
    </div>
  );
}

function Careers() {
  return (
    <div className="space-y-8 animate-in fade-in">
      <h2 className="text-3xl font-bold mb-4">Careers</h2>
      
      <div className="py-12 px-6 border-2 border-dashed rounded-2xl text-center mb-12 bg-muted/30">
        <Mail className="w-8 h-8 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-bold mb-2">No current openings</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We are not currently actively recruiting, but we are always interested in connecting with passionate professionals. Share your CV at <a href="mailto:admin@ifssgoal.org" className="text-primary hover:underline">admin@ifssgoal.org</a>.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold border-b pb-2">Life at SAICE & IFSS Inc.</h3>
        
        <div className="bg-card p-6 border rounded-xl space-y-4">
          <div>
            <h4 className="font-bold mb-1 text-primary">Equity, Diversity, and Inclusion</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are committed to GEDSI (Gender, Equity, Disability, Social Inclusion). Our hiring practices are designed to ensure fair access for women, youth, and marginalized communities across the Great Lakes Region and globally.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-1 text-primary">Accessibility Statement</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We strive to create an accessible workplace. If you require accommodations during any future interview process, we will work with you to meet your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
