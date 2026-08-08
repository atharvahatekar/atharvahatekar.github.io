// CV section — vanilla JS renderer.
// Builds the density-map layout (roles timeline + skill heatmap) into #cv-timeline.
// Pulls localized entries from window.i18n.getExperience() and re-renders on langchange.

(function () {
    // Disable loader.js's legacy timeline renderer on this page.
    window.renderExperience = function () {};

    function getJobs() {
        if (window.i18n && typeof window.i18n.getExperience === 'function') {
            return window.i18n.getExperience();
        }
        return [];
    }

    function h(tag, attrs, children) {
        const el = document.createElement(tag);
        if (attrs) {
            for (const k in attrs) {
                const v = attrs[k];
                if (v == null || v === false) continue;
                if (k === 'class') el.className = v;
                else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
                else if (k === 'cssVars') {
                    for (const cv in v) el.style.setProperty(cv, v[cv]);
                }
                else if (k === 'dataset') Object.assign(el.dataset, v);
                else if (k.startsWith('on') && typeof v === 'function') {
                    el.addEventListener(k.slice(2).toLowerCase(), v);
                }
                else el.setAttribute(k, v);
            }
        }
        (children || []).forEach(c => {
            if (c == null || c === false) return;
            el.appendChild(typeof c === 'string' || typeof c === 'number'
                ? document.createTextNode(String(c))
                : c);
        });
        return el;
    }

    function createLogo(job) {
        const img = new Image();
        img.className = 'cv-logo-img';
        img.src = job.logo;
        img.alt = `${job.company} logo`;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.addEventListener('error', () => {
            const letters = (job.company || '').slice(0, 2).toUpperCase();
            const fallback = h('div', {
                class: 'cv-logo-fallback',
                style: {
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-code)', fontWeight: '600',
                    fontSize: '1rem', letterSpacing: '2px',
                    color: 'var(--accent-color)',
                    border: '1px dashed color-mix(in oklab, var(--accent-color) 40%, transparent)',
                    padding: '6px 10px', borderRadius: '2px',
                },
            }, [letters]);
            img.replaceWith(fallback);
        });
        return img;
    }

    function buildRole(job, state) {
        const article = h('article', {
            class: 'cv-role',
            'aria-expanded': 'false',
        }, [
            h('div', { class: 'cv-role-logo' }, [createLogo(job)]),
            h('div', { class: 'cv-role-main' }, [
                h('span', { class: 'year' }, [job.period]),
                h('p', { class: 'title' }, [job.role]),
                h('p', { class: 'company' }, [
                    `@ ${job.company}${job.companyNote ? ` (${job.companyNote})` : ''}`,
                ]),
            ]),
            h('span', { class: 'cv-pill' }, [window.CV_DURATION(job.start, job.end)]),
            h('div', { class: 'cv-role-detail' }, [
                h('div', { class: 'cv-role-detail-inner' }, [
                    h('p', { style: { margin: '0' } }, [job.description]),
                    h('ul', {}, (job.achievements || []).map(a => h('li', {}, [a]))),
                    h('div', { class: 'cv-role-stack' },
                        (job.stack || []).map(s => h('span', { class: `cv-chip c-${s.c}` }, [s.label]))
                    ),
                ]),
            ]),
        ]);

        article.addEventListener('click', () => {
            const isOpen = article.getAttribute('aria-expanded') === 'true';
            if (state.openEl && state.openEl !== article) {
                state.openEl.setAttribute('aria-expanded', 'false');
            }
            article.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
            state.openEl = isOpen ? null : article;
        });
        return article;
    }

    function buildMatrix(matrix) {
        const grid = h('div', {
            class: 'cv-matrix-grid',
            cssVars: { '--years': matrix.years.length },
        });

        const headerRow = h('div', {
            class: 'cv-matrix-row',
            cssVars: { '--years': matrix.years.length },
        }, [
            h('div', { class: 'cell-label', style: { opacity: '0' } }, ['_']),
            ...matrix.years.map(y => h('div', { class: 'cell-header' }, [String(y).slice(2)])),
        ]);
        grid.appendChild(headerRow);

        matrix.groups.forEach(group => {
            grid.appendChild(h('div', { class: 'cv-matrix-group-label' }, [group.label]));
            group.rows.forEach(row => {
                const rowEl = h('div', {
                    class: 'cv-matrix-row',
                    cssVars: { '--years': matrix.years.length },
                }, [
                    h('div', { class: 'cell-label' }, [row.label]),
                    ...row.values.map((v, i) => h('div', {
                        class: 'cv-cell',
                        dataset: { v: String(v) },
                        cssVars: { '--v': String(v) },
                        title: `${row.label} · ${matrix.years[i]} · lvl ${v}/4`,
                    })),
                ]);
                grid.appendChild(rowEl);
            });
        });

        const legend = h('div', { class: 'cv-legend' }, [
            h('span', {}, ['_intensity']),
            h('span', { class: 'scale' },
                [0, 1, 2, 3, 4].map(v => h('span', {
                    style: {
                        background: v === 0
                            ? 'transparent'
                            : `color-mix(in oklab, var(--accent-color) ${v * 20}%, transparent)`,
                        borderStyle: v === 0 ? 'dashed' : 'solid',
                    },
                }))
            ),
            h('span', {}, ['low → high']),
        ]);

        return h('div', { class: 'cv-matrix' }, [grid, legend]);
    }

    // Localized label with a safe fallback if i18n hasn't loaded.
    function t(key, fallback) {
        return (window.i18n && window.i18n.t) ? window.i18n.t(key) : fallback;
    }

    function buildEducation(education) {
        return h('div', { class: 'cv-dossier-block cv-reveal' }, [
            h('span', { class: 'cv-section-label' }, [t('cv.education_label', '_education.log')]),
            h('div', { class: 'cv-edu' }, education.map(e => h('article', { class: 'cv-edu-item' }, [
                h('span', { class: 'year' }, [e.period]),
                h('p', { class: 'title' }, [e.degree]),
                h('p', { class: 'company' }, [`@ ${e.institution} · ${e.location}`]),
                e.note && h('p', { class: 'cv-edu-note' }, [
                    h('span', { class: 'cv-note-key' }, [t('cv.thesis', 'Thesis')]),
                    e.note,
                ]),
            ]))),
        ]);
    }

    function buildPublication(pub) {
        return h('div', { class: 'cv-dossier-block cv-reveal' }, [
            h('span', { class: 'cv-section-label' }, [t('cv.publication_label', '_publication.bib')]),
            h('article', { class: 'cv-pub' }, [
                h('span', { class: 'year' }, [pub.date]),
                h('p', { class: 'title' }, [pub.title]),
                h('p', { class: 'company' }, [pub.venue]),
                pub.url && h('a', {
                    class: 'cv-pub-link',
                    href: pub.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                }, [t('cv.read_paper', 'read_paper ↗')]),
            ]),
        ]);
    }

    function buildLanguages(languages) {
        return h('div', { class: 'cv-dossier-block cv-reveal' }, [
            h('span', { class: 'cv-section-label' }, [t('cv.languages_label', '_languages.cfg')]),
            h('div', { class: 'cv-langs' }, languages.map(l => h('div', { class: 'cv-lang-row' }, [
                h('span', { class: 'cv-lang-name' }, [l.name]),
                h('span', { class: 'cv-lang-desc' }, [l.description]),
                h('span', { class: 'cv-lang-level' }, [l.level]),
            ]))),
        ]);
    }

    function buildAchievements(achievements) {
        return h('div', { class: 'cv-dossier-block cv-reveal' }, [
            h('span', { class: 'cv-section-label' }, [t('cv.achievements_label', '_achievements.txt')]),
            h('ul', { class: 'cv-achievements' }, achievements.map(a => h('li', {}, [a]))),
        ]);
    }

    function buildDossier() {
        if (!window.i18n || typeof window.i18n.getDossier !== 'function') return null;
        const d = window.i18n.getDossier();
        return h('div', { class: 'cv-dossier' }, [
            h('div', { class: 'cv-dossier-col' }, [
                buildEducation(d.education),
                buildPublication(d.publication),
            ]),
            h('div', { class: 'cv-dossier-col' }, [
                buildLanguages(d.languages),
                buildAchievements(d.achievements),
            ]),
        ]);
    }

    function buildSection(jobs) {
        const state = { openEl: null };
        const matrix = window.CV_SKILL_MATRIX;

        return h('div', { class: 'cv-section' }, [
            h('div', { class: 'cv-grid' }, [
                h('div', { class: 'cv-reveal' }, [
                    h('span', { class: 'cv-section-label' }, [t('cv.roles_label', '_roles.timeline')]),
                    h('div', { class: 'cv-roles' },
                        jobs.map(job => buildRole(job, state))
                    ),
                ]),
                h('div', { class: 'cv-reveal' }, [
                    h('span', { class: 'cv-section-label' }, [t('cv.heatmap_label', '_skill_density.heatmap')]),
                    buildMatrix(matrix),
                ]),
            ]),
            buildDossier(),
        ]);
    }

    function mount() {
        const host = document.getElementById('cv-timeline');
        if (!host) return;
        if (!window.CV_SKILL_MATRIX) return;

        const jobs = getJobs();
        if (!jobs.length) return;

        host.innerHTML = '';
        host.classList.remove('timeline');
        host.classList.add('cv-host');
        host.appendChild(buildSection(jobs));

        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        host.querySelectorAll('.cv-reveal').forEach(c => io.observe(c));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mount);
    } else {
        mount();
    }

    // Re-render whenever the user switches UI language.
    window.addEventListener('langchange', mount);
})();
