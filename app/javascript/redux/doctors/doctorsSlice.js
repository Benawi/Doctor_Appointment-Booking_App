import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_DOCTORS_URL = "http://127.0.0.1:5000/api/v1/doctors";
const GET_CREATE_DOCTORS_URL = "http://127.0.0.1:5000/api/v1/create-doctors";

const initialState = {
  doctors: [],
};

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDotors",
  async () => {
    try {
      const response = await axios.get(GET_DOCTORS_URL);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const createDoctors = createAsyncThunk(
  "doctors/createDoctors",
  async (newDoctor, thunkAPI) => {
    try {
      const csrfToken = document.querySelector(
        'meta[name="csrf-token"]'
      ).content;

      const headers = {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken,
      };

      await axios.post(GET_CREATE_DOCTORS_URL, newDoctor, {
        headers,
      });

      const response = await axios.get(GET_DOCTORS_URL);
      thunkAPI.dispatch(fetchDoctors());

      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const deleteDoctorAction = createAsyncThunk(
  "doctors/deleteDoctor",
  async (uuid) => {
    const response = await fetch(`http://127.0.0.1:5000/api/v1/doctors/${uuid}`, {
      method: "DELETE",
    });
    return uuid;
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = "succeeded";
        Object.keys(action.payload).forEach((doctorId) => {
          const doctorData = action.payload[doctorId];

          state.doctors.push({
            id: doctorId,
            real_id: doctorData.id,
            name: doctorData.name,
            photo: doctorData.photo,
            bio: doctorData.bio,
            uuid: doctorData.uuid,

            specialization: doctorData.specialization_name,
            // Add other properties you want to include
          });
        });
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteDoctorAction.fulfilled, (state, action) => {
        const doctorId = action.payload;
        state.doctors = state.doctors.filter(
          (doctor) => doctor.uuid !== doctorId
        );
      });
  },
});

export default doctorsSlice.reducer;
