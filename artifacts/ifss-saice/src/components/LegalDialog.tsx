import { type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLang } from "@/lib/i18n";

type LegalKind = "privacy" | "terms";

interface LegalDialogProps {
  kind: LegalKind;
  children: ReactNode;
}

type LegalEntry = {
  title: { en: string; fr: string };
  updated: { en: string; fr: string };
  body: { en: ReactNode; fr: ReactNode };
};

const content: Record<LegalKind, LegalEntry> = {
  privacy: {
    title: {
      en: "Privacy & Data Protection",
      fr: "Confidentialité et protection des données",
    },
    updated: {
      en: "Last updated: January 2026",
      fr: "Dernière mise à jour : janvier 2026",
    },
    body: {
      en: (
        <>
          <p>Our data practices are strictly aligned to:</p>
          <ul>
            <li>PIPEDA (Canada)</li>
            <li>GDPR (where applicable)</li>
            <li>Rwanda Law 058/2021 relating to the protection of personal data and privacy</li>
            <li>Kenya Data Protection Act (DPA) 2019</li>
          </ul>
          <h3>Subject access requests</h3>
          <p>
            To exercise your right to access, modify, or delete your data, please contact{" "}
            <a href="mailto:admin@ifssgoal.org" className="text-accent hover:underline underline-offset-4">
              admin@ifssgoal.org
            </a>
            .
          </p>
        </>
      ),
      fr: (
        <>
          <p>Nos pratiques en matière de données sont strictement alignées sur :</p>
          <ul>
            <li>LPRPDE (Canada)</li>
            <li>RGPD (le cas échéant)</li>
            <li>Loi rwandaise 058/2021 relative à la protection des données personnelles et de la vie privée</li>
            <li>Loi kényane sur la protection des données (DPA) de 2019</li>
          </ul>
          <h3>Demandes d'accès aux données personnelles</h3>
          <p>
            Pour exercer votre droit d'accès, de modification ou de suppression de vos données, veuillez contacter{" "}
            <a href="mailto:admin@ifssgoal.org" className="text-accent hover:underline underline-offset-4">
              admin@ifssgoal.org
            </a>
            .
          </p>
        </>
      ),
    },
  },
  terms: {
    title: {
      en: "Terms of Service",
      fr: "Conditions d'utilisation",
    },
    updated: {
      en: "Last updated: January 2026",
      fr: "Dernière mise à jour : janvier 2026",
    },
    body: {
      en: (
        <>
          <p>
            These terms govern the use of the SAICE / IFSS Inc. websites and programmatic
            portals. By accessing the site you agree to use it for its intended,
            non-commercial purposes and to respect the rights of all contributors,
            partners, and beneficiaries.
          </p>
          <p>
            Content is provided for information only and may be updated without notice.
            Programmatic data is published under CC-BY 4.0 and code under Apache 2.0,
            unless otherwise stated.
          </p>
          <p>
            Questions about these terms? Contact{" "}
            <a href="mailto:admin@ifssgoal.org" className="text-accent hover:underline underline-offset-4">
              admin@ifssgoal.org
            </a>
            .
          </p>
        </>
      ),
      fr: (
        <>
          <p>
            Ces conditions régissent l'utilisation des sites web et des portails
            programmatiques de SAICE / IFSS Inc. En accédant au site, vous acceptez
            de l'utiliser à ses fins prévues et non commerciales, et de respecter les
            droits de tous les contributeurs, partenaires et bénéficiaires.
          </p>
          <p>
            Le contenu est fourni à titre informatif uniquement et peut être mis à
            jour sans préavis. Les données programmatiques sont publiées sous licence
            CC-BY 4.0 et le code sous licence Apache 2.0, sauf indication contraire.
          </p>
          <p>
            Des questions sur ces conditions ? Contactez{" "}
            <a href="mailto:admin@ifssgoal.org" className="text-accent hover:underline underline-offset-4">
              admin@ifssgoal.org
            </a>
            .
          </p>
        </>
      ),
    },
  },
};

export function LegalDialog({ kind, children }: LegalDialogProps) {
  const { lang } = useLang();
  const entry = content[kind];
  const title = entry.title[lang];
  const updated = entry.updated[lang];
  const body = entry.body[lang];
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-semibold tracking-tight">
            {title}
          </DialogTitle>
          <p className="text-xs text-foreground/55 mt-1">{updated}</p>
        </DialogHeader>
        <div className="mt-3 space-y-4 text-sm leading-relaxed text-foreground/80 [&_h3]:font-serif [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-5 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_p]:leading-relaxed">
          {body}
        </div>
      </DialogContent>
    </Dialog>
  );
}
