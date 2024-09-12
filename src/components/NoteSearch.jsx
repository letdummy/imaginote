/* eslint-disable react/prop-types */
import { useState } from 'react';
import NoteSearchInput from './NoteSearchInput';
import NoteList from "./NoteList";
import NoteListArchived from "./NoteListArchived";

function NoteSearch({ notes, onDelete, onArchive, onUnarchive }) {
    const [searchTerm, setSearchTerm] = useState("");

    // pass a function to the child component to update the search term
    const onSearchHanlder = (searchTerm) => {
        setSearchTerm(searchTerm);
    }

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const unarchivedNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
        <div className="note-app">
            <NoteSearchInput onSearch={onSearchHanlder} />
            <NoteList notes={unarchivedNotes} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
            <NoteListArchived notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
        </div>

    );
}

export default NoteSearch;
