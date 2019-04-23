const nav = document.querySelector("#nav");
const menu = document.querySelector("#mainNav");
const menuButton = document.querySelector(".nav-toggle");

const programFatButton = document.querySelector(".lose-fat");
const programStrengthButton = document.querySelector(".gain-strength");
const programMuscleButton = document.querySelector(".build-muscle");

const programFat = document.querySelector(".red-box-program-fat");
const programStrength = document.querySelector(".red-box-program-strength");
const programMuscle = document.querySelector(".red-box-program-muscle");

let isMenuOpen = false;
let isProgramOpen = false;

programFatButton.addEventListener("click", e => {
  e.preventDefault();
  programStrengthButton.classList.remove("active");
});

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

// Handles program button actions
var programs = [
  ".red-box-program-fat",
  ".red-box-program-strength",
  ".red-box-program-muscle"
];

var visibleProgram = null;

function showProgram(id) {
  if (visibleProgram == id) {
    visibleProgram = null;
  } else {
    visibleProgram = id;
  }

  hideOtherPrograms();
}

function hideOtherPrograms() {
  var i, id, program;

  for (i = 0; i < programs.length; i++) {
    id = programs[i];
    program = document.querySelector(id);

    if (visibleProgram === id) {
      program.style.display = "block";
      fade(program);
    } else {
      program.style.display = "none";
    }
  }
}

// Fade In effect for text
function fade(element) {
  var op = 0.1; // opacity

  var timer = setInterval(function() {
    if (op >= 1) {
      clearInterval(timer);
    }

    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 15);
}
