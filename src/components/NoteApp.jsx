import React from 'react';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

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
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </>
        );
    }
}

export default NoteApp; 