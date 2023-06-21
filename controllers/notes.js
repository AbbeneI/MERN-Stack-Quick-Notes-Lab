const Note = require('../models/note');

module.exports = {
    createNote
};

async function createNote(req, res) {
    console.log('\nreq.body', req.body)
    const newNote = {
        text: req.body.text,
        user: req.body.user
    }
    console.log('\nnewnote', newNote)


    const note = await Note.create(newNote);
    try {
        // Save any changes made to the movie doc
        await note.save();
        res.json(note);

    } catch (err) {
        res.json(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
}