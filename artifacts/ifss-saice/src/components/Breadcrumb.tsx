import React from "react";
import { Link, useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import { useTT } from "@/lib/i18n";

const SLUG_FR: Record<string, string> = {
  about: "À propos",
  programs: "Programmes",
  services: "Services",
  impact: "Impact",
  resources: "Ressources",
  news: "Actualités",
  "where-we-work": "Où nous intervenons",
  "get-involved": "S'impliquer",
  partners: "Partenaires",
  governance: "Gouvernance",
  legal: "Mentions légales",
  pages: "PAGES",
  ices: "ICES",
  paces: "PACES",
  "digital-tools": "Outils numériques",
};

export function Breadcrumb() {
  const [location] = useLocation();
  const tt = useTT();
  const paths = location.split("/").filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav aria-label={tt("Breadcrumb", "Fil d'Ariane")} className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            {tt("Home", "Accueil")}
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;
          const enTitle = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
          const frTitle = SLUG_FR[path] ?? enTitle;
          const title = tt(enTitle, frTitle);

          return (
            <li key={path} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {title}
                </span>
              ) : (
                <Link href={href} className="hover:text-primary transition-colors">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
