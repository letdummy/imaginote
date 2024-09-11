/* eslint-disable react/prop-types */
import { showFormattedDate } from "../utils";

function NoteContent({ note }) {
    return (
        <div className="note-item__content">
            <h2 className="note-item__title">{note.title}</h2>
            <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
            <p className="note-item__body">{note.body}</p>
        </div>
    );
}

export default NoteContent;