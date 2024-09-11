/* eslint-disable react/prop-types */

function NoteActions({ note, onDelete }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default NoteActions;