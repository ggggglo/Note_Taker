// Packages required
const fs = require("fs");
const path = require("path");

// Function to create new note
function newNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    // Write new function in the db.json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )

    return note;
}

// Function to delete a note
function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    // Overwriting indexes for the remainig notes after one is deleted
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    // Writing db.json file without the deleted note
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
}

// Exports
module.exports = {
    newNote,
    deleteNote
};