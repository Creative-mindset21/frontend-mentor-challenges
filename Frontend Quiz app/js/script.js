const cards = document.getElementById("cards");

/* FETCH THE DATA */
const getData = async () => {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) {
      throw new Error("Unable to fetch the data");
    }

    const data = await res.json();
    renderCards(data.quizzes);
  } catch (err) {
    console.error(`Error in fetching the data, ${err}`);
  }
};

getData();

/* DISPLAY THE CARDS IN THE WELCOME PAGE */
function renderCards(data) {
  let htmlEL = "";

  const colors = [
    "--color-orange-50",
    "--color-green-100",
    "--color-blue-50",
    "--color-purple-100",
  ];

  data.forEach((dat, index) => {
    htmlEL += `
            <li class="card" data-category="${dat.title}" id="card">
                <img src="${dat.icon}" alt="HTML SVG" style="background: var(${colors[index]})"/>
                <a href="#"> ${dat.title} </a>
            </li>
        `;
  });

  cards.innerHTML = htmlEL;

  getCategory();
}

/* GET THE CATEGORY FOR THE QUIZ */
function getCategory() {
  const cardsEl = document.querySelectorAll("#card");

  cardsEl.forEach((card) => {
    card.addEventListener("click", () => {
      localStorage.setItem("selectedQuiz", card.dataset.category);
      window.location.href = "quiz.html";
    });
  });
}
