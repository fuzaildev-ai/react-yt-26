import React from 'react'

const App = () => {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <div className="app-container">
      <div className="form-container">
        
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Join us today! Please fill in your details</p>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName"
              placeholder='e.g. John' 
              autoComplete="given-name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName"
              placeholder='e.g. Doe' 
              autoComplete="family-name"
            />
          </div>

          <div className="input-group full-width">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email"
              placeholder='e.g. john@example.com' 
              autoComplete="email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder='Create password' 
              autoComplete="new-password"
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword"
              placeholder='Confirm password' 
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="submit-btn full-width" style={{ marginTop: '0.5rem' }}>
            Create Account
          </button>
        </form>

      </div>
    </div>
  )
}

export default App