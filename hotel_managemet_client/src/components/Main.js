import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import vacation from '../images/vacation-2302009_1280.jpg';

const style = {
    maxWidth:'100%'

};

function Main(){
    const myStyle={
        width:'100%',
        height:'500px',
    };


    return(


        <div className="shoe-container">
            <img src={vacation} alt="" style={myStyle} />
        </div>


    )



}

export default Main