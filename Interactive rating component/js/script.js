const buttons = document.querySelectorAll("#rating-btn");
const submitBtn = document.getElementById("submit-btn");
const selectedMessage = document.getElementById("selected-message");
const thanksWrapper = document.getElementById("thanks-wrapper");
const ratingWrapper = document.getElementById("rating-wrapper");
let ratingNumber;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
    ratingNumber = btn.dataset.ratings;
  });
});

submitBtn.addEventListener("click", () => {
  if (ratingNumber) {
    ratingWrapper.style.display = "none";
    thanksWrapper.style.display = "inline-flex";
    selectedMessage.textContent = `You selected ${ratingNumber} out of 5`;

    setTimeout(() => {
      ratingWrapper.style.display = "inline-flex";
      thanksWrapper.style.display = "none";
    }, 5000);
  } else {
    alert("Please select a rating");
  }
});
