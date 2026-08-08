// loader.js

// Skill tags per repo: { label, category }
// Categories: ml | nlp | analytics | engineering | cloud
const REPO_TAGS = {
    'Medical-SLM': [
        { label: 'PyTorch',               category: 'ml' },
        { label: 'SLM',                   category: 'nlp' },
        { label: 'Latent Attention',      category: 'nlp' },
        { label: 'RoPE',                  category: 'nlp' },
        { label: 'RMSNorm',               category: 'nlp' },
        { label: 'SwiGLU',                category: 'nlp' },
        { label: 'Instruction Tuning',    category: 'ml' },
        { label: 'Zero-Shot Eval',        category: 'analytics' },
    ],
    'Enterprise-Agentic-RAG': [
        { label: 'LangGraph',             category: 'nlp' },
        { label: 'Agentic RAG',           category: 'nlp' },
        { label: 'Qdrant',                category: 'nlp' },
        { label: 'FlashRank',             category: 'nlp' },
        { label: 'NeMo Guardrails',       category: 'nlp' },
        { label: 'FastAPI',               category: 'engineering' },
        { label: 'Groq',                  category: 'cloud' },
        { label: 'RAGAS',                 category: 'analytics' },
    ],
    'Customer-Churn-Prediction-ML_Prod': [
        { label: 'XGBoost',               category: 'ml' },
        { label: 'Great Expectations',    category: 'engineering' },
        { label: 'MLflow',                category: 'engineering' },
        { label: 'Docker',                category: 'engineering' },
        { label: 'FastAPI',               category: 'engineering' },
        { label: 'AWS',                   category: 'cloud' },
        { label: 'GitHub Actions',        category: 'cloud' },
        { label: 'CloudWatch',            category: 'analytics' },
    ],
    'DeepSeek-From-Scratch': [
        { label: 'PyTorch',               category: 'ml' },
        { label: 'Transformers',          category: 'nlp' },
        { label: 'Mixture of Experts',    category: 'nlp' },
        { label: 'Latent Attention',      category: 'nlp' },
    ],
    'GPT2-From-Scratch': [
        { label: 'PyTorch',               category: 'ml' },
        { label: 'Pre-training',          category: 'nlp' },
        { label: 'Instruction Tuning',    category: 'nlp' },
        { label: 'LLM-as-a-Judge',        category: 'analytics' },
    ],
    'LLM-Finetuning': [
        { label: 'LoRA',                  category: 'nlp' },
        { label: 'QLoRA',                 category: 'nlp' },
        { label: 'Quantization',          category: 'ml' },
        { label: 'Hugging Face',          category: 'nlp' },
    ],
    'DOCUMENT-INTELLIGENCE-HUB': [
        { label: 'RAG',                   category: 'nlp' },
        { label: 'LLMOps',                category: 'engineering' },
        { label: 'Modular Design',        category: 'engineering' },
        { label: 'Vector DB',             category: 'nlp' },
    ],
    'E-Commerce-Product-Intelligence-Engine': [
        { label: 'Embeddings',            category: 'nlp' },
        { label: 'Recommendation',        category: 'ml' },
        { label: 'Python',                category: 'engineering' },
        { label: 'Product Analytics',     category: 'analytics' },
    ],
};


