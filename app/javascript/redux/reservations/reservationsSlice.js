import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const GET_RESERVATIONS_URL = 'http://127.0.0.1:5000/api/v1/reservations'
const CREATE_RESERVATIONS_URL = 'http://127.0.0.1:5000/api/v1/reservation/add'


const initialState = {
  reservations: [],
};


export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  try {
    const response = await axios.get(GET_RESERVATIONS_URL);
    return response.data;
  } catch (err) {
    return err.message
  }
});

export const createReservations = createAsyncThunk('reservations/createReservations', async (newReservation, thunkAPI) => {
  try {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    const headers = {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
    };

    await axios.post(CREATE_RESERVATIONS_URL, newReservation, {
      headers,
    });

    thunkAPI.dispatch(fetchReservations());

    return {};
  } catch (err) {
    return err.message;
  }
});




const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        Object.keys(action.payload).forEach((reservationId) => {
          const reservationData = action.payload[reservationId];
          state.reservations.push({
            id: reservationId,
            user: reservationData.user_name,
            doctor: reservationData.doctor_name,
            reservation_time: reservationData.reservation_time
          });
        });
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export default reservationsSlice.reducer;