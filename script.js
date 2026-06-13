// Product card hover animation

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";
        card.style.boxShadow = "0 10px 25px rgba(223,255,94,0.2)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";

    });

});


// Models strip grayscale effect

const models = document.querySelectorAll(".models-row img");

models.forEach(model => {

    model.addEventListener("mouseenter", () => {

        model.style.filter = "grayscale(0%)";
        model.style.transform = "scale(1.1)";

    });

    model.addEventListener("mouseleave", () => {

        model.style.filter = "grayscale(100%)";
        model.style.transform = "scale(1)";

    });

});


// Simple fade-in animation

window.addEventListener("load", () => {

    document.querySelector(".hero-image").style.opacity = "1";

});