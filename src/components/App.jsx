import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    // Create a array for notes
    const [notes , setNotes] = useState([]);

    // Add note to the array
    const addItem = (note) => {
        setNotes(prevValue => [...prevValue , note]);
    }

    // Delete a note from the array
    const deleteItem = (id) => {
        setNotes(prevValue => prevValue.filter((item , index) => index !== id))
    }

    return (
        <div>
            <Header />
            <Footer />
            <CreateArea
            addNote = {addItem} 
            />
            {notes.map((note , index) => (
                <Note key = {index} id = {index} title = {note.title} content = {note.content} deleteNote = {deleteItem} />
            ))}
        </div>
    )
}

export default App;