// ─── Curated display metadata (for the Editorial projects cards) ───
// name → { title, desc, cats: [string] }
// Localized title/desc live in js/i18n.js; these are the English fallbacks.
const PROJECT_META = {
    'Medical-SLM': {
        title: 'Medical SLM',
        desc: 'A 60M-parameter transformer written from scratch in PyTorch — multi-head latent attention, RoPE, RMSNorm and SwiGLU, all hand-implemented. Pre-trained on 600M+ tokens under consumer-GPU constraints, then instruction-tuned and scored with a custom zero-shot harness on MedMCQA and PubMedQA.',
        cats: ['LLM', 'PRE-TRAINING', 'FROM SCRATCH'],
    },
    'Enterprise-Agentic-RAG': {
        title: 'Enterprise Agentic RAG',
        desc: 'Production-grade multi-agent RAG on LangGraph and FastAPI, backed by Qdrant and Groq inference. Semantic chunking, FlashRank reranking and history-aware query planning feed multi-step reasoning with stateful memory — NeMo Guardrails blocks jailbreaks, Logfire, LangSmith and RAGAS keep it observable.',
        cats: ['AGENTS', 'RAG', 'PRODUCTION'],
    },
    'Customer-Churn-Prediction-ML_Prod': {
        title: 'Churn Prediction MLOps',
        desc: 'End-to-end XGBoost churn model productionised on AWS. Great Expectations validates every input batch, MLflow tracks the runs, GitHub Actions ships it, and a Docker + FastAPI service serves it with CloudWatch reliability monitoring on top.',
        cats: ['MLOPS', 'AWS', 'CI/CD'],
    },
    'DeepSeek-From-Scratch': {
        title: 'DeepSeek V3 From Scratch',
        desc: 'A full reimplementation of the DeepSeek V3 architecture, built to understand its modern transformer innovations from the inside out — mixture-of-experts routing, latent attention, and the training tricks that make them stable.',
        cats: ['LLM', 'ARCHITECTURE', 'FROM SCRATCH'],
    },
    'GPT2-From-Scratch': {
        title: 'GPT-2 From Scratch',
        desc: 'GPT-2 rebuilt end to end: pre-training, classification and instruction fine-tuning, then evaluated with an LLM-as-a-judge setup. The groundwork that everything else here is built on.',
        cats: ['LLM', 'FINE-TUNING', 'EVALUATION'],
    },
    'LLM-Finetuning': {
        title: 'LLM Fine-tuning Lab',
        desc: 'Parameter-efficient fine-tuning with LoRA and QLoRA — adapter configs, quantisation trade-offs, and what actually moves the needle when GPU memory is the binding constraint.',
        cats: ['LLM', 'LORA', 'QUANTIZATION'],
    },
    'DOCUMENT-INTELLIGENCE-HUB': {
        title: 'Document Intelligence Hub',
        desc: 'An industry-style RAG pipeline built with modular code and LLMOps discipline — ingestion, indexing, retrieval and serving each isolated behind clean interfaces so components can be swapped without rewrites.',
        cats: ['RAG', 'LLMOPS', 'ENGINEERING'],
    },
    'E-Commerce-Product-Intelligence-Engine': {
        title: 'Product Intelligence Engine',
        desc: 'Turns raw e-commerce catalogue and behaviour data into product-level intelligence — enrichment, embedding-based similarity, and ranking signals a merchandising team can actually act on.',
        cats: ['ML', 'EMBEDDINGS', 'ANALYTICS'],
    },
};

// Ordered list of repos to feature on the projects page. Edit to curate.
const FEATURED_ORDER = [
    'Medical-SLM',
    'Enterprise-Agentic-RAG',
    'Customer-Churn-Prediction-ML_Prod',
    'DeepSeek-From-Scratch',
    'GPT2-From-Scratch',
    'LLM-Finetuning',
    'DOCUMENT-INTELLIGENCE-HUB',
    'E-Commerce-Product-Intelligence-Engine',
];

const CONFIG = {
    githubUser: 'atharvahatekar',
    resumeFile: 'content/Atharva_Hatekar_CV_2026.pdf',
    resumeDownloadName: 'Atharva_Hatekar_CV_2026.pdf',
};

// --- THEME SWITCHER LOGIC ---
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    // Load saved preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        toggleBtn.innerText = currentTheme === 'light' ? '☾' : '☀';
    } else {
        // Set default to dark and icon to sun
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleBtn.innerText = '☀';
    }

    // Handle Click
    toggleBtn.addEventListener('click', function () {
        let theme = document.documentElement.getAttribute('data-theme');

        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggleBtn.innerText = '☀';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            toggleBtn.innerText = '☾';
        }
    });
}

// --- NAVIGATION ENHANCEMENTS (Active Link & Smart Scroll) ---
function initNavEnhancements() {
    // 1. Highlight Current Page
    const menuItems = document.querySelectorAll('.nav-links a');
    const path = window.location.pathname.split('/').pop() || 'index.html'; // Get the page filename

    menuItems.forEach(item => {
        const itemPath = item.href.split('/').pop() || 'index.html';
        if (itemPath === path) {
            item.classList.add('active');
        }
    });

    // 2. Smart Scroll (Hide/Show Navbar)
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Only trigger movement if scrolling past the initial top section
        if (scrollTop > 50) {
            if (scrollTop > lastScrollTop) {
                // Scrolling DOWN -> Hide Nav
                navbar.style.transform = "translateY(-100%)";
            } else {
                // Scrolling UP -> Show Nav
                navbar.style.transform = "translateY(0)";
            }
        } else {
            // Always show nav at the very top
            navbar.style.transform = "translateY(0)";
        }
        lastScrollTop = scrollTop;
    }, { passive: true }); // Use passive listener for performance
}

// --- GITHUB FETCHER ---

// Cache of raw GitHub data + a reference to the container so we can
// re-render in place when the language changes without re-hitting the API.
let _reposCache = null;

