const formEl = document.getElementById("form-el");
const billInput = document.getElementById("bill");
const peopleEl = document.getElementById("people");
const tipBtns = document.querySelectorAll("#btns button");
const customEl = document.getElementById("custom");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-btn");

let selectedTip = 0;

/* GET SELECTED TIP */
tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipBtns.forEach((b) => b.classList.remove("active"));

    customEl.value = "";

    btn.classList.add("active");
    selectedTip = parseFloat(btn.dataset.amount) || 0;
    calculateTip();
  });
});

/* CUSTOM TIPS */
customEl.addEventListener("input", () => {
  tipBtns.forEach((b) => b.classList.remove("active"));

  selectedTip = parseFloat(customEl.value) || 0;
  calculateTip();
});

/* CALCULATE THE TIPS AND RENDER THE TIPS*/
function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseFloat(peopleEl.value) || 1;

  if (bill > 0 && people > 0) {
    const tipPerPerson = (bill * (selectedTip / 100)) / people;
    const totalPerPerson = bill / people + tipPerPerson;

    tipAmount.textContent = `£${tipPerPerson.toFixed(2)}`;
    totalAmount.textContent = `£${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmount.textContent = `£0.00`;
    totalAmount.textContent = `£0.00`;
  }
}

calculateTip();

[billInput, peopleEl].forEach((input) => {
  input.addEventListener("input", calculateTip);
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateTip();
});

resetBtn.addEventListener("click", () => {
  tipAmount.textContent = `£0.00`;
  totalAmount.textContent = `£0.00`;
  tipBtns.forEach((b) => b.classList.remove("active"));
});
