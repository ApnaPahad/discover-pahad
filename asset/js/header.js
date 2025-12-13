(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "addHeader";


        function getSubscribePopup() {
            return `
            <div id="popupOverlay" class="overlay">
              <div class="popup">
                <span class="closeBtn" id="closePopupBtn">&times;</span>
                <div class="popup-image">
                    <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Discover Uttarakhand - Valley of Flowers">
                </div>
                <h2>Stay Connected to the Spirit of Uttarakhand!</h2>
                <p>Unlock exclusive content, travel tips, and special offers delivered straight to your inbox. Be the first to know about new destinations and hidden gems in Uttarakhand.</p>
                <div class="newletter-form">
                    <input type="email" name="email" placeholder="Enter Your Email...">
                    <div class="checkbox">
                        <input type="checkbox" name="privacy-policy">
                        <label for="privacy-policy">I agree to receive emails and confirm that I have read and accepted the privacy policy.</label>
                    </div>
                    <button>Subscribe</button>
                </div>
              </div>
            </div>
        `;
        }

        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        };

        function mobileNewsletter() {
            document.addEventListener("DOMContentLoaded", function () {
                const form = document.querySelector(".mobile-newletter");
                const emailInput = form.querySelector("input[name='email']");
                const checkbox = form.querySelector("input[name='privacy-policy']");
                const label = form.querySelector("label[for='privacy-policy']");
                const submitBtn = form.querySelector("button");

                const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxOzylqhSZ16BqVGP8bit6ZgjFv0nZVG18fXtVoev4sCGM8qGPl4ZXy5tLUQk_4Zz_kFQ/exec";

                submitBtn.addEventListener("click", function (e) {
                    e.preventDefault();

                    const email = emailInput.value.trim();

                    // Validation: checkbox must be checked
                    if (!checkbox.checked) {
                        label.style.color = "red";
                        return;
                    } else {
                        label.style.color = ""; // reset label color if previously red
                    }

                    // Submit to Google Sheet
                    fetch(GOOGLE_SCRIPT_URL, {
                        method: "POST",
                        mode: "no-cors",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: `email=${encodeURIComponent(email)}`
                    })
                        .then(() => {
                            form.classList.add("submitted");
                        })
                        .catch(err => {
                            console.error("Error submitting form:", err);
                        });
                });
            });
        }


        function showMobileHeader() {
            const openBtn = document.querySelector("#mainHeader .hamburger");
            const closeBtn = document.getElementById("closeHeader");
            const overlay = document.getElementById("HeaderOverlay");
            const body = document.body;

            function openMenu() {
                overlay.classList.add("active");
                openBtn.classList.add("active");
                body.style.overflow = "hidden";
            }

            function closeMenu() {
                overlay.classList.remove("active");
                openBtn.classList.remove("active");
                body.style.overflow = "";
            }

            if (openBtn) {
                openBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (overlay.classList.contains("active")) {
                        closeMenu();
                    } else {
                        openMenu();
                    }
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    closeMenu();
                });
            }

            if (overlay) {
                overlay.addEventListener("click", (e) => {
                    if (e.target === overlay) {
                        closeMenu();
                    }
                });

                // Close menu when clicking on navigation links
                const navLinks = overlay.querySelectorAll(".navigation-item a");
                navLinks.forEach(link => {
                    link.addEventListener("click", () => {
                        setTimeout(() => closeMenu(), 300);
                    });
                });
            }

            // Close menu on escape key
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape" && overlay.classList.contains("active")) {
                    closeMenu();
                }
            });

            mobileNewsletter();
        }

        function showPopup() {
            const openBtn = document.getElementById("subscribe_Button");
            const closeBtn = document.getElementById("closePopupBtn");
            const overlay = document.getElementById("popupOverlay");

            openBtn.addEventListener("click", () => {
                overlay.style.display = "flex";
            });

            closeBtn.addEventListener("click", () => {
                overlay.style.display = "none";
            });

            window.addEventListener("click", (e) => {
                if (e.target === overlay) {
                    overlay.style.display = "none";
                }
            });
        }

        function addPopup() {
            waitForElement('#mainHeader', function () {
                var targetElement = document.querySelector("#mainHeader");
                if (targetElement) {
                    targetElement.insertAdjacentHTML("beforeend", [getSubscribePopup(), getMobileHeaderHTML()].join('')); // Add the category section
                }
            });
            waitForElement('#mainHeader .hamburger', showMobileHeader);
            waitForElement('#mainHeader #subscribe_Button', showPopup);
        }

        function isInPagesFolder() {
            // Check current script location
            const currentScript = document.currentScript ||
                Array.from(document.getElementsByTagName('script')).pop();

            if (currentScript && currentScript.src) {
                if (currentScript.src.includes('/pages/') || currentScript.src.includes('\\pages\\') ||
                    currentScript.src.includes('../asset/') || currentScript.src.includes('../../asset/')) {
                    return true;
                }
            }

            // Check all script tags
            const scripts = document.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const src = scripts[i].src || scripts[i].getAttribute('src');
                if (src && (src.includes('../asset/') || src.includes('/pages/') || src.includes('../../asset/'))) {
                    return true;
                }
            }

            // Check pathname
            const pathname = window.location.pathname;
            if (pathname.includes('/pages/') || pathname.includes('\\pages\\')) {
                return true;
            }

            // Check href
            const href = window.location.href;
            if (href.includes('/pages/') || href.includes('\\pages\\')) {
                return true;
            }

            return false;
        }

        function isInBlogFolder() {
            // Check if we're in pages/blog/ folder
            const pathname = window.location.pathname;
            const href = window.location.href;

            if (pathname.includes('/pages/blog/') || pathname.includes('\\pages\\blog\\') ||
                href.includes('/pages/blog/') || href.includes('\\pages\\blog\\')) {
                return true;
            }

            // Check script tags for ../../asset/ pattern
            const scripts = document.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                const src = scripts[i].src || scripts[i].getAttribute('src');
                if (src && src.includes('../../asset/')) {
                    return true;
                }
            }

            return false;
        }

        function isInGalleryFolder() {
            // Check if we're in pages/gallery/ folder
            const pathname = window.location.pathname;
            const href = window.location.href;

            if (pathname.includes('/pages/gallery/') || pathname.includes('\\pages\\gallery\\') ||
                href.includes('/pages/gallery/') || href.includes('\\pages\\gallery\\')) {
                return true;
            }

            return false;
        }

        function getHeaderHTML() {
            const isInBlog = isInBlogFolder();
            const isInGallery = isInGalleryFolder();
            const isInPages = isInPagesFolder();
            const assetPrefix = isInBlog ? '../../' : (isInGallery ? '../' : (isInPages ? '../' : ''));
            const pagePrefix = isInBlog ? '../' : (isInGallery ? '../' : (isInPages ? '' : 'pages/'));
            const homeLink = isInBlog ? '../../index.html' : (isInGallery ? '../index.html' : (isInPages ? '../index.html' : 'index.html'));

            return `
            <header id="mainHeader">
                <div class="container">
                <div class="hamburger" id="hamburgerBtn">
                    <svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line class="line line1" x1="3" y1="6" x2="21" y2="6"></line>
                        <line class="line line2" x1="3" y1="12" x2="21" y2="12"></line>
                        <line class="line line3" x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                <a href="${homeLink}" class="logo">
                    <img src="${assetPrefix}asset/images/logo.png" alt="Apna Pahad - Discover Uttrakhand">
                </a>
                <nav class="navbar">
                    <ul>
                        <li class="navigation-item"><a href="${pagePrefix}destinations.html">Destinations</a></li>
                        <li class="navigation-item"><a href="${pagePrefix}experiences.html">Experiences</a></li>
                        <li class="navigation-item"><a href="${pagePrefix}culture.html">Culture</a></li>
                        <li class="navigation-item"><a href="${pagePrefix}stories.html">Stories</a></li>
                        <li class="navigation-item"><a href="${pagePrefix}plan-trip.html">Plan Your Trip</a></li>
                    </ul>
                </nav>
                <button id="subscribe_Button">Subscribe</button>
                <a href="#" class="profile-img">
                    <img src="${assetPrefix}asset/images/profile.png" alt="About Me">
                </a>
                </div>
            </header>
            `;
        }

        function getMobileHeaderHTML() {
            const isInBlog = isInBlogFolder();
            const isInGallery = isInGalleryFolder();
            const isInPages = isInPagesFolder();
            const assetPrefix = isInBlog ? '../../' : (isInGallery ? '../' : (isInPages ? '../' : ''));
            const pagePrefix = isInBlog ? '../' : (isInGallery ? '../' : (isInPages ? '' : 'pages/'));
            const homeLink = isInBlog ? '../../index.html' : (isInGallery ? '../index.html' : (isInPages ? '../index.html' : 'index.html'));

            return `
            <div id="HeaderOverlay" class="overlay">
              <div class="popup">
                <span class="closeBtn" id="closeHeader">&times;</span>
                <a href="${homeLink}" class="logo">
                    <img src="${assetPrefix}asset/images/logo.png" alt="Apna Pahad - Discover Uttrakhand">
                </a>
                <nav class="navbar">
                <ul>
                    <li class="navigation-item"><a href="${pagePrefix}destinations.html">Destinations</a></li>
                    <li class="navigation-item"><a href="${pagePrefix}experiences.html">Experiences</a></li>
                    <li class="navigation-item"><a href="${pagePrefix}culture.html">Culture</a></li>
                    <li class="navigation-item"><a href="${pagePrefix}stories.html">Stories</a></li>
                    <li class="navigation-item"><a href="${pagePrefix}plan-trip.html">Plan Your Trip</a></li>
                </ul>
                </nav>
              </div>
            </div>
            `;
        }

        function addHeader() {
            // Get header HTML with correct paths
            const headerHTML = getHeaderHTML();
            document.body.insertAdjacentHTML("afterbegin", headerHTML);

            // After header is added, verify and fix image paths if needed
            setTimeout(function () {
                const isInBlog = isInBlogFolder();
                const isInGallery = isInGalleryFolder();
                const isInPages = isInPagesFolder();
                const assetPrefix = isInBlog ? '../../' : (isInGallery ? '../' : (isInPages ? '../' : ''));

                const logoImg = document.querySelector('#mainHeader .logo img');
                const profileImg = document.querySelector('#mainHeader .profile-img img');

                if (logoImg && (isInBlog || isInGallery || isInPages)) {
                    const currentSrc = logoImg.getAttribute('src');
                    if (!currentSrc.includes(assetPrefix)) {
                        logoImg.src = assetPrefix + 'asset/images/logo.png';
                    }
                }

                if (profileImg && (isInBlog || isInGallery || isInPages)) {
                    const currentSrc = profileImg.getAttribute('src');
                    if (!currentSrc.includes(assetPrefix)) {
                        profileImg.src = assetPrefix + 'asset/images/profile.png';
                    }
                }
            }, 100);
        };

        function initNewsletterPopupForm() {
            const subscribeBtn = document.querySelector("#popupOverlay .popup .newletter-form button");

            if (!subscribeBtn) return;

            subscribeBtn.addEventListener("click", function () {
                const emailInput = document.querySelector("#popupOverlay .popup .newletter-form input[type='email']");
                const checkbox = document.querySelector("#popupOverlay .popup .newletter-form .checkbox input");
                const email = emailInput.value.trim();

                if (!checkbox.checked) {
                    alert("Please agree to the privacy policy before subscribing.");
                    return;
                }

                if (!email || !validateEmail(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }

                fetch("https://script.google.com/macros/s/AKfycbwdRQ44BKbHL6hCNfB2k1z29KdFyrjn1_B1-EUQLUvSSzO9Y8YQaZHWsV2NhRfvnvU4/exec", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({ email })
                })
                    .then(response => response.text())
                    .then(data => {
                        // Update heading
                        const heading = document.querySelector("#popupOverlay .popup h2");
                        if (heading) {
                            heading.textContent = "Thank You for Subscribing!";
                        }

                        // Update paragraph
                        const paragraph = document.querySelector("#popupOverlay .popup p");
                        if (paragraph) {
                            paragraph.textContent = "We’ll keep you updated with travel inspiration, hidden gems, and unforgettable experiences from the heart of Uttarakhand — straight to your inbox.";
                            paragraph.style.marginBottom = "0px";
                        }

                        // Hide the form
                        const form = document.querySelector("#popupOverlay .popup .newletter-form");
                        if (form) {
                            form.style.display = "none";
                        }
                    })
                    .catch(error => {
                        console.error("Error:", error);
                        alert("Something went wrong. Please try again later.");
                    });
            });

            function validateEmail(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }
        }

        // Initialize when the DOM is ready


        function init() {
            try {
                document.body.classList.add(variation_name);
                addHeader();
                addPopup();
                // Initialize newsletter form after popup is added
                waitForElement('#popupOverlay .popup .newletter-form input', function () {
                    initNewsletterPopupForm();
                });
            } catch (error) {
                if (debug) console.error('Error in init function:', error);
            }
        }
        waitForElement('body', init);


    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();