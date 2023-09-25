const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const timeShow = document.querySelector(".time");
const dateShow = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "रविवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "गुरुवार",
  "शुक्रवार",
  "शनिवार",
];
//const mnth = ['चैत्र', 'वैसाख', 'ज्येष्ठ', 'आषाढ़', 'श्रावण', 'भाद्रपद', 'अश्विन', 'कार्तिक', 'अग्रहायण', 'पौष', 'माघ', 'फाल्गुन'];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "अंधेर";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "प्रकाश";
  }
});

// Clock
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(
    hours,
    0,
    23,
    0,
    360
  )}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeShow.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateShow.innerHTML = `${days[day]}, ${
    months[month]
  } <span class="circle">${time.getDate()}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(setTime, 1000);
