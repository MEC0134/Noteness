import React from "react";



function Note(props) {

    return (
        <div className="noteCard">
            <h1 contentEditable="true">{props.title}</h1>
            <p contentEditable="true">{props.content}</p>
            <button>Remove</button>
        </div>
    )
}




export default Note;