// terminal.js — interactive faux-terminal in the homepage contact section.
// Progressive enhancement: the container ships with [hidden]; JS reveals it.
// The plain mailto link + social icons below remain the no-JS fallback.

(function () {
    'use strict';

    const EMAIL = 'atharva.hatekar@outlook.com';
    const RESUME_PATH = 'content/Atharva_Hatekar_CV_2026.pdf';
    const RESUME_NAME = 'Atharva_Hatekar_CV_2026.pdf';

    const COMMANDS = {
        help: () => [
            ['t-accent', 'available commands:'],
            ['', '  help        show this list'],
            ['', '  whoami      about me'],
            ['', '  email       get my email address'],
            ['', '  resume      download my resume (pdf)'],
            ['', '  projects    open the projects page'],
            ['', '  research    what I am working on'],
            ['', '  github      my GitHub profile'],
            ['', '  linkedin    my LinkedIn profile'],
            ['', '  theme       toggle dark / light'],
            ['', '  clear       clear the terminal'],
        ],
        whoami: () => [
            ['t-accent', 'Atharva Hatekar'],
            ['', 'Data Scientist / AI Engineer — Germany'],
            ['', 'From live sensor feeds to models that hold up in production.'],
        ],
        research: () => [
            ['t-accent', 'current focus:'],
            ['', '  · unsupervised anomaly detection on non-stationary'],
            ['', '    industrial multivariate time-series (M.Sc. thesis)'],
            ['', '  · graph deviation networks with multi-head attention'],
            ['', '  · small language models trained from scratch'],
            ['', '  · agentic RAG that survives contact with production'],
        ],
        email: () => [
            ['html', `<a href="mailto:${EMAIL}">${EMAIL}</a> — say hi!`],
        ],
        resume: () => {
            const a = document.createElement('a');
            a.href = RESUME_PATH;
            a.download = RESUME_NAME;
            document.body.appendChild(a);
            a.click();
            a.remove();
            return [['t-accent', `downloading ${RESUME_NAME}…`]];
        },
        cv: () => COMMANDS.resume(),
        projects: () => { window.location.href = 'projects.html'; return [['', 'cd ~/projects']]; },
        github: () => { window.open('https://github.com/atharvahatekar', '_blank', 'noopener'); return [['', 'opening github.com/atharvahatekar ↗']]; },
        linkedin: () => { window.open('https://linkedin.com/in/atharvahatekar', '_blank', 'noopener'); return [['', 'opening linkedin.com/in/atharvahatekar ↗']]; },
        theme: () => {
            const btn = document.getElementById('theme-toggle');
            if (btn) btn.click();
            return [['t-accent', 'theme toggled.']];
        },
        sudo: () => [['t-accent', 'nice try. this incident will be reported. 😄']],
        ls: () => [['', 'projects/  research/  cv.pdf  contact.txt']],
        pwd: () => [['', '/home/visitor']],
        hello: () => [['t-accent', 'namaste! 👋']],
        hi: () => COMMANDS.hello(),
    };

    function init() {
        const box = document.getElementById('contact-terminal');
        const output = document.getElementById('terminal-output');
        const input = document.getElementById('terminal-input');
        if (!box || !output || !input) return;

        box.hidden = false;

        function print(lines) {
            lines.forEach(([cls, text]) => {
                const div = document.createElement('div');
                if (cls === 'html') {
                    // Only trusted, hardcoded strings from COMMANDS reach this branch.
                    div.innerHTML = text;
                } else {
                    if (cls) div.className = cls;
                    div.textContent = text;
                }
                output.appendChild(div);
            });
            output.scrollTop = output.scrollHeight;
        }

        print([
            ['t-accent', '# interactive shell — type \'help\' to explore'],
        ]);

        const history = [];
        let histIdx = -1;

        input.addEventListener('keydown', (ev) => {
            if (ev.key === 'ArrowUp') {
                ev.preventDefault();
                if (history.length) {
                    histIdx = histIdx <= 0 ? history.length - 1 : histIdx - 1;
                    input.value = history[histIdx];
                }
                return;
            }
            if (ev.key === 'ArrowDown') {
                ev.preventDefault();
                if (histIdx >= 0 && histIdx < history.length - 1) {
                    histIdx++;
                    input.value = history[histIdx];
                } else {
                    histIdx = -1;
                    input.value = '';
                }
                return;
            }
            if (ev.key !== 'Enter') return;

            const raw = input.value.trim();
            input.value = '';
            if (!raw) return;
            history.push(raw);
            histIdx = -1;

            const echo = document.createElement('div');
            echo.innerHTML = '<span class="t-accent">$ </span><span class="t-cmd"></span>';
            echo.querySelector('.t-cmd').textContent = raw;
            output.appendChild(echo);

            const cmd = raw.toLowerCase().split(/\s+/)[0];
            if (cmd === 'clear') {
                output.innerHTML = '';
                return;
            }
            const handler = COMMANDS[cmd];
            if (handler) {
                print(handler());
            } else {
                print([['', `command not found: ${cmd} — try 'help'`]]);
            }
            output.scrollTop = output.scrollHeight;
        });

        // Focus the input when the terminal chrome is clicked
        box.addEventListener('click', (ev) => {
            if (ev.target.closest('a')) return;
            input.focus({ preventScroll: true });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
