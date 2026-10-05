import { useEffect } from "react";
import { Link } from "wouter";
import {
  Leaf,
  Users,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Recycle,
  HeartHandshake,
  Handshake,
  Compass,
  BookOpen,
  Heart,
  Zap,
  GraduationCap,
  Building2,
  Landmark,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { photoProps, type PhotoSlot } from "@/lib/photos";
import { T, useTT } from "@/lib/i18n";
import logoMcGill from "@/assets/images/logos/mcgill.png";
import logoSEKU from "@/assets/images/logos/seku.png";
import logoICGLR from "@/assets/images/logos/icglr.png";
import logoAUDA from "@/assets/images/logos/auda-nepad.png";
import logoRCID from "@/assets/images/logos/rcid.png";
import photoLeonard from "@/assets/images/experts/leonard_nkunzimana.jpg";
import photoBrigitte from "@/assets/images/experts/brigitte_blais.jpg";
import photoJoseph from "@/assets/images/experts/joseph_nzomoi.jpg";
import photoTekalign from "@/assets/images/experts/tekalign_gutu.jpg";
import photoBibhash from "@/assets/images/experts/bibhash_das.jpg";
import photoOlivier from "@/assets/images/experts/olivier_furaha.png";
import photoDivine from "@/assets/images/experts/divine_mugisha.jpg";

const SUB_TO_SECTION: Record<string, string> = {
  "who-we-are": "",
  story: "story",
  mission: "mission",
  vision: "mission",
  programs: "programs",
  approach: "approach",
  leadership: "leadership",
  experts: "experts",
  partners: "partners",
  partnerships: "partners",
};

export default function AboutPage({ params }: { params?: { sub?: string } }) {
  const sub = params?.sub;
  const tt = useTT();

  useEffect(() => {
    document.title = tt(
      "About SAICE & IFSS — Mission, programs, partnerships, experts",
      "À propos de SAICE et IFSS — Mission, programmes, partenariats, experts",
    );
  }, [tt]);

  useEffect(() => {
    if (!sub) return;
    const target = SUB_TO_SECTION[sub];
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [sub]);

  const values = [
    { t: tt("Solidarity", "Solidarité"), d: tt("We work with partners, with equal voice in design and ownership.", "Nous travaillons avec les partenaires, à voix égale dans la conception et la gouvernance.") },
    { t: tt("Inclusion", "Inclusion"), d: tt("GEDSI is built in from day one.", "Le GEDSI est intégré dès le premier jour.") },
    { t: tt("Stewardship", "Intendance"), d: tt("Communities own the data. The public owns the code.", "Les communautés possèdent les données. Le public possède le code.") },
    { t: tt("Open knowledge", "Savoir ouvert"), d: tt("We publish our learning in plain and local languages.", "Nous publions nos apprentissages en langage clair et en langues locales.") },
    { t: tt("Local ownership", "Appropriation locale"), d: tt("Users can operate and improve every tool we build.", "Les utilisateurs peuvent exploiter et améliorer chacun de nos outils.") },
    { t: tt("Accountability", "Reddition de comptes"), d: tt("Donor-grade transparency — audited financials, independent evaluations, public indicators.", "Une transparence de niveau bailleur — comptes audités, évaluations indépendantes, indicateurs publics.") },
  ];

  const programs = [
    {
      photo: "about.track.pages" as PhotoSlot,
      eyebrow: tt("Track 1 · Agri-intelligence", "Volet 1 · Agri-intelligence"),
      title: "PAGES",
      subtitle: tt("Precision Agriculture for Green Economy and Sustainability", "Agriculture de précision pour une économie verte et durable"),
      stats: tt("5,000 agri-SMEs · ~100,000 farmers · 60% women, 40% youth · 4 countries", "5 000 PME agricoles · ~100 000 agriculteurs et agricultrices · 60 % de femmes, 40 % de jeunes · 4 pays"),
      body: tt("Three connected tools — Smart Market Matchmaker, IoT Precision Insight Engine, and ERP Finance & Inventory Tracker — that help small agri-businesses sell better, decide better, and qualify for finance.", "Trois outils connectés — Smart Market Matchmaker, IoT Precision Insight Engine et ERP Finance & Inventory Tracker — qui aident les petites entreprises agricoles à mieux vendre, mieux décider et accéder au financement."),
      href: "/programs/pages",
      cta: tt("Learn more", "En savoir plus"),
      Icon: Leaf,
    },
    {
      photo: "about.track.ices" as PhotoSlot,
      eyebrow: tt("Track 2 · Circular economy", "Volet 2 · Économie circulaire"),
      title: "ICES",
      subtitle: tt("Initiative for Circular Economy and Sustainability", "Initiative pour l'économie circulaire et la durabilité"),
      stats: tt("6 tools · CH₄ and CO₂ reductions · Youth & women-led cooperatives · Togo pilots", "6 outils · Réductions de CH₄ et CO₂ · Coopératives portées par les jeunes et les femmes · Pilotes au Togo"),
      body: tt("IoT smart bins, AI sorting, RFID asset tracking, mobile apps, analytics and an ML carbon calculator — turning municipal and agri-waste into livelihoods and verified climate finance.", "Bacs intelligents IoT, tri par IA, suivi RFID des actifs, applications mobiles, analytique et calculateur carbone ML — transformer les déchets municipaux et agricoles en moyens de subsistance et en finance climat vérifiée."),
      href: "/programs/ices",
      cta: tt("Learn more", "En savoir plus"),
      Icon: Recycle,
    },
    {
      photo: "about.track.paces" as PhotoSlot,
      eyebrow: tt("Track 3 · Sustainable energy", "Volet 3 · Énergie durable"),
      title: "PACES",
      subtitle: tt("Programs for Accessible Clean Energy and Sustainability", "Programmes pour une énergie propre, accessible et durable"),
      stats: tt("Solar mini-grids · Productive-use solar · Biogas from ICES waste · E-mobility", "Mini-réseaux solaires · Solaire à usage productif · Biogaz issu des déchets ICES · Mobilité électrique"),
      body: tt("Reliable, affordable clean energy for the cooperatives, municipalities and agri-SMEs that PAGES and ICES already serve — powering cold-chain, irrigation, collection routes and waste-to-energy.", "Une énergie propre, fiable et abordable pour les coopératives, municipalités et PME agricoles que PAGES et ICES desservent déjà — alimentant chaîne du froid, irrigation, tournées de collecte et valorisation énergétique des déchets."),
      href: "/programs/paces",
      cta: tt("Learn more", "En savoir plus"),
      Icon: Zap,
    },
  ];

  const partners: {
    name: string;
    logo: string | null;
    role: string;
    Icon: typeof GraduationCap;
    kind: string;
  }[] = [
    { name: "McGill University", logo: logoMcGill, role: tt("Academic anchor in Canada — capstone teams, research collaboration and graduate placements.", "Ancrage universitaire au Canada — équipes capstone, collaboration de recherche et placements aux cycles supérieurs."), Icon: GraduationCap, kind: tt("Academic · Canada", "Universitaire · Canada") },
    { name: "RCID — Rwanda", logo: logoRCID, role: tt("Country lead for PAGES pilots with cooperatives across Rwanda's Eastern and Southern provinces.", "Chef de file pays pour les pilotes PAGES avec des coopératives dans les provinces de l'Est et du Sud du Rwanda."), Icon: Landmark, kind: tt("Implementation · Rwanda", "Mise en œuvre · Rwanda") },
    { name: "South Eastern Kenya University", logo: logoSEKU, role: tt("Research partner on agri-intelligence pilots and farmer-extension protocols in Kenya.", "Partenaire de recherche sur les pilotes d'agri-intelligence et les protocoles de vulgarisation agricole au Kenya."), Icon: GraduationCap, kind: tt("Academic · Kenya", "Universitaire · Kenya") },
    { name: "Terre des Jeunes Togo", logo: null, role: tt("Youth-led implementation partner for ICES circular-economy pilots in Lomé.", "Partenaire de mise en œuvre porté par les jeunes pour les pilotes d'économie circulaire ICES à Lomé."), Icon: HeartHandshake, kind: tt("Implementation · Togo", "Mise en œuvre · Togo") },
    { name: "Ripen", logo: null, role: tt("Technology partner on smart-bin telemetry, AI sorting and the carbon-calculator backbone.", "Partenaire technologique sur la télémétrie des bacs intelligents, le tri par IA et la dorsale du calculateur carbone."), Icon: Building2, kind: tt("Technology", "Technologie") },
    { name: "ICGLR", logo: logoICGLR, role: tt("Regional policy alignment across the Great Lakes — peace, security and shared natural resources.", "Alignement des politiques régionales dans les Grands Lacs — paix, sécurité et ressources naturelles partagées."), Icon: Globe2, kind: tt("Policy · Regional", "Politiques · Régional") },
    { name: "AUDA-NEPAD", logo: logoAUDA, role: tt("Continental alignment — CAADP, AU Agenda 2063 and the African AI Strategy.", "Alignement continental — CAADP, Agenda 2063 de l'UA et Stratégie africaine sur l'IA."), Icon: Globe2, kind: tt("Policy · Continental", "Politiques · Continental") },
  ];

  const executiveTeam = [
    {
      name: "Leonard Nkunzimana",
      initials: "LN",
      photo: photoLeonard,
      role: tt("Chief Executive Officer", "Directeur général"),
      credentials: tt("Advanced Masters, Development Management & Evaluation, University of Antwerp", "Maîtrise avancée en gestion et évaluation du développement, Université d'Anvers"),
      bio: tt("IFSS Inc. CEO since 2022. 15+ years in international cooperation, program management and evaluation, including University of Burundi and Trade & Market Research Advisor at WUSC / AICC. Research scholar, Arizona State University. Works in English, French and African languages.", "Directeur général d'IFSS Inc. depuis 2022. Plus de 15 ans en coopération internationale, gestion et évaluation de programmes, notamment à l'Université du Burundi et comme conseiller en recherche commerciale et de marché à l'EUMC / AICC. Chercheur, Arizona State University. Travaille en anglais, français et langues africaines."),
    },
    {
      name: "Bibhash Das",
      initials: "BD",
      photo: photoBibhash,
      role: tt("Head of Programs", "Responsable des programmes"),
      credentials: "MBA (TMU) · M.Sc. Wind Power (Uppsala) · B.Tech. (MNIT Jaipur)",
      bio: tt("Based in Quebec City. Over a decade in wind, solar and building efficiency on three continents: solar thermal for industrial steam, wind owner's engineering in Europe, renewable-energy policy in India. Integrates analytics and AI into sustainability for NGOs and institutions.", "Établi à Québec. Plus d'une décennie en éolien, solaire et efficacité des bâtiments sur trois continents : solaire thermique pour vapeur industrielle, ingénierie de propriétaire éolien en Europe, politique des énergies renouvelables en Inde. Intègre l'analytique et l'IA à la durabilité pour les ONG et institutions."),
    },
    {
      name: "Divine Mugisha",
      initials: "DM",
      photo: photoDivine,
      role: tt("Lead — Operations & Coordination", "Responsable — Opérations et coordination"),
      credentials: tt("Master's, Business Management", "Maîtrise en gestion d'entreprise"),
      bio: tt("Administration, project coordination and organisational management in grassroots and international NGOs. Supports gender equality and youth innovation, helping young women lead community solutions. Bilingual French–English.", "Administration, coordination de projets et gestion organisationnelle dans des ONG locales et internationales. Soutient l'égalité de genre et l'innovation jeunesse, aidant les jeunes femmes à mener des solutions communautaires. Bilingue français-anglais."),
    },
  ];

  const affiliatedExperts = [
    {
      name: "Brigitte Blais",
      initials: "BB",
      photo: photoBrigitte,
      role: tt("Expert — Environment & Climate", "Experte — Environnement et climat"),
      credentials: "B. STS, DGE-GES, ISSP-SEA",
      bio: tt("Around 30 years in environmental communications and analysis before energy regulators. Second-cycle diplomas in Sustainable Carbon Management and Environmental Management. Supports organisations' climate action and sustainable development.", "Près de 30 ans en communications et analyses environnementales devant les régulateurs de l'énergie. Diplômes de deuxième cycle en gestion durable du carbone et de l'environnement. Soutient l'action climatique et le développement durable des organisations."),
    },
    {
      name: "Joseph Nzomoi",
      initials: "JN",
      photo: photoJoseph,
      role: tt("Expert — Agricultural Economics", "Expert — Économie agricole"),
      credentials: tt("PhD, Senior Economist & Policy Advisor", "Ph. D., économiste principal et conseiller en politiques"),
      bio: tt("20+ years in agricultural and economic policy, international trade, export promotion, project planning, capacity building and food security. Senior roles in Kenya, Uganda and Rwanda; projects in Tanzania and Burundi. Full Member, UNWTO World Committee on Tourism Ethics since 2023.", "Plus de 20 ans en politique agricole et économique, commerce international, promotion des exportations, planification de projets, renforcement des capacités et sécurité alimentaire. Postes de haut niveau au Kenya, en Ouganda et au Rwanda ; projets en Tanzanie et au Burundi. Membre titulaire du Comité mondial d'éthique du tourisme de l'OMT depuis 2023."),
    },
    {
      name: "Tekalign Gutu Sakketa",
      initials: "TG",
      photo: photoTekalign,
      role: tt("Expert — Development Economics", "Expert — Économie du développement"),
      credentials: tt("PhD, Bonn University · Postdoctoral Researcher, ZEF", "Ph. D., Université de Bonn · Chercheur postdoctoral, ZEF"),
      bio: tt("Postdoctoral researcher, Center for Development Research (ZEF), Bonn University. PhD in Development Economics: youth, well-being and employment. Two M.Sc. degrees (Haramaya; Antwerp). Former IFPRI research officer. Focus: social protection, trade, food systems and conflict-affected labour markets.", "Chercheur postdoctoral, Center for Development Research (ZEF), Université de Bonn. Ph. D. en économie du développement : jeunesse, bien-être et emploi. Deux M. Sc. (Haramaya ; Anvers). Ancien chargé de recherche à l'IFPRI. Domaines : protection sociale, commerce, systèmes alimentaires et marchés du travail en contexte de conflit."),
    },
    {
      name: "Olivier Furaha",
      initials: "OF",
      photo: photoOlivier,
      role: tt("Expert — Rural & Agri-Business", "Expert — Monde rural et agro-entreprise"),
      credentials: tt("Postgraduate, International Agriculture", "Études supérieures en agriculture internationale"),
      bio: tt("15+ years in project management, planning, agri-business and advisory in Rwanda's public and private sectors. Twice World Bank Project Coordinator (Ministry of Agriculture; Ministry of Public Service and Labour). Grassroots experience: community development and MSME enabling-environment strategy.", "Plus de 15 ans en gestion de projets, planification, agro-entreprise et conseil dans les secteurs public et privé du Rwanda. Deux fois coordonnateur de projet à la Banque mondiale (ministère de l'Agriculture ; ministère de la Fonction publique et du Travail). Expérience de terrain : développement communautaire et stratégie d'environnement propice aux MPME."),
    },
  ];

  const renderPersonCard = (e: { name: string; initials: string; photo?: string; role: string; credentials?: string; bio: string }) => (
    <article
      key={e.name}
      className="rounded-2xl border border-foreground/10 bg-card p-6 flex flex-col"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-accent/15 flex-shrink-0">
          {e.photo ? (
            <img
              src={e.photo}
              alt={e.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-accent font-serif text-xl font-semibold">
              {e.initials}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-semibold leading-tight text-foreground">
            {e.name}
          </h3>
          <p className="text-sm text-accent font-semibold mt-0.5">{e.role}</p>
        </div>
      </div>
      {e.credentials && (
        <p className="text-xs text-foreground/55 mb-3 leading-relaxed">{e.credentials}</p>
      )}
      <p className="text-sm text-foreground/75 leading-relaxed flex-1">{e.bio}</p>
    </article>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={tt("One organisation.", "Une organisation.")}
        italic={tt("Two arms. One mission.", "Deux bras. Une mission.")}
        description={tt(
          "SAICE, a Canadian registered charity, holds the mission, tools and grants. Its operating arm, IFSS Inc., delivers paid services and returns revenue to the mission.",
          "SAICE, organisme de bienfaisance enregistré au Canada, porte la mission, les outils et les subventions. Son bras opérationnel, IFSS Inc., livre des services payants et reverse les revenus à la mission.",
        )}
        crumbs={[{ label: tt("About", "À propos") }]}
        photo="about.hero"
      />

      {/* 2 — Story · Mission · Vision (text one side, image the other) */}
      <section id="story" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Text column */}
            <div className="space-y-12 md:space-y-14">
              {/* Story */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                  <T en="Our story" fr="Notre histoire" />
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
                  <T
                    en={<>A decade of field work, a new <span className="display-italic">charter for impact.</span></>}
                    fr={<>Une décennie de travail de terrain, une nouvelle <span className="display-italic">charte pour l'impact.</span></>}
                  />
                </h2>
                <p className="text-foreground/75 leading-relaxed text-lg mb-4">
                  <T
                    en="Founded in Canada a decade ago, IFSS Inc. supports governments, cooperatives and UN agencies on ESG, agri value chains and digital transformation in Africa, Europe and North America."
                    fr="Fondée au Canada il y a une décennie, IFSS Inc. accompagne gouvernements, coopératives et agences de l'ONU sur l'ESG, les chaînes de valeur agricoles et la transformation numérique en Afrique, Europe et Amérique du Nord."
                  />
                </p>
                <p className="text-foreground/75 leading-relaxed text-lg">
                  <T
                    en={<>Our 2026 McGill pilot in Rwanda led us to found <strong className="text-foreground">SAICE</strong>, a Canadian registered charity holding the mission, tools and grants. IFSS Inc. remains the operating arm.</>}
                    fr={<>Notre pilote McGill au Rwanda en 2026 nous a conduits à fonder <strong className="text-foreground">SAICE</strong>, organisme de bienfaisance enregistré au Canada portant la mission, les outils et les subventions. IFSS Inc. reste le bras opérationnel.</>}
                  />
                </p>
              </div>

              {/* Mission */}
              <div id="mission" className="scroll-mt-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                  <T en="Mission" fr="Mission" />
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-[1.25] mb-4">
                  <T
                    en={<>Open digital public goods that help African agri-SMEs and circular-economy organisations <span className="display-italic">earn more, decide better, and resist shocks.</span></>}
                    fr={<>Des biens publics numériques ouverts qui aident les PME agricoles africaines et les organisations de l'économie circulaire à <span className="display-italic">mieux gagner, mieux décider et résister aux chocs.</span></>}
                  />
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <T
                    en="Women, youth, ex-combatants and people with disabilities are central decision-makers, not a separate track."
                    fr="Femmes, jeunes, anciens combattants et personnes en situation de handicap sont au cœur des décisions, pas dans un volet à part."
                  />
                </p>
              </div>

              {/* Vision */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                  <T en="Vision" fr="Vision" />
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-[1.25] mb-4">
                  <T
                    en={<>Across the Great Lakes and Africa's food and waste systems, every small business can <span className="display-italic">grow on its own terms.</span></>}
                    fr={<>Dans les Grands Lacs et les systèmes alimentaires et de déchets africains, chaque petite entreprise peut <span className="display-italic">grandir à ses propres conditions.</span></>}
                  />
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  <T
                    en="Community-owned tools. Local knowledge alongside research data. Climate finance for the people doing the work."
                    fr="Des outils détenus par les communautés. Le savoir local aux côtés des données de recherche. La finance climat pour les acteurs de terrain."
                  />
                </p>
              </div>

              {/* Values */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-6">
                  <T en="Our values" fr="Nos valeurs" />
                </p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  {values.map((v) => (
                    <div key={v.t} className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1.5" strokeWidth={2} />
                      <div>
                        <p className="font-serif font-semibold text-foreground">{v.t}</p>
                        <p className="text-sm text-foreground/70 leading-relaxed mt-0.5">{v.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image column — matches text height on desktop */}
            <figure className="relative overflow-hidden rounded-3xl w-full h-full min-h-[28rem] aspect-[4/5] lg:aspect-auto">
              <img
                {...photoProps("about.mission", tt)}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 4 — Programs (full image cards, matching home) */}
      <section id="programs" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4">
          <div className="mb-12 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
              <T en="Our programs" fr="Nos programmes" />
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Three flagship programs, <span className="display-italic">one shared backbone.</span></>}
                fr={<>Trois programmes phares, <span className="display-italic">une dorsale commune.</span></>}
              />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              { eyebrow: tt("Track 1 · Agri-intelligence", "Volet 1 · Agri-intelligence"), title: "PAGES", line: tt("Precision agriculture and market access for small farms and cooperatives.", "Agriculture de précision et accès aux marchés pour petites exploitations et coopératives."), photo: "about.track.pages" as PhotoSlot },
              { eyebrow: tt("Track 2 · Circular economy", "Volet 2 · Économie circulaire"), title: "ICES", line: tt("Turning municipal and agri-waste into livelihoods and verified climate finance.", "Transformer les déchets municipaux et agricoles en moyens de subsistance et en finance climat vérifiée."), photo: "about.track.ices" as PhotoSlot },
              { eyebrow: tt("Track 3 · Sustainable energy", "Volet 3 · Énergie durable"), title: "PACES", line: tt("Solar mini-grids and productive-use clean energy powering the work above.", "Mini-réseaux solaires et énergie propre à usage productif qui alimentent les programmes ci-dessus."), photo: "about.track.paces" as PhotoSlot },
            ].map((p) => (
              <div key={p.title} className="flex flex-col">
                <figure className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                  <img
                    {...photoProps(p.photo, tt)}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className="border-l border-accent/30 pl-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
                    {p.eyebrow}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="text-foreground/75 leading-relaxed">{p.line}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-accent transition-colors"
          >
            <T en="Explore all programs" fr="Découvrir tous les programmes" />
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* 5 — Partnerships (detailed) */}
      <section id="partners" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4">
          {/* Image left · heading + partner cards with logos right */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <figure className="lg:col-span-7 relative overflow-hidden rounded-3xl min-h-[520px] lg:min-h-[760px]">
              <img
                {...photoProps("about.partners", tt)}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="lg:col-span-5 flex flex-col">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
                <T en="Partnerships" fr="Partenariats" />
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05] mb-4">
                <T
                  en={<>Equal partnership, <span className="display-italic">across borders.</span></>}
                  fr={<>Un partenariat d'égal à égal, <span className="display-italic">par-delà les frontières.</span></>}
                />
              </h2>
              <p className="text-foreground/75 leading-relaxed text-sm md:text-base mb-6">
                <T
                  en="Canada-based, partnering with universities, ministries, cooperatives and NGOs in Rwanda, Kenya, Burundi, DRC and Togo, and research and funding collaborators in Europe."
                  fr="Basés au Canada, partenaires d'universités, ministères, coopératives et ONG au Rwanda, Kenya, Burundi, en RDC et au Togo, et de collaborateurs de recherche et de financement en Europe."
                />
              </p>
              <div className="grid grid-cols-2 gap-3 flex-1 auto-rows-fr">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-xl bg-card border border-foreground/10 p-4 flex flex-col"
                  >
                    <div className="h-20 flex items-center justify-start mb-4">
                      {p.logo ? (
                        <img
                          src={p.logo}
                          alt={p.name}
                          className="max-h-full max-w-[80%] object-contain object-left"
                          loading="lazy"
                        />
                      ) : (
                        <p.Icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
                      )}
                    </div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-foreground/55 mb-1.5">
                      {p.kind}
                    </p>
                    <h3 className="font-serif text-sm font-semibold text-foreground leading-snug">{p.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6 — Governance & approach (merged, NGO-standard) */}
      <section id="approach" className="py-20 md:py-24 scroll-mt-32">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
            <div className="lg:col-span-5 flex flex-col">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
                <T en="Governance" fr="Gouvernance" />
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-5">
                <T
                  en={<>Led with care. <span className="display-italic">Run with integrity.</span></>}
                  fr={<>Dirigée avec soin. <span className="display-italic">Gérée avec intégrité.</span></>}
                />
              </h2>
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg mb-8">
                <T en="Trust starts with how we are run." fr="La confiance commence par notre gestion." />
              </p>
              <ul className="space-y-5 mb-6">
                {[
                  { t: tt("Communities first", "Les communautés d'abord"), d: tt("Every decision must serve the people we exist for.", "Chaque décision doit servir les personnes pour qui nous existons.") },
                  { t: tt("Independent, but close", "Indépendants, mais proches"), d: tt("Our board answers to no single funder or partner and stays close to fieldwork.", "Notre conseil ne répond à aucun bailleur ni partenaire unique et reste proche du terrain.") },
                  { t: tt("Diversity by design", "Diversité par conception"), d: tt("African, diaspora, women and youth voices share every decision-making table.", "Voix africaines, diaspora, femmes et jeunes participent à toutes les instances de décision.") },
                  { t: tt("Open by default", "Ouvert par défaut"), d: tt("Statutes, board, policies and audited accounts are public. Confidentiality is the exception.", "Statuts, conseil, politiques et comptes audités sont publics. La confidentialité est l'exception.") },
                  { t: tt("Accountability that bites", "Une reddition de comptes qui a des dents"), d: tt("Conflicts are declared. Concerns are heard. Mistakes are documented and corrected.", "Les conflits sont déclarés. Les préoccupations sont entendues. Les erreurs sont documentées et corrigées.") },
                ].map((p) => (
                  <li key={p.t} className="flex items-start gap-4">
                    <span className="mt-2 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <div>
                      <p className="font-serif text-lg font-semibold text-foreground leading-snug">{p.t}</p>
                      <p className="text-sm md:text-base text-foreground/70 leading-relaxed mt-1">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-foreground/10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-3">
                  <T en="Our board" fr="Notre conseil" />
                </p>
                <div className="max-w-lg">
                <p className="text-foreground/75 leading-relaxed text-base md:text-lg mb-6">
                  <T en="7–11 mostly independent directors, with reserved seats for women, African leaders, diaspora and youth." fr="7 à 11 administrateurs, majoritairement indépendants, avec des sièges réservés aux femmes, leaders africains, diaspora et jeunes." />
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: "7–11", l: tt("Directors", "Administrateurs") },
                    { n: "50%+", l: tt("Women", "Femmes") },
                    { n: "50%+", l: tt("Africa & diaspora", "Afrique et diaspora") },
                    { n: "1+", l: tt("Youth seat", "Siège jeunesse") },
                  ].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-foreground/10 bg-card p-4">
                      <p className="font-serif text-2xl md:text-3xl font-semibold text-accent leading-none mb-1.5">{s.n}</p>
                      <p className="text-xs text-foreground/70 leading-snug">{s.l}</p>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
            <figure className="lg:col-span-7 relative overflow-hidden rounded-3xl min-h-[520px] lg:min-h-0">
              <img
                {...photoProps("about.governance", tt)}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>

        </div>
      </section>

      <section id="experts" className="py-20 md:py-24 bg-card/40 scroll-mt-32">
        <div className="container px-4">
          <div className="max-w-3xl mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
              <T en="SAICE executive team" fr="Équipe de direction de SAICE" />
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
              <T
                en={<>The team running <span className="display-italic">the charity.</span></>}
                fr={<>L'équipe qui dirige <span className="display-italic">l'organisme.</span></>}
              />
            </h2>
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              <T
                en="SAICE's executive team sets strategy, signs partnerships and answers for programs at Canada HQ and partner sites."
                fr="La direction de SAICE mène la stratégie et signe les partenariats. Elle répond des programmes au siège canadien et sur les sites partenaires."
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {executiveTeam.map(renderPersonCard)}
          </div>

          <div className="max-w-3xl mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
              <T en="Affiliated experts" fr="Experts affiliés" />
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
              <T
                en={<>Specialists affiliated <span className="display-italic">with SAICE.</span></>}
                fr={<>Des spécialistes affiliés <span className="display-italic">à SAICE.</span></>}
              />
            </h2>
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              <T
                en="Specialists from universities, research centres and country partners in Canada, Africa, Europe and Asia apply our research with cooperatives, ministries and donors."
                fr="Des spécialistes d'universités, centres de recherche et partenaires nationaux au Canada, en Afrique, Europe et Asie appliquent notre recherche avec les coopératives, ministères et bailleurs."
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {affiliatedExperts.map(renderPersonCard)}
          </div>
        </div>
      </section>

      {/* 9 — Get involved (matches home) */}
      <section className="py-20 md:py-24 bg-background text-foreground">
        <div className="container px-4">
          <div className="mb-14 max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/55 mb-4">
              <T en="Work with us" fr="Travailler avec nous" />
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              <T
                en={<>Three ways to <span className="display-italic">get involved.</span></>}
                fr={<>Trois façons de <span className="display-italic">s'impliquer.</span></>}
              />
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: HeartHandshake,
                t: tt("Donate to SAICE", "Faire un don à SAICE"),
                d: tt("Canadian registered charity. Gifts fund programs, not overheads.", "Organisme de bienfaisance enregistré au Canada. Les dons financent les programmes, pas les frais généraux."),
                photo: "about.involve.donate" as PhotoSlot,
              },
              {
                Icon: Handshake,
                t: tt("Partner with us", "Devenir partenaire"),
                d: tt("Universities, ministries, cooperatives, donors, technology providers — let's design what's next.", "Universités, ministères, coopératives, bailleurs, fournisseurs de technologie — concevons la suite ensemble."),
                photo: "about.involve.partner" as PhotoSlot,
              },
              {
                Icon: Building2,
                t: tt("Hire IFSS Inc.", "Mandater IFSS Inc."),
                d: tt("ESG advisory, agri value-chain TA, digital transformation, MEAL design, proposal development.", "Conseil ESG, AT en chaînes de valeur agricoles, transformation numérique, conception MEAL, montage de propositions."),
                photo: "about.involve.hire" as PhotoSlot,
              },
            ].map(({ Icon, t, d, photo }) => (
              <div key={t} className="flex flex-col rounded-3xl bg-card border border-foreground/10 overflow-hidden">
                <figure className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    {...photoProps(photo, tt)}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className="flex flex-col p-8 md:p-10">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-tight leading-tight mb-3">{t}</h3>
                  <p className="text-base md:text-lg text-foreground/75 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/get-involved"
              className="group inline-flex items-center gap-3 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              <T en="Get involved" fr="S'impliquer" />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
