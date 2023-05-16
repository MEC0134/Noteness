import React from "react";


// Get Current Year and display dynamically 
let year = new Date().getFullYear();


function Footer() {

    return (
        <footer><p>Copright &copy; {year}</p></footer>
    )
}



export default Footer;