const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes")); // Get the notes from the local storage

//! Culprit of the bug
// if (notes) {
//   notes.forEach(note => addNewNote(note)); // Add a new note for each note in the notes array
// }

addBtn.addEventListener("click", () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text; // Save the text in the text area
  main.innerHTML = marked(text); // Save in the main div

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS(); // Update the local storage
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    // Make the text area and the main div have the same text post update
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  // A browser API that allows us to store data in the browser
  const notesText = document.querySelectorAll("textarea"); // Find all text areas

  const notes = [];

  notesText.forEach((note) => notes.push(note.value)); // Push the text in the text areas to the notes array

  localStorage.setItem("notes", JSON.stringify(notes)); // Save the notes array in the local storage,
  // stringify converts the array to a string with JSON format
}
