import React from "react";
import featureimage from "../images/Frame 19.png";
function Features() {
    return(
    <div id ="features">
        <div id="features-model">
            <img src={featureimage} alt="img" />
        </div>
        <div className="features-text">
            <h2>
                Features
            </h2>
            <h3>This is something about<span>react</span></h3>
            <p>anything......</p>
            <button>viewmore</button>
        </div>
    </div>
        
    );
}
export default Features;