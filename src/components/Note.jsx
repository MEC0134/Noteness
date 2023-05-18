import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {

    return (
        <div className="note-card">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => { // trigger delete function
                props.onDelete(props.id);
            }}>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            </button>
        </div>
    )
}



export default Note;