const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const slider = document.getElementById("length-range");
const formEl = document.getElementById("form");

slider.addEventListener("input", (e) => {
  const value =
    ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
  e.target.style.setProperty("--value", `${value}%`);
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

  console.log(pass);
});
