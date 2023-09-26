const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "So this is a message",
  "Here we made a notification",
  "I am tired of making html",
  "Lest make a notification",
  "This is a notification",
  "Why not do rust",
];
const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif); // Add toasts to the toasts div

  setTimeout(() => {
    notif.remove();
  }, 2000); // Remove the toast after 2 seconds
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
