/* eslint-disable react/prop-types */
import { useState } from 'react';

function NoteSearchInput({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    // function to handle input change as well as update the search term in the parent component
    const handleInputChange = (text) => {
        setSearchTerm(text);
        onSearch(text);
    }

    return (
        <div className="search-box" >
            <p>Too many notes? no worries</p>
            <input
                type="text"
                placeholder="Search note by title..."
                value={searchTerm}
                onChange={(e) => handleInputChange(e.target.value)}
            />
        </div>
    )
}

export default NoteSearchInput;