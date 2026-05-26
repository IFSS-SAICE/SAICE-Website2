import React, { useEffect } from "react";
import { Link } from "wouter";
import { PageHero } from "@/components/PageHero";
import legalHero from "@/assets/images/about-hero.png";
import { T, useTT } from "@/lib/i18n";

export default function LegalRoutes({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub || "privacy";
  const tt = useTT();

  const subTitles: Record<string, { en: string; fr: string }> = {
    privacy: { en: "Privacy", fr: "Confidentialité" },
    terms: { en: "Terms", fr: "Conditions" },
    confidentiality: { en: "Confidentiality", fr: "Confidentialité" },
    accessibility: { en: "Accessibility", fr: "Accessibilité" },
  };

  useEffect(() => {
    const meta = subTitles[sub];
    const subLabel = meta ? tt(meta.en, meta.fr) : sub.charAt(0).toUpperCase() + sub.slice(1);
    document.title = tt(
      `Legal - ${subLabel} | SAICE / IFSS Inc.`,
      `Mentions légales - ${subLabel} | SAICE / IFSS Inc.`,
    );
  }, [sub, tt]);

  return (
    <div className="min-h-screen pb-20 bg-background">
      <PageHero title={tt("Legal", "Mentions")}
        italic={tt("information", "légales")}
        description={tt(
          "Privacy, terms, confidentiality and accessibility commitments for SAICE and IFSS Inc.",
          "Engagements de confidentialité, conditions, secret professionnel et accessibilité pour SAICE et IFSS Inc.",
        )}
        crumbs={[{ label: tt("Legal", "Mentions légales") }]}
        image={legalHero}
        imageAlt={tt("Legal and policy information", "Informations juridiques et politiques")}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <div className="flex flex-wrap gap-2">
            {[
              { path: "privacy", en: "Privacy Policy", fr: "Politique de confidentialité" },
              { path: "terms", en: "Terms of Service", fr: "Conditions d'utilisation" },
              { path: "confidentiality", en: "Confidentiality", fr: "Confidentialité" },
              { path: "accessibility", en: "Accessibility", fr: "Accessibilité" },
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
                {tt(link.en, link.fr)}
              </Link>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none blob-card bg-card p-8 md:p-10">
          {sub === "privacy" && (
            <div className="animate-in fade-in">
              <h2><T en="Privacy & Data Protection Policy" fr="Politique de confidentialité et de protection des données" /></h2>
              <p><T en="Last updated: January 2026" fr="Dernière mise à jour : janvier 2026" /></p>
              <p><T en="Our data practices are strictly aligned to:" fr="Nos pratiques en matière de données sont strictement alignées sur :" /></p>
              <ul>
                <li><T en="PIPEDA (Canada)" fr="LPRPDE (Canada)" /></li>
                <li><T en="GDPR (where applicable)" fr="RGPD (le cas échéant)" /></li>
                <li><T
                  en="Rwanda Law 058/2021 relating to the protection of personal data and privacy"
                  fr="Loi rwandaise 058/2021 relative à la protection des données personnelles et de la vie privée"
                /></li>
                <li><T en="Kenya Data Protection Act (DPA) 2019" fr="Loi kényane sur la protection des données (DPA) de 2019" /></li>
              </ul>
              <h3><T en="Subject Access Requests" fr="Demandes d'accès aux données personnelles" /></h3>
              <p>
                <T
                  en={<>To exercise your right to access, modify, or delete your data, please contact <a href="mailto:admin@ifssgoal.org">admin@ifssgoal.org</a>. <em>[Subject-access-request form placeholder]</em></>}
                  fr={<>Pour exercer votre droit d'accès, de modification ou de suppression de vos données, veuillez contacter <a href="mailto:admin@ifssgoal.org">admin@ifssgoal.org</a>. <em>[Formulaire de demande d'accès — espace réservé]</em></>}
                />
              </p>
            </div>
          )}

          {sub === "terms" && (
            <div className="animate-in fade-in">
              <h2><T en="Terms of Service" fr="Conditions d'utilisation" /></h2>
              <p>
                <T
                  en="Standard terms of service for use of the SAICE / IFSS Inc. websites and programmatic portals."
                  fr="Conditions d'utilisation standard pour l'usage des sites web et des portails programmatiques de SAICE / IFSS Inc."
                />
              </p>
              <p>
                <T en={<><em>[Full legal text placeholder]</em></>} fr={<><em>[Texte juridique complet — espace réservé]</em></>} />
              </p>
            </div>
          )}

          {sub === "confidentiality" && (
            <div className="animate-in fade-in">
              <h2><T en="Confidentiality Commitment" fr="Engagement de confidentialité" /></h2>
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg mt-6">
                <p className="text-lg italic text-foreground mb-0">
                  <T
                    en={<>«&nbsp;IFSS Inc. and SAICE commit to handling all client, partner, and beneficiary information with strict confidentiality. Data is collected, stored, and processed only for the agreed purpose, with informed consent, and never shared with third parties without explicit authorisation.&nbsp;»</>}
                    fr={<>«&nbsp;IFSS Inc. et SAICE s'engagent à traiter toutes les informations relatives aux clients, partenaires et bénéficiaires avec la plus stricte confidentialité. Les données sont collectées, stockées et traitées uniquement aux fins convenues, avec consentement éclairé, et ne sont jamais partagées avec des tiers sans autorisation explicite.&nbsp;»</>}
                  />
                </p>
              </div>
            </div>
          )}

          {sub === "accessibility" && (
            <div className="animate-in fade-in">
              <h2><T en="Accessibility Statement" fr="Déclaration d'accessibilité" /></h2>
              <p>
                <T
                  en="SAICE and IFSS Inc. are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards."
                  fr="SAICE et IFSS Inc. s'engagent à garantir l'accessibilité numérique aux personnes en situation de handicap. Nous améliorons en continu l'expérience utilisateur pour tous et appliquons les normes d'accessibilité pertinentes."
                />
              </p>
              <h3><T en="Target Standard" fr="Norme visée" /></h3>
              <p>
                <T
                  en={<>Our target is strict adherence to <strong>WCAG 2.2 Level AA</strong>. We believe in inclusive design as a core methodology principle, particularly recognizing our programmatic focus on PwD (Persons with Disabilities) inclusion in the Great Lakes Region.</>}
                  fr={<>Notre objectif est le respect strict des <strong>WCAG 2.2 niveau AA</strong>. Nous considérons la conception inclusive comme un principe méthodologique fondamental, en lien avec notre engagement programmatique en faveur de l'inclusion des PSH (personnes en situation de handicap) dans la région des Grands Lacs.</>}
                />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
