import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import Profile from "../Profile/Profile";
import "./Home.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div className={`home-container ${darkMode ? "dark" : ""}`}>
            <main className="home-content">
                <header className="home-header">
                    <h1>Personal Branding Dashboard</h1>
                    <p>Manage and showcase your personal brand effectively.</p>
                    <div className="theme-icon" onClick={toggleTheme}>
                        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </div>
                </header>
                <div className="profile-summary">
                    <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
                    <h2>John Doe</h2>
                    <p>Brand Strategist | Content Creator</p>
                </div>
                <div className="branding-metrics">
                    <div className="metric-card">
                        <h3>Followers</h3>
                        <p>10,250</p>
                    </div>
                    <div className="metric-card">
                        <h3>Projects Completed</h3>
                        <p>24</p>
                    </div>
                    <div className="metric-card">
                        <h3>Engagement Rate</h3>
                        <p>87%</p>
                    </div>
                </div>
                <div className="home-buttons">
                    <button onClick={() => navigate("/dashboard")} className="btn">Go to Dashboard</button>
                    <button onClick={() => navigate("/login")} className="btn">Login</button>
                </div>
            </main>
        </div>
    );
};




export default Dashboard;


