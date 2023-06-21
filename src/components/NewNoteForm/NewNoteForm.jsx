import { useState } from 'react';
import './NewNoteForm.css';
import { createNote } from '../../utilities/notes-api';

export default function NewNoteForm({ user }) {

    const [newNote, setNewNote] = useState({ text: "" })
    const [error, setError] = useState("");

    // export async function signUp(userData) {
    //     const token = await usersAPI.signUp(userData);
    //     localStorage.setItem('token', token);
    //     return getUser();
    //   }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const noteToSend = {
            text: newNote.text,
            user: user._id
        }
        try {
            const note = await createNote(noteToSend);
            // console.log("\nNote to send: ", noteToSend);
        }
        catch {
            setError(`Error when creating note`);
        }
    }

    function handleChange(evt) {
        setNewNote(
            { [evt.target.name]: evt.target.value }
        )
    }

    return (
        <div className="new-note-form">

            <div className="form-container">
                < form autoComplete="off" onSubmit={handleSubmit} >
                    <label for="text">Text</label>
                    <input type="text" name="text" value={newNote.text} onChange={handleChange} autocomplete="off" required />

                    <button type="submit">Submit</button>
                </form >
            </div >
            <p className="error-message">&nbsp;{error}</p>

        </div>
    );
}
