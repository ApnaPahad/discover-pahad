// Scroll Parallax Effect
function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax-section');

    if (parallaxSections.length === 0) return;

    function updateParallax() {
        parallaxSections.forEach(section => {
            const parallaxBg = section.querySelector('.parallax-bg');
            if (!parallaxBg) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Calculate parallax offset based on scroll position
            if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
                const scrolled = window.pageYOffset;
                const rate = (scrolled - sectionTop) * 0.3;
                parallaxBg.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });
    }

    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    updateParallax();

    // Update on resize
    window.addEventListener('resize', updateParallax);
}

// Cursor-based Parallax Effect
// Scroll parallax for background images
function initBackgroundParallax() {
    const parallaxBgs = document.querySelectorAll('.parallax-bg');

    if (parallaxBgs.length === 0) return;

    let scrollY = 0;

    function updateScrollPosition() {
        scrollY = window.pageYOffset;
    }

    function animateBackgroundParallax() {
        parallaxBgs.forEach(bg => {
            const section = bg.closest('.parallax-section');
            if (!section) return;

            const rect = section.getBoundingClientRect();

            // Calculate scroll-based parallax offset
            const scrollDeltaY = (scrollY - rect.top) * 0.3;

            // Apply scroll parallax
            bg.style.transform = `translate3d(0, ${scrollDeltaY}px, 0)`;
        });

        requestAnimationFrame(animateBackgroundParallax);
    }

    window.addEventListener('scroll', updateScrollPosition);
    updateScrollPosition();

    // Start animation loop
    animateBackgroundParallax();
}

// Scroll Animation Observer - moved to global.js for use on all pages

// Fade in animations for cards and elements
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale');

    if (fadeElements.length === 0) return;

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

// Enhanced card hover effects
function initCardAnimations() {
    const cards = document.querySelectorAll('.discover-the-power .card');

    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// Smooth reveal animation for photo gallery cards
function initPhotoGalleryAnimations() {
    const galleryCards = document.querySelectorAll('.photo-garelly .card');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    galleryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function initTabSection() {
    const section = document.querySelector(".tab-section");
    if (!section) return;

    const boxes = section.querySelectorAll(".text-section .box");
    const images = section.querySelectorAll(".img-section .image");

    let currentIndex = 0;
    let intervalId;

    function updateVisibleImage(step) {
        images.forEach(div => {
            const isActive = div.getAttribute("data-step") === step;
            div.style.display = isActive ? "block" : "none";
            div.style.opacity = isActive ? "1" : "0";
            div.style.transition = "opacity 0.5s ease";
        });
    }

    function activateBox(index) {
        boxes.forEach(b => b.classList.remove("active"));
        boxes[index].classList.add("active");

        const step = boxes[index].getAttribute("data-step");
        updateVisibleImage(step);
    }

    boxes.forEach((box, index) => {
        box.addEventListener("click", function () {
            clearInterval(intervalId);
            currentIndex = index;
            activateBox(currentIndex);
        });
    });

    const activeBox = section.querySelector(".text-section .box.active");
    if (activeBox) {
        currentIndex = [...boxes].indexOf(activeBox);
        const activeStep = activeBox.getAttribute("data-step");
        updateVisibleImage(activeStep);
    } else {
        activateBox(currentIndex);
    }

    // Start auto-play
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % boxes.length;
        activateBox(currentIndex);
    }, 3000);
}

// Navbar scroll behavior
function initNavbarScroll() {
    // Wait for header to be added
    const header = document.getElementById('mainHeader');
    if (!header) {
        // Retry after a short delay if header not found
        setTimeout(initNavbarScroll, 100);
        return;
    }

    const heroSection = document.querySelector('.hero-banner');
    const pageHero = document.querySelector('.page-hero');
    const isHomePage = !!heroSection && !pageHero;

    // For inner pages (not homepage), always show scrolled state (solid like footer)
    if (!isHomePage) {
        header.classList.add('scrolled');
        // Force scrolled styles immediately
        header.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
        return; // No scroll listener needed for inner pages
    }

    function handleScroll() {
        const scrollPosition = window.pageYOffset || window.scrollY;

        // For homepage only: transparent initially, then solid after hero
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            const scrollThreshold = heroHeight * 0.8;
            const hasScrolledPastHero = scrollPosition > scrollThreshold || scrollPosition > 100;

            if (hasScrolledPastHero) {
                if (!header.classList.contains('scrolled')) {
                    header.classList.add('scrolled');
                }
                // Add class to body when scrolled past hero section
                if (document.body) {
                    document.body.classList.add('hero-scrolled');
                }
            } else {
                if (header.classList.contains('scrolled')) {
                    header.classList.remove('scrolled');
                }
                // Remove class from body when back at top
                if (document.body) {
                    document.body.classList.remove('hero-scrolled');
                }
            }
        }
    }

    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial check
    handleScroll();

    // Also check after a short delay to ensure everything is loaded
    setTimeout(handleScroll, 100);
}

// Newsletter form handler
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (!email) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Submit to Google Sheets (same as header popup)
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwdRQ44BKbHL6hCNfB2k1z29KdFyrjn1_B1-EUQLUvSSzO9Y8YQaZHWsV2NhRfvnvU4/exec";

        fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `email=${encodeURIComponent(email)}`
        })
            .then(() => {
                // Show success message
                const formGroup = form.querySelector('.form-group');
                const successMsg = document.createElement('p');
                successMsg.textContent = 'Thank you for subscribing! We\'ll keep you updated with travel inspiration.';
                successMsg.style.color = '#fff';
                successMsg.style.marginTop = '15px';
                successMsg.style.fontSize = '16px';
                successMsg.style.fontWeight = '600';
                successMsg.style.textAlign = 'center';

                formGroup.style.display = 'none';
                form.appendChild(successMsg);
                emailInput.value = '';

                // Reset form after 5 seconds
                setTimeout(() => {
                    successMsg.remove();
                    formGroup.style.display = 'flex';
                }, 5000);
            })
            .catch(err => {
                console.error("Error submitting form:", err);
                alert("Something went wrong. Please try again later.");
            });
    });
}

// Smooth scroll to section
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize all functions when DOM is ready
function init() {
    initTabSection();
    initParallax();
    initBackgroundParallax();
    initFadeInAnimations();
    initCardAnimations();
    initPhotoGalleryAnimations();
    // Wait for header to be added before initializing navbar scroll
    setTimeout(function () {
        initNavbarScroll();
    }, 150);
    initNewsletterForm();
    initSmoothScroll();
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        // Small delay to ensure header is added
        setTimeout(init, 100);
    });
} else {
    // Small delay to ensure header is added
    setTimeout(init, 100);
}