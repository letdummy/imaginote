/* eslint-disable react/prop-types */
import NoteListHeader from './NoteListHeader';
import NoteItem from './NoteItem';
import NoteListEmpty from './NoteListEmpty';

function NoteList({ notes, onDelete }) {
    return (
        <>
            <NoteListHeader title="Active Notes" />
            {notes.length === 0 ? (
                <NoteListEmpty text="No notes available. Let's add some!" />
            ) : (
            <div className="notes-list">
                {notes.map((note) => (
                    <NoteItem key={note.id} note={note} onDelete={onDelete} />
                ))}
            </div>
            )}
        </>

    );
}

export default NoteList;