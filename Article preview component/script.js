const shareBtn = document.getElementById("share-btn");
const nameTitle = document.getElementById("name-title");
const authorEl = document.getElementById("author-el");
const shareEl = document.getElementById("share-el");

shareBtn.addEventListener("click", () => {
  nameTitle.classList.toggle("none");
  authorEl.classList.toggle("author-mod");
  shareEl.classList.toggle("none");
});
