import React from 'react';
import { getInitialData } from '../utils';
import NoteItem from './NoteItem';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };
    }

    onDeleteHandler = (id) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <>
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