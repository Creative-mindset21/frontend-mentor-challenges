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

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let current = 0;

function showSlide(img, i) {
  if (i < 0) i = images.length - 1;
  if (i >= images.length) i = 0;

  current = i;
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = images[current];
    img.style.opacity = 1;
  }, 500);
}

function startSlideShow() {
  let intervalId = setInterval(() => showSlide(current + 1), 3000);
}

function stopSlideShow() {
  clearInterval(intervalId);
}

prevBtn.addEventListener("click", () => showSlide(slide, current - 1));
nextBtn.addEventListener("click", () => showSlide(slide, current + 1));

/* CHANGE THE IMAGE WHEN THE THUMBNAIL IS CLICKED */
const thumbnailImgs = document.querySelectorAll("#thumbnail-img li img");

function changeImage(thumbnail, imgs) {
  thumbnail.forEach((img, i) => {
    img.addEventListener("click", () => {
      imgs.style.opacity = 0;
      setTimeout(() => {
        imgs.src = images[i];
        imgs.style.opacity = 1;
      }, 500);

      thumbnail.forEach((img) => img.classList.remove("thumbnail-active"));

      img.classList.add("thumbnail-active");
    });
  });
}

changeImage(thumbnailImgs, slide);

/* OPEN CART CONTAINER */
const cartBtn = document.getElementById("cart-btn");

cartBtn.addEventListener("click", () => {
  document.getElementById("cart").classList.toggle("block");
});

/* UPDATE THE AMOUNT WHEN CLICKED */
const numberEl = document.getElementById("number");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");

let score = 1;

plusBtn.addEventListener("click", () => {
  score++;
  numberEl.textContent = score;
});
minusBtn.addEventListener("click", () => {
  if (score > 1) score--;
  numberEl.textContent = score;
});

/* ADD THE PRODUCT WHEN THE SUBMIT BUTTON IS CLICKED */
const addToCart = document.getElementById("add-to-cart");
const productName = document.querySelector("h1");
const amount = document.getElementById("current-price");
const cartContainer = document.getElementById("cart-container");

let htmlEl = "";
cartContainer.innerHTML = `<p>Your cart is empty.</p>`;

addToCart.addEventListener("click", () => {
  htmlEl = `
   <div class="flex">
      <div class="item">
        <img
          src="./images/image-product-1-thumbnail.jpg"
          alt="Shoe Image"
          class="cart-img"
        />

        <div class="item-name-amount flex">
          <span class="item-name">${productName.textContent}</span>

          <div class="amounts">
            <span class="item-amount"> ${amount.textContent} x ${score} </span>
            <span class="total-amount">$${
              Number(amount.textContent.split("$")[1]) * score
            }</span>
          </div>
        </div>

        <button
          class="delete-btn"
          id="delete-btn"
          aria-label="Click to delete the item"
        >
          <img src="./images/icon-delete.svg" alt="" />
        </button>
      </div>

      <button class="add-to-cart">Checkout</button>
    </div> 
  `;

  cartContainer.innerHTML = htmlEl;
});

/* LIGHTBOX FUNCTION */
const lightboxEl = document.getElementById("lightbox");
const lightboxPrev = document.getElementById("light-prev");
const lightboxNext = document.getElementById("light-next");
const lightboxImgs = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");
const lightBoxThumbImgs = document.querySelectorAll(
  "#lightbox-thumb-img li img"
);

/* Display the lightbox when clicked */
slide.addEventListener("click", () => (lightboxEl.style.display = "grid"));

/* Show the Previous and Next Images  */
lightboxPrev.addEventListener("click", () =>
  showSlide(lightboxImgs, current - 1)
);
lightboxNext.addEventListener("click", () =>
  showSlide(lightboxImgs, current + 1)
);

/* Close lightbox */
closeLightbox.addEventListener(
  "click",
  () => (lightboxEl.style.display = "none")
);

/* MAKE THE LIGHTBOX THUMBNAIL IMGS WORK */
changeImage(lightBoxThumbImgs, lightboxImgs);
