/**
 * Central photo registry.
 *
 * Every editorial photo placement on the site has a stable slot ID below and
 * is assigned exactly one source photo. A source photo is never assigned to
 * more than one slot (checked at module load in dev). The same slot may be
 * rendered on several routes only when it is the same logical placement
 * (e.g. the shared footer "Explore" carousel) or the same placement in EN/FR.
 *
 * Sources:
 *  - "pexels:<id>"  real stock photograph from Pexels (https://www.pexels.com/photo/<id>/),
 *    file at src/assets/photos/<id>.jpg. Catalog: attached_assets/real-photography/catalog.json
 *    and attached_assets/real-photography/SOURCES.md.
 *    Additional sources: attached_assets/real-photography/additional-catalog.json.
 *
 * None of these photos document SAICE / IFSS staff, offices, projects or
 * beneficiaries; alt text describes what is visible only. Partner logos and
 * named team portraits are NOT managed here and remain unchanged.
 */

const files = import.meta.glob("../assets/photos/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function fileFor(source: string): string {
  const id = source.split(":")[1];
  const path = `../assets/photos/${id}.jpg`;
  const src = files[path];
  if (!src && import.meta.env.DEV) {
    console.error(`[photos] missing file for ${source} (${path})`);
  }
  return src ?? "";
}

type Entry = { source: string; en: string; fr: string };

