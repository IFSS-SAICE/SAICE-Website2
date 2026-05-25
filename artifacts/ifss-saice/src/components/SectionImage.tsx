import {
  Recycle,
  Cpu,
  BarChart3,
  Users,
  Sprout,
  Globe2,
  HeartHandshake,
  FileText,
  GraduationCap,
  Handshake,
  MapPinned,
  ShieldCheck,
  Coins,
  Briefcase,
  BookOpen,
  Database,
  LineChart,
  Mail,
  Camera,
  Zap,
  type LucideIcon,
} from "lucide-react";

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

const KIND_MAP: Record<
  SectionImageKind,
  { Icon: LucideIcon; label: string; from: string; to: string }
> = {
  agriculture: { Icon: Sprout, label: "Field & farmers", from: "#14532d", to: "#3f6212" },
  "circular-economy": { Icon: Recycle, label: "Circular economy", from: "#0f766e", to: "#15803d" },
  "digital-tools": { Icon: Cpu, label: "Digital tools", from: "#1e3a5f", to: "#2563eb" },
  data: { Icon: BarChart3, label: "Indicators & data", from: "#1f2937", to: "#0f766e" },
  team: { Icon: Users, label: "Team & people", from: "#1e3a5f", to: "#0f766e" },
  community: { Icon: HeartHandshake, label: "Communities", from: "#7c2d12", to: "#b45309" },
  global: { Icon: Globe2, label: "Where we work", from: "#1e3a5f", to: "#155e75" },
  partnership: { Icon: Handshake, label: "Partners", from: "#1e3a5f", to: "#15803d" },
  report: { Icon: FileText, label: "Reports & proposals", from: "#312e81", to: "#1e3a5f" },
  education: { Icon: GraduationCap, label: "Capacity building", from: "#0f3460", to: "#0f766e" },
  governance: { Icon: ShieldCheck, label: "Governance", from: "#1f2937", to: "#1e3a5f" },
  donor: { Icon: Coins, label: "Donors & funding", from: "#7c2d12", to: "#a16207" },
  services: { Icon: Briefcase, label: "Services", from: "#1e3a5f", to: "#334155" },
  publications: { Icon: BookOpen, label: "Publications", from: "#1f2937", to: "#0f3460" },
  dataset: { Icon: Database, label: "Open data", from: "#0f3460", to: "#0f766e" },
  newsletter: { Icon: Mail, label: "Newsletter", from: "#1e3a5f", to: "#0f766e" },
  field: { Icon: MapPinned, label: "On the ground", from: "#3f6212", to: "#14532d" },
  impact: { Icon: LineChart, label: "Impact", from: "#0f3460", to: "#15803d" },
  internship: { Icon: GraduationCap, label: "Internships", from: "#1e3a5f", to: "#2563eb" },
  story: { Icon: Camera, label: "Story", from: "#1f2937", to: "#0f766e" },
  energy: { Icon: Zap, label: "Clean energy", from: "#0f3460", to: "#ca8a04" },
};

type Props = {
  kind: SectionImageKind;
  caption?: string;
  aspect?: "16/9" | "16/10" | "4/3" | "1/1" | "3/2";
  className?: string;
  rounded?: string;
  /** Treat as decorative placeholder — hidden from assistive tech. Defaults to true. */
  decorative?: boolean;
};

export function SectionImage({
  kind,
  caption,
  aspect = "16/9",
  className = "",
  rounded = "rounded-2xl",
  decorative = true,
}: Props) {
  const cfg = KIND_MAP[kind] ?? KIND_MAP.story;
  const { Icon, label, from, to } = cfg;
  const a11y = decorative
    ? ({ "aria-hidden": true, role: "presentation" } as const)
    : ({} as const);

  return (
    <figure
      {...a11y}
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      />
      {/* Dotted pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Mint glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 78% 22%, hsl(154 55% 72% / 0.28), transparent 70%)",
        }}
      />
      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          aria-hidden="true"
          className="text-white/85"
          style={{ width: "clamp(56px, 18%, 120px)", height: "clamp(56px, 18%, 120px)" }}
          strokeWidth={1.25}
        />
      </div>
      {/* Caption */}
      <figcaption
        {...(decorative ? { "aria-hidden": true } : {})}
        className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between gap-3"
      >
        <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
          {caption ?? label}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
          Placeholder
        </span>
      </figcaption>
    </figure>
  );
}
