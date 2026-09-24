// ================= THEME BUTTON =================

const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

});


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = "✕";

    } else {

        menuBtn.innerHTML = "☰";

    }

});