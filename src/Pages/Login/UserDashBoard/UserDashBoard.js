import React from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UserDashBoard = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Dashboard">
                <div className="d-flex flex-column">
                    {user && <div className="d-flex my-1 flex-column"> <Dropdown.ItemText className="fw-bold text-danger">User</Dropdown.ItemText>
                        <NavLink className="nav-items my-2" to="/myorders" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>My Orders</NavLink>
                        <NavLink className="nav-items my-2" to="/seeallorders" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>Manage All Orders</NavLink>
                        <NavLink className="nav-items my-2" to="/addservice" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}>Add Service</NavLink>
                    </div>}
                    <Button onClick={logOut} className="mx-3 my-2" variant="outline-danger">Logout</Button>
                </div>
            </DropdownButton>
        </>
    );
};

export default UserDashBoard;