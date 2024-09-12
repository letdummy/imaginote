import React from 'react';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };
    }

    // Add a new note with the given title and body
    onAddHandler = (title, body) => {
        const newNote = {
            id: Date.now(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
            pinned: false,
        };

        this.setState((prevState) => ({
            notes: [...prevState.notes, newNote],
        }));
    }

    // delete note by id
    onDeleteHandler = (id) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <>
                <NoteHeader />
                <NoteInput onAddHandler={this.onAddHandler} />
                <NoteSearch notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </>
        );
    }
}

export default NoteApp; 