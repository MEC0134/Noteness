import React from "react";
import CropPortraitIcon from '@mui/icons-material/CropPortrait';

function Header({onColorChange, background}) {
    return (
        <header style={{backgroundColor: background}}>
            <h1>
                <CropPortraitIcon className="header-icon" sx={{ color: "white" }} onClick={onColorChange} />
                Noteness
            </h1>
        </header>
    )
}


export default Header;