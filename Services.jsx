import React from "react";
import Box from "./Box";
import image1 from "../images/s1.png";
import image2 from "../images/s2.png";

function Services()
{
    return(
        <div id="services">
            <div className="s-heading">
                <h1>abc</h1>
                <p>dshbvifihvbiuethbiguthitevuthg</p>
            </div>
            <div className="b-container">
                <Box image={image1} alte="image1" button="Python" / >
                <Box image={image2} alte="image2" button="Java" / >
                    


            </div>


        </div>
    );
}
export default Services;