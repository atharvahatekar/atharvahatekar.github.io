// boot.js — terminal boot sequence shown over the page on first visit.
//
// boot-init.js has already set data-booting on <html> (or not). This file only
// animates; it never decides visibility, so if it fails to load the CSS
// fallback in style.css still tears the overlay down after a few seconds.

(function () {
    'use strict';

    var root = document.documentElement;
    if (!root.hasAttribute('data-booting')) return;

    var screenEl = document.getElementById('boot-screen');
    var typedEl = document.getElementById('boot-typed');
    var logEl = document.getElementById('boot-log');
    var fillEl = document.getElementById('boot-bar-fill');
    var pctEl = document.getElementById('boot-pct');
    if (!screenEl || !typedEl || !logEl || !fillEl || !pctEl) {
        root.removeAttribute('data-booting');
        return;
    }

    var COMMAND = './init --profile atharva';
    var STEPS = [
        'loading modules',
        'mounting /projects',
        'fetching github feed',
        'compiling styles',
        'warming caches'
    ];

    var TYPE_MS = 26;    // per character of the command
    var STEP_MS = 120;   // between log lines
    var MIN_MS = 1100;   // floor, so a fast load doesn't flash the overlay
    var MAX_MS = 3200;   // ceiling, so a slow asset never traps the visitor

    var startedAt = Date.now();
    var pageLoaded = document.readyState === 'complete';
    var scriptDone = false;
    var finished = false;

    // Dots pad each label to a fixed column so the "ok"s line up.
    var WIDTH = STEPS.reduce(function (m, s) { return Math.max(m, s.length); }, 0) + 4;

    function setProgress(fraction) {
        var clamped = Math.max(0, Math.min(1, fraction));
        fillEl.style.transform = 'scaleX(' + clamped + ')';
        pctEl.textContent = Math.round(clamped * 100) + '%';
    }

    function addStep(i) {
        var label = STEPS[i];
        var li = document.createElement('li');

        var name = document.createElement('span');
        name.className = 'boot-step-name';
        name.textContent = label;

        var dots = document.createElement('span');
        dots.className = 'boot-step-dots';
        dots.textContent = ' ' + new Array(WIDTH - label.length).join('.') + ' ';

        var ok = document.createElement('span');
        ok.className = 'boot-step-ok';
        ok.textContent = 'ok';

        li.appendChild(name);
        li.appendChild(dots);
        li.appendChild(ok);
        logEl.appendChild(li);

        setProgress((i + 1) / STEPS.length);
    }

    function finish() {
        if (finished) return;
        finished = true;
        setProgress(1);
        screenEl.classList.add('is-done');
        // Matches the opacity transition in style.css.
        setTimeout(function () {
            root.removeAttribute('data-booting');
        }, 460);
    }

    // Leave only when the scripted sequence has played AND the page is loaded,
    // subject to the minimum and maximum durations above.
    function maybeFinish() {
        if (!scriptDone || !pageLoaded) return;
        var elapsed = Date.now() - startedAt;
        setTimeout(finish, Math.max(0, MIN_MS - elapsed));
    }

    if (!pageLoaded) {
        window.addEventListener('load', function () {
            pageLoaded = true;
            maybeFinish();
        });
    }

    // Hard ceiling — fires regardless of what is still in flight.
    setTimeout(finish, MAX_MS);

    // 1. Type the command.
    var ci = 0;
    (function typeCommand() {
        if (ci < COMMAND.length) {
            typedEl.textContent += COMMAND.charAt(ci++);
            setTimeout(typeCommand, TYPE_MS);
            return;
        }
        // 2. Then run the steps.
        var si = 0;
        (function runStep() {
            if (si < STEPS.length) {
                addStep(si++);
                setTimeout(runStep, STEP_MS);
                return;
            }
            scriptDone = true;
            maybeFinish();
        })();
    })();
})();
