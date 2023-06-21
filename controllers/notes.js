const Note = require('../../models/notes');

module.exports = {
    createNote
};

async function createNote() {
    const note = await Note.findById(req.params.id);

    // req.body.user = req.user._id;
    // req.body.userName = req.user.name;
    // req.body.userAvatar = req.user.avatar;

    // We can push (or unshift) subdocs into Mongoose arrays

    note.reviews.push(req.body);
    try {
        // Save any changes made to the movie doc
        await note.save();
    } catch (err) {
        console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    res.redirect(`/notes`);
}