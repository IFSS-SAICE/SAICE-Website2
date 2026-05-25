import React, { useEffect } from "react";
import { Link } from "wouter";
import { PageHero } from "@/components/PageHero";

export default function LegalRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub || "privacy";

  useEffect(() => {
    document.title = `Legal - ${sub.charAt(0).toUpperCase() + sub.slice(1)} | SAICE / IFSS Inc.`;
  }, [sub]);

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title="Legal"
        italic="information"
        description="Privacy, terms, confidentiality and accessibility commitments for SAICE and IFSS Inc."
        crumbs={[{ label: "Legal" }]}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {[
              { path: "privacy", label: "Privacy Policy" },
              { path: "terms", label: "Terms of Service" },
              { path: "confidentiality", label: "Confidentiality" },
              { path: "accessibility", label: "Accessibility" }
            ].map(link => (
              <Link 
                key={link.path}
                href={`/legal/${link.path}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  sub === link.path 
                  ? "bg-foreground text-background" 
                  : "bg-card text-foreground/70 hover:bg-card/80 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none blob-card bg-card p-8 md:p-10">
          {sub === "privacy" && (
            <div className="animate-in fade-in">
              <h2>Privacy & Data Protection Policy</h2>
              <p>Last updated: January 2026</p>
              <p>Our data practices are strictly aligned to:</p>
              <ul>
                <li>PIPEDA (Canada)</li>
                <li>GDPR (where applicable)</li>
                <li>Rwanda Law 058/2021 relating to the protection of personal data and privacy</li>
                <li>Kenya Data Protection Act (DPA) 2019</li>
              </ul>
              <h3>Subject Access Requests</h3>
              <p>To exercise your right to access, modify, or delete your data, please contact <a href="mailto:admin@ifssgoal.org">admin@ifssgoal.org</a>. <em>[Subject-access-request form placeholder]</em></p>
            </div>
          )}

          {sub === "terms" && (
            <div className="animate-in fade-in">
              <h2>Terms of Service</h2>
              <p>Standard terms of service for use of the SAICE / IFSS Inc. websites and programmatic portals.</p>
              <p><em>[Full legal text placeholder]</em></p>
            </div>
          )}

          {sub === "confidentiality" && (
            <div className="animate-in fade-in">
              <h2>Confidentiality Commitment</h2>
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg mt-6">
                <p className="text-lg italic text-foreground mb-0">
                  "IFSS Inc. and SAICE commit to handling all client, partner, and beneficiary information with strict confidentiality. Data is collected, stored, and processed only for the agreed purpose, with informed consent, and never shared with third parties without explicit authorisation."
                </p>
              </div>
            </div>
          )}

          {sub === "accessibility" && (
            <div className="animate-in fade-in">
              <h2>Accessibility Statement</h2>
              <p>
                SAICE and IFSS Inc. are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              <h3>Target Standard</h3>
              <p>
                Our target is strict adherence to <strong>WCAG 2.2 Level AA</strong>. We believe in inclusive design as a core methodology principle, particularly recognizing our programmatic focus on PwD (Persons with Disabilities) inclusion in the Great Lakes Region.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
