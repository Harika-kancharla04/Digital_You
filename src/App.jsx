import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";
// import Settings from "./Components/Settings/Settings";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import "./App.css";

function App() {
    return (

        <Login/>
        // <div className="app-container">
        //     {/* Sidebar on the left */}
        //     <Navbar />

        //     {/* Main content on the right */}
        //     <div className="main-content">
        //         <Routes>
        //             {/* <Route path="/" element={<Login />} /> */}
        //             <Route path="/" element={<Dashboard />} />
        //             <Route path="/profile" element={<Profile />} />
        //             <Route path="/settings" element={<Settings />} />
        //         </Routes>
        //     </div>
        // </div>
    );
}

export default App;