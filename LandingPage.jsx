import React, { useState } from "react";
import "./styles.css";
import logo from "./assets/Digital You logo.jpeg.jpg";
import logo1 from "./assets/Digital You BG.png";
import vdo from "./assets/WC vdo.mp4";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const dynamicContent = {
    brandName: "Digital You",
    tagline: "Your gateway to a powerful digital presence.",
    description: "At Digital You, we believe in crafting a strong digital identity that reflects your business values and aspirations. Whether you're a startup, a growing business, or an established enterprise, we offer tailored solutions to enhance your online presence.From stunning website designs to advanced SEO strategies and social media management, we bring creativity and technical expertise to the forefront. Let us help you navigate the digital world with confidence and success.",
    navLinks: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Why Digital You", href: "#why" },
        { label: "Contact", href: "#contact" }
    ],
    services: [
        {
            title: "Profile Optimization",
            description: "Enhance and optimize your social media and professional profiles with engaging content, strategic keywords, and a polished visual appeal to boost visibility and credibility."
        },
        {
            title: "Portfolio Management",
            description: "Showcase your work, achievements, and testimonials effectively with a well-structured and visually appealing portfolio, tailored to attract potential clients and employers."
        },
        {
            title: "Reputation Management",
            description: "Monitor, maintain, and improve your online image by managing reviews, social media presence, and search results to ensure a positive digital footprint."
        },
        {
            title: "SEO for Personal Branding",
            description: "Optimize your online presence with targeted SEO strategies, ensuring higher search rankings and better discoverability across platforms."
        },
        {
            title: "Custom Website or Blog",
            description: "Design, develop, and manage your personal website or blog with a user-friendly layout, responsive design, and engaging content to establish your digital identity."
        }
    ],
    whyChooseUs: [
        {
            title: "Customizable",
            description: "Tailor every aspect of your branding dashboard to align perfectly with your personal or business identity."
        },
        {
            title: "Interactive",
            description: "Engage with your brand dynamically through an intuitive and user-friendly interface designed for seamless interaction."
        },
        {
            title: "Analytics",
            description: "Gain real-time insights into your digital performance, track engagement metrics, and make data-driven improvements effortlessly."
        },
        {
            title: "User-Friendly",
            description: "No technical expertise needed! Our platform ensures a smooth and hassle-free experience for users of all levels."
        },
        {
            title: "Support",
            description: "Get dedicated assistance anytime, with expert support available to guide you through every step of your digital branding journey."
        },
        {
            title: "Innovative",
            description: "Stay ahead with cutting-edge features and the latest industry trends, ensuring your online presence remains impactful and relevant."
        }
    ],
    aboutUs: [
        "We help you enhance your digital presence with our innovative solutions.",
        "At Digital You, our mission is to empower businesses with top-tier digital strategies that elevate their online identity.",
        "Our team of experts specializes in designing intuitive websites, implementing SEO techniques to boost visibility, and managing social media platforms effectively.",
        "We understand the ever-evolving digital landscape and work tirelessly to ensure you stay ahead of the competition.",
        "With a passion for innovation and excellence, we bring a wealth of experience and creativity to every project."
    ]
};

const ServiceCard = ({ title, description }) => (
    <div className="service-card">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const LandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container">
            <nav className="navbar" id="home">
                <div className="logo">
                    <img src={logo1} alt={`${dynamicContent.brandName} Logo`} />
                </div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {dynamicContent.navLinks.map((link, index) => (
                        <li key={index}><a href={link.href}>{link.label}</a></li>
                    ))}
                </ul>
            </nav>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>{dynamicContent.brandName}</h1>
                        <p>{dynamicContent.tagline}</p>
                        <p>{dynamicContent.description}</p>
                    </div>
                    <div className="hero-image">
                        <img src={logo} alt={`${dynamicContent.brandName} Logo`} />
                    </div>
                </div>
            </section>
            <section id="about" className="aboutsection">
                <video autoPlay loop muted playsInline>
                    <source src={vdo} type="video/mp4" />
                </video>
                <div className="aboutContent">
                    <h1>About Us</h1>
                    {dynamicContent.aboutUs.map((paragraph, index) => (
                        <p key={index}>&#10148; {paragraph}</p>
                    ))}
                </div>
            </section>
            <div className="scrolling-container">
                <div className="scrolling-text">
                    <strong>* Track Your Brand Like a Pro! * Insights That Make You Shine! *</strong>
                </div>
            </div>
            <section id="services" className="section">
                <h1>Our Services</h1>
                <div className="services">
                    {dynamicContent.services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </section>
            <section id="why">
                <div className="WhyChooseUs">
                    <div className="head">
                        <h1>Why Digital You</h1>
                    </div>
                    <div className="content">
                        {dynamicContent.whyChooseUs.map((item, index) => (
                            <div key={index} style={{ margin: "15px", padding: "15px", borderRadius: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", background: "white" }}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
                <div className="social-media-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                </div>
            </section>
            <footer className="footer">
                &copy; {new Date().getFullYear()} {dynamicContent.brandName}. All Rights Reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
