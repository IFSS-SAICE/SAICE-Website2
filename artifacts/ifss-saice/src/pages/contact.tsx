import React, { useEffect } from "react";
import { Mail, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | SAICE / IFSS Inc.";
  }, []);

  const lanes = [
    { title: "General Inquiries", subject: "General Inquiry" },
    { title: "Media & Press", subject: "Media Request" },
    { title: "Partnerships", subject: "Partnership Inquiry" },
    { title: "Donors & Grants", subject: "Donor Relations" },
    { title: "Careers", subject: "Careers" },
    { title: "Volunteer", subject: "Volunteer Application" }
  ];

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        italic="us"
        description="We operate globally with a focus on the Great Lakes Region. We support communications in English and French."
        crumbs={[{ label: "Contact" }]}
      />
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Email Lanes */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" /> Direct Routing
              </h2>
              <p className="text-muted-foreground mb-6">
                To ensure your message reaches the right team quickly, please use one of the links below which will pre-fill the correct subject line to <strong className="text-foreground">admin@ifssgoal.org</strong>.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {lanes.map((lane, i) => (
                <a 
                  key={i} 
                  href={`mailto:admin@ifssgoal.org?subject=[${lane.subject}] `}
                  className="block p-4 border rounded-xl bg-card hover:border-primary hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Route to team &rarr;</p>
                </a>
              ))}
            </div>
          </section>

          {/* Locations & Map */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-accent" /> Office Locations
            </h2>

            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-3 h-3 rounded-full bg-accent shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Canada (Global HQ)</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      61 B Rue Doyon<br/>
                      G1E 5G1 Quebec, QC<br/>
                      Canada
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-1 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-muted-foreground" /> Rwanda / Kenya / Togo
                  </h3>
                  <p className="text-sm text-muted-foreground italic mt-2">
                    Regional field offices establishing. Direct mail to HQ.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="h-64 bg-muted rounded-2xl border flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                 <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] text-primary fill-current">
                   <path d="M 20,40 Q 15,30 30,20 T 60,10 Q 75,15 85,30 T 70,60 Q 60,80 40,90 T 25,60 Z" />
                 </svg>
              </div>
              <span className="text-muted-foreground font-medium relative z-10 bg-background/80 px-4 py-2 rounded-lg backdrop-blur text-sm">Interactive Map Placeholder</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
