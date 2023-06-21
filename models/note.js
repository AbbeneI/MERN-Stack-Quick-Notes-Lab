const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Note', NoteSchema)