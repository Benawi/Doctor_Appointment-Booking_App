import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./doctors/doctorsSlice";
import specializationsReducer from "./specializations/specializationsSlice"
import reservationsReducer from "./reservations/reservationsSlice";

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    specializations: specializationsReducer,
    reservations: reservationsReducer
  }
})

export default store;