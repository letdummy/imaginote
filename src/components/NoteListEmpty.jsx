/* eslint-disable react/prop-types */

function NoteListEmpty({text}) {
    return (
        <div className="notes-list__empty-message">
            <p>🍃 {text}</p>
        </div>
    )
}

export default NoteListEmpty;