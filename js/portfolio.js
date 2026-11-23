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
                { file: '09-fdm25-battle-intro.webp' },
                { file: '10-fdm25-battle-lineup.webp' },
                { file: '11-fdm25-battle-01.webp' },
                { file: '12-fdm25-battle-02.webp' },
                { file: '13-fdm25-battle-03.webp' },
                { file: '14-fdm25-battle-04.webp' },
                { file: '15-fdm25-battle-05.webp' },
                { file: '16-fdm25-battle-06.webp' },
                { file: '17-fdm25-battle-07.webp' },
                { file: '18-fdm25-battle-08.webp' },
                { file: '19-fdm25-battle-09.webp' },
                { file: '20-fdm25-battle-10.webp' },
                { file: '21-fdm25-battle-11.webp' },
                { file: '22-fdm25-battle-12.webp' },
                { file: '23-fdm25-battle-13.webp' },
                { file: '24-fdm25-f2f-intro.webp' },
                { file: '25-fdm25-f2f-lineup.webp' },
                { file: '26-fdm25-f2f-1.webp' },
                { file: '27-fdm25-f2f-2.webp' },
                { file: '28-fdm25-f2f-3.webp' },
                { file: '29-fdm25-f2f-host.webp' },
                { file: '30-fdm25-lives-intro.webp' },
                { file: '31-fdm25-lives-lineup.webp' },
                { file: '32-fdm25-lives-1.webp' },
                { file: '33-fdm25-lives-2.webp' },
                { file: '34-fdm25-lives-3.webp' },
                { file: '35-fdm25-lives-4.webp' },
                { file: '36-fdm25-lives-5.webp' },
                // Le Mois Rouge 2025
                { file: '37-lmr25-calendar.webp', tile: 'big' },
                { file: '38-lmr25-video.mp4', fit: 'whole', ratio: 1080 / 1920 },
                { file: '39-lmr25-01-08.webp' },
                { file: '40-lmr25-08-08.webp' },
                { file: '41-lmr25-16-08.webp' },
                { file: '42-lmr25-23-08.webp' },
                { file: '43-lmr25-29-08.webp' },
                // Planète Rouge Takeover (Oct 2025)
                { file: '44-takeover-poster.webp', tile: 'big' },
                { file: '45-takeover-lineup.webp' },
                // L'After – Tataki Awards 2025
                { file: '46-tataki-poster.webp' },
                { file: '47-tataki-dj-1.webp' },
                { file: '48-tataki-dj-2.webp' },
                { file: '49-tataki-dj-3.webp' },
                { file: '50-tataki-dj-4.webp' },
                // Time to Shine
                { file: '51-timetoshine-anim.mp4', fit: 'whole', ratio: 1080 / 1920 },
                { file: '52-timetoshine-battle.mp4', ratio: 1080 / 1350 },
                { file: '53-timetoshine-contest.mp4', ratio: 1080 / 1350 },
                { file: '54-timetoshine-club.mp4', ratio: 1080 / 1350 },
                // Planète Rouge – Le Club (Feb 2026)
                { file: '55-le-club-poster.webp', tile: 'big' },
                // Fête de la Musique 2026
                { file: '56-fdm26-poster.webp', tile: 'big' },
                { file: '57-fdm26-lineup.webp' },
                { file: '58-fdm26-schedule.webp' },
                { file: '59-fdm26-lives-intro.webp' },
                { file: '60-fdm26-lives-lineup.webp' },
                { file: '61-fdm26-lives-1.webp' },
                { file: '62-fdm26-lives-2.webp' },
                { file: '63-fdm26-lives-3.webp' },
                { file: '64-fdm26-lives-4.webp' },
                { file: '65-fdm26-lives-5.webp' },
                { file: '66-fdm26-f2f-intro.webp' },
                { file: '67-fdm26-f2f-lineup.webp' },
                { file: '68-fdm26-f2f-1.webp' },
                { file: '69-fdm26-f2f-2.webp' },
                { file: '70-fdm26-f2f-3.webp' },
                { file: '71-fdm26-f2f-4.webp' },
                { file: '72-fdm26-f2f-host.webp' },
                { file: '73-fdm26-after-intro.webp' },
                { file: '74-fdm26-after-lineup.webp' },
                { file: '75-fdm26-after-1.webp' },
                { file: '76-fdm26-after-2.webp' },
                { file: '77-fdm26-after-3.webp' },
                { file: '78-fdm26-after-4.webp' },
                // Le Mois Rouge 2026
                { file: '79-lmr26-calendar.webp' },
                { file: '80-lmr26-juillet-video.mp4', fit: 'whole', ratio: 1080 / 1920 },
                { file: '81-lmr26-aout-video.mp4', fit: 'whole', ratio: 1080 / 1920 },
                { file: '82-lmr26-03-07.webp' },
                { file: '83-lmr26-05-07.webp' },
                { file: '84-lmr26-11-07.webp' },
                { file: '85-lmr26-11-07-b.webp' },
                { file: '86-lmr26-25-07.webp' },
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

    Alpine.data('portfolio', () => ({
        projects: PROJECTS,
        active: null,
        lightbox: null,
        lightboxOpen: false,
        videoObserver: null,

        init() {
            this.syncWithHash();
            window.addEventListener('hashchange', () => this.syncWithHash());
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

        closeGallery() {
            history.pushState(null, '', location.pathname + location.search);
            this.syncWithHash();
        },

        isVideo(item) {
            return item.file.endsWith('.mp4');
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

        openLightbox(index) {
            this.closeLightbox();
            const hasAudio = this.active.gallery.images.some(item => this.isVideo(item) && item.audio);
            this.lightbox = GLightbox({
                elements: this.active.gallery.images.map(item => this.isVideo(item)
                    ? { href: this.mediaUrl(item.file), type: 'video', source: 'local' }
                    : { href: this.mediaUrl(item.file), type: 'image' }),
                loop: true,
                videosWidth: this.videoWidth(this.active.gallery.images[index]),
                plyr: {
                    css: `https://cdn.jsdelivr.net/npm/plyr@${PLYR_VERSION}/dist/plyr.css`,
                    js: `https://cdn.jsdelivr.net/npm/plyr@${PLYR_VERSION}/dist/plyr.min.js`,
                    config: hasAudio ? {
                        loop: { active: true },
                        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
                    } : {
                        muted: true, // silent videos; muting also lets them autoplay on mobile
                        loop: { active: true },
                        controls: ['play-large', 'play', 'progress', 'current-time', 'fullscreen'],
                    },
                },
            });
            // GLightbox has a single video size setting: switch it to the shape of each video slide.
            this.lightbox.on('slide_changed', ({ current }) => {
                const item = this.active.gallery.images[current.index];
                if (item && this.isVideo(item)) {
                    this.lightbox.settings.videosWidth = this.videoWidth(item);
                    this.lightbox.resize();
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
