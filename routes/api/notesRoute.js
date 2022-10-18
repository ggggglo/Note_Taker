// Packages and paths required
const router = require("express").Router();
const { notes } = require('../../db/db.json');
const { newNote, deleteNote } = require('../../lib/noteFunction');

// Create GET route for notes
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

// Create POST route for notes
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = newNote(req.body, notes);
    res.json(note);
})

// Create DELETE route for notes
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

// Export all routes
module.exports = router;