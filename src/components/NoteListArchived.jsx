/* eslint-disable react/prop-types */
import NoteListHeader from './NoteListHeader';
import NoteItem from './NoteItem';
import NoteListEmpty from './NoteListEmpty';

function NoteListArchived({ notes, onDelete, onArchive, onUnarchive }) {
    return (
        <>
            <NoteListHeader title="Archived Notes" subtitle="Looking for something archived??" />
            {notes.length === 0 ? (
                <NoteListEmpty text="No notes are archived." />
            ) : (
            <div className="notes-list">
                {notes.map((note) => (
                    <NoteItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} />
                ))}
            </div>
            )}
        </>

    );
}

export default NoteListArchived;