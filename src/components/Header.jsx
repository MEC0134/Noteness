import React from "react";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';

function Header() {
    return ( 
        <header>
        
            <h1>
                <CropPortraitIcon sx={{color: "white"}}/>
                Noteness
            </h1>
        </header>
    )
}


export default Header;