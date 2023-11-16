import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import logo from '../../assets/img/Logo.png';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => {
    return (
        <Navbar collapseOnSelect bg="danger" variant="dark" expand="md">
            <Navbar.Brand className='px-3'>
                <img src={logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <LinkContainer to="/dashboard">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/tickets">
                        <Nav.Link>Tickets</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/users">
                        <Nav.Link>Users</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <Nav.Link>Logout</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};