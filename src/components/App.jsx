import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


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