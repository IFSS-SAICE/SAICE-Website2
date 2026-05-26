import imgAgriculture from "@/assets/images/sections/agriculture.png";
import imgCircular from "@/assets/images/sections/circular-economy.png";
import imgDigital from "@/assets/images/sections/digital-tools.png";
import imgData from "@/assets/images/sections/data.png";
import imgTeam from "@/assets/images/sections/team.png";
import imgCommunity from "@/assets/images/sections/community.png";
import imgGlobal from "@/assets/images/sections/global.png";
import imgPartnership from "@/assets/images/sections/partnership.png";
import imgReport from "@/assets/images/sections/report.png";
import imgEducation from "@/assets/images/sections/education.png";
import imgGovernance from "@/assets/images/sections/governance.png";
import imgDonor from "@/assets/images/sections/donor.png";
import imgServices from "@/assets/images/sections/services.png";
import imgPublications from "@/assets/images/sections/publications.png";
import imgDataset from "@/assets/images/sections/dataset.png";
import imgNewsletter from "@/assets/images/sections/newsletter.png";
import imgField from "@/assets/images/sections/field.png";
import imgImpact from "@/assets/images/sections/impact.png";
import imgInternship from "@/assets/images/sections/internship.png";
import imgStory from "@/assets/images/sections/story.png";
import imgEnergy from "@/assets/images/sections/energy.png";

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

const KIND_MAP: Record<SectionImageKind, { src: string; label: string; alt: string }> = {
  agriculture: { src: imgAgriculture, label: "Field & farmers", alt: "Smallholder farmers inspecting crops at golden hour" },
  "circular-economy": { src: imgCircular, label: "Circular economy", alt: "Workers sorting recyclable materials in a recovery facility" },
  "digital-tools": { src: imgDigital, label: "Digital tools", alt: "Field officers collaborating on a laptop and smartphone" },
  data: { src: imgData, label: "Indicators & data", alt: "Open laptop with analytics on a clean desk" },
  team: { src: imgTeam, label: "Team & people", alt: "Diverse non-profit team collaborating around a laptop" },
  community: { src: imgCommunity, label: "Communities", alt: "Rural community gathering under a shade tree" },
  global: { src: imgGlobal, label: "Where we work", alt: "Wooden globe on a desk with a passport and notebook" },
  partnership: { src: imgPartnership, label: "Partners", alt: "Cooperative leader and program officer co-designing on a sticky-note wall" },
  report: { src: imgReport, label: "Reports & proposals", alt: "Stack of bound annual reports on a wooden desk" },
  education: { src: imgEducation, label: "Capacity building", alt: "Adult training session with learners and a trainer" },
  governance: { src: imgGovernance, label: "Governance", alt: "Quiet modern boardroom with empty chairs around a long table" },
  donor: { src: imgDonor, label: "Donors & funding", alt: "Cooperative member handing a basket of vegetables in a courtyard" },
  services: { src: imgServices, label: "Services", alt: "Consultants presenting analytics to clients in a meeting" },
  publications: { src: imgPublications, label: "Publications", alt: "Open academic journal on a library desk" },
  dataset: { src: imgDataset, label: "Open data", alt: "Monitor displaying abstract data tiles on a clean desk" },
  newsletter: { src: imgNewsletter, label: "Newsletter", alt: "Folded printed newsletter beside a coffee cup" },
  field: { src: imgField, label: "On the ground", alt: "Field officers walking through a rural village path" },
  impact: { src: imgImpact, label: "Impact", alt: "Young agri-entrepreneur in front of her newly opened storefront" },
  internship: { src: imgInternship, label: "Internships", alt: "Young interns collaborating on laptops at a shared desk" },
  story: { src: imgStory, label: "Story", alt: "Photo-essay flat lay of field photographs and notebook" },
  energy: { src: imgEnergy, label: "Clean energy", alt: "Community solar mini-grid being inspected by a technician" },
};

type Props = {
  kind: SectionImageKind;
  caption?: string;
  aspect?: "16/9" | "16/10" | "4/3" | "1/1" | "3/2";
  className?: string;
  rounded?: string;
  /** Treat as decorative — hidden from assistive tech. Defaults to false now that real images are used. */
  decorative?: boolean;
  /** Show the small caption pill overlay. Defaults to true. */
  showCaption?: boolean;
};

export function SectionImage({
  kind,
  caption,
  aspect = "16/9",
  className = "",
  rounded = "rounded-2xl",
  decorative = false,
  showCaption = true,
}: Props) {
  const cfg = KIND_MAP[kind] ?? KIND_MAP.story;
  const { src, label, alt } = cfg;

  return (
    <figure
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: aspect }}
      {...(decorative ? { "aria-hidden": true, role: "presentation" } : {})}
    >
      <img
        src={src}
        alt={decorative ? "" : alt}
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
              {caption ?? label}
            </span>
          </figcaption>
        </>
      )}
    </figure>
  );
}
