const toggleIcon = document.querySelectorAll("#toggle-icon");

toggleIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.src = icon.src.includes("icon-plus.svg")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";
  });
});
