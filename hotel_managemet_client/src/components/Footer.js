import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import {SocialIcon} from 'react-social-icons';
import {Col, Row} from "react-bootstrap";


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
                        <li><SocialIcon url="https://linkedin.com/in/jaketrent"/></li>
                        <li><SocialIcon url="https://facebook.com"/></li>
                        <li><SocialIcon url="https://twitter.com"/></li>
                    </ul>
                </div></Col>
            </Row>
            </div>
);
}

export default Footer;