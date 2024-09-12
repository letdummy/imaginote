/* eslint-disable react/prop-types */
import { useState } from 'react';
import pinNoFill from '../assets/pin-nofill.svg';
import pinFill from '../assets/pin-fill.svg';

function NoteItemPin({ note, onPinned }) {

    const [isPinned, setIsPinned] = useState(note.pinned);
    const handlePinToggle = () => {
        setIsPinned(!isPinned);
        onPinned(note.id);
    };

    return (
        <img
            src={isPinned ? pinFill : pinNoFill}
            alt="Pin"
            className="pin-icon"
            onClick={handlePinToggle}
        />
    );
}

export default NoteItemPin;