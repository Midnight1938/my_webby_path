const cupsContainer = document.getElementById("cups-container");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const totalCups = 20; // You can change this to the desired number of cups

function createCups() {
  for (let i = 0; i < totalCups; i++) {
    const cup = document.createElement("div");
    cup.classList.add("cup", "cup-small");
    cup.innerText = "250 ml";
    cupsContainer.appendChild(cup);

    cup.addEventListener("click", () => highlightCups(i));
  }
}
createCups();
updateBigCup();

function highlightCups(idx) {
  if (
    cupsContainer.children[idx].classList.contains("full") &&
    !cupsContainer.children[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  for (let i = 0; i < totalCups; i++) {
    if (i <= idx) {
      cupsContainer.children[i].classList.add("full");
    } else {
      cupsContainer.children[i].classList.remove("full");
    }
  }
  updateBigCup();
}

function updateBigCup() {
  const fullCp = document.querySelectorAll(".cup-small.full").length;
  const totalCp = document.querySelectorAll(".cup-small").length;

  if (fullCp === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCp / totalCp) * 330}px`;
    // floor to 2 precision
    percentage.innerText = `${Math.floor((fullCp / totalCp) * 100)}%`;
    console.log((fullCp / totalCp) * 100);
  }
  if (fullCp === totalCp) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${(totalCups * 250) / 1000 - (250 * fullCp) / 1000}L`;
  }
}
