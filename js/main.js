console.log("Sample JavaScript #5 HW #17");

let container = null;
let prevIndicator = null;

function createContainer() {
  elemDiv = document.createElement("div");

  elemDiv.setAttribute("id", "carousel");
  document.querySelector("body").appendChild(elemDiv);

  container = document.querySelector("#carousel");
}

function createSlides(nr) {
  slidesUl = document.createElement("ul");
  slidesUl.setAttribute("class", "slides");

  for (i = 0; i < nr; i++) {
    let slideItem = document.createElement("li");
    let slideLink = document.createElement("a");

    slideItem.setAttribute(
      "class",
      i === 0 ? "slides__item active" : "slides__item"
    );
    slideLink.setAttribute("href", "#");
    slideItem.appendChild(slideLink);
    slidesUl.appendChild(slideItem);
  }

  container.appendChild(slidesUl);
}

function createIndicators(nr) {
  indicatorsDiv = document.createElement("div");
  indicatorsDiv.setAttribute("class", "indicators");

  for (i = 0; i < nr; i++) {
    let indicatorsItem = document.createElement("span");

    indicatorsItem.setAttribute(
      "class",
      i === 0 ? "indicators__item active" : "indicators__item"
    );
    indicatorsItem.setAttribute("data-slide-to", i);
    indicatorsDiv.appendChild(indicatorsItem);
  }

  container.appendChild(indicatorsDiv);
}

function createControls() {
  controlsDiv = document.createElement("div");
  controlsDiv.setAttribute("class", "controls");

  for (i = 0; i < 3; i++) {
    let controlItem = document.createElement("div");
    let controlIcon = document.createElement("i");
    const defItemClass = "controls__item";
    const defIconClass = "fas";

    switch (i) {
      case 0:
        controlItem.setAttribute("class", `${defItemClass} controls__prev`);
        controlIcon.setAttribute("class", `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute("class", `${defItemClass} controls__next`);
        controlIcon.setAttribute("class", `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute("class", `${defItemClass} controls__pause`);
        controlIcon.setAttribute("class", `${defIconClass} fa-play`);
        break;
    }
    controlItem.appendChild(controlIcon);
    controlsDiv.appendChild(controlItem);
  }
  container.appendChild(controlsDiv);
}

function createStyle() {
  styleTag = document.createElement("style");
  let styleCode = `body {
    font-family: Arial;
    box-sizing: border-box;
    margin: 0;
}

#carousel {
    width: 980px;
    height: 350px;
    margin: 0 auto;
}

.slides {
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-align: center;
}

.slides__item {
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 450px;
  opacity: 0;
}

.slides__item:nth-of-type(1) {
  background-color: green;
}

.slides__item:nth-of-type(2) {
  background-color: red;
}

.slides__item:nth-of-type(3) {
  background-color: black;
}

.slides__item:nth-of-type(4) {
  background-color: orange;
}

.slides__:nth-of-type(5) {
  background-color: blue;
}

.controls {
  display: flex;
  position: relative;
  gap: 20px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.controls__item {
  padding: 10px 20px;
  background-color: lightgrey;
  display: block;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
}

.indicators {
  display: flex;
  gap: 10px;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 20px;
}

.indicators__item {
  z-index: 1;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: black;
  cursor: pointer;
  user-select: none;
}

.active {
  opacity: 1;
}
`;

  styleTag.innerHTML = styleCode;
  container.appendChild(styleTag);
}

function indicatorsHandler(e) {
  let pointer = e.target;

  if (pointer.classList.contains("indicators__item")) {
    pointer.style.backgroundColor = "red";

    if (prevIndicator !== null) prevIndicator.removeAttribute("style");

    prevIndicator = pointer;
  }
}

function setListener() {
  let indicatorsDiv = document.querySelector("div.indicators");

  indicatorsDiv.addEventListener("click", indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
  createContainer();
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel(5);
