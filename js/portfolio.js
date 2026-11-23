// Project list shown on the home page.
// - image:   hover preview, in assets/images/preview/
// - size:    CSS height of the hover preview
// - slug:    URL hash that opens the project's gallery (e.g. #digital-love-post)
// - gallery: optional; folder in assets/images/gallery/ and its items, in display order.
//            Each item needs a full-size file in the folder and a thumbnail in <folder>/thumbs/:
//              image (.webp): thumbs/<name>.webp
//              video (.mp4):  thumbs/<name>.mp4 (small autoplaying loop) + thumbs/<name>.webp (poster)
//            Bento tile options per item:
//              tile: 'big' (2x2) | 'tall' (1x2) | 'wide' (2x1) | omitted (1x1)
//              fit:  'contain' shows the whole image with padding (logos); 'whole' shows the whole image or video, no padding
//              ratio: width / height of a non-square video, so the lightbox sizes it correctly (default 1)
//              audio: true for a video with sound; the lightbox then starts it unmuted with volume controls
//            Carousel item (several images in one tile, like an Instagram multi-image post):
//              { carousel: ['a.webp', 'b.webp', ...], tile?, autoplay?: ms | false, slide?: 'left' | 'right' }
//              autoplay: advance every N ms (omit or false = static, arrows/swipe only)
//              slide: 'left' = images move leftwards, next one enters from the right (Instagram);
//                     'right' = images move rightwards (left to right)
//              Images only. In the lightbox each image is its own slide, in the carousel's order.
//            Gallery option: cellRatio = row height / column width of the grid cells (default 0.8, landscape cells)
//            Tip: on the 4-column grid, pick tiles so each row adds up to 4 columns.
//            Empty cells are back-filled automatically, but a full grid looks best.
const PROJECTS = [
    {
        title: 'PALEO FESTIVAL NYON', subtitle: 'VISUAL IDENTITY', image: '01-PFM.webp', size: '100%',
        slug: 'paleo-festival-nyon',
        gallery: {
            folder: '01-PALEO',
            images: [
                { file: '01-affiche.webp', tile: 'big' },
                { file: '02-animation-affiche.mp4', tile: 'big' },
                { file: '05-animation-merchandising.mp4', tile: 'big' },
                { file: '06-animation-burna-boy.mp4' },
                { file: '07-animation-sean-paul.mp4' },
                { file: '08-animation-hirma.mp4' },
                { file: '09-animation-slimka.mp4' },
                { file: '11-animation-chaleur.mp4' },
                { file: '12-animation-environnement.mp4' },
                { file: '14-kaleido.webp', tile: 'big' },
                { file: '15-kaleido-1.mp4' },
                { file: '16-kaleido-2.mp4' },
                { file: '17-kaleido-3.mp4' },
                { file: '18-kaleido-4.mp4' },
                { file: '19-kaleido-5.mp4' },
                { file: '20-kaleido-6.mp4' },
                { file: '21-photo-concert.webp', tile: 'big' },
                { file: '22-photo-foule.webp', tile: 'big' },
            ],
        },
    },
    {
        title: 'EDITORIAL', subtitle: '', image: '02-EDITORIAL.webp', size: '70%',
        slug: 'editorial',
        gallery: {
            folder: '02-EDITORIAL',
            images: [
                // Panorama catalogue (2012)
                { file: '01-panorama-1.webp', tile: 'big' },
                { file: '02-panorama-2.webp', tile: 'wide' },
                { file: '03-panorama-3.webp', tile: 'wide' },
                { file: '04-panorama-4.webp', tile: 'wide' },
                { file: '05-panorama-5.webp', tile: 'wide' },
                // Défilé HEAD 2017
                { file: '06-defile-head-1.webp', tile: 'big' },
                { file: '07-defile-head-2.webp', tile: 'wide' },
                { file: '08-defile-head-3.webp', tile: 'wide' },
                { file: '09-defile-head-4.webp', tile: 'wide' },
                { file: '10-defile-head-5.webp', tile: 'wide' },
                // All Nailz On Me magazine
                { file: '11-all-nailz-on-me-01.webp', tile: 'tall' },
                { file: '12-all-nailz-on-me-02.webp', tile: 'tall' },
                { file: '13-all-nailz-on-me-03.webp', tile: 'tall' },
                { file: '14-all-nailz-on-me-04.webp', tile: 'tall' },
                { file: '15-all-nailz-on-me-05.webp', tile: 'tall' },
                { file: '16-all-nailz-on-me-06.webp', tile: 'tall' },
                { file: '17-all-nailz-on-me-07.webp' },
                { file: '18-all-nailz-on-me-08.webp' },
                { file: '19-all-nailz-on-me-09.webp', tile: 'big' },
                { file: '20-all-nailz-on-me-10.webp', tile: 'tall' },
                { file: '21-all-nailz-on-me-11.webp', tile: 'tall' },
                { file: '22-all-nailz-on-me-12.webp' },
                { file: '23-all-nailz-on-me-13.webp' },
                { file: '24-all-nailz-on-me-14.webp', tile: 'tall' },
                { file: '25-all-nailz-on-me-15.webp', tile: 'tall' },
                { file: '26-all-nailz-on-me-16.webp' },
                { file: '27-all-nailz-on-me-17.webp', tile: 'tall' },
                { file: '28-all-nailz-on-me-18.webp' },
            ],
        },
    },
    {
        title: 'COMMUNICATION DIGITALE', subtitle: '', image: '03-COMDIGITALE.webp', size: '60%',
        slug: 'communication-digitale',
        gallery: {
            folder: '03-COMMUNICATION-DIGITALE',
            cellRatio: 1.25, // 4:5 cells: every image is a 4:5 Instagram post
            images: [
                // Wild Traxx (Feb 2025)
                { file: '01-wildtraxx-poster.webp', tile: 'big' },
                { file: '02-wildtraxx-lineup-video.mp4', fit: 'whole', ratio: 1080 / 1920, audio: true },
                { file: '03-wildtraxx-dsir-video.mp4', ratio: 1080 / 1350, audio: true },
                { file: '04-wildtraxx-mulahsanto-video.mp4', ratio: 1080 / 1350, audio: true },
                { file: '05-wildtraxx-ozadya-video.mp4', ratio: 1080 / 1350, audio: true },
                // Fête de la Musique 2025
                { file: '06-fdm25-poster.webp', tile: 'big' },
                { file: '07-fdm25-lineup.webp' },
                { file: '08-fdm25-schedule.webp' },
                // Battle: the 13 dancer cards as one Instagram-style carousel
                {
                    carousel: [
                        '09-fdm25-battle-intro.webp',
                        '10-fdm25-battle-lineup.webp',
                        '11-fdm25-battle-01.webp',
                        '12-fdm25-battle-02.webp',
                        '13-fdm25-battle-03.webp',
                        '14-fdm25-battle-04.webp',
                        '21-fdm25-battle-11.webp',
                        '17-fdm25-battle-07.webp',
                        '20-fdm25-battle-10.webp',
                        '19-fdm25-battle-09.webp',
                        '15-fdm25-battle-05.webp',
                        '18-fdm25-battle-08.webp',
                        '16-fdm25-battle-06.webp',
                    ],
                    tile: 'big', autoplay: 3000, slide: 'left',
                },
                // Face2Face 2025 duos and host: one Instagram-style carousel
                {
                    carousel: [
                        '24-fdm25-f2f-intro.webp',
                        '25-fdm25-f2f-lineup.webp',
                        '29-fdm25-f2f-host.webp',
                        '26-fdm25-f2f-1.webp',
                        '27-fdm25-f2f-2.webp',
                        '28-fdm25-f2f-3.webp',
                    ],
                    tile: 'big', autoplay: 3000, slide: 'left',
                },
                // Lives 2025 artists: one Instagram-style carousel
                {
                    carousel: [
                        '30-fdm25-lives-intro.webp',
                        '31-fdm25-lives-lineup.webp',
                        '35-fdm25-lives-4.webp',
                        '33-fdm25-lives-2.webp',
                        '36-fdm25-lives-5.webp',
                        '34-fdm25-lives-3.webp',
                        '32-fdm25-lives-1.webp',
                    ],
                    tile: 'big', autoplay: 3000, slide: 'left',
                },
                // Le Mois Rouge 2025
                // Instagram multi-image post: one tile, swipeable; the lightbox shows each image
                {
                    carousel: [
                        '37-lmr25-calendar.webp',
                        '39-lmr25-01-08.webp',
                        '40-lmr25-08-08.webp',
                        '41-lmr25-16-08.webp',
                        '42-lmr25-23-08.webp',
                        '43-lmr25-29-08.webp',
                    ],
                    tile: 'big', autoplay: 3000, slide: 'left',
                },
                { file: '38-lmr25-video.mp4', fit: 'whole', ratio: 1080 / 1920 },
                // L'After – Tataki Awards 2025
                // Tataki Awards DJs: one Instagram-style carousel
                {
                    carousel: [
                        '46-tataki-poster.webp',
                        '48-tataki-dj-2.webp',
                        '50-tataki-dj-4.webp',
                        '47-tataki-dj-1.webp',
                        '49-tataki-dj-3.webp',
                    ],
                    autoplay: 3000, slide: 'left',
                },
                // Time to Shine
                { file: '51-timetoshine-anim.mp4', fit: 'whole', ratio: 1080 / 1920 },
                { file: '52-timetoshine-battle.mp4', ratio: 1080 / 1350 },
                { file: '53-timetoshine-contest.mp4', ratio: 1080 / 1350 },
                { file: '54-timetoshine-club.mp4', ratio: 1080 / 1350 },
                // Planète Rouge – Le Club (Feb 2026)
                { file: '55-le-club-poster.webp' },
                // Fête de la Musique 2026
                { file: '56-fdm26-poster.webp' },
                { file: '57-fdm26-lineup.webp' },
                { file: '58-fdm26-schedule.webp' },
                // Lives 2026 artists: one Instagram-style carousel
                {
                    carousel: [
                        '59-fdm26-lives-intro.webp',
                        '60-fdm26-lives-lineup.webp',
                        '65-fdm26-lives-5.webp',
                        '69-fdm26-f2f-2.webp',
                        '64-fdm26-lives-4.webp',
                        '63-fdm26-lives-3.webp',
                        '62-fdm26-lives-2.webp',
                        '61-fdm26-lives-1.webp',
                    ],
                    tile: 'big', autoplay: 3000, slide: 'left',
                },
                // Face2Face 2026 duos and host: one Instagram-style carousel
                {
                    carousel: [
                        '66-fdm26-f2f-intro.webp',
                        '67-fdm26-f2f-lineup.webp',
                        '72-fdm26-f2f-host.webp',
                        '70-fdm26-f2f-3.webp',
                        '71-fdm26-f2f-4.webp',
                        '68-fdm26-f2f-1.webp',
                    ],
                    tile: 'big', autoplay: 3000, slide: 'left',
                },
                // L'After 2026 artists: one Instagram-style carousel
                {
                    carousel: [
                        '73-fdm26-after-intro.webp',
                        '74-fdm26-after-lineup.webp',
                        '77-fdm26-after-3.webp',
                        '78-fdm26-after-4.webp',
                        '76-fdm26-after-2.webp',
                        '75-fdm26-after-1.webp',
                    ],
                    tile: 'big', autoplay: 3000, slide: 'left',
                },
                // Le Mois Rouge 2026
                { file: '79-lmr26-calendar.webp' },
                { file: '80-lmr26-juillet-video.mp4', fit: 'whole', ratio: 1080 / 1920 },
                { file: '81-lmr26-aout-video.mp4', fit: 'whole', ratio: 1080 / 1920 },
                // Le Mois Rouge 2026 tickets: one Instagram-style carousel
                {
                    carousel: [
                        '82-lmr26-03-07.webp',
                        '83-lmr26-05-07.webp',
                        '84-lmr26-11-07.webp',
                        '85-lmr26-11-07-b.webp',
                        '86-lmr26-25-07.webp',
                    ],
                    autoplay: 3000, slide: 'left',
                },
            ],
        },
    },
    {
        title: 'DSIR', subtitle: 'GRAPHIC DESIGN', image: '04-DSIR.webp', size: '60%',
        slug: 'dsir',
        gallery: {
            folder: '04-DSIR',
            cellRatio: 1, // square cells: most visuals are square Instagram posts
            images: [
                { file: '01-logo.webp', fit: 'contain' },
                // Résidence La Gravière (2022–2023)
                { file: '02-residence-2022-01-29.webp' },
                { file: '03-residence-2022-05-14.webp' },
                { file: '04-residence-2022-08-27.webp' },
                { file: '05-residence-2023-01-21.webp' },
                { file: '06-residence-2023-03-04.webp' },
                { file: '07-residence-2023-04-14.webp' },
                { file: '08-residence-2023-05-27.webp' },
                { file: '09-residence-2023-07-29.webp' },
                { file: '10-residence-2023-09-16.webp' },
                { file: '11-residence-2023-11-25.webp', tile: 'big' },
                // Calendar 2024
                { file: '12-calendrier-mars.webp' },
                { file: '13-calendrier-aout-2024.webp' },
                // DSIR x Psychic Samba
                { file: '14-psychic-samba.webp', tile: 'big' },
                // DSIR x Lagom
                { file: '15-lagom-1.webp', fit: 'whole' },
                { file: '16-lagom-2.webp', fit: 'whole' },
                { file: '17-lagom-3.webp', fit: 'whole' },
                { file: '18-lagom-este-video.mp4', fit: 'whole', ratio: 1080 / 1920, audio: true },
                // Birthday 7 (Blue Mush)
                { file: '19-birthday-7.webp', tile: 'big', fit: 'whole' },
                { file: '20-birthday-7-blue-mush.webp', fit: 'whole' },
                { file: '21-birthday-7-blue-mush-video.mp4', fit: 'whole', ratio: 1080 / 1350, audio: true },
                // Birthday 8 (Hirma)
                { file: '22-birthday-8.webp', tile: 'big', fit: 'whole' },
                { file: '23-birthday-8-hirma.webp', fit: 'whole' },
                { file: '24-birthday-8-hirma-video.mp4', fit: 'whole', ratio: 1080 / 1350, audio: true },
            ],
        },
    },
    {
        title: 'ALL NAILZ ON ME', subtitle: 'NAIL ART', image: '05-NAILZ.webp', size: '80%',
        slug: 'all-nailz-on-me',
        gallery: {
            folder: '05-ALLNAILZONME',
            cellRatio: 1.25, // 4:5 cells: almost every photo is a portrait
            images: [
                // Shoot 1
                { file: '01-shoot-1-01.webp', tile: 'big' },
                { file: '02-shoot-1-02.webp', tile: 'big' },
                { file: '03-shoot-1-03.webp' },
                { file: '04-shoot-1-04.webp' },
                { file: '05-shoot-1-05.webp' },
                { file: '06-shoot-1-06.webp' },
                { file: '07-shoot-1-07.webp' },
                { file: '08-shoot-1-08.webp' },
                { file: '09-shoot-1-09.webp' },
                { file: '10-shoot-1-10.webp' },
                // Agapornis (2022)
                { file: '11-agapornis-01.webp', tile: 'big' },
                { file: '12-agapornis-02.webp' },
                { file: '13-agapornis-03.webp' },
                { file: '14-agapornis-04.webp' },
                { file: '15-agapornis-05.webp' },
                { file: '16-agapornis-06.webp' },
                // Green nails
                { file: '17-green-nails.webp' },
                // Restaurant
                { file: '18-restaurant-01.webp', tile: 'big' },
                { file: '19-restaurant-02.webp' },
                { file: '20-restaurant-03.webp' },
                { file: '21-restaurant-04.webp' },
                // Soft focus
                { file: '22-soft-focus-01.webp' },
                { file: '23-soft-focus-02.webp', tile: 'big' },
                { file: '24-soft-focus-03.webp' },
                { file: '25-soft-focus-04.webp' },
                // Fur
                { file: '26-fur-01.webp', tile: 'wide' },
                { file: '27-fur-02.webp', tile: 'big' },
                { file: '28-fur-03.webp' },
                // Studio
                { file: '29-studio-01.webp' },
                { file: '30-studio-02.webp', tile: 'wide' },
                { file: '31-studio-03.webp', tile: 'big' },
                { file: '32-studio-04.webp' },
                { file: '33-studio-05.webp' },
                { file: '34-studio-06.webp', tile: 'wide' },
                { file: '35-studio-07.webp', tile: 'wide' },
            ],
        },
    },
    {
        title: 'DIGITAL LOVE POST', subtitle: 'CREATIVE CODING', image: '06-DLP.webp', size: '80%',
        slug: 'digital-love-post',
        gallery: {
            folder: '06-DLP',
            images: [
                { file: '01-poster.webp', tile: 'big' },
                { file: '03-poster.webp', tile: 'tall' },
                { file: '04-artboard.webp', tile: 'tall' },
                { file: '09-website-video-browser.mp4', tile: 'wide', ratio: 16 / 9 },
                { file: '07-website.webp', tile: 'wide' },
                { file: '08-website.webp', tile: 'wide' },
                { file: '05-logo-1.webp', fit: 'contain' },
                { file: '06-logo-2.webp', fit: 'contain' },
            ],
        },
    },
];

