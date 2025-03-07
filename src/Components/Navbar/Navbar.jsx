import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import "./Navbar.css"; 

const Navbar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h2>Digital You</h2>
            </div>
            <nav className="sidebar-links">
                <NavLink to="/dashboard" className="sidebar-item" activeClassName="active">
                    <FaHome className="icon" /> Dashboard
                </NavLink>
                <NavLink to="/profile" className="sidebar-item" activeClassName="active">
                    <FaUser className="icon" /> Profile
                </NavLink>
                <NavLink to="/settings" className="sidebar-item" activeClassName="active">
                    <FaCog className="icon" /> Settings
                </NavLink>
            </nav>
            <div className="logout">
                <NavLink to="/" className="sidebar-item">
                    <FaSignOutAlt className="icon" /> Logout
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
