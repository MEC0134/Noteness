import React from "react";
import ArticleIcon from '@mui/icons-material/Article';

function Header() {
    return ( 
        <header>
        
            <h1>
                <ArticleIcon sx={{color: "white"}}/>
                Noteness
            </h1>
        </header>
    )
}


export default Header;