// Single source of truth for all portfolio content.
// Every human-readable string is localised as { en, fr }.

export type Locale = "en" | "fr";
export type L = { en: string; fr: string };
export type LList = { en: string[]; fr: string[] };

export const pick = <T,>(v: { en: T; fr: T }, locale: string): T =>
  locale === "fr" ? v.fr : v.en;

/* ------------------------------------------------------------------ */
/* Profile                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  firstName: "Navin",
  lastName: "Venkat",
  fullName: "Navin Venkat Venkatesan",
  email: "vnavinvenkat@gmail.com",
  location: "Paris, FR",
  timezone: "Europe/Paris",
  portrait: "/about-art.svg",
  role: {
    en: "AI & Full-Stack Engineer",
    fr: "Ingénieur IA & Full-Stack",
  } as L,
  headline: {
    en: "I build AI agents and full-stack products that actually get work done.",
    fr: "Je construis des agents IA et des produits full-stack qui font vraiment le travail.",
  } as L,
  status: {
    en: "Open to a 6-month end-of-studies internship",
    fr: "Disponible pour un stage de fin d’études de 6 mois",
  } as L,
  about: {
    en: [
      "Hey! I’m Navin, an AI and full-stack engineer, and a final-year M.Sc. Computer Science student at EPITA Paris.",
      "I build with Python, PyTorch, TypeScript, React, Next.js, FastAPI and LangChain. Full-stack products on one side, models and agents on the other.",
      "These days I spend most of my time building AI agents: systems that can use tools, talk to APIs, control a browser, and actually get work done, not just chat. RAG, MCP, OpenAI, Anthropic, the usual stack.",
      "You’ll find my work on GitHub: apps, agents and end-to-end systems you can run, not half-finished notebooks.",
    ],
    fr: [
      "Salut ! Je suis Navin, ingénieur IA et full-stack, et étudiant en dernière année de M.Sc. Computer Science à l’EPITA Paris.",
      "Je construis avec Python, PyTorch, TypeScript, React, Next.js, FastAPI et LangChain. Des produits full-stack d’un côté, des modèles et des agents de l’autre.",
      "En ce moment, je passe l’essentiel de mon temps à construire des agents IA : des systèmes qui utilisent des outils, parlent à des API, pilotent un navigateur et font vraiment le travail, pas seulement discuter. RAG, MCP, OpenAI, Anthropic, la stack habituelle.",
      "Mon travail est sur GitHub : des apps, des agents et des systèmes de bout en bout que l’on peut lancer, pas des notebooks à moitié finis.",
    ],
  } as LList,
  facts: [
    { k: { en: "Based in", fr: "Basé à" }, v: { en: "Paris, France", fr: "Paris, France" } },
    {
      k: { en: "Studying", fr: "Études" },
      v: { en: "M.Sc. Computer Science, EPITA", fr: "M.Sc. Informatique, EPITA" },
    },
    {
      k: { en: "Focus", fr: "Focus" },
      v: { en: "AI agents · RAG · Full-stack", fr: "Agents IA · RAG · Full-stack" },
    },
    {
      k: { en: "Looking for", fr: "Recherche" },
      v: { en: "6-month end-of-studies internship", fr: "Stage de fin d’études (6 mois)" },
    },
  ] as { k: L; v: L }[],
};

export const links = {
  github: "https://github.com/NavinVenkatV",
  x: "https://x.com/nav_venk",
  linkedin: "https://www.linkedin.com/in/navin-venkat-38bb28279/",
  email: `mailto:${profile.email}`,
};

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

export const skillGroups: { title: L; items: string[] }[] = [
  {
    title: { en: "AI & Agents", fr: "IA & Agents" },
    items: ["Python", "PyTorch", "LangChain", "RAG", "MCP", "OpenAI", "Anthropic", "ChromaDB", "Cohere", "Ragas"],
  },
  {
    title: { en: "Frontend", fr: "Frontend" },
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: { en: "Backend & Data", fr: "Backend & Données" },
    items: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Prisma", "Redis", "Socket.IO"],
  },
  {
    title: { en: "Cloud & DevOps", fr: "Cloud & DevOps" },
    items: ["Docker", "Kubernetes", "AWS EC2", "AWS Lambda", "GitHub Actions", "Vercel", "Railway"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    company: "AgileSoftLabs",
    href: "https://agilesoftlabs.com/",
    role: { en: "Software Developer Intern", fr: "Développeur logiciel (stagiaire)" } as L,
    period: { en: "Jul 2024 - May 2025", fr: "Juil. 2024 - Mai 2025" } as L,
    points: {
      en: [
        "Built and maintained scalable REST APIs with Node.js, Express.js and TypeScript, covered by unit and integration tests (Jest), in an agile team working directly with clients.",
        "Migrated the frontend from React.js to Next.js (SSR/SSG), improving performance and SEO.",
        "Optimised PostgreSQL and MongoDB schemas to cut latency on high-traffic endpoints.",
        "Set up CI/CD pipelines with GitHub Actions and deployed Docker services on AWS EC2 with production monitoring; used Docker, Kubernetes and Redis on client projects.",
        "Integrated AI tools, including Copilot and LLM APIs, for code generation, automated review and documentation.",
      ],
      fr: [
        "Conception et maintenance d’API REST évolutives avec Node.js, Express.js et TypeScript, couvertes par des tests unitaires et d’intégration (Jest), au sein d’une équipe agile en lien direct avec les clients.",
        "Migration du frontend de React.js vers Next.js (SSR/SSG), avec à la clé de meilleures performances et un meilleur SEO.",
        "Optimisation des schémas PostgreSQL et MongoDB pour réduire la latence des endpoints à fort trafic.",
        "Mise en place de pipelines CI/CD avec GitHub Actions et déploiement de services Docker sur AWS EC2 avec monitoring en production ; Docker, Kubernetes et Redis sur des projets clients.",
        "Intégration d’outils IA, dont Copilot et des API de LLM, pour la génération de code, la revue automatisée et la documentation.",
      ],
    } as LList,
    stack: ["Node.js", "Express.js", "TypeScript", "Next.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "Redis", "AWS EC2", "GitHub Actions", "Jest"],
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                          */
/* ------------------------------------------------------------------ */

