const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doReality(e.target))
);

// options = [good, cheap, fast];

function doReality(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      randomUncheck(theClickedOne);
    }
    if (cheap === theClickedOne) {
      randomUncheck(theClickedOne);
    }
    if (fast === theClickedOne) {
      randomUncheck(theClickedOne);
    }
  }
}


// Uncheck one of the other two options when the third one is checked at random
function randomUncheck(theClickedOne) {
  const options = [good, cheap, fast];
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOption = options[randomIndex];
  if(randomOption === theClickedOne) {
    randomUncheck(theClickedOne);
  } else {
    randomOption.checked = false;
  }
}