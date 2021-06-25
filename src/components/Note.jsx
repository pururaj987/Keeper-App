import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    // Deleting a note
    const handleClick = () => {
        props.deleteNote(props.id);
    }

    return (
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button type = "button" onClick = {handleClick}>
            <DeleteIcon /> 
        </button>
        </div>
    );
}

export default Note;