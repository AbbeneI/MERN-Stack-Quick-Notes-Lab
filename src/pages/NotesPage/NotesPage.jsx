import React, { useState, useEffect } from 'react';
import Note from '../../../models/note.js'; // Path to the file where you defined your schema
import { createNote } from "../../utilities/notes-service";

export default function NotesPage() {

    const [note, setNote] = useState([]);

    useEffect(() => {
        // Fetch the data when the component mounts
        Note.find()
            .then((result) => {
                setNote(result);
            })
            .catch((error) => {
                console.error('Error retrieving data', error);
            });
    }, []);

    return (
        <>
            <h1>Notes Page</h1>
            <div className="notes-container">
                <NotesList />
            </div>
        </>
    );
}