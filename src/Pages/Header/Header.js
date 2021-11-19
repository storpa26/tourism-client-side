import React from 'react';
import "./Header.css"
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <div className="text-center text-white p-3 my-4">
                <h1>Exploring The World <br /> In Comfort.</h1>
                <p>You do not have the right to remain silent… let us know what it takes to challenge you</p>
            </div>
        </div>
    );
};

export default Header;

