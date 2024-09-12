/* eslint-disable react/prop-types */
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete} />
            ))}
        </div>
    );
}

export default NoteList;