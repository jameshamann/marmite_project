var myNotes = new MyNotes();
var mQuery = new MQuery();

window.onclick = function(e) {
  var clickTarget = e.target.id;
  if (clickTarget === "new_note") {
    mQuery.showNewNoteForm();
  } else if (clickTarget === "show_notes") {
    mQuery.showListOfNotes();
    mQuery.displayListOfNotes();
  } else if (clickTarget.startsWith("note_id")) {
    mQuery.showNoteContent();
    var index = clickTarget.substring(8);
    mQuery.displayNote(index);
  }
};