export const education = [
  {
    school: "EPITA",
    schoolLong: "L’école des ingénieurs en intelligence informatique",
    logo: "/Epita.png",
    degree: {
      en: "Master of Science in Computer Science",
      fr: "Master of Science en Informatique",
    } as L,
    period: "2025 - 2027",
    place: "Paris, FR",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string;
  name: string;
  latest?: boolean;
  tagline: L;
  category: L;
  role: L;
  summary: L;
  overview: L;
  challenge?: { title: L; body: L };
  highlights: LList;
  metrics: { value: string; label: L }[];
  next?: L;
  stack: string[];
  link: { href: string; label: L };
  image?: string;
  accent: string;
};

const SOLO: L = { en: "Solo, end to end", fr: "Solo, de bout en bout" };

export const projects: Project[] = [
  {
    slug: "hexavia",
    name: "Pépite · Hexavia",
    latest: true,
    accent: "#e8a04a",
    image: "/hexavia.png",
    tagline: {
      en: "AI-assisted idea triage for an innovation challenge, built for INSKIP",
      fr: "Tri des idées assisté par IA pour un challenge d’innovation, conçu pour INSKIP",
    },
    category: { en: "AI Product · Full-Stack", fr: "Produit IA · Full-Stack" },
    role: SOLO,
    summary: {
      en: "A tool for a non-technical consultant to sort 40 employee ideas: import the form export, review an AI-proposed score for each idea, set aside duplicates and send a ranked shortlist to the client.",
      fr: "Un outil pour qu’une consultante non technique trie 40 idées de salariés : importer l’export du formulaire, relire une note proposée par l’IA pour chaque idée, écarter les doublons et envoyer une shortlist classée au client.",
    },
    overview: {
      en: "Built for INSKIP: their consultant had ten days to bring about 8 of 40 ideas to a jury, and scoring them in Excel was slow and inconsistent. Pépite gives her one place to read and filter ideas, a justified first score on the client’s grid that she can correct in one click, duplicate detection and a presentable shortlist exported to PDF and Excel. It is a React + TypeScript + Vite app with no database: everything stays in her browser, and a single server function holds the model key so employee names are never sent to the AI.",
      fr: "Conçu pour INSKIP : leur consultante avait dix jours pour présenter environ 8 idées sur 40 à un jury, et la notation dans Excel était longue et peu cohérente. Pépite lui donne un seul endroit pour lire et filtrer les idées, une première note justifiée sur la grille du client qu’elle corrige d’un clic, le repérage des doublons et une shortlist présentable, exportée en PDF et Excel. C’est une app React + TypeScript + Vite sans base de données : tout reste dans son navigateur, et une seule fonction serveur détient la clé du modèle, pour qu’aucun nom de salarié ne soit jamais envoyé à l’IA.",
    },
    challenge: {
      title: { en: "When real data broke the AI", fr: "Quand la vraie donnée a piégé l’IA" },
      body: {
        en: "Tests passed on sample data, but the real export exposed wrong scores: “Programme ambassadeurs clients” scored high on strategy because the keyword “eau” (water) matched inside “nouveaux”. I switched to word-start matching with a regression test, and added a synonym table after two duplicate pairs (“chatbot” and “assistant conversationnel”) were missed. In production, the scoring function returned 500 on Vercel while passing locally; I caught it by querying the live URL after deploy and fixed the extensionless imports Node rejected.",
        fr: "Les tests passaient sur les données d’exemple, mais le vrai export a révélé des notes fausses : « Programme ambassadeurs clients » obtenait un bon alignement stratégique car le mot-clé « eau » était trouvé dans « nouveaux ». J’ai passé la recherche en début de mot avec un test de non-régression, et ajouté une table de synonymes après deux paires de doublons manquées (« chatbot » et « assistant conversationnel »). En production, la fonction de notation répondait 500 sur Vercel alors que tout passait en local ; repéré en interrogeant l’URL après déploiement, corrigé sur les imports sans extension refusés par Node.",
      },
    },
    highlights: {
      en: [
        "Robust CSV import: BOM, separators, multi-line fields, 7 date formats and 15 budget formats, with every issue flagged instead of dropped.",
        "AI proposes, the consultant decides: AI scores and her scores are stored separately, and hers always win.",
        "Explainable duplicate detection with TF-IDF similarity, shared words highlighted, threshold tuned on real data (0.30).",
        "Simulated AI returns the exact schema of the real model, so switching to Claude changes nothing else.",
        "A test proves no first or last name ever reaches the model prompt; the API key lives server-side only.",
        "CI on every push: secret and CSV leak checks, lint, build, unit and end-to-end tests.",
      ],
      fr: [
        "Import CSV robuste : BOM, séparateurs, champs multi-lignes, 7 formats de date et 15 formats de budget, chaque problème signalé plutôt que supprimé.",
        "L’IA propose, la consultante décide : notes de l’IA et notes saisies stockées séparément, les siennes priment toujours.",
        "Détection de doublons explicable par similarité TF-IDF, mots communs surlignés, seuil réglé sur la vraie donnée (0,30).",
        "IA simulée au format exact du vrai modèle : passer à Claude ne change rien ailleurs.",
        "Un test prouve qu’aucun nom ni prénom n’atteint le prompt du modèle ; la clé API reste côté serveur.",
        "CI à chaque push : détection de clés et d’exports CSV, lint, build, tests unitaires et de bout en bout.",
      ],
    },
    metrics: [
      { value: "40", label: { en: "real ideas triaged end to end", fr: "vraies idées triées de bout en bout" } },
      { value: "80", label: { en: "unit tests + Playwright e2e", fr: "tests unitaires + e2e Playwright" } },
      { value: "5/5", label: { en: "duplicate pairs caught", fr: "paires de doublons repérées" } },
    ],
    next: {
      en: "Next up: the real Claude model behind authentication, multi-reviewer scoring with Supabase, and a PowerPoint export for the jury.",
      fr: "Prochaine étape : le vrai modèle Claude derrière une authentification, la notation à plusieurs avec Supabase, et un export PowerPoint pour le jury.",
    },
    stack: ["React", "TypeScript", "Vite", "Claude API", "TF-IDF", "Vitest", "Playwright", "Vercel", "GitHub Actions", "Claude Code"],
    link: { href: "https://hexavia-idees.vercel.app", label: { en: "Open the app", fr: "Ouvrir l’app" } },
  },
  {
    slug: "reduck",
    name: "Reduck",
    accent: "#d7263d",
    tagline: {
      en: "MCP agent integration with live browser control",
      fr: "Intégration d’agent via MCP avec contrôle de navigateur en direct",
    },
    category: { en: "AI Agents · Automation", fr: "Agents IA · Automatisation" },
    role: { en: "Agent integration & automation", fr: "Intégration d’agent & automatisation" },
    summary: {
      en: "Gave Claude Code a live browser through a third-party MCP server, built typed automation scripts on top, and tracked a silent cold-start regression back to its root cause.",
      fr: "J’ai donné un navigateur en direct à Claude Code via un serveur MCP tiers, construit des scripts d’automatisation typés par-dessus, et remonté une régression silencieuse au cold start jusqu’à sa cause racine.",
    },
    overview: {
      en: "I connected Claude Code to a third-party MCP server so the agent could control a live browser, a capability it did not have on its own. Over that connection I built three automation scripts, each with a typed input and output contract, so every run could be checked against what it promised to return.",
      fr: "J’ai connecté Claude Code à un serveur MCP tiers pour que l’agent puisse piloter un navigateur en direct, une capacité qu’il n’avait pas nativement. Via cette connexion, j’ai construit trois scripts d’automatisation, chacun avec un contrat d’entrée et de sortie typé, pour que chaque exécution puisse être vérifiée par rapport à ce qu’elle promettait de renvoyer.",
    },
    challenge: {
      title: { en: "The regression", fr: "La régression" },
      body: {
        en: "All three scripts, already validated and deployed, suddenly failed together. Reading the run traces showed why: the platform’s cold environment opened at an inconsistent window size, which silently broke a dependency the three scripts shared downstream. I fixed it, then re-validated from a fresh cold start rather than a warm session, so the fix was proven where the bug actually lived.",
        fr: "Les trois scripts, déjà validés et déployés, ont soudain échoué ensemble. Les traces d’exécution ont montré pourquoi : l’environnement froid de la plateforme s’ouvrait avec une taille de fenêtre incohérente, ce qui cassait silencieusement une dépendance partagée en aval. J’ai corrigé le problème, puis re-validé depuis un cold start plutôt qu’une session déjà chaude, pour prouver le correctif là où le bug vivait réellement.",
      },
    },
    highlights: {
      en: [
        "Bridged Claude Code to a third-party MCP server for live browser control.",
        "Three automation scripts, each with a typed input/output contract.",
        "Root-caused a shared regression from run traces: inconsistent window size in the cold environment.",
        "Re-validated from a fresh cold start, not a warm session.",
        "Wrote structured platform feedback: reproduction steps, root cause, severity and a suggested fix.",
      ],
      fr: [
        "Connexion de Claude Code à un serveur MCP tiers pour piloter un navigateur en direct.",
        "Trois scripts d’automatisation, chacun avec un contrat d’entrée/sortie typé.",
        "Cause racine d’une régression partagée trouvée dans les traces : taille de fenêtre incohérente dans l’environnement froid.",
        "Re-validation depuis un cold start, pas depuis une session chaude.",
        "Retour structuré à la plateforme : étapes de reproduction, cause racine, sévérité et correctif proposé.",
      ],
    },
    metrics: [
      { value: "3", label: { en: "typed automation scripts", fr: "scripts d’automatisation typés" } },
      { value: "MCP", label: { en: "live browser bridge", fr: "pont navigateur en direct" } },
      { value: "3/3", label: { en: "re-validated from cold start", fr: "re-validés depuis un cold start" } },
    ],
    stack: ["MCP", "Claude Code", "Browser Automation", "TypeScript", "Agent Tooling"],
    link: {
      href: "https://app.notion.com/p/Reduck-Test-technique-Vibe-Coder-Navin-Venkat-Venkatesan-3e2c031d2fbe81c7ae9cd037e461d877?source=copy_link",
      label: { en: "Read the write-up", fr: "Lire le compte rendu" },
    },
  },
  {
    slug: "clairo",
    name: "Clairo",
    accent: "#f06a7a",
    image: "/clairo.png",
    tagline: { en: "AI document intelligence platform", fr: "Plateforme d’intelligence documentaire par IA" },
    category: { en: "RAG · LLM Evaluation", fr: "RAG · Évaluation de LLM" },
    role: SOLO,
    summary: {
      en: "Upload any PDF, ask in plain English, and get answers with an exact page citation, so they can be checked instead of trusted.",
      fr: "Importez n’importe quel PDF, posez vos questions en langage naturel, et obtenez des réponses avec la page exacte citée, pour vérifier plutôt que croire.",
    },
    overview: {
      en: "A RAG system I built end to end. Retrieval is hybrid, BM25 plus vector search, then reranked with a Cohere cross-encoder. Quality is measured, not guessed: a Ragas evaluation pipeline runs in GitHub Actions and gates every change. The app is multi-user, with Google and X sign-in through NextAuth.",
      fr: "Un système RAG que j’ai construit de bout en bout. La recherche est hybride, BM25 plus recherche vectorielle, puis reclassée par un cross-encoder Cohere. La qualité est mesurée, pas devinée : un pipeline d’évaluation Ragas tourne dans GitHub Actions et conditionne chaque changement. L’app est multi-utilisateur, avec connexion Google et X via NextAuth.",
    },
    highlights: {
      en: [
        "Hybrid BM25 + vector retrieval with Cohere cross-encoder reranking.",
        "Every answer cites the exact page it came from.",
        "Ragas evaluation pipeline, CI-gated in GitHub Actions.",
        "Multi-user architecture with NextAuth (Google & X OAuth).",
      ],
      fr: [
        "Recherche hybride BM25 + vectorielle avec reclassement par cross-encoder Cohere.",
        "Chaque réponse cite la page exacte d’où elle provient.",
        "Pipeline d’évaluation Ragas, bloquant dans la CI GitHub Actions.",
        "Architecture multi-utilisateur avec NextAuth (OAuth Google & X).",
      ],
    },
    metrics: [
      { value: "0.61 → 0.89", label: { en: "faithfulness after reranking", fr: "fidélité après reclassement" } },
      { value: "BM25 + vec", label: { en: "hybrid retrieval", fr: "recherche hybride" } },
      { value: "CI", label: { en: "gated evaluation", fr: "évaluation bloquante" } },
    ],
    next: {
      en: "Next up: fully local inference with Ollama, with zero data leaving the machine.",
      fr: "Prochaine étape : inférence entièrement locale avec Ollama, sans qu’aucune donnée ne quitte la machine.",
    },
    stack: ["FastAPI", "Python", "LangChain", "ChromaDB", "OpenAI API", "Cohere", "Next.js 14", "Tailwind CSS", "NextAuth", "Railway", "Vercel", "GitHub Actions"],
    link: { href: "https://github.com/NavinVenkatV/Clairo", label: { en: "View on GitHub", fr: "Voir sur GitHub" } },
  },
  {
    slug: "exa",
    name: "Exa",
    accent: "#ff8a65",
    image: "/exaai.png",
    tagline: { en: "AI-powered search engine", fr: "Moteur de recherche propulsé par l’IA" },
    category: { en: "LLM · Search", fr: "LLM · Recherche" },
    role: SOLO,
    summary: {
      en: "An LLM-powered search engine with real-time retrieval and streaming answers that go beyond keyword matching.",
      fr: "Un moteur de recherche propulsé par des LLM, avec récupération en temps réel et réponses en streaming qui vont au-delà des mots-clés.",
    },
    overview: {
      en: "Built alone, Exa retrieves data in real time and streams concise, semantic answers through the OpenAI and Anthropic APIs. Most of the work went into making it fast and cheap: aggressive cache optimisation, serverless deployment on AWS Lambda and tuned PostgreSQL queries.",
      fr: "Construit seul, Exa récupère les données en temps réel et diffuse en streaming des réponses concises et sémantiques via les API OpenAI et Anthropic. L’essentiel du travail a porté sur la vitesse et le coût : optimisation poussée du cache, déploiement serverless sur AWS Lambda et requêtes PostgreSQL optimisées.",
    },
    highlights: {
      en: [
        "Streaming responses via the OpenAI and Anthropic APIs.",
        "Semantic results instead of plain keyword matching.",
        "Serverless deployment on AWS Lambda.",
        "Optimised PostgreSQL queries and caching layer.",
      ],
      fr: [
        "Réponses en streaming via les API OpenAI et Anthropic.",
        "Résultats sémantiques plutôt qu’une simple correspondance de mots-clés.",
        "Déploiement serverless sur AWS Lambda.",
        "Requêtes PostgreSQL et couche de cache optimisées.",
      ],
    },
    metrics: [
      { value: "95%", label: { en: "cache hit rate", fr: "taux de succès du cache" } },
      { value: "−60%", label: { en: "query latency", fr: "latence des requêtes" } },
      { value: "λ", label: { en: "serverless on AWS", fr: "serverless sur AWS" } },
    ],
    stack: ["Next.js", "TypeScript", "OpenAI API", "Anthropic API", "PostgreSQL", "AWS Lambda", "Vercel"],
    link: { href: "https://exaai.vercel.app", label: { en: "Visit live site", fr: "Voir le site" } },
  },
  {
    slug: "codeit",
    name: "CodeIt",
    accent: "#e05a9b",
    image: "/codeit.png",
    tagline: { en: "Real-time collaborative code editor", fr: "Éditeur de code collaboratif en temps réel" },
    category: { en: "Realtime · Full-stack", fr: "Temps réel · Full-stack" },
    role: SOLO,
    summary: {
      en: "A multi-user code editor for remote pair programming, synchronised in under 100 ms over WebSockets.",
      fr: "Un éditeur de code multi-utilisateur pour le pair programming à distance, synchronisé en moins de 100 ms via WebSockets.",
    },
    overview: {
      en: "A collaborative coding platform I built alone for remote pair programming and team sessions. Edits sync in real time over Socket.IO, with live cursor tracking, secure rooms and syntax highlighting, on an event-driven architecture designed to scale.",
      fr: "Une plateforme de code collaboratif que j’ai construite seul pour le pair programming à distance et les sessions en équipe. Les modifications se synchronisent en temps réel via Socket.IO, avec suivi des curseurs, salles sécurisées et coloration syntaxique, sur une architecture événementielle pensée pour passer à l’échelle.",
    },
    highlights: {
      en: [
        "Real-time sync under 100 ms with Socket.IO.",
        "Live cursor tracking for every collaborator.",
        "Secure room management.",
        "Event-driven architecture on React, Node.js and MongoDB.",
      ],
      fr: [
        "Synchronisation en temps réel sous les 100 ms avec Socket.IO.",
        "Suivi en direct du curseur de chaque collaborateur.",
        "Gestion sécurisée des salles.",
        "Architecture événementielle avec React, Node.js et MongoDB.",
      ],
    },
    metrics: [
      { value: "<100ms", label: { en: "sync latency", fr: "latence de synchro" } },
      { value: "Live", label: { en: "cursor tracking", fr: "suivi des curseurs" } },
      { value: "Rooms", label: { en: "secure sessions", fr: "sessions sécurisées" } },
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "Vercel"],
    link: { href: "https://dm2-buy.vercel.app", label: { en: "Visit live site", fr: "Voir le site" } },
  },
  {
    slug: "pingme",
    name: "PingMe",
    accent: "#f2c1b6",
    image: "/pingme.png",
    tagline: { en: "Uptime monitoring SaaS", fr: "SaaS de surveillance de disponibilité" },
    category: { en: "SaaS · Infrastructure", fr: "SaaS · Infrastructure" },
    role: { en: "Solo, built & operated", fr: "Solo, conçu & opéré" },
    summary: {
      en: "Subscription website monitoring with real-time pings, downtime email alerts and performance dashboards.",
      fr: "Surveillance de sites web par abonnement avec pings en temps réel, alertes e-mail en cas de panne et tableaux de bord de performance.",
    },
    overview: {
      en: "A subscription SaaS I built and run alone. Workers ping sites in real time, NodeMailer sends alerts the moment something goes down, and dashboards show performance over time, all behind tiered plans. Jobs are processed asynchronously with Bull Queue on PostgreSQL and Prisma, deployed on AWS EC2 through GitHub Actions.",
      fr: "Un SaaS par abonnement que je conçois et opère seul. Des workers pinguent les sites en temps réel, NodeMailer envoie une alerte dès qu’un site tombe, et des tableaux de bord suivent les performances dans le temps, le tout avec des offres à paliers. Les tâches sont traitées en asynchrone avec Bull Queue sur PostgreSQL et Prisma, déployé sur AWS EC2 via GitHub Actions.",
    },
    highlights: {
      en: [
        "Real-time uptime pings with automated downtime emails.",
        "Distributed async job processing with Bull Queue.",
        "Performance dashboards and tiered subscription plans.",
        "Docker + GitHub Actions CI/CD to AWS EC2.",
      ],
      fr: [
        "Pings de disponibilité en temps réel et e-mails automatiques en cas de panne.",
        "Traitement asynchrone distribué avec Bull Queue.",
        "Tableaux de bord de performance et abonnements à paliers.",
        "CI/CD Docker + GitHub Actions vers AWS EC2.",
      ],
    },
    metrics: [
      { value: "99.9%", label: { en: "platform uptime", fr: "disponibilité de la plateforme" } },
      { value: "Async", label: { en: "Bull Queue workers", fr: "workers Bull Queue" } },
      { value: "EC2", label: { en: "CI/CD deployed", fr: "déployé en CI/CD" } },
    ],
    stack: ["Node.js", "TypeScript", "Bull Queue", "PostgreSQL", "Prisma ORM", "NodeMailer", "AWS EC2", "GitHub Actions", "Docker"],
    link: { href: "https://pingmeyourwebsite.vercel.app", label: { en: "Visit live site", fr: "Voir le site" } },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/* ------------------------------------------------------------------ */
/* Learning: course I'm currently taking                              */
/* To update: bump `currentClass`, and add the next class below.       */
/* ------------------------------------------------------------------ */

export type Reading = { title: string; source: string; href: string };
export type CourseClass = {
  n: number;
  date: string;
  title: string;
  summary: L;
  slides: string;
  video: string;
  readings: Reading[];
};

export const learning = {
  code: "CS329Z",
  name: "Engineering AI Agents",
  school: "Stanford",
  term: "Fall 2026",
  href: "https://cs329z.stanford.edu",
  totalClasses: 20,
  currentClass: 2,
  about: {
    en: "From simple LLM pipelines to compound AI systems and autonomous agents: building RAG, tool use and agent loops from scratch, then frameworks like DSPy, data, evaluation and safety.",
    fr: "Des pipelines LLM simples aux systèmes d’IA composés et aux agents autonomes : RAG, usage d’outils et boucles d’agent construits from scratch, puis frameworks comme DSPy, données, évaluation et sécurité.",
  } as L,
  classes: [
    {
      n: 1,
      date: "Sep 23",
      title: "Introduction: What Are Agentic Systems?",
      summary: {
        en: "A brief history of agents and their anatomy: LLM core, reasoning, memory, tools and environment. Compound AI systems, workflows vs. agents, and the challenges of reliability, safety and evaluation.",
        fr: "Une brève histoire des agents et leur anatomie : cœur LLM, raisonnement, mémoire, outils et environnement. Systèmes d’IA composés, workflows vs agents, et les défis de fiabilité, sécurité et évaluation.",
      },
      slides: "https://web.stanford.edu/class/cs329z/slides/lecture01.pdf",
      video: "https://youtu.be/DGI4vucR71w",
      readings: [
        { title: "The Shift from Models to Compound AI Systems", source: "Zaharia et al. · BAIR Blog, 2024", href: "https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/" },
        { title: "LLM Powered Autonomous Agents", source: "Weng · Lil'Log, 2023", href: "https://lilianweng.github.io/posts/2023-06-23-agent/" },
        { title: "AI Agents That Matter", source: "Kapoor et al. · TMLR, 2025", href: "https://arxiv.org/abs/2407.01502" },
      ],
    },
    {
      n: 2,
      date: "Sep 28",
      title: "LLMs for Builders",
      summary: {
        en: "Language model internals for agent builders: decoding, attention (linear and hybrid) and context length, pretraining to post-training, test-time scaling, structured output and context engineering.",
        fr: "Les rouages des modèles de langage pour qui construit des agents : décodage, attention (linéaire et hybride) et longueur de contexte, du pré-entraînement au post-entraînement, test-time scaling, sorties structurées et context engineering.",
      },
      slides: "https://web.stanford.edu/class/cs329z/slides/lecture02.pdf",
      video: "https://youtu.be/Vr1NzH8bT44",
      readings: [
        { title: "Attention Is All You Need", source: "Vaswani et al. · NeurIPS, 2017", href: "https://arxiv.org/abs/1706.03762" },
        { title: "Transformers are RNNs: Fast Autoregressive Transformers with Linear Attention", source: "Katharopoulos et al. · ICML, 2020", href: "https://arxiv.org/abs/2006.16236" },
        { title: "Effective Context Engineering for AI Agents", source: "Rajasekaran et al. · Anthropic, 2025", href: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" },
      ],
    },
    {
      n: 3,
      date: "Sep 30",
      title: "Retrieval-Augmented Generation (RAG)",
      summary: {
        en: "The RAG pipeline end to end: chunking and indexing, BM25, DPR and hybrid search, reranking and ColBERT, agentic RAG, and common failure modes.",
        fr: "Le pipeline RAG de bout en bout : découpage et indexation, BM25, DPR et recherche hybride, reclassement et ColBERT, RAG agentique, et les échecs fréquents.",
      },
      slides: "https://web.stanford.edu/class/cs329z/slides/lecture03.pdf",
      video: "https://youtu.be/psLc-46GqY0",
      readings: [
        { title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", source: "Lewis et al. · NeurIPS, 2020", href: "https://arxiv.org/abs/2005.11401" },
        { title: "Dense Passage Retrieval for Open-Domain Question Answering", source: "Karpukhin et al. · EMNLP, 2020", href: "https://arxiv.org/abs/2004.04906" },
        { title: "ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT", source: "Khattab & Zaharia · SIGIR, 2020", href: "https://arxiv.org/abs/2004.12832" },
      ],
    },
  ] as CourseClass[],
};

export const currentCourseClass = () =>
  learning.classes.find((c) => c.n === learning.currentClass) ?? learning.classes[0];
