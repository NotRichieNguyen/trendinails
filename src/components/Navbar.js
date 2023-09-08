import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Trendi Nails</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default NavigationBar;
