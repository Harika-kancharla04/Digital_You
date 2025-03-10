import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import LandingPage from "./LandingPage";
import Navbar from "./Components/Navbar/Navbar"; // Import the Navbar
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import Home from "./Components/Dashboard/Home";
import NotFound from "./NotFound";
import Resume from "./Components/Resume/Resume";


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
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile/>}/>
                {/* <Route path="/settings" element={<Settings/>}/> */}
                <Route path="*" element={<NotFound/>}/>
                <Route path="/resume" element={<Resume />} /> 
            </Routes>
        </>
    );
}

export default App;
