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
//              fit:  'contain' to show the whole image (e.g. logos) instead of cropping it
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
                { file: '03-photo-piscine-1.webp', tile: 'tall' },
                { file: '04-affiche-programmation.webp', tile: 'tall' },
                { file: '05-animation-merchandising.mp4', tile: 'big' },
                { file: '06-animation-burna-boy.mp4' },
                { file: '07-animation-sean-paul.mp4' },
                { file: '08-animation-hirma.mp4' },
                { file: '09-animation-slimka.mp4' },
                { file: '10-grille-horaire.webp', tile: 'big' },
                { file: '11-animation-chaleur.mp4' },
                { file: '12-animation-environnement.mp4' },
                { file: '13-photo-piscine-2.webp', tile: 'wide' },
                { file: '14-kaleido.webp' },
                { file: '15-kaleido-1.mp4' },
                { file: '16-kaleido-2.mp4' },
                { file: '17-kaleido-3.mp4' },
                { file: '18-kaleido-4.mp4' },
                { file: '19-kaleido-5.mp4' },
                { file: '20-kaleido-6.mp4' },
                { file: '21-photo-concert.webp' },
                { file: '22-photo-foule.webp', tile: 'wide' },
                { file: '23-programme.webp', tile: 'wide' },
            ],
        },
    },
    { title: 'EDITORIAL', subtitle: '', image: '02-EDITORIAL.webp', size: '70%' },
    { title: 'COMMUNICATION DIGITALE', subtitle: '', image: '03-COMDIGITALE.webp', size: '60%' },
    { title: 'DSIR', subtitle: 'GRAPHIC DESIGN', image: '04-DSIR.webp', size: '60%' },
    { title: 'ALL NAILZ ON ME', subtitle: 'NAIL ART', image: '05-NAILZ.webp', size: '80%' },
    {
        title: 'DIGITAL LOVE POST', subtitle: 'CREATIVE CODING', image: '06-DLP.webp', size: '80%',
        slug: 'digital-love-post',
        gallery: {
            folder: '06-DLP',
            images: [
                { file: '01-poster.webp', tile: 'big' },
                { file: '02-poster.webp', tile: 'tall' },
                { file: '03-poster.webp', tile: 'tall' },
                { file: '07-website.webp', tile: 'wide' },
                { file: '05-logo-1.webp', fit: 'contain' },
                { file: '04-artboard.webp', tile: 'tall' },
                { file: '08-website.webp', tile: 'wide' },
                { file: '06-logo-2.webp', fit: 'contain' },
            ],
        },
    },
];

// GLightbox plays videos with Plyr, which it loads on first use. Pin it to the same CDN as the other libraries.
const PLYR_VERSION = '3.6.12';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('alpine:init', () => {
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
                video.play().catch(() => {}); // autoplay can be refused (e.g. low-power mode); the poster stays
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
            this.lightbox = GLightbox({
                elements: this.active.gallery.images.map(item => this.isVideo(item)
                    ? { href: this.mediaUrl(item.file), type: 'video', source: 'local' }
                    : { href: this.mediaUrl(item.file), type: 'image' }),
                loop: true,
                videosWidth: 'min(85vh, 92vw)', // all videos are square
                plyr: {
                    css: `https://cdn.jsdelivr.net/npm/plyr@${PLYR_VERSION}/dist/plyr.css`,
                    js: `https://cdn.jsdelivr.net/npm/plyr@${PLYR_VERSION}/dist/plyr.min.js`,
                    config: {
                        muted: true, // the videos are silent; also required for autoplay on mobile
                        loop: { active: true },
                        controls: ['play-large', 'play', 'progress', 'current-time', 'fullscreen'],
                    },
                },
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

        closeLightbox() {
            if (this.lightbox) {
                this.lightbox.destroy();
                this.lightbox = null;
                this.lightboxOpen = false;
            }
        },

        onEscape() {
            // GLightbox handles Escape itself while it is open.
            if (this.active && !this.lightboxIsOpen()) {
                this.closeGallery();
            }
        },
    }));
});
