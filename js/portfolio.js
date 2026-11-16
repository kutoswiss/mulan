// Project list shown on the home page.
// - image:   hover preview, in assets/images/preview/
// - size:    CSS height of the hover preview
// - slug:    URL hash that opens the project's gallery (e.g. #digital-love-post)
// - gallery: optional; folder in assets/images/gallery/ and its images, in display order.
//            Each image needs a full-size version in the folder and a thumbnail in <folder>/thumbs/.
//            Bento tile options per image:
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
                { file: '02-photo-piscine-1.webp', tile: 'tall' },
                { file: '03-affiche-programmation.webp', tile: 'tall' },
                { file: '04-grille-horaire.webp', tile: 'big' },
                { file: '05-kaleido.webp' },
                { file: '06-photo-concert.webp' },
                { file: '07-photo-piscine-2.webp', tile: 'wide' },
                { file: '08-photo-foule.webp', tile: 'wide' },
                { file: '09-programme.webp', tile: 'wide' },
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

document.addEventListener('alpine:init', () => {
    Alpine.data('portfolio', () => ({
        projects: PROJECTS,
        active: null,
        lightbox: null,

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
            this.$root.scrollTop = 0;
        },

        closeGallery() {
            history.pushState(null, '', location.pathname + location.search);
            this.syncWithHash();
        },

        imageUrl(file, thumb = false) {
            return `assets/images/gallery/${this.active.gallery.folder}/${thumb ? 'thumbs/' : ''}${file}`;
        },

        openLightbox(index) {
            this.closeLightbox();
            this.lightbox = GLightbox({
                elements: this.active.gallery.images.map(image => ({ href: this.imageUrl(image.file), type: 'image' })),
                loop: true,
            });
            this.lightbox.openAt(index);
        },

        closeLightbox() {
            if (this.lightbox) {
                this.lightbox.destroy();
                this.lightbox = null;
            }
        },

        onEscape() {
            // GLightbox handles Escape itself while it is open.
            if (this.active && !document.body.classList.contains('glightbox-open')) {
                this.closeGallery();
            }
        },
    }));
});
