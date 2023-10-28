const container = document.getElementById("container");
const colours = [
  "#f4dbd6",
  "#f0c6c6",
  "#f5bde6",
  "#c6a0f6",
  "#ed8796",
  "#ee99a0",
  "#f5a97f",
  "#eed49f",
  "#a6da95",
  "#8bd5ca",
  "#91d7e3",
  "#7dc4e4",
  "#8aadf4",
  "#b7bdf8",
  "#cad3f5",
  "#b8c0e0",
  "#a5adcb",
  "#939ab7",
  "#8087a2",
  "#6e738d",
  "#5b6078",
];

// The following height and width in number of squares
// max-height: calc(100vh - 50px);
// max-width: calc(100vw - 50px);
const SQUARES = 966;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColour(square));
  square.addEventListener("mouseout", () => revColour(square));

  container.appendChild(square);
}

function setColour(element) {
  const colour = getRandColour();
  element.style.background = colour;
  element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;
}

function revColour(element) {
  element.style.background = "var(--Base)";
  element.style.boxShadow = "0 0 2px var(--Mantle)";
}

function getRandColour() {
  return colours[Math.floor(Math.random() * colours.length)];
}
