/* eslint-disable react/prop-types */

import NoteContent from './NoteItemContent';
import NoteActions from './NoteItemAction';

function NoteItem({ note, onDelete }) {

    return (
        <div className="note-item" >
            <NoteContent note={note} />
            <NoteActions
                note={note}
                onDelete={onDelete}
            />
        </div>
    );
}

export default NoteItem;