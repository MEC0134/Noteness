import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App() {

    const intialColors = ["#00b4eb", "#e05a00"];

    const [notesArr, setNotesArr] = useState([]);
    const [showGuide, setShowGuide] = useState(true);
    const [backgroundColors, setBackgroundColors] = useState(intialColors);


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


    function handleBackGroundColor() {
        if (backgroundColors[0] === intialColors[0]) {
            setBackgroundColors(["#526D82", "#27374D"]);
        } else {
            setBackgroundColors(intialColors);
        }
    }

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColors[0];
    }, [backgroundColors]);

    function closeGuide() {
        setShowGuide(false);
    }

    setTimeout(closeGuide, 9000);


    return (

        <div>

            <Header
                onColorChange={handleBackGroundColor}
                background={backgroundColors[1]}
            />
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

            {showGuide && (
                <div className="guide-card">
                    <h2>Simple Guide</h2>
                    <ul>
                        <li>Note taking is very intuitive and easy to understand.</li>
                        <li>Click on brand icon for color change.</li>
                    </ul>
                </div>
            )}


            <Footer />
        </div>
    )
}



export default App;