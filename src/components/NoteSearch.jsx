/* eslint-disable react/prop-types */
import { useState } from 'react';
import NoteSearchInput from './NoteSearchInput';
import NoteList from "./NoteList";

function NoteSearch({ notes, onDelete }) {
    const [searchTerm, setSearchTerm] = useState("");

    // pass a function to the child component to update the search term
    const onSearchHanlder = (searchTerm) => {
        setSearchTerm(searchTerm);
    }

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="note-app">
            <NoteSearchInput onSearch={onSearchHanlder} />
            <NoteList notes={filteredNotes} onDelete={onDelete} />
        </div>
    );
}

export default NoteSearch;
