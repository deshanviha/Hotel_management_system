import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import vacation from '../images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg';
import './main.css';
import Signup from './SignIn'
import {Button, Col, Container, Row} from "react-bootstrap";
import SignIn from "./SignIn";

function Main() {
    const myStyle = {
        width: '100%',
        height: '700px',
    };
    return (


        <div className="shoe-container">

            <Container>
                <Row>
                    <Col>
                <div className="signing">
                    <SignIn/>
                </div>
                    </Col>
                </Row>

            </Container>




                <figure className="position-relative">
                    {/*<img src={vacation} alt="" style={myStyle}/>*/}
                    <div className="book">
                        <Button variant="danger" size="lg">BOOK NOW</Button>{}
                    </div>
                </figure>





        </div>
    )

}

export default Main