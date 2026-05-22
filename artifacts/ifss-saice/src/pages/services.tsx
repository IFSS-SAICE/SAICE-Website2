import React, { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Lightbulb, FileSearch, Handshake, PlayCircle, Flag } from "lucide-react";

export default function Services() {
  useEffect(() => {
    document.title = "Services (IFSS Inc.) | SAICE / IFSS Inc.";
  }, []);

  const services = [
    { 
      title: "ESG (Environmental and Social Governance)", 
      desc: "Proposal development, M&E toward good governance and corporate-friendly environments. Tools for GHG emissions reduction and CO₂ accounting." 
    },
    { 
      title: "Agricultural value chains and market access", 
      desc: "Agribusiness and food security. Technical assistance in capacity building, proposal development, project implementation, M&E." 
    },
    { 
      title: "Digital transformation and inclusion", 
      desc: "Integration of latest technologies into development processes for competitiveness and efficiency." 
    },
    { 
      title: "Monitoring & Evaluation systems", 
      desc: "Tools for sustainable impact, capacity building, project management." 
    },
    { 
      title: "Reports and proposal development", 
      desc: "Professional report writing (FR/EN), grant and funding proposal development." 
    },
    { 
      title: "Enterprise SaaS / paid licences", 
      desc: "Licensing of PAGES & ICES tools for input suppliers, exporters, financial institutions, and governments." 
    }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      {/* Hero Section */}
      <div className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            IFSS Inc. Commercial Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Expertise & SaaS Solutions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Delivering professional consulting, technical assistance, and scalable digital platforms through our operating subsidiary.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 max-w-5xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((s, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow border-muted-foreground/20">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mb-4 font-bold">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-lg mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Why choose us</h2>
            <p className="text-lg text-muted-foreground">
              Our unique position combines deep local field presence with world-class academic rigour. We do not just consult; we build and operate the tools we recommend.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span><strong>Strategic Academic Partnerships:</strong> McGill University, SEKU, and RCID ensure our methodologies are evidence-based.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span><strong>Proven Project Delivery:</strong> Successful deployment of the GIAH pilot, Sustainable Horticulture in East Africa, and numerous capacity-building initiatives.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span><strong>Bilingual Capacity:</strong> Professional delivery and reporting in both English and French.</span>
              </li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-2xl border shadow-sm">
            <h3 className="text-xl font-bold mb-6">Our Engagement Model</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
              {[
                { icon: <Lightbulb className="w-4 h-4" />, title: "Discovery", desc: "Understanding your goals and aligning on impact." },
                { icon: <FileSearch className="w-4 h-4" />, title: "Scoping", desc: "Detailed methodology, resource mapping, and timeline." },
                { icon: <Handshake className="w-4 h-4" />, title: "Contract", desc: "Clear deliverables and structured agreements." },
                { icon: <PlayCircle className="w-4 h-4" />, title: "Delivery", desc: "Execution with regular milestone check-ins." },
                { icon: <Flag className="w-4 h-4" />, title: "Handover", desc: "Capacity building, documentation, and final reporting." }
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-background bg-muted-foreground/20 text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors z-10">
                    {step.icon}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-background shadow-sm">
                    <div className="font-bold text-foreground mb-1 text-sm">{step.title}</div>
                    <div className="text-muted-foreground text-xs">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to accelerate your impact?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact IFSS Inc. to discuss enterprise licensing, consulting services, or custom digital transformation projects.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors">
            Get a Proposal <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
