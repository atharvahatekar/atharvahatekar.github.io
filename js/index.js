// Typewriter Effect is handled by js/i18n.js (cycles through multiple languages).
// Kept here as a no-op so any existing call sites stay safe.
function typeWriter() { /* delegated to i18n.js */ }

// Time Update
function updateTime() {
    const timeContainer = document.getElementById('local-time');
    if (!timeContainer) return;

    const now = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    });

    timeContainer.innerText = `${(window.i18n ? window.i18n.t('status.cottbus') : 'Cottbus')}: ${now}`;
}

// ── HERO LOAD REVEAL ──────────────────────────────────────
// Progressive enhancement: JS first adds .hero-entry (enables opacity:0),
// then adds .hero-loaded to trigger the transition.
// If JS is slow or fails, elements remain fully visible — no blank page.
function initHeroReveal() {
    const targets = [
        { selector: '.section-label',     delay: 0   },
        { selector: '.hero-display-name', delay: 100 },
        { selector: '.hero-panel-right',  delay: 140 },
        { selector: '.code-box',          delay: 240 },
        { selector: '.hero-subtitle',     delay: 360 },
    ];

    // First pass: hide all targets immediately (synchronous, before paint)
    targets.forEach(({ selector }) => {
        const el = document.querySelector(selector);
        if (el) el.classList.add('hero-entry');
    });

    // Second pass: reveal each with staggered delay
    targets.forEach(({ selector, delay }) => {
        const el = document.querySelector(selector);
        if (!el) return;
        requestAnimationFrame(() => {
            setTimeout(() => el.classList.add('hero-loaded'), delay);
        });
    });
}

// ── STAGGER INDEX ─────────────────────────────────────────
// Sets --stagger-index on each child so CSS can delay them sequentially
function applyStaggerIndex(parentSelector, childSelector) {
    document.querySelectorAll(parentSelector).forEach(parent => {
        parent.querySelectorAll(childSelector).forEach((child, idx) => {
            child.style.setProperty('--stagger-index', idx);
        });
    });
}

// ── SCROLL REVEAL ─────────────────────────────────────────
// Uses IntersectionObserver — adds .reveal (hidden) then .visible (shown)
function initScrollReveal() {
    const selectors = [
        '.skills-va-cell',
        '.proj-card',
        '.card',
        '.timeline-item',
        '.page-hero-left',
        '.page-hero-meta',
    ];

    const elements = document.querySelectorAll(selectors.join(','));
    elements.forEach(el => {
        // Don't double-animate elements already handled by hero reveal
        if (!el.closest('#hero')) {
            el.classList.add('reveal');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => {
        if (!el.closest('#hero')) {
            observer.observe(el);
        }
    });

    // Expose for loader.js to call after dynamic card injection
    window._revealObserver = observer;
}

// ── OBSERVE DYNAMIC CARDS ─────────────────────────────────
// Called by loader.js after GitHub/Medium cards are injected into DOM
window.observeRevealItems = function(containerEl) {
    if (!window._revealObserver) return;
    containerEl.querySelectorAll('.card, .proj-card, .timeline-item').forEach(el => {
        el.classList.add('reveal');
        window._revealObserver.observe(el);
    });
};

// ── PROFILE IMAGE ROTATION ────────────────────────────────
// Cross-fades the hero photos. The outgoing image is pinned opaque beneath
// the incoming one (.is-under) for the length of the fade, so the blend never
// dips through to the frame background — a plain opacity swap does, and reads
// as a dark blink. No-op with a single photo.
const PROFILE_HOLD_MS = 4200;   // time a photo stays fully on screen
const PROFILE_FADE_MS = 900;    // must match the opacity transition in style.css

function initProfileRotation() {
    const frame = document.getElementById('hero-frame');
    if (!frame) return;

    const imgs = Array.from(frame.querySelectorAll('.profile-img'));
    if (imgs.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let currentIndex = 0;
    let underTimer;

    setInterval(() => {
        const nextIndex = (currentIndex + 1) % imgs.length;
        const incoming = imgs[nextIndex];

        // Skip this beat if the next photo hasn't decoded yet — fading into a
        // blank frame looks far worse than holding the current one a bit longer.
        if (!incoming.complete || !incoming.naturalWidth) return;

        const outgoing = imgs[currentIndex];
        currentIndex = nextIndex;

        outgoing.classList.remove('active');
        outgoing.classList.add('is-under');
        incoming.classList.add('active');

        clearTimeout(underTimer);
        underTimer = setTimeout(() => {
            outgoing.classList.remove('is-under');
        }, PROFILE_FADE_MS);
    }, PROFILE_HOLD_MS);
}

// ── INITIALIZE ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // typeWriter now handled by i18n.js (cycles languages)
    updateTime();
    setInterval(updateTime, 1000);

    initHeroReveal();
    initScrollReveal();
    initProfileRotation();

    applyStaggerIndex('.skills-va', '.skills-va-cell');
    applyStaggerIndex('.proj-list', '.proj-card');

    // Per-chip cascade inside each skills cell (CSS reads --chip-index)
    document.querySelectorAll('.skills-va-chips').forEach(group => {
        group.querySelectorAll('.skill-chip').forEach((chip, idx) => {
            chip.style.setProperty('--chip-index', idx);
        });
    });
});
