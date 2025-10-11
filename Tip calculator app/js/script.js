const formEl = document.getElementById("form-el");
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipBtns = document.querySelectorAll("#btns button");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

let selectedBtn = tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedBtn = parseFloat(btn.dataset.amount) || 0;
  });
});

function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseFloat(peopleInput.value) || 0;

  if (bill > 0 && people > 0) {
    const tipPerPerson = (bill + selectedBtn / 100) / people;
    const totalPerPerson = bill / people + tipPerPerson;

    tipAmount.textContent = `£${tipPerPerson.toFixed(2)}`;
    totalAmount.textContent = `£${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmount.textContent = `£0.00`;
    totalAmount.textContent = `£0.00`;
  }
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateTip();
});
