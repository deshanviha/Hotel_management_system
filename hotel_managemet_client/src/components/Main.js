import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import vacation from '../images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg';
import './main.css';
import Signup from './SIgnUp'

import {Button} from "react-bootstrap";
function Main(){
    const myStyle = {
        width: '100%',
        height: '700px',
    };
    return(




        <div className="shoe-container">
            <container>
                <figure className="position-relative">
            <img src={vacation} alt="" style={myStyle} />
                <figcaption>

                    Start Your Day Here

                </figcaption>
                    <div className="book">
                        <Button variant="danger" size="lg">BOOK NOW</Button>{}
                    </div>
                </figure>
            </container>
        </div>
    )

}
export default Main