// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import { Clock, Calendar, Award, Activity, Github, Linkedin, Twitter } from 'lucide-react';
// import { defaultProfile } from '../Profile/ProfileData';
// import './Home.css';

// const Dashboard = () => {
//   const [profile, setProfile] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [stats, setStats] = useState(null);
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     // Load profile data
//     const savedProfile = localStorage.getItem('userProfile');
//     if (savedProfile) {
//       const parsedProfile = JSON.parse(savedProfile);
//       setProfile(parsedProfile);
      
//       // Generate stats
//       setStats({
//         skillCount: parsedProfile.skills?.length || 0,
//         experienceYears: calculateExperienceYears(parsedProfile.experience || []),
//         projectCount: parsedProfile.projects?.length || 0,
//         educationCount: parsedProfile.education?.length || 0,
//         completeness: calculateProfileCompleteness(parsedProfile)
//       });
//     }
//     setIsLoading(false);
//   }, []);
  
//   const calculateExperienceYears = (experiences) => {
//     if (!experiences.length) return 0;
    
//     let totalMonths = 0;
//     experiences.forEach(exp => {
//       const startDate = new Date(exp.startDate);
//       const endDate = exp.endDate ? new Date(exp.endDate) : new Date();
      
//       const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
//                     (endDate.getMonth() - startDate.getMonth());
//       totalMonths += months;
//     });
    
//     return Math.round(totalMonths / 12 * 10) / 10; // Round to 1 decimal place
//   };
  
//   if (isLoading) {
//     return (
//       <div className="dashboard-loading">
//         <div className="spinner"></div>
//         <p>Loading your digital presence...</p>
//       </div>
//     );
//   }
  
//   // If no profile data is found, show the onboarding experience
//   if (!profile) {
//     return (
//       <div className="onboarding-container">
//         <div className="onboarding-content">
//           <div className="onboarding-illustration">
//             <div className="illustration-element profile-circle"></div>
//             <div className="illustration-element chart-bar"></div>
//             <div className="illustration-element skill-badge"></div>
//             <div className="illustration-element project-card"></div>
//           </div>
          
//           <h1>Build Your Digital Identity</h1>
//           <p>Create a stunning professional profile and see your career stats at a glance.</p>
          
//           <div className="feature-list">
//             <div className="feature-item">
//               <div className="feature-icon"><Activity size={24} /></div>
//               <div>Track your professional growth</div>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon"><Award size={24} /></div>
//               <div>Showcase your skills and achievements</div>
//             </div>
//             <div className="feature-item">
//               <div className="feature-icon"><Clock size={24} /></div>
//               <div>Visualize your experience timeline</div>
//             </div>
//           </div>
          
//           <button className="get-started-btn" onClick={() => navigate('/profile')}>
//             Create Your Profile
//           </button>
//         </div>
//       </div>
//     );
//   }
  
//   // Chart data
//   const skillCategoryData = [
//     { name: 'Technical', value: countSkillsByCategory(profile.skills || [], 'technical') },
//     { name: 'Soft', value: countSkillsByCategory(profile.skills || [], 'soft') },
//     { name: 'Tools', value: countSkillsByCategory(profile.skills || [], 'tools') },
//     { name: 'Domain', value: countSkillsByCategory(profile.skills || [], 'domain') },
//   ];
  
//   return (
//     <div className="modern-dashboard">
//       <div className="dashboard-sidebar">
//         <div className="profile-snapshot">
//           <div className="profile-avatar-container">
//             <img 
//               src={profile.avatar || 'https://via.placeholder.com/150'} 
//               alt={profile.name} 
//               className="profile-avatar" 
//             />
//             <div className="profile-completeness-ring" style={{"--percentage": `${stats.completeness}%`}}>
//               <span className="completeness-value">{stats.completeness}%</span>
//             </div>
//           </div>
//           <h2 className="profile-name">{profile.name}</h2>
//           <p className="profile-headline">{profile.title}</p>
//           <p className="profile-location">
//             <span className="location-icon">📍</span> {profile.location || 'Location not set'}
//           </p>
          
//           <div className="profile-social">
//             {profile.social?.github && (
//               <a href={profile.social.github} className="social-icon" target="_blank" rel="noopener noreferrer">
//                 <Github size={20} />
//               </a>
//             )}
//             {profile.social?.linkedin && (
//               <a href={profile.social.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
//                 <Linkedin size={20} />
//               </a>
//             )}
//             {profile.social?.twitter && (
//               <a href={profile.social.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
//                 <Twitter size={20} />
//               </a>
//             )}
//           </div>
          
//           <button className="edit-profile-btn" onClick={() => navigate('/profile')}>
//             Edit Profile
//           </button>
//         </div>
        
//         <div className="dashboard-nav">
//           <div className="nav-item active">
//             <Activity size={20} style={{color:"white"}} />
//             <span style={{color:"white"}}>Overview</span>
//           </div>
//           {/* <div className="nav-item">
//             <Award size={20} />
//             <span>Skills</span>
//           </div>
//           <div className="nav-item">
//             <Calendar size={20} />
//             <span>Experience</span>
//           </div> */}
//         </div>
//       </div>
      
//       <div className="dashboard-main">
//         <div className="dashboard-header">
//           <h1>Your Digital Profile</h1>
//           <div className="last-updated">
//             Last updated: {new Date().toLocaleDateString()}
//           </div>
//         </div>
        
