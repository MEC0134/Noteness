import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/



function App() {

    const [notesArr, setNotesArr] = useState([]);

    function handleAddNotes(newNote) {
        setNotesArr(prevValue => [...prevValue, newNote]);
    }

    function handleDelete(id) {
        setNotesArr((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (

        <div>

            <Header />
            <CreateNote
                onAddNote={handleAddNotes}
             />
             {/* Map the notes */}
             {notesArr.map((note, index) => (
                <Note 
                    key={index} 
                    id={index}
                    title={note.title} 
                    content={note.content} 
                    onDelete={handleDelete}
                />
             ))}  
                
           
            

            <Footer />
        </div>
    )
}



export default App;