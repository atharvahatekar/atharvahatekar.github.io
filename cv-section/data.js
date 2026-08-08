// Shared CV helpers.
// Experience data lives in js/i18n.js (window.i18n.getExperience()) so it can
// be localized per UI language. This file only carries the language-independent
// bits the renderer still needs.

// Format "1y 8mo"
window.CV_DURATION = function (start, end) {
    const parse = (s) => {
        if (!s) return new Date();
        const [y, m] = s.split('-').map(Number);
        return new Date(y, (m || 1) - 1, 1);
    };
    const a = parse(start);
    const b = end ? parse(end) : new Date();
    let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
    if (months < 1) months = 1;
    const y = Math.floor(months / 12);
    const m = months % 12;
    if (y === 0) return `${m}mo`;
    if (m === 0) return `${y}y`;
    return `${y}y ${m}mo`;
};

// Skill-matrix rows (category → years) used in the density map.
// Values are 0-4: 0 = untouched, 4 = daily driver that year.
window.CV_SKILL_MATRIX = {
    years: [2021, 2022, 2023, 2024, 2025, 2026],
    groups: [
        {
            label: 'Languages',
            rows: [
                { label: 'Python',                 values: [2, 3, 3, 4, 4, 4] },
                { label: 'SQL',                    values: [3, 4, 3, 3, 3, 3] },
                { label: 'Shell / Bash',           values: [0, 1, 1, 2, 3, 3] },
            ],
        },
        {
            label: 'ML & Data',
            rows: [
                { label: 'pandas / NumPy',         values: [2, 3, 3, 4, 4, 4] },
                { label: 'Scikit-learn',           values: [1, 2, 3, 3, 4, 4] },
                { label: 'XGBoost',                values: [0, 1, 2, 2, 3, 4] },
                { label: 'Forecasting',            values: [0, 0, 1, 3, 4, 4] },
                { label: 'Anomaly Detection',      values: [0, 0, 1, 2, 4, 4] },
                { label: 'Statsmodels',            values: [0, 1, 2, 3, 3, 3] },
            ],
        },
        {
            label: 'AI Engineering',
            rows: [
                { label: 'PyTorch',                values: [0, 0, 2, 3, 4, 4] },
                { label: 'Transformers / LLMs',    values: [0, 0, 1, 2, 4, 4] },
                { label: 'Fine-tuning (LoRA)',     values: [0, 0, 0, 1, 3, 4] },
                { label: 'LangGraph / Agents',     values: [0, 0, 0, 1, 3, 4] },
                { label: 'RAG / Vector DBs',       values: [0, 0, 0, 2, 3, 4] },
            ],
        },
        {
            label: 'MLOps & Cloud',
            rows: [
                { label: 'Docker',                 values: [0, 1, 1, 2, 4, 4] },
                { label: 'FastAPI',                values: [0, 0, 1, 2, 3, 4] },
                { label: 'MLflow',                 values: [0, 0, 0, 1, 3, 4] },
                { label: 'Azure',                  values: [0, 0, 0, 1, 4, 4] },
                { label: 'AWS',                    values: [0, 0, 1, 2, 3, 3] },
                { label: 'CI/CD',                  values: [0, 0, 1, 2, 4, 4] },
            ],
        },
        {
            label: 'Analytics & Observability',
            rows: [
                { label: 'Grafana',                values: [0, 0, 0, 3, 4, 4] },
                { label: 'Power BI',               values: [3, 4, 2, 1, 1, 1] },
                { label: 'Plotly',                 values: [1, 2, 2, 3, 3, 3] },
                { label: 'LangSmith / RAGAS',      values: [0, 0, 0, 0, 2, 3] },
            ],
        },
    ],
};
