import { configureStore } from "@reduxjs/toolkit";
import doctorsReducer from "./doctors/doctorsSlice";
import specializationsReducer from "./specializations/specializationsSlice"

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    specializations: specializationsReducer
  }
})

export default store;