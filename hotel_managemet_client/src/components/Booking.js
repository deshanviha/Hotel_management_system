import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';
import './booking.css'
import Select from "./SelectOption"
import Textfield from "./Textfield";

function Booking() {
    return (
        <Container>
            <div className="booking">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Select text='Hotel' spec='Select our relevant hotel' drop1='Colombo' drop2='Galle' drop3='Kandy' drop4='' drop5='' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Select text = 'Adults' spec='Number Of adults' drop1='1' drop2='2' drop3='3' drop4='4' drop5='6'/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Textfield text='Rooms' spec='Number Of Rooms' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Get In</Form.Label>
                        <DateRangePickerComponent/>
                    </Form.Group>
                </Row>
            </Form>
            </div>
        </Container>
    );
}

export default Booking;