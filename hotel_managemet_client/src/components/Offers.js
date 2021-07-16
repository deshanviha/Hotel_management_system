import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import './offers.css';

import special1 from '../images/long-truong-Y5PXVs1LpY4-unsplash.jpg';
import special2 from '../images/emerson-vieira-_aR4l6fj6wQ-unsplash.jpg';
import special3 from '../images/pablo-merchan-montes-wYOPqmtDD0w-unsplash.jpg';




function Offers() {

    const picSize={

        width: '100%',
        height: '700px',

    }
    return (
        <Carousel>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={special1} style={picSize}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>Saturday Night Party</h2>
                    <p>Enjoy your party with your friends.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={special3} style={picSize}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>Family Parties</h2>
                    <p>We arrange separate room for reasonable price for your requirements.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={special2} style={picSize}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>BBQ Night</h2>
                    <p>We provide BBQ in separate for families or set of peoples</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Offers;