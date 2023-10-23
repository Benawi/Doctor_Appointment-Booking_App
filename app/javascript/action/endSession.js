// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setGreet } from './greetingSlice';

// export const endSession = createAsyncThunk('session/endSession', async (_, { dispatch }) => {
//   try {
//     // Make a DELETE request to the logout endpoint
//     const response = await fetch('http://127.0.0.1:5000/api/v1/users/sign_out', {
//       method: 'DELETE',
//       credentials: 'include', // Include cookies if you're using session-based authentication
//     });

//     if (response.ok) {
//       // Session has been successfully ended; you can dispatch actions or perform other tasks here.
//       const data = await response.json();
//       dispatch(setGreet(data.message));
//     } else {
//       // Handle the case where the server responds with an error (e.g., the user is not logged in)
//       const errorMessage = await response.text();
//       throw new Error(`Logout failed: ${errorMessage}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// });