function renderRepos() {
    const container = document.getElementById('repo-grid');
    if (!container || !_reposCache) return;

    const byName = _reposCache;

    const featured = FEATURED_ORDER
        .map(name => {
            const repo = byName[name];
            if (!repo) return null;
            const meta = PROJECT_META[name] || {};
            // Prefer localized title/desc from i18n; fall back to meta then repo.
            const loc = (window.i18n && window.i18n.getProject)
                ? window.i18n.getProject(name)
                : null;
            return {
                name,
                title: (loc && loc.title) || meta.title || name,
                desc:  (loc && loc.desc)  || meta.desc  || repo.description || 'No description provided.',
                cats: meta.cats || [(repo.language || 'Code').toUpperCase()],
                tags: REPO_TAGS[name] || [],
                html_url: repo.html_url,
                homepage: repo.homepage,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
            };
        })
        .filter(Boolean);

    container.innerHTML = '';

    // Link labels are themselves localizable.
    const liveLabel   = (window.i18n && window.i18n.t) ? window.i18n.t('projects.live_link')   : 'Live\u00a0\u2197';
    const sourceLabel = (window.i18n && window.i18n.t) ? window.i18n.t('projects.source_link') : 'GitHub\u00a0\u2197';

    featured.forEach(p => {
        const card = document.createElement('article');
        card.className = 'v1-card';

        const catsHtml = p.cats
            .map((c, i) => (i === 0 ? '' : '<span class="v1-cats-sep">·</span>') + `<span class="v1-cat">${c}</span>`)
            .join('');

        const tagsHtml = (p.tags || [])
            .map(t => `<span class="tag-${t.category}">${t.label}</span>`)
            .join('');

        const liveLink = (p.homepage && p.homepage.trim())
            ? `<a href="${p.homepage}" target="_blank" rel="noopener" class="v1-link">${liveLabel}</a>`
            : '';
        const sourceLink = `<a href="${p.html_url}" target="_blank" rel="noopener" class="v1-link">${sourceLabel}</a>`;

        card.innerHTML = `
            <div class="v1-corner v1-corner-tl">+</div>
            <div class="v1-corner v1-corner-br">+</div>
            <header class="v1-header">
                <div class="v1-cats">${catsHtml}</div>
                <div class="v1-links">${liveLink}${sourceLink}</div>
            </header>
            <h3 class="v1-title">${p.title}</h3>
            <p class="v1-desc">${p.desc}</p>
            ${tagsHtml ? `<div class="v1-tags">${tagsHtml}</div>` : ''}
        `;

        container.appendChild(card);
    });

    // Trigger scroll reveal on dynamically injected cards
    if (typeof window.observeRevealItems === 'function') {
        window.observeRevealItems(container);
    }
}

// Session cache helpers — avoid re-hitting APIs on every navigation and
// survive GitHub's 60 req/h unauthenticated rate limit.
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function cacheGet(key) {
    try {
        const raw = sessionStorage.getItem(key);
        if (!raw) return null;
        const { ts, data } = JSON.parse(raw);
        if (Date.now() - ts > CACHE_TTL_MS) return null;
        return data;
    } catch (_) {
        return null;
    }
}

function cacheSet(key, data) {
    try {
        sessionStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
    } catch (_) { /* storage full/blocked — not fatal */ }
}

