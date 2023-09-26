const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text =
  "The Grid.\nA digital frontier.\nI tried to picture clusters of information as they moved through the computer.\nWhat did they look like? Ships? Motorcycles? \nWere the circuits like freeways? \nI kept dreaming of a world I thought Id never see. \nAnd then, one day... \nI got in.";

let idx = 1;
let speed = 300 / speedEl.value;
let timeoutId;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  setInterval(() => {
    const cursor = document.querySelector(".cursor");
    cursor.style.visibility =
      cursor.style.visibility === "visible" ? "hidden" : "visible";
  }, 500);

  idx++;

  if (idx > text.length + 1) {
    clearTimeout(timeoutId);
  } else {
    timeoutId = setTimeout(writeText, speed);
  }
}
