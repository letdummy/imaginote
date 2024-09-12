/* eslint-disable react/prop-types */

import NoteContent from './NoteItemContent';
import NoteActions from './NoteItemAction';

function NoteItem({ note, onDelete, onArchive, onUnarchive }) {

    return (
        <div className="note-item" >
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