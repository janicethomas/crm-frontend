import React from 'react'
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
    return (
        <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
            <Navbar.Brand>
                <img alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link>Dashboard</Nav.Link>
                    <Nav.Link>Tickets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}