import { getPhoto, type PhotoSlot } from "@/lib/photos";
import { useTT } from "@/lib/i18n";

export type SectionImageKind =
  | "agriculture"
  | "circular-economy"
  | "digital-tools"
  | "data"
  | "team"
  | "community"
  | "global"
  | "partnership"
  | "report"
  | "education"
  | "governance"
  | "donor"
  | "services"
  | "publications"
  | "dataset"
  | "newsletter"
  | "field"
  | "impact"
  | "internship"
  | "story"
  | "energy";

/** Caption labels only. Imagery comes exclusively from the photo registry via `photo`. */
const KIND_LABEL: Record<SectionImageKind, { en: string; fr: string }> = {
  agriculture: { en: "Field & farmers", fr: "Champs et agriculteurs" },
  "circular-economy": { en: "Circular economy", fr: "Économie circulaire" },
  "digital-tools": { en: "Digital tools", fr: "Outils numériques" },
  data: { en: "Indicators & data", fr: "Indicateurs et données" },
  team: { en: "Team & people", fr: "Équipe et personnes" },
  community: { en: "Communities", fr: "Communautés" },
  global: { en: "Where we work", fr: "Où nous intervenons" },
  partnership: { en: "Partners", fr: "Partenaires" },
  report: { en: "Reports & proposals", fr: "Rapports et propositions" },
  education: { en: "Capacity building", fr: "Renforcement des capacités" },
  governance: { en: "Governance", fr: "Gouvernance" },
  donor: { en: "Donors & funding", fr: "Donateurs et financement" },
  services: { en: "Services", fr: "Services" },
  publications: { en: "Publications", fr: "Publications" },
  dataset: { en: "Open data", fr: "Données ouvertes" },
  newsletter: { en: "Newsletter", fr: "Infolettre" },
  field: { en: "On the ground", fr: "Sur le terrain" },
  impact: { en: "Impact", fr: "Impact" },
  internship: { en: "Internships", fr: "Stages" },
  story: { en: "Story", fr: "Histoire" },
  energy: { en: "Clean energy", fr: "Énergie propre" },
};

type Props = {
  /** Stable slot ID in the central photo registry (src/lib/photos.ts). */
  photo: PhotoSlot;
  /** Only used for the default caption label. */
  kind?: SectionImageKind;
  caption?: string;
  aspect?: "16/9" | "16/10" | "4/3" | "1/1" | "3/2";
  className?: string;
  rounded?: string;
  decorative?: boolean;
  showCaption?: boolean;
};

export function SectionImage({
  photo,
  kind = "story",
  caption,
  aspect = "16/9",
  className = "",
  rounded = "rounded-2xl",
  decorative = false,
  showCaption = true,
}: Props) {
  const tt = useTT();
  const p = getPhoto(photo);
  const label = KIND_LABEL[kind] ?? KIND_LABEL.story;

  return (
    <figure
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: aspect }}
      data-photo-slot={photo}
      data-photo-source={p.source}
      {...(decorative ? { "aria-hidden": true, role: "presentation" } : {})}
    >
      <img
        src={p.src}
        alt={decorative ? "" : tt(p.alt.en, p.alt.fr)}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {showCaption && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-foreground/55 to-transparent"
          />
          <figcaption
            {...(decorative ? { "aria-hidden": true } : {})}
            className="absolute left-4 bottom-4 md:left-5 md:bottom-5"
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground">
              {caption ?? tt(label.en, label.fr)}
            </span>
          </figcaption>
        </>
      )}
    </figure>
  );
}
