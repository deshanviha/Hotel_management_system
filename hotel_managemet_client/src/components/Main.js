import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import vacation from '../images/photo-gallery-desktop-large.jpg';
import './main.css';
import Signup from './SignIn'
import {Button, Col, Container, Row} from "react-bootstrap";
import SignIn from "./SignIn";
import {BsBook} from "react-icons/bs";


function Main() {
    const myStyle = {
        width: '100%',
        height: '550px',
    };
    return (


        <div className="shoe-container">


            <figure className="position-relative">
                <img src={vacation} alt="" style={myStyle}/>
                {/*<div className="book">*/}
                {/*    <Button variant="danger" size="lg"><BsBook/> BOOK NOW</Button>{}*/}
                {/*</div>*/}

                <Container>
                    <Row>
                        <Col>
                            <div className="signing">
                                <SignIn/>
                            </div>
                        </Col>
                    </Row>

                </Container>


            </figure>


        </div>
    )

}

export default Main