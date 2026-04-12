import React, { useState } from 'react';
import './index.css';

function App() {
  // Advanced useState usage: managing an object state instead of a simple primitive
  const [profile, setProfile] = useState({
    name: 'Alex Developer',
    role: 'Frontend Engineer',
    bio: 'I love building beautiful, interactive user interfaces with React and creating seamless user experiences.'
  });

  // Handler function demonstrating the spread operator to preserve existing state properties
  // Original Arrow Function Version:
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfile(prevProfile => ({
  //     ...prevProfile,
  //     [name]: value
  //   }));
  // };

  // Traditional Function Version:
  function handleChange(event) {
    // Extracting the input's name attribute and what the user typed in (value)
    const name = event.target.name;
    const value = event.target.value;

    // Passing a standard function to setProfile instead of an arrow function
    setProfile(function (prevProfile) {
      return {
        ...prevProfile,
        [name]: value
      };
    });
  }

  // Get initials for the avatar
  const initials = profile.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase() || '?';

  return (
    <div className="profile-container">
      {/* Live Preview Card */}
      <div className="card">
        <div className="avatar">{initials}</div>
        <h2 className="name">{profile.name || 'Anonymous'}</h2>
        <h4 className="role">{profile.role || 'No Role specified'}</h4>
        <p className="bio">{profile.bio || 'No bio available.'}</p>
      </div>

      {/* Editor Form */}
      <div className="editor">
        <h3>Edit Profile Object</h3>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Job Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={profile.role}
            onChange={handleChange}
            placeholder="Enter job role"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Biography</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
