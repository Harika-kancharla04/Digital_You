import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter,
  Github,
  Globe,
  Camera,
  Edit,
  Save
} from 'lucide-react';

const ProfileHeader = ({ profile = { socialLinks: {} }, setProfile, isEditing, handleEditToggle }) => {
  if (!profile) return <p>Loading profile...</p>;

  const handleChange = (field, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value
    }));
  };

  const handleSocialLinkChange = (platform, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      socialLinks: {
        ...prevProfile.socialLinks,
        [platform]: value
      }
    }));
  };

  return (
    <>
      <div className="profile-actions">
        <button 
          className={`edit-btn ${isEditing ? 'save-btn' : ''}`} 
          onClick={handleEditToggle}
        >
          {isEditing ? <><Save size={16} /> Save Profile</> : <><Edit size={16} /> Edit Profile</>}
        </button>
      </div>

      <div className="profile-header">
        <div className="profile-image">
          {isEditing ? (
            <div className="image-upload">
              <img src="/api/placeholder/200/200" alt="Profile" />
              <div className="upload-overlay">
                <Camera size={24} />
                <span>Upload</span>
              </div>
            </div>
          ) : (
            <img src="/api/placeholder/200/200" alt="Profile" />
          )}
        </div>
        
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                value={profile?.name || ""}
                onChange={(e) => handleChange('name', e.target.value)}
                className="edit-input name-input"
                placeholder="Your Name"
              />
              <input
                type="text"
                value={profile?.title || ""}
                onChange={(e) => handleChange('title', e.target.value)}
                className="edit-input title-input"
                placeholder="Your Professional Title"
              />
            </>
          ) : (
            <>
              <h1>{profile?.name || "Your Name"}</h1>
              <h2>{profile?.title || "Your Title"}</h2>
            </>
          )}
          
          <div className="profile-contact">
            <div className="contact-item">
              <MapPin size={18} />
              {isEditing ? (
                <input
                  type="text"
                  value={profile?.location || ""}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="edit-input location-input"
                  placeholder="Your Location"
                />
              ) : (
                <span>{profile?.location || "Your Location"}</span>
              )}
            </div>

            <div className="contact-item">
              <Mail size={18} />
              {isEditing ? (
                <input
                  type="email"
                  value={profile?.email || ""}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="edit-input email-input"
                  placeholder="Your Email Address"
                />
              ) : (
                <span>{profile?.email || "Your Email"}</span>
              )}
            </div>

            <div className="contact-item">
              <Phone size={18} />
              {isEditing ? (
                <input
                  type="text"
                  value={profile?.phone || ""}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="edit-input phone-input"
                  placeholder="Your Phone Number"
                />
              ) : (
                <span>{profile?.phone || "Your Phone"}</span>
              )}
            </div>
          </div>

          <div className="social-links">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={profile?.socialLinks?.linkedin || ""}
                  onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                  placeholder="LinkedIn URL"
                />
                <input
                  type="text"
                  value={profile?.socialLinks?.twitter || ""}
                  onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                  placeholder="Twitter URL"
                />
                <input
                  type="text"
                  value={profile?.socialLinks?.github || ""}
                  onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                  placeholder="Github URL"
                />
              </>
            ) : (
              <>
                {profile?.socialLinks?.linkedin && <a href={profile.socialLinks.linkedin}><Linkedin /></a>}
                {profile?.socialLinks?.twitter && <a href={profile.socialLinks.twitter}><Twitter /></a>}
                {profile?.socialLinks?.github && <a href={profile.socialLinks.github}><Github /></a>}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
