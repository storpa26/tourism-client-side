import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-white" href="#">Travelopia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" style={{
                                textDecoration: "none",
                                color: "white",
                                marginRight: "20px"
                            }}>Home</NavLink>
                            <NavLink to="/services" style={{
                                textDecoration: "none",
                                color: "white",
                                marginRight: "20px"

                            }}>Services</NavLink>
                            <NavLink to="/book" style={{
                                textDecoration: "none",
                                color: "white",
                                marginRight: "20px"

                            }}>Book</NavLink>
                        </Nav>
                        <div className="d-flex">
                            <div className="me-4">
                                <NavLink to="/login">
                                    <Button variant="outline-success">Log in</Button></NavLink>
                            </div>

                        </div>

                    </Navbar.Collapse>


                </Container>

            </Navbar>
            <div className="text-center text-white p-3 my-4">
                <h1>Exploring The World <br /> In Comfort.</h1>
                <p>You do not have the right to remain silent… let us know what it takes to challenge you</p>
            </div>
        </div>
    );
};

export default Header;

