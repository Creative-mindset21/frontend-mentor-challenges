const cardsEl = document.getElementById("cards");
const calendarLinks = document.querySelectorAll("#calendar a");

let activityData = [];
let selectedTimeframe = "weekly";

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

  data.forEach((dat) => {
    const current = dat.timeframes[timeframe].current;
    const previous = dat.timeframes[timeframe].previous;

    let previousTime = "";

    if (selectedTimeframe === "daily") {
      previousTime = `Yesterday - ${previous}hrs`;
    } else if (selectedTimeframe === "weekly") {
      previousTime = `Last week - ${previous}hrs`;
    } else {
      previousTime = `Last month - ${previous}hrs`;
    }

    htmlEl += `
        <div class="card">
            <div class="top-effect">
                <svg width="79" height="79" xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z"
                  fill="#D96C47"
                  fill-rule="nonzero"
                  class="shape-icon"
                  />
              </svg>
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
