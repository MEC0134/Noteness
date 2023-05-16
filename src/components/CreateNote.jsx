import React, { useState } from "react";


//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/




function CreateNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleInputs(event) {
        const {name, value} = event.target;
        setNote({ ...note, [name]: value  });
    }       


    return (
        <div>
            <form>
                <input 
                    name="title" 
                    placeholder="Title"
                    type="text" 
                    value={note.title}
                    onChange={handleInputs}
                />
                <textarea 
                    name="content" 
                    placeholder="What on your mind?" 
                    rows="4" 
                    value={note.content} 
                    onChange={handleInputs}    
                />
                <button onClick={(event) => {
                    event.preventDefault();
                    props.onAddNote(note);
                    setNote({title: "", content: ""});
                }} >
                Add
                </button>
            </form>
        </div>
    )

}






export default CreateNote;