import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";

export type Lang = "en" | "fr";

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.about": "About",
  "nav.programs": "Programs",
  "nav.services": "Our services",
  "nav.impact": "Impact",
  "nav.resources": "Resources",
  "nav.getInvolved": "Get Involved",
  "nav.toggleMenu": "Toggle menu",

  // Programs dropdown
  "programs.pages.desc": "Precision Agriculture for Green Economy and Sustainability",
  "programs.ices.desc": "Initiative for Circular Economy and Sustainability",
  "programs.paces.desc": "Programs for Accessible Clean Energy and Sustainability",

  // Services dropdown
  "services.pages.label": "Agri-intelligence",
  "services.pages.desc": "Services for PAGES — cooperative diagnostics, market matchmaking, IoT and bankable plans.",
  "services.ices.label": "Circular economy",
  "services.ices.desc": "Services for ICES — waste audits, smart bins, MRV-grade carbon and cooperative incubation.",
  "services.paces.label": "Sustainable energy",
  "services.paces.desc": "Services for PACES — mini-grid feasibility, productive-use design, climate finance and M&E.",
  "services.digital.label": "Digital Tools Hub",
  "services.digital.desc": "Our cross-program Notion workspace — opens in a new tab.",

  // Footer columns
  "footer.col.organisation": "Organisation",
  "footer.col.work": "Work",
  "footer.col.engage": "Engage",
  "footer.col.resources": "Resources",

  // Footer links
  "footer.link.about": "About",
  "footer.link.whereWeWork": "Where we work",
  "footer.link.news": "News",
  "footer.link.programs": "Programs",
  "footer.link.services": "Our services",
  "footer.link.impact": "Impact",
  "footer.link.getInvolved": "Get involved",
  "footer.link.contact": "Contact",
  "footer.link.resources": "Resources",
  "footer.link.newsletter": "Newsletter",

  // Footer brand / bottom
  "footer.tagline": "Dignity. Prosperity. Resilience.",
  "footer.copyright": "© 2026 SAICE (SAIEC en français). IFSS Inc. (Invest for Solidarity and Sustainable Development Inc.) is incorporated in Canada (2023). SAICE charity registration pending.",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",

  // Explore section
  "explore.eyebrow": "Explore",
  "explore.prev": "Previous",
  "explore.next": "Next",
  "explore.goToPage": "Go to page",

  "explore.tools.label": "Tools",
  "explore.tools.title": "PAGES precision agronomy",
  "explore.tools.desc": "Field-ready advisory tools built with cooperatives in Rwanda and Kenya.",
  "explore.programs.label": "Programs",
  "explore.programs.title": "ICES circular economy",
  "explore.programs.desc": "Youth-led waste, water, and reuse pilots starting in Togo.",
  "explore.impact.label": "Impact",
  "explore.impact.title": "Indicators and audits",
  "explore.impact.desc": "Independent evaluations and field data, published openly.",
  "explore.publications.label": "Publications",
  "explore.publications.title": "Open research library",
  "explore.publications.desc": "Reports, datasets, and code releases from our team and partners.",
  "explore.grants.label": "Grants & partners",
  "explore.grants.title": "Co-fund a deployment",
  "explore.grants.desc": "How donors, foundations, and ministries can underwrite a country rollout.",
  "explore.community.label": "Community",
  "explore.community.title": "Volunteer & intern",
  "explore.community.desc": "Researchers, agronomists, and students working alongside our teams.",

  // Lang toggle
  "lang.en": "EN",
  "lang.fr": "FR",
};

