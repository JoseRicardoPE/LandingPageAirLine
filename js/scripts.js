//* --- Menu Header --- *//
const openMenu = document.querySelector(".nav__menu--hamburger");
const menu = document.querySelector(".nav__link");
const closeMenu = document.querySelector(".nav__close");

openMenu.addEventListener("click", () => {
  menu.classList.add("nav__link--show");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("nav__link--show");
});

const menuLanguages = document.querySelector(".arrow__down");
const newMenu = document.querySelector(".nav__submenu--languages")

menuLanguages.addEventListener("click", () => {
  alert("Please select a languages");
  newMenu.classList.add("option__languages");
});

menuLanguages.addEventListener("click", () => {
  newMenu.classList.remove("option__languages");
});
