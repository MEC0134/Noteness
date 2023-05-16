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
                    title={note.title} 
                    content={note.content} 
                />
             ))}  
                
           
            

            <Footer />
        </div>
    )
}



export default App;