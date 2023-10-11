import React from "react";
import Navbar from "./Navbar";

function Header()
{
    return(
        <div id="main">
            <Navbar />
            <div className="name">
                <h1>it's a <span>ReactJS</span>Website</h1>
                <p className="details">Done by <span>Venkat sai</span></p>
                <div className="header-btns">
                    <a href="#" className="cv-btn">Hire Me</a>
                    <a href="#" className="cv-btn1">Download App</a>

                </div>
            </div>
            <div className="arrow"></div>
        </div>
    );
};
export default Header