//         <div className="stats-summary">
//           <div className="stat-card">
//             <div className="stat-value">{stats.experienceYears}</div>
//             <div className="stat-label">Years Experience</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-value">{stats.skillCount}</div>
//             <div className="stat-label">Skills</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-value">{stats.projectCount}</div>
//             <div className="stat-label">Projects</div>
//           </div>
//           <div className="stat-card">
//             <div className="stat-value">{stats.educationCount}</div>
//             <div className="stat-label">Education</div>
//           </div>
//         </div>
        
//         <div className="dashboard-grid">
//           <div className="dashboard-card skill-distribution">
//             <h3>Skill Distribution</h3>
//             <div className="chart-container">
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={skillCategoryData}>
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Bar dataKey="value" fill="#6366F1" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
          
//           <div className="dashboard-card recent-experience">
//             <h3>Recent Experience</h3>
//             <div className="timeline">
//               {profile.experience && profile.experience.slice(0, 3).map((exp, idx) => (
//                 <div className="timeline-item" key={idx}>
//                   <div className="timeline-marker"></div>
//                   <div className="timeline-content">
//                     <h4>{exp.title}</h4>
//                     <div className="timeline-company">{exp.company}</div>
//                     <div className="timeline-period">{exp.startDate} - {exp.endDate || 'Present'}</div>
//                   </div>
//                 </div>
//               ))}
//               {(!profile.experience || profile.experience.length === 0) && (
//                 <p className="empty-state">No experience added yet</p>
//               )}
//             </div>
//           </div>
          
//           <div className="dashboard-card featured-skills">
//             <h3>Top Skills</h3>
//             <div className="skills-cloud">
//               {profile.skills && profile.skills.slice(0, 12).map((skill, idx) => (
//                 <div 
//                   className="skill-tag" 
//                   key={idx}
//                   style={{
//                     backgroundColor: getRandomColor(idx),
//                     fontSize: `${Math.max(0.8, Math.min(1.3, 1 + idx * 0.05))}em`
//                   }}
//                 >
//                   {skill}
//                 </div>
//               ))}
//               {(!profile.skills || profile.skills.length === 0) && (
//                 <p className="empty-state">No skills added yet</p>
//               )}
//             </div>
//           </div>
          
//           <div className="dashboard-card featured-projects">
//             <h3>Featured Projects</h3>
//             <div className="projects-gallery">
//               {profile.projects && profile.projects.slice(0, 2).map((project, idx) => (
//                 <div className="project-card" key={idx}>
//                   <div 
//                     className="project-image" 
//                     style={{backgroundColor: getRandomColor(idx + 10)}}
//                   >
//                     {project?.name?.substring(0, 1)}
//                   </div>
//                   <div className="project-info">
//                     <h4>{project.name}</h4>
//                     <p>{project?.description?.substring(0, 100)}...</p>
//                     {project.technologies && (
//                       <div className="project-tech">
//                         {project.technologies.split(',').slice(0, 3).map((tech, i) => (
//                           <span key={i} className="tech-badge">{tech.trim()}</span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//               {(!profile.projects || profile.projects.length === 0) && (
//                 <p className="empty-state">No projects added yet</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper functions
// const calculateProfileCompleteness = (profile) => {
//   let completedFields = 0;
//   let totalFields = 0;
  
//   const basicFields = ['name', 'title', 'location', 'bio', 'avatar', 'email', 'phone'];
//   basicFields.forEach(field => {
//     totalFields++;
//     if (profile[field]) completedFields++;
//   });
  
//   // Social links
//   const socialFields = ['github', 'linkedin', 'twitter', 'portfolio'];
//   socialFields.forEach(field => {
//     totalFields++;
//     if (profile.social && profile.social[field]) completedFields++;
//   });
  
//   // Skills (5 is complete)
//   totalFields += 5; 
//   if (profile.skills && profile.skills.length > 0) {
//     completedFields += Math.min(profile.skills.length, 5);
//   }
  
//   // Experience (2 is complete)
//   totalFields += 2;
//   if (profile.experience && profile.experience.length > 0) {
//     completedFields += Math.min(profile.experience.length, 2);
//   }
  
//   // Education (1 is complete)
//   totalFields += 1;
//   if (profile.education && profile.education.length > 0) {
//     completedFields += Math.min(profile.education.length, 1);
//   }
  
//   // Projects (2 is complete)
//   totalFields += 2;
//   if (profile.projects && profile.projects.length > 0) {
//     completedFields += Math.min(profile.projects.length, 2);
//   }
  
//   return Math.round((completedFields / totalFields) * 100);
// };

// const countSkillsByCategory = (skills, category) => {
//   // This is a placeholder - in a real app, you'd have a category for each skill
//   // Here we're just distributing them evenly for visualization
//   const categoryMap = {
//     'technical': ['JavaScript', 'Python', 'React', 'Node.js', 'SQL'],
//     'soft': ['Communication', 'Leadership', 'Teamwork', 'Problem Solving'],
//     'tools': ['Git', 'Docker', 'AWS', 'Photoshop', 'Figma'],
//     'domain': ['Marketing', 'Finance', 'Healthcare', 'Education']
//   };
  
//   return skills.filter(skill => 
//     categoryMap[category]?.some(cat => 
//       skill.toLowerCase().includes(cat.toLowerCase())
//     )
//   ).length;
// };

// const getRandomColor = (index) => {
//   const colors = [
//     '#6366F1', '#8B5CF6', '#EC4899', '#F43F5E', '#10B981',
//     '#6EE7B7', '#3B82F6', '#60A5FA', '#F59E0B', '#FBBF24'
//   ];
//   return colors[index % colors.length];
// };

// export default Dashboard;


