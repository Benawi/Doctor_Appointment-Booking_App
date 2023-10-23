import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    // Send a request to the server to log the user out
    try {
      await fetch('http://127.0.0.1:5000/api/v1/users/sign_out', {
        method: 'DELETE',
        credentials: 'include', // Include cookies for session-based authentication
      });

      // Redirect to the login page using the navigate function
      navigate('/login'); // Adjust the path to match your login route
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="main-doctor-container">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