// GLightbox plays videos with Plyr, which it loads on first use. Pin it to the same CDN as the other libraries.
const PLYR_VERSION = '3.6.12';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('alpine:init', () => {
    // CV side panel, opened from the header. A store so the header button,
    // the panel and the gallery's Escape handling share one state.
    Alpine.store('cv', {
        open: false,
        opener: null,
        show(button) {
            this.opener = button || null;
            this.open = true;
            this.setPageInert(true);
            setTimeout(() => document.querySelector('.cv-close')?.focus(), 50);
        },
        close() {
            if (!this.open) return;
            this.open = false;
            this.setPageInert(false);
            this.opener?.focus();
        },
        // While the panel is open, keep keyboard focus out of the page behind it.
        setPageInert(inert) {
            document.querySelectorAll('body > header, body > section, body > footer').forEach(el => { el.inert = inert; });
        },
    });

    // A carousel tile inside a gallery (see "Carousel item" at the top of this file).
    // Nested in the portfolio component, so it can use openLightbox(), flatIndex() and lightboxOpen.
    Alpine.data('carousel', (item, tileIndex) => ({
        slide: 0,
        count: item.carousel.length,
        hovering: false,
        onScreen: false,
        swipeStartX: null,
        swiped: false,
        startTimer: null, // declared here so each carousel keeps its own (Alpine would otherwise
        timer: null,      // store undeclared properties on the outer gallery component)
        observer: null,

        init() {
            if (!item.autoplay || prefersReducedMotion()) return;
            const step = item.slide === 'right' ? () => this.prev() : () => this.next();
            const tick = () => {
                if (this.onScreen && !this.hovering && !this.lightboxOpen) step();
            };
            // Stagger: start each carousel at a different point of its cycle (spread by the
            // golden ratio of its tile position), so carousels on screen together don't flip at once.
            const offset = Math.round(((tileIndex * 0.618) % 1) * item.autoplay);
            this.startTimer = setTimeout(() => {
                tick();
                this.timer = setInterval(tick, item.autoplay);
            }, item.autoplay + offset);
            this.observer = new IntersectionObserver(([entry]) => { this.onScreen = entry.isIntersecting; }, { threshold: 0.4 });
            this.observer.observe(this.$el);
        },

        destroy() {
            clearTimeout(this.startTimer);
            clearInterval(this.timer);
            this.observer?.disconnect();
        },

        // ← → move the carousel only while it has focus and the lightbox is closed.
        // With the lightbox open, the keys must reach GLightbox (it listens on the document).
        onArrowKey(event, direction) {
            if (this.lightboxOpen) return;
            event.stopPropagation();
            direction > 0 ? this.next() : this.prev();
        },

        next() { this.slide = (this.slide + 1) % this.count; },
        prev() { this.slide = (this.slide - 1 + this.count) % this.count; },

        // Swipe with a finger or the mouse; a swipe must not also count as a click.
        swipeStart(event) {
            this.swipeStartX = event.clientX;
            this.swiped = false;
        },
        swipeEnd(event) {
            if (this.swipeStartX === null) return;
            const dx = event.clientX - this.swipeStartX;
            this.swipeStartX = null;
            if (Math.abs(dx) > 40) {
                this.swiped = true;
                dx < 0 ? this.next() : this.prev();
            }
        },

        open() {
            if (this.swiped) { this.swiped = false; return; }
            this.openLightbox(this.flatIndex(tileIndex, this.slide));
        },
    }));

    Alpine.data('portfolio', () => ({
        projects: PROJECTS,
        active: null,
        lightbox: null,
        lightboxOpen: false,
        videoObserver: null,
        openedFromList: false, // gallery opened by clicking a project (vs. a direct link)

        init() {
            this.syncWithHash();
            window.addEventListener('hashchange', () => {
                const wasOnList = !this.active;
                this.syncWithHash();
                this.openedFromList = wasOnList && !!this.active;
            });
        },

        // The open gallery is driven by the URL hash, so the browser's back
        // button closes it and a gallery link can be shared directly.
        syncWithHash() {
            const slug = decodeURIComponent(location.hash.slice(1));
            this.active = this.projects.find(p => p.gallery && p.slug === slug) || null;
            this.closeLightbox();
            this.stopVideoObserver();
            this.$root.scrollTop = 0;
        },

        // "BACK": if the gallery was opened from the project list, step back in history,
        // so the browser's own Back button doesn't reopen it afterwards.
        // After a direct link there is no list page to go back to, so replace the URL instead.
        closeGallery() {
            if (this.openedFromList) {
                history.back();
            } else {
                history.replaceState(null, '', location.pathname + location.search);
                this.syncWithHash();
            }
        },

        isVideo(item) {
            return !!item.file && item.file.endsWith('.mp4');
        },

        // Gallery items with carousels expanded into their images: what the lightbox steps through.
        flatItems() {
            return this.active.gallery.images.flatMap(item =>
                item.carousel ? item.carousel.map(file => ({ file })) : [item]);
        },

        // Lightbox position of tile `index` (plus the slide shown, for a carousel).
        flatIndex(index, slide = 0) {
            return this.active.gallery.images.slice(0, index)
                .reduce((n, item) => n + (item.carousel ? item.carousel.length : 1), 0) + slide;
        },

        mediaUrl(file, thumb = false) {
            return `assets/images/gallery/${this.active.gallery.folder}/${thumb ? 'thumbs/' : ''}${file}`;
        },

        posterUrl(file) {
            return this.mediaUrl(file.replace(/\.mp4$/, '.webp'), true);
        },

        // Grid video tiles: play muted loops only while they are on screen.
        watchVideo(video) {
            video.muted = true;
            if (prefersReducedMotion()) return;
            if (!this.videoObserver) {
                this.videoObserver = new IntersectionObserver(entries => {
                    for (const entry of entries) {
                        entry.target.dataset.visible = entry.isIntersecting ? '1' : '';
                        this.updateVideo(entry.target);
                    }
                }, { threshold: 0.25 });
            }
            this.videoObserver.observe(video);
        },

        updateVideo(video) {
            if (video.dataset.visible && !this.lightboxOpen) {
                video.play().catch(() => { }); // autoplay can be refused (e.g. low-power mode); the poster stays
            } else {
                video.pause();
            }
        },

        updateAllVideos() {
            this.$root.querySelectorAll('.gallery-tile video').forEach(v => this.updateVideo(v));
        },

        stopVideoObserver() {
            if (this.videoObserver) {
                this.videoObserver.disconnect();
                this.videoObserver = null;
            }
        },

        lightboxIsOpen() {
            return document.body.classList.contains('glightbox-open');
        },

        // `index` is a position in flatItems() (see flatIndex()).
        openLightbox(index) {
            this.closeLightbox();
            const items = this.flatItems();
            const hasAudio = items.some(item => this.isVideo(item) && item.audio);
            this.lightbox = GLightbox({
                elements: items.map(item => this.isVideo(item)
                    ? { href: this.mediaUrl(item.file), type: 'video', source: 'local' }
                    : { href: this.mediaUrl(item.file), type: 'image' }),
                loop: true,
                videosWidth: this.videoWidth(items[index]),
                plyr: {
                    css: `https://cdn.jsdelivr.net/npm/plyr@${PLYR_VERSION}/dist/plyr.css`,
                    js: `https://cdn.jsdelivr.net/npm/plyr@${PLYR_VERSION}/dist/plyr.min.js`,
                    // Always start muted: GLightbox only autoplays on phones when the player config is muted.
                    // Videos with `audio: true` are unmuted per slide in the slide_changed handler below.
                    config: {
                        muted: true,
                        loop: { active: true },
                        controls: hasAudio
                            ? ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
                            : ['play-large', 'play', 'progress', 'current-time', 'fullscreen'],
                    },
                },
            });
            this.lightbox.on('slide_changed', ({ current }) => {
                const item = items[current.index];
                if (!item || !this.isVideo(item)) return;
                // GLightbox has a single video size setting: switch it to the shape of each video slide.
                this.lightbox.settings.videosWidth = this.videoWidth(item);
                this.lightbox.resize();
                // Sound only for videos marked `audio: true`; silent ones stay muted.
                const player = current.player;
                if (player) {
                    player.muted = !item.audio;
                    if (item.audio) {
                        // If the browser refuses sound without a direct tap (some mobile browsers pause the
                        // video), keep it playing muted; the visitor can still unmute with the volume button.
                        setTimeout(() => {
                            if (player.paused) {
                                player.muted = true;
                                player.play();
                            }
                        }, 300);
                    }
                }
            });
            // Pause grid videos behind the lightbox, resume them when it closes.
            this.lightbox.on('close', () => {
                this.lightboxOpen = false;
                this.updateAllVideos();
            });
            this.lightboxOpen = true;
            this.updateAllVideos();
            this.lightbox.openAt(index);
        },

        // Lightbox width for a video: fits within 92% of the viewport width and 85% of its height.
        // It must stay a CSS min() expression: GLightbox re-applies this string on resize,
        // and would mis-parse a plain "vw"/"vh" value.
        videoWidth(item) {
            const ratio = (item && this.isVideo(item) && item.ratio) || 1;
            return `min(92vw, ${Math.round(85 * ratio)}vh)`;
        },

        closeLightbox() {
            if (this.lightbox) {
                this.lightbox.destroy();
                this.lightbox = null;
                this.lightboxOpen = false;
            }
        },

        onEscape() {
            // Escape closes the CV panel first, and only that.
            if (Alpine.store('cv').open) {
                Alpine.store('cv').close();
                return;
            }
            // GLightbox handles Escape itself while it is open.
            if (this.active && !this.lightboxIsOpen()) {
                this.closeGallery();
            }
        },
    }));
});
