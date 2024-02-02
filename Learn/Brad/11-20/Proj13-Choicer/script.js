const tagsElm = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
      textArea.Placeholder = "Enter your tags here";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  // We split the input by comma and filter out the empty strings and trim the spaces
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsElm.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsElm.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    lightTag(randomTag, true);

    setTimeout(() => {
      lightTag(randomTag, false);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      lightTag(randomTag, true);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function lightTag(tag, truth) {
  if (truth) {
    tag.classList.add("highlight");
  } else {
    tag.classList.remove("highlight");
  }
}
