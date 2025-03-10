import React from "react";
import './ResumeTemplate2.css'

const ResumeTemplate2 = () => {
  const profile = JSON.parse(localStorage.getItem("userProfile")) || {};

  return (
    <div className="resume-wrapper">
      <div className="resume-header">
        <h1>{profile.name}</h1>
        <p>{profile.email} | {profile.phone}</p>
      </div>

      <div className="resume-content">
        <div className="left-column">
          <h2>Experience</h2>
          {profile.experience?.map((exp, index) => (
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
        </div>

        <div className="right-column">
          <h2>Projects</h2>
          {profile.projects?.map((proj, index) => (
            <div key={index}>
              <p><strong>{proj.name}</strong>: {proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate2;
