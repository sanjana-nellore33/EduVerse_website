// Explore Courses button
const exploreBtn = document.querySelector(".hero button");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        window.location.href = "courses.html";
    });
}

// Contact form popup
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    });
}