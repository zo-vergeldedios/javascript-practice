console.log("Notes App - DOM Practice");

const noteTitle = document.getElementById("noteTitle");
const noteContent = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

addNoteBtn.addEventListener("click", addNote);

function addNote() {
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();

  if (title === "" || content === "") return;

  const newNote = { title, content };
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();

  noteTitle.value = "";
  noteContent.value = "";
}

function renderNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    noteDiv.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;

    notesContainer.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

renderNotes();
