// Easter egg: type the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) anywhere on the page
// to summon the clapping black cat. Click, press Escape, or wait to dismiss it.
// The GIF is only downloaded once the code is entered, so it costs normal visitors nothing.
(() => {
    const CODE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
    // Full version: claps, then reaches out for a handshake (6.5 s loop).
    // The shorter clap-only loop is kept as assets/easter-egg/clapping-cat.gif.
    const GIF = 'assets/easter-egg/clapping-cat-handshake.gif';
    const DURATION = 6150; // ms on screen: one full loop, ending on the handshake

    let recent = [];
    let overlay = null;
    let hideTimer = null;

    function show() {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'easter-egg';
            overlay.setAttribute('role', 'img');
            overlay.setAttribute('aria-label', 'A black cat with a human smile, clapping, then offering a handshake');
            overlay.innerHTML = `<img src="${GIF}" alt="">`;
            overlay.addEventListener('click', hide);
            document.body.appendChild(overlay);
        }
        // Restart the GIF and the pop-in animation on every trigger.
        const img = overlay.querySelector('img');
        clearTimeout(hideTimer);
        // Count the time on screen from when the GIF has loaded, so a slow connection doesn't cut off the handshake.
        img.onload = () => {
            clearTimeout(hideTimer);
            hideTimer = setTimeout(hide, DURATION);
        };
        img.onerror = () => { if (img.getAttribute('src')) hide(); };
        img.src = '';
        img.src = GIF;
        overlay.classList.remove('is-visible');
        void overlay.offsetWidth;
        overlay.classList.add('is-visible');
    }

    function hide() {
        clearTimeout(hideTimer);
        overlay?.classList.remove('is-visible');
    }

    // Capture phase, so Escape closes the cat without also closing an open gallery.
    window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && overlay?.classList.contains('is-visible')) {
            event.stopPropagation();
            hide();
            return;
        }

        // Keep the last keys pressed and compare them with the code.
        recent.push(event.key.toLowerCase());
        if (recent.length > CODE.length) recent.shift();
        if (recent.join() === CODE.join()) {
            recent = [];
            show();
        }
    }, true);
})();
