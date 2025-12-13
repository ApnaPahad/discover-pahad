(function() {
    'use strict';

    // Page metadata configuration
    const pageMetadata = {
        main: [
            { url: 'index.html', title: 'Home', description: 'Discover Uttarakhand\'s beauty', icon: 'home' },
            { url: 'pages/destinations.html', title: 'Destinations', description: 'Top places to visit', icon: 'location' },
            { url: 'pages/experiences.html', title: 'Experiences', description: 'Adventure activities', icon: 'check' },
            { url: 'pages/culture.html', title: 'Culture', description: 'Heritage & traditions', icon: 'building' },
            { url: 'pages/stories.html', title: 'Stories', description: 'Travel experiences', icon: 'book' },
            { url: 'pages/plan-trip.html', title: 'Plan Your Trip', description: 'Travel planning guide', icon: 'calendar' }
        ],
        gallery: [
            { url: 'pages/gallery/landscape-gallery.html', title: 'Landscape Gallery', description: 'Breathtaking mountain views', icon: 'image' },
            { url: 'pages/gallery/culture-gallery.html', title: 'Culture Gallery', description: 'Traditional heritage photos', icon: 'building' },
            { url: 'pages/gallery/adventure-gallery.html', title: 'Adventure Gallery', description: 'Thrilling adventure moments', icon: 'check' },
            { url: 'pages/gallery/temples-gallery.html', title: 'Temples Gallery', description: 'Sacred places & spirituality', icon: 'building' },
            { url: 'pages/gallery/village-gallery.html', title: 'Village Gallery', description: 'Rural life & traditions', icon: 'building' }
        ],
        blog: [
            { url: 'pages/blog/mussoorie.html', title: 'Mussoorie', description: 'Queen of the Hills', icon: 'mountain' },
            { url: 'pages/blog/rishikesh.html', title: 'Rishikesh', description: 'Yoga capital of the world', icon: 'location' },
            { url: 'pages/blog/nainital.html', title: 'Nainital', description: 'Lake city of Uttarakhand', icon: 'location' },
            { url: 'pages/blog/valley-of-flowers.html', title: 'Valley of Flowers', description: 'UNESCO World Heritage Site', icon: 'flower' },
            { url: 'pages/blog/river-rafting.html', title: 'River Rafting', description: 'White water adventures', icon: 'water' },
            { url: 'pages/blog/trekking-hiking.html', title: 'Trekking & Hiking', description: 'Mountain trails & adventures', icon: 'mountain' },
            { url: 'pages/blog/paragliding.html', title: 'Paragliding', description: 'Soar through the skies', icon: 'airplane' },
            { url: 'pages/blog/festivals.html', title: 'Festivals & Celebrations', description: 'Cultural festivities', icon: 'celebration' },
            { url: 'pages/blog/music-dance.html', title: 'Music & Dance', description: 'Traditional performances', icon: 'music' },
            { url: 'pages/blog/local-cuisine.html', title: 'Local Cuisine', description: 'Authentic flavors', icon: 'food' },
            { url: 'pages/blog/valley-of-flowers-journey.html', title: 'Valley of Flowers Journey', description: 'Travel story', icon: 'book' },
            { url: 'pages/blog/best-time-to-visit.html', title: 'Best Time to Visit', description: 'Seasonal travel guide', icon: 'calendar' },
            { url: 'pages/blog/travel-tips.html', title: 'Travel Tips', description: 'Essential travel advice', icon: 'info' }
        ]
    };

    // SVG Icons mapping
    const icons = {
        home: '<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8v-69.6H32c-17 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />',
        location: '<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />',
        check: '<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />',
        building: '<path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />',
        book: '<path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.1 38.8 29.8l30.2 7.1c6.2 1.4 11.5 4.8 15.4 9.5l13.1 15.3c10.8 12.6 26.2 20.1 42.9 20.1h111.5c10.9 0 21.3-2.8 30.4-7.8l56.2-29.6c15.1-8 32.3-8.2 47.5-.5l31.6 15.8c15.9 8 34.5 7.3 49.7-1.8l22.4-13.9c9.7-6 21.1-9.3 32.7-9.3h.1c27.6 .4 50-22.8 50-50.4V80c0-22.1-17.9-40-40-40H456c-5.2 0-10.1 1-14.7 2.8l-33.2 12.9c-9.1 3.5-19 5.4-29 5.4H256c-11.1 0-21.9-2-32-5.8l-23.4-8.6c-5.6-2.1-11.5-3.2-17.5-3.2H96c-17.7 0-32 14.3-32 32v82.7c0 8.5 2.2 16.9 6.4 24.4zM464 160c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H464zM48 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32H128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H48z" />',
        calendar: '<path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />',
        image: '<path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.5-10.5-19-10.5s-14.4 3.9-19 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32 208c8.9 0 17.1-5 21.2-12.8s3.6-17.4-1.4-24.7l-120-176z" />',
        mountain: '<path d="M32 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm240-64c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H288c-8.8 0-16-7.2-16-16zm-192 96c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zm352 0c0-8.8 7.2-16 16-16h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H464c-8.8 0-16-7.2-16-16zM32 352V224H544V352H32z" />',
        flower: '<path d="M64 112c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V112zm320 0c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V112zM200 32c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zM64 256c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V256zm320 0c0-8.8 7.2-16 16-16s16 7.2 16 16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V256z" />',
        water: '<path d="M32 192c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm0 128c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z" />',
        airplane: '<path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64H365.7L265.2 495.9c-8.7 20-32.9 28.1-52.9 17.5l-64-32c-15.4-7.7-23.1-24.6-18.4-41.1l33-132.4H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h35.8l33-132.4c4.7-16.5-3-33.4-18.4-41.1l-64-32c-20-10.5-44.2-2.5-52.9 17.5L2.3 192H0c-17.7 0-32 14.3-32 32s14.3 32 32 32h2.3l14.1 56.4c8.7 20 32.9 28.1 52.9 17.5l64-32c15.4-7.7 23.1-24.6 18.4-41.1L116.6 288H189.9l-33 132.4c-4.7 16.5 3 33.4 18.4 41.1l64 32c20 10.5 44.2 2.5 52.9-17.5L365.7 320H482.3z" />',
        celebration: '<path d="M365.2 125.4c18.1-4.4 30.6-20.8 28.1-38.1s-18.9-32.1-37-27.7L210.2 102.8C178.3 110.9 152.2 131.4 135.6 157.2L54.7 304.5c-8.5 14.8-8.5 33.1 0 47.9l80.9 147.3c16.6 25.8 42.7 46.3 74.6 54.4l151.1 43.3c18.1 4.4 38.1-5.9 42.5-24s-10-33.6-28.1-38.1L231 489.7c-20.4-5.8-36.9-20.2-46.7-39.1l-80.9-147.3 0 0 80.9-147.3c9.8-18.9 26.3-33.3 46.7-39.1L365.2 125.4zM144 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm256-192a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM496 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />',
        music: '<path d="M533 27C457.4 27 389 83.3 367.2 158.1c-2.1 7.3-8.5 12.4-16.1 12.4c-1.1 0-2.1-.1-3.1-.4L164.2 134.1c-7.6-2.1-15.8 .3-21.5 6.4c-5.7 6.1-8.1 14.7-6.4 22.9l29.1 140.3c3.5 16.8 16.1 30.4 32.9 33.9l121 21.6c8.5 1.5 17-2.1 22.4-9.4l0 0c5.5-7.2 6.9-16.8 3.7-25.2L290.1 221l101.5 18.1L407 181.5c14.3-42.6 52.6-72.4 97.4-72.4c56.8 0 103 46.2 103 103V407.7c0 50.5-36.1 93-84.5 102.4c-6.2 1.2-12.5 1.8-18.5 1.8c-56.8 0-103-46.2-103-103V306.3c0-8.6-6.9-15.5-15.5-15.5s-15.5 6.9-15.5 15.5V408.5c0 73.8 60.1 134 134 134c7.5 0 15-.7 22.3-2.1C565 524.8 608 470.2 608 407.7V212.1C608 118.2 533 27 533 27z" />',
        food: '<path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6L39.9 96H32C14.3 96 0 81.7 0 64S14.3 32 32 32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H475.1l21.5 84.2c1.6 6.2 2.4 12.5 2.4 18.7c0 47.3-38.3 85.9-85.1 85.9H253.5c-23.2 0-46.4-9.1-64-25.3L122.2 224H61.1zM544 448H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />',
        info: '<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />'
    };

    // Section titles
    const sectionTitles = {
        main: 'Main Pages',
        gallery: 'Photo Galleries',
        blog: 'Blog Posts'
    };

    function generateSitemapLink(page) {
        const iconSvg = icons[page.icon] || icons.location;
        return `
            <a href="${page.url}" class="sitemap-link">
                <div class="sitemap-link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        ${iconSvg}
                    </svg>
                </div>
                <div class="sitemap-link-content">
                    <h3>${page.title}</h3>
                    <p>${page.description}</p>
                </div>
            </a>
        `;
    }

    function generateSitemapSection(category, pages) {
        if (!pages || pages.length === 0) return '';
        
        const links = pages.map(page => generateSitemapLink(page)).join('');
        return `
            <div class="sitemap-section">
                <h2>${sectionTitles[category]}</h2>
                <div class="sitemap-links">
                    ${links}
                </div>
            </div>
        `;
    }

    function generateSitemap() {
        const container = document.querySelector('.sitemap-container');
        if (!container) return;

        // Find the header element
        const header = container.querySelector('.sitemap-header');
        if (!header) return;
        
        // Remove any existing sections (in case script runs multiple times)
        const existingSections = container.querySelectorAll('.sitemap-section');
        existingSections.forEach(section => section.remove());
        
        // Generate sections
        let sectionsHTML = '';
        
        // Main pages section
        sectionsHTML += generateSitemapSection('main', pageMetadata.main);
        
        // Gallery pages section
        sectionsHTML += generateSitemapSection('gallery', pageMetadata.gallery);
        
        // Blog pages section
        sectionsHTML += generateSitemapSection('blog', pageMetadata.blog);

        // Insert sections after header
        header.insertAdjacentHTML('afterend', sectionsHTML);
    }

    // Auto-discover pages by fetching HTML files
    async function discoverPages() {
        const discoveredPages = {
            main: [],
            gallery: [],
            blog: []
        };

        // Try to fetch and parse pages
        const pageUrls = [
            ...pageMetadata.main.map(p => p.url),
            ...pageMetadata.gallery.map(p => p.url),
            ...pageMetadata.blog.map(p => p.url)
        ];

        // For each page, try to fetch and extract title/description
        for (const pageUrl of pageUrls) {
            try {
                const response = await fetch(pageUrl);
                if (!response.ok) continue;
                
                const html = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                const title = doc.querySelector('title')?.textContent || '';
                const description = doc.querySelector('meta[name="description"]')?.content || '';
                
                // Update metadata if found
                const category = pageUrl.includes('/gallery/') ? 'gallery' : 
                                pageUrl.includes('/blog/') ? 'blog' : 'main';
                
                const existingPage = pageMetadata[category].find(p => p.url === pageUrl);
                if (existingPage) {
                    if (title) existingPage.title = title.replace(' – Apna Pahad', '').replace(' – Apna Pahad', '').trim();
                    if (description) existingPage.description = description;
                }
            } catch (error) {
                // Silently fail - use default metadata
                console.debug('Could not fetch page:', pageUrl);
            }
        }

        return discoveredPages;
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', async () => {
            await discoverPages();
            generateSitemap();
        });
    } else {
        (async () => {
            await discoverPages();
            generateSitemap();
        })();
    }
})();

