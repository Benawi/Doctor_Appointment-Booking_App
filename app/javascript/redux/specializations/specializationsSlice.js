// specializationsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
   
const GET_SPECIALIZATION_URL = 'http://127.0.0.1:5000/api/v1/specializations';

// Define an initial state for specializations
const initialState = {
  specializations: [],
  status: 'idle',
  error: null,
};

// Create an async thunk for fetching specializations
export const fetchSpecializations = createAsyncThunk('specializations/fetchSpecializations', async () => {
  try {
    const response = await axios.get(GET_SPECIALIZATION_URL);
    return response.data;
  } catch (err) {
    throw err; // If there's an error, let the rejection action handle it
  }
});

// Create a slice for specializations
const specializationsSlice = createSlice({
  name: 'specializations',
  initialState,
  reducers: {
    // Define any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecializations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSpecializations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.specializations = action.payload;
      })
      .addCase(fetchSpecializations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default specializationsSlice.reducer;
