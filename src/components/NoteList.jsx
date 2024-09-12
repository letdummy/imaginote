/* eslint-disable react/prop-types */
import NoteListHeader from './NoteListHeader';
import NoteItem from './NoteItem';
import NoteListEmpty from './NoteListEmpty';

function NoteList({ notes, onDelete, onArchive, onUnarchive, onPinned }) {

    const pinnedNotes = notes.filter((note) => note.pinned);
    const noPinnedNotes = notes.filter((note) => !note.pinned);

    return (
        <>
            <NoteListHeader title="Active Notes" subtitle="Looking for something important? Check out your active notes!" />
            {notes.length === 0 ? (
                <NoteListEmpty text="No notes available. Let's add some!" />
            ) : (
            <div className="notes-list">
                {pinnedNotes.map((note) => (
                    <NoteItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} onPinned={onPinned} />
                ))}
                {noPinnedNotes.map((note) => (
                    <NoteItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} onPinned={onPinned} />
                ))}
            </div>
            )}
        </>

    );
}

export default NoteList;