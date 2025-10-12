const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const slider = document.getElementById("length-range");
const formEl = document.getElementById("form");
const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");

/* CHANGE THE CHARACTER LENGTH WHEN CHANGED AND SLIDER RANGE*/
slider.addEventListener("input", (e) => {
  const value =
    ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
  e.target.style.setProperty("--value", `${value}%`);
  lengthEl.textContent = slider.value;
});

/* GENERATE PASSWORDS */
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let pass = "";
  const length = parseInt(slider.value);
  const checkBoxes = document.querySelectorAll("input[name='check']:checked");
  const values = Array.from(checkBoxes).map((box) => box.value);

  if (values.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  let characters = "";

  if (values.includes("upper")) characters += upperCase;
  if (values.includes("lower")) characters += lowerCase;
  if (values.includes("numbers")) characters += numbers;
  if (values.includes("symbols")) characters += symbols;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    pass += characters[randomIndex];
  }

  passwordEl.value = pass;

  checkPassword();
  clipboardCopy(pass);
});

/* PASSWORD STRENGTH */
function checkPassword() {
  let strength = 0;

  if (passwordEl.value.length >= 12) {
    strength += 1;
  }

  /* UPPERCASE CHECK */
  if (passwordEl.value.match(/[A-Z]/)) {
    strength += 1;
  }

  /* LOWERCASE CHECK */
  if (passwordEl.value.match(/[a-z]/)) {
    strength += 1;
  }

  /* NUMBERS CHECK */
  if (passwordEl.value.match(/[0-9]/)) {
    strength += 1;
  }

  /* Symbols CHECK */
  if (passwordEl.value.match(/[^A-Za-z0-9]/)) {
    strength += 1;
  }

  console.log(strength);

  renderColor(strength);
}

/* RENDER PASSWORD STRENGTH */
function renderColor(value) {
  const renderBoxes = document.querySelectorAll("#render-box");

  renderBoxes.forEach((box) => box.classList.remove("box-active"));

  if (value >= 2) renderBoxes[0].classList.add("box-active");
  if (value >= 3) renderBoxes[1].classList.add("box-active");
  if (value >= 4) renderBoxes[2].classList.add("box-active");
  if (value >= 5) renderBoxes[3].classList.add("box-active");
}

/* FUNCTION TO COPY THE PASSWORD */
function clipboardCopy(password) {
  const copyBtn = document.getElementById("copy-btn");
  const copyText = document.getElementById("copied-txt");

  copyBtn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        copyText.style.display = "inline-block";

        setTimeout(() => {
          copyText.style.display = "none";
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
}

clipboardCopy(passwordEl.value);
