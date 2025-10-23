const formEl = document.getElementById("form-el");

/* DISPLAY SUCCESS MESSAGE */
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("success-message").style.display = "block";
  formEl.reset();

  /* REMOVE SUCCESS MESSAGE AFTER THREE SECONDS */
  setTimeout(() => {
    document.getElementById("success-message").style.display = "none";
  }, 3000);
});
