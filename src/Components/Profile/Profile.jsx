import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaUpload, FaLock, FaPlus, FaTrash } from "react-icons/fa";
import "./Profile.css";


const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "John",
        bio: "Brand Strategist | Content Creator",
        email: "john@example.com",
        socialLinks: {
            linkedin: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            instagram: "https://instagram.com/johndoe"
        },
        skills: ["Branding", "Content Creation", "SEO", "Marketing"],
        certifications: ["Certified Digital Marketer", "SEO Expert"],
        projects: [
            { title: "Personal Branding Website", description: "Developed a complete branding website." },
            { title: "SEO Optimization", description: "Increased organic traffic by 50%." }
        ]
    });
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
    
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            setUser(editedUser);
        }
    };

    const handleChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const addSkill = () => {
        setEditedUser({ ...editedUser, skills: [...editedUser.skills, "New Skill"] });
    };

    const removeSkill = (index) => {
        const updatedSkills = editedUser.skills.filter((_, i) => i !== index);
        setEditedUser({ ...editedUser, skills: updatedSkills });
    };

    const addProject = () => {
        setEditedUser({
            ...editedUser,
            projects: [...editedUser.projects, { title: "New Project", description: "Project Description" }]
        });
    };

    const removeProject = (index) => {
        const updatedProjects = editedUser.projects.filter((_, i) => i !== index);
        setEditedUser({ ...editedUser, projects: updatedProjects });
    };

    return (
        <div className="profile-container">
            <h1 className="profile-title">Profile</h1>
            <div className="profile-card">
                <img src={profileImage} alt="Profile" className="profile-pic" />
                <label className="upload-btn">
                    <FaUpload /> Upload
                    <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
                </label>
                {isEditing ? (
                    <input type="text" name="name" value={editedUser.name} onChange={handleChange} className="input-field" />
                ) : (
                    <h2 className="profile-name">{user.name}</h2>
                )}
                {isEditing ? (
                    <textarea name="bio" value={editedUser.bio} onChange={handleChange} className="bio-field" />
                ) : (
                    <p className="profile-bio">{user.bio}</p>
                )}
                <p className="profile-email">Email: {user.email}</p>
                <div className="social-links">
                    <a href={user.socialLinks.linkedin} target="_blank" className="social-link">LinkedIn</a>
                    <a href={user.socialLinks.twitter} target="_blank" className="social-link">Twitter</a>
                    <a href={user.socialLinks.instagram} target="_blank" className="social-link">Instagram</a>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title">Skills</h2>
                <ul className="skills-list">
                    {editedUser.skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            {skill} {isEditing && <FaTrash onClick={() => removeSkill(index)} />}
                        </li>
                    ))}
                </ul>
                {isEditing && <button className="add-skill-btn" onClick={addSkill}><FaPlus /> Add Skill</button>}
            </div>

            <div className="projects-section">
                <h2 className="section-title">Projects</h2>
                <ul className="projects-list">
                    {editedUser.projects.map((project, index) => (
                        <li key={index} className="project-item">
                            <h4 className="project-title">{project.title}</h4>
                            <p className="project-desc">{project.description}</p>
                            {isEditing && <FaTrash onClick={() => removeProject(index)} />}
                        </li>
                    ))}
                </ul>
                {isEditing && <button className="add-project-btn" onClick={addProject}><FaPlus /> Add Project</button>}
            </div>

            <div className="profile-buttons">
                <button className="edit-btn" onClick={handleEditToggle}><FaEdit /> {isEditing ? "Save" : "Edit Profile"}</button>
                <button className="settings-btn" onClick={() => navigate("/settings")}><FaLock /> Account Settings</button>
            </div>
        </div>
    );
};

export default Profile;