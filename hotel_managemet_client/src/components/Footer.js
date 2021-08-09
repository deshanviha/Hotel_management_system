import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import {Col, Row} from "react-bootstrap";
import { FaFacebook} from "react-icons/fa";
import { AiOutlineTwitter,AiOutlineLinkedin } from "react-icons/ai";
import Booking from "./Booking";

function Footer() {
    return (

            <div className="footer">
            <Row>
                <Col><div className="col-md-6">
                    <p>&copy; 2017 Gusto. All rights reserved. Design by <a href="https://www.templatewire.com"
                                                                            rel="nofollow">TemplateWire</a></p>
                </div></Col>
                <Col><div className="social">
                    <ul>
                    <li><FaFacebook size="2em"/></li>
                        <li><AiOutlineTwitter size="2em"/></li>
                        <li> <AiOutlineLinkedin size="2em"/></li>
                    </ul>
                </div></Col>
            </Row>
                {/*<Booking/>*/}
            </div>
);
}

export default Footer;