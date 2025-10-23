const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

/* TOGGLE MENU BUTTON */
openMenu.addEventListener("click", () => {
  document.getElementById("mobile-nav").style.right = 0;
});

closeMenu.addEventListener("click", () => {
  document.getElementById("mobile-nav").style.right = "-99%";
});
