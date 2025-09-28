const cardsEl = document.getElementById("cards");

const cardsItems = [
  {
    title: "Supervisor",
    para: "Monitors activity to identify project roadblocks",
    src: "./images/icon-supervisor.svg",
    color: "#44D3D2",
  },

  {
    title: "Team Builder",
    para: "Scans our talent network to create the optimal team for your project",
    src: "./images/icon-team-builder.svg",
    color: "#EA5454",
  },

  {
    title: "Karma",
    para: "Regularly evaluates our talent to ensure quality",
    src: "./images/icon-karma.svg",
    color: "#FCAE4A",
  },

  {
    title: "Calculator",
    para: "Uses data from past projects to provide better delivery estimates",
    src: "./images/icon-calculator.svg",
    color: "#549EF2",
  },
];

let htmlEL = "";

cardsItems.map(({ title, para, src, color }) => {
  htmlEL += `
    <div class="card" style="border-top: 4px solid ${color}">
        <div class="texts">
        <h3>${title}</h3>
        <p>${para}</p>
        </div>

        <img src="${src}" alt="${title} Icon" />
    </div>
    `;
});

cardsEl.innerHTML = htmlEL;
