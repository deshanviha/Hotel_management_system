import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form} from "react-bootstrap";
import './signIn.css'

function SignIn() {
    return (
        <Container>
            <div className="col-md-5">
                <div className="col-md-10 col-md-offset-1">
                    <div className="section-title">
                        <Form className="signIN">
                            <Form.Group className="col-mb-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                        </Form>

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default SignIn;