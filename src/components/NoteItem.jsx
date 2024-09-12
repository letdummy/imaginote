/* eslint-disable react/prop-types */

import NoteItemPin from './NoteItemPin';
import NoteContent from './NoteItemContent';
import NoteActions from './NoteItemAction';

function NoteItem({ note, onDelete, onArchive, onUnarchive, onPinned }) {

    return (
        <div className="note-item" >
            <NoteItemPin note={note} onPinned={onPinned} />
            <NoteContent note={note} />
            <NoteActions
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                onUnarchive={onUnarchive}
            />
        </div>
    );
}

export default NoteItem;