async function loadRepos() {
    const container = document.getElementById('repo-grid');
    if (!container) return; // Stop if we aren't on the projects page

    // 1. Render instantly from curated metadata — no network needed.
    //    html_url is derivable; stars/homepage get hydrated below.
    _reposCache = Object.fromEntries(FEATURED_ORDER.map(name => [name, {
        name,
        html_url: `https://github.com/${CONFIG.githubUser}/${name}`,
        description: null,
        homepage: null,
        stargazers_count: null,
        forks_count: null,
    }]));
    renderRepos();

    // 2. Hydrate from GitHub (cache-first) for live stars + homepage links.
    const cached = cacheGet('gh-repos-v1');
    if (cached) {
        _reposCache = cached;
        renderRepos();
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${CONFIG.githubUser}/repos?per_page=100&type=owner`);
        if (!response.ok) throw new Error(`GitHub API ${response.status}`);
        const data = await response.json();
        _reposCache = Object.fromEntries(data.map(r => [r.name, {
            name: r.name,
            html_url: r.html_url,
            description: r.description,
            homepage: r.homepage,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
        }]));
        cacheSet('gh-repos-v1', _reposCache);
        renderRepos();
    } catch (_) {
        // Curated render already on screen — hydration failure is invisible.
    }
}

// --- EXPERIENCE FETCHER ---
// Pulls localized entries from window.i18n.getExperience() and re-renders on langchange.
function renderExperience() {
    const container = document.getElementById('cv-timeline');
    if (!container) return;

    const data = (window.i18n && window.i18n.getExperience)
        ? window.i18n.getExperience()
        : [];

    if (!data.length) {
        container.innerHTML = `<p class="error-msg">Error loading experience data.</p>`;
        return;
    }

    container.innerHTML = '';

    data.forEach(job => {
        const item = document.createElement('article');
        item.className = 'timeline-item';

        const achievementsList = (job.achievements || [])
            .map(ach => `<li>${ach}</li>`)
            .join('');

        const companyName = job.companyDisplay || job.company;
        const companyNote = job.companyNote ? `<span class="company-note">(${job.companyNote})</span>` : '';
        const companyLink = job.companyUrl
            ? `<a href="${job.companyUrl}" target="_blank" rel="noopener noreferrer" class="company-link" aria-label="Visit ${companyName} website">${companyName}</a>`
            : `<span class="company-link company-link--text">${companyName}</span>`;

        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-text">
                    <span class="job-date">${job.period}</span>
                    <div class="job-header">
                        <div>
                            <h3 class="job-title">${job.role}</h3>
                            <p class="company-meta">
                                @ ${companyLink}
                                ${companyNote}
                            </p>
                        </div>
                    </div>
                    <p class="card-desc">
                        ${job.description}
                    </p>
                    <ul class="job-achievements">
                        ${achievementsList}
                    </ul>
                </div>
                <div class="timeline-logo">
                    <img src="${job.logo}" alt="${companyName} logo" class="company-logo" loading="lazy" decoding="async">
                </div>
            </div>
        `;

        container.appendChild(item);
    });

    if (typeof window.observeRevealItems === 'function') {
        window.observeRevealItems(container);
    }
}

function loadExperience() {
    renderExperience();
}

// --- PRINT BUTTON LOGIC ---
function initPrintButton() {
    const printBtn = document.getElementById('print-btn');
    if (!printBtn) return;

    printBtn.addEventListener('click', () => {
        const resumePdfPath = printBtn.dataset.resumePdf || CONFIG.resumeFile;

        const tempLink = document.createElement('a');
        tempLink.href = resumePdfPath;
        tempLink.setAttribute('download', CONFIG.resumeDownloadName);
        tempLink.setAttribute('target', '_blank');
        tempLink.setAttribute('rel', 'noopener');
        document.body.appendChild(tempLink);
        tempLink.click();
        tempLink.remove();
    });
}

// --- HAMBURGER MENU ---
function initHamburgerMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        menuToggle.textContent = isOpen ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked (single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.textContent = '☰';
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// --- MAGNETIC HOVER ---
// Buttons/icons subtly follow the cursor. Skipped on touch devices
// and when the user prefers reduced motion.
function initMagneticButtons() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const STRENGTH = 5; // max px offset
    document.querySelectorAll('.btn, .proj-card-ghost, .social-icon, #theme-toggle').forEach(el => {
        el.classList.add('magnetic');
        el.addEventListener('pointermove', (ev) => {
            const r = el.getBoundingClientRect();
            const dx = (ev.clientX - r.left - r.width / 2) / (r.width / 2);
            const dy = (ev.clientY - r.top - r.height / 2) / (r.height / 2);
            el.style.transform = `translate(${dx * STRENGTH}px, ${dy * STRENGTH}px)`;
        });
        el.addEventListener('pointerleave', () => {
            el.style.transform = '';
        });
    });
}

// --- SCROLL PROGRESS FALLBACK ---
// CSS scroll-driven animation handles this in modern browsers;
// this JS fallback covers the rest.
function initScrollProgressFallback() {
    if (CSS.supports && CSS.supports('animation-timeline: scroll()')) return;
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    let ticking = false;
    function update() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? (window.scrollY / max) : 0;
        bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }, { passive: true });
    update();
}

// Initialize all dynamic loading and functionality
document.addEventListener('DOMContentLoaded', () => {
    if (typeof initParticleNetwork === 'function') initParticleNetwork();
    initThemeToggle();
    initHamburgerMenu();
    initNavEnhancements();
    loadRepos();
    loadExperience();
    initPrintButton();
    initMagneticButtons();
    initScrollProgressFallback();
});

// Re-render language-dependent sections when the user switches language.
// GitHub data is cached, so repo re-render is free; experience is synchronous.
window.addEventListener('langchange', () => {
    renderRepos();
    renderExperience();
});
