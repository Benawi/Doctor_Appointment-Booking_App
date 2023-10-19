import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./doctors/doctorsSlice";

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
  }
})

export default store;