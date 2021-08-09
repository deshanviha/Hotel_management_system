import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars';
import './booking.css'
import {TextField} from "@material-ui/core";

function Booking() {
    return (
        <Container>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <TextField id="standard-basic" label="Standard" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Get In</Form.Label>
                        <DateRangePickerComponent/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label> </Form.Label>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    );
}

export default Booking;