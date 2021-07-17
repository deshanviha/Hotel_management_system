import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return (
            <div className="footer">
                <div className="container text-center">
                    <div className="col-md-6">
                        <p>&copy; 2017 Gusto. All rights reserved. Design by <a href="https://www.templatewire.com"
                                                                                rel="nofollow">TemplateWire</a></p>
                    </div>
                    <div className="col-md-6">
                        <div className="social">
                            <ul>
                                <li><SocialIcon url="https://linkedin.com/in/jaketrent"/></li>
                                <li><SocialIcon url="https://facebook.com" /></li>
                                <li><SocialIcon url="https://twitter.com" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Footer;