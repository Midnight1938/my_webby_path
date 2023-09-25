const loadText = document.querySelector(".loading-text");
const headerText = document.querySelector(".header");
const bg = document.querySelector(".bg");

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(interval);
    headerText.innerText = "स्वागतम्";
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // 0% to 100% opacity
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // 30px to 0px blur
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}; // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
