const formEl = document.getElementById("form");
const emailEl = document.getElementById("email");
const subscribeEl = document.getElementById("subscribe-el");
const subscribedEl = document.getElementById("subscribed-el");
const dismissBtn = document.getElementById("dismiss-btn");
const errorMsg = document.getElementById("error-msg");
const subscribedEmail = document.getElementById("subscribed-email");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (data.email.includes("@")) {
    emailEl.value = "";
    subscribeEl.classList.add("subscribe");
    subscribedEl.style.display = "grid";
    subscribedEmail.textContent = `${data.email}.`;
  } else {
    errorMsg.style.display = "inline-block";
    emailEl.classList.add("error-input");
  }
});

dismissBtn.addEventListener("click", () => {
  subscribeEl.classList.remove("subscribe");
  subscribedEl.style.display = "none";
  errorMsg.style.display = "none";
  emailEl.classList.remove("error-input");
});
