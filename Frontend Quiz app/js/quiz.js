/* FETCH THE DATA */
const getData = async () => {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) {
      throw new Error("Unable to fetch the data");
    }

    const data = await res.json();
    renderQuiz(data.quizzes);
  } catch (err) {
    console.error(`Error in fetching the data, ${err}`);
  }
};

getData();

/* DISPLAY THE SELECTED QUIZ */
function renderQuiz(data) {
  const selectedQuiz = localStorage.getItem("selectedQuiz");
  const questionsEl = document.getElementById("question");
  const questionNumber = document.getElementById("question-number");
  const optionsContainer = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");

  const quiz = data.find((item) => item.title === selectedQuiz);
  if (!quiz) {
    console.error("Quiz not found");
    return;
  }

  let current = 0;
  let selectedOptionIndex = null;

  // Letters for options
  const optionLetters = ["A", "B", "C", "D"];

  // Function to show a question
  function showQuestion() {
    optionsContainer.innerHTML = "";
    selectedOptionIndex = null;

    const currentQuestion = quiz.questions[current];
    questionsEl.textContent = currentQuestion.question;
    questionNumber.textContent = `Question ${current + 1} of ${
      quiz.questions.length
    }`;

    // Display options
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.classList.add("card");
      li.classList.add("question-card");
      li.id = "options-buttonss";
      li.innerHTML = `
        <p class="option-letter">${optionLetters[index]}</p>
        <button data-index="${index}">${option}</button>
    `;
      optionsContainer.appendChild(li);
    });

    const buttons = document.querySelectorAll("#options-buttonss");

    // Adding event listeners to the buttons
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        buttons.forEach((b) => b.classList.remove("selected"));

        e.currentTarget.classList.add("selected");
        selectedOptionIndex = parseInt(e.currentTarget.dataset.index);
      });
    });
  }

  function nextQuestion() {
    if (selectedOptionIndex === null) {
      return;
    }

    current++;
    if (current < quiz.questions.length) {
      showQuestion();
    } else {
      nextBtn.textContent = "Submit Answers";
    }
  }

  nextBtn.addEventListener("click", nextQuestion);

  showQuestion();
}

/* SHOW THE NEXT QUESTIONS */
