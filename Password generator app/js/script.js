const slider = document.getElementById("length-range");
slider.addEventListener("input", (e) => {
  const value =
    ((e.target.value - e.target.min) / (e.target.max - e.target.min)) * 100;
  e.target.style.setProperty("--value", `${value}%`);
});
