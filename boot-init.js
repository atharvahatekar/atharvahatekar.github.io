// boot-init.js — runs synchronously in <head>, before first paint.
//
// Decides whether the boot screen should play and flags it on <html>. The
// overlay is display:none in CSS until this attribute exists, which means a
// visitor with JS disabled — or if this file fails to load — simply sees the
// site, never a stuck loading screen.
(function () {
    try {
        // Once per tab: navigating between pages should stay instant.
        if (sessionStorage.getItem('booted')) return;
        sessionStorage.setItem('booted', '1');

        // A loading animation is pure motion; skip it entirely if unwanted.
        if (window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        document.documentElement.setAttribute('data-booting', '');
    } catch (e) {
        // Storage blocked (private mode, embedded webview) — skip the loader
        // rather than risk replaying it on every navigation.
    }
})();
