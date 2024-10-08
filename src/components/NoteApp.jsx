import React from 'react';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';
import NoteFooter from './NoteFooter';

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

    // pin/unpin note by id
    onPinnedHandler = (id) => {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, pinned: !note.pinned };
            }
            return note;
        });
        this.setState({ notes });
    }

    // delete note by id
    onDeleteHandler = (id) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    // archive note by id
    onArchiveHandler = (id) => {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: true };
            }
            return note;
        });
        this.setState({ notes });
    }

    // unarchive note by id
    onUnarchiveHandler = (id) => {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: false };
            }
            return note;
        });
        this.setState({ notes });
    }

    render() {
        return (
            <>
                <NoteHeader />
                <NoteInput onAddHandler={this.onAddHandler} />
                <NoteSearch notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnarchive={this.onUnarchiveHandler} onPinned={this.onPinnedHandler} />
                <NoteFooter />
            </>
        );
    }
}

export default NoteApp; 