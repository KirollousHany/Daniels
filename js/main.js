const navEl = document.querySelector(".navbar");
const targetSection = document.querySelector(".about");

window.addEventListener("scroll", () => {
  const sectionTop = targetSection.getBoundingClientRect().top;

  if (sectionTop <= 0) {
    navEl.classList.add("navbar-scrolled");
  } else {
    navEl.classList.remove("navbar-scrolled");
  }
});

var typed = new Typed(".auto-type", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
