import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import React from 'react';
import useAuth from "../../hooks/useAuth";
import AdminDashBoard from "../Admin/AdminDashBoard/AdminDashBoard";
import UserDashBoard from "../Login/UserDashBoard/UserDashBoard";
import "./NavBar.css"


const NavBar = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="bg-dark">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-white" href="#">Travelopia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        {user?.email &&
                            <div>
                                <div className="mx-2 my-2">
                                    <UserDashBoard></UserDashBoard>
                                </div>
                                <div className="mx-2 my-2">
                                    <AdminDashBoard></AdminDashBoard>
                                </div>
                            </div>

                        }

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
                            <NavLink to="/reviews" style={{
                                textDecoration: "none",
                                color: "white",
                                marginRight: "20px"

                            }}>Reviews</NavLink>
                            <NavLink to="/about" style={{
                                textDecoration: "none",
                                color: "white",
                                marginRight: "20px"

                            }}>About Us</NavLink>



                        </Nav>

                        {
                            user?.email ? <div className="d-flex mx-3 mt-2">
                                <p className="text-white p-1 mx-2">Logged in as</p>
                                <img className="border rounded my-2" src={user.photoURL} alt="" height="30" width="30" />
                                <p className="p-1 fw-bold text-white my-2">{user.displayName}</p>
                            </div> :
                                <p></p>
                        }
                        <div className="d-flex">
                            {user?.email ?
                                <button className="btn btn-success mt-2" onClick={logOut}>Logout</button> :
                                <NavLink to="/login">
                                    <Button variant="btn btn-success">Log in</Button>
                                </NavLink>
                            }

                            {/* <div className="me-4">
                                <NavLink to="/login">
                                    </NavLink>
                            </div> */}

                        </div>

                    </Navbar.Collapse>


                </Container>

            </Navbar>

        </div>
    );
};

export default NavBar;