import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';





function CreateNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [formErrors, setFormErrors] = useState({
        title: false,
        content: false
      });

    const [showForm, setShowForm] = useState({
        numberOfRows: 1,
        zoomIn: false, 
        inpPlaceHold: "Take a note...", 
        hidden: true
    });

    // Function to show full form on click
    function showFullForm() {
        setShowForm({
            numberOfRows: 3, 
            zoomIn: true,
            inpPlaceHold: "Title", 
            hidden: false
        });
    }

    function handleInputs(event) {
        const {name, value} = event.target;
        setNote({ ...note, [name]: value  });
    }       

    // handle submission
    function handleSubmit(event) {
        event.preventDefault();
        const {title, content} = note;

        // Input Validation
        if(title.trim() === '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                title: true
            }));
        } else if(content.trim() === '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                content: true
            }));
        } else {
            props.onAddNote(note);
            setNote({title: "", content: ""});
            setFormErrors({title: "", content: ""});
        }
    }


    return (
        <div>
            <form className="create-note">
                <input 
                    name="title" 
                    placeholder={showForm.inpPlaceHold}
                    type="text" 
                    value={note.title}
                    onChange={handleInputs}
                    onClick={showFullForm}
                />
                {formErrors.title && <span className="error">Please enter a title!</span>}
                <textarea 
                    name="content" 
                    placeholder="What on your mind?" 
                    rows={showForm.numberOfRows} 
                    value={note.content} 
                    onChange={handleInputs}
                    hidden={showForm.hidden}
                />
                {formErrors.content && (<span className="error">Please enter content!</span>)}
                <Zoom in={showForm.zoomIn} timeout={{enter: 1000}}>
                    <Fab color="primary" aria-label="add" onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )

}


export default CreateNote;