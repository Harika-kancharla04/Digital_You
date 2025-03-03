import "./Login.css";
import logo from "../../assets/Digital You BG.jpeg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (isSignup) {
            const existingUser = localStorage.getItem(formData.username);
            if (existingUser) {
                setError("Username already exists!");
                return;
            }

   
            localStorage.setItem(
                formData.username,
                JSON.stringify({ password: formData.password })
            );

            alert("Signup successful! Please login.");
            setIsSignup(false); 
        } else {

            const storedUser = localStorage.getItem(formData.username);
            if (!storedUser) {
                setError("User not found! Please sign up first.");
                return;
            }

            const userData = JSON.parse(storedUser);
            if (userData.password !== formData.password) {
                setError("Incorrect password! Please try again.");
                return;
            }

            alert("Login successful!");
            navigate("/dashboard");
        }
    };

    //Guest Login
    const handleGuestLogin = () => {
        alert("Guest Login Successful!");
        navigate("/dashboard"); 
    };

    return (
        <div className="maindiv">
            <div className="logo">
                <img src={logo} alt="Digital You Logo" />
            </div>
            <form className="loginform" onSubmit={handleSubmit}>
                <h2>{isSignup ? "Sign Up" : "Login"}</h2>

                {error && <p className="error">{error}</p>}

                <input type="text" name="username" placeholder="Enter your username" value={formData.username}
                    onChange={handleChange} required/>

                <input type="password" name="password" placeholder="Enter password" value={formData.password}
                    onChange={handleChange} required/>

                <button type="submit">{isSignup ? "Sign Up" : "Login"}</button><br />

                <button type="button" className="guest-btn" onClick={handleGuestLogin}>
                    Continue as Guest
                </button>

                <p onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
                </p>
            </form>
        </div>
    );
};

export default Login;
