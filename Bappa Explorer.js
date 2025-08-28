document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    // Collapse when a nav link is clicked
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    // Collapse when clicking outside the navbar
    document.addEventListener("click", function(event) {
        let isClickInside = navbarCollapse.contains(event.target) || event.target.closest(".navbar-toggler");

        if (!isClickInside && navbarCollapse.classList.contains("show")) {
            let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});