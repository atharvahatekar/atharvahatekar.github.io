// i18n.js — lightweight language switcher + translations
// Supported UI languages: EN (English), DE (German)
// Hero typewriter cycles through 10 greetings regardless of UI language.

(function () {
    'use strict';

    // ─────────────────────────────────────────────────────────────
    // Translations
    // Keys are dotted; values are per-locale strings.
    // ─────────────────────────────────────────────────────────────
    const TRANSLATIONS = {
        en: {
            // Nav
            'nav.tagline': 'Data Scientist // Germany',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.resume': 'Resume',
            'nav.theme_title': 'Switch Theme',
            'nav.lang_title': 'Switch language',
            'nav.menu_aria': 'Toggle navigation',

            // Doc titles
            'title.home': 'Atharva Hatekar | Data Scientist & AI Engineer',
            'title.projects': 'Atharva | Projects',
            'title.resume': 'Atharva | Resume',

            // Home / hero
            'hero.label': 'Atharva Hatekar // Data Scientist // Germany',
            'hero.subtitle_line1': 'DATA SCIENTIST & AI ENGINEER //',
            'hero.subtitle_line2': 'SCALABLE PIPELINES //',
            'hero.subtitle_line3': 'AI PRODUCT DEVELOPMENT',

            // Skills
            'skills.label': 'Status: Active // Skills',
            'skills.langs': 'Languages & Frameworks',
            'skills.ml': 'Machine Learning & Data',
            'skills.ai': 'AI Engineering',
            'skills.mlops': 'MLOps & Infrastructure',
            'skills.obs': 'Evaluation & Observability',
            'skills.proj': 'Analytics & Delivery',

            // Home projects
            'home.projects.label': 'Repository Feed // Featured',
            'home.projects.explore': 'explore_all',
            'home.projects.slm_desc': 'A 60M-parameter medical language model written from scratch in PyTorch — attention, RoPE, RMSNorm and all.',
            'home.projects.rag_desc': 'Multi-agent retrieval system on LangGraph and FastAPI, with guardrails and end-to-end evaluation.',
            'home.projects.churn_desc': 'XGBoost churn model productionised on AWS with data validation, tracking, and CI/CD.',

            // Contact
            'contact.label': 'Status: Online // Contact',
            'contact.prompt': '// Interested in collaboration? Execute the command below.',

            // atharva.py code box (string literals + comment only; keywords stay as code)
            'code.doc_line1': 'Developer bridging the gap between',
            'code.doc_line2': 'models and production, architecting',
            'code.doc_line3': 'scalable data & ML pipelines.',
            'code.role': '"Data Scientist / AI Engineer"',
            'code.base': '"Cottbus, Germany"',
            'code.comment': '# years of experience',
            'code.mission': '"From messy data to reliable predictions, at scale."',

            // Footer / status
            'status.online': 'System Status: Online',
            'status.cottbus': 'Germany',
            'footer.copy': '© 2026 Atharva Hatekar. Built with Love ❤️',

            // Projects page
            'projects.label': 'Repository Feed // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJECTS',
            'projects.subtitle': 'Language models built from scratch, agentic RAG systems, and end-to-end MLOps pipelines.',
            'projects.briefing_label': 'System Briefing',
            'projects.briefing_text': 'Repositories fetched live from the GitHub API, curated and ordered by depth.',
            'projects.source': 'Source',
            'projects.status': 'Status',
            'projects.status_online': 'Online',
            'projects.loading': '_fetching_data_from_github...',
            'projects.git_cmd': '> git fetch origin main --sort=depth',
            'projects.live_link': 'Live ↗',
            'projects.source_link': 'GitHub ↗',

            // CV page
            'cv.label': 'System Profile // Work History',
            'cv.title_line1': 'CAREER /',
            'cv.title_line2': 'EXPERIENCE',
            'cv.subtitle': 'Four years turning raw data into decisions — from executive dashboards to machine learning running in production.',
            'cv.briefing_label': 'System Briefing',
            'cv.briefing_text': 'Work history with roles, achievements, and tech stacks — plus a skill density heatmap.',
            'cv.experience': 'Experience',
            'cv.years': '4+ yrs',
            'cv.base': 'Base',
            'cv.loading': '_fetching_experience_data...',
            'cv.download': '[ DOWNLOAD_RESUME_PDF ]',
            'cv.roles_label': '_roles.timeline',
            'cv.heatmap_label': '_skill_density.heatmap',
            'cv.education_label': '_education.log',
            'cv.publication_label': '_publication.bib',
            'cv.achievements_label': '_achievements.txt',
            'cv.languages_label': '_languages.cfg',
            'cv.thesis': 'Thesis',
            'cv.read_paper': 'read_paper ↗',
        },

        de: {
            'nav.tagline': 'Data Scientist // Deutschland',
            'nav.about': 'Über mich',
            'nav.projects': 'Projekte',
            'nav.resume': 'Lebenslauf',
            'nav.theme_title': 'Theme wechseln',
            'nav.lang_title': 'Sprache wechseln',
            'nav.menu_aria': 'Navigation umschalten',

            'title.home': 'Atharva Hatekar | Data Scientist & AI Engineer',
            'title.projects': 'Atharva | Projekte',
            'title.resume': 'Atharva | Lebenslauf',

            'hero.label': 'Atharva Hatekar // Data Scientist // Deutschland',
            'hero.subtitle_line1': 'DATA SCIENTIST & AI ENGINEER //',
            'hero.subtitle_line2': 'SKALIERBARE PIPELINES //',
            'hero.subtitle_line3': 'ENTWICKLUNG VON KI-PRODUKTEN',

            'skills.label': 'Status: Aktiv // Kompetenzen',
            'skills.langs': 'Sprachen & Frameworks',
            'skills.ml': 'Machine Learning & Daten',
            'skills.ai': 'AI Engineering',
            'skills.mlops': 'MLOps & Infrastruktur',
            'skills.obs': 'Evaluation & Observability',
            'skills.proj': 'Analytics & Delivery',

            'home.projects.label': 'Repository-Feed // Ausgewählt',
            'home.projects.explore': 'alle_ansehen',
            'home.projects.slm_desc': 'Ein medizinisches Sprachmodell mit 60 Mio. Parametern, von Grund auf in PyTorch geschrieben — Attention, RoPE, RMSNorm inklusive.',
            'home.projects.rag_desc': 'Multi-Agenten-Retrieval-System auf LangGraph und FastAPI, mit Guardrails und durchgängiger Evaluation.',
            'home.projects.churn_desc': 'XGBoost-Churn-Modell, auf AWS produktiv gesetzt — mit Datenvalidierung, Tracking und CI/CD.',

            'contact.label': 'Status: Online // Kontakt',
            'contact.prompt': '// Interesse an einer Zusammenarbeit? Führe den Befehl unten aus.',

            'code.doc_line1': 'Entwickler, der Modelle und den',
            'code.doc_line2': 'Betrieb verbindet und skalierbare',
            'code.doc_line3': 'Daten- & ML-Pipelines baut.',
            'code.role': '"Data Scientist / AI Engineer"',
            'code.base': '"Cottbus, Deutschland"',
            'code.comment': '# Jahre Erfahrung',
            'code.mission': '"Von chaotischen Daten zu verlässlichen Vorhersagen, in großem Maßstab."',

            'status.online': 'Systemstatus: Online',
            'status.cottbus': 'Deutschland',
            'footer.copy': '© 2026 Atharva Hatekar. Mit Liebe ❤️ gebaut.',

            'projects.label': 'Repository-Feed // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJEKTE',
            'projects.subtitle': 'Von Grund auf gebaute Sprachmodelle, agentische RAG-Systeme und durchgängige MLOps-Pipelines.',
            'projects.briefing_label': 'System-Briefing',
            'projects.briefing_text': 'Repositories werden live über die GitHub-API geladen, kuratiert und nach Tiefe sortiert.',
            'projects.source': 'Quelle',
            'projects.status': 'Status',
            'projects.status_online': 'Online',
            'projects.loading': '_lade_daten_von_github...',
            'projects.git_cmd': '> git fetch origin main --sort=depth',
            'projects.live_link': 'Live ↗',
            'projects.source_link': 'GitHub ↗',

            'cv.label': 'Systemprofil // Werdegang',
            'cv.title_line1': 'KARRIERE /',
            'cv.title_line2': 'ERFAHRUNG',
            'cv.subtitle': 'Vier Jahre, in denen aus Rohdaten Entscheidungen wurden — von Management-Dashboards bis zu Machine Learning im Produktivbetrieb.',
            'cv.briefing_label': 'System-Briefing',
            'cv.briefing_text': 'Werdegang mit Rollen, Erfolgen und Tech-Stacks — dazu eine Skill-Density-Heatmap.',
            'cv.experience': 'Erfahrung',
            'cv.years': '4+ Jahre',
            'cv.base': 'Standort',
            'cv.loading': '_lade_erfahrungsdaten...',
            'cv.download': '[ LEBENSLAUF_PDF_HERUNTERLADEN ]',
            'cv.roles_label': '_rollen.timeline',
            'cv.heatmap_label': '_skill_density.heatmap',
            'cv.education_label': '_ausbildung.log',
            'cv.publication_label': '_publikation.bib',
            'cv.achievements_label': '_erfolge.txt',
            'cv.languages_label': '_sprachen.cfg',
            'cv.thesis': 'Masterarbeit',
            'cv.read_paper': 'paper_lesen ↗',
        },
    };

    // ─────────────────────────────────────────────────────────────
    // Dynamic content translations (projects + experience)
    // Keyed by a stable ID (repo name / job id).
    // ─────────────────────────────────────────────────────────────
    const PROJECTS = {
        'Medical-SLM': {
            en: {
                title: 'Medical SLM',
                desc: 'A 60M-parameter transformer written from scratch in PyTorch — multi-head latent attention, RoPE, RMSNorm and SwiGLU, all hand-implemented. Pre-trained on 600M+ tokens under consumer-GPU constraints, then instruction-tuned and scored with a custom zero-shot harness on MedMCQA and PubMedQA.',
            },
            de: {
                title: 'Medical SLM',
                desc: 'Ein Transformer mit 60 Mio. Parametern, von Grund auf in PyTorch geschrieben — Multi-Head Latent Attention, RoPE, RMSNorm und SwiGLU vollständig selbst implementiert. Pre-Training auf über 600 Mio. Tokens unter Consumer-GPU-Bedingungen, anschließend Instruction-Tuning und Bewertung über eine eigene Zero-Shot-Harness auf MedMCQA und PubMedQA.',
            },
        },
        'Enterprise-Agentic-RAG': {
            en: {
                title: 'Enterprise Agentic RAG',
                desc: 'Production-grade multi-agent RAG on LangGraph and FastAPI, backed by Qdrant and Groq inference. Semantic chunking, FlashRank reranking and history-aware query planning feed multi-step reasoning with stateful memory — NeMo Guardrails blocks jailbreaks, Logfire, LangSmith and RAGAS keep it observable.',
            },
            de: {
                title: 'Enterprise Agentic RAG',
                desc: 'Produktionsreifes Multi-Agenten-RAG auf LangGraph und FastAPI, mit Qdrant als Vektorspeicher und Groq-Inferenz. Semantisches Chunking, FlashRank-Reranking und historienbewusste Query-Planung speisen mehrstufiges Reasoning mit persistentem Gedächtnis — NeMo Guardrails wehrt Jailbreaks ab, Logfire, LangSmith und RAGAS sorgen für Nachvollziehbarkeit.',
            },
        },
        'Customer-Churn-Prediction-ML_Prod': {
            en: {
                title: 'Churn Prediction MLOps',
                desc: 'End-to-end XGBoost churn model productionised on AWS. Great Expectations validates every input batch, MLflow tracks the runs, GitHub Actions ships it, and a Docker + FastAPI service serves it with CloudWatch reliability monitoring on top.',
            },
            de: {
                title: 'Churn Prediction MLOps',
                desc: 'Durchgängiges XGBoost-Churn-Modell, produktiv auf AWS. Great Expectations validiert jeden Eingabe-Batch, MLflow protokolliert die Läufe, GitHub Actions übernimmt das Deployment, und ein Docker-/FastAPI-Service liefert die Vorhersagen — überwacht per CloudWatch.',
            },
        },
        'DeepSeek-From-Scratch': {
            en: {
                title: 'DeepSeek V3 From Scratch',
                desc: 'A full reimplementation of the DeepSeek V3 architecture, built to understand its modern transformer innovations from the inside out — mixture-of-experts routing, latent attention, and the training tricks that make them stable.',
            },
            de: {
                title: 'DeepSeek V3 von Grund auf',
                desc: 'Eine vollständige Reimplementierung der DeepSeek-V3-Architektur, gebaut um ihre modernen Transformer-Neuerungen von innen heraus zu verstehen — Mixture-of-Experts-Routing, Latent Attention und die Trainingskniffe, die das Ganze stabil halten.',
            },
        },
        'GPT2-From-Scratch': {
            en: {
                title: 'GPT-2 From Scratch',
                desc: 'GPT-2 rebuilt end to end: pre-training, classification and instruction fine-tuning, then evaluated with an LLM-as-a-judge setup. The groundwork that everything else here is built on.',
            },
            de: {
                title: 'GPT-2 von Grund auf',
                desc: 'GPT-2 komplett nachgebaut: Pre-Training, Klassifikation und Instruction-Finetuning, anschließend per LLM-as-a-Judge evaluiert. Die Grundlage, auf der alles Weitere hier aufbaut.',
            },
        },
        'LLM-Finetuning': {
            en: {
                title: 'LLM Fine-tuning Lab',
                desc: 'Parameter-efficient fine-tuning with LoRA and QLoRA — adapter configs, quantisation trade-offs, and what actually moves the needle when GPU memory is the binding constraint.',
            },
            de: {
                title: 'LLM-Finetuning-Labor',
                desc: 'Parametereffizientes Finetuning mit LoRA und QLoRA — Adapter-Konfigurationen, Quantisierungs-Trade-offs und die Frage, was wirklich etwas bringt, wenn GPU-Speicher der limitierende Faktor ist.',
            },
        },
        'DOCUMENT-INTELLIGENCE-HUB': {
            en: {
                title: 'Document Intelligence Hub',
                desc: 'An industry-style RAG pipeline built with modular code and LLMOps discipline — ingestion, indexing, retrieval and serving each isolated behind clean interfaces so components can be swapped without rewrites.',
            },
            de: {
                title: 'Document Intelligence Hub',
                desc: 'Eine RAG-Pipeline nach Industriestandard mit modularem Code und LLMOps-Disziplin — Ingestion, Indexierung, Retrieval und Serving jeweils hinter sauberen Schnittstellen gekapselt, sodass Komponenten ohne Umbau austauschbar bleiben.',
            },
        },
        'E-Commerce-Product-Intelligence-Engine': {
            en: {
                title: 'Product Intelligence Engine',
                desc: 'Turns raw e-commerce catalogue and behaviour data into product-level intelligence — enrichment, embedding-based similarity, and ranking signals a merchandising team can actually act on.',
            },
            de: {
                title: 'Product Intelligence Engine',
                desc: 'Verwandelt rohe E-Commerce-Katalog- und Verhaltensdaten in Produktintelligenz — Anreicherung, Embedding-basierte Ähnlichkeit und Ranking-Signale, mit denen ein Merchandising-Team tatsächlich arbeiten kann.',
            },
        },
    };

    // Experience entries, keyed by short id — order matters: most recent first.
    const EXPERIENCE_ORDER = ['metso-thesis', 'metso-ws', 'metso-intern', 'dreamwarez-analyst', 'dreamwarez-swe'];
    const EXPERIENCE = {
        'metso-thesis': {
            common: {
                company: 'Metso',
                companyDisplay: 'Metso',
                companyUrl: 'https://www.metso.com/',
                logo: 'content/company-logos/metso.svg',
                start: '2025-11',
                end: '2026-06',
                stack: [
                    { label: 'PyTorch',            c: 'ml' },
                    { label: 'Graph Neural Nets',  c: 'ml' },
                    { label: 'Anomaly Detection',  c: 'ml' },
                    { label: 'Docker',             c: 'engineering' },
                    { label: 'Azure CI/CD',        c: 'cloud' },
                    { label: 'Grafana',            c: 'analytics' },
                ],
            },
            en: {
                period: '2025 - 2026',
                role: 'Data Scientist (Thesis Researcher)',
                companyNote: 'Frankfurt am Main, Germany',
                description: 'Master’s thesis research on unsupervised anomaly detection for non-stationary industrial multivariate time-series.',
                achievements: [
                    'Extended a Graph Deviation Network with multi-head attention and a prior-informed graph structure, benchmarked against streaming PCA and Adaptive-PCA.',
                    'Detected 17 true anomalous events that existing threshold monitoring had missed.',
                    'Built Dockerised training and inference pipelines turning raw live feeds from 50+ sensor tags into model-ready features, with CI/CD on Azure.',
                    'Shipped a Grafana root-cause dashboard that process engineers used during live equipment testing to trace alerts back to the responsible sensor groups.',
                ],
            },
            de: {
                period: '2025 - 2026',
                role: 'Data Scientist (Masterarbeit)',
                companyNote: 'Frankfurt am Main, Deutschland',
                description: 'Forschung im Rahmen der Masterarbeit zu unüberwachter Anomalieerkennung in nicht-stationären, multivariaten Industriezeitreihen.',
                achievements: [
                    'Erweiterte ein Graph Deviation Network um Multi-Head Attention und eine wissensbasierte Graphstruktur, im Vergleich zu Streaming-PCA und Adaptive-PCA.',
                    'Erkannte 17 echte Anomalien, die die bestehende Schwellenwertüberwachung übersehen hatte.',
                    'Baute dockerisierte Trainings- und Inferenz-Pipelines, die Live-Rohdaten aus über 50 Sensor-Tags in modellfertige Features überführen, mit CI/CD auf Azure.',
                    'Lieferte ein Grafana-Root-Cause-Dashboard, mit dem Verfahrensingenieure bei Live-Anlagentests Alarme auf die verantwortlichen Sensorgruppen zurückführten.',
                ],
            },
        },
        'metso-ws': {
            common: {
                company: 'Metso',
                companyDisplay: 'Metso',
                companyUrl: 'https://www.metso.com/',
                logo: 'content/company-logos/metso.svg',
                start: '2025-04',
                end: '2025-10',
                stack: [
                    { label: 'Isolation Forest', c: 'ml' },
                    { label: 'LOF',              c: 'ml' },
                    { label: 'ARIMA / Prophet',  c: 'ml' },
                    { label: 'LSTM',             c: 'ml' },
                    { label: 'Python',           c: 'engineering' },
                    { label: 'Time-Series',      c: 'analytics' },
                ],
            },
            en: {
                period: '2025',
                role: 'Data Scientist (Working Student)',
                companyNote: 'Frankfurt am Main, Germany',
                description: 'Real-time process monitoring across the plant’s live signal estate.',
                achievements: [
                    'Built a real-time monitoring system processing 100+ live process signals.',
                    'Combined outlier detection (Isolation Forest, LOF) with forecasting (ARIMA, Prophet, LSTM) to catch drift and early faults ahead of the plant’s threshold alarms.',
                    'Cross-checked predictions against real plant behaviour with domain experts, translating their process knowledge into feature engineering and detection rules that cut false alarms by 40%.',
                ],
            },
            de: {
                period: '2025',
                role: 'Data Scientist (Werkstudent)',
                companyNote: 'Frankfurt am Main, Deutschland',
                description: 'Echtzeit-Prozessüberwachung über die gesamten Live-Signale der Anlage.',
                achievements: [
                    'Baute ein Echtzeit-Monitoring-System, das über 100 Live-Prozesssignale verarbeitet.',
                    'Kombinierte Ausreißererkennung (Isolation Forest, LOF) mit Prognosemodellen (ARIMA, Prophet, LSTM), um Drift und beginnende Fehler vor den Schwellenwertalarmen der Anlage zu erkennen.',
                    'Prüfte Vorhersagen gemeinsam mit Fachexperten gegen das reale Anlagenverhalten und übersetzte deren Prozesswissen in Feature Engineering und Erkennungsregeln, die Fehlalarme um 40% reduzierten.',
                ],
            },
        },
        'metso-intern': {
            common: {
                company: 'Metso',
                companyDisplay: 'Metso',
                companyUrl: 'https://www.metso.com/',
                logo: 'content/company-logos/metso.svg',
                start: '2024-10',
                end: '2025-03',
                stack: [
                    { label: 'gRPC',              c: 'engineering' },
                    { label: 'Grafana',           c: 'analytics' },
                    { label: 'Linear Regression', c: 'ml' },
                    { label: 'Python',            c: 'engineering' },
                ],
            },
            en: {
                period: '2024 - 2025',
                role: 'Data Science Intern',
                companyNote: 'Frankfurt am Main, Germany',
                description: 'First contact between the plant’s process control software and a data platform.',
                achievements: [
                    'Integrated the ACT process control software over gRPC to pull live process data.',
                    'Built the plant’s first Grafana KPI dashboard, pairing domain-informed health metrics with linear regression on sensor trends.',
                    'Gave engineers a single view of equipment condition where previously there was none.',
                ],
            },
            de: {
                period: '2024 - 2025',
                role: 'Praktikant Data Science',
                companyNote: 'Frankfurt am Main, Deutschland',
                description: 'Erster Brückenschlag zwischen der Prozessleitsoftware der Anlage und einer Datenplattform.',
                achievements: [
                    'Band die Prozessleitsoftware ACT über gRPC an, um Live-Prozessdaten abzurufen.',
                    'Baute das erste Grafana-KPI-Dashboard der Anlage und verband fachlich fundierte Zustandskennzahlen mit linearer Regression auf Sensortrends.',
                    'Verschaffte den Ingenieuren einen einheitlichen Blick auf den Anlagenzustand, den es zuvor nicht gab.',
                ],
            },
        },
        'dreamwarez-analyst': {
            common: {
                company: 'Dreamwarez',
                companyDisplay: 'Dreamwarez',
                companyUrl: null,
                logo: 'content/company-logos/dreamwarez.svg',
                start: '2021-08',
                end: '2023-02',
                stack: [
                    { label: 'Power BI', c: 'analytics' },
                    { label: 'DAX',      c: 'analytics' },
                    { label: 'SQL',      c: 'engineering' },
                    { label: 'Python',   c: 'engineering' },
                    { label: 'ETL',      c: 'engineering' },
                ],
            },
            en: {
                period: '2021 - 2023',
                role: 'Data Analyst',
                companyNote: 'Pune, India',
                description: 'Consolidating fragmented operational data into reporting senior stakeholders could actually trust.',
                achievements: [
                    'Built and maintained executive Power BI dashboards with DAX-based KPIs, replacing manual spreadsheet reporting with a single reporting layer over multi-source operational data.',
                    'Shipped a hospitality revenue analytics platform for an e-commerce hotel client, delivering RevPAR, GOPPAR, ADR and direct booking ratio on Python and SQL pipelines built from scratch.',
                    'Gave that client the visibility to move from fixed rates to dynamic pricing.',
                ],
            },
            de: {
                period: '2021 - 2023',
                role: 'Data Analyst',
                companyNote: 'Pune, Indien',
                description: 'Zersplitterte Betriebsdaten zu einem Reporting zusammenführen, dem die Geschäftsleitung tatsächlich vertrauen konnte.',
                achievements: [
                    'Baute und pflegte Power-BI-Dashboards für die Geschäftsleitung mit DAX-basierten KPIs und ersetzte manuelles Tabellen-Reporting durch eine einheitliche Reporting-Schicht über Betriebsdaten aus mehreren Quellen.',
                    'Lieferte eine Revenue-Analytics-Plattform für einen E-Commerce-Hotelkunden mit RevPAR, GOPPAR, ADR und Direktbuchungsquote — auf von Grund auf gebauten Python- und SQL-Pipelines.',
                    'Verschaffte diesem Kunden die Transparenz, um von festen Raten auf dynamische Preisgestaltung umzustellen.',
                ],
            },
        },
        'dreamwarez-swe': {
            common: {
                company: 'Dreamwarez',
                companyDisplay: 'Dreamwarez',
                companyUrl: null,
                logo: 'content/company-logos/dreamwarez.svg',
                start: '2021-02',
                end: '2021-07',
                stack: [
                    { label: 'Web Development', c: 'engineering' },
                    { label: 'Agile / Scrum',   c: 'analytics' },
                ],
            },
            en: {
                period: '2021',
                role: 'Software Developer Intern',
                companyNote: 'Pune, India',
                description: 'Where the engineering habits started.',
                achievements: [
                    'Developed responsive web applications with input validation and backend stability improvements.',
                    'Worked within Agile/Scrum delivery cycles.',
                ],
            },
            de: {
                period: '2021',
                role: 'Praktikant Softwareentwicklung',
                companyNote: 'Pune, Indien',
                description: 'Hier fingen die Engineering-Gewohnheiten an.',
                achievements: [
                    'Entwickelte responsive Webanwendungen mit Eingabevalidierung und Stabilitätsverbesserungen im Backend.',
                    'Arbeitete in Agile-/Scrum-Lieferzyklen.',
                ],
            },
        },
    };

    // ─────────────────────────────────────────────────────────────
    // CV dossier: education, publication, achievements, languages.
    // Rendered under the roles/heatmap grid on cv.html.
    // ─────────────────────────────────────────────────────────────
    const DOSSIER = {
        common: {
            education: [
                {
                    id: 'btu',
                    institution: 'Brandenburgische Technische Universität',
                    location: 'Cottbus, Germany',
                    period: '2023 - 2026',
                },
                {
                    id: 'lpu',
                    institution: 'Lovely Professional University',
                    location: 'Jalandhar, India',
                    period: '2017 - 2021',
                },
            ],
            publication: {
                venue: 'International Journal of Advance Research in Engineering, Science & Management (IJARESM)',
                date: '11/2022',
                url: 'https://www.researchgate.net/publication/395346404_Passenger_Security_Using_Facial_Emotion_Recognition_System',
                doi: '10.13140/RG.2.2.31418.86726',
            },
            languages: [
                { name: 'English', level: 'C1' },
                { name: 'Deutsch', level: 'A2' },
                { name: 'हिन्दी', level: 'Native' },
                { name: 'मराठी', level: 'Native' },
            ],
        },
        en: {
            education: {
                btu: { degree: 'M.Sc. Artificial Intelligence', note: 'Unsupervised anomaly detection on non-stationary industrial multivariate time-series.' },
                lpu: { degree: 'B.Tech. Computer Science and Engineering', note: null },
            },
            publication: {
                title: 'Passenger Security Using Facial Emotion Recognition System',
            },
            languageLevels: {
                C1: 'Professional proficiency',
                A2: 'Elementary, actively improving',
                Native: 'Native speaker',
            },
            achievements: [
                'All India Rank 2,757 of 157,000+ candidates in GATE — top 1.76% (98.24th percentile) nationwide.',
                'Dual Gold Medals in American Football and Rugby at the National Championships.',
            ],
        },
        de: {
            education: {
                btu: { degree: 'M.Sc. Künstliche Intelligenz', note: 'Unüberwachte Anomalieerkennung in nicht-stationären, multivariaten Industriezeitreihen.' },
                lpu: { degree: 'B.Tech. Informatik', note: null },
            },
            publication: {
                title: 'Passenger Security Using Facial Emotion Recognition System',
            },
            languageLevels: {
                C1: 'Verhandlungssicher',
                A2: 'Grundkenntnisse, wird aktiv ausgebaut',
                Native: 'Muttersprache',
            },
            achievements: [
                'Landesrang 2.757 von über 157.000 Teilnehmenden im GATE — Top 1,76% (98,24. Perzentil) bundesweit.',
                'Zweifache Goldmedaille im American Football und Rugby bei den nationalen Meisterschaften.',
            ],
        },
    };

    // Inline SVG flags (4:3 viewBox) — render identically across all OSes,
    // unlike emoji flags which Windows Chrome refuses to draw.
    const FLAG_SVG = {
        gb: '<svg class="lang-flag-svg" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><clipPath id="fg-uk"><path d="M0 0v45h60V0z"/></clipPath><clipPath id="fg-uk-t"><path d="M30 22.5L60 0v45L30 22.5 0 45V0z"/></clipPath><g clip-path="url(#fg-uk)"><path fill="#012169" d="M0 0h60v45H0z"/><path stroke="#fff" stroke-width="9" d="M0 0l60 45m0-45L0 45"/><path stroke="#C8102E" stroke-width="6" clip-path="url(#fg-uk-t)" d="M0 0l60 45m0-45L0 45"/><path stroke="#fff" stroke-width="15" d="M30 0v45M0 22.5h60"/><path stroke="#C8102E" stroke-width="9" d="M30 0v45M0 22.5h60"/></g></svg>',
        de: '<svg class="lang-flag-svg" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#000000" d="M0 0h60v15H0z"/><path fill="#DD0000" d="M0 15h60v15H0z"/><path fill="#FFCE00" d="M0 30h60v15H0z"/></svg>',
    };

    const LANGS = [
        { code: 'en', label: 'EN', name: 'English', flag: FLAG_SVG.gb },
        { code: 'de', label: 'DE', name: 'Deutsch', flag: FLAG_SVG.de },
    ];

    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'lang';

    // ─────────────────────────────────────────────────────────────
    // Greetings used by the looping hero typewriter (not UI state).
    // ─────────────────────────────────────────────────────────────
    const GREETINGS = [
        { lang: 'en', text: 'Hi, I am Atharva !',        dir: 'ltr' },
        { lang: 'de', text: 'Hallo, ich bin Atharva !',   dir: 'ltr' },
        { lang: 'fr', text: 'Salut, je suis Atharva !',   dir: 'ltr' },
        { lang: 'es', text: '¡Hola, soy Atharva !',       dir: 'ltr' },
        { lang: 'pt', text: 'Olá, eu sou o Atharva !',    dir: 'ltr' },
        { lang: 'it', text: 'Ciao, sono Atharva !',       dir: 'ltr' },
        { lang: 'sv', text: 'Hej, jag är Atharva !',      dir: 'ltr' }, // Swedish
        { lang: 'pl', text: 'Cześć, jestem Atharva !',    dir: 'ltr' }, // Polish
    ];

    // ─────────────────────────────────────────────────────────────
    // Core helpers
    // ─────────────────────────────────────────────────────────────
    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && TRANSLATIONS[saved]) return saved;
        return DEFAULT_LANG;
    }

    function t(key, lang) {
        lang = lang || getLang();
        const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
        if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
        // Fallback to English
        const enDict = TRANSLATIONS[DEFAULT_LANG];
        if (Object.prototype.hasOwnProperty.call(enDict, key)) return enDict[key];
        return key;
    }

    // Apply translations to any element with [data-i18n] inside `root` (default: document).
    // Supports:
    //   data-i18n="key"              → textContent
    //   data-i18n-attr="title:key;aria-label:key2"   → attributes
    function applyTranslations(root) {
        const scope = root || document;
        const lang = getLang();

        // Text nodes
        scope.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;
            el.textContent = t(key, lang);
        });

        // Attribute translations
        scope.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr');
            if (!spec) return;
            spec.split(';').forEach(pair => {
                const parts = pair.split(':').map(s => s.trim());
                if (parts.length !== 2) return;
                const [attr, key] = parts;
                el.setAttribute(attr, t(key, lang));
            });
        });

        // <title> element if it has data-i18n
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            const key = titleEl.getAttribute('data-i18n');
            document.title = t(key, lang);
        }

        document.documentElement.setAttribute('lang', lang);
    }

    function setLang(lang) {
        if (!TRANSLATIONS[lang]) return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
        updateLangButton();
        // Notify listeners (e.g. dynamic loaders, typewriter restart hooks)
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    }

    function updateLangButton() {
        const btn = document.getElementById('lang-toggle');
        if (!btn) return;
        const lang = getLang();
        const entry = LANGS.find(l => l.code === lang) || LANGS[0];
        btn.textContent = entry.label + ' ▾';
        btn.setAttribute('aria-label', t('nav.lang_title') + ': ' + entry.name);

        // Mark active option in menu
        const menu = document.getElementById('lang-menu');
        if (menu) {
            menu.querySelectorAll('[data-lang]').forEach(opt => {
                opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
            });
        }
    }

    // ─────────────────────────────────────────────────────────────
    // Build the language switcher UI and inject into .nav-controls
    // ─────────────────────────────────────────────────────────────
    function initLangSwitcher() {
        const navControls = document.querySelector('.nav-controls');
        if (!navControls) return;
        if (document.getElementById('lang-toggle')) return; // already built

        const wrap = document.createElement('div');
        wrap.className = 'lang-switcher';

        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-haspopup', 'listbox');
        btn.setAttribute('aria-expanded', 'false');

        const menu = document.createElement('ul');
        menu.id = 'lang-menu';
        menu.className = 'lang-menu';
        menu.setAttribute('role', 'listbox');

        LANGS.forEach(l => {
            const li = document.createElement('li');
            li.setAttribute('role', 'option');
            li.setAttribute('data-lang', l.code);
            li.className = 'lang-option';
            li.innerHTML = `<span class="lang-flag">${l.flag}</span><span class="lang-name">${l.name}</span>`;
            // l.flag is trusted (inline SVG defined in this file, not user input).
            li.addEventListener('click', (ev) => {
                ev.stopPropagation();
                setLang(l.code);
                closeMenu();
            });
            menu.appendChild(li);
        });

        wrap.appendChild(btn);
        wrap.appendChild(menu);

        // Insert BEFORE the theme toggle so order is: menu ☰ | EN▾ | ☀
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn && themeBtn.parentNode === navControls) {
            navControls.insertBefore(wrap, themeBtn);
        } else {
            navControls.appendChild(wrap);
        }

        function openMenu() {
            menu.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
        function closeMenu() {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }

        btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (menu.classList.contains('open')) closeMenu(); else openMenu();
        });

        document.addEventListener('click', (ev) => {
            if (!wrap.contains(ev.target)) closeMenu();
        });

        document.addEventListener('keydown', (ev) => {
            if (ev.key === 'Escape') closeMenu();
        });

        updateLangButton();
    }

    // ─────────────────────────────────────────────────────────────
    // Hero heading height lock.
    // The greetings differ in length, so at some viewport widths the <h1>
    // wraps to two lines for one greeting and one line for the next. Since
    // .hero-layout is align-items: end, that reflow shoves the entire hero
    // row — profile photo included — up and down on every cycle.
    //
    // Fix: park the greeting that renders TALLEST in a hidden sizer stacked
    // in the same grid cell, so the heading's box is always its worst case.
    // Measured live rather than hardcoded, because which greeting is tallest
    // depends on the viewport width and on the display webfont's metrics.
    // ─────────────────────────────────────────────────────────────
    function initHeroNameSizer() {
        const sizer = document.querySelector('.hero-name-sizer');
        if (!sizer) return;

        function measure() {
            let tallest = GREETINGS[0].text;
            let maxHeight = 0;
            GREETINGS.forEach(g => {
                // Include the cursor glyph — it can tip a line into wrapping.
                sizer.textContent = g.text + '_';
                const h = sizer.offsetHeight;
                if (h > maxHeight) {
                    maxHeight = h;
                    tallest = g.text + '_';
                }
            });
            sizer.textContent = tallest;
        }

        measure();

        // Playfair Display loads async; its metrics differ from the fallback,
        // so the first measurement can be wrong until the swap lands.
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(measure).catch(() => {});
        }

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(measure, 150);
        }, { passive: true });
    }

    // ─────────────────────────────────────────────────────────────
    // Hero typewriter: cycles through all greetings, loops forever.
    //
    // This is the one deliberate exception to the site's "respect
    // prefers-reduced-motion" rule, and it runs on every device.
    //
    // Why: typing text in place carries none of the vestibular risk the
    // preference exists to prevent — there is no parallax, scaling, scrolling
    // or large-scale movement. Meanwhile both iOS Low Power/Reduce Motion and
    // Android Battery Saver switch the flag on routinely, so it is a poor
    // signal for "this person dislikes animation". Honouring it here froze the
    // greeting mid-hero next to a still-blinking cursor, which read as a bug
    // rather than as a considerate default.
    //
    // Every other animation — boot screen, hero reveal, photo cross-fade,
    // scroll reveals, the aurora — still honours the preference.
    // ─────────────────────────────────────────────────────────────
    function initTypewriterCycle() {
        const el = document.getElementById('typewriter');
        if (!el) return;

        initHeroNameSizer();

        const TYPE_SPEED = 90;    // ms per char typing
        const ERASE_SPEED = 45;   // ms per char erasing
        const HOLD_AFTER = 1400;  // pause after fully typed
        const PAUSE_BETWEEN = 250; // pause after fully erased

        let idx = 0;

        function typeOne() {
            const g = GREETINGS[idx];
            el.setAttribute('dir', g.dir);
            el.setAttribute('lang', g.lang);
            // Use Array.from to split by grapheme for multi-byte chars (CJK, Devanagari-safe)
            const chars = Array.from(g.text);
            let i = 0;
            el.textContent = '';

            function step() {
                if (i < chars.length) {
                    el.textContent += chars[i];
                    i++;
                    setTimeout(step, TYPE_SPEED);
                } else {
                    setTimeout(eraseOne, HOLD_AFTER);
                }
            }
            step();
        }

        function eraseOne() {
            const current = Array.from(el.textContent);
            let i = current.length;

            function step() {
                if (i > 0) {
                    i--;
                    el.textContent = current.slice(0, i).join('');
                    setTimeout(step, ERASE_SPEED);
                } else {
                    idx = (idx + 1) % GREETINGS.length;
                    setTimeout(typeOne, PAUSE_BETWEEN);
                }
            }
            step();
        }

        typeOne();
    }

    // ─────────────────────────────────────────────────────────────
    // Public API
    // ─────────────────────────────────────────────────────────────
    window.i18n = {
        t,
        getLang,
        setLang,
        applyTranslations,
        LANGS,
        GREETINGS,
        // Return a localized project { title, desc } for the given repo name, or null.
        getProject(repoName) {
            const entry = PROJECTS[repoName];
            if (!entry) return null;
            const lang = getLang();
            return entry[lang] || entry[DEFAULT_LANG] || null;
        },
        // Return ordered experience entries, each fully localized for the active language.
        getExperience() {
            const lang = getLang();
            return EXPERIENCE_ORDER.map((id) => {
                const e = EXPERIENCE[id];
                const loc = e[lang] || e[DEFAULT_LANG];
                return { id, ...e.common, ...loc };
            });
        },
        // Return the localized CV dossier (education, publication, achievements, languages).
        getDossier() {
            const lang = getLang();
            const loc = DOSSIER[lang] || DOSSIER[DEFAULT_LANG];
            const c = DOSSIER.common;
            return {
                education: c.education.map(e => ({ ...e, ...(loc.education[e.id] || {}) })),
                publication: { ...c.publication, ...loc.publication },
                languages: c.languages.map(l => ({ ...l, description: loc.languageLevels[l.level] || l.level })),
                achievements: loc.achievements,
            };
        },
    };

    // Auto-init
    document.addEventListener('DOMContentLoaded', () => {
        applyTranslations();
        initLangSwitcher();
        initTypewriterCycle();
    });
})();
