function addLazyLoading() {
    const targetEls = document.querySelectorAll('img');

    targetEls.forEach(element => {
        element.setAttribute('loading', 'lazy');
    });
}

// Scroll Animation Observer - used on all pages
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');

    if (animatedElements.length === 0) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        addLazyLoading();
        initScrollAnimations();
    });
} else {
    addLazyLoading();
    initScrollAnimations();
}