const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector("[data-menu]");

menuBtn.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("is-hidden");
//   body.classList.toggle("no-scroll");
}
