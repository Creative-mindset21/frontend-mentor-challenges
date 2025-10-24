const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
  document.getElementById("mobile-nav").style.left = 0;
});

closeMenu.addEventListener("click", () => {
  document.getElementById("mobile-nav").style.left = "-99%";
});

/* Slideshow Function */
const slide = document.getElementById("slideshow-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const imgSlides = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let current = 0;

function showSlide(i) {
  if (i < 0) index = imgSlides.length - 1;
  if (i >= imgSlides.length) i = 0;
  current = i;
  slide.src = imgSlides[current];
}

prevBtn.addEventListener("click", () => showSlide(current - 1));
nextBtn.addEventListener("click", () => showSlide(current + 1));
