var myNotes = new MyNotes();

window.onclick = function(e) {
  var clickTarget = e.target.id;
  if (clickTarget === "new_note") {
    _showNewNoteForm();
    // displayAddNoteForm();
  } else if (clickTarget === "show_notes") {
    _showListOfNotes();
    displayListOfNotes();
  } else if (clickTarget.startsWith("note_id")) {
    _showNoteContent();
    var index = clickTarget.substring(8);
    displayNote(index);
  }
};

function createNoteOnClick() {
  var noteDescription = document.getElementById("a_note").value;
  createNote(noteDescription);
}

function createNote(description) {
  myNotes.createNote(description);
  displayListOfNotes();
  _showListOfNotes();
  document.getElementById('a_note').value = '';
}

function displayListOfNotes() {
  var listOfNotes = "<h1>Notes</h1><div><ul>";
  myNotes.listNotes().forEach(function(note, index) {
    listOfNotes += "<li><a href='#' id='note_id_" + index + "'>" + note.message.slice(0,20) + "</a></li>";
  });
  listOfNotes += "</ul></div>";
  document.getElementById("list_of_notes").innerHTML = listOfNotes;
}

function displayNote(index) {
  var currentNote = "<h1>Note - " + (parseInt(index) + 1) +"</h1><p>" + myNotes.listNotes()[index].message + "</p>";
  document.getElementById("note_content").innerHTML = currentNote;
}

function _showNoteContent() {
  list_of_notes.style.display = "none";
  start_page.style.display = "none";
  document.getElementById("add_note").setAttribute("class", "hidden");
  note_content.style.display = 'block';
}

function _showListOfNotes() {
  list_of_notes.style.display = "block";
  start_page.style.display = "none";
  document.getElementById("add_note").setAttribute("class", "hidden");
  note_content.style.display = 'none';
}

function _showNewNoteForm() {
  document.getElementById("add_note").setAttribute("class", "unhidden");
  list_of_notes.style.display = "none";
  start_page.style.display = "none";
  note_content.style.display = 'none';
}
