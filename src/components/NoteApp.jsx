import React from 'react';
import { getInitialData } from '../utils';
import NoteItem from './NoteItem';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };
    }

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

    onDeleteHandler = (id) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <>
                <div className="note-app__header">
                    <h1>Imaginote</h1>
                </div>
                <NoteInput onAddHandler={this.onAddHandler} />
                <div className="notes-list">
                    {this.state.notes.map((note) => (
                        <NoteItem key={note.id} note={note} onDelete={this.onDeleteHandler} />
                    ))}
                </div>
            </>
        );
    }
}

export default NoteApp; 