/* eslint-disable react/prop-types */

function NoteListHeader({ title, subtitle }) {
    return (
        <div className="note-section__title">
            <h1>{title}</h1>
            <br />
            <p>{subtitle}</p>
        </div>
    );
}

export default NoteListHeader;