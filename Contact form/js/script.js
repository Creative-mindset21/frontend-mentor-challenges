const formEl = document.getElementById("form-el");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("success-message").style.display = "block";
  formEl.reset();
});
