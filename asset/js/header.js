(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "addHeader";

        var headerHTML = `
        <header id="mainHeader">
            <div class="container">
            <div class="hamburger">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0d141c" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </div>
            <div class="logo">
                <img src="asset/images/Apna Pahad.png" alt="Apna Pahad - Discover Uttrakhand">
            </div>
            <nav class="navbar">
                <ul>
                    <li class="navigation-item"><a href="#">Destinations</a></li>
                    <li class="navigation-item"><a href="#">Experiences</a></li>
                    <li class="navigation-item"><a href="#">Culture</a></li>
                    <li class="navigation-item"><a href="#">Stories</a></li>
                    <li class="navigation-item"><a href="#">Plan Your Trip</a></li>
                </ul>
            </nav>
            <button id="subscribe_Button">Subscribe</button>
            <a href="#" class="profile-img">
                <img src="asset/images/profile.png" alt="About Me">
            </a>
            </div>
        </header>
        `;

        var subscribePopup = `
            <div id="popupOverlay" class="overlay">
              <div class="popup">
                <span class="closeBtn" id="closePopupBtn">&times;</span>
                <div class="popup-image">
                    <img src="asset/images/Popup-Image.jpg" alt="Discover Uttarakhand">
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

        var mobileHeader = `
            <div id="HeaderOverlay" class="overlay">
              <div class="popup">
                <span class="closeBtn" id="closeHeader">&times;</span>
                <div class="logo">
                    <img src="asset/images/Apna Pahad.png" alt="Apna Pahad - Discover Uttrakhand">
                </div>
                <nav class="navbar">
                <ul>
                    <li class="navigation-item"><a href="#">Destinations</a></li>
                    <li class="navigation-item"><a href="#">Experiences</a></li>
                    <li class="navigation-item"><a href="#">Culture</a></li>
                    <li class="navigation-item"><a href="#">Stories</a></li>
                    <li class="navigation-item"><a href="#">Plan Your Trip</a></li>
                </ul>
                </nav>
              </div>
            </div>
        `;

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


        function showMobileHeader() {
            const openBtn = document.querySelector("#mainHeader .hamburger");
            const closeBtn = document.getElementById("closeHeader");
            const overlay = document.getElementById("HeaderOverlay");

            openBtn.addEventListener("click", () => {
                overlay.classList.add("active");
            });

            closeBtn.addEventListener("click", () => {
                overlay.classList.remove("active");
            });

            window.addEventListener("click", (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove("active");
                }
            });
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

        function handleScrollClassOnHeader(headerId, className = "scrolled") {
            const header = document.getElementById(headerId);

            if (!header) return;

            window.addEventListener("scroll", function () {
                if (window.scrollY > 0) {
                    header.classList.add(className);
                } else {
                    header.classList.remove(className);
                }
            });
        };

        function addPopup() {
            waitForElement('#mainHeader', function () {
                var targetElement = document.querySelector("#mainHeader");
                if (targetElement) {
                    targetElement.insertAdjacentHTML("beforeend", [subscribePopup, mobileHeader].join('')); // Add the category section
                }
            });
            waitForElement('#mainHeader .hamburger', showMobileHeader);
            waitForElement('#mainHeader #subscribe_Button', showPopup);
        }

        function addHeader() {
            document.body.insertAdjacentHTML("afterbegin", headerHTML);
            handleScrollClassOnHeader("mainHeader");
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
                waitForElement('#mainHeader .popup .newletter-form input', initNewsletterPopupForm);
                addHeader();
                addPopup();
            } catch (error) {
                if (debug) console.error('Error in init function:', error);
            }
        }
        waitForElement('body', init);


    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
