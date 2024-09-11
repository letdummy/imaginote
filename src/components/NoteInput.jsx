/* eslint-disable react/prop-types */
import { useState } from 'react';

function NoteInput({ onAddHandler }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [limit, setLimit] = useState(50);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleTitleChange = (event) => {
        const value = event.target.value;
        const remainingChars = 50 - value.length;
        setLimit(remainingChars >= 0 ? remainingChars : 0); //idk, but this is very precise
        if (remainingChars >= 0) {
            setTitle(value);
        }
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title === "" || body === "") {
            alert("Please fill out all the fields.");
            return;
        }

        onAddHandler(title, body);

        setIsSubmitted(true);
        setTitle("");
        setBody("");
        setLimit(50);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 2000);
    };

    return (
        <div className="note-app__body">
            <h2>Welcome to Imaginote✨, let&apos;s add some notes</h2>
            <form className="note-input" onSubmit={handleSubmit}>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <label htmlFor="title" className="note-input__title">Title: </label>
                    <label htmlFor="title" className="note-input__title__char-limit">{limit === 0 ? "Title character limit reached" : `${limit} Characters left`}</label>
                </div>

                <input type="text" id="title" value={title} onChange={handleTitleChange} placeholder="What's the title of your note?" />
                <br />

                <div>
                    <label htmlFor="body">Body: </label>
                </div>
                <textarea id="body" value={body} onChange={handleBodyChange} placeholder="What would you like to write in your note?" />
                <br />

                <button
                    type="submit"
                    className={`submit-button ${isSubmitted ? "submitted" : ""}`}
                    disabled={isSubmitted}
                >
                    {isSubmitted ? "Note added successfully!" : "Add Note"}
                </button>
            </form>
        </div>
    );
}

export default NoteInput;
