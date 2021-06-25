import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    // Create a state for expansion
    const [isExpanded , setExpand] = useState(false);
    
    // Create a state for input fields
    const [text , setText] = useState({
        title : "",
        content : ""
    });

    // Change the state of isExpanded
    const handleExpand = () => {
        setExpand(true);
    }

    // Update the input fields
    const handleChange = (event) => {
        const {name , value} = event.target;
        setText(prevValue => {
            return {
                ...prevValue , 
                [name] : value
            }
        })
    }

    // Add Item to array
    const handleClick = () => {
        // Pass the text object to App.jsx
        props.addNote(text);

        // Reset the content of input field
        setText({
            title : "",
            content : ""
        })
    }

    return (
        <div>
        <form className = "create-note">
            {isExpanded && <input onChange = {handleChange} value = {text.title} name="title" placeholder="Title" autoComplete = "off"/>}
            <textarea onClick = {handleExpand} onChange = {handleChange} value = {text.content} name="content" placeholder="Take a note..." rows = {isExpanded ? "3" : "1"} autoComplete = "off" />
            <Zoom in = {isExpanded ? true : false} >
                <Fab type = "button" onClick = {handleClick}>
                    <AddIcon />     
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;