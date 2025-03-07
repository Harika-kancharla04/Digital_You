import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import LandingPage from "./LandingPage";
import Navbar from "./Components/Navbar/Navbar"; // Import the Navbar
import Profile from "./Components/Profile/Profile";

function App() {
    const location = useLocation(); // Get the current route

    // Hide Navbar on Login and Landing Page
    const hideNavbar = location.pathname === "/login" || location.pathname === "/";

    return (
        <>
            {!hideNavbar && <Navbar />} {/* Show Navbar only where needed */}

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </>
    );
}

export default App;
