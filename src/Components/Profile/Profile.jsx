import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTab';
import AboutTab from './AboutTab';
import ExperienceTab from './ExpTab';
import EducationTab from './EducationTab';
import ProjectsTab from './ProjTab';
import { defaultProfile } from './ProfileData';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
  const navigate = useNavigate(); // If using React Router
  
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
  }, [profile]);

  const handleEditToggle = () => {
    if (isEditing) {
      localStorage.setItem('userProfile', JSON.stringify(profile));
      setShowSaveConfirmation(true);
      
      // Auto-hide the confirmation after 3 seconds
      setTimeout(() => {
        setShowSaveConfirmation(false);
        // Redirect to dashboard after saving
        // If using React Router:
        // navigate('/dashboard');
        // Otherwise:
        // window.location.href = '/dashboard';
      }, 3000);
    }
    setIsEditing(!isEditing);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return <AboutTab profile={profile} setProfile={setProfile} isEditing={isEditing} />;
      case 'experience':
        return <ExperienceTab profile={profile} setProfile={setProfile} isEditing={isEditing} />;
      case 'education':
        return <EducationTab profile={profile} setProfile={setProfile} isEditing={isEditing} />;
      case 'projects':
        return <ProjectsTab profile={profile} setProfile={setProfile} isEditing={isEditing} />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      {showSaveConfirmation && (
        <div className="save-confirmation">
          Profile saved successfully! Redirecting to dashboard...
        </div>
      )}
      
      <ProfileHeader
        profile={profile} 
        setProfile={setProfile} 
        isEditing={isEditing} 
        handleEditToggle={handleEditToggle} 
      />

      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="profile-content">
        {renderContent()}
      </div>
      
      <div className="profile-actions">
        {!isEditing && (
          <button 
            className="view-dashboard-btn"
            onClick={() => {
              // If using React Router:
              // navigate('/dashboard');
              // Otherwise:
              window.location.href = '/dashboard';
            }}
          >
            View Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
