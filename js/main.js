// let mainNavigation = document.getElementById("mainNav");
// let navToggle = document.getElementById("navbar-toggle");

// navToggle.addEventListener("click", function() {
//   mainNavigation.classList.toggle("nav-active");
// });
const nav = document.querySelector("#nav");
const menu = document.querySelector("#mainNav");
const menuButton = document.querySelector(".nav-toggle");
let isMenuOpen = false;

// Toggle active state of the menu
menuButton.addEventListener("click", e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // Toggle attributes and active class
  menuButton.setAttribute("aria-expanded", String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle("nav-open");
});

nav.addEventListener("keydown", e => {
  // Abort if menu is not open or modify keys pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // Listen for TAB press
  const menuLinks = menu.querySelectorAll("nav-link");
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuButton.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuButton) {
      menuLinks[0].focus();
      e.preventDefault;
    }
  }
});
