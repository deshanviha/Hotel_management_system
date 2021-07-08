import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import vacation from '../images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg';

function Main(){
    const myStyle = {
        width: '100%',
        height: '700px',
    };
    return(
        <div className="shoe-container">
            <img src={vacation} alt="" style={myStyle} />
        </div>
    )

}
export default Main