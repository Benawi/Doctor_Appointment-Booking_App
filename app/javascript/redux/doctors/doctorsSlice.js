import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import thunk from 'redux-thunk';

const GET_DOCTORS_URL = 'http://127.0.0.1:5000/api/v1/doctors'

const initialState = {
  doctors: [],
};


export const fetchDoctors = createAsyncThunk('doctors/fetchDotors', async () => {
  try {
    const response = await axios.get(GET_DOCTORS_URL);
    return response.data;
  } catch (err) {
    return err.message
  }
});


export const createDoctors = createAsyncThunk('docotors/createDoctors', async(newDoctor, thunKAPI) => {
  try {
    await axios.post(GET_DOCTORS_URL, newDoctor);
    const response = thunKAPI.dispatch(fetchBooks());
    return [...response.data];
  } catch (err) {
    return err.message;

  }
});


const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        Object.keys(action.payload).forEach((doctorId) => {
          const doctorData = action.payload[doctorId];
          state.doctors.push({
            id: doctorId,
            name: doctorData.name,
            photo:doctorData.photo,
            bio: doctorData.bio,
            // Add other properties you want to include
          });
        });
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export default doctorsSlice.reducer;