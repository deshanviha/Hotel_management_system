import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
function Contact() {
    return (

<div className="reserve">
        <div className="container">
            <div className="col-md-4">
                <h3>Reservations</h3>
                <div className="contact-item">
                    <p>Please call</p>
                    <p>(887) 654-3210</p>
                </div>
            </div>
            <div className="col-md-4">
                <h3>Address</h3>
                <div className="contact-item">
                    <p>4321 California St,</p>
                    <p>San Francisco, CA 12345</p>
                </div>
            </div>
            <div className="col-md-4">
                <h3>Opening Hours</h3>
                <div className="contact-item">
                    <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
                    <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
                </div>
            </div>
        </div>
</div>
    );
}

export default Contact;