import React from "react";
import "./ResumeTemplate1.css"

const ResumeTemplate1 = () => {
  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};

  return (
    <div className="resume-wrapper">
      <h1>{profile.name}</h1>
      <p>{profile.email} | {profile.phone}</p>

      <h2>Experience</h2>
      {profile.experiences?.map((exp, index) => (
        <div key={index}>
          <p><strong>{exp.company}</strong> - {exp.role} ({exp.year})</p>
        </div>
      ))}

      <h2>Education</h2>
      {profile.education?.map((edu, index) => (
        <div key={index}>
          <p><strong>{edu.institution}</strong> - {edu.degree} ({edu.year})</p>
        </div>
      ))}
      
      <h2>Projects</h2>
      {profile.projects?.map((proj, index) => (
        <div key={index}>
          <p><strong>{proj.name}</strong>: {proj.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplate1;
