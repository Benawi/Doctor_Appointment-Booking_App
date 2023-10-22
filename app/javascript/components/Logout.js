import React from 'react';
import axios from 'axios';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await axios.delete('/users/sign_out'); // Adjust the API endpoint to your routes
      // Handle successful sign-out, e.g., clear user data or redirect
      window.location.replace(window.location.href);
    } catch (error) {
      // Handle sign-out error, e.g., display an error message
    }
  };

  return (
    <button onClick={handleLogout}>1Sign Out</button>
  );
};

export default LogoutButton;
