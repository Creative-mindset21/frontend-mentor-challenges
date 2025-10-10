const cardsEl = document.getElementById("cards");
const calendarLinks = document.querySelectorAll("#calendar a");

let activityData = [];
let selectedTimeframe = "daily";

let svgImages = [
  "./images/icon-work.svg",
  "./images/icon-play.svg",
  "./images/icon-study.svg",
  "./images/icon-exercise.svg",
  "./images/icon-social.svg",
  "./images/icon-self-care.svg",
];

const getData = async () => {
  try {
    const res = await fetch("../data.json");

    if (!res.ok) {
      throw new Error(`Failed to get data ${res.status} ${res.statusText}`);
    }

    activityData = await res.json();
    renderData(activityData, selectedTimeframe);
  } catch (err) {
    console.error("Error:", err);
    cardsEl.innerHTML = `<p class="error">Failed to load data. Please try again later.</p>`;
  }
};

function renderData(data, timeframe) {
  let htmlEl = "";

  data.forEach((dat, i) => {
    const current = dat.timeframes[timeframe].current;
    const previous = dat.timeframes[timeframe].previous;

    console.log(typeof current);

    let previousTime = "";

    if (selectedTimeframe === "daily") {
      if (previous <= 1) {
        previousTime = `Yesterday - ${previous}hr`;
      } else {
        previousTime = `Yesterday - ${previous}hrs`;
      }
    } else if (selectedTimeframe === "weekly") {
      previousTime = `Last week - ${previous}hrs`;
    } else {
      previousTime = `Last month - ${previous}hrs`;
    }

    htmlEl += `
        <div class="card">
            <div class="top-effect">
                <img src="${svgImages[i]}" alt="" />
            </div>

            <div class="schedule">
                <div class="schedule-title">
                    <p class="title">${dat.title}</p>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        fill="#BBC0FF"
                        fill-rule="evenodd"
                        />
                    </svg>
                </div>

                <div class="time">
                <h2>${current}hrs</h2>
                <p>${previousTime}</p>
                </div>
            </div>
        </div>
        `;
  });

  cardsEl.innerHTML = htmlEl;
}

calendarLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();

    const selectedItems = e.target.dataset.timeframes;
    selectedTimeframe = selectedItems;

    calendarLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");

    renderData(activityData, selectedTimeframe);
  });
});

getData();