const fr: Dict = {
  // Nav
  "nav.about": "À propos",
  "nav.programs": "Programmes",
  "nav.services": "Nos services",
  "nav.impact": "Impact",
  "nav.resources": "Ressources",
  "nav.getInvolved": "S'impliquer",
  "nav.toggleMenu": "Ouvrir le menu",

  // Programs dropdown
  "programs.pages.desc": "Agriculture de précision pour une économie verte et durable",
  "programs.ices.desc": "Initiative pour l'économie circulaire et la durabilité",
  "programs.paces.desc": "Programmes pour une énergie propre et accessible",

  // Services dropdown
  "services.pages.label": "Agri-intelligence",
  "services.pages.desc": "Services pour PAGES — diagnostics coopératifs, mise en relation marchés, IoT et plans bancables.",
  "services.ices.label": "Économie circulaire",
  "services.ices.desc": "Services pour ICES — audits des déchets, bacs intelligents, carbone MRV et incubation coopérative.",
  "services.paces.label": "Énergie durable",
  "services.paces.desc": "Services pour PACES — faisabilité mini-réseaux, usages productifs, finance climat et suivi-évaluation.",
  "services.digital.label": "Espace outils numériques",
  "services.digital.desc": "Notre espace de travail Notion inter-programmes — s'ouvre dans un nouvel onglet.",

  // Footer columns
  "footer.col.organisation": "Organisation",
  "footer.col.work": "Activités",
  "footer.col.engage": "Engagement",
  "footer.col.resources": "Ressources",

  // Footer links
  "footer.link.about": "À propos",
  "footer.link.whereWeWork": "Où nous intervenons",
  "footer.link.news": "Actualités",
  "footer.link.programs": "Programmes",
  "footer.link.services": "Nos services",
  "footer.link.impact": "Impact",
  "footer.link.getInvolved": "S'impliquer",
  "footer.link.contact": "Nous contacter",
  "footer.link.resources": "Ressources",
  "footer.link.newsletter": "Infolettre",

  // Footer brand / bottom
  "footer.tagline": "Dignité. Prospérité. Résilience.",
  "footer.copyright": "© 2026 SAIEC (SAICE in English). IFSS Inc. (Investir pour la Solidarité et le Développement Durable Inc.) est constituée au Canada (2023). Enregistrement caritatif de SAIEC en cours.",
  "footer.privacy": "Confidentialité",
  "footer.terms": "Conditions",

  // Explore section
  "explore.eyebrow": "Explorer",
  "explore.prev": "Précédent",
  "explore.next": "Suivant",
  "explore.goToPage": "Aller à la page",

  "explore.tools.label": "Outils",
  "explore.tools.title": "Agronomie de précision PAGES",
  "explore.tools.desc": "Outils de conseil de terrain conçus avec des coopératives au Rwanda et au Kenya.",
  "explore.programs.label": "Programmes",
  "explore.programs.title": "Économie circulaire ICES",
  "explore.programs.desc": "Projets pilotes déchets, eau et réemploi portés par la jeunesse, à partir du Togo.",
  "explore.impact.label": "Impact",
  "explore.impact.title": "Indicateurs et audits",
  "explore.impact.desc": "Évaluations indépendantes et données de terrain, publiées en accès libre.",
  "explore.publications.label": "Publications",
  "explore.publications.title": "Bibliothèque de recherche ouverte",
  "explore.publications.desc": "Rapports, jeux de données et codes publiés par notre équipe et nos partenaires.",
  "explore.grants.label": "Bailleurs et partenaires",
  "explore.grants.title": "Co-financer un déploiement",
  "explore.grants.desc": "Comment bailleurs, fondations et ministères peuvent financer un déploiement national.",
  "explore.community.label": "Communauté",
  "explore.community.title": "Bénévoles et stagiaires",
  "explore.community.desc": "Chercheurs, agronomes et étudiants travaillant aux côtés de nos équipes.",

  // Lang toggle
  "lang.en": "EN",
  "lang.fr": "FR",
};

const dictionaries: Record<Lang, Dict> = { en, fr };

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "saice.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "fr" ? "fr" : "en";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      return dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
    },
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

export function LangSwitcher({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, setLang } = useLang();
  const activeClass = tone === "dark" ? "text-primary" : "text-primary-foreground";
  const inactiveClass = tone === "dark" ? "text-foreground/55 hover:text-primary" : "text-primary-foreground/55 hover:text-primary-foreground";
  const sepClass = tone === "dark" ? "opacity-40" : "opacity-40";
  return (
    <div className="flex items-center gap-1.5 text-xs font-semibold">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`transition-colors ${lang === "en" ? activeClass : inactiveClass}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className={sepClass}>/</span>
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={`transition-colors ${lang === "fr" ? activeClass : inactiveClass}`}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
    </div>
  );
}
