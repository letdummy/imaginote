/* eslint-disable react/prop-types */

function NoteActions({ note, onDelete, onArchive, onUnarchive }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
            {note.archived ? (
                <button className="note-item__unarchive-button" onClick={() => onUnarchive(note.id)}>
                    Unarchive
                </button>
            ) : (
                <button className="note-item__archive-button" onClick={() => onArchive(note.id)}>
                    Archive
                </button>
            )}
        </div>
    );
}

export default NoteActions;