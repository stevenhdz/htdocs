import { appendNote, renderNotes, fillForm, onHandleSubmit } from "./ui.js";
import { loadNotes, onNewNote, onSelected } from "./socket.js";

window.addEventListener("DOMContentLoaded", () => {
  loadNotes(renderNotes);
  onNewNote(appendNote);
  onSelected(fillForm);
});

const noteForm = document.querySelector("#noteForm");
noteForm.addEventListener("submit", onHandleSubmit);