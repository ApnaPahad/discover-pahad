function initTabSection() {
    const section = document.querySelector(".tab-section");
    if (!section) return;

    const boxes = section.querySelectorAll(".text-section .box");
    const images = section.querySelectorAll(".img-section .image");

    function updateVisibleImage(step) {
        images.forEach(div => {
            div.style.display = div.getAttribute("data-step") === step ? "block" : "none";
        });
    }

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            boxes.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const step = this.getAttribute("data-step");
            updateVisibleImage(step);
        });
    });

    const activeBox = section.querySelector(".text-section .box.active");
    if (activeBox) {
        const activeStep = activeBox.getAttribute("data-step");
        updateVisibleImage(activeStep);
    }
}


// Call this when DOM is loaded
initTabSection();

