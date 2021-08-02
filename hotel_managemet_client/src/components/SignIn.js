import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form} from "react-bootstrap";
import './signIn.css';
import { FaUserAlt,FaUserCircle,FaFacebook,FaApple} from "react-icons/fa";
import { FcGoogle} from "react-icons/fc";
function SignIn() {
    return (
        <Form className="login-form">
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
            <br/>
            <hr/>
            <FaFacebook size="2em"/>
            <FcGoogle size="2em"/>
            <FaApple size="2em"/>


        </Form>
    );
}
export default SignIn;