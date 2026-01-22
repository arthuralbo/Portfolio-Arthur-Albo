
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Globe, 
  BrainCircuit, 
  BarChart3, 
  MapPin, 
  TrendingUp, 
  Navigation, 
  Activity, 
  Zap, 
  Languages, 
  ArrowLeft, 
  CheckCircle2, 
  Database, 
  Table as TableIcon, 
  Sparkles,
  Settings,
  Search,
  Wand2,
  RefreshCcw,
  ShieldCheck,
  Calendar,
  Eraser,
  Binary,
  PlusCircle,
  LayoutGrid,
  Loader2,
  Check,
  Info,
  Copy,
  Clock,
  Key,
  MousePointer2
} from 'lucide-react';

// --- Translations ---

const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      hi: "Hi, I'm",
      role: "Mathematics & Statistics Student",
      desc: "Continuing to learn how to build data-driven solutions using statistical modeling. I transform complex datasets into clear, actionable intelligence across diverse industries, from urban mobility to automated engineering.",
      ctaWork: "View Work",
      ctaContact: "Get in Touch",
      highlights: [
        { title: "Data Science", desc: "Turning complex data into actionable insights through statistical algorithms." },
        { title: "Smart Planning", desc: "Optimizing urban environments through data-driven design and predictive modeling." },
        { title: "Geospatial Data", desc: "Mapping and analyzing information tied to specific geographic locations." },
        { title: "Machine Learning", desc: "Forecasting infrastructure demand with statistical rigor." }
      ]
    },
    about: {
      title: "About Me",
      p1: "I’m a 4th year Math and Stats student at Concordia, finishing a specialization in Econometrics and Programming. With a background in Data Science, I’ve spent a lot of time with machine learning and predictive modeling, turning messy, real-world data into something meaningful.",
      p2: "I have a deep interest in how these models impact the world around us. Whether I'm building tools to clean messy datasets in spreadsheets or analyzing geospatial patterns in Smart City infrastructure, my goal is to bridge the gap between abstract equations and real-world efficiency.",
    },
    experience: {
      title: "Journey & Growth",
      keyLearning: "Key Learning",
      items: [
        {
          role: 'Data Scientist / Developer',
          company: 'InsightSolver',
          date: '2025 - Present',
          learning: 'Helped in the creation of a data based pattern-finding solution by building interactive Dash/Streamlit dashboards.'
        },
        {
          role: 'Data Scientist (Intern)',
          company: 'Data Science Institute',
          date: '2023 - 2024',
          learning: 'Accelerated my technical proficiency in Machine Learning, data visualization, and causal inference transitioning from theory to application.'
        },
        {
          role: 'Bachelor of Arts, Math & Statistics',
          company: 'Concordia University',
          date: '2022 - 2026',
          learning: 'Building a robust mathematical foundation to model and solve complex problems through statistical analysis.'
        }
      ]
    },
    skills: {
      title: "Skills & Technologies",
      categories: [
        { title: "Data Analysis & Prep", skills: ["Pandas", "NumPy", "Data Pipelines", "Pattern Finding"] },
        { title: "Machine Learning & Stats", skills: ["Scikit-learn", "Econometrics", "Predictive Modeling", "Regression Analysis"] },
        { title: "Visualization & UI", skills: ["Streamlit", "Dash", "Plotly", "Seaborn", "Matplotlib"] },
        { title: "Development & AI", skills: ["Python", "TypeScript", "AppScript", "Prompt Engineering"] }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Bixi Patterns",
          description: "Interactive dashboard analyzing Montreal's Bixi bike usage through geospatial data to visualize urban mobility patterns and predict station availability trends.",
          stack: ["Streamlit", "Python", "Pandas", "Matplotlib", "Bixi Open Data", "Données Smart City"],
          image: "https://raw.githubusercontent.com/arthuralbo/Bixi-Patterns/main/Gemini_Generated_Image_fdszosfdszosfdsz%20(1).png"
        },
        {
          title: "CleanCode Data",
          description: "CleanCode Data is a Google Sheets extension that validates, cleans, and transforms raw datasets into analysis-ready structures directly within your sidebar.",
          stack: ["Google Apps Script", "TypeScript", "React", "Data Engineering", "Automation"],
          image: "https://raw.githubusercontent.com/arthuralbo/CleanCode-Data/main/Gemini_Generated_Image_dy3z2bdy3z2bdy3z.png"
        }
      ]
    },
    cleanCode: {
      back: "Back to Home Page",
      summaryLabel: "Product Summary",
      subtitle: "Precision data preparation for high-integrity analysis.",
      overviewTitle: "Overview",
      overview: "CleanCode Data is a Google Sheets extension designed to bridge the gap between messy raw spreadsheets and analysis-ready datasets. By enforcing strict data typing and offering an iterative 'Scan-and-Fix' workflow, it eliminates common data entry errors, standardizes complex variables, and prepares your data for machine learning or advanced reporting without ever leaving your spreadsheet.",
      featuresTitle: "Key Features",
      features: [
        { title: "Strict Type Gatekeeping", desc: "Prevents 'dirty data' from entering your pipeline by validating Numeric and Date formats before processing." },
        { title: "Non-Destructive Workflow", desc: "Original data remains untouched; all transformations are generated in new, labeled columns." },
        { title: "Iterative Diagnostic Engine", desc: "Real-time 'health badges' update as you clean, ensuring 100% data transparency." },
        { title: "Ordinal Intelligence", desc: "Custom drag-and-drop interface to define the hierarchy of your categorical data." }
      ],
      stackTitle: "Technology Stack",
      tryLive: "Try it live with an example dataset",
      tryLiveLink: "https://docs.google.com/spreadsheets/d/1FmnY1-ywJPpdFCUWFsIXITJuEnfP31Vt3s0RWHyXq_A/copy",
      demoGuide: {
        title: "Demo Quick-Start Guide",
        step1: "Click the button to open the template. When prompted 'Would you like to make a copy?', select **Make a copy**.",
        step2: "Wait a few moments (approx. 30s) for the extension scripts to load. The **CleanCode Data** menu will appear in the top toolbar.",
        step3: "Click the menu to launch. An authorization dialog will appear. Click **OK**.",
        step4: "In the pop-up, click **Advanced** -> **Go to CleanCode Data Engine (unsafe)** to proceed with the script setup.",
        step5: "Review and **Allow** permissions (manage spreadsheets and run content). You're now ready to clean data!"
      },
      howToUse: {
        title: "How to Use CleanCode Data",
        stepLabel: "Step",
        steps: [
          {
            title: "Define the Schema",
            desc: "Upon launching the extension, select the columns you wish to review. Assign a Target Type (Numeric, Date, or Categorical) to each. This tells the 'Gatekeeper' how to validate your data."
          },
          {
            title: "Run the Diagnostic Scan",
            desc: "Click Validate & Scan. CleanCode Data will perform a deep dive into your selection. If 'Numeric' data contains text, the tool will pause and highlight the exact cell for you to fix. If valid, the modules below will 'unlock' and display Yellow Health Badges indicating issues."
          },
          {
            title: "Apply Transformations",
            desc: "Open a specific module (e.g., Missing Values). Configure your strategy for the flagged columns and click Apply. The extension will insert a new column with cleaned data, preserving your original values."
          },
          {
            title: "The Iterative Loop",
            desc: "Because data prep is a sequence, we recommend fixing one category and then clicking Re-Scan. Your health badges will update (thinning out as issues resolve), allowing you to move to the next stage with confidence."
          }
        ]
      },
      coreModules: {
        title: "The Core Modules",
        items: [
          {
            title: "Date Standardization",
            desc: "Eliminate the headache of mixed regional formats. Whether your source data is US-style (MM/DD), European (DD/MM), or text-based (\"02-March\"), this module standardizes everything into ISO format (YYYY-MM-DD) or professional Long Form text."
          },
          {
            title: "Scaling & Outliers",
            desc: "Prepare numeric variables for statistical modeling. Detect outliers using the 3-Sigma rule and apply transformations including Z-Score Standardization, Min-Max Scaling, Log Transforms, or Winsorization (Capping)."
          },
          {
            title: "Missing Values (Imputation)",
            desc: "Handle data gaps strategically. Automatically fill empty cells using Mean/Median for numbers, Mode for categories, or Persistent Forward Fill for time-series and sequential data."
          },
          {
            title: "Structural Cleanup",
            desc: "Clean the \"human\" out of your data. This module performs bulk structural fixes on categorical strings, including white-space trimming, case standardization (Lower/Upper), and the removal of disruptive special characters."
          },
          {
            title: "Categorical Encoding",
            desc: "Translate text into math. Convert labels into machine-readable formats using One-Hot Encoding (Dummies) or Label Encoding (Ordinal), with full support for custom-ranked hierarchies."
          }
        ]
      },
      ready: "Ready for Analysis",
      readyDesc: ""
    },
    contact: {
      title: "Let's build something smarter.",
      desc: "Open to discussing data science opportunities, internships, or complex statistical challenges.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Location",
      location: "Montreal, QC"
    },
    footer: {
      copy: ""
    }
  },
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Parcours',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    hero: {
      hi: "Salut, je m'appelle",
      role: "Étudiant en mathématiques et statistiques",
      desc: "Je continue à apprendre comment concevoir des solutions fondées sur les données grâce à une modélisation statistique rigoureuse. Je transforme des jeux de données complexes en informations claires et exploitables dans des domaines variés, de la mobilité urbaine à l’ingénierie automatisée.",
      ctaWork: "Voir les projets",
      ctaContact: "Me contacter",
      highlights: [
        { title: "Science des données", desc: "Transformer des données complexes en insights exploitables grâce à des algorithmes statistiques." },
        { title: "Planification intelligente", desc: "Optimisation des environnements urbains par la conception guidée par les données et la modélisation prédictive." },
        { title: "Données géospatiales", desc: "Cartographie et analyse de données liées à des localisations géographiques spécifiques." },
        { title: "Apprentissage automatique", desc: "Prévision des besoins en infrastructures avec une rigueur statistique." }
      ]
    },
    about: {
      title: "À propos de Arthur Albo",
      p1: "Je suis étudiant en 4e année en mathématiques et statistiques à l’Université Concordia, où je termine une spécialisation en économétrie et programmation. Suite à un parcours en science des données, j’utilise l’apprentissage automatique et la modélisation prédictive, pour transformer des données réelles, souvent désordonnées, en informations exploitables.",
      p2: "Je m’intéresse à l’impact concret de ces modèles sur le monde réel. Qu’il s’agisse de développer des outils pour nettoyer des feuilles de calcul complexes ou d’analyser des dynamiques géospatiales dans les infrastructures de villes intelligentes, mon objectif est de faire le lien entre les équations abstraites et l’efficacité opérationnelle."
    },
    experience: {
      title: "Parcours & développement",
      keyLearning: "Apprentissages clés",
      items: [
        {
          role: 'Data Scientist / Développeur',
          company: 'InsightSolver',
          date: '2025 - Présent',
          learning: 'Contribution à la création d’une solution de détection de patterns basée sur les données via le développement de tableaux de bord interactifs en Dash et Streamlit.'
        },
        {
          role: 'Data Scientist (Stagiaire)',
          company: 'Data Science Institute',
          date: '2023 - 2024',
          learning: 'Renforcement de mes compétences techniques en apprentissage automatique, visualisation de données et inférence causale, en passant de la théorie à l’application concrète.'
        },
        {
          role: 'Baccalauréat en arts, mathématiques et statistiques',
          company: 'Université Concordia',
          date: '2022 - 2026',
          learning: 'Développer une base mathématique solide pour modéliser et résoudre des problèmes complexes à l’aide de l’analyse statistique.'
        }
      ]
    },
    skills: {
      title: "Compétences & technologies",
      categories: [
        { title: "Analyse et préparation des données", skills: ["Pandas", "NumPy", "Pipelines de données", "Détection de motifs"] },
        { title: "Apprentissage automatique & statistiques", skills: ["Scikit-learn", "Économétrie", "Modélisation prédictive", "Analyse de régression"] },
        { title: "Visualisation & interface", skills: ["Streamlit", "Dash", "Plotly", "Seaborn", "Matplotlib"] },
        { title: "Développement & IA", skills: ["Python", "TypeScript", "AppScript", "Prompt Engineering"] }
      ]
    },
    projects: {
      title: "Projets phares",
      items: [
        {
          title: "Bixi Patterns",
          description: "Tableau de bord interactif analysant l’utilisation du réseau Bixi de Montréal à partir de données géospatiales afin de visualiser les dynamiques de mobilité urbaine et de prédire la disponibilité des stations.",
          stack: ["Streamlit", "Python", "Pandas", "Matplotlib", "Données ouvertes Bixi", "Données Smart City"],
          image: "https://raw.githubusercontent.com/arthuralbo/Bixi-Patterns/main/Gemini_Generated_Image_fdszosfdszosfdsz%20(1).png"
        },
        {
          title: "CleanCode Data",
          description: "CleanCode Data est une extension Google Sheets qui valide, nettoie et transforme des jeux de données bruts en structures prêtes pour l’analyse, directement depuis la barre latérale.",
          stack: ["Google Apps Script", "TypeScript", "React", "Ingénierie des données", "Automatisation"],
          image: "https://raw.githubusercontent.com/arthuralbo/CleanCode-Data/main/Gemini_Generated_Image_dy3z2bdy3z2bdy3z.png"
        }
      ]
    },
    cleanCode: {
      back: "Retour à l’accueil",
      summaryLabel: "Résumé du produit",
      subtitle: "Préparation de données de précision pour des analyses fiables.",
      overviewTitle: "Aperçu",
      overview: "CleanCode Data est une extension Google Sheets conçue pour transformer des feuilles de calcul brutes désordonnées en des jeux de données prêts pour l’analyse. En imposant un typage strict des données et un flux de travail itératif de type « analyser et corriger », l’outil élimine les erreurs courantes de saisie, standardise des variables complexes et prépare vos données pour le machine learning ou le reporting avancé, sans jamais quitter votre feuille de calcul.",
      featuresTitle: "Fonctionnalités clés",
      features: [
        { title: "Contrôle strict des types", desc: "Empêche l’entrée de données corrompues dans votre pipeline en validant les formats numériques et de date avant traitement." },
        { title: "Flux de travail non destructif", desc: "Les données originales restent intactes ; toutes les transformations sont générées dans de nouvelles colonnes clairement identifiées." },
        { title: "Moteur de diagnostic itératif", desc: "Des indicateurs de qualité en temps réel se mettent à jour au fil du nettoyage, garantissant une transparence totale." },
        { title: "Intelligence ordinale", desc: "Interface personnalisée de glisser-déposer pour définir la hiérarchie de vos variables catégorielles." }
      ],
      stackTitle: "Stack technologique",
      tryLive: "Tester l'extension avec un jeux de données test",
      tryLiveLink: "https://docs.google.com/spreadsheets/d/1FmnY1-ywJPpdFCUWFsIXITJuEnfP31Vt3s0RWHyXq_A/copy",
      demoGuide: {
        title: "Guide de démarrage rapide de la démo",
        step1: "Cliquez sur le bouton pour ouvrir le modèle. Lorsque la question 'Voulez-vous faire une copie ?' apparaît, sélectionnez **Créer une copie**.",
        step2: "Attendez quelques instants (environ 30s) pour que les scripts de l'extension se chargent. Le menu **CleanCode Data** apparaîtra dans la barre d'outils supérieure.",
        step3: "Cliquez sur le menu pour lancer l'outil. Une boîte de dialogue d'autorisation s'affichera. Cliquez sur **OK**.",
        step4: "Dans la fenêtre pop-up, cliquez sur **Paramètres avancés** -> **Accéder à CleanCode Data Engine (non sécurisé)** pour configurer le script.",
        step5: "Examinez et cliquez sur **Autoriser** pour valider les permissions (gérer les feuilles de calcul). Vous êtes prêt à nettoyer vos données !",
      },
      howToUse: {
        title: "Comment utiliser CleanCode Data",
        stepLabel: "Étape",
        steps: [
          {
            title: "Définir le schéma",
            desc: "Au lancement de l’extension, sélectionnez les colonnes à analyser et assignez un type cible (Numérique, Date ou Catégoriel). Cela indique au « Gatekeeper » comment valider vos données."
          },
          {
            title: "Lancer l’analyse diagnostique",
            desc: "Cliquez sur Valider & Analyser. CleanCode Data inspecte en profondeur votre sélection. Si une colonne numérique contient du texte, l’outil s’arrête et met en évidence la cellule concernée. Si les données sont valides, les modules se déverrouillent et affichent des indicateurs de qualité jaunes signalant les problèmes."
          },
          {
            title: "Appliquer les transformations",
            desc: "Ouvrez un module spécifique (ex. : valeurs manquantes), configurez votre stratégie pour les colonnes signalées, puis cliquez sur Appliquer. Une nouvelle colonne contenant les données nettoyées est ajoutée, tout en conservant les valeurs originales."
          },
          {
            title: "La boucle itérative",
            desc: "La préparation des données étant un processus séquentiel, il est recommandé de corriger une catégorie à la fois puis de relancer l’analyse. Les indicateurs se mettront à jour, vous permettant de progresser avec confiance."
          }
        ]
      },
      coreModules: {
        title: "Modules principaux",
        items: [
          {
            title: "Standardisation des dates",
            desc: "Élimine les problèmes liés aux formats régionaux mixtes. Qu’il s’agisse de formats américains (MM/JJ), européens (JJ/MM) ou textuels (« 02-mars »), tout est converti en format ISO (AAAA-MM-JJ) ou en texte long professionnel."
          },
          {
            title: "Mise à l’échelle & valeurs aberrantes",
            desc: "Préparez les variables numériques pour la modélisation statistique. Détection des valeurs aberrantes via la règle des 3 sigma et application de transformations telles que la standardisation Z-score, le Min-Max scaling, les transformations logarithmiques ou la winsorisation."
          },
          {
            title: "Valeurs manquantes (imputation)",
            desc: "Gestion stratégique des données manquantes. Remplissage automatique par moyenne ou médiane pour les données numériques, mode pour les catégories, ou propagation temporelle pour les séries chronologiques."
          },
          {
            title: "Nettoyage structurel",
            desc: "Élimine les erreurs humaines des données. Correction en masse des chaînes catégorielles : suppression des espaces inutiles, standardisation de la casse et suppression des caractères spéciaux perturbateurs."
          },
          {
            title: "Encodage catégoriel",
            desc: "Traduction du texte en mathématiques. Conversion des étiquettes en formats lisibles par machine via l’encodage One-Hot ou Label (ordinal), avec prise en charge complète des hiérarchies personnalisées."
          }
        ]
      },
      ready: "Prêt pour l’analyse",
      readyDesc: ""
    },
    contact: {
      title: "Imaginons des solutions plus intelligentes",
      desc: "Ouvert aux discussions sur des opportunités en science des données, des stages ou des défis statistiques complexes.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      locationLabel: "Localisation",
      location: "Montréal, QC"
    },
    footer: {
      copy: ""
    }
  }
};

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: 'en' | 'fr', setLang: (l: 'en' | 'fr') => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const t = translations[lang].nav;

  const navItems = [
    { name: t.about, id: 'about' },
    { name: t.experience, id: 'experience' },
    { name: t.skills, id: 'skills' },
    { name: t.projects, id: 'projects' },
    { name: t.contact, id: 'contacts' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, navItems]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-emerald-100 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tighter text-slate-900 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ARTHUR<span className="text-emerald-500">ALBO</span>
        </motion.div>
        
        <div className="flex items-center space-x-4 md:space-x-12">
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative hover:text-emerald-600 transition-colors uppercase tracking-widest py-1 font-semibold ${activeSection === item.id ? 'text-emerald-600' : ''}`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="group flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-200 bg-white/50 backdrop-blur-sm hover:border-emerald-400 hover:bg-white transition-all shadow-sm"
          >
            <div className="p-1 bg-emerald-50 rounded-full text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <Languages className="w-3.5 h-3.5" />
            </div>
            <div className="overflow-hidden relative h-4 w-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={lang}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute inset-0 text-[10px] font-black tracking-widest text-slate-600 uppercase flex items-center justify-center"
                >
                  {lang === 'en' ? 'FR' : 'EN'}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

const CleanCodeDetail = ({ lang, setLang, onBack }: { lang: 'en' | 'fr', setLang: (l: 'en' | 'fr') => void, onBack: () => void }) => {
  const t = translations[lang].cleanCode;
  const project = translations[lang].projects.items[1];
  
  const stepIcons = [
    <Settings className="w-6 h-6 text-emerald-500" />,
    <Search className="w-6 h-6 text-emerald-500" />,
    <Wand2 className="w-6 h-6 text-emerald-500" />,
    <RefreshCcw className="w-6 h-6 text-emerald-500" />
  ];

  const moduleIcons = [
    <Calendar className="w-6 h-6 text-emerald-500" />,
    <TrendingUp className="w-6 h-6 text-emerald-500" />,
    <PlusCircle className="w-6 h-6 text-emerald-500" />,
    <Eraser className="w-6 h-6 text-emerald-500" />,
    <Binary className="w-6 h-6 text-emerald-500" />
  ];

  const TryLiveSection = () => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-24 relative"
    >
      {/* Instructional Bubble / Card */}
      <div className="max-w-3xl mx-auto bg-white border border-emerald-100 rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-emerald-500/10 border-t-8 border-t-emerald-500">
        <div className="flex items-center gap-3 mb-8 text-emerald-600">
          <Info className="w-6 h-6" />
          <h3 className="text-2xl font-black uppercase tracking-tight">{t.demoGuide.title}</h3>
        </div>
        
        <div className="grid gap-6 mb-12">
          {[
            { text: t.demoGuide.step1, icon: <Copy className="w-4 h-4" /> },
            { text: t.demoGuide.step2, icon: <Clock className="w-4 h-4" /> },
            { text: t.demoGuide.step3, icon: <MousePointer2 className="w-4 h-4" /> },
            { text: t.demoGuide.step4, icon: <Key className="w-4 h-4" /> },
            { text: t.demoGuide.step5, icon: <CheckCircle2 className="w-4 h-4" /> },
          ].map((guideStep, idx) => (
            <div key={idx} className="flex gap-4 items-start group">
              <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-black text-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {guideStep.icon}
              </div>
              <p className="text-slate-600 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: guideStep.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={t.tryLiveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-emerald-600 text-white font-black rounded-full hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/30 group"
          >
            <TableIcon className="w-7 h-7" />
            <span className="text-xl">{t.tryLive}</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 pt-32 pb-24 px-6 relative"
    >
      {/* Top Left: Back Button */}
      <motion.button 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-emerald-100 rounded-full text-emerald-600 font-bold hover:bg-white hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 transition-all group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm tracking-tight">{t.back}</span>
      </motion.button>

      {/* Top Right: Language Switcher */}
      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
        className="fixed top-8 right-8 z-50 group flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-200 bg-white/80 backdrop-blur-md hover:border-emerald-400 hover:bg-white transition-all shadow-sm"
      >
        <div className="p-1 bg-emerald-50 rounded-full text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
          <Languages className="w-3.5 h-3.5" />
        </div>
        <div className="overflow-hidden relative h-4 w-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 text-[10px] font-black tracking-widest text-slate-600 uppercase flex items-center justify-center"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.button>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.summaryLabel}
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">{project.title}</h1>
          <p className="text-xl md:text-2xl text-emerald-600 font-bold mb-8">{t.subtitle}</p>
          
          {/* Tighter Video Container Fix */}
          <div className="w-full rounded-[2.5rem] overflow-hidden border-2 border-emerald-100 shadow-2xl shadow-emerald-500/10 mb-12 bg-white relative flex items-center justify-center">
            <video 
              src="https://raw.githubusercontent.com/arthuralbo/CleanCode-Data/main/F3078A47-D13B-4FC2-AB09-A0B92CA76AA4.MOV" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover scale-[1.05]" // Slight zoom to hide potential black margins in source
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-emerald-500" />
                {t.overviewTitle}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{t.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                {t.featuresTitle}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {t.features.map((feature, idx) => (
                  <div key={idx} className="p-6 bg-white rounded-2xl border border-emerald-50 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section className="p-8 bg-emerald-900 text-white rounded-[2rem] shadow-xl">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                {t.stackTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-black tracking-widest bg-white/10 text-emerald-200 px-3 py-1.5 rounded-lg border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* --- TRY IT LIVE SECTION 1 --- */}
        <TryLiveSection />

        {/* How to Use Section */}
        <section className="pt-20 border-t border-emerald-100 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.howToUse.title}</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid gap-8">
            {t.howToUse.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 p-10 bg-white border border-emerald-50 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all"
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner">
                    {stepIcons[idx]}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-emerald-500 font-black text-sm uppercase tracking-[0.2em]">{t.howToUse.stepLabel} {idx + 1}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Modules Section */}
        <section className="pt-20 border-t border-emerald-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.coreModules.title}</h2>
            <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {t.coreModules.items.map((module, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white border border-emerald-50 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all flex flex-col lg:flex-row gap-6 items-start"
              >
                <div className="shrink-0 p-4 bg-emerald-50 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {moduleIcons[idx]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    {module.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{module.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Callout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[3rem] text-white text-center shadow-2xl shadow-emerald-500/20"
          >
            <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-emerald-100" />
            <h3 className="text-3xl font-black mb-4">{t.ready}</h3>
            {t.readyDesc && <p className="text-emerald-50 max-w-xl mx-auto text-lg">{t.readyDesc}</p>}
          </motion.div>
        </section>

        {/* --- TRY IT LIVE SECTION 2 (END OF PAGE) --- */}
        <TryLiveSection />
      </div>
    </motion.div>
  );
};

const Hero = ({ lang }: { lang: 'en' | 'fr' }) => {
  const t = translations[lang].hero;
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };
  const icons = [<Activity className="w-6 h-6 text-emerald-600" />, <TrendingUp className="w-6 h-6 text-teal-600" />, <Navigation className="w-6 h-6 text-emerald-500" />, <Zap className="w-6 h-6 text-emerald-400" />];
  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden bg-slate-50">
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] text-slate-900">
            {t.hi} <span className="gradient-text">Arthur Albo</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-4 font-semibold">{t.role}</p>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">{t.desc}</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold transition-all shadow-lg shadow-emerald-200 flex items-center justify-center group">
              {t.ctaWork} <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contacts" onClick={(e) => scrollToSection(e, 'contacts')} className="w-full sm:w-auto px-8 py-4 border border-emerald-200 hover:bg-white text-emerald-700 rounded-full font-bold transition-all bg-white/50 backdrop-blur-sm flex items-center justify-center">
              {t.ctaContact}
            </a>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {t.highlights.map((box, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }} whileHover={{ y: -5 }} className="p-8 rounded-3xl border border-emerald-50 bg-emerald-50/30 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">{icons[idx]}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 leading-tight">{box.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = ({ lang }: { lang: 'en' | 'fr' }) => {
  const t = translations[lang].about;
  return (
    <section id="about" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">{t.title}</h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Timeline = ({ lang }: { lang: 'en' | 'fr' }) => {
  const t = translations[lang].experience;
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">{t.title}</h2>
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-300 before:to-transparent">
          {t.items.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-50 text-emerald-500 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"><div className="w-2.5 h-2.5 rounded-full bg-current" /></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl border border-emerald-100 bg-white hover:bg-emerald-50/30 transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className="font-bold text-slate-900 text-lg">{exp.role}</div>
                  <time className="text-[10px] font-black text-emerald-600 uppercase tracking-widest px-2 py-1 bg-emerald-100 rounded shrink-0">{exp.date}</time>
                </div>
                <div className="text-slate-600 font-semibold mb-4">{exp.company}</div>
                <div className="text-slate-500 text-sm italic border-t border-emerald-50 pt-4"><span className="text-emerald-600 font-bold not-italic mr-1">{t.keyLearning}:</span> {exp.learning}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ lang }: { lang: 'en' | 'fr' }) => {
  const t = translations[lang].skills;
  const icons = [
    <Database className="w-6 h-6 text-emerald-600" />, 
    <BrainCircuit className="w-6 h-6 text-teal-600" />, 
    <BarChart3 className="w-6 h-6 text-green-600" />, 
    <Code2 className="w-6 h-6 text-emerald-500" />
  ];
  return (
    <section id="skills" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">{t.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.categories.map((cat, idx) => (
            <motion.div key={cat.title} whileHover={{ y: -5 }} className="p-8 rounded-3xl border border-emerald-50 bg-emerald-50/30 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-4 bg-white rounded-2xl border border-emerald-100 shadow-sm">{icons[idx]}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{cat.title}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map(skill => <span key={skill} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-emerald-700 border border-emerald-100 shadow-sm">{skill}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = ({ lang, setView }: { lang: 'en' | 'fr', setView: (v: 'home' | 'cleancode') => void }) => {
  const t = translations[lang].projects;
  const urls = [
    { github: "https://github.com/arthuralbo/Bixi-Patterns", demo: "https://bixi-patterns.streamlit.app/", isExternal: true },
    { github: "https://github.com/arthuralbo/CleanCode-Data", demo: "cleancode", isExternal: false }
  ];

  const handleDemoClick = (e: React.MouseEvent, url: string, isExternal: boolean) => {
    if (!isExternal) {
      e.preventDefault();
      setView('cleancode');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {t.items.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-emerald-50 hover:border-emerald-300 transition-all shadow-md hover:shadow-2xl flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a href={urls[idx]?.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-emerald-600 rounded-full hover:bg-emerald-500 hover:text-white transition-all shadow-lg" aria-label="GitHub"><Github className="w-5 h-5" /></a>
                  <a 
                    href={urls[idx]?.isExternal ? urls[idx].demo : '#'} 
                    onClick={(e) => handleDemoClick(e, urls[idx].demo, urls[idx].isExternal)}
                    target={urls[idx]?.isExternal ? "_blank" : "_self"} 
                    rel={urls[idx]?.isExternal ? "noopener noreferrer" : ""}
                    className="p-3 bg-white text-emerald-600 rounded-full hover:bg-emerald-500 hover:text-white transition-all shadow-lg" 
                    aria-label="Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{project.title}</h3>
                <p className="text-slate-600 text-base mb-8 leading-relaxed flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-black tracking-widest text-emerald-600 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-lg">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ lang }: { lang: 'en' | 'fr' }) => {
  const t = translations[lang].contact;

  return (
    <section id="contacts" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">{t.title}</h2>
        <p className="text-slate-600 mb-16 text-lg max-w-2xl mx-auto">{t.desc}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          <motion.a 
            whileHover={{ y: -5, scale: 1.02 }}
            href="mailto:arthur.b.albo@gmail.com" 
            className="flex items-center gap-6 p-8 bg-white border border-emerald-100 rounded-[2rem] group transition-all shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 text-left"
          >
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 transition-all shadow-sm shrink-0">
              <Mail className="w-6 h-6 text-emerald-600 group-hover:text-white" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">{t.emailLabel}</div>
              <div className="text-slate-900 font-bold text-lg break-all md:text-xl">arthur.b.albo@gmail.com</div>
            </div>
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -5, scale: 1.02 }}
            href="https://www.linkedin.com/in/arthur-albo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-6 p-8 bg-white border border-emerald-100 rounded-[2rem] group transition-all shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 text-left"
          >
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-[#0077B5] transition-all shadow-sm shrink-0">
              <Linkedin className="w-6 h-6 text-emerald-600 group-hover:text-white" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">{t.linkedinLabel}</div>
              <div className="text-slate-900 font-bold text-lg md:text-xl">linkedin.com/in/arthur-albo</div>
            </div>
          </motion.a>

          <motion.a 
            whileHover={{ y: -5, scale: 1.02 }}
            href="https://github.com/arthuralbo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-6 p-8 bg-white border border-emerald-100 rounded-[2rem] group transition-all shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 text-left"
          >
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center group-hover:bg-[#24292e] transition-all shadow-sm shrink-0">
              <Github className="w-6 h-6 text-emerald-600 group-hover:text-white" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">{t.githubLabel}</div>
              <div className="text-slate-900 font-bold text-lg md:text-xl">github.com/arthuralbo</div>
            </div>
          </motion.a>

          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex items-center gap-6 p-8 bg-white border border-emerald-100 rounded-[2rem] group transition-all shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 text-left"
          >
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <MapPin className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">{t.locationLabel}</div>
              <div className="text-slate-900 font-bold text-lg md:text-xl">{t.location}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: 'en' | 'fr' }) => {
  const t = translations[lang].footer;
  return (
    <footer className="py-12 px-6 border-t border-emerald-50 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-slate-400 text-sm font-medium">© {new Date().getFullYear()} Arthur Albo. {t.copy}</div>
        <div className="flex gap-6">
          <a href="https://github.com/arthuralbo?tab=repositories" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all border border-slate-100"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/arthur-albo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all border border-slate-100"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:arthur.b.albo@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 transition-all border border-slate-100"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [view, setView] = useState<'home' | 'cleancode'>('home');

  const handleBackToHome = () => {
    setView('home');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {view === 'home' && <Navbar lang={lang} setLang={setLang} />}
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero lang={lang} />
            <About lang={lang} />
            <Timeline lang={lang} />
            <Skills lang={lang} />
            <Projects lang={lang} setView={setView} />
            <Contact lang={lang} />
            <Footer lang={lang} />
          </motion.div>
        ) : (
          <CleanCodeDetail key="cleancode" lang={lang} setLang={setLang} onBack={handleBackToHome} />
        )}
      </AnimatePresence>
    </div>
  );
}