export const PHOTO_REGISTRY = {
  // ── Shared footer "Explore" carousel (Layout) ─────────────────────────────
  "explore.agriculture": { source: "pexels:30269788", en: "A farmer standing alone in a lush green field under an overcast sky", fr: "Un agriculteur seul dans un champ verdoyant sous un ciel couvert" },
  "explore.circular": { source: "pexels:2602537", en: "Collected plastic bottles gathered for recycling", fr: "Bouteilles en plastique collectées pour le recyclage" },
  "explore.report": { source: "pexels:6549858", en: "A person studying at a library desk with books and a laptop under warm light", fr: "Une personne étudiant à un bureau de bibliothèque avec livres et ordinateur portable" },
  "explore.publications": { source: "pexels:9572690", en: "A young man reading with a laptop in a classic library", fr: "Un jeune homme lisant avec un ordinateur portable dans une bibliothèque classique" },
  "explore.global": { source: "pexels:33677662", en: "Green farmland under a dramatic cloudy sky", fr: "Terres agricoles verdoyantes sous un ciel nuageux" },
  "explore.internship": { source: "pexels:7972948", en: "Students working together on laptops outdoors on a campus", fr: "Étudiants travaillant ensemble sur des ordinateurs portables sur un campus" },

  // ── Home ─────────────────────────────────────────────────────────────────
  "home.hero": { source: "pexels:33749817", en: "People in traditional attire gathered outdoors in an African village", fr: "Personnes en tenue traditionnelle réunies en plein air dans un village africain" },
  "home.program.pages": { source: "pexels:37288231", en: "A farmer carrying a hoe and bucket across a wide rural field", fr: "Un agriculteur portant une houe et un seau à travers un vaste champ" },
  "home.program.ices": { source: "pexels:6995380", en: "Two women sorting glass and plastic waste at an indoor recycling centre", fr: "Deux femmes triant du verre et du plastique dans un centre de recyclage" },
  "home.program.paces": { source: "pexels:6729421", en: "Solar panels under a clear blue sky", fr: "Panneaux solaires sous un ciel bleu dégagé" },
  "home.credible": { source: "pexels:7698811", en: "Colleagues reviewing data together on a laptop", fr: "Collègues examinant ensemble des données sur un ordinateur portable" },
  "home.involve.donate": { source: "pexels:35811576", en: "A smiling woman vendor carrying vegetables in a bucket outdoors", fr: "Une vendeuse souriante portant des légumes dans un seau en plein air" },
  "home.involve.partner": { source: "pexels:3894375", en: "Colleagues collaborating around a table", fr: "Collègues collaborant autour d'une table" },
  "home.involve.hire": { source: "pexels:7433847", en: "Professionals in a meeting around a conference table", fr: "Professionnels en réunion autour d'une table de conférence" },

  // ── About ────────────────────────────────────────────────────────────────
  "about.hero": { source: "pexels:30564957", en: "People seated on the ground during a community meeting in a rural African village", fr: "Personnes assises au sol lors d'une réunion communautaire dans un village rural africain" },
  "about.mission": { source: "pexels:13742656", en: "A group of people gathered together outdoors", fr: "Un groupe de personnes rassemblées en plein air" },
  "about.track.pages": { source: "pexels:7765190", en: "Aerial view of a patchwork of green and brown farm plots", fr: "Vue aérienne d'une mosaïque de parcelles agricoles vertes et brunes" },
  "about.track.ices": { source: "pexels:5505699", en: "A pile of recyclable plastic containers", fr: "Un tas de contenants en plastique recyclables" },
  "about.track.paces": { source: "pexels:18306344", en: "Close view of solar panels capturing sunlight", fr: "Vue rapprochée de panneaux solaires captant la lumière" },
  "about.partners": { source: "pexels:4342129", en: "Professionals collaborating in a bright meeting room", fr: "Professionnels collaborant dans une salle de réunion lumineuse" },
  "about.governance": { source: "pexels:7693683", en: "A meeting table with laptops and documents", fr: "Une table de réunion avec ordinateurs portables et documents" },
  "about.involve.donate": { source: "pexels:7728921", en: "Hands planting seedlings in outdoor soil", fr: "Des mains plantant de jeunes plants dans la terre" },
  "about.involve.partner": { source: "pexels:8134003", en: "A team meeting around a wooden table", fr: "Une équipe réunie autour d'une table en bois" },
  "about.involve.hire": { source: "pexels:7698826", en: "Colleagues discussing ideas at a whiteboard", fr: "Collègues échangeant des idées devant un tableau blanc" },

  // ── Governance ───────────────────────────────────────────────────────────
  "governance.hero": { source: "pexels:7794078", en: "A meeting led by a presenter at a flip chart", fr: "Une réunion animée devant un tableau de conférence" },
  "governance.board": { source: "pexels:5466283", en: "A group of professionals discussing plans around a table", fr: "Un groupe de professionnels discutant de plans autour d'une table" },
  "governance.policies": { source: "pexels:6550408", en: "Books and a notebook open on a desk", fr: "Livres et carnet ouverts sur un bureau" },

  // ── Legal ────────────────────────────────────────────────────────────────
  "legal.hero": { source: "pexels:9572724", en: "A man in a jacket reading in a library with a laptop", fr: "Un homme en veste lisant dans une bibliothèque avec un ordinateur portable" },

  // ── Get involved ─────────────────────────────────────────────────────────
  "getInvolved.hero": { source: "pexels:31095000", en: "A woman cooking outdoors surrounded by children in a village", fr: "Une femme cuisinant en plein air entourée d'enfants dans un village" },
  "getInvolved.donate": { source: "pexels:33063811", en: "A vendor sitting beside fresh produce outdoors", fr: "Un vendeur assis près de produits frais en plein air" },
  "getInvolved.partner": { source: "pexels:4339864", en: "Professionals meeting in a café to discuss a project", fr: "Professionnels réunis dans un café pour discuter d'un projet" },
  "getInvolved.volunteer": { source: "pexels:8199558", en: "Students studying and discussing together in a library", fr: "Étudiants travaillant et échangeant dans une bibliothèque" },
  "getInvolved.internship": { source: "pexels:32213235", en: "Students reading together on a university staircase", fr: "Étudiants lisant ensemble dans un escalier universitaire" },

  // ── Resources ────────────────────────────────────────────────────────────
  "resources.hero": { source: "pexels:8199762", en: "Students studying with books and laptops in a university library", fr: "Étudiants travaillant avec livres et ordinateurs dans une bibliothèque universitaire" },
  "resources.publications": { source: "pexels:6550409", en: "A student researching at a library desk with books and a laptop", fr: "Une étudiante faisant des recherches à un bureau de bibliothèque" },
  "resources.datasets": { source: "pexels:6550115", en: "A young man working on a laptop in a library", fr: "Un jeune homme travaillant sur un ordinateur portable en bibliothèque" },
  "resources.newsletter": { source: "pexels:6549913", en: "Students concentrating on books and laptops in a modern library", fr: "Étudiants concentrés sur livres et ordinateurs dans une bibliothèque moderne" },

  // ── News ─────────────────────────────────────────────────────────────────
  "news.hero": { source: "pexels:18824542", en: "Women in traditional attire standing by a wooden fence in a village", fr: "Femmes en tenue traditionnelle près d'une clôture en bois dans un village" },
  "news.feature": { source: "pexels:14314173", en: "Farmers harvesting wheat in a rural field in Makurdi, Nigeria", fr: "Agriculteurs récoltant du blé dans un champ à Makurdi, au Nigeria" },

  // ── Impact ───────────────────────────────────────────────────────────────
  "impact.hero": { source: "pexels:33786603", en: "Aerial view of crop rows at sunset", fr: "Vue aérienne de rangs de cultures au coucher du soleil" },
  "impact.cooperatives": { source: "pexels:3869651", en: "Five women working together in an office", fr: "Cinq femmes travaillant ensemble dans un bureau" },
  "impact.story.rwanda": { source: "pexels:31327682", en: "A farmer carrying a hoe along a green rural path", fr: "Un agriculteur portant une houe sur un chemin rural verdoyant" },
  "impact.story.togo": { source: "pexels:6591156", en: "Close-up of plastic waste in a recycling bin", fr: "Gros plan de déchets plastiques dans un bac de recyclage" },
  "impact.story.learning": { source: "pexels:7777693", en: "Two people working together at a round library table", fr: "Deux personnes travaillant ensemble à une table ronde de bibliothèque" },
  "impact.story.kenya": { source: "pexels:29559907", en: "Crops being harvested by hand", fr: "Récolte manuelle des cultures" },
  "impactStories.hero": { source: "pexels:30275077", en: "A lively street market with vendors selling fruit", fr: "Un marché de rue animé où des vendeurs proposent des fruits" },

  // ── Partners ─────────────────────────────────────────────────────────────
  "partners.hero": { source: "pexels:37758609", en: "Students collaborating in a classroom", fr: "Étudiants collaborant en salle de classe" },
  "partners.banner": { source: "pexels:8199160", en: "Students working with laptops and books in a classroom", fr: "Étudiants travaillant avec ordinateurs et livres en classe" },

  // ── Where we work ────────────────────────────────────────────────────────
  "where.hero": { source: "pexels:33786793", en: "Farmland in morning mist at sunrise", fr: "Terres agricoles dans la brume au lever du soleil" },
  "where.rwanda.hero": { source: "pexels:31528041", en: "A farmer picking tea leaves", fr: "Un agriculteur cueillant des feuilles de thé" },
  "where.rwanda.field": { source: "pexels:31182328", en: "Farmers cultivating land under a blue sky", fr: "Agriculteurs cultivant la terre sous un ciel bleu" },
  "where.kenya.hero": { source: "pexels:33670661", en: "A farmer in a straw hat herding cattle", fr: "Un éleveur en chapeau de paille menant du bétail" },
  "where.kenya.field": { source: "pexels:11947664", en: "A farmer in a hat standing in a lush green field", fr: "Un agriculteur coiffé d'un chapeau dans un champ verdoyant" },
  "where.burundi.hero": { source: "pexels:10403500", en: "A farmer ploughing a field with oxen", fr: "Un agriculteur labourant un champ avec des bœufs" },
  "where.burundi.field": { source: "pexels:30616602", en: "People seated outdoors for a village meeting", fr: "Personnes assises en plein air pour une réunion villageoise" },
  "where.drc.hero": { source: "pexels:35246303", en: "A farmer working in a green rice field", fr: "Un agriculteur travaillant dans une rizière verte" },
  "where.drc.field": { source: "pexels:30564958", en: "A group in colourful attire seated outdoors", fr: "Un groupe en tenues colorées assis en plein air" },
  "where.togo.hero": { source: "pexels:30616651", en: "Men sharing food supplies and talking in a village", fr: "Des hommes partageant des vivres et discutant dans un village" },
  "where.togo.field": { source: "pexels:14688596", en: "A man seated among collected plastic waste", fr: "Un homme assis parmi des déchets plastiques collectés" },
  "where.canada.hero": { source: "pexels:5686111", en: "A team sharing ideas in an office meeting", fr: "Une équipe échangeant des idées en réunion de bureau" },
  "where.canada.field": { source: "pexels:9489091", en: "A team meeting in a modern office", fr: "Une équipe réunie dans un bureau moderne" },

  // ── Programs overview ────────────────────────────────────────────────────
  "programs.hero": { source: "pexels:32543691", en: "Aerial view of summer crop fields", fr: "Vue aérienne de champs cultivés en été" },
  "programs.loop": { source: "pexels:3900508", en: "Overhead view of mixed plastic waste", fr: "Vue plongeante de déchets plastiques mélangés" },
  "programs.card.pages": { source: "pexels:18026679", en: "Rows of crops on rolling farmland at sunrise", fr: "Rangs de cultures sur des terres vallonnées au lever du soleil" },
  "programs.card.ices": { source: "pexels:9324358", en: "A young man sorting cardboard and plastic for recycling", fr: "Un jeune homme triant carton et plastique pour le recyclage" },
  "programs.card.paces": { source: "pexels:38126748", en: "A wide array of solar panels at a solar farm", fr: "Un vaste ensemble de panneaux dans une centrale solaire" },
  "programs.backbone.data": { source: "pexels:16420237", en: "A student using a laptop and textbooks in a library", fr: "Un étudiant utilisant un ordinateur et des manuels en bibliothèque" },
  "programs.backbone.ethics": { source: "pexels:6549584", en: "Two women focused on study with laptops and books", fr: "Deux femmes concentrées sur leur travail avec ordinateurs et livres" },
  "programs.backbone.meal": { source: "pexels:6550403", en: "Two students working with books and laptops in a library", fr: "Deux étudiantes travaillant avec livres et ordinateurs en bibliothèque" },
  "programs.backbone.gedsi": { source: "pexels:4778621", en: "A group of students working together in a bright room", fr: "Un groupe d'étudiants travaillant ensemble dans une pièce lumineuse" },
  "programs.country.rwanda": { source: "pexels:33363152", en: "A farmer with a wooden tool standing in a sunny field", fr: "Un agriculteur avec un outil en bois dans un champ ensoleillé" },
  "programs.country.kenya": { source: "pexels:10988584", en: "A farmer working with a hoe among lush greenery", fr: "Un agriculteur travaillant à la houe dans une végétation luxuriante" },
  "programs.country.burundi": { source: "pexels:27471174", en: "Adults and children outside a thatched hut", fr: "Adultes et enfants devant une case au toit de chaume" },
  "programs.country.drc": { source: "pexels:19667865", en: "Four children standing together in a rural yard", fr: "Quatre enfants debout ensemble dans une cour rurale" },
  "programs.country.togo": { source: "pexels:6995381", en: "Two women sorting plastic waste for recycling", fr: "Deux femmes triant des déchets plastiques pour le recyclage" },
  "programs.country.canada": { source: "pexels:8117476", en: "A team meeting in a modern office", fr: "Une équipe en réunion dans un bureau moderne" },
  "programs.engage.fund": { source: "pexels:3894376", en: "A group of women collaborating around a laptop indoors", fr: "Un groupe de femmes collaborant autour d’un ordinateur portable" },
  "programs.engage.pilot": { source: "pexels:29858623", en: "A young man holding a smartphone in a green wheat field", fr: "Un jeune homme tenant un smartphone dans un champ de blé vert" },
  "programs.engage.build": { source: "pexels:9158769", en: "Students taking notes in a library", fr: "Étudiants prenant des notes en bibliothèque" },

  // ── Program tracks ───────────────────────────────────────────────────────
  "programs.pages.hero": { source: "pexels:15885072", en: "Rural farmland with trees at sunset", fr: "Terres agricoles et arbres au coucher du soleil" },
  "programs.ices.hero": { source: "pexels:27312907", en: "A wall of compressed multicoloured plastic waste", fr: "Un mur de déchets plastiques compressés multicolores" },
  "programs.paces.hero": { source: "pexels:33696834", en: "A field of solar panels in the sun", fr: "Un champ de panneaux solaires au soleil" },
  "programs.paces.section": { source: "pexels:27873610", en: "Solar panels under a blue sky", fr: "Panneaux solaires sous un ciel bleu" },
  "programs.toc.hero": { source: "pexels:31708519", en: "Lush fields and hills on a sunny spring day", fr: "Champs verdoyants et collines par une journée de printemps" },

  // ── Services ─────────────────────────────────────────────────────────────
  "services.hero": { source: "pexels:7693254", en: "Colleagues reviewing charts beside a laptop", fr: "Collègues examinant des graphiques près d'un ordinateur portable" },
  "services.card.pages": { source: "pexels:5036078", en: "A man on the phone leaning on a hay bale in a rural field", fr: "Un homme au téléphone, appuyé sur une botte de foin dans un champ" },
  "services.card.ices": { source: "pexels:2547565", en: "A pile of assorted plastic waste", fr: "Un tas de déchets plastiques variés" },
  "services.card.paces": { source: "pexels:16586151", en: "Solar panels at sunrise", fr: "Panneaux solaires au lever du soleil" },
  "services.audience.funders": { source: "pexels:1181425", en: "Women in a professional meeting with laptops", fr: "Des femmes en réunion de travail avec des ordinateurs portables" },
  "services.audience.governments": { source: "pexels:3869649", en: "A team of women meeting in an office", fr: "Une équipe de femmes en réunion dans un bureau" },
  "services.audience.enterprises": { source: "pexels:37758756", en: "People writing during a classroom session", fr: "Personnes écrivant pendant une séance en salle" },
  "services.pages.hero": { source: "pexels:35591918", en: "Aerial view of green fields and farmland", fr: "Vue aérienne de champs verts et de terres agricoles" },
  "services.ices.hero": { source: "pexels:9324361", en: "Items in a recycling bin", fr: "Objets dans un bac de recyclage" },
  "services.paces.hero": { source: "pexels:35501725", en: "Aerial view of a large rooftop solar array", fr: "Vue aérienne d'un grand ensemble solaire sur toiture" },
  "services.digitalTools.hero": { source: "pexels:32530111", en: "A farmer on a ladder in an orchard talking on a mobile phone", fr: "Un agriculteur sur une échelle dans un verger, au téléphone" },
} satisfies Record<string, Entry>;

export type PhotoSlot = keyof typeof PHOTO_REGISTRY;

export type ResolvedPhoto = { src: string; alt: { en: string; fr: string }; source: string };

export function getPhoto(slot: PhotoSlot): ResolvedPhoto {
  const e: Entry = PHOTO_REGISTRY[slot];
  return { src: fileFor(e.source), alt: { en: e.en, fr: e.fr }, source: e.source };
}

/** Audit helper: map of source -> slots. Each source must map to exactly one slot. */
export function auditPhotoSources(): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const [slot, e] of Object.entries(PHOTO_REGISTRY) as [string, Entry][]) {
    (out[e.source] ??= []).push(slot);
  }
  return out;
}

if (import.meta.env.DEV) {
  const dupes = Object.entries(auditPhotoSources()).filter(([, s]) => s.length > 1);
  if (dupes.length) console.error("[photos] duplicate source assignments:", dupes);
}

/** Spread onto an <img>: src, translated alt and audit data attributes. */
export function photoProps(slot: PhotoSlot, tt: (en: string, fr: string) => string) {
  const p = getPhoto(slot);
  return { src: p.src, alt: tt(p.alt.en, p.alt.fr), "data-photo-slot": slot, "data-photo-source": p.source };
}
