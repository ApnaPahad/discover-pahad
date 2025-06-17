function initTabSection() {
    const section = document.querySelector(".tab-section");
    if (!section) return;

    const boxes = section.querySelectorAll(".text-section .box");
    const images = section.querySelectorAll(".img-section .image");

    let currentIndex = 0;
    let intervalId;

    function updateVisibleImage(step) {
        images.forEach(div => {
            div.style.display = div.getAttribute("data-step") === step ? "block" : "none";
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
            clearInterval(intervalId); // stop auto-play on manual click
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
        activateBox(currentIndex); // Fallback if no active class initially
    }

    // Start auto-play
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % boxes.length;
        activateBox(currentIndex);
    }, 3000);
}

initTabSection();
