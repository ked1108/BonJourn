import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-brand">📝 Bon<i>Journ</i></div>

            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </button>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <NavLink to="/" end onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/tasks" onClick={() => setIsOpen(false)}>
                    Tasks
                </NavLink>
                <NavLink to="/journal" onClick={() => setIsOpen(false)}>
                    Journal
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
