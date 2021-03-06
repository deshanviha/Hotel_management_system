import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button, NavItem} from "react-bootstrap";
import './navbar.css'


function NavBarar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Hotel Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav className="tab" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">SPECIAL</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about' eventKey="link-2">ABOUT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">MENU</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">CHEF</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">CONTACT</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Button variant="outline-success">Sign UP</Button>

            </Navbar.Collapse>
        </Navbar>
    )

}

export default NavBarar;