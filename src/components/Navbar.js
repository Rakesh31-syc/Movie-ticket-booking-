import React, { useState } from 'react';
import FullScreenSearch from './FullScreenSearch';
import './Navbar.css';

const Navbar = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const openSearch = () => setSearchOpen(true);
    const closeSearch = () => setSearchOpen(false);

    return (
        <>
            <nav className="navbar">
                {/* Logo */}
                <a href="/" className="navbar-logo">
                    Ticket<span className="text-black">Book</span>ing
                </a>

                {/* Search Bar */}
                <div className="navbar-search">
                    <input 
                        type="text" 
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        onFocus={openSearch} // Open full-screen search on focus
                    />
                </div>

                {/* Right Actions (Location, Sign In, Hamburger Menu) */}
                <div className="navbar-actions">
                    <div className="location-selector">
                        Chennai <i className="fa fa-caret-down"></i>
                    </div>
                    <button className="sign-in-btn">Sign in</button>
                    <div className="hamburger-menu">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </nav>

            {/* Full Screen Search */}
            {searchOpen && <FullScreenSearch closeSearch={closeSearch} />}
        </>
    );
};

export default Navbar;
